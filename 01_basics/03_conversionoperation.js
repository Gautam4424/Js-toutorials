// let score =null ; 

// // Both are correct 
// console.log(typeof score)
// console.log(typeof(score))

// // Type conversion string to number 
// let valuInNumber = Number (score);
// console.log(typeof(valuInNumber)); // Number
// console.log(valuInNumber) //Nan (not a number)


// "33" => 33
//  "33abc" => Nan  (type of nan is number itself)
//  true => 1
//  false  => 0
//  null => 0
//  undefined => nan



//  checking 1 in true and 0 is false 


// let isLoggedIn = 0;
// let booleanChange = Boolean(isLoggedIn);
// console.log(booleanChange);

// 1 => true  ; 0=>false
//  "" => false 
// "any value" => true


// let  someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber)




// ************************************Operations***************************************
//  let value =3;
//  let negValue= -value
//  console.log(negValue)

//  console.log(2+2); // addition
//  console.log(2-2);  // Subtraction
//  console.log(2*2);  // multiply
//  console.log(2**3); // 2 raise to the power 3 
//  console.log(2%2); // 2%2 gives the reminder
//  console.log(2/2); // gives the quotient 



// ********************* concatination *************************

//  let str1  ="hello";
//  let str2 = " Gautam";

//  let str3 = str1 + str2 ;

//  console.log(str3);


// Operator precedence

// console.log("1" + 2); //12
// console.log (1  + "2"); //12
// console.log("1" + 2 + 2) //  first 1+2 get 12 and type will be string then another 2 get add in it and the type is still string
// console.log(1+2 + "2") // 1+2 = 3 then add into string and converted into string 32





// Prefix and postfix operator  ++i (prefix)  i++  (postfix)
let gameCounter=100;

console.log(gameCounter++); //100 the increase by 1
console.log(gameCounter); // print the increased value


let gameCounter2=100;
console.log(++gameCounter2) // 101 will print as first it'll increment and then it will print 

