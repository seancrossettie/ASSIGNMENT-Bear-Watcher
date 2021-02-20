import '../styles/main.scss';
import createForm from './components/createForm';
import { cardButtonEvents } from './helpers/data/bearData';

// Button events function
function buttonEvents() {
  document.querySelector('#river').addEventListener('click', cardButtonEvents);
}

// init function
const init = () => {
  createForm();
  buttonEvents();
};

init();
