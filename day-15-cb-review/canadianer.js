
function canadianize(str) {

  var lastLetter = str[str.length - 1];

  console.log('the last letter', lastLetter);
  if (lastLetter === '.') {
    //there is a period at the end
    var everythingButTheLast = str.substring(0, str.length - 1)
    return everythingButTheLast + ', eh.';
  }
  else {
    return str + ', eh';
  }


}

module.exports = canadianize;
