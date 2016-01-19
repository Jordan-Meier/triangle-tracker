// var triangleTracker = function (side1, side2, side3) {
//   if ((side1 === side2) && (side2 === side3)) {
//     return true;
//   } else if ((side1 === side2) && (side2 !== side3)) {
//     return true;
//   } else if ((side1 !== side2) && (side2 !== side3)) {
//     return true;
//   } else {
//     return false;
//   }
// };


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
