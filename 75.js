// 公共子串计算
let line1=readline()
let line2=readline()
let str1,str2
if(line1.length<line2.length){
    str1=line1
    str2=line2
}else{
    str1=line2
    str2=line1
}
let a=0,b=1
let len=0
while(a<=str1.length&&b<=str1.length){
    if(str2.includes(str1.slice(a,b))){
        b++
        len=Math.max(len,b-a-1)
    }else{
        a++
        b=a+1
    }
}
print(len)