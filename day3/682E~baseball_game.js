/*
You're now a baseball game point recorder.

Given a list of strings, each string can be one of the 4 following types:

Integer (one round's score): Directly represents the number of points you get in this round.
"+" (one round's score): Represents that the points you get in this round are the sum of the last two valid round's points.
"D" (one round's score): Represents that the points you get in this round are the doubled data of the last valid round's points.
"C" (an operation, which isn't a round's score): Represents the last valid round's points you get were invalid and should be removed.
Each round's operation is permanent and could have an impact on the round before and the round after.

You need to return the sum of the points you could get in all the rounds.
*/

var calPoints = function(ops) {
  let validIndexsStack = []; // creates a stack to look at for valid indexs
  for(let i = 0; i < ops.length; i++) {
    let lastValidIndex = validIndexsStack[validIndexsStack.length - 1];
    let secondLastValidIndex = validIndexsStack[validIndexsStack.length - 2];
    switch(ops[i]){
      case "C": // changes C to zero
        ops[i] = 0;
        ops[lastValidIndex] = 0; // changes last valid score to zero
        validIndexsStack.pop()
        break;
      case "D":
        ops[i] = Number(ops[lastValidIndex]) * 2;
        validIndexsStack.push(i);
        break;
      case "+":
        ops[i] = Number(ops[lastValidIndex]) + Number(ops[secondLastValidIndex]);
        validIndexsStack.push(i);
        break;
      default:
        ops[i] = Number(ops[i]);
        validIndexsStack.push(i);
    }
  }
  ops = ops.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  return ops;
};


calPoints(["5","2","C","D","+"]); // expect 30;
calPoints(["5","-2","4","C","D","9","+","+"]); // expect 27;