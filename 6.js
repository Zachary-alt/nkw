// 功能:输入一个正整数，按照从小到大的顺序输出它的所有质因子（重复的也要列举）（如180的质因子为2 2 3 3 5 ）
function getSnum(num){
    let ans=[],i=2,temp=num
    while(i<=temp&&i*i<=num){
        while(num%i===0){
            ans.push(i)
            num/=i
        }
        i++
    }
    if(num!==1) ans.push(num)
    return ans.join(' ')
}