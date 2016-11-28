

function f1() {
  var result = f2();
}

function f2() {
  var a = 7;

  f4();

  var result = f3(a);
  return result;
}

function f3(parm) {
  console.log('f3');
  errorYo //there is an error here
  return "salad";
}

function f4() {
  console.log('f4');
}

f1();
