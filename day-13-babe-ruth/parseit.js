var fs = require('fs');
var chalk = require('chalk');

function callback(err, data) {

  var lines = data.split('\n');

  for (var i = 2; i < lines.length; i++) {

    var line = lines[i];
    var lineValues = line.split(',');
    var yearString = lineValues[0];
    var matchSet = yearString.match(/\d\d\d\d/);

    if (matchSet === null) {
      break;
    }

    console.log(yearString);
  }

}

fs.readFile('players_r_ruthba01_batting_standard.csv', 'utf-8', callback);
