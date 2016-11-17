var fs = require('fs');

//


function parse(callback) {
  console.log('#3 - time to read that file')

  var callbackForReadFile = function(err, fileContents) {
    console.log('#6 - some time later, OS is done reading file. Callback for fs.readFile.')

    var output = {
      country: 'Afganistan',
      years: []
    };

    var lines = fileContents.split('\n');

    for (var i = 1; i < lines.length - 1; i++) {
      var line = lines[i];

      var values = line.split(',');

      output.years.push({
        year: values[1].replace(/"/g, ''),
        population: values[3].replace(/"/g, '')
      });

    }

    console.log('#7 - Done converting CSV to object, calling callback')
    callback(output);
  }

  fs.readFile('afganistan-population-un.csv', 'utf-8', callbackForReadFile);

  console.log('#4 - Delegated file reading responsibility to the OS. Moving on with my day.')

}




module.exports = parse;
