// 字符串加解密
// 加密方法为：

// 当内容是英文字母时则用该英文字母的后一个字母替换，同时字母变换大小写,如字母a时则替换为B；字母Z时则替换为a；

// 当内容是数字时则把该数字加1，如0替换1，1替换2，9替换0；

// 其他字符不做变化。

// 解密方法为加密的逆过程。
// 数据范围：输入的两个字符串长度满足 1 \le n \le 1000 \1≤n≤1000  ，保证输入的字符串都是只由大小写字母或者数字组成
// 输入描述：
// 第一行输入一串要加密的密码
// 第二行输入一串加过密的密码

// 输出描述：
// 第一行输出加密后的字符
// 第二行输出解密后的字符
console.log(veryfiy(readline()))
console.log(decodeWord(readline()))

function veryfiy(line) {
    let res = ''
    for (let i = 0; i < line.length; i++) {
        if (/[a-z]/.test(line[i])) {
            let up = line[i].toUpperCase()
            if (up === 'Z') {
                up = 'A';
            } else {
                up = String.fromCharCode(up.charCodeAt() + 1)
            }
            res += up
        } else if (/[A-Z]/.test(line[i])) {
            let low = line[i].toLowerCase()
            if (low === 'z') {
                low = 'a';
            } else {
                low = String.fromCharCode(low.charCodeAt() + 1)
            }
            res += low
        } else if (/[0-9]/.test(line[i])) {
            let num = line[i] * 1 + 1
            num >= 10 ? num = 0 : ''
            res += num
        } else {
            res += line[i]
        }
    }
    return res
}
function decodeWord(line) {
    let res = ''
    for (let i = 0; i < line.length; i++) {
        if (/[a-z]/.test(line[i])) {
            let up = line[i].toUpperCase()
            if (up === 'A') {
                up = 'Z';
            } else {
                up = String.fromCharCode(up.charCodeAt() - 1)
            }
            res += up
        } else if (/[A-Z]/.test(line[i])) {
            let low = line[i].toLowerCase()
            if (low === 'a') {
                low = 'z';
            } else {
                low = String.fromCharCode(low.charCodeAt() - 1)
            }
            res += low
        } else if (/[0-9]/.test(line[i])) {
            let num = line[i] == 0 ? 9 : line[i] * 1 - 1

            res += num
        } else {
            res += line[i]
        }
    }
    return res
}

