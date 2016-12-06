var data = [{
    name: 'Bob Smith',
    description: 'Unknown dude'
  },
  {
    name: 'George Bush',
    description: 'Former president dude'
  },
  {
    name: 'Genghis Khan',
    description: 'Bad dude but a good Nintendo game'
  },
  {
    name: 'Xerxes',
    description: 'Dude who apparently cannot conquer Greece'
  },
  {
    name: 'Alexaner the Great',
    description: 'Dude who named too many cities after himself'
  }
];

var leftButton = document.querySelector('.left-button');
var rightButton = document.querySelector('.right-button');
var display = document.querySelector('.display');

var position = 0;

function updateDisplay() {
  var theObj = data[position];
  display.innerHTML = '<div>Name: ' + theObj.name + '</div>'
    + '<div>Description: ' + data[position].description + '</div>';
}

updateDisplay();

leftButton.addEventListener('click', function() {
  position--;
  if (position < 0) {
    position = data.length - 1;
  }
  updateDisplay();
});

rightButton.addEventListener('click', function() {
  if (position === data.length - 1) {
    position = 0;
  }
  else {
    position++;
  }
  updateDisplay();
});
