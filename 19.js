// HJ19 简单错误记录
let list={}
while(line=readline()){
    let [path,row]=line.split(' ')
    let arr = path.split('\\')
    let name=arr[arr.length-1].slice(-16)
    if(list[`${name} ${row}`]){
        list[`${name} ${row}`].t+=1
    }else{
        list[`${name} ${row}`]={t:1}
    }
}
let keys=Object.keys(list).slice(-8)
keys.forEach(it=>{
    console.log(`${it} ${list[it].t}`)
})