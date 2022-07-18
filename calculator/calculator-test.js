
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:100000, years:10, rate:6})).toEqual('1110.21');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount:100000, years:10, rate:6})).toMatch(/^\d+\.\d\d$/);
});


describe('Faulty inputs should return faulty outputs', function(){
  it("amount NaN value", function() {
    expect(calculateMonthlyPayment({amount:'Alpha', years:10, rate:6})).toEqual('NaN');
  });
  it("years zero value", function() {
    expect(calculateMonthlyPayment({amount:100000, years:'', rate:6})).toEqual('Infinity');
    // Divide by 0 = infinity
  });
  it("years NaN value", function() {
    expect(calculateMonthlyPayment({amount:100000, years:'Beta', rate:6})).toEqual('NaN');
  });
  it("rate NaN value", function() {
    expect(calculateMonthlyPayment({amount:100000, years:10, rate:null})).toEqual('NaN');
  });
})