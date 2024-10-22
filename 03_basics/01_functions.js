// Function is a block of code which we can run again and again by calling that block in our code basically
//  it is used to shorten our code and make it readable .


// Function initialization

function say_my_name(){
    console.log("Gautam")
}

// Calling the function
say_my_name //it is a reference of the function which means it just point out to the memory wheer the function is stored but not call that memory
say_my_name() // it will refer and also call the function 


// Taking Parameters in fuunction

function addTwoNumber(number1 , number2){ // this function is taking arguments known as parameter
    return number1+number2;
}

a=addTwoNumber(3,4) //we are passing in it called arguments
 //we have to store the output  given by fcntion as it is returning some value by return keyword
console.log(a);


function loginUserMessage(username = "Test"){ // adding default value so that is nothinf is passed then default value is being stored insie that parameter
    if (!username){ // this is good practice for handeling the empty or undefined condition
        return "Please enter username"
       
    }
    return `${username} just logged in`
}

console.log(loginUserMessage(""))


// if the parameter number is not defined 
function calculate_cart_price(num1, ...num2){ // this is a rest operator and spread operator basically the implementation define weather it is reast or spread
    return `${num1} , ${num2}`; 
}

// console.log(calculate_cart_price(30,300,400,400))


// oBJECT INSIDE FUNCTION

const anyobj={
    username : "book",
    price :199
}

function objtest(anyobj){
    console.log(`username us ${anyobj.username} price is ${anyobj.price}`)
}

objtest(anyobj)
objtest({
    username : "test",
    price :100
})