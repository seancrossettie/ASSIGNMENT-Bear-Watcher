import '../styles/main.scss';

// const bearArray = [];

const printToDom = (divId, domString) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = domString;
};

const createForm = () => {
  const formString = `<div class="jumbotron"">
                        <form>
                          <div class="mb-3">
                            <label for="newBearName" class="form-label">First name</label>
                            <input type="text" class="form-control" id="newBearName" placeholder="URL" required>
                          </div>
                          <div class="mb-3">
                            <label for="imgURL" class="form-label">New Bear</label>
                            <input type="url" class="form-control" id="newImgUrl" placeholder="URL" required>
                          </div>
                            <button type="button" class="btn btn-light" id="createBearBtn">Track Bear</button>
                        </form>
                      </div>`;
  printToDom('#form', formString);
};

const init = () => {
  createForm();
};

init();
