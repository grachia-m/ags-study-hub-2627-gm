// Генерация файла .ics (iCalendar) и прямых ссылок Google Calendar для всех событий курса AGS 2026-2027

function pad2(n) {
  return String(n).padStart(2, '0');
}

function toIcsDateTime(dateStr, timeStr = '09:00') {
  const [y, m, d] = dateStr.split('-');
  const [hh, mm] = (timeStr || '09:00').split(':');
  return `${y}${pad2(m)}${pad2(d)}T${pad2(hh)}${pad2(mm)}00`;
}

function escapeIcsText(str = '') {
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
}

export function buildGoogleCalendarUrl(ev) {
  const start = toIcsDateTime(ev.date, ev.time || '16:00');
  const end = toIcsDateTime(ev.date, ev.endTime || ev.time || '17:30');
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: ev.title,
    dates: `${start}/${end}`,
    details: `${ev.desc || ''}\n\nПлатформа Aeducar: https://aula2.aeducar.es/`,
    location:
      ev.type === 'exam'
        ? 'Centro de Adultos (Aula de autoaprendizaje) / CPEPA Miguel Hernández'
        : 'Aeducar Online (https://aula2.aeducar.es/)',
    ctz: 'Europe/Madrid',
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function generateIcsContent(events, filterType = 'all') {
  const filtered =
    filterType === 'all'
      ? events
      : events.filter((e) => e.type === filterType);

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//AGS Study Hub 2026-2027//CPEPA Miguel Hernandez//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:AGS 2026-27 (Exámenes, Envíos y Tutorías)',
    'X-WR-TIMEZONE:Europe/Madrid',
  ];

  const stamp = '20261107T120000Z';

  for (const ev of filtered) {
    const dtStart = toIcsDateTime(ev.date, ev.time || '09:00');
    const dtEnd = toIcsDateTime(
      ev.date,
      ev.endTime && ev.endTime !== ev.time ? ev.endTime : '23:59'
    );
    const location =
      ev.type === 'exam'
        ? 'Centro de Adultos (Examen Presencial AGS)'
        : 'Aeducar (https://aula2.aeducar.es/)';

    lines.push('BEGIN:VEVENT');
    lines.push(`UID:${ev.id}@ags-study-hub-2627`);
    lines.push(`DTSTAMP:${stamp}`);
    lines.push(`DTSTART;TZID=Europe/Madrid:${dtStart}`);
    lines.push(`DTEND;TZID=Europe/Madrid:${dtEnd}`);
    lines.push(`SUMMARY:${escapeIcsText(ev.title)}`);
    lines.push(
      `DESCRIPTION:${escapeIcsText(
        `${ev.desc || ''}\nПлатформа: https://aula2.aeducar.es/`
      )}`
    );
    lines.push(`LOCATION:${escapeIcsText(location)}`);
    // Напоминание за 24 часа и за 1 час
    lines.push('BEGIN:VALARM');
    lines.push('TRIGGER:-PT24H');
    lines.push('ACTION:DISPLAY');
    lines.push(`DESCRIPTION:Напоминание: ${escapeIcsText(ev.title)}`);
    lines.push('END:VALARM');
    lines.push('BEGIN:VALARM');
    lines.push('TRIGGER:-PT1H');
    lines.push('ACTION:DISPLAY');
    lines.push(`DESCRIPTION:Через 1 час: ${escapeIcsText(ev.title)}`);
    lines.push('END:VALARM');
    lines.push('END:VEVENT');
  }

  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}

export function downloadIcsFile(events, filterType = 'all', filename = 'ags-calendario-2026-2027.ics') {
  const content = generateIcsContent(events, filterType);
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
