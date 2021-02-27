import { createBear } from '../helpers/data/bearData';
import printToDom from '../helpers/printToDom';

// Creates form to input new bears upon loading page
const createForm = () => {
  const formString = `<div class="row">
                        <div class="col">
                          <p class="text-start"> Katmai is one of the premier brown bear viewing areas in the world. About 2,200 brown bears are estimated to inhabit the park, and more bears than people are estimated to live on Alaska Peninsula. Before hibernation season, the bears enter a medical state known as hyperphagia in which they eat non-stop and can gain up to four pounds in a single day. Some bears can eat dozens of sockeye salmon each day, with each salmon packing about 4,000 calories. Enter a bear name and image below to start tracking their eating habits.</p>
                        </div>
                        <div class="col">
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/cRtNX6rr0uw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                      </div>
                      <div class="jumbotron my-5" id="jumbotron">
                        <h2 class="mb-3">Track a Bear</h2>
                        <form>
                          <div class="mb-3">
                            <label for="newBearName" class="form-label">Bear Name</label>
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
