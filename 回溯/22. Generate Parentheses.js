// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

// 例如，给出 n = 3，生成结果为：
// [
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
//   ]
var generateParenthesis = function(n) {
  var res = []
  backtrade(n, n, res, '')
  return res
}
function backtrade(l, r, res, sublist) {
  if (l + r === 0) {
    res.push(sublist)
  }
  if (r > l) {
    backtrade(l, r - 1, res, sublist + ')')
  }
  if (l > 0) {
    backtrade(l - 1, r, res, sublist + '(')
  }
}
