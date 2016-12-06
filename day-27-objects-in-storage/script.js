// object example

// var value = { name: 'Bob' };
//
// value = JSON.stringify(value);
//
// localStorage.setItem('value', value);
//
// var getItBack = localStorage.getItem('value');
// console.log('I got this back: ', getItBack);
//
// var parsed = JSON.parse(getItBack);
// console.log(parsed);




// array example

// var value = ['ONE', 'two', 'ThReE'];
//
// value = JSON.stringify(value);
//
// localStorage.setItem('value', value);
//
// var getItBack = localStorage.getItem('value');
// console.log('I got this back: ', getItBack);
//
// var parsed = JSON.parse(getItBack);
// console.log(parsed);



var value = [{
  name: 'Bob Smith'
},
{
  name: 'Jane Doe'
}];

value = JSON.stringify(value);

localStorage.setItem('value', value);

//At some point later for some reason...

var getItBack = localStorage.getItem('value');
console.log('I got this back: ', getItBack);

var parsed = JSON.parse(getItBack);
console.log(parsed);
