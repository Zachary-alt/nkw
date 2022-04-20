let len = 7
let ids = [6,1,5,3,2,7,4]
function getAll(){
    let res=[]
    const dfs=(ins,outs,arr)=>{
        if(outs.length===len){
            res.push(outs.slice())
            return
        }
        if(arr.length){
            let i = arr.shift()
            ins.push(i)
            dfs(ins.slice(),outs.slice(),arr.slice())
            arr.unshift(i)
            ins.pop()
        }
        if(ins.length){
            let o = ins.pop()
            outs.push(o)
            dfs(ins.slice(),outs.slice(),arr.slice())
        }
    }
    dfs([],[],ids)
    res = res.sort((a,b)=>a.join('')*1-b.join('')*1)
    res = res.map(it=>{
        console.log(it.join(' '));
    })
}
getAll()