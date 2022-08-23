// // 查找兄弟单词
// “兄弟单词”为：交换该单词字母顺序（注：可以交换任意次），而不添加、删除、修改原有的字母就能生成的单词。
// 兄弟单词要求和原来的单词不同。
// 输入描述：
// 输入只有一行。 先输入字典中单词的个数n，再输入n个单词作为字典单词。 然后输入一个单词x 最后后输入一个整数k
// 输出描述：
// 第一行输出查找到x的兄弟单词的个数m 第二行输出查找到的按照字典顺序排序后的第k个兄弟单词，没有符合第k个的话则不用输出。

let line = readline().split(' ')
let n = line.shift()
let arr = line.slice(0, n)
let k = line.pop()
let x = line.pop()

let ans = []
for (let code of arr) {
    if (isBro(code, x)) {
        ans.push(code)
    }
}
function isBro(c1, c2) { // 主要为如何判断是否为兄弟单词
    if (c1 === c2 || c1.length !== c2.length) return false
    let code = c1, bool = true
    for (let i = 0; i < c2.length; i++) {
        if (!code.includes(c2[i])) {
            bool = false
            break
        } else {
            code = code.replace(c2[i], '')
        }
    }
    return bool
}
ans.sort()
console.log(ans.length)
if (ans[k - 1]) console.log(ans[k - 1])