var fs = require('fs');

var fileContents = fs.readFileSync('viet-nam-population-un.csv', 'utf-8');
//log after you call the function

// callback functions

fs.readFile('viet-nam-population-un.csv', 'utf-8', function(err, data) {
  console.log('I am done!');
  console.log('err', err);
  console.log('data', data);
  //you call when the callback is fired

  var lines = data.split('\n');
  //other CSV code

});
//console.log(fileContents);



console.log('after function');
