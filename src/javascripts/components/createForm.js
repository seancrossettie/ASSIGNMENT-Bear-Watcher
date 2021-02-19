import { createBear } from '../helpers/data/bearData';
import printToDom from '../helpers/printToDom';

// Creates form to input new bears upon loading page
const createForm = () => {
  const formString = `<div class="jumbotron">
                        <h1 class="mb-3">Start Tracking Bears Today</h1>
                        <form>
                          <div class="mb-3">
                            <label for="newBearName" class="form-label">New Bear</label>
                            <input type="text" class="form-control" id="newBearName" placeholder="Type name here..." required/>
                          </div>
                          <div class="mb-3">
                            <label for="imgURL" class="form-label">Image URL</label>
                            <input type="url" class="form-control" id="newImgUrl" placeholder="URL"/>
                          </div>
                            <button type="submit" class="btn btn-light">Track Bear</button>
                        </form>
                      </div>`;

  printToDom('#form', formString);
  document.querySelector('form').addEventListener('submit', createBear);
};

export default createForm;
