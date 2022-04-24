// HJ56 完全数计算
// 完全数（Perfect number），又称完美数或完备数，是一些特殊的自然数。

// 它所有的真因子（即除了自身以外的约数）的和（即因子函数），恰好等于它本身。

// 例如：28，它有约数1、2、4、7、14、28，除去它本身28外，其余5个数相加，1+2+4+7+14=28。
let n=readline()*1
let count=0
for(let i=1;i<=n;i++){
    if(isPer(i)){
        count++
    }
}
console.log(count)
function isPer(n){
    let num=n
    let sum=0
    while(n>1){
        n--
        if(num%n===0){
            sum+=n
        }
        if(num<sum) return false;
    }
    return sum===num
}