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
let line1 = readline().split(' ').map(Number);
let arrs = []
while (line = readline()) {
    arrs.push(line.split(' '))
}

function goPath() {
    let ans = []
    const dfs = (arr, x, y) => {
        if (x == line1[0] - 1 && y == line1[1] - 1) {
            arr.push(`(${x},${y})`)
            return ans.push(arr.slice())
        }
        // 包含重复路径
        if (arr.includes(`(${x},${y})`)) return
        if (arrs[x][y] == 0) {
            arr.push(`(${x},${y})`)
            if (x < line1[0] - 1 && arrs[x + 1][y] == 0) dfs(arr.slice(), x + 1, y);
            if (y < line1[1] - 1 && arrs[x][y + 1] == 0) dfs(arr.slice(), x, y + 1);
            if (x > 0 && arrs[x - 1][y] == 0) dfs(arr.slice(), x - 1, y);
            if (y > 0 && arrs[x][y - 1] == 0) dfs(arr.slice(), x, y - 1);

        }
    }
    dfs([], 0, 0)
    //     console.log(ans)
    return ans
}
goPath()
[0].map(item => {
    console.log(item)
})