// 密码截取  回文最长长度

let line =readline()
getPwd(line)
function getPwd(str){
    let len=str.length
    let max=1
    if(len<2) return 1
    for(let i=0;i<len;i++){
        let oddMax = getMaxLen(str,i,i)
        let evenMax = getMaxLen(str,i,i+1)
        let currentMax=Math.max(oddMax,evenMax)
        max = Math.max(max,currentMax)
    }
    console.log(max)
}
function getMaxLen(s,l,r){
    let len =s.length
    while(l>=0&&r<len&&s[l]===s[r]){
        l--
        r++
    }
    return r-l-1
}