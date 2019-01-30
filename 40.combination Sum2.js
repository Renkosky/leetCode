/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  var res = []
  var item = []
  candidates.sort()
  backtrade(candidates, 0, target, item, res)
  return res
}
function backtrade(candidates, start, target, item, res) {
  if (target < 0) return
  if (target == 0) {
    res.push(item.slice())
    return
  }
  for (let i = start; i < candidates.length; ++i) {
    if (i > start && candidates[i] == candidates[i - 1]) continue
    item.push(candidates[i])
    backtrade(candidates, i + 1, target - candidates[i], item, res)
    item.pop()
  }
}
