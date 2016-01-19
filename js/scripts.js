//BDD Red, Green, Refactor for business logic testing
var triangleTracker = function (side1, side2, side3) {
  
  if ((side1 + side2 <= side3)) {
    return false;
  } else if ((side1 === side2) && (side2 === side3)) {
    return true;
  } else if ((side1 === side2) && (side2 !== side3)) {
    return true;
  } else if ((side1 !== side2) && (side2 !== side3)) {
    return true;
  }
};

//BDD user logic interface
$(document).ready(function() {
  $("form#triangle-tracker").submit(function(event) {
//We want an alert to pop up if nothing is entered into form
    var side1 = $("input#side1").val();
    var side2 = $("input#side2").val();
    var side3 = $("input#side3").val();
    var result = triangleTracker(side1, side2, side3);

    if ((side1.length === 0) || (side2.length === 0) || (side3.length === 0)) {
      alert("Please fill in all three values.");
    } else {

      var side1 = parseInt($("input#side1").val());
      var side2 = parseInt($("input#side2").val());
      var side3 = parseInt($("input#side3").val());

      if ((side2 + side3 <= side1) || (side3 + side1 <= side2) || (side1 + side2 <= side3)) {
        $(".triangleType").text("are not a");
      } else if ((side1 === side2) && (side2 === side3)) {
        $(".triangleType").text("produces an equilateral");
      } else if ((side1 === side2) && (side2 !== side3) || (side2 === side3) && (side3 !== side1) || (side3 === side1) && (side1 !== side2)) {
        $(".triangleType").text("produces a isosceles");
      } else if ((side1 !== side2) && (side2 !== side3) || (side3 !== side1)) {
        $(".triangleType").text("produces a scalene");
      }
    }


  $("#result").show();
  event.preventDefault();
  });
});
