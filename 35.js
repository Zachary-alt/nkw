// 蛇形矩阵是由1开始的自然数依次排列成的一个矩阵上三角形。

// 例如，当输入5时，应该输出的三角形为：

// 1 3 6 10 15

// 2 5 9 14

// 4 8 13

// 7 12

// 11

// 0,0  0,1  0,2  0,3

// 1,0  1,1  1,2

// 2,0  2,1

// 3,0
let len=5
let ans=[],num=1
for(let i=0;i<len;i++){
    let x=i,y=0
    while(y<=i){
        if(ans[x]===undefined) ans[x]=[];
        ans[x][y]=num
        num++
        x--
        y++
    }
}
ans.forEach(it=>{
    console.log(it.join(' '))
})