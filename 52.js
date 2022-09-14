// 计算字符串的编辑距离
let str1 = readline()
let str2 = readline()

function getDistance(s1, s2) {
    let len1 = s1.length, len2 = s2.length
    if (len1 * len2 === 0) return len1 + len2
    if (s1 === s2) return 0
    let dp = []
    for (let i = 0; i <= len1; i++) {
        if (dp[i] === undefined) dp[i] = []
        for (let j = 0; j <= len2; j++) {
            if (i * j === 0) {
                dp[i][j] = i + j
            } else if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else { // dp[i][j] dp[i-1][j] dp[i][j-1]
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1)
            }
        }
    }
    return dp[len1][len2]
}
console.log(getDistance(str1, str2))