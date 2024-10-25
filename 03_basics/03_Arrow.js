const user = {
    username :"Gautam",
    welcome : function () {
        console.log(`Welcome ${this.username}`)
        console.log(this)
    }
}
 

// user.welcome()
// user.username="Sam"
// user.welcome()

// console.log(this)


// function one(){
//     let user="Gautam"
//     console.log(this.user)
// }

// one() // undefined


// const one = function () {
//     let user="Gautam"
//     console.log(this.user)
// }

// one() // undefined


// Arrow function declaration

const one = () => {
    let user="Gautam"
    console.log(this)
}

one() // undefined


// const addtwo = (num1 , num2) =>{
//     return num1+num2
// }



// Implicit return  -> when we do not use retrun keyword in function

const addtwo = (num1 , num2) =>  num1+num2  //One line function can use as like this 


const addtwo1 = (num1 , num2) =>  (num1+num2) // if we use parathesis we can run code without retun statment but if we user curly braces then return satment in mendate 
console.log(addtwo(3,4))
console.log(addtwo1(3,4))