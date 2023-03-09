// 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
// 假设你总是可以到达数组的最后一个位置。

// 例如：
// 输入：nums = [2,3,1,1,4]
// 输出：2
// 解释：跳到最后一个位置的最小跳跃是2。
// 从下标0跳到下标为1的位置，跳1步，然后跳3步到数组最后一个位置。

// 输入：nums = [2,3,1,1,4]
// 输出：2

function jump(arr){
    let res=arr.length-1
    const ans=[]
    const dfs=(index,step,arr)=>{
        // console.log(index,step);
        if(index+arr[index]>=arr.length-1){
            res=Math.min(res,step+1)
            ans.push(step+1)
            return 
        }
        for(let i=1;i<arr[index];i++){
            dfs(index+i,step+i,arr)
        }
    }
    dfs(0,0,arr)
    console.log(res);
}

jump([2,3,1,1,4,5,6,1,5])