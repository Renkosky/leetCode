
    /**
     * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。
     * 示例 1：
     * 输入: "babad"
     * 输出: "bab"
     * 注意: "aba"也是一个有效答案。
     * 示例 2：
     * 输入: "cbbd"
     * 输出: "bb"
     * */
    const longestPalindrome = function (s) {
      let len = s.length
      let dp = new Array()
      let start = 0, max = 1

      if (len < 1) return s
      for (let i = 0; i < len; i++) {
        dp[i] = new Array()
        for (let j = 0; j < len; j++) {
          if (j === i) {
            dp[i][j] = 1
          } else {
            dp[i][j] = 0
          }

        }
      }
      for (let j = 0; j < len; j++) {
        for (let i = j - 1; i >= 0; i--) {
          if (s[i] === s[j]) {
            if (j - i == 1) {
              dp[i][j] = 2;
            } else {
              if (dp[i + 1][j - 1] > 0) {
                dp[i][j] = dp[i + 1][j - 1] + 2
              }
              else {
                dp[i][j] = 0
              }
            }
          } else {
            dp[i][j] = 0
          }
          if (dp[i][j] > max) {
            max = dp[i][j]
            start = i
          }
        }

      }
      console.log(s.slice(start, max));

      return s.slice(start, max)


    };
    longestPalindrome("abadd")
