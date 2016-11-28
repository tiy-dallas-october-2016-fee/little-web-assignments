//console.log('hello from external file');

//console.log('document', window.document);

//console.log('count of body children', document.body.children.length);

//console.log('second child', document.body.children[1])

//You can get an element by its id
var theList = document.getElementById('cool-list');
//console.log('that list', theList);

//You can get an element by its id and change its text
var h1 = document.getElementById('the-header');
h1.textContent = 'I changed it';


//You can use query selector to get something
var ul = document.querySelector('.other-list');
//console.log('the ul I found', ul);

//If you use query selector and multiple items match, it will return the first
var unsureWhichUL = document.querySelector('ul');
//console.log('not sure', unsureWhichUL);

//Using querySelectorAll, you can get an **array** of all matching items
var allUls = document.querySelectorAll('ul');
//console.log(allUls);


//use querySelectorAll to grab all items
//change the text of every item to something you wish

var lis = document.querySelectorAll('li');
//console.log('the lis', lis);
lis.textContent = 'hi';

for (var i = 0; i < lis.length; i++) {
  var theLi = lis[i];
  theLi.textContent = 'Hello there';
}


//Grab the list
//Change the text of just the children

var coolList = document.querySelector('.other-list');

//console.log('first list', coolList.children);

for (var i = 0; i < coolList.children.length; i++) {
  var child = coolList.children[i];
  child.textContent = 'I want steak for lunch!';
}


var section = document.querySelector('#put-stuff-here');


var str = '<p>Boom! Subparagraph</p><ul>';

var people = ['Bob', 'Sue', 'Joan', 'Bucephalus'];

for (var i = 0; i < people.length; i++) {
  str += '<li>' + people[i] + '</li>';
}

str += '</ul>';

section.innerHTML = str;
//console.log(section);


//Add some new DOM element to the page
//Add stuff to it with innerHTML
