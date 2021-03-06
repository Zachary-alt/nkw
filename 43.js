// 定义一个二维数组 N*M ，如 5 × 5 数组下所示：


// int maze[5][5] = {
// 0, 1, 0, 0, 0,
// 0, 1, 1, 1, 0,
// 0, 0, 0, 0, 0,
// 0, 1, 1, 1, 0,
// 0, 0, 0, 1, 0,
// };


// 它表示一个迷宫，其中的1表示墙壁，0表示可以走的路，只能横着走或竖着走，不能斜着走，要求编程序找出从左上角到右下角的路线。入口点为[0,0],既第一格是可以走的路。


// 数据范围： 2 \le n,m \le 10 \2≤n,m≤10  ， 输入的内容只包含 0 \le val \le 1 \0≤val≤1 
// 输入描述：
// 输入两个整数，分别表示二维数组的行数，列数。再输入相应的数组，其中的1表示墙壁，0表示可以走的路。数据保证有唯一解,不考虑有多解的情况，即迷宫只有一条通道。
let x = 0, y = 0
function getStep(maps) {
    for (let i = x; i < maps.length; i++) {
        let row = maps[i]
        x = i
        for (let j = y; j < row.length; j++) {
            if (row[j] == 0) {
                let canNext = false
                
                if(canNext){
                    console.log(`(${i},${j})`);
                    y = j
                }else{
                    j--
                }
            } else {
                if (maps[x + 1][y] != 0) {
                    i -= 2
                }
                break
            }
        }
    }
}
function checkNext(maps,i,j){
    let canNext = false
    if(i==0) {
        canNext = maps[i + 1][j] != 1 || maps[i][j+1] != 1
    }else{
        canNext = maps[i - 1][j] != 1 || maps[i + 1][j] != 1 || maps[i][j+1] != 1
    }
    return canNext
}

console.log(getStep([
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
]));