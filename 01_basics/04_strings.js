let name= "gautam"
let b=50

// console.log(a+b)

// backticks

console.log(`Hello my name is  ${name.toUpperCase()}  and repo count is ${b}`)

// class object

const s= new String ("Gautam-Ga");

console.log(name.toUpperCase())
console.log(name.charAt(5))  // Give the character at 5th index of string 
console.log(s.indexOf( 't'))   // give the index of t character in the sting 


// const sliced_name =  new String (s.substring(0,6))
// console.log(sliced_name)


// const another_string=  s.slice( )
// console.log(another_string)


// trim only removed the black values line spaces and \n

// const newstring1 =  " hisduhfd "

// console.log(newstring1)
// console.log(newstring1.trim('h'))



const url = new String("https://techgs.com/khdgsvjdf%20kjsnd");


console.log(url.replace('%20', '-')) // replace the word to the new word given 


console.log(url.includes('https')) //giver the string is presented or not 

 console.log(url.split('/'))