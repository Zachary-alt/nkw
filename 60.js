// HJ60 查找组成一个偶数最接近的两个素数
// 任意一个偶数（大于2）都可以由2个素数组成，组成偶数的2个素数有很多种情况，本题目要求输出组成指定偶数的两个素数差值最小的素数对。
let n=readline()*1
let ans=[]
function getS(num){
    let a=num/2
    while(a<num){
        if(isSu(a)&&isSu(num-a)){
            ans=[num-a,a]
            break
        }else{
            a++
        }
    }
}
getS(n)
ans.forEach(it=>{
    console.log(it)
})
function isSu(num){
    let b=true
    for(let i=2;i<num;i++){
        if(num%i===0) return b=false;
    }
    return b
}