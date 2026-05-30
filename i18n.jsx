// i18n.jsx — Translation dictionaries and useT() hook for ru/en/es

window.LANGS = [
  { id: 'ru', label: 'RU' },
  { id: 'en', label: 'EN' },
  { id: 'es', label: 'ES' },
];

window.DICT = {
  ru: {
    nav: { projects: 'Проекты', services: 'Услуги', process: 'Процесс', faq: 'FAQ', cta: 'Связаться', studio: 'Студия дизайна' },
    hero: {
      titleL1: 'Компо', titleL2: 'нент',
      sub: 'Студия дизайна и разработки, готовая к\u00A0реализации проектов любой сложности — от\u00A0идентики до\u00A0интерфейсов.',
      ctaStart: 'Обсудить проект', ctaWorks: 'Смотреть работы',
      stats: [
        { num: '82+', lbl: 'Реализованных проектов с\u00A02019 года' },
        { num: '14',  lbl: 'Наград и\u00A0признаний индустрии' },
        { num: '06',  lbl: 'Дизайнеров и\u00A0разработчиков в\u00A0команде' },
        { num: '98%', lbl: 'Клиентов возвращаются с\u00A0новыми задачами' },
      ],
    },
    marquee: ['Брендинг','Веб-дизайн','Интерфейсы','Типографика','Анимация','Айдентика'],
    projects: {
      eyebrow: 'Проекты', titleA: 'Избранные', titleB: 'работы', showMore: 'Показать ещё',
      filters: { all: 'Все', uxui: 'UX/UI', dev: 'Разработка', landings: 'Лендинги', identity: 'Айдентика', presentations: 'Презентации' },
      cats:    { uxui: 'UX/UI', dev: 'Разработка', landings: 'Лендинг', identity: 'Айдентика', presentations: 'Презентации' },
      names: {
        greenclient: 'Проверка партнёра', phodo: 'Phodo', kovry: 'Сибирские ковры', lamoda: 'Lamoda · Продавец', colorforce: 'ColorForce',
        misis: 'МИСИС · Mini App', innovators: 'Академия инноваторов', mpit: 'МПИТ',
        course: 'Онлайн-курс', quantum: 'Samarkand Quantum Centre', easysale: 'EasySale',
      },
    },
    services: {
      eyebrow: 'Услуги', titleA: 'Что мы', titleB: 'делаем',
      items: [
        { title: 'Айдентика',     desc: 'Логотипы, фирменные стили и брендбуки, которые работают вдолгую.' },
        { title: 'Веб-дизайн',     desc: 'Сайты и интерфейсы — точные, быстрые, продуманные до мелочей.' },
        { title: 'UX/UI дизайн',   desc: 'Продуктовые интерфейсы и сценарии, которые выдерживают тесты с пользователями.' },
        { title: 'Разработка',    desc: 'От лендингов до сложных продуктов — пишем чистый код, который масштабируется.' },
        { title: 'СММ',           desc: 'Стратегия, контент и ведение — соцсети, которые работают на продажи и репутацию.' },
        { title: 'Аутсорс',       desc: 'Подключаемся к вашей команде на спринты — дизайнером, разработчиком или продюсером.' },
        { title: 'ИИ-проекты',    desc: 'ИИ-видео и ИИ-реклама — генеративные ролики, аватары и кампании.' },
      ],
    },
    about: {
      eyebrow: 'О студии', titleA: 'Маленькая', titleB: 'команда',
      statement: 'Мы — <b>шесть человек</b>, которые предпочитают сделать одну хорошую вещь, чем&nbsp;десять громких. Работаем напрямую с&nbsp;основателями: <b>без аккаунт-менеджеров, без&nbsp;презентаций, без&nbsp;театра.</b>',
      meta: [
        { lbl: 'Локация',      val: 'Москва · удалённо' },
        { lbl: 'Часовой пояс', val: 'MSK · UTC+3' },
        { lbl: 'Языки',        val: 'RU · EN · DE' },
        { lbl: 'Статус',       val: 'Свободны со 2 кв. 2026' },
      ],
      stats: [
        { num: '82+', lbl: 'Запущенных систем айдентики и\u00A0продуктов' },
        { num: '14',  lbl: 'Профессиональных наград индустрии' },
        { num: '06',  lbl: 'Дизайнеров и\u00A0инженеров под одной крышей' },
      ],
    },
    process: {
      eyebrow: 'Наш процесс', titleA: 'Семь', titleB: 'шагов',
      stepLabel: 'Шаг',
      steps: [
        { t: 'Заявка',                d: 'Клиент оставляет заявку на&nbsp;сайте или в&nbsp;мессенджере, кратко описывая задачу и&nbsp;контакты. Мы фиксируем запрос и&nbsp;связываемся в&nbsp;течение рабочего дня.', dur: '1 день' },
        { t: 'Звонок-знакомство',     d: 'Созваниваемся на&nbsp;20–30 минут, чтобы обсудить цели проекта, сроки, бюджет и&nbsp;понять, подходим ли мы друг другу.', dur: '30 мин.' },
        { t: 'КП и\u00a0договор',     d: 'Готовим детальное КП с&nbsp;объёмом работ, этапами и&nbsp;стоимостью, после согласования подписываем договор и&nbsp;принимаем предоплату.', dur: '3–5 дн.' },
        { t: 'Исследование',          d: 'Изучаем нишу, конкурентов и&nbsp;целевую аудиторию, чтобы дизайн строился на&nbsp;данных, а&nbsp;не на&nbsp;догадках.', dur: '1–2 нед.' },
        { t: 'Итерационный дизайн',   d: 'Разрабатываем концепции и&nbsp;развиваем макеты пошагово, показывая промежуточные результаты и&nbsp;обсуждая направление с&nbsp;вами.', dur: '4–8 нед.' },
        { t: '2 итерации правок',     d: 'Вы даёте обратную связь, а&nbsp;мы вносим до&nbsp;двух раундов правок, доводя проект до&nbsp;финального вида без&nbsp;бесконечных переделок.', dur: '1–2 нед.' },
        { t: 'Ваш проект готов',      d: 'Передаём исходники и&nbsp;все необходимые материалы, помогаем с&nbsp;запуском и&nbsp;остаёмся на&nbsp;связи для дальнейшей поддержки.', dur: 'запуск' },
      ],
    },
    faq: {
      eyebrow: 'Вопросы', titleA: 'Часто', titleB: 'спрашивают',
      items: [
        { q: 'Как обычно начинается работа?', a: 'Тридцатиминутный созвон, затем письменное предложение в&nbsp;течение пяти рабочих дней. Чётко обозначаем объём, бюджет и&nbsp;то, чего мы делать не&nbsp;будем.' },
        { q: 'Сколько стоит проект?',        a: 'Айдентика — от&nbsp;1,5 млн ₽. Веб- и&nbsp;продуктовые проекты считаем по&nbsp;объёму. Месячный ретейнер — от&nbsp;500 000 ₽.' },
        { q: 'Берёте ли разовые задачи?',    a: 'Да — отдельные знаки, шрифтовые семейства, выпуски изданий. Если&nbsp;бриф ясный — нам комфортно с&nbsp;маленьким объёмом.' },
        { q: 'Где вы находитесь?',           a: 'Москва, с&nbsp;коллабораторами в&nbsp;Берлине и&nbsp;Лиссабоне. Работаем по&nbsp;московскому времени и&nbsp;запускаем проекты по&nbsp;всему миру.' },
        { q: 'Можно нанять одного человека из&nbsp;команды?', a: 'Нет. Мы работаем как студия. Вы получаете всех нас или&nbsp;никого.' },
      ],
    },
    contact: {
      title: 'Связаться',
      sub: 'Мы готовы обсудить ваш проект<br/>и предложить лучшие решения<br/>для его реализации',
      fields: { email: 'Введите почту / ник в telegram', name: 'Введите ФИО', promo: 'Введите промокод', descr: 'Введите описание проекта' },
      submit: 'Отправить',
      sending: 'Отправляем…',
      success: 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.',
      error: 'Не удалось отправить. Попробуйте ещё раз или напишите нам на почту.',
      legal: 'Нажимая кнопку «Связаться», вы&nbsp;соглашаетесь с&nbsp;политикой обработки персональных данных.',
    },
    footer: {
      contact: {
        title: 'Контакты',
        rows: [
          { label: 'Обсудить проект',  email: 'info@componentstudio.ru' },
          { label: 'Хотите у\u00A0нас работать?', email: 'hr@componentstudio.ru' },
          { label: 'Хотите сотрудничать?', email: 'smm@componentstudio.ru' },
        ],
      },
      studio: {
        title: 'Студия',
        lines: [
          'Москва,',
          'Санкт-Петербург',
        ],
        legal: [
          'ИП\u00A0Мелихова Д.\u00A0О.',
          'ОГРНИП 325100000002777',
        ],
        privacy: { label: 'Политика конфиденциальности', href: 'Privacy.html' },
      },
      social: {
        title: 'Соцсети',
        links: [
          { label: 'Telegram',  href: 'https://t.me/componentstudio' },
          { label: 'Вконтакте', href: 'https://vk.com/componentstudio' },
        ],
      },
      navTitle:   'Навигация',
      copyright:  '2026 Компонент®',
      madeIn:     'Сделано с\u00A0вниманием',
    },
    cookies: {
      text:    'Этот веб-сайт использует файлы cookie, чтобы обеспечить вам наилучший опыт',
      accept:  'ОК',
      decline: 'Отказаться',
    },
    tweaks: {
      accent: 'Цвет акцента',
      density: 'Плотность карточек',
      spacious: 'Просторно', compact: 'Компактно',
      colors: { violet: 'Фиолетовый', indigo: 'Индиго', magenta: 'Маджента', teal: 'Бирюза', midnight: 'Полночь' },
      lang: 'Язык',
    },
  },

  en: {
    nav: { projects: 'Projects', services: 'Services', process: 'Process', faq: 'FAQ', cta: 'Get in touch', studio: 'Design studio' },
    hero: {
      titleL1: 'Kompo', titleL2: 'nent',
      sub: 'A design and development studio, ready to deliver projects of any complexity — from identity to interfaces.',
      ctaStart: 'Discuss a project', ctaWorks: 'View works',
      stats: [
        { num: '82+', lbl: 'Projects shipped since 2019' },
        { num: '14',  lbl: 'Industry awards and recognitions' },
        { num: '06',  lbl: 'Designers and developers on the team' },
        { num: '98%', lbl: 'Clients return with new briefs' },
      ],
    },
    marquee: ['Branding','Web design','Interfaces','Typography','Motion','Identity'],
    projects: {
      eyebrow: 'Projects', titleA: 'Selected', titleB: 'works', showMore: 'Show more',
      filters: { all: 'All', uxui: 'UX/UI', dev: 'Development', landings: 'Landings', identity: 'Identity', presentations: 'Presentations' },
      cats:    { uxui: 'UX/UI', dev: 'Development', landings: 'Landing', identity: 'Identity', presentations: 'Presentations' },
      names: {
        greenclient: 'Partner Check', phodo: 'Phodo', kovry: 'Siberian Carpets', lamoda: 'Lamoda · Seller', colorforce: 'ColorForce',
        misis: 'MISIS · Mini App', innovators: 'Innovators Academy', mpit: 'MPIT',
        course: 'Online course', quantum: 'Samarkand Quantum Centre', easysale: 'EasySale',
      },
    },
    services: {
      eyebrow: 'Services', titleA: 'What we', titleB: 'do',
      items: [
        { title: 'Identity',      desc: 'Logos, brand systems, and guidelines that age well.' },
        { title: 'Web design',    desc: 'Websites and interfaces — precise, fast, considered down to the detail.' },
        { title: 'UX/UI design',  desc: 'Product interfaces and flows that survive user testing.' },
        { title: 'Development',   desc: 'From landings to complex products — clean code that scales.' },
        { title: 'SMM',           desc: 'Strategy, content, and execution — social that drives sales and reputation.' },
        { title: 'Outsourcing',   desc: 'Plug into your team for sprints — as a designer, developer, or producer.' },
        { title: 'AI projects',   desc: 'AI-driven video and ads — generative reels, avatars, and campaigns.' },
      ],
    },
    about: {
      eyebrow: 'About', titleA: 'A small', titleB: 'team',
      statement: "We're <b>six people</b> who'd rather make one good thing than ten loud ones. We work directly with founders: <b>no account managers, no pitch decks, no theater.</b>",
      meta: [
        { lbl: 'Location', val: 'Moscow · remote' },
        { lbl: 'Timezone', val: 'MSK · UTC+3' },
        { lbl: 'Languages', val: 'RU · EN · DE' },
        { lbl: 'Status',   val: 'Available from Q2 2026' },
      ],
      stats: [
        { num: '82+', lbl: 'Identity and product systems shipped' },
        { num: '14',  lbl: 'Industry awards' },
        { num: '06',  lbl: 'Designers and engineers under one roof' },
      ],
    },
    process: {
      eyebrow: 'Our process', titleA: 'Seven', titleB: 'steps',
      stepLabel: 'Step',
      steps: [
        { t: 'Request',              d: 'The client submits a request on the site or via messenger with a short brief and contacts. We log it and reply within one business day.', dur: '1 day' },
        { t: 'Intro call',           d: 'A 20–30 minute call to talk through goals, timeline, budget — and check whether we’re a good fit.', dur: '30 min' },
        { t: 'Proposal & contract',  d: 'We prepare a detailed proposal with scope, milestones and price. Once approved, we sign the contract and take the deposit.', dur: '3–5 days' },
        { t: 'Research',             d: 'We study the niche, competitors and audience so the design is grounded in data, not guesses.', dur: '1–2 weeks' },
        { t: 'Iterative design',     d: 'We develop concepts and evolve mockups step by step, sharing interim results and discussing direction with you.', dur: '4–8 weeks' },
        { t: '2 rounds of edits',    d: 'You give feedback, we apply up to two rounds of revisions — bringing the project to its final form without endless rework.', dur: '1–2 weeks' },
        { t: 'Project ready',        d: 'We hand over the source files and all assets, help with launch, and stay in touch for ongoing support.', dur: 'launch' },
      ],
    },
    faq: {
      eyebrow: 'FAQ', titleA: 'Frequently', titleB: 'asked',
      items: [
        { q: 'How does the work usually start?', a: "A thirty-minute call, then a written proposal within five business days. We're clear about scope, budget, and what we won't do." },
        { q: 'How much does a project cost?',    a: 'Identity from ₽1.5M. Web and product projects priced by scope. Monthly retainer from ₽500K.' },
        { q: 'Do you take one-off briefs?',      a: 'Yes — standalone marks, type families, single publications. If the brief is clear, small scope is fine.' },
        { q: 'Where are you based?',             a: 'Moscow, with collaborators in Berlin and Lisbon. We run on Moscow time and ship work worldwide.' },
        { q: 'Can we hire one person from the team?', a: 'No. We work as a studio. You get all of us, or none of us.' },
      ],
    },
    contact: {
      title: 'Get in touch',
      sub: "We're ready to discuss your project<br/>and propose the best solutions<br/>to bring it to life",
      fields: { email: 'Email or Telegram handle', name: 'Your full name', promo: 'Promo code', descr: 'Project description' },
      submit: 'Send',
      sending: 'Sending…',
      success: 'Request sent! We’ll get back to you shortly.',
      error: 'Could not send. Please try again or email us directly.',
      legal: "By clicking 'Send', you agree to our privacy policy.",
    },
    footer: {
      contact: {
        title: 'Contacts',
        rows: [
          { label: 'Discuss a project', email: 'info@componentstudio.ru' },
          { label: 'Want to work with us?', email: 'hr@componentstudio.ru' },
          { label: 'Want to collaborate?',  email: 'smm@componentstudio.ru' },
        ],
      },
      studio: {
        title: 'Studio',
        lines: [
          'Moscow,',
          'Saint Petersburg',
        ],
        legal: [
          'IE Melikhova D.\u00A0O.',
          'OGRNIP 325100000002777',
        ],
        privacy: { label: 'Privacy Policy', href: 'Privacy.html' },
      },
      social: {
        title: 'Social',
        links: [
          { label: 'Telegram', href: 'https://t.me/componentstudio' },
          { label: 'VK',       href: 'https://vk.com/componentstudio' },
        ],
      },
      navTitle:   'Navigation',
      copyright:  '2026 Komponent®',
      madeIn:     'Made with care',
    },
    cookies: {
      text:    'This website uses cookies to give you the best possible experience.',
      accept:  'OK',
      decline: 'Decline',
    },
    tweaks: {
      accent: 'Accent color',
      density: 'Card density',
      spacious: 'Spacious', compact: 'Compact',
      colors: { violet: 'Violet', indigo: 'Indigo', magenta: 'Magenta', teal: 'Teal', midnight: 'Midnight' },
      lang: 'Language',
    },
  },

  es: {
    nav: { projects: 'Proyectos', services: 'Servicios', process: 'Proceso', faq: 'FAQ', cta: 'Contactar', studio: 'Estudio de diseño' },
    hero: {
      titleL1: 'Kompo', titleL2: 'nent',
      sub: 'Un estudio de diseño y desarrollo, listo para entregar proyectos de cualquier complejidad — desde la identidad hasta las interfaces.',
      ctaStart: 'Discutir un proyecto', ctaWorks: 'Ver trabajos',
      stats: [
        { num: '82+', lbl: 'Proyectos entregados desde 2019' },
        { num: '14',  lbl: 'Premios y reconocimientos de la industria' },
        { num: '06',  lbl: 'Diseñadores y desarrolladores en el equipo' },
        { num: '98%', lbl: 'Clientes que regresan con nuevos encargos' },
      ],
    },
    marquee: ['Branding','Diseño web','Interfaces','Tipografía','Animación','Identidad'],
    projects: {
      eyebrow: 'Proyectos', titleA: 'Trabajos', titleB: 'seleccionados', showMore: 'Ver más',
      filters: { all: 'Todos', uxui: 'UX/UI', dev: 'Desarrollo', landings: 'Landings', identity: 'Identidad', presentations: 'Presentaciones' },
      cats:    { uxui: 'UX/UI', dev: 'Desarrollo', landings: 'Landing', identity: 'Identidad', presentations: 'Presentaciones' },
      names: {
        greenclient: 'Verificación de socio', phodo: 'Phodo', kovry: 'Alfombras Siberianas', lamoda: 'Lamoda · Vendedor', colorforce: 'ColorForce',
        misis: 'MISIS · Mini App', innovators: 'Academia de Innovadores', mpit: 'MPIT',
        course: 'Curso online', quantum: 'Samarkand Quantum Centre', easysale: 'EasySale',
      },
    },
    services: {
      eyebrow: 'Servicios', titleA: 'Lo que', titleB: 'hacemos',
      items: [
        { title: 'Identidad',     desc: 'Logos, sistemas de marca y guías que envejecen bien.' },
        { title: 'Diseño web',    desc: 'Sitios e interfaces — precisos, rápidos, cuidados hasta el detalle.' },
        { title: 'Diseño UX/UI',  desc: 'Interfaces de producto y flujos que pasan el test de usuario.' },
        { title: 'Desarrollo',    desc: 'Desde landings hasta productos complejos — código limpio que escala.' },
        { title: 'SMM',           desc: 'Estrategia, contenido y gestión — redes que generan ventas y reputación.' },
        { title: 'Outsourcing',   desc: 'Nos sumamos a tu equipo por sprints — como diseñador, dev o productor.' },
        { title: 'Proyectos de IA', desc: 'Vídeo y publicidad con IA — reels generativos, avatares y campañas.' },
      ],
    },
    about: {
      eyebrow: 'Sobre nosotros', titleA: 'Un equipo', titleB: 'pequeño',
      statement: 'Somos <b>seis personas</b> que prefieren hacer una cosa buena en vez de diez ruidosas. Trabajamos directamente con fundadores: <b>sin gerentes de cuenta, sin presentaciones, sin teatro.</b>',
      meta: [
        { lbl: 'Ubicación',     val: 'Moscú · remoto' },
        { lbl: 'Zona horaria',  val: 'MSK · UTC+3' },
        { lbl: 'Idiomas',       val: 'RU · EN · DE' },
        { lbl: 'Estado',        val: 'Disponibles desde 2T 2026' },
      ],
      stats: [
        { num: '82+', lbl: 'Sistemas de identidad y producto entregados' },
        { num: '14',  lbl: 'Premios de la industria' },
        { num: '06',  lbl: 'Diseñadores e ingenieros bajo un mismo techo' },
      ],
    },
    process: {
      eyebrow: 'Nuestro proceso', titleA: 'Siete', titleB: 'pasos',
      stepLabel: 'Paso',
      steps: [
        { t: 'Solicitud',            d: 'El cliente envía una solicitud en el sitio o por mensajería con un brief breve y datos de contacto. La registramos y respondemos en un día hábil.', dur: '1 día' },
        { t: 'Llamada inicial',      d: 'Una llamada de 20–30 minutos para hablar de objetivos, plazos, presupuesto y comprobar si encajamos.', dur: '30 min' },
        { t: 'Propuesta y contrato', d: 'Preparamos una propuesta detallada con alcance, etapas y precio. Tras aprobarla, firmamos el contrato y recibimos el anticipo.', dur: '3–5 días' },
        { t: 'Investigación',        d: 'Estudiamos el nicho, los competidores y la audiencia para que el diseño se base en datos, no en suposiciones.', dur: '1–2 sem.' },
        { t: 'Diseño iterativo',     d: 'Desarrollamos conceptos y evolucionamos los mockups paso a paso, mostrando resultados intermedios y discutiendo la dirección contigo.', dur: '4–8 sem.' },
        { t: '2 rondas de cambios',  d: 'Tú das feedback y nosotros aplicamos hasta dos rondas de cambios, llevando el proyecto a su forma final sin retrabajos infinitos.', dur: '1–2 sem.' },
        { t: 'Proyecto listo',       d: 'Entregamos los archivos fuente y todos los materiales, ayudamos con el lanzamiento y seguimos en contacto para soporte continuo.', dur: 'lanzamiento' },
      ],
    },
    faq: {
      eyebrow: 'Preguntas', titleA: 'Preguntas', titleB: 'frecuentes',
      items: [
        { q: '¿Cómo suele empezar el trabajo?', a: 'Una llamada de treinta minutos, después una propuesta escrita en cinco días hábiles. Somos claros sobre alcance, presupuesto y lo que no haremos.' },
        { q: '¿Cuánto cuesta un proyecto?',     a: 'Identidad desde ₽1,5M. Proyectos web y de producto según alcance. Retención mensual desde ₽500K.' },
        { q: '¿Aceptan encargos puntuales?',    a: 'Sí — marcas independientes, familias tipográficas, publicaciones puntuales. Si el brief es claro, un alcance pequeño está bien.' },
        { q: '¿Dónde están ubicados?',          a: 'Moscú, con colaboradores en Berlín y Lisboa. Trabajamos en horario de Moscú y lanzamos proyectos en todo el mundo.' },
        { q: '¿Podemos contratar a una sola persona del equipo?', a: 'No. Trabajamos como un estudio. Nos llevas a todos o a nadie.' },
      ],
    },
    contact: {
      title: 'Contactar',
      sub: 'Estamos listos para conversar sobre tu proyecto<br/>y proponer las mejores soluciones<br/>para hacerlo realidad',
      fields: { email: 'Email o usuario de Telegram', name: 'Tu nombre completo', promo: 'Código promocional', descr: 'Descripción del proyecto' },
      submit: 'Enviar',
      sending: 'Enviando…',
      success: '¡Solicitud enviada! Te responderemos en breve.',
      error: 'No se pudo enviar. Inténtalo de nuevo o escríbenos por correo.',
      legal: 'Al hacer clic en «Enviar», aceptas la política de privacidad.',
    },
    footer: {
      contact: {
        title: 'Contactos',
        rows: [
          { label: 'Discutir un proyecto', email: 'info@componentstudio.ru' },
          { label: '¿Quieres trabajar con nosotros?', email: 'hr@componentstudio.ru' },
          { label: '¿Quieres colaborar?',  email: 'smm@componentstudio.ru' },
        ],
      },
      studio: {
        title: 'Estudio',
        lines: [
          'Moscú,',
          'San Petersburgo',
        ],
        legal: [
          'EI\u00A0Melíjova D.\u00A0O.',
          'OGRNIP 325100000002777',
        ],
        privacy: { label: 'Política de privacidad', href: 'Privacy.html' },
      },
      social: {
        title: 'Redes',
        links: [
          { label: 'Telegram', href: 'https://t.me/componentstudio' },
          { label: 'VK',       href: 'https://vk.com/componentstudio' },
        ],
      },
      navTitle:   'Navegación',
      copyright:  '2026 Komponent®',
      madeIn:     'Hecho con cariño',
    },
    cookies: {
      text:    'Este sitio web utiliza cookies para ofrecerte la mejor experiencia.',
      accept:  'OK',
      decline: 'Rechazar',
    },
    tweaks: {
      accent: 'Color de acento',
      density: 'Densidad de tarjetas',
      spacious: 'Espaciado', compact: 'Compacto',
      colors: { violet: 'Violeta', indigo: 'Índigo', magenta: 'Magenta', teal: 'Turquesa', midnight: 'Medianoche' },
      lang: 'Idioma',
    },
  },
};

