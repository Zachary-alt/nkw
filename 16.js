// 购物单
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let count=0,money=0,num=0,goods={},subgoods={}
    while(line = await readline()){
        let tokens = line.split(' ').map(Number);
        if(num===0){
            money=tokens[0]
            count=tokens[1]
        }else{
            if(tokens[2]==='0'){
                goods[num]=[tokens[0],tokens[1]]
            }else{
                if(subgoods[tokens[2]]) subgoods[tokens[2]].push([tokens[0],tokens[1]])
                else subgoods[tokens[2]]=[[tokens[0],tokens[1]]]
            }
        }
        num++
    }
    getMaxValue(money,count,goods,subgoods)
}()

function getMaxValue(money,n,gs,sgs){
    let len = Object.keys(gs).length
    let dp=[[0]]
    for(let i=0;i<=len;i++){
        dp[i]=[0]
        for(let j=0;j<=money;j++){
            if(i===0 || j===0){ // 初始值
                dp[i][j]=0
            }
        }
    }
    let w=[[]],v=[[]]
    for(let key in gs){
        let w_temp=[],v_temp=[]
        w_temp.push(gs[key][0])
        v_temp.push(gs[key][0]*gs[key][1])
        if(sgs[key]){//存在附件
            w_temp.push(w_temp[0]+sgs[key][0][0]) // 主件+附件1
            v_temp.push(v_temp[0]+sgs[key][0][0]*sgs[key][0][1])
            if(sgs[key].length>1){ // 存在两附件
                w_temp.push(w_temp[0]+sgs[key][1][0]) // 主件+附件2
                v_temp.push(v_temp[0]+sgs[key][1][0]*sgs[key][1][1])
                w_temp.push(w_temp[0]+sgs[key][0][0]+sgs[key][1][0]) // 主件+附件1+附件2
                v_temp.push(v_temp[0]+sgs[key][0][0]*sgs[key][0][1]+sgs[key][1][0]*sgs[key][1][1])
            }
        }
        w.push(w_temp)
        v.push(v_temp)
    }
    for(let i=1;i<=len;i++){
        for(let j=10;j<=money;j+=10){
            for(let k=0;k<w[i].length;k++){
                if(j-w[i][k]>=0){
                    dp[i][j]=Math.max(dp[i-1][j],dp[i-1][j-w[i][k]]+v[i][k])
                }else{
                    dp[i][j]=dp[i-1][j]
                }
            }
        }
    }
    console.log(dp[len][money]);
}

getMaxValue(50,5,[,,,[10,3],[10,2],[10,1]],[,,,,,[[20,3],[20,3]]])