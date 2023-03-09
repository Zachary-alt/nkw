// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。    [0,1,0,3,12]
// function formateArr(arr){
//     let zeroArr=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===0){
//             zeroArr.push(0)
//             arr.splice(i,1)
//         }
//     }
//     return [...arr,...zeroArr]
// }
// function formateArr(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===0){
//             arr.splice(i,1)
//             arr.push(0)
//         }
//     }
//     console.log(arr);
// }
// formateArr([0,1,0,3,12])

// 正数组的最⼤差值⽐如: 输⼊ [10,5,11,7,8,9] 输出 6
// function getMaxCeill(arr){
//     arr.sort((a,b)=>a-b)
//     console.log(arr[arr.length-1]-arr[0]);
// }
function getMaxCeillRes(arr){
    const ans=[]
    arr.sort((a,b)=>a-b)
    let value = arr[arr.length-1]-arr[0]
    let hash={}
    for(let i=0;i<arr.length;i++){
        let val=arr[i]
        if(val>=value){
            let tmp=val-value
            if(arr.includes(tmp)){
                let key =getKey(val,tmp)
                hash[key] ? '' : hash[key]=value
            }
        }
        let tmp=val+value
        if(arr.includes(tmp)){
            let key =getKey(val,tmp)
            hash[key] ? '' : hash[key]=value
        }
    }
    
    for(let key in hash){
        ans.push(key.split(','))
    }
    console.log(ans);
}
function getKey(a,b){
    if(a>b){
        return `${a},${b}`
    }
    return `${b},${a}`
}
getMaxCeillRes([10,5,12,7,12, 5, 8,9])