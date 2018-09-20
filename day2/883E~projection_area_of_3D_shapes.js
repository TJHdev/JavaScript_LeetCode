/*
On a N * N grid, we place some 1 * 1 * 1 cubes that are axis-aligned with the x, y, and z axes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).

Now we view the projection of these cubes onto the xy, yz, and zx planes.

A projection is like a shadow, that maps our 3 dimensional figure to a 2 dimensional plane. 

Here, we are viewing the "shadow" when looking at the cubes from the top, the front, and the side.

Return the total area of all three projections.
*/

var projectionArea = function(grid) {
  let total = 0;

  for(let i = 0; i < grid.length; i++) {
    let maxX = 0;
    let maxY = 0;
    for(let j = 0; j < grid[i].length; j++) {
      if (grid[j][i] > maxX) {
        maxX = grid[j][i];
      }
    }
    for(let k = 0; k < grid[i].length; k++) {
      if (grid[i][k]) {
        total++;
      }
      if (grid[i][k] > maxY) {
        maxY = grid[i][k];
      }
    }
    total += maxX;
    total += maxY;
  }
  return total;
};


projectionArea([[2,2,2],[2,1,2],[2,2,2]]); // expect 21
projectionArea([[1,0],[0,2]]); // expect 8
projectionArea([[1,1,1],[1,0,1],[1,1,1]]); // expect 14
