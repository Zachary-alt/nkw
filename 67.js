// 描述
// 给出4个1-10的数字，通过加减乘除运算，得到数字为24就算胜利,除法指实数除法运算,运算符仅允许出现在两个数字之间,本题对数字选取顺序无要求，但每个数字仅允许使用一次，且需考虑括号运算
// 此题允许数字重复，如3 3 4 4为合法输入，此输入一共有两个3，但是每个数字只允许使用一次，则运算过程中两个3都被选取并进行对应的计算操作。
// 输入描述：
// 读入4个[1,10]的整数，数字允许重复，测试用例保证无异常数字。

// 输出描述：
// 对于每组案例，输出一行表示能否得到24点，能输出true，不能输出false

// 示例1
// 输入：
// 7 2 1 10
// 输出：
// true
function game24(arr){
    let res=false
    function dfs(step,pre,arr){
        if(res) return
        if(step===3&&pre===24){
            res=true
            return
        }else{
            step++
            for (let index in arr) {
                let newArr = [...arr]
                const num = newArr.splice(index,1)[0];
                dfs(step,pre+num,newArr)
                dfs(step,pre-num,newArr)
                dfs(step,pre*num,newArr)
                dfs(step,pre/num,newArr)
            }
        }
    }
    dfs(-1,0,arr)
    return res
}
console.log(game24([2,9,9,5]));