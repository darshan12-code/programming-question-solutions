/****************************************************************
 *             CODERBYTE CORRECT PATH CHALLENGE                 *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CorrectPath(str) read the str parameter    *
 * being passed, which will represent the movements made in a   *
 * 5x5 grid of cells starting from the top left position. The   *
 * characters in the input string will be entirely composed     *
 * of: r, l, u, d, ?. Each of the characters stand for the      *
 * direction to take within the grid,                           *
 * for example: r = right, l = left, u = up, d = down. Your goal*
 * is to determine what characters the question marks should be *
 * in order for a path to be created to go from the top left of *
 * the grid all the way to the bottom right without touching    *
 * previously travelled on cells in the grid.                   *
 *                                                              *
 * For example: if str is "r?d?drdd" then your program should   *
 * output the final correct string that will allow a path to be *
 * formed from the top left of a 5x5 grid to the bottom right.  *
 * For this input, your program should therefore return the     *
 * string rrdrdrdd. There will only ever be one correct path &  *
 * there will always be at least one question mark within the   *
 * input string.                                                *
 *                                                              *
 * Examples                                                     *
 * Input 1: "???rrurdr?"                                        *
 * Output 1: dddrrurdrd                                         *
 *                                                              *
 * Input 2: "drdr??rrddd?"                                      *
 * Output 2: drdruurrdddd                                       *
 ***************************************************************/  

function CorrectPath(str) {
    const directions = ['r', 'l', 'u', 'd'];
    const gridSize = 5;
    let path = str.split('');
    let visited = Array.from({ length: gridSize }, () => Array(gridSize).fill(false));
    let startX = 0, startY = 0;
    visited[startY][startX] = true;

    function isValidMove(x, y) {
        return x >= 0 && x < gridSize && y >= 0 && y < gridSize && !visited[y][x];
    }

    function backtrack(index, x, y) {
        if (x === gridSize - 1 && y === gridSize - 1) {
            return true;
        }

        if (index >= path.length) {
            return false;
        }

        let originalChar = path[index];
        let moves = originalChar === '?' ? directions : [originalChar];

        for (let move of moves) {
            let newX = x, newY = y;
            if (move === 'r') newX++;
            if (move === 'l') newX--;
            if (move === 'u') newY--;
            if (move === 'd') newY++;

            if (isValidMove(newX, newY)) {
                visited[newY][newX] = true;
                path[index] = move;

                if (backtrack(index + 1, newX, newY)) {
                    return true;
                }

                visited[newY][newX] = false;
                path[index] = originalChar;
            }
        }

        return false;
    }

    backtrack(0, startX, startY);
    return path.join('');
}

// Test cases
console.log(CorrectPath("???rrurdr?")); // Output: "dddrrurdrd"
console.log(CorrectPath("drdr??rrddd?")); // Output: "drdruurrdddd"
