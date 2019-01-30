/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let newX = x
    .toString()
    .split('')
    .reverse()
    .join('')
  return x == newX ? true : false
}
