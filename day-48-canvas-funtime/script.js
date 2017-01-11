var canvas1 = document.querySelector('#canvas-1');
var context = canvas1.getContext('2d');

console.log(context);

// Draw a bar chart!

context.fillStyle = '#F00';

context.strokeRect(0, 0, 200, 200);

context.fillRect(20, 100, 50, 100);

context.fillStyle = '#0F0';
context.fillRect(120, 50, 50, 150);


// Paths

context.lineWidth = 4;

context.beginPath();
context.moveTo(210, 210);
context.lineTo(280, 260);
context.lineTo(80, 400);
context.closePath();

context.fill();
context.stroke();

context.fillStyle = '#F6B';

// Circles!

context.lineWidth = 2;

context.beginPath();
context.arc(50, 300, 30, 0.5 * Math.PI, 1 * Math.PI, true);
context.lineTo(50, 300);
context.fill();
context.stroke();

context.fillStyle = '#0F0';
context.beginPath();
context.arc(50, 300, 30, 0.5 * Math.PI, 1 * Math.PI, false);
context.lineTo(50, 300);
context.closePath();
context.fill();
context.stroke();



var canvas2 = document.querySelector('#canvas-2');
var context2 = canvas2.getContext('2d');



var x = 0;
var direction = 'right';

setInterval(function() {

  if (direction === 'right') {
    x += 3;
  }
  else {
    x -= 3;
  }

  if (x > 400) {
    direction = 'left';
  }
  else if (x < 0) {
    direction = 'right';
  }

  context2.clearRect(0, 0, 400, 400);

  context2.beginPath();
  context2.arc(x, 100, 25, 0.25 * Math.PI, 1.75 * Math.PI, false);
  context2.lineTo(x, 100);
  context2.fill();
}, 10);
