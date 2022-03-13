// 密码要求:

// 1.长度超过8位

// 2.包括大小写字母.数字.其它符号,以上四种至少三种

// 3.不能有长度大于2的不含公共元素的子串重复 （注：其他符号不含空格或换行）

// 数据范围：输入的字符串长度满足 1 \le n \le 100 \1≤n≤100 
while(line=readline()){
    let arr = line.split('/n')
    for(let item of arr){
        console.log(checktype(item)&&checkRepeat(item)?'OK':'NG')
    }
}
function checktype(str){
    let nums=0
    if(/\d/.test(str)){
        nums++
    }
    if(/[a-z]/.test(str)){
        nums++
    }
    if(/[A-z]/.test(str)){
        nums++
    }
    if(/[^0-9a-zA-z]/.test(str)){
        nums++
    }
    return nums>=3
}
function checkRepeat(str){
    if(str.length<8) return false
    for(let i=0;i<str.length;i++){
        if(str.lastIndexOf(str.slice(i,i+3))>i){
            return false
        }
    }
    return true
} 