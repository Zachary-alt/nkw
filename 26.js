// HJ26 字符串排序
// 规则 1 ：英文字母从 A 到 Z 排列，不区分大小写。
// 如，输入： Type 输出： epTy

// 规则 2 ：同一个英文字母的大小写同时存在时，按照输入顺序排列。
// 如，输入： BabA 输出： aABb

// 规则 3 ：非英文字母的其它字符保持原来的位置。
// 如，输入： By?e 输出： Be?y

/**
 * 一开始的思路是取出字母，单独排序后再按照顺序放进去
 * 但是用sort无法满足规则 2，采取思路计数排序
 */
let str = readline().split('')
let arr = new Array(26).fill('')
for (let code of str) {
    if (/[a-z]/.test(code)) {
        arr[code.charCodeAt() - 'a'.charCodeAt()] += code
    } else if (/[A-Z]/.test(code)) {
        arr[code.charCodeAt() - 'A'.charCodeAt()] += code
    }
}
let newArr = arr.join('').split('')
for (let i = 0; i < str.length; i++) {
    if (!/[a-zA-Z]/.test(str[i])) {
        newArr.splice(i, 0, str[i])
    }
}
console.log(newArr.join(''))