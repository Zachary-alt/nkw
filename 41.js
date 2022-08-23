// HJ41 称砝码
// 描述
// 现有n种砝码，重量互不相等，分别为 m1,m2,m3…mn ；
// 每种砝码对应的数量为 x1,x2,x3...xn 。现在要用这些砝码去称物体的重量(放在同一侧)，问能称出多少种不同的重量。


// 注：

// 称重重量包括 0

// 数据范围：每组输入数据满足 1 \le n \le 10 \1≤n≤10  ， 1 \le m_i \le 2000 \1≤m 
// i
// ​	
//  ≤2000  ， 1 \le x_i \le 10 \1≤x 
// i
// ​	
//  ≤10 
// 输入描述：
// 对于每组测试数据：
// 第一行：n --- 砝码的种数(范围[1,10])
// 第二行：m1 m2 m3 ... mn --- 每种砝码的重量(范围[1,2000])
// 第三行：x1 x2 x3 .... xn --- 每种砝码对应的数量(范围[1,10])
// 输出描述：
// 利用给定的砝码可以称出的不同的重量数

let len=readline()*1
let weigths=readline().split(' ')
let nums=readline().split(' ')

// function getWeigths(){
//     let ans={0:true}
//     // 遍历每个不同的重量
//     for(let i=0;i<len;i++){
//          // 得到当前所有的重量数
//         let current = Object.keys(ans).map(Number)
//         // 列举当前重量及其数量的所有可能结果
//        for(let j=1;j<=nums[i];j++){
//             current.map(item=>{
//                 let val = weigths[i]*j + item
//                 if(!ans[val]) ans[val]=true
//             })
//         } 
//     }
//     console.log(Object.keys(ans).length)
// }

// getWeigths()

let fama = []            //序列化砝码，比如两个1g和一个2g的砝码用[1,1,2]表示
for (let i = 0; i < weigths.length; i++) {
    for (let j = 0; j < nums[i]; j++) {
        fama.push(Number(weigths[i]))
    }
}
let kind = new Set();    //用set表示加入当前砝码之前能产生的重量种类
kind.add(0);            //set初始化为0
// 当第一个1g砝码放入时，set中要插入原先所有元素+1g后的结构，即{0,0+1}，插入后变为{0,1}
// 当第二个1g砝码放入时，set要插入{0+1,1+1},变为{0,1,2}
// 第三个2g砝码放入时，set要插入{0+2,1+2,2+2},变为{0,1,2,3,4}
for (let i = 0; i < fama.length; i++) {
    let arr = [...kind]    //用一个数组来缓存当前种类的砝码的值
    for (let k of arr) {
        kind.add(k + fama[i]);
    }
}
console.log(kind.size)