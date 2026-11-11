// Детальный учебный план по неделям (W01–W30: 07.11.2026 – 03.06.2027)
// и система «Умной склейки параграфов и переноса неотмеченного остатка» по дням

import { MANDATORY_SUBJECT_IDS, SUBJECTS } from './courseData.js';

const GENERIC_ELECTIVE_WEEK_TOPICS = {
  quimica: {
    1: 'U1–U2 · Строение атома, периодическая система, химическая связь, неорганическая номенклатура и количество вещества (моль, газы, растворы) → подготовка Envío 1ª Eval (до 2 дек)',
    2: 'U3–U4 · Стехиометрия реакций, термохимия, химическая кинетика и химическое равновесие (Kc, Kp, принцип Ле Шателье) → подготовка Envío 2ª Eval (до 3 мар)',
    3: 'U5–U6 · Кислотно-основные реакции (pH), окислительно-восстановительные реакции (ОВР) и органическая химия → подготовка Envío 3ª Eval (до 19 мая)',
  },
  biologia: {
    1: 'U1–U2 · Биоэлементы, биомолекулы (углеводы, липиды, белки, нуклеиновые кислоты), прокариотическая и эукариотическая клетка, митоз и мейоз → Envío 1ª Eval (до 2 дек)',
    2: 'U3 · Клеточный метаболизм (ферменты, клеточное дыхание, брожение, фотосинтез) и законы генетики Менделя → Envío 2ª Eval (до 3 мар)',
    3: 'U4–U5 · Молекулярная генетика (репликация, транскрипция, трансляция), мутации, биотехнология, микробиология и иммунология → Envío 3ª Eval (до 19 мая)',
  },
  geografia: {
    1: 'U1–U2 · Географическое пространство Испании и Арагона: морфоструктуры рельефа, климатические области, климограммы, гидрография и растительность → Envío 1ª Eval (до 2 дек)',
    2: 'U3–U4 · Демография Испании, миграции, система расселения и урбанизация, аграрный сектор и промышленность → Envío 2ª Eval (до 3 мар)',
    3: 'U5 · Третичный сектор экономики (транспорт, туризм, торговля), территориальная организация Испании и роль в ЕС → Envío 3ª Eval (до 19 мая)',
  },
  empresa: {
    1: 'U1–U3 · Предприятие и предприниматель, организационно-правовые формы (SL, SA), налогообложение, среда компании (DAFO, Портер) и стратегия → Envío 1ª Eval (до 2 дек)',
    2: 'U4–U6 · Управление персоналом (RRHH), производственная функция, постоянные и переменные издержки, точка безубыточности (punto muerto) и маркетинг-микс → Envío 2ª Eval (до 3 мар)',
    3: 'U7–U9 · Бухгалтерский баланс (Activo, Pasivo, Patrimonio Neto), отчёт о прибылях и убытках, финансовые коэффициенты и оценка инвестиций (Payback, VAN, TIR) → Envío 3ª Eval (до 19 мая)',
  },
};

