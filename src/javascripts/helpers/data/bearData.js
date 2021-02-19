import printToDom from '../printToDom';

// Array containg bear objects
const bearArray = [];

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
const createBear = (e) => {
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
  e.preventDefault();
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

export { createBear, untrackBear };
