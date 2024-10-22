// let a=10 
// const b=20
// var c =30



//cursor inside the block of code is known as scope 
// console.log(a)
// console.log(b)
// console.log(c)

if (true){
    let a=10 
    const b=20
    var c =30

}

// console.log(a) // a is defines inside the if block thats why it is not accessible outside the if block
// console.log(b)  // same above reson for b also
// console.log(c) // it will get accessible 
 

// Nesting scope

function one(){
    const username = "Gautam"

    function two () { 
        const website =  "test.com"
        console.log(username)

        function three() { 
            console.log(`${website} , ${username}`)
        }

        three()
    }

    // console.log(website)

    two()
}

// one()

// if (true){
//     const username ="test "

//     if (username){
//         website = "test.com"
//         console.log(username +  website ) 
//     }
// }



// --------------------Interesting----------


console.log(addone (5))  //this will give the output correctly function will get called 
function addone(num){ // We csn use this type function before declaration
    return num+1
}




const addtwo = function(num){ // this type of functions cannot be called before declaration as it is stored inside the variable and variable cannot get accessed before declaration
    return num + 2
}

addtwo(10)


 