const BASE_WEEKS_PLAN = [
  // ==================== 1ª EVALUACIÓN (W01 – W06: 07.11.2026 – 20.12.2026) ====================
  {
    week: 'W01',
    eval: 1,
    phase: 'Спринт 1ª Evaluación: База и Unidad 1',
    dates: '07.11 – 15.11.2026',
    startDate: '2026-11-07',
    endDate: '2026-11-15',
    isSprint: true,
    deliverable: 'Вход в Aeducar (сброс таймера 3 недель) + старт U1 по всем выбранным предметам',
    subjects: {
      mates: 'U1 §1–4 · Целые числа, дроби («del resto»), проценты (индексы изменения), пропорции (прямая/обратная/сложная) + конспект teoria-mates-1',
      fisica: 'UD1 ч.1 · Инструменты (СИ, перевод единиц, векторы, тригонометрия) + MRU, MRUA, свободное падение + конспект teoria-fisica-1',
      tecno: 'U1 · La energía: единицы (J, cal, kWh, tep), работа, мощность, КПД (η), виды энергии и электростанции + конспект teoria-tecno-1',
      lengua: 'U1 · Коммуникация, 9 частей речи (CUADRO MORFOLOGÍA), наклонения глагола, объективность/субъективность, модальность + конспект teoria-espanol-1',
      ingles: 'U1 + U2 (нач.) · Present Simple/Continuous, Pronouns, Adverbs of frequency, вопросы + Past Simple/Continuous + Autoevaluación U1',
      digital: 'Tema 1 · Операторы поиска (AND, OR, NOT, site:, filetype:), метод SIFT, ИИ-промпты, лицензии Creative Commons, стили Word',
      quimica: 'U1 · Модели атома, электронная конфигурация, периодическая таблица и неорганическая номенклатура',
      biologia: 'U1 · Биоэлементы, вода, минеральные соли, углеводы и липиды (структура и функции)',
      geografia: 'U1 · Географическое положение Испании и морфоструктурные единицы рельефа Иберийского полуострова',
      empresa: 'U1 · Понятие предприятия, функции предпринимателя, элементы компании и КСО',
    },
  },
  {
    week: 'W02',
    eval: 1,
    phase: 'Спринт 1ª Evaluación: Закрытие U1 и старт U2 + первые Envío',
    dates: '16.11 – 22.11.2026',
    startDate: '2026-11-16',
    endDate: '2026-11-22',
    isSprint: true,
    deliverable: 'Готовы: Competencia Digital Envío 1 (.docx) + Matemáticas Envío U1 (PDF)',
    subjects: {
      mates: 'Завершение U1 → чистовик Actividades de envío U1 (6 задач) + старт U2 §1–3 (многочлены, формулы сокращённого умножения, уравнения 1 и 2 степени)',
      fisica: 'UD1 ч.2 · Горизонтальный и параболический бросок, равномерное движение по окружности (MCU) → задачи №1–3 из Envío 1 + старт UD2 Dinámica',
      tecno: 'U2 ч.1 · Mecánica: крутящий момент (par motor), мощность P=M·ω, шестерни, редукторы, шкивы, преобразование движения + разбор Soluciones U1',
      lengua: 'U1 §5–6 (типы текстов: гуманитарные и научно-технические, литература) + сверка с SOLUCIONARIO U-1 + старт U2 (функции языка, синтагмы)',
      ingles: 'U2 · Present Perfect (Simple/Continuous), Past Perfect, used to, Rephrasing + Modelo Examen U1 и U2 + старт U3 (Future forms)',
      digital: 'Сборка и проверка файла Martirosian_Grachia_ActividadEnvio1.docx по всем 9 пунктам чек-листа (без скрытой ловушки про астронавта!)',
      quimica: 'U2 ч.1 · Химическая связь (ионная, ковалентная, металлическая) и свойства веществ + задачи Envío U1',
      biologia: 'U1 ч.2 + U2 нач. · Белки, ферменты, ДНК/РНК + строение прокариотической и эукариотической клетки',
      geografia: 'U1 ч.2 + U2 нач. · Рельеф Арагона и архипелагов + климатические факторы Испании',
      empresa: 'U2 · Организационно-правовые формы предприятий (ИП, SL, SA, кооперативы) и налоги',
    },
  },
  {
    week: 'W03',
    eval: 1,
    phase: 'Спринт 1ª Evaluación: Завершение U2 + финализация всех Envío',
    dates: '23.11 – 29.11.2026',
    startDate: '2026-11-23',
    endDate: '2026-11-29',
    isSprint: true,
    deliverable: 'Готовы: Matemáticas Envío U2 + Lengua Envío 1ª Eval + Envío по 2 выбранным спецпредметам',
    subjects: {
      mates: 'U2 §4–8 · Системы 2×2 и 3×3 (метод Гаусса), текстовые алгебраические задачи → чистовик Actividades de envío U2 (5 задач)',
      fisica: 'UD2 Dinámica · Законы Ньютона, трение, наклонная плоскость, равновесие на тросах, связанные тела с блоком → задачи №4–6 из Envío 1',
      tecno: 'U2 ч.2 · Termodinámica: 1 и 2 начала, цикл Карно, тепловые двигатели и холодильные машины + разбор Soluciones U2',
      lengua: 'U2 · Пассивный/безличный залог (EXPLICACIONES CLASE 26_10), свойства текста (adecuación, coherencia, cohesión) → выполнение ACTIVIDAD DE ENVÍO 1º EVAL.docx',
      ingles: 'U3 · Future Continuous/Perfect, time clauses, indirect questions + Modelo Examen U3 → выполнение ACFGS INGLÉS ACTIVIDAD PRIMER ENVÍO.docx',
      digital: 'Финальная вычитка и загрузка работы Tema 1 в Aeducar + повторение теории Tema 1 к тесту',
      quimica: 'U2 ч.2 · Законы идеальных газов, концентрация растворов и молярность → чистовик Envío 1ª Eval (U1–U2)',
      biologia: 'U2 · Органоиды клетки, клеточный цикл, митоз и мейоз → чистовик Envío 1ª Eval (U1–U2)',
      geografia: 'U2 · Анализ климограмм, речные бассейны и биогеография Испании → чистовик Envío 1ª Eval (U1–U2)',
      empresa: 'U3 · Анализ внешней среды (DAFO, 5 сил Портера) и стратегия роста → чистовик Envío 1ª Eval (U1–U3)',
    },
  },
  {
    week: 'W04',
    eval: 1,
    phase: 'ДЕДЛАЙН СДАЧИ 1ª EVAL (2 декабря) + переход к экзаменационному тренингу',
    dates: '30.11 – 06.12.2026',
    startDate: '2026-11-30',
    endDate: '2026-12-06',
    isSprint: true,
    deliverable: '🔥 СРЕДА, 2 ДЕКАБРЯ (до 23:59): Загрузка всех Actividades de Envío 1ª Evaluación в Aeducar!',
    subjects: {
      mates: 'Пн–Ср: проверка и отправка Envío U1 и U2. Чт–Вс: тренировка экзаменационных задач U1–U2 на время (проценты, пропорции, уравнения, Гаусс)',
      fisica: 'Пн–Ср: отправка Envío 1 (UD1+UD2). Чт–Вс: решение задач без формуляра (встречное движение, парабола, наклонная плоскость с трением)',
      tecno: 'Повторение всех формул U1 (Energía) и U2 (Mecánica/Termodinámica): КПД, редукторы, цикл Карно — прорешивание без подглядывания в ответы',
      lengua: 'Пн–Ср: отправка Envío 1ª Eval. Чт–Вс: тренировка формулировки TEMA (<12 слов без глагола), морфологического разбора и типов текста',
      ingles: 'Пн–Ср: отправка Primer Envío (.doc/.docx с шапкой!). Чт–Вс: тренировка Reading True/False с цитированием и Rephrasing U1–U3',
      digital: 'Пн–Ср: проверка статуса доставки Envío 1. Чт–Вс: повторение операторов поиска, SIFT и лицензий Creative Commons',
    },
  },
  {
    week: 'W05',
    eval: 1,
    phase: 'Предэкзаменационный интенсив 1ª Evaluación (Simulacros)',
    dates: '07.12 – 13.12.2026',
    startDate: '2026-12-07',
    endDate: '2026-12-13',
    isSprint: true,
    deliverable: 'Полные пробные экзамены (Simulacros) по всем выбранным предметам на время',
    subjects: {
      mates: 'Simulacro 1ª Eval (U1 + U2): 90 минут без подсказок, разбор ошибок в дробях, процентах и системах 3×3',
      fisica: 'Simulacro 1ª Eval (UD1 + UD2): 90 минут + онлайн-тутория в среду 09.12 (18:15)',
      tecno: 'Simulacro 1ª Eval (U1 + U2): задачи на перевод единиц, КПД станций, зубчатые передачи и цикл Карно + тутория в четверг 10.12 (20:15)',
      lengua: 'Simulacro 1ª Eval (U1 + U2): разбор текста, определение темы, 9 частей речи, пассивные и безличные конструкции, функции языка',
      ingles: 'Simulacro 1ª Eval (U1–U3): прорешивание ACGS_Ingles_u1..u3_mexamen26.pdf на время + шаблон эссе на 100–120 слов',
      digital: 'Повторение ключевых определений Tema 1 (булевы операторы, SIFT, промпты, CC BY/NC/ND/SA, функции Word)',
    },
  },
  {
    week: 'W06',
    eval: 1,
    phase: 'НЕДЕЛЯ ОЧНЫХ ЭКЗАМЕНОВ 1ª EVALUACIÓN (15 и 17 декабря)',
    dates: '14.12 – 20.12.2026',
    startDate: '2026-12-14',
    endDate: '2026-12-20',
    isExamWeek: true,
    deliverable: '🎯 ВТ 15.12 (Competencias: 16:00 Lengua, 17:30 Mates, 19:00 Digital) и ЧТ 17.12 (Específicas: 16:00 / 17:30 / 19:00)',
    subjects: {
      mates: 'Пн 14.12: экспресс-повтор формул U1–U2. ВТ 15.12 в 17:30 — ОЧНЫЙ ЭКЗАМЕН!',
      fisica: 'Ср 16.12: экспресс-повтор формуляров UD1–UD2. ЧТ 17.12 в 17:30 — ОЧНЫЙ ЭКЗАМЕН!',
      tecno: 'Ср 16.12: повтор формул U1–U2. ЧТ 17.12 в 19:00 — ОЧНЫЙ ЭКЗАМЕН!',
      lengua: 'Пн 14.12: экспресс-повтор таблиц морфологии и типов текста. ВТ 15.12 в 16:00 — ОЧНЫЙ ЭКЗАМЕН!',
      ingles: 'Ср 16.12 (20:15 тутория): повтор шаблонов цитирования и эссе. ЧТ 17.12 в 16:00 — ОЧНЫЙ ЭКЗАМЕН!',
      digital: 'Пн 14.12: повтор чек-листа Tema 1. ВТ 15.12 в 19:00 — ОЧНЫЙ ЭКЗАМЕН! Пт–Вс: заслуженный отдых!',
    },
  },

  // ==================== 2ª EVALUACIÓN (W07 – W19: 21.12.2026 – 21.03.2027) ====================
  {
    week: 'W07',
    eval: 2,
    phase: 'Рождественская неделя — плавный старт 2ª Evaluación',
    dates: '21.12 – 27.12.2026',
    startDate: '2026-12-21',
    endDate: '2026-12-27',
    isHoliday: true,
    deliverable: 'Облегчённый график (24–25.12 выходные). Знакомство с материалами 2-го триместра',
    subjects: {
      mates: 'U3 §1–2 · Величины, СИ, кратные и дольные приставки, факторы конверсии',
      fisica: 'UD3 §1 · Механическая работа (W = F·Δr·cosα), положительная и отрицательная работа',
      tecno: 'U3 §1 · Neumática: абсолютное и манометрическое давление, расход воздуха (caudal), закон Бойля-Мариотта',
      lengua: 'Тутория Пн 21.12 (19:15) + обзор U3 (правила составления Resumen и Tema текста)',
      ingles: 'U4 ч.1 · There is/are, исчисляемые и неисчисляемые существительные, множественное число, артикли (a/an/the/zero)',
      digital: 'Обзор Tema 2 (Creación de contenidos digitales): структура и требования ко 2-му триместру',
    },
  },
  {
    week: 'W08',
    eval: 2,
    phase: 'Новогодняя неделя — базовые темы 2ª Evaluación',
    dates: '28.12.2026 – 03.01.2027',
    startDate: '2026-12-28',
    endDate: '2027-01-03',
    isHoliday: true,
    deliverable: 'Облегчённый график (31.12 и 01.01 выходные)',
    subjects: {
      mates: 'U3 §3 · Теорема Пифагора и расчёт периметров сложных фигур',
      fisica: 'UD3 §2 · Кинетическая энергия (теорема о кинетической энергии) и потенциальная энергия (гравитационная и упругая)',
      tecno: 'U3 §2 · Пневмоцилиндры простого и двойного действия: сила выдвижения/возврата и расход воздуха',
      lengua: 'U3 · Практика написания краткого изложения (Resumen = 20–25% исходного текста без личного мнения)',
      ingles: 'U4 ч.2 · Some/any/no, квантификаторы (much, many, a lot of, few, little, fewer, less)',
      digital: 'Tema 2 §1 · Цифровые инструменты и среды для совместной работы',
    },
  },
  {
    week: 'W09',
    eval: 2,
    phase: '2ª Evaluación: Глубокая проработка Unidades 3 / 4',
    dates: '04.01 – 10.01.2027',
    startDate: '2027-01-04',
    endDate: '2027-01-10',
    deliverable: 'Полное включение в рабочий ритм после праздников',
    subjects: {
      mates: 'U3 §4 · Подобие треугольников, теорема Фалеса (задачи с тенями), масштабы карт и планов',
      fisica: 'UD3 §3 · Закон сохранения механической энергии, работа сил трения, мощность и КПД',
      tecno: 'U3 §3–4 · Пневматические распределители (válvulas 2/2, 3/2, 5/2), схемы и решение задач из Soluciones U3',
      lengua: 'U3 · Внешняя и внутренняя структура текста (дедуктивная, индуктивная, рамочная), типы коннекторов',
      ingles: 'U4 ч.3 · Clauses of contrast (although, even though, despite, in spite of), отрицательные префиксы + Modelo Examen U4',
      digital: 'Tema 2 §2 · Цифровая коммуникация, сетевой этикет (netiqueta) + тутория Чт 07.01 (20:15)',
    },
  },
  {
    week: 'W10',
    eval: 2,
    phase: '2ª Evaluación: Завершение U3 по Математике и Физике',
    dates: '11.01 – 17.01.2027',
    startDate: '2027-01-11',
    endDate: '2027-01-17',
    deliverable: 'Черновик Matemáticas Envío U3 (задачи 1–3)',
    subjects: {
      mates: 'U3 §5–7 · Тригонометрия (sin, cos, tan), решение прямоугольных треугольников и прикладных задач с углами',
      fisica: 'Завершение UD3 Energía: решение задач №1 и №2 (кран и американские горки) из Envío 2 - Física AGS',
      tecno: 'Старт U4 Materiales §1–2 · Классификация и механические свойства материалов, виды нагрузок (растяжение, сжатие, изгиб, кручение, срез)',
      lengua: 'U3 · Лексико-семантическая связность (синонимия, гиперонимия, изотопия) и практика полного разбора текста',
      ingles: 'Старт U5 · Порядок прилагательных, сравнительная и превосходная степень (comparatives & superlatives)',
      digital: 'Tema 2 §3 · Цифровая идентичность, цифровой след и репутация в сети',
    },
  },
  {
    week: 'W11',
    eval: 2,
    phase: '2ª Evaluación: Сдача в копилку Matemáticas U3 + старт Электромагнетизма',
    dates: '18.01 – 24.01.2027',
    startDate: '2027-01-18',
    endDate: '2027-01-24',
    deliverable: 'Готов чистовик Matemáticas Envío U3 (5 задач)',
    subjects: {
      mates: 'Оформление чистовика Actividades de envío U3 (5 задач — строго по видимым на чертежах числам!) + старт U4 §1 (площади многоугольников)',
      fisica: 'Старт UD4 Electromagnetismo §1–3 · Закон Кулона, вектор напряжённости электрического поля E, принцип суперпозиции',
      tecno: 'U4 §3 · Чёрные и цветные металлы, диаграмма железо-углерод (стали и чугуны), термообработка (закалка, отпуск, отжиг)',
      lengua: 'Старт U4 · Аргументативный текст: тезис и виды аргументов (авторитет, статистика, пример, аналогия)',
      ingles: 'U5 ч.2 · Конструкции as...as, the more...the more, too и enough, предлоги места и движения',
      digital: 'Tema 2 §4 · Создание и редактирование мультимедийного и текстового контента',
    },
  },
  {
    week: 'W12',
    eval: 2,
    phase: '2ª Evaluación: Геометрия объёмов, Электростатика и Материалы',
    dates: '25.01 – 31.01.2027',
    startDate: '2027-01-25',
    endDate: '2027-01-31',
    deliverable: 'Завершение Inglés U5 + задачи по электростатике Envío 2 Física',
    subjects: {
      mates: 'U4 §2–3 · Многогранники (призмы, пирамиды, усечённые пирамиды): расчёт площади поверхности и объёма',
      fisica: 'UD4 §4–5 · Потенциальная энергия и электрический потенциал V, работа поля → решение задач №3 и №4 из Envío 2 Física',
      tecno: 'U4 §4–5 · Полимеры, древесина + механические испытания: растяжение (закон Гука σ = E·ε), твёрдость по Бринеллю/Виккерсу, ударная вязкость по Шарпи',
      lengua: 'U4 · Сложносочинённые предложения (coordinadas copulativas, adversativas, disyuntivas, explicativas) и бессоюзные (yuxtapuestas)',
      ingles: 'U5 ч.3 · Суффиксы деятеля (agent nouns), Autoevaluación U5 + прорешивание Modelo Examen U5',
      digital: 'Tema 2 §5 · Форматы файлов, авторское право, лицензии и правильное цитирование',
    },
  },
  {
    week: 'W13',
    eval: 2,
    phase: '2ª Evaluación: Тела вращения, Магнетизм и Косвенная речь (Inglés U6)',
    dates: '01.02 – 07.02.2027',
    startDate: '2027-02-01',
    endDate: '2027-02-07',
    deliverable: 'Полный разбор второго спецпредмета и геометрии U4',
    subjects: {
      mates: 'U4 §4–5 · Тела вращения (цилиндр, конус, шар) и прикладные геометрические задачи с плотностью и вместимостью',
      fisica: 'UD4 §6–7 · Магнитное поле, сила Лоренца на движущийся заряд (F = q·v·B·sinα), движение заряда по окружности в магнитном поле',
      tecno: 'Решение всех экзаменационных задач U4 (диаграмма растяжения, Бринелль, Шарпи) по файлу Soluciones U4 materiales',
      lengua: 'U4 · Практика написания аргументативного эссе (150–200 слов: введение, тезис, 2 аргумента с коннекторами, вывод)',
      ingles: 'Старт U6 · Повелительное наклонение, Reported Speech (утверждения и команды, сдвиг времён и указателей времени)',
      digital: 'Старт выполнения обязательной работы Envío 2ª Evaluación по Competencia Digital (Tema 2)',
    },
  },
  {
    week: 'W14',
    eval: 2,
    phase: '2ª Evaluación: Завершение теории U4/U6 и решение Envío 2ª Eval',
    dates: '08.02 – 14.02.2027',
    startDate: '2027-02-08',
    endDate: '2027-02-14',
    deliverable: 'Готов чистовик Matemáticas Envío U4 (5 задач)',
    subjects: {
      mates: 'Решение и чистовое оформление Actividades de envío U4 (5 задач: консервная банка, стеклянная пирамида, силос, теннисные мячи, бетонная труба)',
      fisica: 'UD4 §8–10 · Сила Ампера на проводник с током, поле прямого тока и соленоида, закон электромагнитной индукции Фарадея-Ленца',
      tecno: 'Комплексное повторение связки U3 (Neumática) + U4 (Materiales): тренировка расчётов без подглядывания',
      lengua: 'Выполнение черновика Actividad de Envío 2ª Evaluación по испанскому языку',
      ingles: 'U6 ч.2 · Reported questions, requests, suggestions, reporting verbs + clauses of cause (because, since, as, so/such...that)',
      digital: 'Завершение и проверка работы Envío Tema 2 по Competencia Digital',
    },
  },
  {
    week: 'W15',
    eval: 2,
    phase: '2ª Evaluación: Сборка чистовиков спецпредметов',
    dates: '15.02 – 21.02.2027',
    startDate: '2027-02-15',
    endDate: '2027-02-21',
    deliverable: 'Готов чистовик Física Envío 2 (7 задач)',
    subjects: {
      mates: 'Повторение и закрепление U3 (Тригонометрия/Фалес) и U4 (Площади/Объёмы) по задачам из мануала',
      fisica: 'Решение задач №5–7 (протон в магнитном поле, проводник 50 см, соленоид) и сборка чистового PDF Envío 2 - Física AGS',
      tecno: 'Прорешивание контрольных вариантов по Пневматике и Материалам',
      lengua: 'Финальная вычитка и оформление чистовика Actividad de Envío 2ª Evaluación',
      ingles: 'U6 ч.3 · Суффиксы существительных, Autoevaluación U6 + Modelo Examen U6 → начало ACFGS INGLÉS ACTIVIDAD SEGUNDO ENVÍO.docx',
      digital: 'Повторение теории Tema 2 по презентации и чек-листам',
    },
  },
  {
    week: 'W16',
    eval: 2,
    phase: '2ª Evaluación: Финальная готовность всех работ Envío 2ª Eval',
    dates: '22.02 – 28.02.2027',
    startDate: '2027-02-22',
    endDate: '2027-02-28',
    deliverable: 'Все работы 2ª Evaluación готовы к отправке!',
    subjects: {
      mates: 'Проверка обоих сканов PDF (Envío U3 и Envío U4) перед загрузкой в Aeducar',
      fisica: 'Проверка PDF Envío 2 (все 7 задач с чертежами и единицами СИ)',
      tecno: 'Подготовка вопросов к предэкзаменационной тутории по U3–U4',
      lengua: 'Проверка работы 2ª Eval по критериям орфографии и стиля',
      ingles: 'Финализация ACFGS INGLÉS ACTIVIDAD SEGUNDO ENVÍO.docx (шапка ЗАГЛАВНЫМИ, формат Word, ≥100 слов в эссе)',
      digital: 'Финальная проверка работы Tema 2 перед отправкой',
    },
  },
  {
    week: 'W17',
    eval: 2,
    phase: 'ДЕДЛАЙН СДАЧИ 2ª EVAL (3 марта) + старт предэкзаменационного повтора',
    dates: '01.03 – 07.03.2027',
    startDate: '2027-03-01',
    endDate: '2027-03-07',
    deliverable: '🔥 СРЕДА, 3 МАРТА (до 23:59): Загрузка всех Actividades de Envío 2ª Evaluación в Aeducar!',
    subjects: {
      mates: 'Пн–Ср: загрузка Envío U3 и U4. Чт–Вс: тренировка задач на теорему Фалеса, тригонометрию и объёмы составных тел',
      fisica: 'Пн–Ср: загрузка Envío 2 + тутория Ср 03.03 (18:15). Чт–Вс: тренировка задач на сохранение энергии с трением и закон Кулона/Лоренца',
      tecno: 'Чт 04.03 (20:15 тутория): повтор расчётов пневмоцилиндров и диаграммы растяжения (закон Гука)',
      lengua: 'Пн–Ср: загрузка Envío 2ª Eval. Чт–Вс: тренировка структуры текста, коннекторов и аргументации',
      ingles: 'Пн–Ср: загрузка Segundo Envío. Чт–Вс: повтор грамматики U1–U6 (экзамен накопительный!)',
      digital: 'Пн–Ср: загрузка Envío Tema 2. Чт–Вс: повтор ключевых понятий Tema 2',
    },
  },
  {
    week: 'W18',
    eval: 2,
    phase: 'Предэкзаменационный интенсив 2ª Evaluación (Simulacros)',
    dates: '08.03 – 14.03.2027',
    startDate: '2027-03-08',
    endDate: '2027-03-14',
    deliverable: 'Пробные экзамены 2ª Evaluación по всем выбранным предметам',
    subjects: {
      mates: 'Simulacro 2ª Eval (U3 + U4) + онлайн-тутория Ср 10.03 (19:15)',
      fisica: 'Simulacro 2ª Eval (UD3 + UD4): 4 задачи на время (энергия, горки, электростатика, магнетизм/индукция)',
      tecno: 'Simulacro 2ª Eval (U3 + U4): задачи по пневматике и испытаниям материалов на время',
      lengua: 'Simulacro 2ª Eval (U3 + U4): полный комментарий текста + синтаксический разбор',
      ingles: 'Simulacro 2ª Eval (U1–U6): прорешивание моделей экзамена U4–U6 + тутория Ср 10.03 (20:15)',
      digital: 'Повтор Tema 2 + онлайн-тутория Чт 11.03 (20:15)',
    },
  },
  {
    week: 'W19',
    eval: 2,
    phase: 'НЕДЕЛЯ ОЧНЫХ ЭКЗАМЕНОВ 2ª EVALUACIÓN (16 и 18 марта)',
    dates: '15.03 – 21.03.2027',
    startDate: '2027-03-15',
    endDate: '2027-03-21',
    isExamWeek: true,
    deliverable: '🎯 ВТ 16.03 (Competencias) и ЧТ 18.03 (Materias Específicas)',
    subjects: {
      mates: 'Пн 15.03: повтор формул геометрии и тригонометрии. ВТ 16.03 в 17:30 — ОЧНЫЙ ЭКЗАМЕН!',
      fisica: 'Ср 17.03 (18:15 тутория): повтор формуляров UD3–UD4. ЧТ 18.03 в 17:30 — ОЧНЫЙ ЭКЗАМЕН!',
      tecno: 'Ср 17.03: повтор формул U3–U4. ЧТ 18.03 в 19:00 — ОЧНЫЙ ЭКЗАМЕН!',
      lengua: 'Пн 15.03 (19:15 тутория): финальный повтор. ВТ 16.03 в 16:00 — ОЧНЫЙ ЭКЗАМЕН!',
      ingles: 'Ср 17.03: повтор Rephrasing U1–U6. ЧТ 18.03 в 16:00 — ОЧНЫЙ ЭКЗАМЕН!',
      digital: 'Пн 15.03: повтор Tema 2. ВТ 16.03 в 19:00 — ОЧНЫЙ ЭКЗАМЕН! Пт–Вс: отдых!',
    },
  },

  // ==================== 3ª EVALUACIÓN Y FINAL (W20 – W30: 22.03.2027 – 03.06.2027) ====================
  {
    week: 'W20',
    eval: 3,
    phase: 'Старт 3ª Evaluación + начало каникул Semana Santa',
    dates: '22.03 – 28.03.2027',
    startDate: '2027-03-22',
    endDate: '2027-03-28',
    isHoliday: true,
    deliverable: 'Плавный вход в темы 3-го триместра (25–28.03 каникулы)',
    subjects: {
      mates: 'U5 §1–2 · Одномерная статистика: таблицы частот (fᵢ, Fᵢ, hᵢ, Hᵢ, %) и статистические графики + тутория Ср 24.03 (19:15)',
      fisica: 'UD5 §1–2 · Гармонические колебания (MAS) и характеристики механических волн (A, λ, T, f, k, ω, v = λ·f)',
      tecno: 'U5 §1 · Electrónica Digital: системы счисления (двоичная, шестнадцатеричная), перевод чисел, код ASCII',
      lengua: 'Старт U5 · Сложноподчинённые предложения (subordinadas sustantivas, adjetivas y adverbiales)',
      ingles: 'U7 · Passive Voice (все времена, двухдополненийный пассив, безличный пассив It is said that..., causative have/get) + тутория Ср 24.03 (20:15)',
      digital: 'Старт Tema 3 (Seguridad y sostenibilidad): обзор угроз и структуры темы',
    },
  },
  {
    week: 'W21',
    eval: 3,
    phase: 'Неделя Semana Santa — спокойная проработка базовых параграфов',
    dates: '29.03 – 04.04.2027',
    startDate: '2027-03-29',
    endDate: '2027-04-04',
    isHoliday: true,
    deliverable: 'Закрепление первых тем 3ª Evaluación',
    subjects: {
      mates: 'U5 §3 · Параметры централизации (среднее, медиана, мода, квартили/перцентили) и разброса (дисперсия, σ, коэффициент вариации)',
      fisica: 'UD5 §3 · Уравнение бегущей гармонической волны y(x,t) = A·sen(ωt ∓ kx + φ₀) → разбор задач №1–3 из Envío 3 Física',
      tecno: 'U5 §2 · Булева алгебра, таблицы истинности, канонические формы (минтермы и макстермы), логические вентили (AND, OR, NOT, NAND, NOR, XOR)',
      lengua: 'U5 · Практика синтаксического анализа подчинённых предложений и орфографии',
      ingles: 'U7 · Завершение упражнений U7 + прорешивание ACGS_Ingles_u7_mexamen26.pdf со сверкой по ответам',
      digital: 'Tema 3 §1 · Вредоносное ПО (malware), фишинг и социальная инженерия',
    },
  },
  {
    week: 'W22',
    eval: 3,
    phase: '3ª Evaluación: Двумерная статистика, Акустика/Оптика и Карты Карно',
    dates: '05.04 – 11.04.2027',
    startDate: '2027-04-05',
    endDate: '2027-04-11',
    deliverable: 'Глубокая проработка тем 3-го триместра',
    subjects: {
      mates: 'U5 §4 · Двумерная статистика, ковариация, корреляция и регрессия + чистовик Envío U5 + тутория Ср 07.04 (19:15)',
      fisica: 'UD5 §4–6 · Интенсивность звука и громкость в децибелах (дБ), отражение, преломление света (закон Снеллиуса) и предельный угол + тутория Ср 07.04 (18:15)',
      tecno: 'U5 §3 · Комбинационные схемы и минимизация по картам Карно (mapas de Karnaugh) + разбор Soluciones U5 + тутория Чт 08.04 (20:15)',
      lengua: 'U5 · Написание полного критического комментария текста (150–200 слов) + тутория Пн 05.04 (19:15)',
      ingles: 'Старт U8 · Условные предложения (Zero, 1st, 2nd, 3rd Conditionals, unless, I wish / If only)',
      digital: 'Tema 3 §2 · Надёжные пароли, двухфакторная аутентификация (2FA), шифрование и резервное копирование (правило 3-2-1)',
    },
  },
  {
    week: 'W23',
    eval: 3,
    phase: '3ª Evaluación: Теория вероятностей, Электрические цепи и Условные предложения',
    dates: '12.04 – 18.04.2027',
    startDate: '2027-04-12',
    endDate: '2027-04-18',
    deliverable: 'Готов чистовик Física Envío 3 (UD5 Vibraciones y ondas)',
    subjects: {
      mates: 'Старт U6 Probabilidad §1–3 · Случайные события, правило Лапласа, противоположные события, условная вероятность',
      fisica: 'Решение задач №4 и №5 (звук 50 Вт и преломление света в воде под 20° и 50°) → сборка чистового PDF Envío 3 - Física AGS',
      tecno: 'Старт U6 Circuitos Eléctricos §1–3 · Закон Ома, удельное сопротивление (R=ρ·L/S), мощность и энергия тока, реальные источники и приёмники',
      lengua: 'Старт U6 · Языковые регистры, разновидности испанского языка и основные литературные течения',
      ingles: 'U8 ч.2 · Определительные придаточные (defining & non-defining relative clauses: who, which, that, whose, where) + Modelo Examen U8',
      digital: 'Tema 3 §3–4 · Цифровое здоровье, эргономика, сети и подключение + тутория Чт 15.04 (20:15)',
    },
  },
  {
    week: 'W24',
    eval: 3,
    phase: '3ª Evaluación: Завершение U6 по Математике + Модальные глаголы (Inglés U9)',
    dates: '19.04 – 25.04.2027',
    startDate: '2027-04-19',
    endDate: '2027-04-25',
    deliverable: 'Закрытие теории всех предметов курса',
    subjects: {
      mates: 'U6 §4–6 · Диаграммы дерева (diagramas de árbol) и таблицы сопряжённости (tablas de contingencia) + тутория Ср 21.04 (19:15)',
      fisica: 'Закрепление всех типов задач UD5 (колебания, уравнение волны, акустика, оптика) + тутория Ср 21.04 (18:15)',
      tecno: 'U6 §4–5 · Последовательное, параллельное и смешанное соединение резисторов, законы Кирхгофа (узлы и контуры) + Soluciones U6 + тутория Чт 22.04 (20:15)',
      lengua: 'U6 · Завершение теории U6 + начало выполнения Actividad de Envío 3ª Evaluación + тутория Пн 19.04 (19:15)',
      ingles: 'Старт U9 · Модальные глаголы (простые и перфектные: must have, can’t have, should have), Gerund vs Infinitive + тутория Ср 21.04 (20:15)',
      digital: 'Tema 3 §5 · Экологическая устойчивость цифровых технологий (правило 9R) и этика ИИ',
    },
  },
  {
    week: 'W25',
    eval: 3,
    phase: '3ª Evaluación: Подготовка финальных работ Envío 3ª Eval',
    dates: '26.04 – 02.05.2027',
    startDate: '2027-04-26',
    endDate: '2027-05-02',
    deliverable: 'Готовы чистовики Matemáticas Envío U5–U6 и Digital Envío Tema 3',
    subjects: {
      mates: 'Оформление и проверка сканов Actividades de envío U5 и U6 (Статистика и Вероятность)',
      fisica: 'Повторение UD5 + точечный повтор UD1–UD4 для поддержания формы',
      tecno: 'Комплексная тренировка задач U5 (Карно/логические схемы) и U6 (цепи постоянного тока и Кирхгоф)',
      lengua: 'Завершение и вычитка Actividad de Envío 3ª Evaluación',
      ingles: 'U9 ч.2 · Отработка всех 4 типов экзаменационного эссе (Opinion, Pros & Cons, Narrative, Formal Letter) + Modelo Examen U9',
      digital: 'Выполнение и проверка обязательной работы Envío 3ª Evaluación (Tema 3) + тутория Чт 29.04 (20:15)',
    },
  },
  {
    week: 'W26',
    eval: 3,
    phase: '3ª Evaluación: Финализация всех работ 3-го триместра',
    dates: '03.05 – 09.05.2027',
    startDate: '2027-05-03',
    endDate: '2027-05-09',
    deliverable: 'Все работы 3ª Evaluación полностью готовы!',
    subjects: {
      mates: 'Тренировка комбинированных вариантов U5–U6 + тутория Ср 05.05 (19:15)',
      fisica: 'Проверка чистовика Envío 3 + тутория Ср 05.05 (18:15)',
      tecno: 'Тренировка задач U5–U6 на время + тутория Чт 06.05 (20:15)',
      lengua: 'Финальная проверка работы 3ª Eval перед загрузкой',
      ingles: 'Выполнение и проверка Actividad Tercer Envío (U7–U9) в формате Word (.doc/.docx с шапкой) + тутория Ср 05.05 (20:15)',
      digital: 'Финальная проверка файла Envío Tema 3',
    },
  },
  {
    week: 'W27',
    eval: 3,
    phase: '3ª Evaluación: Заблаговременная отправка Envío и старт генерального повтора',
    dates: '10.05 – 16.05.2027',
    startDate: '2027-05-10',
    endDate: '2027-05-16',
    deliverable: 'Ранняя загрузка готовых работ 3ª Eval в Aeducar',
    subjects: {
      mates: 'Загрузка Envío U5–U6 и решение полных экзаменационных билетов по статистике и вероятности',
      fisica: 'Загрузка Envío 3 (UD5) и тренировка всех 5 типов задач на волны, звук и оптику',
      tecno: 'Генеральное повторение U5 (Electrónica Digital) и U6 (Circuitos Eléctricos)',
      lengua: 'Тутория Пн 10.05 (19:15) + загрузка Envío 3ª Eval + тренировка полного экзаменационного варианта',
      ingles: 'Загрузка Tercer Envío + повторение всех 9 моделей экзамена (ACGS_Ingles_u1..u9_mexamen26)',
      digital: 'Тутория Чт 13.05 (20:15) + загрузка Envío Tema 3',
    },
  },
  {
    week: 'W28',
    eval: 3,
    phase: 'ДЕДЛАЙН СДАЧИ 3ª EVAL (19 мая) + Предэкзаменационные Simulacros',
    dates: '17.05 – 23.05.2027',
    startDate: '2027-05-17',
    endDate: '2027-05-23',
    deliverable: '🔥 СРЕДА, 19 МАЯ (до 23:59): Официальный дедлайн сдачи всех Actividades de Envío 3ª Evaluación!',
    subjects: {
      mates: 'Контроль доставки Envío 3ª Eval + тутория Ср 19.05 (19:15) + Simulacro 3ª Eval (U5 + U6)',
      fisica: 'Контроль доставки Envío 3 + тутория Ср 19.05 (18:15) + Simulacro 3ª Eval (UD5)',
      tecno: 'Тутория Чт 20.05 (20:15) + Simulacro 3ª Eval (U5 + U6)',
      lengua: 'Контроль доставки Envío 3ª Eval + Simulacro 3ª Eval (U5 + U6)',
      ingles: 'Контроль доставки Tercer Envío + тутория Ср 19.05 (20:15) + Simulacro 3ª Eval (U1–U9)',
      digital: 'Контроль доставки Envío Tema 3 + итоговый тест самопроверки по Tema 3',
    },
  },
  {
    week: 'W29',
    eval: 3,
    phase: 'Финальная неделя подготовки перед экзаменами 1 и 3 июня',
    dates: '24.05 – 30.05.2027',
    startDate: '2027-05-24',
    endDate: '2027-05-30',
    deliverable: 'Финальная полировка формул, шаблонов и слабых мест',
    subjects: {
      mates: 'Simulacro Final на время: проверка таблиц частот, формул дисперсии и теоремы условной вероятности',
      fisica: 'Simulacro Final на время: уравнение волны, уровень громкости в дБ и закон преломления Снеллиуса',
      tecno: 'Simulacro Final на время: карты Карно, логические вентили и расчёт цепей по правилам Кирхгофа',
      lengua: 'Тутория Пн 24.05 (19:15) + повтор синтаксиса подчинённых предложений и структуры комментария текста',
      ingles: 'Повтор всех конструкций Rephrasing (Passive, Conditionals, Reported Speech, Relatives, Modals) и шаблонов эссе',
      digital: 'Тутория Чт 27.05 (20:15) + экспресс-повтор угроз безопасности, 2FA, резервного копирования и правила 9R',
    },
  },
  {
    week: 'W30',
    eval: 3,
    phase: 'ФИНАЛЬНЫЕ ОЧНЫЕ ЭКЗАМЕНЫ 3ª EVALUACIÓN Y FINAL (1 и 3 июня 2027)',
    dates: '31.05 – 03.06.2027',
    startDate: '2027-05-31',
    endDate: '2027-06-03',
    isExamWeek: true,
    deliverable: '🎓 ВТ 01.06 (Competencias) и ЧТ 03.06 (Materias Específicas)',
    subjects: {
      mates: 'Пн 31.05: лёгкий повтор формул U5–U6. ВТ 01.06 в 17:30 — ФИНАЛЬНЫЙ ЭКЗАМЕН!',
      fisica: 'Ср 02.06: лёгкий повтор формуляра UD5. ЧТ 03.06 в 17:30 — ФИНАЛЬНЫЙ ЭКЗАМЕН!',
      tecno: 'Ср 02.06: лёгкий повтор формул U5–U6. ЧТ 03.06 в 19:00 — ФИНАЛЬНЫЙ ЭКЗАМЕН!',
      lengua: 'Пн 31.05: лёгкий повтор схем разбора. ВТ 01.06 в 16:00 — ФИНАЛЬНЫЙ ЭКЗАМЕН!',
      ingles: 'Ср 02.06: лёгкий повтор клише для эссе. ЧТ 03.06 в 16:00 — ФИНАЛЬНЫЙ ЭКЗАМЕН!',
      digital: 'Пн 31.05: лёгкий повтор конспекта. ВТ 01.06 в 19:00 — ФИНАЛЬНЫЙ ЭКЗАМЕН! Курс успешно завершён!',
    },
  },
];

