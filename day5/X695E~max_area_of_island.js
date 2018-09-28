/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's 
(representing land) connected 4-directionally (horizontal or vertical.) 
You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)
*/

var maxAreaOfIsland = function(grid) {
  let stack = [];
  let max = 0;
  let set = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if(grid[i][j] === 1) {
        stack.push([i,j]);
        grid[i][j] === 0
        while(stack.length !== 0) {
          let curr = stack.pop();
          let x = curr[0];
          let y = curr[1];
          console.log("x:",x);
          console.log("y:",y);
          if(x < 0 || y < 0 || x >= grid.length || y >= grid[0].length )
          if(grid[x][y-1] === 1) {
            stack.push([x,y-1]);
            grid[x][y-1] = 0
          }
          if(grid[x+1][y] === 1) {
            stack.push([x+1,y]);
            grid[x+1][y] === 0
          }
          if(grid[x][y+1] === 1) {
            stack.push([x,y+1]);
            grid[x][y+1] === 0
          }
          if(grid[x-1] && grid[x-1][y] === 1) {
            stack.push([x-1,y]);
            grid[x-1][y] === 0
          }
        }
        max = Math.max(set.size, max);
      }
    }
  }
  return max;
};


// Leetcode recursive solution
const exploreIsland = (grid, i, j, area) => {
  if (!(i >= 0 && i < grid.length && j >= 0 && j < grid[0].length) || grid[i][j] === 0) return 0
  area++
  grid[i][j] = 0
  return area + 
      exploreIsland(grid, i+1, j, 0) + 
      exploreIsland(grid, i-1, j, 0) + 
      exploreIsland(grid, i, j+1, 0) + 
      exploreIsland(grid, i, j-1, 0)
}

const maxAreaOfIsland = grid => {
  let largestArea = 0
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === 1) {
              largestArea = Math.max(largestArea, exploreIsland(grid, i, j, 0))
          }
      }
  }
  return largestArea
}

let testGrid = 
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,1,1,0,1,0,0,0,0,0,0,0,0],
[0,1,0,0,1,1,0,0,1,0,1,0,0],
[0,1,0,0,1,1,0,0,1,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,0,0,0,0,0,0,1,1,0,0,0,0]]

maxAreaOfIsland(testGrid); // expect 6