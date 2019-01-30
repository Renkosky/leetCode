var longestValidParentheses = function(s) {
  let res = 0,
    start = 0
  let m = []
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '(') m.push(i)
    else if (s[i] == ')') {
      if (m.length === 0) start = i + 1
      else {
        m.pop()
        res =
          m.length === 0
            ? Math.max(res, i - start + 1)
            : Math.max(res, i - m[m.length - 1])
      }
    }
  }
  return res
}
