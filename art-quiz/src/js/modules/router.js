import { Home } from './home';
import { Settings } from './settings';
// import { Categories } from './pages/Categories';

const homeInstance = new Home();
const settingsInstance = new Settings();
// const categoriesInstance = new Categories();

const section = document.querySelector('section');

const routes = {
  '/': homeInstance,
  '/settings': settingsInstance,
  // '/categories': categoriesInstance,
};

const btnSettings = document.querySelector('.btn-settings');
btnSettings.addEventListener('click', goToSettings);

async function goToSettings() {
  const content = null || section;
  const parsedURL = '/settings';
  const page = routes[parsedURL] ? routes[parsedURL] : false;
  content.innerHTML = await page.render();
  await page.after_render();
  const btnSave = document.querySelector('.btn-save');
  btnSave.addEventListener('click', returnHome);
};

async function returnHome() {
  const content = null || section;
  const parsedURL = '/';
  const page = routes[parsedURL] ? routes[parsedURL] : false;
  content.innerHTML = await page.render();
  await page.after_render();
  const btnSettings = document.querySelector('.btn-settings');
  btnSettings.addEventListener('click', goToSettings);
};