export const WEEKS_PLAN = BASE_WEEKS_PLAN.map((w) => {
  const enrichedSubjects = { ...w.subjects };
  for (const subjId of ['quimica', 'biologia', 'geografia', 'empresa']) {
    if (!enrichedSubjects[subjId]) {
      if (w.isExamWeek) {
        const subjObj = SUBJECTS.find((s) => s.id === subjId);
        enrichedSubjects[subjId] = `Пн–Ср: экспресс-повтор формул и конспектов ${w.eval}ª Evaluación. ЧТ в ${subjObj?.examTime || '17:30'} — ОЧНЫЙ ЭКЗАМЕН!`;
      } else {
        enrichedSubjects[subjId] = `${w.week} (${w.eval}ª Eval) · ${GENERIC_ELECTIVE_WEEK_TOPICS[subjId][w.eval]}`;
      }
    }
  }
  return {
    ...w,
    subjects: enrichedSubjects,
  };
});

const RU_DAYS = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const RU_DAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

export function shiftDateStr(dateStr, deltaDays) {
  const d = new Date(`${dateStr}T12:00:00`);
  d.setDate(d.getDate() + deltaDays);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function daysBetweenStr(fromStr, toStr) {
  const d1 = new Date(`${fromStr}T12:00:00`);
  const d2 = new Date(`${toStr}T12:00:00`);
  return Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
}

export function findWeekForDate(dateStr) {
  return (
    WEEKS_PLAN.find((w) => dateStr >= w.startDate && dateStr <= w.endDate) ||
    WEEKS_PLAN[0]
  );
}

// Автоматически разбивает любой учебный блок на 2 наглядных подпункта-чекбокса (параграфа/шага),
// чтобы при склейке карточек (например, §1–2 + §3–4 = 4 чекбокса) можно было выполнить половину (2 из 4),
// а оставшиеся 2 чекбокса перенести в следующую карточку!
function buildSubtasksForBlock(block, dateStr) {
  if (block.subtasks && block.subtasks.length > 0) {
    return block.subtasks.map((st, i) => ({
      id: st.id || `${block.id}__sub${i + 1}`,
      parentBlockId: block.id,
      subjectId: block.subjectId,
      origDate: dateStr,
      paraTag: st.paraTag || `Ч.${i + 1}`,
      title: st.title,
      mins: st.mins,
    }));
  }

  // Для оргблоков или одиночных коротких блоков (≤ 30 мин) оставляем 1 чекбокс
  if (block.subjectId === 'all' || block.mins <= 30) {
    return [
      {
        id: `${block.id}__sub1`,
        parentBlockId: block.id,
        subjectId: block.subjectId,
        origDate: dateStr,
        paraTag: 'План',
        title: `${block.title} — ${block.desc}`,
        mins: block.mins,
      },
    ];
  }

  const m1 = Math.round(block.mins / 2 / 5) * 5 || Math.floor(block.mins / 2);
  const m2 = block.mins - m1;

  // Разбиваем описание на две логические части (теория/первые параграфы и практика/вторые параграфы)
  const sentences = block.desc
    .split(/(?<=\.)\s+|\s+·\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const part1Text =
    sentences.length >= 2
      ? `${block.title} (Часть 1 / Теория и разбор): ${sentences.slice(0, Math.ceil(sentences.length / 2)).join(' ')}`
      : `${block.title} — §1 (Теория и разбор базовых примеров): ${block.desc}`;

  const part2Text =
    sentences.length >= 2
      ? `${block.title} (Часть 2 / Практика и задачи): ${sentences.slice(Math.ceil(sentences.length / 2)).join(' ')}`
      : `${block.title} — §2 (Самостоятельное решение задач и закрепление)`;

  return [
    {
      id: `${block.id}__sub1`,
      parentBlockId: block.id,
      subjectId: block.subjectId,
      origDate: dateStr,
      paraTag: 'Шаг 1',
      title: part1Text,
      mins: m1,
    },
    {
      id: `${block.id}__sub2`,
      parentBlockId: block.id,
      subjectId: block.subjectId,
      origDate: dateStr,
      paraTag: 'Шаг 2',
      title: part2Text,
      mins: m2,
    },
  ];
}

// Детальные блоки для первых дней спринта с явной разбивкой по параграфам (§1, §2, §3, §4...)
function getSprintOverrideBlocks(dateStr, elective1, elective2, elective3) {
  const e1 = elective1 || 'fisica';
  const e2 = elective2 || 'ingles';
  const e3 = elective3 || null;
  const w1 = WEEKS_PLAN[0];

  const makeElectiveBlock = (id, subjId, mins, defaultTitle, defaultDesc, defaultSubtasks) => {
    const s = SUBJECTS.find((x) => x.id === subjId);
    if (!s) return null;
    if (defaultTitle && (subjId === 'fisica' || subjId === 'ingles' || subjId === 'tecno')) {
      return { id, subjectId: subjId, mins, title: defaultTitle, desc: defaultDesc, subtasks: defaultSubtasks };
    }
    const m1 = Math.round(mins / 2);
    const m2 = mins - m1;
    return {
      id,
      subjectId: subjId,
      mins,
      title: `${s.shortName}: ${s.units[0]?.title || 'Unidad 1'}`,
      desc: w1.subjects[subjId] || s.evalBreakdown.eval1,
      subtasks: [
        {
          id: `${id}__sub1`,
          paraTag: 'U1 §1',
          title: `${s.shortName} U1 §1: Теория и конспект первой половины раздела (${s.units[0]?.title || 'Unidad 1'})`,
          mins: m1,
        },
        {
          id: `${id}__sub2`,
          paraTag: 'U1 §2',
          title: `${s.shortName} U1 §2: Практические упражнения и подготовка Envío 1ª Eval`,
          mins: m2,
        },
      ],
    };
  };

  const map = {
    '2026-11-07': {
      badge: 'ДЕНЬ 1 · СТАРТ СПРИНТА',
      blocks: [
        {
          id: 'd-2026-11-07-1',
          subjectId: 'all',
          mins: 20,
          title: 'Оргмомент: Вход в Aeducar и проверка личного кабинета',
          desc: 'Зайти на https://aula2.aeducar.es/, открыть все выбранные курсы (защита от отчисления по правилу 3 недель).',
        },
        {
          id: 'd-2026-11-07-2',
          subjectId: 'mates',
          mins: 90,
          title: 'Matemáticas U1 §1–2: Целые числа и Дроби',
          desc: 'Изучить целые числа, порядок операций, дроби и ключевую ловушку задач типа «del resto».',
          subtasks: [
            { id: 'd-2026-11-07-2__sub1', paraTag: 'U1 §1', title: 'U1 §1: Целые числа, степени и иерархия операций (конспект teoria-mates-1, разд. 1–2)', mins: 45 },
            { id: 'd-2026-11-07-2__sub2', paraTag: 'U1 §2', title: 'U1 §2: Дроби и задачи на «остаток от остатка» («del resto», разд. 3 + примеры из апунтов)', mins: 45 },
          ],
        },
        makeElectiveBlock(
          `d-2026-11-07-3-${e1}`,
          e1,
          90,
          e1 === 'fisica' ? 'Física UD1 §1–2: Инструменты физики и векторы' : e1 === 'tecno' ? 'Tecnología II U1 §1–2: Единицы энергии и КПД' : null,
          'Перевод единиц в СИ, тригонометрия и проекции векторов.',
          e1 === 'fisica'
            ? [
                { id: `d-2026-11-07-3-${e1}__sub1`, paraTag: 'UD1 §1', title: 'UD1 §1: Перевод единиц в СИ (км/ч → м/с), научная нотация и вывод переменных (teoria-fisica-1, разд. 1–3)', mins: 45 },
                { id: `d-2026-11-07-3-${e1}__sub2`, paraTag: 'UD1 §2', title: 'UD1 §2: Тригонометрия прямоугольного треугольника и разложение векторов по осям X и Y (разд. 4–5)', mins: 45 },
              ]
            : null
        ),
        {
          id: 'd-2026-11-07-4',
          subjectId: 'lengua',
          mins: 60,
          title: 'Lengua U1 §1–2: Коммуникация и Морфология',
          desc: '6 элементов коммуникации и таблица 9 частей речи (CUADRO MORFOLOGÍA.pdf).',
          subtasks: [
            { id: 'd-2026-11-07-4__sub1', paraTag: 'U1 §1', title: 'U1 §1: 6 элементов коммуникации (emisor, receptor, mensaje, canal, código, contexto)', mins: 30 },
            { id: 'd-2026-11-07-4__sub2', paraTag: 'U1 §2', title: 'U1 §2: Разбор таблицы 9 частей речи (CUADRO MORFOLOGÍA.pdf + конспект разд. 2)', mins: 30 },
          ],
        },
      ].filter(Boolean),
    },
    '2026-11-08': {
      badge: 'ДЕНЬ 2 · БАЗА U1',
      blocks: [
        makeElectiveBlock(
          `d-2026-11-08-1-${e2}`,
          e2,
          90,
          e2 === 'ingles' ? 'Inglés U1 §1–2: Present Tenses, Pronouns & Questions' : null,
          'Present Simple vs Continuous, вопросы и самопроверка U1.',
          e2 === 'ingles'
            ? [
                { id: `d-2026-11-08-1-${e2}__sub1`, paraTag: 'U1 §1', title: 'U1 §1: Personal Pronouns, Possessives, Present Simple vs Present Continuous (AGS INGLÉS Unidad 1.pdf)', mins: 45 },
                { id: `d-2026-11-08-1-${e2}__sub2`, paraTag: 'U1 §2', title: 'U1 §2: Adverbs of frequency, Question formation и выполнение упражнений самопроверки U1', mins: 45 },
              ]
            : null
        ),
        {
          id: 'd-2026-11-08-2',
          subjectId: 'digital',
          mins: 60,
          title: 'Competencia Digital Tema 1 §1–2: Поиск и метод SIFT',
          desc: 'Булевы операторы, команды поиска и критическая оценка источников.',
          subtasks: [
            { id: 'd-2026-11-08-2__sub1', paraTag: 'T1 §1', title: 'Tema 1 §1: Булевы операторы (AND, OR, NOT) и команды (site:, filetype:, кавычки)', mins: 30 },
            { id: 'd-2026-11-08-2__sub2', paraTag: 'T1 §2', title: 'Tema 1 §2: Оценка достоверности источников (метод SIFT) и лицензии Creative Commons', mins: 30 },
          ],
        },
        {
          id: 'd-2026-11-08-3',
          subjectId: 'mates',
          mins: 60,
          title: 'Matemáticas U1: Практика задач №1–2 из Envío U1',
          desc: 'Решить на черновике задачи №1 (завтрак на 153 чел.) и №2 (зарплата Надии).',
          subtasks: [
            { id: 'd-2026-11-08-3__sub1', paraTag: 'Envío №1', title: 'Envío U1 — Задача №1: Расчёт продуктов завтрака на 153 человека (мука, молоко, яйца)', mins: 30 },
            { id: 'd-2026-11-08-3__sub2', paraTag: 'Envío №2', title: 'Envío U1 — Задача №2: Зарплата Надии (вычеты SS/IRPF и доли расходов «del resto»)', mins: 30 },
          ],
        },
        ...(e3
          ? [
              makeElectiveBlock(
                `d-2026-11-08-4-${e3}`,
                e3,
                80,
                e3 === 'tecno' ? 'Tecnología II U1 §1–2: Единицы энергии и КПД' : null,
                'Единицы энергии (J, cal, kWh, tep), работа, мощность и КПД.',
                e3 === 'tecno'
                  ? [
                      { id: `d-2026-11-08-4-${e3}__sub1`, paraTag: 'U1 §1', title: 'U1 §1: Единицы энергии (J, cal, kWh, tep) и факторы конверсии (teoria-tecno-1)', mins: 40 },
                      { id: `d-2026-11-08-4-${e3}__sub2`, paraTag: 'U1 §2', title: 'U1 §2: Работа W, мощность P и формула КПД (η = P_útil / P_consumida)', mins: 40 },
                    ]
                  : null
              ),
            ]
          : []),
      ].filter(Boolean),
    },
    '2026-11-09': {
      badge: 'ДЕНЬ 3 · ПРОЦЕНТЫ И ТЕКСТ',
      blocks: [
        {
          id: 'd-2026-11-09-1',
          subjectId: 'mates',
          mins: 80,
          title: 'Matemáticas U1 §3: Проценты и задачи №3–4 из Envío U1',
          desc: 'Индексы изменения, цепочки скидок/наценок и решение задач №3–4.',
          subtasks: [
            { id: 'd-2026-11-09-1__sub1', paraTag: 'U1 §3', title: 'U1 §3: Проценты, индекс изменения и цепочки скидок/наценок (teoria-mates-1, разд. 4–5)', mins: 40 },
            { id: 'd-2026-11-09-1__sub2', paraTag: 'Envío №3–4', title: 'Envío U1 — Задачи №3 и №4: Смета ремонта Марты (+IVA) и сравнение акций на масло', mins: 40 },
          ],
        },
        {
          id: 'd-2026-11-09-2',
          subjectId: 'lengua',
          mins: 60,
          title: 'Lengua U1 §3–4: Глагол, субъективность и модальность',
          desc: 'Наклонения глагола, маркеры субъективности и 6 модальностей предложений.',
          subtasks: [
            { id: 'd-2026-11-09-2__sub1', paraTag: 'U1 §3', title: 'U1 §3: Времена и наклонения глагола (indicativo, subjuntivo, imperativo) + объективность/субъективность', mins: 30 },
            { id: 'd-2026-11-09-2__sub2', paraTag: 'U1 §4', title: 'U1 §4: 6 модальностей высказывания (enunciativa, interrogativa, exhortativa, dubitativa, desiderativa, exclamativa)', mins: 30 },
          ],
        },
      ],
    },
    '2026-11-10': {
      badge: 'ДЕНЬ 4 · СПЕЦПРЕДМЕТЫ (§3–4)',
      blocks: [
        makeElectiveBlock(
          `d-2026-11-10-1-${e1}`,
          e1,
          80,
          e1 === 'fisica' ? 'Física UD1 §3–4: Движение MRU, MRUA и задача №1 Envío 1' : null,
          'Уравнения движения MRU и MRUA, графики и решение задачи №1.',
          e1 === 'fisica'
            ? [
                { id: `d-2026-11-10-1-${e1}__sub1`, paraTag: 'UD1 §3', title: 'UD1 §3: Равномерное прямолинейное движение (MRU) и задачи на встречу/догонялки (разд. 6–7)', mins: 40 },
                { id: `d-2026-11-10-1-${e1}__sub2`, paraTag: 'UD1 §4', title: 'UD1 §4: Равноускоренное движение (MRUA) + решение задачи №1 из Envío 1 (велосипедистка)', mins: 40 },
              ]
            : null
        ),
        makeElectiveBlock(
          `d-2026-11-10-2-${e2}`,
          e2,
          60,
          e2 === 'ingles' ? 'Inglés U1 §3–4: Правила Reading и Modelo de Examen U1' : null,
          'Правила цитирования True/False и прорешивание модели экзамена U1.',
          e2 === 'ingles'
            ? [
                { id: `d-2026-11-10-2-${e2}__sub1`, paraTag: 'U1 §3', title: 'U1 §3: Техника Reading True/False с дословным цитированием строк и перефразированием ответов', mins: 30 },
                { id: `d-2026-11-10-2-${e2}__sub2`, paraTag: 'U1 §4', title: 'U1 §4: Полное решение модели экзамена ACGS_Ingles_u1_mexamen26.pdf', mins: 30 },
              ]
            : null
        ),
      ].filter(Boolean),
    },
    '2026-11-11': {
      badge: 'ДЕНЬ 5 · ПРОПОРЦИИ И ПРАКТИКА (§4–5)',
      blocks: [
        {
          id: 'd-2026-11-11-1',
          subjectId: 'mates',
          mins: 70,
          title: 'Matemáticas U1 §4: Пропорциональность и задачи №5–6 из Envío U1',
          desc: 'Прямая, обратная и сложная пропорциональность, распределения.',
          subtasks: [
            { id: 'd-2026-11-11-1__sub1', paraTag: 'U1 §4', title: 'U1 §4: Прямо и обратно пропорциональное деление + сложная пропорциональность (разд. 6–8)', mins: 35 },
            { id: 'd-2026-11-11-1__sub2', paraTag: 'Envío №5–6', title: 'Envío U1 — Задачи №5 (рынок Лайла/Рафаэль/Сильвия) и №6 (бригада техников оптоволокна)', mins: 35 },
          ],
        },
        makeElectiveBlock(
          `d-2026-11-11-2-${e1}`,
          e1,
          70,
          e1 === 'fisica' ? 'Física UD1 §5: Свободное падение + Онлайн-тутория (18:15)' : null,
          'Вертикальный бросок, свободное падение и участие в онлайн-тутории.',
          e1 === 'fisica'
            ? [
                { id: `d-2026-11-11-2-${e1}__sub1`, paraTag: 'UD1 §5', title: 'UD1 §5: Свободное падение и вертикальный бросок вверх/вниз (ось OY, a = −9,8 м/с²)', mins: 35 },
                { id: `d-2026-11-11-2-${e1}__sub2`, paraTag: 'Тутория', title: '18:15 — Групповая онлайн-тутория по Физике (Catalina Pena Rufas) в Aeducar', mins: 35 },
              ]
            : null
        ),
      ].filter(Boolean),
    },
    '2026-11-12': {
      badge: 'ДЕНЬ 6 · БРОСКИ И ТИПЫ ТЕКСТОВ (§5–6)',
      blocks: [
        makeElectiveBlock(
          `d-2026-11-12-1-${e1}`,
          e1,
          70,
          e1 === 'fisica' ? 'Física UD1 §6: Горизонтальный и параболический бросок' : null,
          'Разложение по осям X и Y + решение задачи №2 из Envío 1.',
          e1 === 'fisica'
            ? [
                { id: `d-2026-11-12-1-${e1}__sub1`, paraTag: 'UD1 §6', title: 'UD1 §6: Теория горизонтального и параболического броска (независимость движений X и Y)', mins: 35 },
                { id: `d-2026-11-12-1-${e1}__sub2`, paraTag: 'Envío №2', title: 'Envío 1 Física — Задача №2: Гаечный ключ, падающий горизонтально с высоты 20 м со скоростью 4 м/с', mins: 35 },
              ]
            : null
        ),
        {
          id: 'd-2026-11-12-2',
          subjectId: 'lengua',
          mins: 60,
          title: 'Lengua U1 §5–6: Типы текстов и упражнения самопроверки U1',
          desc: 'Гуманитарные и научно-технические тексты + упражнения U1.',
          subtasks: [
            { id: 'd-2026-11-12-2__sub1', paraTag: 'U1 §5', title: 'U1 §5: Отличия гуманитарных (humanísticos) и научно-технических (científico-técnicos) текстов', mins: 30 },
            { id: 'd-2026-11-12-2__sub2', paraTag: 'U1 §6', title: 'U1 §6: Выполнение итоговых упражнений из UNIDAD 1 - CON EJERCICIOS.pdf', mins: 30 },
          ],
        },
      ].filter(Boolean),
    },
    '2026-11-13': {
      badge: 'ДЕНЬ 7 · ПЯТНИЦА: ЧИСТОВИК MAT U1 + DIGITAL',
      blocks: [
        {
          id: 'd-2026-11-13-1',
          subjectId: 'mates',
          mins: 70,
          title: 'Matemáticas: Оформление чистовика Actividades de envío U1',
          desc: 'Переписать от руки все 6 задач Envío U1 с полным ходом решения.',
          subtasks: [
            { id: 'd-2026-11-13-1__sub1', paraTag: 'Чистовик ч.1', title: 'Чистовик Matemáticas Envío U1: аккуратное оформление задач №1, №2 и №3 (проверив видимые числа!)', mins: 35 },
            { id: 'd-2026-11-13-1__sub2', paraTag: 'Чистовик ч.2', title: 'Чистовик Matemáticas Envío U1: оформление задач №4, №5 и №6 и сканирование в единый PDF', mins: 35 },
          ],
        },
        {
          id: 'd-2026-11-13-2',
          subjectId: 'digital',
          mins: 70,
          title: 'Competencia Digital Envío 1: Выполнение Actividad 1 (.docx)',
          desc: 'Создание документа Word и таблиц поисковых запросов и источников.',
          subtasks: [
            { id: 'd-2026-11-13-2__sub1', paraTag: 'Envío Ч.1', title: 'Digital Envío 1: Создать Martirosian_Grachia_ActividadEnvio1.docx, написать введение (80–120 слов) и таблицу 8 поисковых запросов', mins: 35 },
            { id: 'd-2026-11-13-2__sub2', paraTag: 'Envío Ч.2', title: 'Digital Envío 1: Заполнить таблицу критической оценки 4 официальных источников (критерии SIFT)', mins: 35 },
          ],
        },
      ],
    },
    '2026-11-14': {
      badge: 'ДЕНЬ 8 · СУББОТА: ПЕРЕХОД К UNIDAD 2',
      blocks: [
        makeElectiveBlock(
          `d-2026-11-14-1-${e1}`,
          e1,
          100,
          e1 === 'fisica' ? 'Física UD1 §7 (MCU) + Старт UD2 Dinámica (§1–2)' : null,
          'Круговое движение MCU, задача №3 из Envío 1 и старт Динамики.',
          e1 === 'fisica'
            ? [
                { id: `d-2026-11-14-1-${e1}__sub1`, paraTag: 'UD1 §7', title: 'UD1 §7: Движение по окружности (MCU: ω, v, T, f, a_n) + задача №3 из Envío 1 (колесо обозрения)', mins: 50 },
                { id: `d-2026-11-14-1-${e1}__sub2`, paraTag: 'UD2 §1–2', title: 'UD2 §1–2: Законы Ньютона, сила тяжести, нормальная реакция опоры N и сила трения F_r', mins: 50 },
              ]
            : null
        ),
        {
          id: 'd-2026-11-14-2',
          subjectId: 'mates',
          mins: 90,
          title: 'Matemáticas U2 §1–3: Многочлены и уравнения 1–2 степени',
          desc: 'Алгебра, формулы сокращённого умножения и задачи №1–3 из Envío U2.',
          subtasks: [
            { id: 'd-2026-11-14-2__sub1', paraTag: 'U2 §1–2', title: 'U2 §1–2: Многочлены, формулы сокращённого умножения и уравнения 1-й и 2-й степени', mins: 45 },
            { id: 'd-2026-11-14-2__sub2', paraTag: 'Envío U2 №1–3', title: 'Envío U2 — Задачи №1 (пруд с дорожкой 1 м), №2 (телефонный тариф) и №3 (участок 96 м²)', mins: 45 },
          ],
        },
        {
          id: 'd-2026-11-14-3',
          subjectId: 'lengua',
          mins: 80,
          title: 'Lengua U2 §1–3: Функции языка, Пассив/Безличные и TEMA',
          desc: 'Функции языка, типы синтагм, пассивный залог и формулировка темы.',
          subtasks: [
            { id: 'd-2026-11-14-3__sub1', paraTag: 'U2 §1–2', title: 'U2 §1–2: 6 функций языка (representativa, expresiva, apelativa, poética, fática, metalingüística) и типы синтагм', mins: 40 },
            { id: 'd-2026-11-14-3__sub2', paraTag: 'U2 §3', title: 'U2 §3 (EXPLICACIONES CLASE 26_10.pdf): Pasiva perifrástica vs refleja, impersonales и формулировка TEMA (<12 слов без глагола)', mins: 40 },
          ],
        },
      ].filter(Boolean),
    },
    '2026-11-15': {
      badge: 'ДЕНЬ 9 · ВОСКРЕСЕНЬЕ: U2 + DIGITAL ENVÍO',
      blocks: [
        makeElectiveBlock(
          `d-2026-11-15-1-${e2}`,
          e2,
          100,
          e2 === 'ingles' ? 'Inglés U2 §1–3: Past & Perfect Tenses, Used to + Modelo U2' : null,
          'Времена группы Past и Perfect, конструкция used to и модель экзамена U2.',
          e2 === 'ingles'
            ? [
                { id: `d-2026-11-15-1-${e2}__sub1`, paraTag: 'U2 §1–2', title: 'U2 §1–2: Past Simple/Continuous, Present Perfect Simple/Continuous, Past Perfect и used to (AGS INGLÉS Unidad 2.pdf)', mins: 50 },
                { id: `d-2026-11-15-1-${e2}__sub2`, paraTag: 'U2 §3', title: 'U2 §3: Упражнения самопроверки U2 + полное решение модели экзамена ACGS_Ingles_u2_mexamen26.pdf', mins: 50 },
              ]
            : null
        ),
        {
          id: 'd-2026-11-15-2',
          subjectId: 'digital',
          mins: 80,
          title: 'Competencia Digital Envío 1: Завершение Actividad 2 и 3 (.docx)',
          desc: 'Промпт для ИИ и карточка семьи FP (без ловушки про астронавта!).',
          subtasks: [
            { id: 'd-2026-11-15-2__sub1', paraTag: 'Envío Ч.3', title: 'Digital Envío 1 (Actividad 2): Промпт для ИИ + критическое сравнение ответа ИИ с официальными источниками (150–300 слов)', mins: 40 },
            { id: 'd-2026-11-15-2__sub2', paraTag: 'Envío Ч.4', title: 'Digital Envío 1 (Actividad 3): Карточка семьи FP (стили Título 1/2, таблица, картинка CC, ≥5 реальных ИТ-профессий БЕЗ астронавта!)', mins: 40 },
          ],
        },
        ...(e3
          ? [
              makeElectiveBlock(
                `d-2026-11-15-3-${e3}`,
                e3,
                90,
                e3 === 'tecno' ? 'Tecnología II U2 §1–2: Механика и передачи' : null,
                'Крутящий момент, редукторы и шкивы.',
                e3 === 'tecno'
                  ? [
                      { id: `d-2026-11-15-3-${e3}__sub1`, paraTag: 'U2 §1', title: 'U2 §1: Крутящий момент (Par motor) и мощность вращения P = M · ω', mins: 45 },
                      { id: `d-2026-11-15-3-${e3}__sub2`, paraTag: 'U2 §2', title: 'U2 §2: Зубчатые передачи, редукторы, ременные передачи и червячный механизм (i = Z₁/Z₂)', mins: 45 },
                    ]
                  : null
              ),
            ]
          : []),
      ].filter(Boolean),
    },
  };

  return map[dateStr] || null;
}

// Базовый генератор исходного расписания на выбранную дату (со списком подзадач subtasks в каждом блоке)
export function getRawDailySchedule(dateStr, activeElectives = ['fisica', 'ingles']) {
  const d = new Date(`${dateStr}T12:00:00`);
  const dow = d.getDay();
  const dayName = RU_DAYS[dow];
  const dayShort = RU_DAYS_SHORT[dow];
  const weekObj = findWeekForDate(dateStr);

  const e1 = activeElectives[0] || 'fisica';
  const e2 = activeElectives[1] || 'ingles';
  const e3 = activeElectives[2] || null;

  const sprintOv = getSprintOverrideBlocks(dateStr, e1, e2, e3);
  if (sprintOv) {
    return {
      dateStr,
      dayName,
      dayShort,
      weekObj,
      badge: sprintOv.badge,
      blocks: sprintOv.blocks.map((b) => ({
        ...b,
        subtasks: buildSubtasksForBlock(b, dateStr),
      })),
    };
  }

  // Дни официальных дедлайнов и экзаменов
  if (dateStr === '2026-12-02' || dateStr === '2027-03-03' || dateStr === '2027-05-19') {
    const evalNum = dateStr === '2026-12-02' ? 1 : dateStr === '2027-03-03' ? 2 : 3;
    const s2 = SUBJECTS.find((s) => s.id === e2) || SUBJECTS[0];
    const rawBlocks = [
      {
        id: `d-${dateStr}-1`,
        subjectId: 'all',
        mins: 60,
        title: `Контрольная проверка и загрузка всех Actividades de Envío (${evalNum}ª Evaluación) в Aeducar`,
        desc: 'Проверить имена файлов, наличие ФИО внутри каждого документа и убедиться, что статус доставки — «Enviado para calificar».',
      },
      {
        id: `d-${dateStr}-2`,
        subjectId: 'mates',
        mins: 50,
        title: 'Онлайн-тутория и повторение Matemáticas',
        desc: weekObj.subjects.mates,
      },
      {
        id: `d-${dateStr}-3-${e2}`,
        subjectId: e2,
        mins: 50,
        title: `Повторение и проверка: ${s2.shortName}`,
        desc: weekObj.subjects[e2] || s2.evalBreakdown[`eval${evalNum}`],
      },
    ];
    return {
      dateStr,
      dayName,
      dayShort,
      weekObj,
      badge: `🔥 ОФИЦИАЛЬНЫЙ ДЕДЛАЙН ${evalNum}ª EVALUACIÓN (до 23:59)`,
      blocks: rawBlocks.map((b) => ({ ...b, subtasks: buildSubtasksForBlock(b, dateStr) })),
    };
  }

  if (dateStr === '2026-12-15' || dateStr === '2027-03-16' || dateStr === '2027-06-01') {
    const evalNum = dateStr === '2026-12-15' ? 1 : dateStr === '2027-03-16' ? 2 : 3;
    const rawBlocks = [
      { id: `d-${dateStr}-1`, subjectId: 'lengua', mins: 90, title: '16:00 — Очный экзамен: Competencia en Lengua Castellana', desc: 'Явиться в Centro de Adultos заранее с документом DNI/NIE и ручками.' },
      { id: `d-${dateStr}-2`, subjectId: 'mates', mins: 90, title: '17:30 — Очный экзамен: Competencia Matemática', desc: 'Взять научный непрограммируемый калькулятор. Писать полный ход решения!' },
      { id: `d-${dateStr}-3`, subjectId: 'digital', mins: 90, title: '19:00 — Очный экзамен: Competencia Básica Digital', desc: 'Вопросы аналогичны выполненным заданиям Actividades de envío.' },
    ];
    return {
      dateStr,
      dayName,
      dayShort,
      weekObj,
      badge: `🎯 ДЕНЬ ОЧНЫХ ЭКЗАМЕНОВ (${evalNum}ª EVAL — COMPETENCIAS)`,
      blocks: rawBlocks.map((b) => ({ ...b, subtasks: buildSubtasksForBlock(b, dateStr) })),
    };
  }

  if (dateStr === '2026-12-17' || dateStr === '2027-03-18' || dateStr === '2027-06-03') {
    const evalNum = dateStr === '2026-12-17' ? 1 : dateStr === '2027-03-18' ? 2 : 3;
    const examElectives = [e1, e2, ...(e3 ? [e3] : [])].map((id) => SUBJECTS.find((s) => s.id === id)).filter(Boolean);
    examElectives.sort((a, b) => (a.examTime || '17:30').localeCompare(b.examTime || '17:30'));
    const rawBlocks = examElectives.map((subj, idx) => ({
      id: `d-${dateStr}-${idx + 1}-${subj.id}`,
      subjectId: subj.id,
      mins: 90,
      title: `${subj.examTime} — Очный экзамен: ${subj.name}`,
      desc: `Очный экзамен в Centro de Adultos (${subj.evalBreakdown[`eval${evalNum}`]}).`,
    }));
    return {
      dateStr,
      dayName,
      dayShort,
      weekObj,
      badge: `🎯 ДЕНЬ ОЧНЫХ ЭКЗАМЕНОВ (${evalNum}ª EVAL — MATERIAS ESPECÍFICAS)`,
      blocks: rawBlocks.map((b) => ({ ...b, subtasks: buildSubtasksForBlock(b, dateStr) })),
    };
  }

  const isSprint = Boolean(weekObj.isSprint);
  const sE1 = SUBJECTS.find((s) => s.id === e1) || SUBJECTS[3];
  const sE2 = SUBJECTS.find((s) => s.id === e2) || SUBJECTS[4];
  const sE3 = e3 ? SUBJECTS.find((s) => s.id === e3) : null;

  const templatesByDow = {
    1: [
      { subjectId: 'mates', mins: isSprint ? 80 : 60, label: 'Matemáticas (теория и разбор примеров)' },
      { subjectId: 'lengua', mins: isSprint ? 60 : 50, label: 'Lengua Castellana (грамматика, текст и тутория)' },
    ],
    2: [
      { subjectId: e1, mins: isSprint ? 80 : 60, label: `${sE1.shortName} (теория, формулы и разбор задач)` },
      { subjectId: e2, mins: isSprint ? 60 : 50, label: `${sE2.shortName} (теория, упражнения и модели экзамена)` },
    ],
    3: [
      ...(sE3
        ? [{ subjectId: e3, mins: isSprint ? 70 : 60, label: `${sE3.shortName} (теория и расчётные задачи)` }]
        : [{ subjectId: e2, mins: isSprint ? 60 : 50, label: `${sE2.shortName} (практика заданий и Envío)` }]),
      { subjectId: 'mates', mins: isSprint ? 60 : 50, label: 'Matemáticas (практика задач и Envío)' },
    ],
    4: [
      { subjectId: e1, mins: isSprint ? 80 : 60, label: `${sE1.shortName} (решение задач и подготовка Envío)` },
      { subjectId: 'lengua', mins: isSprint ? 60 : 50, label: 'Lengua Castellana (практика комментария и синтаксиса)' },
    ],
    5: [
      { subjectId: 'mates', mins: isSprint ? 60 : 50, label: 'Matemáticas (контрольные задачи недели)' },
      { subjectId: 'digital', mins: isSprint ? 60 : 50, label: 'Competencia Digital (теория и практика Envío)' },
    ],
    6: [
      { subjectId: e1, mins: 100, label: `${sE1.shortName} (глубокий практикум и задачи Envío/экзамена)` },
      { subjectId: 'mates', mins: 90, label: 'Matemáticas (большой блок решения задач)' },
      { subjectId: 'lengua', mins: 70, label: 'Lengua Castellana (письменная практика и самопроверка)' },
    ],
    0: [
      ...(sE3
        ? [{ subjectId: e3, mins: 90, label: `${sE3.shortName} (практикум по задачам и Soluciones)` }]
        : [{ subjectId: e1, mins: 80, label: `${sE1.shortName} (повторение и закрепление задач недели)` }]),
      { subjectId: e2, mins: 90, label: `${sE2.shortName} (практикум, контрольный вариант и Envío)` },
      { subjectId: 'digital', mins: 60, label: 'Competencia Digital + Итоговое повторение недели' },
    ],
  };

  const dayTemplate = templatesByDow[dow] || templatesByDow[1];
  const rawBlocks = dayTemplate.map((item, idx) => ({
    id: `d-${dateStr}-${idx + 1}-${item.subjectId}`,
    subjectId: item.subjectId,
    mins: item.mins,
    title: `${item.label} · ${weekObj.week}`,
    desc: weekObj.subjects[item.subjectId] || 'Повторение пройденного материала по плану недели.',
  }));

  return {
    dateStr,
    dayName,
    dayShort,
    weekObj,
    badge: `${weekObj.week} · ${weekObj.phase}`,
    blocks: rawBlocks.map((b) => ({ ...b, subtasks: buildSubtasksForBlock(b, dateStr) })),
  };
}

// Находит ближайшую следующую дату (после fromDateStr), в которую по расписанию стоит занятие по предмету subjectId
export function findNextLessonDateForSubject(fromDateStr, subjectId, activeElectives = ['fisica', 'ingles']) {
  let cur = shiftDateStr(fromDateStr, 1);
  for (let i = 0; i < 14 && cur <= '2027-06-03'; i++) {
    const sched = getRawDailySchedule(cur, activeElectives);
    if (sched.blocks.some((b) => b.subjectId === subjectId)) {
      return cur;
    }
    cur = shiftDateStr(cur, 1);
  }
  return shiftDateStr(fromDateStr, 1);
}

// Собирает глобальную карту всех подзадач (subtasks) с 07.11.2026 по 03.06.2027,
// чтобы мгновенно находить перенесённые пункты и склеивать их с карточками целевого дня!
export function getMergedDailySchedule(dateStr, state = {}) {
  const activeElectives = state.selectedElectives || ['fisica', 'ingles'];
  const movedSubtasks = state.movedSubtasks || {}; // { [subtaskId]: 'YYYY-MM-DD' }
  const completedSubtasks = state.completedSubtasks || {}; // { [subtaskId]: true/false }

  const rawToday = getRawDailySchedule(dateStr, activeElectives);

  // 1. Собираем все подзадачи, которые были перенесены НА эту дату (dateStr) с других дней
  const incomingBySubject = {};
  const sourceDatesToScan = new Set();
  for (const [subId, targetDate] of Object.entries(movedSubtasks)) {
    if (targetDate === dateStr) {
      const m = subId.match(/^d-(\d{4}-\d{2}-\d{2})-/);
      if (m && m[1] !== dateStr) {
        sourceDatesToScan.add(m[1]);
      }
    }
  }

  for (const srcDate of sourceDatesToScan) {
    const srcRaw = getRawDailySchedule(srcDate, activeElectives);
    for (const blk of srcRaw.blocks) {
      for (const sub of blk.subtasks) {
        if (movedSubtasks[sub.id] === dateStr) {
          if (!incomingBySubject[sub.subjectId]) incomingBySubject[sub.subjectId] = [];
          incomingBySubject[sub.subjectId].push({
            ...sub,
            isMovedHere: true,
            movedFromDate: srcDate,
          });
        }
      }
    }
  }

  // 2. Формируем склеенные карточки по предметам на dateStr
  const subjectOrder = [];
  const subtasksBySubject = {};
  const metaBySubject = {};
  const movedOutHistoryBySubject = {}; // Выполненные чекбоксы оставляем здесь, а перенесённые показываем компактной плашкой

  for (const blk of rawToday.blocks) {
    if (!subjectOrder.includes(blk.subjectId)) {
      subjectOrder.push(blk.subjectId);
      subtasksBySubject[blk.subjectId] = [];
      metaBySubject[blk.subjectId] = {
        baseTitle: blk.title,
        baseDesc: blk.desc,
      };
      movedOutHistoryBySubject[blk.subjectId] = [];
    }

    for (const sub of blk.subtasks) {
      const movedTo = movedSubtasks[sub.id];
      if (movedTo && movedTo !== dateStr) {
        // Этот чекбокс был перенесён на другой день
        movedOutHistoryBySubject[blk.subjectId].push({
          ...sub,
          movedToDate: movedTo,
        });
      } else {
        subtasksBySubject[blk.subjectId].push({
          ...sub,
          isMovedHere: false,
        });
      }
    }
  }

  // 3. Добавляем входящие перенесённые чекбоксы (ставятся ПЕРЕД сегодняшними параграфами, чтобы идти по порядку §1 → §2 → §3 → §4!)
  for (const [subjId, incList] of Object.entries(incomingBySubject)) {
    incList.sort((a, b) => a.origDate.localeCompare(b.origDate) || a.id.localeCompare(b.id));
    if (!subjectOrder.includes(subjId)) {
      subjectOrder.push(subjId);
      const sObj = SUBJECTS.find((s) => s.id === subjId);
      metaBySubject[subjId] = {
        baseTitle: `${sObj?.shortName || 'Предмет'} (Перенесённое занятие)`,
        baseDesc: rawToday.weekObj.subjects[subjId] || '',
      };
      movedOutHistoryBySubject[subjId] = [];
      subtasksBySubject[subjId] = [...incList];
    } else {
      // Склеиваем: сначала перенесённые ранние параграфы (§1–2), затем плановые сегодняшние (§3–4)!
      subtasksBySubject[subjId] = [...incList, ...subtasksBySubject[subjId]];
    }
  }

  // 4. Собираем итоговые склеенные карточки предметов для отображения
  const mergedCards = subjectOrder
    .map((subjId) => {
      const activeSubs = subtasksBySubject[subjId] || [];
      const movedOutSubs = movedOutHistoryBySubject[subjId] || [];

      if (activeSubs.length === 0 && movedOutSubs.length === 0) return null;

      const totalMins = activeSubs.reduce((s, x) => s + x.mins, 0);
      const doneSubs = activeSubs.filter((x) => completedSubtasks[x.id]);
      const uncheckedSubs = activeSubs.filter((x) => !completedSubtasks[x.id]);
      const doneMins = doneSubs.reduce((s, x) => s + x.mins, 0);
      const remainingMins = uncheckedSubs.reduce((s, x) => s + x.mins, 0);
      const movedInCount = activeSubs.filter((x) => x.isMovedHere).length;
      const movedInMins = activeSubs.filter((x) => x.isMovedHere).reduce((s, x) => s + x.mins, 0);
      const plannedTodayCount = activeSubs.filter((x) => !x.isMovedHere).length;
      const plannedTodayMins = activeSubs.filter((x) => !x.isMovedHere).reduce((s, x) => s + x.mins, 0);

      const nextLessonDate =
        subjId !== 'all' ? findNextLessonDateForSubject(dateStr, subjId, activeElectives) : shiftDateStr(dateStr, 1);

      return {
        id: `card-${dateStr}-${subjId}`,
        subjectId: subjId,
        baseTitle: metaBySubject[subjId]?.baseTitle || '',
        baseDesc: metaBySubject[subjId]?.baseDesc || '',
        subtasks: activeSubs,
        movedOutSubs,
        totalMins,
        doneMins,
        remainingMins,
        doneCount: doneSubs.length,
        uncheckedCount: uncheckedSubs.length,
        movedInCount,
        movedInMins,
        plannedTodayCount,
        plannedTodayMins,
        isMergedCard: movedInCount > 0 && plannedTodayCount > 0,
        allCompleted: activeSubs.length > 0 && uncheckedSubs.length === 0,
        nextLessonDate,
      };
    })
    .filter(Boolean);

  return {
    ...rawToday,
    cards: mergedCards,
  };
}

// Находит все невыполненные чекбоксы за прошедшие дни (< beforeDateStr), которые ещё не были перенесены вперёд
export function findOverdueUncheckedSubtasks(beforeDateStr, state = {}) {
  const activeElectives = state.selectedElectives || ['fisica', 'ingles'];
  const movedSubtasks = state.movedSubtasks || {};
  const completedSubtasks = state.completedSubtasks || {};
  const overdue = [];

  let cur = '2026-11-07';
  while (cur < beforeDateStr && cur <= '2027-06-03') {
    const raw = getRawDailySchedule(cur, activeElectives);
    for (const blk of raw.blocks) {
      if (blk.subjectId === 'all') continue;
      for (const sub of blk.subtasks) {
        const currentDateOfSub = movedSubtasks[sub.id] || cur;
        if (currentDateOfSub < beforeDateStr && !completedSubtasks[sub.id]) {
          overdue.push({
            ...sub,
            currentDate: currentDateOfSub,
          });
        }
      }
    }
    cur = shiftDateStr(cur, 1);
  }
  return overdue;
}
