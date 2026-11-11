// Универсальный модуль облачной синхронизации прогресса между устройствами и браузерами
// Поддерживает 3 провайдера без тяжёлых SDK:
// 1. Supabase (PostgreSQL REST API / PostgREST — работает через Project URL + anon key)
// 2. GitHub Gist Cloud Storage (через GitHub API + Personal Access Token)
// 3. Firebase Realtime Database (REST API — через URL базы)
// А также автоматическую передачу настроек на телефон / другой браузер через Magic-ссылку!

const CLOUD_CONFIG_KEY = 'ags_study_hub_cloud_config_v1';

export const SUPABASE_SETUP_SQL = `create table if not exists public.ags_study_hub_sync (
  sync_key text primary key,
  updated_at timestamptz default now(),
  payload jsonb not null
);
alter table public.ags_study_hub_sync disable row level security;`;

const DEFAULT_CLOUD_CONFIG = {
  provider: 'supabase', // 'supabase' | 'gist' | 'firebase'
  supabaseUrl: '', // например: https://xyzcompany.supabase.co
  supabaseAnonKey: '', // публичный anon key (eyJ... или sb_publishable_...)
  firebaseUrl: '', // например: https://ags-study-hub-default-rtdb.europe-west1.firebasedatabase.app
  syncKey: 'grachia-ags-2627', // ключ вашего профиля в базе
  gistId: '',
  githubToken: '',
  autoSync: true,
  lastSyncedAt: null,
};

export function loadCloudConfig() {
  try {
    const raw = localStorage.getItem(CLOUD_CONFIG_KEY);
    if (raw) {
      return { ...DEFAULT_CLOUD_CONFIG, ...JSON.parse(raw) };
    }
  } catch (e) {
    console.error('Failed to load cloud config', e);
  }
  return { ...DEFAULT_CLOUD_CONFIG };
}

export function saveCloudConfig(cfg) {
  try {
    localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(cfg));
  } catch (e) {
    console.error('Failed to save cloud config', e);
  }
}

// Проверяет URL страницы на наличие параметров быстрого подключения (Magic-ссылка для телефона / второго браузера)
export function consumeUrlCloudParams() {
  try {
    if (typeof window === 'undefined' || !window.location || !window.location.href) {
      return { connectedFromUrl: false, config: loadCloudConfig() };
    }
    const url = new URL(window.location.href);
    const params = url.searchParams;
    let updated = false;
    const cfg = loadCloudConfig();

    const sbUrl = params.get('sbUrl');
    const sbKey = params.get('sbKey');
    const fbUrl = params.get('cloudUrl') || params.get('firebaseUrl');
    const syncKey = params.get('syncKey');
    const gistId = params.get('gistId');
    const ghToken = params.get('ghToken');

    if (sbUrl && sbKey) {
      cfg.provider = 'supabase';
      cfg.supabaseUrl = sbUrl.trim().replace(/\/+$/, '');
      cfg.supabaseAnonKey = sbKey.trim();
      if (syncKey) cfg.syncKey = syncKey.trim();
      cfg.autoSync = true;
      updated = true;
    } else if (fbUrl) {
      cfg.provider = 'firebase';
      cfg.firebaseUrl = fbUrl.trim().replace(/\/+$/, '');
      if (syncKey) cfg.syncKey = syncKey.trim();
      cfg.autoSync = true;
      updated = true;
    } else if (gistId && ghToken) {
      cfg.provider = 'gist';
      cfg.gistId = gistId.trim();
      cfg.githubToken = ghToken.trim();
      cfg.autoSync = true;
      updated = true;
    }

    if (updated) {
      saveCloudConfig(cfg);
      params.delete('sbUrl');
      params.delete('sbKey');
      params.delete('cloudUrl');
      params.delete('firebaseUrl');
      params.delete('syncKey');
      params.delete('gistId');
      params.delete('ghToken');
      const cleanUrl =
        url.origin + url.pathname + (params.toString() ? `?${params.toString()}` : '') + url.hash;
      window.history.replaceState({}, document.title, cleanUrl);
      return { connectedFromUrl: true, config: cfg };
    }
  } catch (e) {
    console.error('Error parsing cloud URL params', e);
  }
  return { connectedFromUrl: false, config: loadCloudConfig() };
}

