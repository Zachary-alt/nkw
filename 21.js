// 现在有一种密码变换算法。
// 九键手机键盘上的数字与字母的对应： 1--1， abc--2, def--3, ghi--4, jkl--5, mno--6, pqrs--7, tuv--8 wxyz--9, 0--0，把密码中出现的小写字母都变成九键键盘对应的数字，如：a 变成 2，x 变成 9.
// 而密码中出现的大写字母则变成小写之后往后移一位，如：X ，先变成小写，再往后移一位，变成了 y ，例外：Z 往后移是 a 。
// 数字和其它的符号都不做变换。
let str = readline()
let res = ''
let phone = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
for (let i = 0; i < str.length; i++) {
    let w = str[i]
    if (w === 'Z') {
        res += 'a'
    } else if (/[A-Y]/.test(w)) {
        res += String.fromCharCode(w.toLowerCase().charCodeAt() + 1)
    } else if (/[a-z]/.test(w)) {
        let index = phone.findIndex(it => {
            return it.includes(w)
        })
        res += index
    } else {
        res += w
    }
}
console.log(res)