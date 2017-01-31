QUnit.test( "Can add", function( assert ) {
  var result = C.calculator.add(6, 7);
  assert.ok( 13 == result, "Passed!" );
});

QUnit.test("Can multiply", function(assert) {
  var result = C.calculator.multiply(2, 5);
  assert.equal(result, 10);
});
