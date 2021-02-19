import '../styles/main.scss';
import createForm from './components/createForm';
import { untrackBear } from './helpers/data/bearData';

// Button events function
function buttonEvents() {
  document.querySelector('#river').addEventListener('click', untrackBear);
}

// init function
const init = () => {
  createForm();
  buttonEvents();
};

init();
