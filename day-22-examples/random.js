
var messages = [
  'I do not want to talk to you',
  'I am doing more important things so cannot talk to you',
  'I do not like you so I am not going to answer the phone',
  'I am too busy eating steak to answer the phone',
  'I am dead so cannot answer the phone'
];



var rand = Math.random(); //generates a number between 0 and 0.99999999999
rand = rand * messages.length; //turns it into a number between 0 and 4.99999999999999;
rand = Math.floor(rand); //rounds that down. Now we have a proper index.

var message = messages[rand]; //use that index

//console.log(rand, message);


//console.log('------------------------------------------------------------');


//generate a number between 1 (inclusive) and 20 (inclusive) to simulate a 20-sided dice



var diceRoll = Math.random();
diceRoll = diceRoll * 20;
diceRoll = Math.ceil(diceRoll);
//console.log('I rolled a', diceRoll);




console.log('==============================================');

var people = ['Miguel', 'Chelsey', 'David', 'Chad', 'Taylor', 'Kyle', 'Kianna'];
var randomPeople = [];

while (people.length > 0) {
  var randomPersonIndex = Math.random();
  randomPersonIndex = randomPersonIndex * people.length;
  randomPersonIndex = Math.floor(randomPersonIndex);
  var personInAnArray = people.splice(randomPersonIndex, 1);
  randomPeople.push(personInAnArray[0]);
}

/*
for (var i = 0; i < people.length + randomPeople.length; i++) {
  console.log('i', i, 'length', people.length);
  var randomPersonIndex = Math.random();
  randomPersonIndex = randomPersonIndex * people.length;
  randomPersonIndex = Math.floor(randomPersonIndex);
  var personInAnArray = people.splice(randomPersonIndex, 1);
  randomPeople.push(personInAnArray[0]);
}
*/

//console.log('random person', randomPersonIndex, person);

console.log(randomPeople);
