import { Home } from './home';
import { Settings } from './settings';
import { Artists } from './artists';
import { Pictures } from './pictures';
import { QuestionsArt } from './questions_art';
import { QuestionsPic } from './questions_pic';


const homeInstance = new Home();
const settingsInstance = new Settings();
const artistsInstance = new Artists();
const picturesInstance = new Pictures();
const questionsArtInstance = new QuestionsArt();
const questionsPicInstance = new QuestionsPic();

const section = document.querySelector('#section');

const routes = {
  '/': homeInstance,
  '/settings': settingsInstance,
  '/artists': artistsInstance,
  '/pictures': picturesInstance,
  '/questions_art': questionsArtInstance,
  '/questions_pic': questionsPicInstance,
};

const btnSettings = document.querySelector('.btn-settings');

// Кнопка Setting
btnSettings.addEventListener('click', goToSettings);

async function goToSettings() {
  const content = null || section;
  const parsedURL = '/settings';
  const page = routes[parsedURL] ? routes[parsedURL] : false;
  content.innerHTML = await page.render();
  await page.after_render();
  // возврат на страницу Home со страницы Setting
  const btnSave = document.querySelector('.btn-save');
  btnSave.addEventListener('click', returnHome);
};

// возврат на страницу Home
async function returnHome() {
  const content = null || section;
  const parsedURL = '/';
  const page = routes[parsedURL] ? routes[parsedURL] : false;
  content.innerHTML = await page.render();
  await page.after_render();
  // переход на  Setting
  const btnSettings = document.querySelector('.btn-settings');
  btnSettings.addEventListener('click', goToSettings);
  // переход на Artists
  const artists = document.querySelector('#artists');
  artists.addEventListener('click', goToArtists);
  // переход на Pictures
  const pictures = document.querySelector('#pictures');
  pictures.addEventListener('click', goToPictures);
};

// переход на Artists
const artists = document.querySelector('#artists');
artists.addEventListener('click', goToArtists);

async function goToArtists() {
  const content = null || section;
  const parsedURL = '/artists';
  const page = routes[parsedURL] ? routes[parsedURL] : false;
  content.innerHTML = await page.render();
  await page.after_render();
  // возврат на страницу Home со страницы Artists
  const btnHome = document.querySelector('.btn-home');
  btnHome.addEventListener('click', returnHome);
  // переход на страницу QuestionsArt
  const questionsArt = document.querySelectorAll('.link');
  for (let i = 0; i < questionsArt.length; i++) {
    questionsArt[i].addEventListener('click', goToQuestionsArt);
  };
};

// переход на Pictures
const pictures = document.querySelector('#pictures');
pictures.addEventListener('click', goToPictures);

async function goToPictures() {
  const content = null || section;
  const parsedURL = '/pictures';
  const page = routes[parsedURL] ? routes[parsedURL] : false;
  content.innerHTML = await page.render();
  await page.after_render();
  // возврат на страницу Home со страницы Pictures
  const btnHome = document.querySelector('.btn-home');
  btnHome.addEventListener('click', returnHome);
  // переход на страницу QuestionsPic
  const questionsPic = document.querySelectorAll('.link');
  for (let i = 0; i < questionsPic.length; i++) {
    questionsPic[i].addEventListener('click', goToQuestionsPic);
  };
};

async function goToQuestionsArt() {
  const content = null || section;
  const parsedURL = '/questions_art';
  const page = routes[parsedURL] ? routes[parsedURL] : false;
  content.innerHTML = await page.render();
  await page.after_render();
  // возврат на страницу Home
  const btnHome = document.querySelector('.btn-home');
  btnHome.addEventListener('click', returnHome);
  // возврат на страницу Artists
  const categories = document.querySelector('.btn-categories');
  categories.addEventListener('click', goToArtists);
};

async function goToQuestionsPic() {
  const content = null || section;
  const parsedURL = '/questions_pic';
  const page = routes[parsedURL] ? routes[parsedURL] : false;
  content.innerHTML = await page.render();
  await page.after_render();
  // возврат на страницу Home
  const btnHome = document.querySelector('.btn-home');
  btnHome.addEventListener('click', returnHome);
  // возврат на страницу Artists
  const categories = document.querySelector('.btn-categories');
  categories.addEventListener('click', goToPictures);
};