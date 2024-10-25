// if statement 



// const isUserLoggedIn=true
// if (condition) {//open block for the if condition


// }

// < , > , <= ,  >= , == ,!= ,=== (it checks the type also)


const score=100;
if (score>=100){
    const powerr="fly";
    console.log(`user power : ${powerr}`) //it will get access bcs it occur inside the scope of if block
}

// console.log(`user power : ${powerr}`) // this will give error bcs the powerr occur inside the scope of if statement 


// one line statement 

const balance = 750
// if (balance>500)  console.log("test"), console.log("yes");


// more than two statements

if (balance<500){
    console.log("less than 500")
}

else if (balance<750){
    console.log("less than 750")
}

else if (balance<900){
    console.log("less that 900")
}

else{
    console.log("less that 1200")
}




const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false

if (userLoggedIn &&  debitCard){ // both statement should be true otherwise it'll not run
    console.log("Allow to buy courses")
}

if (userLoggedIn || loggedInFromGoogle ){ // from all condition one condition should be true to run the program
    console.log("User logged in")
}

