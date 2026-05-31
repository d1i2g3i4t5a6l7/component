// Shared project list — used by Landing.html (featured 4) and Projects.html (all).
// Keep this in sync with window.CASES in cases-data.js (ids + cats must match).
window.PROJECTS = [
  { id: 'greenclient', name: 'Проверка партнёра',         cover: 'cases/green-client.png',     cats: ['uxui', 'dev', 'landings'],   year: '2025', shape: 'wide',   swatch: '#3FC95B' },
  { id: 'phodo',      name: 'Phodo',                     cover: 'cases/phodo.webp',           cats: ['uxui', 'presentations'],     year: '2025', shape: 'wide',   swatch: '#7B5BFF' },
  { id: 'kovry',      name: 'Сибирские ковры',           cover: 'cases/sibirskie-kovry.webp', cats: ['landings'],                  year: '2025', shape: 'square', swatch: '#C8412B' },
  { id: 'lamoda',     name: 'Lamoda · Продавец',         cover: 'cases/lamoda.png',           cats: ['uxui', 'presentations'],     year: '2025', shape: 'square', swatch: '#FF4F1F' },
  { id: 'colorforce', name: 'ColorForce',                cover: 'cases/colorforce.png',       cats: ['landings'],                  year: '2025', shape: 'wide',   swatch: '#7FA8FF' },
  { id: 'misis',      name: 'МИСИС · Mini App',          cover: 'cases/misis.png',            cats: ['uxui', 'presentations'],     year: '2025', shape: 'full',   swatch: '#2B5AE0' },
  { id: 'innovators', name: 'Академия инноваторов',      cover: 'cases/innovators.png',       cats: ['identity', 'presentations'], year: '2025', shape: 'wide',   swatch: '#8FD9E0' },
  { id: 'mpit',       name: 'МПИТ',                      cover: 'cases/mpit.png',             cats: ['identity', 'presentations'], year: '2025', shape: 'square', swatch: '#7B5BFF' },
  { id: 'course',     name: 'Онлайн-курс',               cover: 'cases/online-course.png',    cats: ['identity', 'presentations'], year: '2025', shape: 'square', swatch: '#5B3CE0' },
  { id: 'quantum',    name: 'Samarkand Quantum Centre',  cover: 'cases/quantum.png',          cats: ['identity'],                  year: '2025', shape: 'square', swatch: '#8B6BFF' },
  { id: 'easysale',   name: 'EasySale',                  cover: 'cases/easysale.png',         cats: ['presentations'],             year: '2025', shape: 'square', swatch: '#32C766' },
];

window.PROJECT_FILTER_IDS = ['all', 'uxui', 'dev', 'landings', 'identity', 'presentations'];

// How many projects to feature on the landing before "Все проекты".
window.FEATURED_COUNT = 4;
