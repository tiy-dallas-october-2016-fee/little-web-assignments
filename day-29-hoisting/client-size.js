var lookAtMeDiv = document.querySelector('.look-at-me');

console.log(lookAtMeDiv.clientWidth, lookAtMeDiv.clientHeight);


window.addEventListener('resize', function() {
  console.log('resized', lookAtMeDiv.clientWidth, lookAtMeDiv.clientHeight);
});
