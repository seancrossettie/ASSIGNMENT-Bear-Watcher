import '../styles/main.scss';

// Array containg bear objects
const bearArray = [];

// prints string to DOM
const printToDom = (divId, domString) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = domString;
};

// Creates form to input new bears upon loading page
const createForm = () => {
  const formString = `<div class="jumbotron">
                        <form>
                          <div class="form-group mb-3">
                            <label for="newBearName" class="form-label">First name</label>
                            <input type="text" class="form-control" id="newBearName" placeholder="Type name here..." required>
                          </div>
                          <div class="form-group mb-3">
                            <label for="imgURL" class="form-label">New Bear</label>
                            <input type="text" class="form-control" id="newImgUrl" placeholder="URL" required>
                          </div>
                            <button type="button" class="btn btn-light" id="createBearBtn">Track Bear</button>
                        </form>
                      </div>`;
  printToDom('#form', formString);
};

// Prints bearArray to DOM
const printBearCards = (bearArr) => {
  let bearCard = '';
  bearArr.forEach((bear, i) => {
    bearCard += `<div class="card" style="width: 18rem; height: 18rem;" id="${i}">
                                                  <img src="${bear.imgUrl}" class="card-img-top" alt="${bear.imgUrl}">
                                                    <div class="card-body">
                                                      <h5 class="card-title">${bear.name}</h5>
                                                      <p class="card-text">You are now tracking this bear.</p>
                                                      <a href="#" class="btn btn-primary">Fishing Info</a>
                                                    </div>
                                                  </div>`;
  });
  printToDom('#river', bearCard);
};

// Creates bear object and pushes new bear into "bearArray"
const createBear = () => {
  const name = document.querySelector('#newBearName').value;
  const imgUrl = document.querySelector('#newImgUrl').value;

  const newBear = {
    name,
    imgUrl,
  };

  bearArray.push(newBear);
  printBearCards(bearArray);
  document.querySelector('form').reset();
};

// Button events function
function buttonEvents() {
  document.querySelector('#createBearBtn').addEventListener('click', createBear);
}

// init function
const init = () => {
  createForm();
  buttonEvents();
};

init();
