// 从单向链表中删除指定值的节点
// 输入描述：
// 输入一行，有以下4个部分：
// 1 输入链表结点个数
// 2 输入头结点的值
// 3 按照格式插入各个结点
// 4 输入要删除的结点的值

// 输出描述：
// 输出一行
// 输出删除结点后的序列，每个数后都要加空格

// 示例1
// 输入：
// 5 2 3 2 4 3 5 2 1 4 3
// 复制
// 输出：
// 2 5 4 1
// 复制
// 说明：
// 形成的链表为2->5->3->4->1
// 删掉节点3，返回的就是2->5->4->1  
let line=readline().split(' ')
let len=line.shift(),
    head=line.shift(),
    tar=line.pop();

let ans=[head],i=0;

while(i<line.length){
    let t =line[i+1],n=line[i];
    let index=ans.indexOf(t)
    ans.splice(index+1,0,n)
    i+=2
}
let tarIndex=ans.indexOf(tar)
ans.splice(tarIndex,1)
console.log(ans.join(' '))