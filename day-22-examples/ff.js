// Spot #1

function f3(a) {
  a = a + 5;
  // Spot #2
  a = f5(a);
  // Spot #3
  a = f1(a);
  // Spot #4
  return a;
}

// Spot #5

function f1(b) {
  console.trace('f1');
  b = b - 2;
  // Spot #6
  return b;
  // Spot #7
}

function f5(c) {
  console.trace("f5");
  c = c * 3;
  // Spot #8
  return c;
  // Spot #9
}

var result = f3(7);
console.log(result);
