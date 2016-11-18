var fs = require('fs');

function reader(callback) {

  fs.readFile('story.txt', 'utf-8', function(err, fileContents) {
    callback(fileContents);
  });


}

module.exports = reader;
