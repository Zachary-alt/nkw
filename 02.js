// 输入一个只包含小写英文字母和数字的字符串，按照不同字符统计个数由多到少输出统计结果，如果统计的个数相同，则按照ASCII码由小到大排序输出。
// 数据范围：字符串长度满足 1 \le len(str) \le 1000 \1≤len(str)≤1000 
// 输入：
// aaddccdc
// 输出：
// cda
// 说明：
// 样例里，c和d出现3次，a出现2次，但c的ASCII码比d小，所以先输出c，再输出d，最后输出a.
function sortStr(str){
    let map=new Map()
    for(let i=0;i<str.length;i++){
        if(map.has(str[i])){
            map.set(str[i],map.get(str[i])+1)
        }else{
            map.set(str[i],1)
        }
    }
    let keys=Array.from(new Set(map.keys()))
    keys.sort((a,b)=>{
        if(map.get(a)===map.get(b)){
            return a.charCodeAt()-b.charCodeAt()
        }
        return map.get(b)-map.get(a)
    })
    console.log(keys.join(''));
}
sortStr('aaddccdc')