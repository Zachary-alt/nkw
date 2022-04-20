// Redraiment是走梅花桩的高手。Redraiment可以选择任意一个起点，从前到后，但只能从低处往高处的桩子走。他希望走的步数最多，你能替Redraiment研究他最多走的步数吗？
// 示例1
// 输入：
// 6
// 2 5 1 5 4 5 
// 输出：
// 3
// 说明：
// 6个点的高度各为 2 5 1 5 4 5
// 如从第1格开始走,最多为3步, 2 4 5 ，下标分别是 1 5 6
// 从第2格开始走,最多只有1步,5
// 而从第3格开始走最多有3步,1 4 5， 下标分别是 3 5 6
// 从第5格开始走最多有2步,4 5， 下标分别是 5 6
// 所以这个结果是3。     

// let max = 0
// function getStep(len, strs) {
//     let arr = strs.split(' ').map(it=>parseInt(it))
//     let dp = []
//     for (let i = 0; i < len; i++) {
//         if (!dp[i]) dp[i] = []
//         // if(max>(arr.length-i)) return
//         dfs(i, dp[i], arr, [arr[i]])
//     }
//     console.log(max);
// }

// function dfs(index, dp, arr, list) {

//     if (index >= arr.length) {
//         dp.push(list.slice())
//         max = Math.max(max, list.length)
//         return
//     }
//     if (arr[index + 1] > list[list.length - 1]) {
//         list.push(arr[index + 1])
//         dfs(index + 1, dp, arr, [...list])
//         list.pop()
//         dfs(index + 1, dp, arr, [...list])
//     } else {
//         dfs(index + 1, dp, arr, [...list])
//     }
// }

function getStep(len, strs) {
    let nums = strs.split(' ').map(it => parseInt(it))
    if (nums.length === 0) return 0
    let res = 1, dp = []
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            //其中 nums[j] < nums[i]，即扫描 i 前面的桩，如果有比 i 小的话就使用状态转移方程 dp[i] = max(dp[i], dp[j] + 1)
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res = Math.max(res, dp[i])
    }
    console.log(res);
    return res
}
getStep(88, '317 211 180 187 104 285 63 117 320 35 288 299 235 282 105 231 253 74 143 148 77 249 310 137 191 184 88 8 194 12 117 108 260 313 114 261 60 226 133 61 146 297 291 13 198 286 254 96 135 48 135 307 23 155 203 258 168 42 301 45 164 193 26 290 280 172 94 230 156 36 250 174 47 188 148 138 194 89 71 119 218 325 136 63 271 210 320 309')