class Stack {
    constructor(inn, out) {
        // console.log(inn, out);
    this.in =inn|| []
    this.out = out || []
}
push(v){
    this.in.push(v)
    // console.log(1,this.in,v);
}
pop(){
    this.out.push(this.in.pop())
    // console.log(2,this.out);
}
}
// function getStack(num) {
//     let ans = []
//     const dfs = (stack, index) => {
//         // console.log(index);
//         console.log(111,stack.in,stack.out,index);
//         if (stack.out.length === num) return ans.push(stack.out.slice());
//         if(num>=index+1) {
//             stack.push(index + 1) // [1],[]
//             // console.log(222,stack.in,stack.out,index + 1);
//             dfs(new Stack(stack.in.slice(),stack.out.slice()), index + 1)
//         }
//         if(stack.in.length){
//             // console.log(555,stack.in);
//             stack.pop()// [],[1]
//             // console.log(333,stack.in,stack.out,index + 1);
//             dfs(new Stack(stack.in.slice(),stack.out.slice()), index + 1)
//         }
//     }
//     dfs(new Stack([], []), 0)
//     return ans
// }
function getStack(num) {
    let ans = []
    const dfs = (i,o,inStack,outStack) => {
        if(outStack.length===num) return ans.push(outStack.slice())
        if(i<num){ // 可以进站
            inStack.push(i+1)
            dfs(i+1,o,inStack.slice(),outStack.slice())
            inStack.pop()
        }
        if(inStack.length){ // 可以出战
            let cur = inStack.pop()
            outStack.push(cur)
            dfs(i,o+1,inStack.slice(),outStack.slice())
        }
    }
    dfs(0,0,[],[])
    return ans
}
console.log(23333,getStack(3));