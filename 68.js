// 成绩排序
let len=readline()*1
let dsc=readline()
let arr=[],index=0
while(line=readline()){
    arr.push({line,index})
    index++
}
arr.sort((a,b)=>{
    let s1=a.line.split(' ')[1]*1
    let s2=b.line.split(' ')[1]*1
    if(s1==s2) return a.index-b.index
    if(dsc==0){
        return s2-s1
    }
    return s1-s2
})
arr.map(it=>{
    console.log(it.line)
})
