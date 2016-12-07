console.log('hello');

var submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', function(evt) {

  var firstNameInput = document.querySelector('.first-name');
  var lastNameInput = document.querySelector('.last-name');
  var bioTextArea = document.querySelector('.bio');

  validateHasValue(evt, firstNameInput);
  validateHasValue(evt, lastNameInput);
  validateLength(evt, bioTextArea);
});

function validateHasValue(evt, theDomElement) {
  if (theDomElement.value === '') {
    evt.preventDefault();
    theDomElement.classList.add('erroneous');
  }
  else {
    theDomElement.classList.remove('erroneous');
  }
}

function validateLength(evt, theDomElement) {
  if (theDomElement.value.length < 20) {
    evt.preventDefault();
    theDomElement.classList.add('erroneous');
  }
  else {
    theDomElement.classList.remove('erroneous');
  }
}


var googleLink = document.querySelector('.google-link');
googleLink.addEventListener('click', function(evt) {
  evt.preventDefault();
});
