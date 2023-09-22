 const mynums =[1,2,3];
// const mytotal = mynums.reduce (function (acc,currval) {
//    console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval;

// },0)






// const mytotal = mynums.reduce( (acc,curr) => acc+curr,0)
// console.log(mytotal)


const shoppingCart =[
{
    itemName : "js course",
    price : 1299
},
{
    itemName : "py course",
    price : 1998
},
{
    itemName : "app Dev course",
    price : 2499
} ,
{
    itemName : "Data science course",
    price : 3299
}
]

const totalprice = shoppingCart.reduce( (acc,item) => acc + item.price, 0)

console.log(totalprice)