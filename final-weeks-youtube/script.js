'use strict';
if (this.YT === undefined) this.YT = {};

(function(context) {

  function start() {

    //Call your code here
    console.log('starting!', context);

    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search?q=minecraft&key=keygoeshere&part=snippet'
    })
    .done(function(data) {
      console.log('Look at this --> ', data);
    });

  }

  context.start = start;

})(window.YT);
