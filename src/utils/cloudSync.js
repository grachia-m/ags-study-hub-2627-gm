// Модуль автоматической облачной синхронизации прогресса через Supabase (PostgreSQL Data API)
// Работает полностью автоматически в фоне при каждом изменении состояния (чекбоксы, переносы, заметки, оценки)
// и при открытии приложения на любом устройстве (ноутбук, телефон, планшет, другой браузер).

const CLOUD_CONFIG_KEY = 'ags_study_hub_cloud_config_v2';

export const SUPABASE_SETUP_SQL = `create table if not exists public.ags_study_hub_sync (
  sync_key text primary key,
  updated_at timestamptz default now(),
  payload jsonb not null
);
alter table public.ags_study_hub_sync disable row level security;
grant all on table public.ags_study_hub_sync to anon, authenticated, service_role;`;

// Вшитая конфигурация вашего проекта Supabase по умолчанию (работает сразу на всех устройствах без ввода ключей)
export const DEFAULT_CLOUD_CONFIG = {
  provider: 'supabase',
  supabaseUrl: 'https://pefhcznhfnvzgbplbsqu.supabase.co',
  supabaseAnonKey: 'sb_publishable_ltgD3flM5sHmbJcEvbpidw_pX_8ma4k',
  syncKey: 'grachia-ags-2627',
  autoSync: true,
  lastSyncedAt: null,
};

export function loadCloudConfig() {
  try {
    const raw = localStorage.getItem(CLOUD_CONFIG_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_CLOUD_CONFIG,
        ...parsed,
        supabaseUrl: parsed.supabaseUrl || DEFAULT_CLOUD_CONFIG.supabaseUrl,
        supabaseAnonKey: parsed.supabaseAnonKey || DEFAULT_CLOUD_CONFIG.supabaseAnonKey,
        syncKey: parsed.syncKey || DEFAULT_CLOUD_CONFIG.syncKey,
        autoSync: true,
      };
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

export function isCloudConfigured(cfg = loadCloudConfig()) {
  return Boolean(
    cfg &&
      cfg.supabaseUrl &&
      cfg.supabaseUrl.startsWith('https://') &&
      cfg.supabaseAnonKey &&
      cfg.supabaseAnonKey.trim().length > 10
  );
}

// Формирует заголовки для Supabase REST API:
// Новые ключи sb_publishable_... передаются ТОЛЬКО в заголовке apikey (не в Authorization: Bearer, т.к. это не JWT).
// Старые ключи eyJ... (JWT) можно передавать в обоих заголовках.
function buildSupabaseHeaders(apiKey, extra = {}) {
  const key = apiKey.trim();
  const headers = {
    apikey: key,
    ...extra,
  };
  if (key.startsWith('eyJ')) {
    headers.Authorization = `Bearer ${key}`;
  }
  return headers;
}

// Автоматическая выгрузка состояния в Supabase (Push / UPSERT)
export async function pushStateToCloud(stateObj, cfg = loadCloudConfig()) {
  if (!isCloudConfigured(cfg)) {
    throw new Error('Supabase не настроен.');
  }

  const nowIso = new Date().toISOString();
  const payload = {
    updatedAt: nowIso,
    deviceAgent:
      typeof navigator !== 'undefined' && navigator.userAgent ? navigator.userAgent.slice(0, 80) : 'web',
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
      updatedAt: stateObj.updatedAt || nowIso,
    },
  };

  const base = cfg.supabaseUrl.trim().replace(/\/+$/, '');
  const key = cfg.supabaseAnonKey.trim();
  const syncKey = (cfg.syncKey || 'grachia-ags-2627').trim();
  const endpoint = `${base}/rest/v1/ags_study_hub_sync?on_conflict=sync_key`;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: buildSupabaseHeaders(key, {
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=minimal',
    }),
    body: JSON.stringify({
      sync_key: syncKey,
      updated_at: nowIso,
      payload,
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    const isMissingTable =
      res.status === 404 || errText.includes('PGRST205') || errText.includes('ags_study_hub_sync');
    const err = new Error(
      isMissingTable
        ? 'Таблица ags_study_hub_sync ещё не создана в SQL Editor вашего проекта Supabase.'
        : `Ошибка записи в Supabase (${res.status}): ${errText.slice(0, 120)}`
    );
    err.isMissingTable = isMissingTable;
    throw err;
  }

  saveCloudConfig({ ...cfg, lastSyncedAt: nowIso });
  return { ok: true, updatedAt: nowIso };
}

// Автоматическое скачивание состояния из Supabase при открытии приложения (Pull / SELECT)
export async function pullStateFromCloud(cfg = loadCloudConfig()) {
  if (!isCloudConfigured(cfg)) {
    throw new Error('Supabase не настроен.');
  }

  const base = cfg.supabaseUrl.trim().replace(/\/+$/, '');
  const key = cfg.supabaseAnonKey.trim();
  const syncKey = encodeURIComponent((cfg.syncKey || 'grachia-ags-2627').trim());
  const endpoint = `${base}/rest/v1/ags_study_hub_sync?sync_key=eq.${syncKey}&select=payload,updated_at`;

  const res = await fetch(endpoint, {
    method: 'GET',
    headers: buildSupabaseHeaders(key, {
      Accept: 'application/json',
    }),
    cache: 'no-store',
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    const isMissingTable =
      res.status === 404 || errText.includes('PGRST205') || errText.includes('ags_study_hub_sync');
    const err = new Error(
      isMissingTable
        ? 'Таблица ags_study_hub_sync ещё не создана в SQL Editor вашего проекта Supabase.'
        : `Ошибка чтения из Supabase (${res.status}): ${errText.slice(0, 120)}`
    );
    err.isMissingTable = isMissingTable;
    throw err;
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
