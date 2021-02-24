import printToDom from '../printToDom';

// Array containg bear objects
const bearArray = [];

// Prints bearArray to DOM
const printBearCards = (bearArr) => {
  let bearCardString = '';

  bearArr.forEach((bear, i) => {
    bearCardString += `<div class="card m-4" style="width: 18rem; height: 18rem;" id="${i}">
                            <img src="${bear.imgUrl}" class="card-img-top" alt="${bear.imgUrl}">
                              <div class="card-body">
                                <h5 class="card-title">${bear.name}</h5>
                                <p class="card-text">You are now tracking this bear.</p>
                                <button type="button" class="btn btn-dark" id="fishAttempt-${i}">Fishing attempt</button>
                                <p class="card-text">Fishing Attempt: ${bear.fishAttempt}</p>
                                <p class="card-text">Time: ${bear.timeAttempt}</p>
                                <button type="button" class="btn btn-dark" id="fishSucceed-${i}">Fishing success</button>
                                <p class="card-text">Fish Caught: ${bear.fishCaught}</p>
                                <p class="card-text">Time: ${bear.timeSucceed}</p>
                                <button type="button" class="btn btn-danger" id="${i}">Untrack Me</button>
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
  const timeAttempt = Date();
  const timeSucceed = Date();
  const newBear = {
    name,
    imgUrl,
    fishCaught,
    fishAttempt,
    timeAttempt,
    timeSucceed,
  };

  bearArray.push(newBear);
  printBearCards(bearArray);
  document.querySelector('form').reset();
  e.preventDefault();
};

// Adds fishing event to bear objects
const cardButtonEvents = (e) => {
  const targetId = e.target.id;
  const targetType = e.target.type;

  if (targetType === 'button' && targetId.includes('Attempt')) {
    const bearIndex = Number(targetId.split('-')[1]);
    bearArray[bearIndex].fishAttempt += 1;
    bearArray[bearIndex].timeAttempt = new Date();
    printBearCards(bearArray);
  } else if (targetType === 'button' && targetId.includes('Succeed')) {
    const bearIndex = Number(targetId.split('-')[1]);
    bearArray[bearIndex].fishCaught += 1;
    bearArray[bearIndex].timeSucceed = new Date();
    printBearCards(bearArray);
  } else if (targetType === 'button') {
    bearArray.splice(targetId, 1);
    printBearCards(bearArray);
  }
};

export { createBear, cardButtonEvents };
