describe('triangleTracker', function() {

  it("is triangle?", function() {
    expect(triangleTracker(20,30,60)).to.equal(false);
  });

  it("is equilateral?", function (){
    expect(triangleTracker(30,30,30)).to.equal(true);
  });

  it("is isosceles?", function() {
    expect(triangleTracker(30,30,50)).to.equal(true);
  });

  it("is scalene?", function () {
    expect(triangleTracker(30,40,50)).to.equal(true);
  });

});
