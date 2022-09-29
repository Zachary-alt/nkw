// HJ89 24点运算
const tokens = line.split(" ");
if (line.toLowerCase().includes("joker")) return console.log("ERROR");
const res = []
const d = { 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 1, 2: 2 }
const f = (arr, target) => {
    if (arr.length === 1) {
        if (d[arr[0]] === target) {
            res.push(arr[0])
            return true
        } else {
            return false
        }
    }
    for (let i = 0; i < arr.length; i++) {
        const a = arr[i]
        const b = arr.slice(0, i).concat(arr.slice(i + 1))
        if (f(b, target + d[a])) {
            res.push('-' + a)
            return true
        } else if (f(b, target - d[a])) {
            res.push('+' + a)
            return true
        } else if (f(b, target * d[a])) {
            res.push('/' + a)
            return true
        } else if (target % d[a] === 0 && f(b, target / d[a])) {
            res.push('*' + a)
            return true
        }
    }
    return false
}
if (f(tokens, 24)) {
    console.log(res.join(''))
} else {
    console.log('NONE')
}