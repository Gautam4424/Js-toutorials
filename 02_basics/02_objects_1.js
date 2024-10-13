// singleton any object created by a=by new custroctor is known as singleton
// for example myobj =new Object()


const mysym = Symbol("key1")

const jsuser={
    name:"Gautam",
    age : 20,
    "Full name" :  "Gautam",
    location : "Jaipur",
    isloggedin :false,
    last_logins : ["Monday" , "tuesday"]
}   // Object creation 


console.log(jsuser.name)  //TO  Access the element of the jsuser object 
console.log(jsuser["name"]) // This is another way and efficient also bcause given below with example 

console.log(jsuser["Full name"]) //  IF the key is in string only this way can work only 

// Use sybol as a key 


const jsuser1={
    name:"Gautam",
    age : 20,
    [mysym] :  "mykey1",
    "Full name" :  "Gautam",
    location : "Jaipur",
    isloggedin :false,
    last_logins : ["Monday" , "tuesday"] , 
    greeting : function (){
        console.log(`Hello mr ${this.name}`)
    }
} 


console.log(typeof(jsuser1[mysym])) // This is the only way to access thesybol from object see object also 


// If you want to freeze of fix any value in objevt you can use object.freeze mehod in js . example 
jsuser1.name="test"
// console.log(jsuser1.name) //this is change value with name it will print test only 
// Object.freeze(jsuser1) //Now it will freeze the name value to test it'll not chnage from now on
jsuser1.name="hsfbjksdm"
// console.log(jsuser1)   //TEST WILL BE INSIDE THE NAME 


console.log(jsuser1.greeting())


