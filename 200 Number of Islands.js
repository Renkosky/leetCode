/**
  * @param {character[][]} grid
  * @return {number}
  * 
 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。
 
 示例 1:
 
 输入:
 11110
 11010
 11000
 00000
 
 输出: 1
 示例 2:
 
 输入:
 11000
 11000
 00100
 00011
 
 输出: 3
*/
var numIslands = function(grid) {
  let count = 0
  var col = grid.length
  var row = grid[0].length
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (grid[i][j] === '1') {
        dfsSearch(grid, i, j, row, col)
        count++
      }
    }
  }
  console.log(count)
}
function dfsSearch(grid, i, j, row, col) {
  if (i < 0 || i > row - 1 || j < 0 || j > col - 1 || grid[i][j] === '0') return
  grid[i][j] = '0'
  //上下左右深度优先遍历
  dfsSearch(grid, i, j - 1, row, col)
  dfsSearch(grid, i, j + 1, row, col)
  dfsSearch(grid, i - 1, j, row, col)
  dfsSearch(grid, i + 1, j, row, col)
}
