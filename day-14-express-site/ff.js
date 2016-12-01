

console.log('//point #1')
function platypus(ebola, steak) {
  console.log('//point #2');
  ebola(steak + 80);
  console.log('//point #3');
}

console.log('//point #4');

platypus(function(artaxerxes) {
  console.log('//point #5');
  console.log(artaxerxes);
}, 60);

console.log('//point #6');
