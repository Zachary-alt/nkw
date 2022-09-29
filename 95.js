
// 输入：
// 151121.15
// 复制
// 输出：
// 人民币拾伍万壹仟壹佰贰拾壹元壹角伍分

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", function (line) {
    console.log(f(line))
});
function f(line){
    let res='人民币'
    const maps={
        '0':'零',
        '1':'壹',
        '2':'贰',
        '3':'叁',
        '4':'肆',
        '5':'伍',
        '6':'陆',
        '7':'柒',
        '8':'捌',
        '9':'玖'
    }
    const arr=['','拾','佰','仟']
    const d=['','万','亿']
    const arr2=['角','分']
    let money=line.split('.')
    if(money[0]!=='0'){
        let count=money[0].replace(/^[0-9]{1,4}(?=[0-9]{4,}$)/,'$&,')
        count=count.split(',')
        for(let i=0;i<count.length;i++){
            let item=count[i]
            for(let j=0;j<item.length;j++){
                let num=item[j]
                if(maps[num]==='零'){
                    if(res[res.length-1]!='零'){
                        res=res+maps[num]+arr[item.length-j-1]
                    }
                }else{
                    if(maps[num]==='壹'&&arr[item.length-j-1]==='拾'){
                        res=res+arr[item.length-j-1]
                    }else{
                        res=res+maps[num]+arr[item.length-j-1]
                    }
                }
            }
            res+=d[count.length-i-1]
        }
        res+=`元`
    }
    if(money[1]!=='00'){
        for(let j=0;j<money[1].length;j++){
            let num=money[1][j]
            if(j===0&&num==='0'){
                // if(money[0]!=='0') res+='零'
            }else if(j===1&&num==='0'){
                break
            }else{
                res=res+maps[num]+arr2[j]
            }
        }
        
    }else{
        res+='元整'
    }
    return res
}