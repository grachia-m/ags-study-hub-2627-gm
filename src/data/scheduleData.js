// Детальный учебный план по неделям (W01–W30: 07.11.2026 – 03.06.2027) и по дням
// Полностью синхронизирован с официальным календарём CPEPA Miguel Hernández (Huesca) 2026-2027

export const WEEKS_PLAN = [
  // ==================== 1ª EVALUACIÓN (W01 – W06: 07.11.2026 – 20.12.2026) ====================
  {
    week: 'W01',
    eval: 1,
    phase: 'Спринт 1ª Evaluación: База и Unidad 1',
    dates: '07.11 – 15.11.2026',
    startDate: '2026-11-07',
    endDate: '2026-11-15',
    isSprint: true,
    deliverable: 'Вход в Aeducar (сброс таймера 3 недель) + старт U1 по всем 6 предметам',
    subjects: {
      mates: 'U1 §1–4 · Целые числа, дроби («del resto»), проценты (индексы изменения), пропорции (прямая/обратная/сложная) + конспект teoria-mates-1',
      fisica: 'UD1 ч.1 · Инструменты (СИ, перевод единиц, векторы, тригонометрия) + MRU, MRUA, свободное падение + конспект teoria-fisica-1',
      tecno: 'U1 · La energía: единицы (J, cal, kWh, tep), работа, мощность, КПД (η), виды энергии и электростанции + конспект teoria-tecno-1',
      lengua: 'U1 · Коммуникация, 9 частей речи (CUADRO MORFOLOGÍA), наклонения глагола, объективность/субъективность, модальность + конспект teoria-espanol-1',
      ingles: 'U1 + U2 (нач.) · Present Simple/Continuous, Pronouns, Adverbs of frequency, вопросы + Past Simple/Continuous + Autoevaluación U1',
      digital: 'Tema 1 · Операторы поиска (AND, OR, NOT, site:, filetype:), метод SIFT, ИИ-промпты, лицензии Creative Commons, стили Word',
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
    deliverable: 'Готовы: Matemáticas Envío U2 + Física Envío 1 + Lengua Envío 1ª Eval + Inglés Primer Envío (.doc)',
    subjects: {
      mates: 'U2 §4–8 · Системы 2×2 и 3×3 (метод Гаусса), текстовые алгебраические задачи → чистовик Actividades de envío U2 (5 задач)',
      fisica: 'UD2 Dinámica · Законы Ньютона, трение, наклонная плоскость, равновесие на тросах, связанные тела с блоком → задачи №4–6 из Envío 1',
      tecno: 'U2 ч.2 · Termodinámica: 1 и 2 начала, цикл Карно, тепловые двигатели и холодильные машины + разбор Soluciones U2',
      lengua: 'U2 · Пассивный/безличный залог (EXPLICACIONES CLASE 26_10), свойства текста (adecuación, coherencia, cohesión) → выполнение ACTIVIDAD DE ENVÍO 1º EVAL.docx',
      ingles: 'U3 · Future Continuous/Perfect, time clauses, indirect questions + Modelo Examen U3 → выполнение ACFGS INGLÉS ACTIVIDAD PRIMER ENVÍO.docx',
      digital: 'Финальная вычитка и загрузка работы Tema 1 в Aeducar + повторение теории Tema 1 к тесту',
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
    deliverable: '🔥 СРЕДА, 2 ДЕКАБРЯ (до 23:59): Загрузка всех 6 комплектов Actividades de Envío 1ª Evaluación в Aeducar!',
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
    deliverable: 'Полные пробные экзамены (Simulacros) по всем 6 предметам на время',
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
    deliverable: '🎯 ВТ 15.12 (16:00 Lengua, 17:30 Mates, 19:00 Digital) и ЧТ 17.12 (16:00 Inglés, 17:30 Física, 19:00 Tecnología)',
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
      lengua: 'U4 · Сложносочинённые предложения (coordinadas copulativas,adversativas, disyuntivas, explicativas) и бессоюзные (yuxtapuestas)',
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
    deliverable: 'Полный разбор Tecnología U4 по Soluciones',
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
    phase: '2ª Evaluación: Сборка чистовиков Física Envío 2 и Inglés Segundo Envío',
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
    deliverable: 'Готов чистовик Inglés Segundo Envío (.doc/.docx) — все работы 2ª Eval готовы к отправке!',
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
    deliverable: 'Пробные экзамены 2ª Evaluación по всем 6 предметам',
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
    deliverable: '🎯 ВТ 16.03 (16:00 Lengua, 17:30 Mates, 19:00 Digital) и ЧТ 18.03 (16:00 Inglés, 17:30 Física, 19:00 Tecnología)',
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
    deliverable: 'Закрепление U5 Matemáticas, UD5 Física и U7 Inglés',
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
    deliverable: 'Полный разбор Tecnología U5 (Electrónica Digital)',
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
    phase: '3ª Evaluación: Завершение U6 по Математике и Технологии + Модальные глаголы (Inglés U9)',
    dates: '19.04 – 25.04.2027',
    startDate: '2027-04-19',
    endDate: '2027-04-25',
    deliverable: 'Разбор всех задач Tecnología U6 по Soluciones',
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
    deliverable: 'Готов чистовик Inglés Tercer Envío (.doc/.docx) — все работы курса завершены!',
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
    deliverable: '🎓 ВТ 01.06 (16:00 Lengua, 17:30 Mates, 19:00 Digital) и ЧТ 03.06 (16:00 Inglés, 17:30 Física, 19:00 Tecnología)',
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

// Детальное расписание по дням для 41-дневного спринта 1ª Evaluación (07.11.2026 – 17.12.2026)
export const SPRINT_DAILY_OVERRIDES = {
  '2026-11-07': {
    badge: 'ДЕНЬ 1 · СТАРТ СПРИНТА',
    blocks: [
      { id: 'd-2026-11-07-1', subjectId: 'all', mins: 20, title: 'Оргмомент: Вход в Aeducar и проверка личного кабинета', desc: 'Зайти на https://aula2.aeducar.es/, открыть все 6 курсов (это фиксирует активность и защищает от отчисления по правилу 3 недель).' },
      { id: 'd-2026-11-07-2', subjectId: 'mates', mins: 90, title: 'Matemáticas U1 §1–2 + Конспект teoria-mates-1 (разделы 1–3)', desc: 'Изучить целые числа, порядок операций, дроби и ключевую ловушку задач типа «del resto» (остаток от остатка). Решить базовые примеры из апунтов U1.' },
      { id: 'd-2026-11-07-3', subjectId: 'fisica', mins: 90, title: 'Física UD1: Инструменты физики (конспект teoria-fisica-1, разделы 1–5)', desc: 'Перевод единиц в СИ (км/ч → м/с через ÷3,6), научная нотация, выразить переменную из формулы (despejar), тригонометрия прямоугольного треугольника и проекции векторов.' },
      { id: 'd-2026-11-07-4', subjectId: 'lengua', mins: 60, title: 'Lengua U1 §1–2 + конспект teoria-espanol-1 (разделы 1–2)', desc: '6 элементов коммуникации (emisor, receptor, mensaje, canal, código, contexto/situación) и таблица 9 частей речи (CUADRO MORFOLOGÍA.pdf).' },
    ],
  },
  '2026-11-08': {
    badge: 'ДЕНЬ 2 · БАЗА U1',
    blocks: [
      { id: 'd-2026-11-08-1', subjectId: 'tecno', mins: 90, title: 'Tecnología II U1 §1–3 + конспект teoria-tecno-1', desc: 'Единицы энергии (J, cal, kWh, tep), факторы конверсии, механическая работа W, мощность P и КПД (rendimiento η = P_útil / P_consumida).' },
      { id: 'd-2026-11-08-2', subjectId: 'ingles', mins: 75, title: 'Inglés U1: Present Simple vs Continuous, Pronouns & Questions', desc: 'Прочитать теорию AGS INGLÉS Unidad 1.pdf, выполнить упражнения на самопроверку и сверить по solucionario autoevaluaciones unidad 1 ing.pdf.' },
      { id: 'd-2026-11-08-3', subjectId: 'digital', mins: 60, title: 'Competencia Digital Tema 1: Поисковые операторы и метод SIFT', desc: 'Изучить Tema1_Búsqueda información.pdf (операторы AND, OR, NOT, кавычки, site:, filetype:, оценка источников SIFT, лицензии Creative Commons).' },
      { id: 'd-2026-11-08-4', subjectId: 'mates', mins: 45, title: 'Matemáticas U1: Практика задач на дроби (Actividades de envío U1, задачи №1–2)', desc: 'Решить на черновике задачи №1 (завтрак на 153 чел.) и №2 (зарплата Надии) из Actividades de envío unidad 1.pdf.' },
    ],
  },
  '2026-11-09': {
    badge: 'ДЕНЬ 3 · ПРОЦЕНТЫ И ТЕКСТ',
    blocks: [
      { id: 'd-2026-11-09-1', subjectId: 'mates', mins: 75, title: 'Matemáticas U1 §3: Проценты и индексы изменения', desc: 'Изучить разделы 4–5 в teoria-mates-1 (цепочки скидок/наценок, возврат к исходной цене, tasa de variación). Решить задачи №3 и №4 из Envío U1 (смета Марты и масло).' },
      { id: 'd-2026-11-09-2', subjectId: 'lengua', mins: 60, title: 'Lengua U1 §3–4: Наклонения глагола, объективность/субъективность и модальность', desc: 'Изучить разделы 3–5 в teoria-espanol-1: маркеры субъективности и 6 модальностей высказывания (enunciativa, interrogativa, exclamativa, exhortativa, dubitativa, desiderativa).' },
    ],
  },
  '2026-11-10': {
    badge: 'ДЕНЬ 4 · MRU/MRUA И АНГЛИЙСКИЙ',
    blocks: [
      { id: 'd-2026-11-10-1', subjectId: 'fisica', mins: 75, title: 'Física UD1 §1–3: Прямолинейное движение MRU и MRUA', desc: 'Изучить разделы 6–8 в teoria-fisica-1 (уравнения движения, графики x(t) и v(t), задачи на встречу и догонялки). Решить задачу №1 из Envío 1 Física (велосипедистка).' },
      { id: 'd-2026-11-10-2', subjectId: 'ingles', mins: 60, title: 'Inglés U1: Разбор правил чтения и Modelo de Examen U1', desc: 'Прочитать правила цитирования в consejos-para-realizar-actividades-de-envio.md и прорешать ACGS_Ingles_u1_mexamen26.pdf со сверкой по ответам.' },
    ],
  },
  '2026-11-11': {
    badge: 'ДЕНЬ 5 · ПРОПОРЦИИ + ТУТОРИЯ FÍSICA',
    blocks: [
      { id: 'd-2026-11-11-1', subjectId: 'mates', mins: 60, title: 'Matemáticas U1 §4: Прямая, обратная и сложная пропорциональность, распределения', desc: 'Изучить разделы 6–8 в teoria-mates-1. Решить задачи №5 (рынок: прямые и обратные пропорции) и №6 (оптоволокно) из Envío U1.' },
      { id: 'd-2026-11-11-2', subjectId: 'tecno', mins: 50, title: 'Tecnología II U1 §4–7: Виды энергии, теплотворная способность и электростанции', desc: 'Разобрать формулы E_c, E_p, Q = m·c·ΔT, Q = m·P_c и схемы ТЭС/АЭС/ГЭС. Прорешать задачи из Soluciones U1 energía.' },
      { id: 'd-2026-11-11-3', subjectId: 'fisica', mins: 45, title: '18:15 — Онлайн-тутория по Физике + Свободное падение', desc: 'Подключиться к групповой тутории Física в 18:15 (Catalina Pena Rufas) и разобрать раздел 9 конспекта (caída libre y lanzamiento vertical).' },
    ],
  },
  '2026-11-12': {
    badge: 'ДЕНЬ 6 · БРОСКИ + ТУТОРИЯ TECNOLOGÍA',
    blocks: [
      { id: 'd-2026-11-12-1', subjectId: 'fisica', mins: 65, title: 'Física UD1 §4: Горизонтальный и параболический бросок', desc: 'Разложить движение по осям X (MRU) и Y (MRUA с −g). Решить задачу №2 из Envío 1 Física (гаечный ключ с лесов 20 м).' },
      { id: 'd-2026-11-12-2', subjectId: 'lengua', mins: 50, title: 'Lengua U1 §5–6: Гуманитарные и научно-технические тексты + самопроверка U1', desc: 'Изучить раздел 6 в teoria-espanol-1 и выполнить упражнения из UNIDAD 1.pdf, сверив их с SOLUCIONARIO U-1 AUTOCORRECCIÓN.pdf.' },
      { id: 'd-2026-11-12-3', subjectId: 'tecno', mins: 45, title: '20:15 — Онлайн-тутория по Технологии', desc: 'Подключиться к групповой тутории Tecnología e Ingeniería в 20:15 (Aitor Alfonso Rodríguez).' },
    ],
  },
  '2026-11-13': {
    badge: 'ДЕНЬ 7 · ПЯТНИЦА: ЧИСТОВИК MAT U1 + DIGITAL',
    blocks: [
      { id: 'd-2026-11-13-1', subjectId: 'mates', mins: 65, title: 'Matemáticas: Сверка с Soluciones U1 и написание чистовика Envío U1', desc: 'Сверить тренировочные задачи с Soluciones ejercicios unidad 1.pdf и аккуратно переписать от руки все 6 задач Actividades de envío U1 (проверив видимые числа!).' },
      { id: 'd-2026-11-13-2', subjectId: 'digital', mins: 65, title: 'Competencia Digital Envío 1: Таблица 8 поисковых запросов и 4 источников', desc: 'Создать файл Martirosian_Grachia_ActividadEnvio1.docx, оформить Actividad 1 (введение 80–120 слов про семью FP Informática y Comunicaciones + таблица 8 запросов с site:aragon.es / filetype:pdf + таблица 4 источников).' },
    ],
  },
  '2026-11-14': {
    badge: 'ДЕНЬ 8 · СУББОТА: MCU + АЛГЕБРА U2 + LENGUA U2',
    blocks: [
      { id: 'd-2026-11-14-1', subjectId: 'fisica', mins: 100, title: 'Física UD1 §5 (MCU) + Старт UD2 Dinámica', desc: 'Разобрать круговое движение MCU (ω = 2π/T, v = ω·R, a_n = v²/R) и решить задачу №3 из Envío 1 (колесо обозрения R=18 м, T=40 с). Начать чтение UD2 Dinámica.pdf (законы Ньютона, вес, нормальная реакция, трение).' },
      { id: 'd-2026-11-14-2', subjectId: 'mates', mins: 90, title: 'Matemáticas U2 §1–3: Многочлены, формулы сокращённого умножения и уравнения 1–2 степени', desc: 'Изучить U2 в Apuntes completos. Решить задачи №1 (пруд с дорожкой), №2 (телефонный счёт) и №3 (огород 96 м²) из Actividades de envío U2.' },
      { id: 'd-2026-11-14-3', subjectId: 'lengua', mins: 75, title: 'Lengua U2 §1–3 + EXPLICACIONES CLASE 26_10.pdf', desc: 'Изучить функции языка, типы синтагм, страдательный залог (pasiva perifrástica vs pasiva refleja), безличные предложения с «se» и правило формулировки TEMA (<12 слов, без глагола).' },
    ],
  },
  '2026-11-15': {
    badge: 'ДЕНЬ 9 · ВОСКРЕСЕНЬЕ: МЕХАНИКА U2 + INGLÉS U2 + DIGITAL',
    blocks: [
      { id: 'd-2026-11-15-1', subjectId: 'tecno', mins: 100, title: 'Tecnología II U2 ч.1: Крутящий момент, шестерни, редукторы и шкивы', desc: 'Изучить первую половину unidad 2 mecánica v1.0.pdf (P = M·ω, передаточное отношение i = Z₁/Z₂ = N₂/N₁, червячная передача, ременные и цепные передачи).' },
      { id: 'd-2026-11-15-2', subjectId: 'ingles', mins: 90, title: 'Inglés U2: Past Simple/Continuous, Present & Past Perfect, Used to', desc: 'Изучить AGS INGLÉS Unidad 2.pdf, сверить autoevaluaciones U2 и прорешать модель экзамена ACGS_Ingles_u2_mexamen26.pdf.' },
      { id: 'd-2026-11-15-3', subjectId: 'digital', mins: 70, title: 'Competencia Digital Envío 1: Завершение Actividad 2 и Actividad 3 (.docx)', desc: 'Дописать в Martirosian_Grachia_ActividadEnvio1.docx раздел с ИИ-промптом и карточку семьи FP (со стилями Título 1/2, таблицей, картинкой CC, колонтитулом и нумерацией страниц; БЕЗ астронавта!).' },
    ],
  },
};

const RU_DAYS = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const RU_DAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

export function findWeekForDate(dateStr) {
  return (
    WEEKS_PLAN.find((w) => dateStr >= w.startDate && dateStr <= w.endDate) ||
    WEEKS_PLAN[0]
  );
}

// Генерирует структурированный план на любой выбранный день с 07.11.2026 по 03.06.2027
export function getDailySchedule(dateStr) {
  const d = new Date(`${dateStr}T12:00:00`);
  const dow = d.getDay(); // 0=Sun .. 6=Sat
  const dayName = RU_DAYS[dow];
  const dayShort = RU_DAYS_SHORT[dow];
  const weekObj = findWeekForDate(dateStr);

  if (SPRINT_DAILY_OVERRIDES[dateStr]) {
    const ov = SPRINT_DAILY_OVERRIDES[dateStr];
    return {
      dateStr,
      dayName,
      dayShort,
      weekObj,
      badge: ov.badge,
      blocks: ov.blocks,
    };
  }

  // Специальные дни дедлайнов и очных экзаменов
  if (dateStr === '2026-12-02' || dateStr === '2027-03-03' || dateStr === '2027-05-19') {
    const evalNum = dateStr === '2026-12-02' ? 1 : dateStr === '2027-03-03' ? 2 : 3;
    return {
      dateStr,
      dayName,
      dayShort,
      weekObj,
      badge: `🔥 ОФИЦИАЛЬНЫЙ ДЕДЛАЙН ${evalNum}ª EVALUACIÓN (до 23:59)`,
      blocks: [
        {
          id: `d-${dateStr}-1`,
          subjectId: 'all',
          mins: 60,
          title: `Контрольная проверка и загрузка всех Actividades de Envío (${evalNum}ª Evaluación) в Aeducar`,
          desc: 'Проверить имена файлов, наличие ФИО внутри каждого документа, формат (.docx для Inglés и Digital, PDF-скан для Matemáticas и Física) и убедиться, что статус доставки в Aeducar — «Enviado para calificar».',
        },
        {
          id: `d-${dateStr}-2`,
          subjectId: 'mates',
          mins: 45,
          title: 'Онлайн-тутория / Повторение Matemáticas',
          desc: weekObj.subjects.mates,
        },
        {
          id: `d-${dateStr}-3`,
          subjectId: 'ingles',
          mins: 45,
          title: 'Онлайн-тутория / Повторение Inglés',
          desc: weekObj.subjects.ingles,
        },
      ],
    };
  }

  if (dateStr === '2026-12-15' || dateStr === '2027-03-16' || dateStr === '2027-06-01') {
    const evalNum = dateStr === '2026-12-15' ? 1 : dateStr === '2027-03-16' ? 2 : 3;
    return {
      dateStr,
      dayName,
      dayShort,
      weekObj,
      badge: `🎯 ДЕНЬ ОЧНЫХ ЭКЗАМЕНОВ (${evalNum}ª EVAL — COMPETENCIAS)`,
      blocks: [
        { id: `d-${dateStr}-1`, subjectId: 'lengua', mins: 90, title: '16:00 — Очный экзамен: Competencia en Lengua Castellana', desc: 'Явиться в Centro de Adultos заранее с документом DNI/NIE и ручками (чёрная/синяя).' },
        { id: `d-${dateStr}-2`, subjectId: 'mates', mins: 90, title: '17:30 — Очный экзамен: Competencia Matemática', desc: 'Взять разрешённый научный непрограммируемый калькулятор. Писать полный ход решения каждой задачи!' },
        { id: `d-${dateStr}-3`, subjectId: 'digital', mins: 90, title: '19:00 — Очный экзамен: Competencia Básica Digital', desc: 'Вопросы аналогичны выполненным заданиям Actividades de envío.' },
      ],
    };
  }

  if (dateStr === '2026-12-17' || dateStr === '2027-03-18' || dateStr === '2027-06-03') {
    const evalNum = dateStr === '2026-12-17' ? 1 : dateStr === '2027-03-18' ? 2 : 3;
    return {
      dateStr,
      dayName,
      dayShort,
      weekObj,
      badge: `🎯 ДЕНЬ ОЧНЫХ ЭКЗАМЕНОВ (${evalNum}ª EVAL — MATERIAS ESPECÍFICAS)`,
      blocks: [
        { id: `d-${dateStr}-1`, subjectId: 'ingles', mins: 90, title: '16:00 — Очный экзамен: Lengua Extranjera II (Inglés)', desc: 'Писать полностью "True"/"False", цитировать строки в кавычках, в сочинении минимум 100 слов в 4 абзацах.' },
        { id: `d-${dateStr}-2`, subjectId: 'fisica', mins: 90, title: '17:30 — Очный экзамен: Física', desc: 'Переводить все величины в СИ в начале задачи, делать чертёж сил/осей и подписывать единицы измерения в ответе.' },
        { id: `d-${dateStr}-3`, subjectId: 'tecno', mins: 90, title: '19:00 — Очный экзамен: Tecnología e Ingeniería II', desc: 'Внимательно следить за размерностями (кВт·ч vs Дж, бар vs Па, мм² vs м²).' },
      ],
    };
  }

  // Шаблон распределения предметов по дням недели (Пн–Вс) внутри любой недели W01–W30
  const isSprint = Boolean(weekObj.isSprint);
  const templatesByDow = {
    1: [
      // Понедельник
      { subjectId: 'mates', mins: isSprint ? 75 : 60, label: 'Matemáticas (теория и разбор примеров)' },
      { subjectId: 'lengua', mins: isSprint ? 60 : 45, label: 'Lengua Castellana (грамматика, текст и тутория)' },
    ],
    2: [
      // Вторник
      { subjectId: 'fisica', mins: isSprint ? 75 : 60, label: 'Física (теория и разбор формул)' },
      { subjectId: 'ingles', mins: isSprint ? 60 : 45, label: 'Inglés (грамматика, Reading и лексика)' },
    ],
    3: [
      // Среда
      { subjectId: 'tecno', mins: isSprint ? 70 : 60, label: 'Tecnología e Ingeniería II (теория и расчёты)' },
      { subjectId: 'mates', mins: isSprint ? 60 : 45, label: 'Matemáticas (практика задач и Envío)' },
    ],
    4: [
      // Четверг
      { subjectId: 'fisica', mins: isSprint ? 70 : 60, label: 'Física (решение задач и Envío)' },
      { subjectId: 'lengua', mins: isSprint ? 55 : 45, label: 'Lengua Castellana (практика комментария и синтаксиса)' },
    ],
    5: [
      // Пятница
      { subjectId: 'mates', mins: isSprint ? 60 : 45, label: 'Matemáticas (контрольные задачи недели)' },
      { subjectId: 'digital', mins: isSprint ? 60 : 45, label: 'Competencia Digital (теория и практика Envío)' },
    ],
    6: [
      // Суббота
      { subjectId: 'fisica', mins: 100, label: 'Física (глубокий практикум и задачи Envío/экзамена)' },
      { subjectId: 'mates', mins: 90, label: 'Matemáticas (большой блок решения задач)' },
      { subjectId: 'lengua', mins: 70, label: 'Lengua Castellana (письменная практика и самопроверка)' },
    ],
    0: [
      // Воскресенье
      { subjectId: 'tecno', mins: 100, label: 'Tecnología e Ingeniería II (практикум по задачам и Soluciones)' },
      { subjectId: 'ingles', mins: 85, label: 'Inglés (Modelo de Examen, Rephrasing и Writing 100+ слов)' },
      { subjectId: 'digital', mins: 55, label: 'Competencia Digital + Итоговое повторение недели' },
    ],
  };

  const dayTemplate = templatesByDow[dow] || templatesByDow[1];
  const blocks = dayTemplate.map((item, idx) => ({
    id: `d-${dateStr}-${idx + 1}`,
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
    blocks,
  };
}
