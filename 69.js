// 矩阵乘法
let x=readline()*1
let y=readline()*1
let z=readline()*1

let a=[],b=[],c=[]

for(let i=0;i<x;i++){
    a.push(readline().split(' ').map(Number))
}
for(let i=0;i<y;i++){
    b.push(readline().split(' ').map(Number))
}

// a11xb11+a12xb21+a13xb31, a11xb12+a12xb22+a13xb32

for(let i=0;i<x;i++){
    let tmpArr=[]
    for(let j=0;j<z;j++){
        let num=0
        for(let k=0;k<y;k++){
            num+=a[i][k]*b[k][j]
        }
        tmpArr.push(num)
    }
    c.push(tmpArr)
}

c.map(item=>{
    console.log(item.join(' '))
})