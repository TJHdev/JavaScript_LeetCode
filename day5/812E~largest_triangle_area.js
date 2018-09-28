/*
You have a list of points in the plane. 
Return the area of the largest triangle that can be formed by any 3 of the points.
*/

debugger;
var largestTriangleArea = function(points) {
  let maxArea = 0;

  const triangleArea = (A,B,C) => {
    let AtoB = Math.sqrt((B[0]-A[0])**2 + (B[1]-A[1])**2);
    let BtoC = Math.sqrt((C[0]-B[0])**2 + (C[1]-B[1])**2);
    let CtoA = Math.sqrt((A[0]-C[0])**2 + (A[1]-C[1])**2);
  
    let S = (AtoB + BtoC + CtoA) / 2;
  
    return Math.sqrt(S*(S-AtoB)*(S-BtoC)*(S-CtoA));
  }

  for(let i = 0; i < points.length - 2; i++) {
    for(let j = i + 1; j < points.length - 1; j++) {
      for(let k = j + 1; k < points.length; k++) {
        let result = triangleArea(points[i],points[j],points[k])
        if(Boolean(result)) {
          maxArea = Math.max(result, maxArea)
        }
      }
    }
  }
  return maxArea;
};

//herons formula



largestTriangleArea([[-35,19],[40,19],[27,-20],[35,-3],[44,20],[22,-21],[35,33],[-19,42],[11,47],[11,37]])// expected 1799;
largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]); // expect 2