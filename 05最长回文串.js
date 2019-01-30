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
//动态规划，对角线上相等
//假设字符串s的长度为length，建立一个length*length的矩阵dp。

// dp[i][j]表示“以s[i]开始s[j]结尾的回文串的长度。如果这个字符串不是回文串，让dp[i][j]=0”。显然，j>=i，只需往dp填j>=i的部分即可。

// dp[i][j]的递推公式可以这么表述：

// （1）首先对dp的对角线元素初始化为1，也就是当i==j时，dp[i][j]=1。

// 这很显然，每个单独的字符其实就是个长度为1的回文串。

// （2）当j-i==1：

// 若s[i]==s[j]，则dp[i][j]=2；否则dp[i][j]=0。

// 解释：当j-i==1时，若s[i]==s[j]，则s[i]和s[j]可以组成一个长度为2的回文串。若s[i]！=s[j]，显然他们不可能组成回文串，dp[i][j]=0。

// （3）当j-i>=2：

// 若s[i]==s[j]：若dp[i+1][j-1]>0，则dp[i][j]= dp[i + 1][j - 1] + 2;否则dp[i][j]= 0;

// 若s[i]!=s[j]：dp[i][j]=0。

// 解释：如果s[i]==s[j]，表明这个子串有可能是回文串。当去头去尾后它是回文串时，就可以在去头去尾的那个回文串长度基础上+2，得到它的长度。如果去头去尾后不是回文串，那这个子串一定不是回文串，回文串长度只能是0。

// 若s[i]！=s[j]，显然他们不可能组成回文串，dp[i][j]=0。

// 只需找到dp[i][j]的最大元素和它对应的i和j就可以得到结果“s中最长回文子串”。

// 另外还有一个要注意的点：因为需要访问dp[i+1][j-1]，因此i是从大到小的，j是从小到大的。j从0到size-1，i从j-1到0。
const longestPalindrome = function(s) {
  let len = s.length
  let dp = new Array()
  let start = 0,
    max = 1

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
          dp[i][j] = 2
        } else {
          if (dp[i + 1][j - 1] > 0) {
            dp[i][j] = dp[i + 1][j - 1] + 2
          } else {
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
  console.log(s.slice(start, max))

  return s.slice(start, max)
}
longestPalindrome('abadd')
