// 矩阵乘法计算量估算
// 输入描述：
// 输入多行，先输入要计算乘法的矩阵个数n，每个矩阵的行数，列数，总共2n的数，最后输入要计算的法则
// 计算的法则为一个字符串，仅由左右括号和大写字母（'A'~'Z'）组成，保证括号是匹配的且输入合法！

// 输出描述：
// 输出需要进行的乘法次数
let n = readline()*1
let arr=[]
for(let i=0;i<n;i++){
    arr.push(readline().split(' ').map(Number))
}
let str = readline()
let exps=[],vals=[],count=0
for(let i=0;i<str.length;i++){
    if(str[i]==='('){
        exps.push(str[i])
    }else if(/[A-Z]/.test(str[i])){
        vals.push(str[i])
    }else{
        if(exps[exps.length-1]==='('){
            let bi=vals.pop().charCodeAt()-65
            let ai=vals[vals.length-1].charCodeAt()-65
            count +=  cal(arr[ai],arr[bi])
            arr[ai]=[arr[ai][0],arr[bi][1]]
            exps.pop()
        }
    }
}
function cal(m1,m2){
    return m1[0]*m1[1]*m2[1]
}
console.log(count)