export function isCloudConfigured(cfg = loadCloudConfig()) {
  if (!cfg) return false;
  if (cfg.provider === 'supabase') {
    return Boolean(
      cfg.supabaseUrl &&
        cfg.supabaseUrl.startsWith('https://') &&
        cfg.supabaseAnonKey &&
        cfg.supabaseAnonKey.trim().length > 10
    );
  }
  if (cfg.provider === 'firebase') {
    return Boolean(cfg.firebaseUrl && cfg.firebaseUrl.startsWith('https://'));
  }
  if (cfg.provider === 'gist') {
    return Boolean(cfg.gistId && cfg.githubToken);
  }
  return false;
}

export function buildMagicSyncUrl(cfg = loadCloudConfig()) {
  if (typeof window === 'undefined' || !window.location) return '';
  const baseUrl = (window.location.origin || '') + (window.location.pathname || '/');
  const params = new URLSearchParams();
  if (cfg.provider === 'supabase' && cfg.supabaseUrl && cfg.supabaseAnonKey) {
    params.set('sbUrl', cfg.supabaseUrl.trim().replace(/\/+$/, ''));
    params.set('sbKey', cfg.supabaseAnonKey.trim());
    params.set('syncKey', (cfg.syncKey || 'grachia-ags-2627').trim());
  } else if (cfg.provider === 'firebase' && cfg.firebaseUrl) {
    params.set('cloudUrl', cfg.firebaseUrl.trim().replace(/\/+$/, ''));
    params.set('syncKey', (cfg.syncKey || 'grachia-ags-2627').trim());
  } else if (cfg.provider === 'gist' && cfg.gistId && cfg.githubToken) {
    params.set('gistId', cfg.gistId.trim());
    params.set('ghToken', cfg.githubToken.trim());
  }
  return `${baseUrl}?${params.toString()}`;
}

function getFirebaseEndpoint(cfg) {
  const base = cfg.firebaseUrl.trim().replace(/\/+$/, '').replace(/\.json$/, '');
  const safeKey = encodeURIComponent((cfg.syncKey || 'grachia-ags-2627').trim());
  return `${base}/ags_study_hub/${safeKey}.json`;
}

