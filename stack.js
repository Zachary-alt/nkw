// 输入 records= abc(d)<2>e
// 输出 abcdde
// 输入 records= a(b(c)<3>d)<2>
// 输出 abcccdbcccd

function unzipString(records){
    let exps=[], // 尖括号栈
    cludes=[], // 括号栈
    strs=[], // 字符栈
    caculate=[], // 倍数
    ans=[]
    let maps=['(','<',')','>']
    for(let i=0;i<records.length;i++){
        let code=records[i]
        // 处理符号入栈
        if(code==='('){
            cludes.push(code)
        }else if(code==='<'){
            exps.push(code)
        }else if(!cludes.length&&!exps.length){// 处理字符入栈
            ans.push(code)
        }else{
            if(cludes[cludes.length-1]==='('&&/[a-z]/.test(code)){
                if(/[a-z]/.test(records[i-1])){
                    let s = strs.pop()+code
                    strs.push(s)
                }else{
                    strs.push(code)
                }
            }else if(code===')'){
                cludes.pop()
            }else if(exps[exps.length-1]==='<'&&/[0-9]/.test(code)){
                if(/[0-9]/.test(records[i-1])){
                    let s = caculate.pop()+code
                    caculate.push(s)
                }else{
                    caculate.push(code)
                }
            }else if(code==='>'){
                exps.pop()
                if(cludes.length){
                    let t= strs.pop().repeat(caculate.pop()*1)
                    strs.push(t)
                }else{
                    let t= strs.join('').repeat(caculate.pop()*1)
                    ans.push(t)
                    strs=[]
                }
            }
        }
    }
    // console.log(strs,caculate,cludes);
    return ans.join('')
}
console.log(unzipString('a(b(ces)<3>d)<2>'));