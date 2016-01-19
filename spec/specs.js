describe('triangleTracker', function() {
  it("is triangle?", function() {
    expect(triangleTracker(20,50,20)).to.equal(false);
  });

  it("is equilateral?", function (){
    expect(triangleTracker(30,30,30)).to.equal(true);
  });

  it("is isosceles?", function() {
    expect(triangleTracker(30,30,50)).to.equal(true);
  });

});
