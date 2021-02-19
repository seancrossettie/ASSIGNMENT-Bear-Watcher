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
                        <h1 class="mb-3">Start Tracking Bears Today</h1>
                        <form>
                          <div class="form-group mb-3">
                          <label for="validationDefault01" class="form-label">First name</label>
                          <input type="text" class="form-control" id="newBearName" required>
                          </div>
                          <div class="form-group mb-3">
                            <label for="imgURL" class="form-label">New Bear</label>
                            <input type="url" class="form-control" id="newImgUrl" placeholder="URL" required>
                          </div>
                            <button type="button" class="btn btn-light" id="createBearBtn">Track Bear</button>
                        </form>
                      </div>`;
  printToDom('#form', formString);
};

// // Untracks bears when you click "Untrack Me" button on bear card
// const untrackBear = (e) => {
//   const targetId = e.target.Id;
//   const targetType = e.target.type;
//   console.warn(targetId);

//   if (targetType === 'button') {
//     bearArray.splice(targetId, 1);
//   }
// };

// Prints bearArray to DOM
const printBearCards = () => {
  let bearCard = '';
  bearArray.forEach((bear, i) => {
    bearCard += `<div class="card" style="width: 18rem; height: 18rem;" id="bearCard">
                                                  <img src="${bear.imgUrl}" class="card-img-top" alt="${bear.imgUrl}">
                                                    <div class="card-body">
                                                      <h5 class="card-title">${bear.name}</h5>
                                                      <p class="card-text">You are now tracking this bear.</p>
                                                      <a href="#" type="button" class="btn btn-primary">Fishing Info</a>
                                                      <a href="#" type="button" class="btn btn-danger" id="${i}">Untrack Me</a>
                                                    </div>
                                                  </div>`;
  });
  printToDom('#river', bearCard);
  // document.querySelector('#bearCard').addEventListener('click', untrackBear);
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
  printBearCards();
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
