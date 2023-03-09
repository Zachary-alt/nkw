// 自动售货系统
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        // console.log(line);
        let inputs=line.split(';')
        let things={
            'A1':{
                price:2,
                num:0
            },
            'A2':{
                price:3,
                num:0
            },
            'A3':{
                price:4,
                num:0
            },
            'A4':{
                price:5,
                num:0
            },
            'A5':{
                price:8,
                num:0
            },
            'A6':{
                price:6,
                num:0
            },
        }
        let money={
            1:0,
            2:0,
            5:0,
            10:0,
        }
        let yue=0
        for(let input of inputs){
            let ins=input.split(' ')
            if(ins[0]==='r'){
                Object.keys(things).map((item,index)=>{
                    things[item].num=ins[1].split('-')[index]*1
                })
                Object.keys(money).map((item,index)=>{
                    money[item]=ins[2].split('-')[index]*1
                })
                console.log('S001:Initialization is successful')
            }
            if(ins[0]==='p'){
                if(['1','2','5','10'].includes(ins[1])){
                    if(ins[1]*1>2&&ins[1]*1>money[1]+money[2]*2){
                        console.log('E003:Change is not enough, pay fail')
                    }else if(soldOut(things)){
                        console.log('E005:All the goods sold out')
                    }else{
                        money[ins[1]]+=1
                        yue+=ins[1]*1
                        console.log(`S002:Pay success,balance=${yue}`)
                    }
                }else{
                    console.log('E002:Denomination error')
                }
            }
            if(ins[0]==='b'){
                if(things[ins[1]]){
                    if(things[ins[1]].num===0){
                        console.log('E007:The goods sold out')
                    }else if(things[ins[1]].price>yue){
                        console.log('E008:Lack of balance')
                    }else{
                        yue-=things[ins[1]].price
                        console.log(`S003:Buy success,balance=${yue}`)
                    }

                }else{
                    console.log('E006:Goods does not exist')
                }
            }
            if(input==='c'){
                if(yue===0){
                    console.log('E009:Work failure')
                }else{
                    c(yue,money)
                    yue=0
                }
            }
            if(input[0]==='q'){
                if(ins[0]==='q'){
                    if(ins[1]==='0'){
                        Object.keys(things).map(item=>{
                            console.log(`${item} ${things[item].price} ${things[item].num}`)
                        })
                    }else if(ins[1]==='1'){
                        Object.keys(money).map(item=>{
                            console.log(`${item} yuan coin number=${money[item]}`)
                        })
                    }else{
                        console.log('E010:Parameter error')
                    }
                }else{
                    console.log('E010:Parameter error')
                }
            }
        }
    }
}()

function soldOut(things){
    let bool=true
    Object.keys(things).map(item=>{
        if(things[item].num!==0){
            bool=false
        }
    })
    return bool
}
function c(yue,money){
    let s=yue
    let list={
        1:0,
        2:0,
        5:0,
        10:0,
    }
    let keys=Object.keys(money).reverse(),index=0
    while(s>0&&index<keys.length){
        if(s>=keys[index]){
            if(money[keys[index]]){
                s-=keys[index]
                list[keys[index]]=list[keys[index]]+1
                money[keys[index]]=money[keys[index]]-1
            }else{
                index++
            }
            
        }else{
            index++
        }
    }
    Object.keys(list).map(item=>{
        console.log(`${item} yuan coin number=${list[item]}`)
    })
}