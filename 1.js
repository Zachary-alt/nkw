

function getRealCount(num){
    let count=0
    for(let i=0;i<num;i++){
        let len = `${i}`.length
        let tag = '4'.padEnd(i,'0') *1
        let n = '10'.padEnd(len-1,'0') *1
        if(i===tag){
            count+= n
            i+=n
        }else 
        if(`${i}`.includes('4')){
            count++
        }
    }
    return num-count
}

console.log(getRealCount(5333)); //1731