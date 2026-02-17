// ---------------------------------------------------------------------------
// CV content — edit this file to update your curriculum data.
// All entries support { en: '...', es: '...' } for bilingual output.
// ---------------------------------------------------------------------------

export const cv = {

  about: {
    en: [
      'Full Stack Developer based in Fuenlabrada, Madrid, Spain.',
      'Passionate about building scalable web applications and writing clean,',
      'maintainable code.',
      '',
      'Currently working at BBVA Technology, building financial technology solutions',
      'used by millions of customers.',
    ],
    es: [
      'Desarrollador Full Stack con base en Fuenlabrada, Madrid.',
      'Apasionado por construir aplicaciones web escalables y escribir código',
      'limpio y mantenible.',
      '',
      'Actualmente trabajando en BBVA Technology, desarrollando soluciones de',
      'tecnología para empleados del banco.',
    ],
  },

  experience: [
    {
      company: 'BBVA Technology',
      role: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
      period: { start: '08/2021', end: null }, // null = present
      description: {
        en: [
          'Full stack development using Node.js and Python for the backend and Vue.js for the frontend.',
          'Cloud technologies: AWS and Google Cloud.',
          'Led a successful migration of an application from AWS to Google Cloud.',
        ],
        es: [
          'Desarrollo full stack con Node.js y Python en el backend y Vue.js en el frontend.',
          'Tecnologías cloud: AWS y Google Cloud.',
          'Migración exitosa de una aplicación de AWS a Google Cloud.',
        ],
      },
    },
    {
      company: 'Plexus Tech — Banco Santander',
      role: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
      period: { start: '12/2018', end: '08/2021' },
      description: {
        en: [
          'Full stack development for Banco Santander Group applications.',
          'Blockchain-based solutions for various financial products.',
          'Frontend with JavaScript and frameworks: Angular, React, Vue.',
          'Backend with Node.js.',
        ],
        es: [
          'Desarrollo full stack para aplicaciones del grupo Banco Santander.',
          'Soluciones basadas en blockchain para diversos productos financieros.',
          'Frontend con JavaScript y frameworks: Angular, React, Vue.',
          'Backend con Node.js.',
        ],
      },
    },
    {
      company: 'Goodeat',
      role: { en: 'Backend Developer', es: 'Desarrollador Backend' },
      period: { start: '01/2020', end: '12/2021' },
      description: {
        en: [
          'Server-side development of the Goodeat application.',
          'REST API built with Node.js.',
          'Deployment with Docker on AWS.',
        ],
        es: [
          'Desarrollo del servidor de la aplicación Goodeat.',
          'API REST con Node.js.',
          'Despliegue con Docker en AWS.',
        ],
      },
    },
    {
      company: 'Uxsmobile',
      role: { en: 'Web Developer', es: 'Desarrollador Web' },
      period: { start: '02/2017', end: '12/2018' },
      description: {
        en: [
          'Development and maintenance of web applications.',
          'Frontend: JavaScript, Angular, jQuery, HTML, CSS, Bootstrap.',
          'Backend: Node.js.',
        ],
        es: [
          'Desarrollo y mantenimiento de aplicaciones web.',
          'Frontend: JavaScript, Angular, jQuery, HTML, CSS, Bootstrap.',
          'Backend: Node.js.',
        ],
      },
    },
    {
      company: 'GPS Open Source',
      role: { en: 'Web Developer', es: 'Desarrollador Web' },
      period: { start: '09/2016', end: '01/2017' },
      description: {
        en: [
          'Development and maintenance of web applications.',
          'Technologies: PHP, JavaScript, AngularJS, jQuery, HTML, CSS, Bootstrap.',
          'WordPress site management.',
        ],
        es: [
          'Desarrollo y mantenimiento de aplicaciones web.',
          'Tecnologías: PHP, JavaScript, AngularJS, jQuery, HTML, CSS, Bootstrap.',
          'Gestión de la web corporativa con WordPress.',
        ],
      },
    },
  ],

  skills: {
    en: {
      Frontend:  ['JavaScript', 'TypeScript', 'Vue.js', 'Angular', 'React', 'HTML', 'CSS', 'Bootstrap'],
      Backend:   ['Node.js', 'Python', 'NestJS'],
      Databases: ['MySQL', 'PostgreSQL'],
      DevOps:    ['AWS', 'Google Cloud', 'Docker', 'Git'],
      Testing:   ['Jest', 'Cypress', 'Pytest'],
      'AI Tools':['Claude Code', 'GitHub Copilot'],
    },
    es: {
      Frontend:       ['JavaScript', 'TypeScript', 'Vue.js', 'Angular', 'React', 'HTML', 'CSS', 'Bootstrap'],
      Backend:        ['Node.js', 'Python', 'NestJS', 'APIs REST'],
      'Bases de datos': ['MySQL', 'PostgreSQL'],
      DevOps:         ['AWS', 'Google Cloud', 'Docker', 'Git'],
      Testing:        ['Jest', 'Cypress', 'Pytest'],
      'Herramientas IA': ['Claude Code', 'GitHub Copilot'],
    },
  },

  education: [
    {
      institution: 'Google Cloud',
      degree: {
        en: 'Certification — Associate Cloud Engineer',
        es: 'Certificación — Associate Cloud Engineer',
      },
      period: { start: '10/2024', end: '10/2027' },
    },
    {
      institution: 'Anthropic / Udemy',
      degree: {
        en: 'Certification — Claude Code in Action',
        es: 'Certificación — Claude Code in Action',
      },
      period: { start: '02/2026', end: null },
    },
    {
      institution: 'Coursera & Udemy',
      degree: {
        en: 'Self-directed online learning (ongoing)',
        es: 'Formación online autodidacta (en curso)',
      },
      period: { start: '2017', end: null },
    },
    {
      institution: 'IES El Cañaveral — Madrid',
      degree: {
        en: 'Higher Vocational Training — Web Application Development',
        es: 'FP II — Desarrollo de Aplicaciones Web',
      },
      period: { start: '09/2013', end: '06/2016' },
    },
    {
      institution: 'IES Dionisio Aguado — Madrid',
      degree: {
        en: 'Bachillerato (High School)',
        es: 'Bachillerato',
      },
      period: { start: '09/2011', end: '06/2013' },
    },
  ],

}
