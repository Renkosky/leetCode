/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n >= 0) {
    return pow(Math.abs(n))
  } else {
    return 1 / pow(Math.abs(n))
  }

  function pow(n) {
    var temp = 0
    if (n === 0) {
      return 1
    } else if (n === 1) {
      return x
    } else if (n % 2 === 1) {
      temp = pow((n - 1) / 2)
      return temp * temp * x
    } else if (n % 2 === 0) {
      temp = pow(n / 2)
      return temp * temp
    }
  }
}
//递归，二分折半，比如求3的4次方，可以拆成3的2次方相乘；3的5次就是3^2相乘再乘2
