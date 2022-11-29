// 最大公约数
function gcd(a,b){
    if(a===0) return a;
    let c=b%a
    return gcd(a,c)
}
// 最小公倍数
function scm(a,b){
    return a*b/gcd(a,b)
}