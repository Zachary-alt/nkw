// HJ23 删除字符串中出现次数最少的字符
let str = readline()
let hashMap = {}
for (let i = 0; i < str.length; i++) {
    if (hashMap[str[i]]) {
        hashMap[str[i]] += 1
    } else {
        hashMap[str[i]] = 1
    }
}
let keys = Object.keys(hashMap)
let min = hashMap[keys[0]]
let arr = []
for (let key in hashMap) {
    min = Math.min(min, hashMap[key])
}
for (let key in hashMap) {
    if (hashMap[key] === min) {
        arr.push(key)
    }
}
arr.map(key => {
    if (key) {
        let reg = new RegExp(key, 'g')
        str = str.replace(reg, '')
    }
})
console.log(str)