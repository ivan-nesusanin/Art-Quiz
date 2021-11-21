import { Home } from './home';
import { Settings } from './settings';
import { Artists } from './artists';
import { Pictures } from './pictures';

const homeInstance = new Home();
const settingsInstance = new Settings();
const artistsInstance = new Artists();
const picturesInstance = new Pictures();

const section = document.querySelector('#section');

const routes = {
  '/': homeInstance,
  '/settings': settingsInstance,
  '/artists': artistsInstance,
  '/pictures': picturesInstance,
};

const btnSettings = document.querySelector('.btn-settings');
btnSettings.addEventListener('click', goToSettings);
btnSettings.addEventListener('click', doVisible);

function doVisible() {
  section.classList.remove('section_visible');
  setTimeout(() => {
    section.classList.add('section_visible');
  }, 500);
};

async function goToSettings() {
  const content = null || section;
  const parsedURL = '/settings';
  const page = routes[parsedURL] ? routes[parsedURL] : false;
  content.innerHTML = await page.render();
  // doVisible();
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
  const artists = document.querySelector('#artists');
  artists.addEventListener('click', goToArtists);
  const pictures = document.querySelector('#pictures');
  pictures.addEventListener('click', goToPictures);
};

const artists = document.querySelector('#artists');
artists.addEventListener('click', goToArtists);

async function goToArtists() {
  const content = null || section;
  const parsedURL = '/artists';
  const page = routes[parsedURL] ? routes[parsedURL] : false;
  content.innerHTML = await page.render();
  await page.after_render();
  const btnHome = document.querySelector('.btn-home');
  btnHome.addEventListener('click', returnHome);
};

const pictures = document.querySelector('#pictures');
pictures.addEventListener('click', goToPictures);

async function goToPictures() {
  const content = null || section;
  const parsedURL = '/pictures';
  const page = routes[parsedURL] ? routes[parsedURL] : false;
  content.innerHTML = await page.render();
  await page.after_render();
  const btnHome = document.querySelector('.btn-home');
  btnHome.addEventListener('click', returnHome);
};