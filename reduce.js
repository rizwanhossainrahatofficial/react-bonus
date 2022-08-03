const nums=[12,45,60,14]
const total =nums.reduce((sum,num)=>sum+num,0)
console.log(total)
const friends=[
    {name:'rahim',money:20},
    {name:'karim',money:15},
    {name:'fahim',money:14},
    {name:'tahim',money:16}
]
const friendMoney=friends.reduce((sum,friend)=>sum+friend.money,0)
console.log(friendMoney)