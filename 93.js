// HJ93 数组分组
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0,
  len,
  lines;
rl.on("line", function (line) {
  if (count === 0) {
    len = line * 1;
  } else {
    lines = line.split(" ").map(Number);
  }
  count+=1
}).on("close", () => {
//   console.log(lines);
  f(lines);
});
function f(lines) {
  let five = {
      arr: [],
      sum: 0,
    },
    three = {
      arr: [],
      sum: 0,
    },
    leftArr = [];
  for (let item of lines) {
    if (item % 5 === 0) {
      five.arr.push(item);
    } else if (item % 3 === 0) {
      three.arr.push(item);
    } else {
      leftArr.push(item);
    }
  }
  five.sum = getSum(five.arr);
  three.sum = getSum(three.arr);
  
  console.log(isExit(five.sum,three.sum,leftArr,0));
}
function isExit(sum5,sum3,left,index){
    if(index===left.length){
        return sum5===sum3
    }else if(0===left.length){
        return sum5===sum3
    }else if(index<left.length){
        return isExit(sum5+left[index],sum3,left,index+1) || isExit(sum5,sum3+left[index],left,index+1)
    }
}
function getSum(arr) {
    if(arr.length===0) return 0;
  return arr.reduce((a, b) => a + b);
}
