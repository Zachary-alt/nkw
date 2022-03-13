function re(str){
    let arr = str.split('')
    arr.reverse()
    let res = Array.from(new Set(arr))
    console.log(res)
}

re('9876673')