import '../styles/main.scss';

// Array containg bear objects
const bearArray = [];

// prints string to DOM
const printToDom = (divId, domString) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = domString;
};

// Prints bearArray to DOM
const printBearCards = (bearArr) => {
  let bearCardString = '';

  bearArr.forEach((bear, i) => {
    bearCardString += `<div class="card" style="width: 18rem; height: 18rem;" id="${i}">
                            <img src="${bear.imgUrl}" class="card-img-top" alt="${bear.imgUrl}">
                              <div class="card-body">
                                <h5 class="card-title">${bear.name}</h5>
                                <p class="card-text">You are now tracking this bear.</p>
                                <a href="#" type="button" class="btn btn-danger" id="${i}">Untrack Me</a>
                              </div>
                            </div>`;
  });

  printToDom('#river', bearCardString);
};

// Creates bear object and pushes new bear into "bearArray"
const createBear = () => {
  const name = document.querySelector('#newBearName').value;
  const imgUrl = document.querySelector('#newImgUrl').value;
  const fishCaught = 0;
  const fishAttempt = 0;
  const newBear = {
    name,
    imgUrl,
    fishCaught,
    fishAttempt,
  };

  bearArray.push(newBear);
  printBearCards(bearArray);
  document.querySelector('form').reset();
};

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
                            <input type="url" class="form-control" id="newImgUrl" placeholder="URL">
                          </div>
                            <button type="submit" class="btn btn-light">Track Bear</button>
                        </form>
                      </div>`;

  printToDom('#form', formString);
  document.querySelector('form').addEventListener('submit', createBear);
};

// Untracks bears when you click "Untrack Me" button on bear card
const untrackBear = (e) => {
  e.preventDefault();

  const targetId = e.target.id;
  const targetType = e.target.type;

  if (targetType === 'button') {
    bearArray.splice(targetId, 1);
  }
  printBearCards(bearArray);
};

// Tracks fishing info upon form select
// const updateFishingInfo = () => {
//   if (document.querySelector('#fishForm').value === 'caught') {
//     console.warn('caught a fish');
//   }
// };

// Button events function
function buttonEvents() {
  document.querySelector('#river').addEventListener('click', untrackBear);
  // document.querySelector('#river').addEventListener('click', updateFishingInfo);
}

// init function
const init = () => {
  createForm();
  buttonEvents();
};

init();
