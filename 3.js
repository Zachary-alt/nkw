// 明明生成了NN个1到500之间的随机整数。请你删去其中重复的数字，即相同的数字只保留一个，把其余相同的数去掉，然后再把这些数从小到大排序，按照排好的顺序输出。
let len=readline()
let arr=[]
while(line=readline()){
    arr.push(line)
}
arr = Array.from(new Set(arr))
arr.sort((a,b)=>a-b)
arr.map(it=>{
    console.log(it)
})