// 部门聚餐，下大雨，要将所有人从食堂运到办公室。
// 现在由大伞和小伞，小伞一次撑2个人，大伞一次撑3个人
// 在最开始时食堂的人有一把小伞，办公室里有n把小伞，m把大伞。
// 从办公室到食堂的往返时间为2h，去1h，回1h。
// 每个人一次只能带一把伞。
// 求所有人回到办公室的最短时间。
// 输入：
// 一个数字T，T组数据
// 每组为c n m，代表人数，小伞数，大伞数
// 测试用例：
// 2
// 1 1 1
// 3 1 1

function getTimes(c,n,m){
    let res=0,officeP=0,useSmall=1,useBig=0,backOffice=true;
    while(c>officeP){
        // 回办公室
        res+=1
        officeP=(useSmall*2)+(useBig*3)+officeP
        
        if(officeP>=c) break;
        if(m>0){ // 换大伞
            if(m>=officeP){
                n+=useSmall
                useSmall=0
                useBig=officeP
                m-=useBig
            }else if(m<officeP){
                useBig+=m
                m=0
            }
        }else if(n>0){ // 拿小伞
            if(n>=officeP-useBig){
                useSmall=officeP-useBig+useSmall
                n-=useSmall
            }else if(n<officeP-useBig){
                useSmall+=n
                n=0
            }
        }
        // 回去接人
        backOffice=false
        res+=1
        officeP=officeP-useSmall-useBig
        
        
    }
    return res
}

console.log(getTimes(11,1,5));
