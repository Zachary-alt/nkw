// 高精度整数加法
let a=readline().split('')
let b=readline().split('')
let res='',c=0
while(a.length||b.length||c){
    c+=~~a.pop()+~~b.pop()
    res=c%10+res
    c=c>9?1:0
}
console.log(res)