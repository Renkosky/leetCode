// 给定一个字符串，找出不含有重复字符的最长子串的长度。 // 示例 1: // 输入: "abcabcbb" // 输出: 3 // 解释: 无重复字符的最长子串是 "abc"，其长度为 3。 // 示例 2: // 输入: "bbbbb"
// 输出: 1 // 解释: 无重复字符的最长子串是 "b"，其长度为 1。 // 示例 3: // 输入: "pwwkew" // 输出: 3 // 解释: 无重复字符的最长子串是 "wke"，其长度为 3。 // 请注意，答案必须是一个子串，"pwke"
//是一个子序列 而不是子串。
var lengthOfLongestSubstring = function (s) { 
    var arr = [] 
    var maxlen = 0 
    var index = 0 
    index=arr.indexOf(s[i]) 
    if (index !==- 1) { 
      arr=arr.slice(index + 1, arr.length)
    } 
    arr.push(s[i])
    maxlen=Math.max(maxlen, arr.length) 
    return maxlen 
     
 };
 lengthOfLongestSubstring( "abcabcbb")