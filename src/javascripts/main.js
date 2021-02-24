import '../styles/main.scss';
import createForm from './components/createForm';
import { buttonEvents } from './helpers/data/bearData';

// init function
const init = () => {
  createForm();
  buttonEvents();
};

init();
