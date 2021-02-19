// prints string to DOM
const printToDom = (divId, domString) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = domString;
};

export default printToDom;
