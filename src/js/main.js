import '../scss/main.scss';
import { initHeader } from './modules/header.js';
import { initNav } from './modules/nav.js';
import { initReveal } from './modules/reveal.js';

initHeader();
initNav();
initReveal();

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
