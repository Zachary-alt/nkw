// •输入一个字符串，请按长度为8拆分每个输入字符串并进行输出；

// •长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。
let line =readline()
if(line.length<=8){
    console.log(line.padEnd(8,'0'))
}else{
    while(line.length>8){
        console.log(line.slice(0,8))
        line=line.slice(8,line.length)
    }
    console.log(line.padEnd(8,'0'))
}
