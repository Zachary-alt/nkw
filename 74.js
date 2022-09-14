// HJ74 参数解析
let line=readline()
let tag=false,vals=[],word=''
for(let i=0;i<line.length;i++){
    if(line[i]==='\"'){
        tag=!tag
    }else if(line[i]===' '&&!tag){
        vals.push(word)
        word=''
    }else{
        word+=line[i]
    }
}
vals.push(word)
console.log(vals.length)
vals.map((val)=>{
    console.log(val)
})