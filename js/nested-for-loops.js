/**
 * Returns a string representation of a 2-dimensional data structure 
 * @param {number} depth 
 * @param {number} [width=depth] 
 * @returns {string}
 */
function nestedForLoops(depth, width = depth) {
  if (isNaN(depth) || isNaN(width)) {
    return "";
  }
  let result = "\n";

  for (let i = 0; i < depth; i++) {
    for (let j = 0; j < width; j++) {
      result += `{x:${j}, y:${i}}`
      if (j < width - 1) {
        result += `, `
      } else if (j === width - 1) {
        result += "\n"
      }
    }
  }
  return result;
};

// To see your console output outside the tests add function calls here.
// console.log(nestedForLoops(4));
