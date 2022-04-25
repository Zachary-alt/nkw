// HJ17 坐标移动
// 开发一个坐标计算工具， A表示向左移动，D表示向右移动，W表示向上移动，S表示向下移动。从（0,0）点开始移动，从输入字符串里面读取一些坐标，并将最终输入结果输出到输出文件里面。

// 输入：

// 合法坐标为A(或者D或者W或者S) + 数字（两位以内）

// 坐标之间以;分隔。

// 非法坐标点需要进行丢弃。如AA10;  A1A;  $%$;  YAD; 等。
let steps=readline().split(';')
let x=0,y=0;
steps.forEach(it=>{
    let tag=it[0]
    let num=it.slice(1)
    if(['A','W','S','D'].includes(tag)&&!isNaN(num)&&num.length<=2){
        num*=1
        if(tag==='A'){
            x-=num
        }else if(tag==='D'){
            x+=num
        }else if(tag==='W'){
            y+=num
        }else if(tag==='S'){
            y-=num
        }
    }
})
console.log(`${x},${y}`)