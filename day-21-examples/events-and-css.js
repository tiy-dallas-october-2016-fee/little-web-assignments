console.log('am I here?');

var changeBelowButton = document.querySelector('.change-below');

changeBelowButton.addEventListener('click', function() {

  var changeTarget = document.querySelector('#change-target');
  console.log(changeTarget.classList);

  // if (changeTarget.classList.contains('yellowish')) {
  //   changeTarget.classList.remove('yellowish');
  // }
  // else {
  //   changeTarget.classList.add('yellowish');
  // }

  changeTarget.classList.toggle('yellowish');



});
