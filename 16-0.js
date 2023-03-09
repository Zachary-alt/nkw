// 0-1背包问题
// 问题描述：有一个背包可以装物品的总重量为W，现有N个物品，每个物品中w[i]，价值v[i]，用背包装物品，能装的最大价值是多少？
// 状态转移方程：
// dp[i][j]=Math.max(dp[i-1][j],dp[i-1][j-ws[i]]+vs[i])   表示前i个物品，背包重量为j的情况下能装的最大价值。
// dp[i-1][j]表示当前物品不放入背包，dp[i-1][j-w[i]]+v[i]表示当前物品放入背包，即当前第i个物品要么放入背包，要么不放入背包。
function getMaxValue(w,n,ws,vs){
    let dp=[]
    for(let i=0;i<=n;i++){
        dp[i]=[]
        for(let j=0;j<=w;j++){
            if(i===0 || j===0){ // 初始值
                dp[i][j]=0
            }else if(j-ws[i]>=0){
                dp[i][j]=Math.max(dp[i-1][j],dp[i-1][j-ws[i]]+vs[i])
            }else{
                dp[i][j]=dp[i-1][j]
            }
            // console.log(i,j,dp[i][j]);
        }
    }
    console.log(dp[n][w]);
}

getMaxValue(5,3,[1,2,3],[1,2,3])