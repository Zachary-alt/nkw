// 名字的漂亮度
// 给出一个字符串，该字符串仅由小写字母组成，定义这个字符串的“漂亮度”是其所有字母“漂亮度”的总和。
// 每个字母都有一个“漂亮度”，范围在1到26之间。没有任何两个不同字母拥有相同的“漂亮度”。字母忽略大小写。

// 给出多个字符串，计算每个字符串最大可能的“漂亮度”。

// 本题含有多组数据。

// 数据范围：输入的名字长度满足 1 \le n \le 10000 \1≤n≤10000 

// 输入描述：
// 第一行一个整数N，接下来N行每行一个字符串

// 输出描述：
// 每个字符串可能的最大漂亮程度
let len=readline()*1
arr=[]
while(line=readline()){
    arr.push(line)
}
arr.map(strs=>{
    let codes=new Array(26).fill(0)
    for(let i=0;i<strs.length;i++){
        let code=strs[i].toLowerCase()
        codes[code.charCodeAt()-97]++
    }
    codes.sort((a,b)=>b-a)
    let res=0,p=26
    for(let n of codes){
        res=res+n*p
        p--
        if(n===0) break;
    }
    console.log(res)
})