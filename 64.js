// MP3光标位置
let len=readline()*1
let line=readline()
let acts={
    'U':-1,
    'D':1
}
let cur=1,list=[1,2,3,4]
for(let i=0;i<line.length;i++){
    let act=line[i]
    cur+=acts[act]
    if(cur===0){
        cur=len
        list=[len-3,len-2,len-1,len]
    }else if(cur===len+1){
        cur=1
        list=[1,2,3,4]
    }else if(cur>list[3]){
        list=list.map(item=>item+=1)
    }else if(cur<list[0]){
        list=list.map(item=>item-=1)
    }
}
if(len<=4){
   console.log([1,2,3,4].slice(0,len).join(' ')) 
}else{
    console.log(list.join(' ')) 
}
console.log(cur)