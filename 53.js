// HJ53 杨辉三角的变形
// let n=14
// let start=n
// let dp=[]
// for(let i=0;i<n;i++){
//     if(!dp[i]) dp[i]=[];
//     if(i===0) {
//         dp[i][n]=1;
//         continue
//     }
//     start--
//     let tmp=start
//     let l=2*(i+1)-1
//     while(l>0){
//         dp[i][tmp]=sum(dp[i-1][tmp],dp[i-1][tmp-1],dp[i-1][tmp+1]);
//         l--
//         tmp++
//     }
// }
// console.log(dp);
// console.log(dp[n-1].findIndex(it=>{
//     return it%2===0
// }))
// function sum(a=0,b=0,c=0){
//     return a+b+c
// }

// 规律：-1 -1 2 3 2 4 2 3 2 4
let n =readline()*1
if(n==1||n==2){
    console.log(-1)
}else if(n%4==3||n%4==1){
    console.log(2)
}else if(n%4==0){
    console.log(3)
}else if(n%4==2){
    console.log(4)
}