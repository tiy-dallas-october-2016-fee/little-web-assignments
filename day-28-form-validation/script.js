console.log('hello');

var submitButton = document.querySelector('.submit-button');
var firstNameInput = document.querySelector('.first-name');
var lastNameInput = document.querySelector('.last-name');
var postalInput = document.querySelector('.postal-code');

submitButton.addEventListener('click', function(evt) {

  var bioTextArea = document.querySelector('.bio');

  validateRequiredAndStopForm(evt, firstNameInput);
  validateRequiredAndStopForm(evt, lastNameInput);
  validateLength(evt, bioTextArea);

  var postalInputValue = postalInput.value;
  var regex = /\d{5}/;
  var postalValidationResult = regex.test(postalInputValue);
  if (postalValidationResult === true) {
    postalInput.classList.remove('erroneous');
  }
  else {
    postalInput.classList.add('erroneous');
  }

  console.log('postal validation result', postalValidationResult);

});

function validateRequiredAndStopForm(evt, theDomElement) {
  if (theDomElement.value === '') {
    stopForm(evt);
  }
  validateRequired(theDomElement);
}

function stopForm(evt) {
  evt.preventDefault();
}

function validateRequired(theDomElement) {
  if (theDomElement.value === '') {
    theDomElement.classList.add('erroneous');
  }
  else {
    theDomElement.classList.remove('erroneous');
  }
}

firstNameInput.addEventListener('focus', function() {
  console.log('focus');
})

firstNameInput.addEventListener('blur', function() {
  console.log('blur!');
  validateRequired(firstNameInput);
});

lastNameInput.addEventListener('blur', function() {
  validateRequired(lastNameInput);
});

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
