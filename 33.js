// 整数与IP地址间的转换
// 原理：ip地址的每段可以看成是一个0-255的整数，把每段拆分成一个二进制形式组合起来，然后把这个二进制数转变成
// 一个长整数。
// 举例：一个ip地址为10.0.3.193
// 每段数字             相对应的二进制数
// 10                   00001010
// 0                    00000000
// 3                    00000011
// 193                  11000001

// 组合起来即为：00001010 00000000 00000011 11000001,转换为10进制数就是：167773121，即该IP地址转换后的数字就是它了。

// 数据范围：保证输入的是合法的 IP 序列

// 输入描述：
// 输入 
// 1 输入IP地址
// 2 输入10进制型的IP地址

// 输出描述：
// 输出
// 1 输出转换成10进制的IP地址
// 2 输出转换后的IP地址
let ips = readline().split('.')
toTen(ips)
let line = readline()
toIp(line)

function toTen(ips){
    let str=''
    ips.map(item=>{
        let tmp = (item*1).toString(2).padStart(8,'0')
        str+=tmp
    })
    console.log(parseInt(str,2))
}
function toIp(line){
    let str = (line*1).toString(2).padStart(32, "0")
    let arr=[]
    for(let i=0;i<str.length;i+=8){
        let item=str.slice(i,i+8)
        arr.push(parseInt(item,2))
    }
    console.log(arr.join('.'))
}
