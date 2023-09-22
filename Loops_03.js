const myObj ={
    js : 'JavaScript',
    cpp :'C++',
    rb : 'Ruby',
    swift : 'swift by app'
}
// [for-of] loop objects pr kaam nahi karta hai




//[for-in] Loop objects par kaam karta hai:
// for (const key in myObj) {
//     console.log(`${key} is shortcut for ${myObj[key]}`)
//     }


//[for-in] loops on array
// const programming = ["js", "rb", "py", "java", "C++"];
// for (const i in programming) {
//     console.log(i)
        
//     }






// [for-each] call-back function loop
const coding =["js","java", "cpp", "python"];
coding.forEach( function (item){
    console.log(item)
        
})

        //OR

coding.forEach( (i,index,arr) => {
    console.log(i,index,arr)
})



// it is generally used for fetching the values from the databases
const mycoding =[
    {
        languagename :  "javaScript",
        languageFilename : "js"
    },
    {
        languagename :  "Java",
        languageFilename : "java"
    },
    {
        languagename :  "python",
        languageFilename : "py"
    }
]

mycoding.forEach((item) => {

    console.log(item.languagename);
    console.log(item.languageFilename)
})





