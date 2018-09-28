/*
On a N * N grid, we place some 1 * 1 * 1 cubes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).

Return the total surface area of the resulting shapes.
*/
debugger;
var surfaceArea = function(grid) {
  let totalFacesContacting = 0;
  let totalCubes = 0;

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      if(grid[j+1] !== undefined){
        totalFacesContacting += Math.min(grid[i][j], grid[i][j+1]);
      }
      if(grid[i+1] !== undefined) {
        totalFacesContacting += Math.min(grid[i][j], grid[i+1][j]);
      }
      totalFacesContacting += grid[i][j] > 0 ? grid[i][j] - 1 : 0;
      totalCubes += grid[i][j]
    }
  }

  return (totalCubes * 6 - totalFacesContacting * 2);
};


surfaceArea([[1,2],[3,4]]); // expect 34;
surfaceArea([[1,0],[0,2]]); // expect 16;
surfaceArea([[2]]); // expect 10;
surfaceArea([[1,1,1],[1,0,1],[1,1,1]]); // expect 32;
surfaceArea([[2,2,2],[2,1,2],[2,2,2]]); // expect 46;