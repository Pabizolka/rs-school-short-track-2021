/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const row = matrix.length - 1;
  const col = matrix[0].length - 1;
  const res = new Array(row + 1);
  for (let k = 0; k <= row; k++) {
    res[k] = new Array(col + 1).fill(0);
  }

  matrix.forEach((arr, i) => {
    arr.forEach((element, j) => {
      if (element) {
        if (i > 0 && j > 0) {
          res[i - 1][j - 1]++;
        }
        if (i > 0) {
          res[i - 1][j]++;
        }
        if (i > 0 && j < col) {
          res[i - 1][j + 1]++;
        }
        if (j > 0) {
          res[i][j - 1]++;
        }
        if (j < col) {
          res[i][j + 1]++;
        }
        if (i < row && j > 0) {
          res[i + 1][j - 1]++;
        }
        if (i < row) {
          res[i + 1][j]++;
        }
        if (i < row && j < col) {
          res[i + 1][j + 1]++;
        }
      }
    });
  });
  return res;
}

module.exports = minesweeper;
