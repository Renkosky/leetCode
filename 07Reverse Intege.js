/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x > 0) {
    x = parseInt(
      x
        .toString()
        .split('')
        .reverse()
        .join('')
    )
    if (x > Math.pow(2, 31) - 1) return 0
    return x
  } else {
    x = -x
    x = -parseInt(
      x
        .toString()
        .split('')
        .reverse()
        .join('')
    )
    if (x < Math.pow(-2, 31) - 1) return 0
    return x
  }
}
