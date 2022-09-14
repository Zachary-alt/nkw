// HJ71 字符串通配符

let exp=readline().toLowerCase()
let str=readline().toLowerCase()
exp=exp.replace(/[*]/g,'[0-9a-z]*').replace(/[?]/g,'[0-9a-z]')
exp= '^'+exp+'$'
let reg=new RegExp(exp)
// print(reg)

print(reg.test(str))