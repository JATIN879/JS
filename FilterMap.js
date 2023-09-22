console.log("welcome in filterMapReduce...")


//[for-each loop does not return any values]
// const coding =["js","java", "cpp", "python"];
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);




// filter() return values according to their datatype:
// const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynums.filter( (num) => {
//     return num > 5;
// })
// console.log(newnums);





const mynums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = mynums.map( (num) { return num +10 })
//Chaining
const newnums  = mynums.map( (num) => num*10).map( (num) => num+1)

console.log(newnums);