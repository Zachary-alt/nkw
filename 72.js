// HJ72 百钱买百鸡问题
// 5x+3y+z/3=100
// x+y+z=100

// 7x+4y=100 && z%3===0
// y=25- 7 x/4 （0-3）-》
// x 为4的倍数，x的取值为：0,4,8,12

let xs=[0,4,8,12]
xs.map(x=>{
    let y=25-7*x/4
    let z=100-x-y
    print(x,y,z)
})