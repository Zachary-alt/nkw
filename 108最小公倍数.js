// 最大公约数
function gcd(a,b){
    if(b===0) return a;
    let c=a%b
    return gcd(b,c)
}
// 最小公倍数
function scm(a,b){
    return a*b/gcd(a,b)
}