// 查找两个字符串a,b中的最长公共子串
let line1=readline()
let line2=readline()
let start=0,len=1,res=''
let str1,str2;
if(line1.length>line2.length){
    str1=line2
    str2=line1
}else{
    str1=line1
    str2=line2
}
while(start<str1.length){
    let s=str1.substr(start,len)
    if(str2.includes(s)){
        if(res.length<len){
            res=s
        }
        if(start+len<str1.length){
            len++
        }else{
            start++
            len=1
        } 
    }else{
        start++
        len=1
    }
}
console.log(res)