import { Router } from './router';
import { PATHS } from './routes';

const ROUTER = new Router(PATHS);

ROUTER.initRouter();

const homeButton = document.querySelector('#home');
const aboutButton = document.querySelector('#about');
const testButton = document.querySelector('#test');

// function navigate(routeName) {
//   console.log('on navigate');
//   ROUTER.load(`${routeName}`);
// }

homeButton.addEventListener('click', () => {
  console.log('Home Event');
  ROUTER.load('home');
});
aboutButton.addEventListener('click', () => {
  console.log('About Event');
  ROUTER.load('about');
});
testButton.addEventListener('click', () => {
  console.log('Test Event');
  ROUTER.load('test');
});