// Загрузка состояния в облако (Push)
export async function pushStateToCloud(stateObj, cfg = loadCloudConfig()) {
  if (!isCloudConfigured(cfg)) {
    throw new Error('Облачная база данных ещё не настроена.');
  }

  const nowIso = new Date().toISOString();
  const payload = {
    updatedAt: nowIso,
    deviceAgent: typeof navigator !== 'undefined' && navigator.userAgent ? navigator.userAgent.slice(0, 80) : 'web',
    state: {
      theme: stateObj.theme,
      selectedDate: stateObj.selectedDate,
      calMonth: stateObj.calMonth,
      selectedElectives: stateObj.selectedElectives,
      extraThirdElective: stateObj.extraThirdElective,
      completedSubtasks: stateObj.completedSubtasks || {},
      movedSubtasks: stateObj.movedSubtasks || {},
      completedBlocks: stateObj.completedBlocks || {},
      completedWeekSubj: stateObj.completedWeekSubj || {},
      completedUnits: stateObj.completedUnits || {},
      envioStatus: stateObj.envioStatus || {},
      dayNotes: stateObj.dayNotes || {},
      grades: stateObj.grades || {},
      unlockedSolutions: stateObj.unlockedSolutions || {},
    },
  };

  if (cfg.provider === 'supabase') {
    const base = cfg.supabaseUrl.trim().replace(/\/+$/, '');
    const key = cfg.supabaseAnonKey.trim();
    const syncKey = (cfg.syncKey || 'grachia-ags-2627').trim();
    const endpoint = `${base}/rest/v1/ags_study_hub_sync?on_conflict=sync_key`;

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify({
        sync_key: syncKey,
        updated_at: nowIso,
        payload,
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      throw new Error(
        `Ошибка Supabase (${res.status}): убедитесь, что вы выполнили SQL-команду создания таблицы ags_study_hub_sync в SQL Editor. ${errText.slice(0, 120)}`
      );
    }
    saveCloudConfig({ ...cfg, lastSyncedAt: nowIso });
    return { ok: true, updatedAt: nowIso };
  }

  if (cfg.provider === 'firebase') {
    const endpoint = getFirebaseEndpoint(cfg);
    const res = await fetch(endpoint, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error(`Ошибка Firebase (${res.status}): проверьте URL базы и Rules (.read/.write: true)`);
    }
    saveCloudConfig({ ...cfg, lastSyncedAt: nowIso });
    return { ok: true, updatedAt: nowIso };
  }

  if (cfg.provider === 'gist') {
    const res = await fetch(`https://api.github.com/gists/${cfg.gistId.trim()}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${cfg.githubToken.trim()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: 'AGS Study Hub 2026-2027 Cloud Sync State',
        files: {
          'ags_study_hub_state.json': {
            content: JSON.stringify(payload, null, 2),
          },
        },
      }),
    });
    if (!res.ok) {
      throw new Error(`Ошибка GitHub Gist (${res.status}): проверьте Gist ID и токен с правом gist`);
    }
    saveCloudConfig({ ...cfg, lastSyncedAt: nowIso });
    return { ok: true, updatedAt: nowIso };
  }

  throw new Error('Неизвестный провайдер облачной синхронизации.');
}

// Скачивание состояния из облака (Pull)
export async function pullStateFromCloud(cfg = loadCloudConfig()) {
  if (!isCloudConfigured(cfg)) {
    throw new Error('Облачная база данных ещё не настроена.');
  }

  if (cfg.provider === 'supabase') {
    const base = cfg.supabaseUrl.trim().replace(/\/+$/, '');
    const key = cfg.supabaseAnonKey.trim();
    const syncKey = encodeURIComponent((cfg.syncKey || 'grachia-ags-2627').trim());
    const endpoint = `${base}/rest/v1/ags_study_hub_sync?sync_key=eq.${syncKey}&select=payload,updated_at`;

    const res = await fetch(endpoint, {
      method: 'GET',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      throw new Error(
        `Ошибка чтения Supabase (${res.status}): проверьте URL, anon key и наличие таблицы ags_study_hub_sync. ${errText.slice(0, 120)}`
      );
    }

    const rows = await res.json();
    if (!Array.isArray(rows) || rows.length === 0 || !rows[0]?.payload) {
      return { empty: true, state: null, updatedAt: null };
    }

    const row = rows[0];
    const parsedPayload = row.payload;
    const stateData = parsedPayload.state || parsedPayload;
    const updatedAt = row.updated_at || parsedPayload.updatedAt || new Date().toISOString();
    saveCloudConfig({ ...cfg, lastSyncedAt: updatedAt });
    return { empty: false, state: stateData, updatedAt };
  }

  if (cfg.provider === 'firebase') {
    const endpoint = getFirebaseEndpoint(cfg);
    const res = await fetch(endpoint, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error(`Ошибка чтения Firebase (${res.status})`);
    }
    const data = await res.json();
    if (!data || !data.state) {
      return { empty: true, state: null, updatedAt: null };
    }
    saveCloudConfig({ ...cfg, lastSyncedAt: data.updatedAt || new Date().toISOString() });
    return { empty: false, state: data.state, updatedAt: data.updatedAt };
  }

  if (cfg.provider === 'gist') {
    const res = await fetch(`https://api.github.com/gists/${cfg.gistId.trim()}`, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${cfg.githubToken.trim()}`,
      },
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error(`Ошибка чтения GitHub Gist (${res.status})`);
    }
    const gist = await res.json();
    const fileObj = gist.files?.['ags_study_hub_state.json'] || Object.values(gist.files || {})[0];
    if (!fileObj || !fileObj.content) {
      return { empty: true, state: null, updatedAt: null };
    }
    const parsed = JSON.parse(fileObj.content);
    const stateData = parsed.state || parsed;
    saveCloudConfig({ ...cfg, lastSyncedAt: parsed.updatedAt || new Date().toISOString() });
    return { empty: false, state: stateData, updatedAt: parsed.updatedAt };
  }

  throw new Error('Неизвестный провайдер облачной синхронизации.');
}

// Создание нового приватного GitHub Gist в 1 клик (если у пользователя есть только GitHub Token)
export async function createNewCloudGist(githubToken, initialStateObj) {
  const payload = {
    updatedAt: new Date().toISOString(),
    state: initialStateObj,
  };
  const res = await fetch('https://api.github.com/gists', {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${githubToken.trim()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      description: 'AGS Study Hub 2026-2027 Cloud Sync Database',
      public: false,
      files: {
        'ags_study_hub_state.json': {
          content: JSON.stringify(payload, null, 2),
        },
      },
    }),
  });
  if (!res.ok) {
    throw new Error(`Не удалось создать Gist (${res.status}). Проверьте, что у токена включено право "gist".`);
  }
  const data = await res.json();
  return data.id;
}