// ───── Live language state with subscribe pattern ─────
(function() {
  let _lang = (function() {
    try {
      const stored = localStorage.getItem('kmp-lang');
      if (stored && window.DICT[stored]) return stored;
    } catch (e) {}
    return 'ru';
  })();
  const _subs = new Set();

  window.getLang = () => _lang;
  window.setLang = (l) => {
    if (!window.DICT[l]) return;
    _lang = l;
    try { localStorage.setItem('kmp-lang', l); } catch (e) {}
    document.documentElement.lang = l;
    _subs.forEach(fn => fn(_lang));
  };

  // Resolve a dotted key path, fall back to ru on miss
  window.tResolve = (lang, key) => {
    const parts = key.split('.');
    let cur = window.DICT[lang] || window.DICT.ru;
    for (const p of parts) { if (cur == null) break; cur = cur[p]; }
    if (cur != null) return cur;
    cur = window.DICT.ru;
    for (const p of parts) { if (cur == null) break; cur = cur[p]; }
    return cur == null ? key : cur;
  };

  window.useT = () => {
    const [lang, setL] = React.useState(_lang);
    React.useEffect(() => {
      const sub = (l) => setL(l);
      _subs.add(sub);
      return () => _subs.delete(sub);
    }, []);
    const t = (key) => window.tResolve(lang, key);
    return { lang, setLang: window.setLang, t, dict: window.DICT[lang] || window.DICT.ru };
  };

  document.documentElement.lang = _lang;
})();
