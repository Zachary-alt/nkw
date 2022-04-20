// 计算一个浮点数的立方根，不使用库函数。
// 保留一位小数。
while(line=readline()){
    let num = line*1
//     console.log(Math.cbrt(num).toFixed(1))
    let n=0,tag=true
    if(num<0) {
        tag=false
        num*=-1
    }
    while(n*n*n<num){
        n+=0.01
    }
    let res = tag ? n : n*-1
    console.log(res.toFixed(1))
}