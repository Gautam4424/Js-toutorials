//Immediately invoked Function Expression (IIFE)

// to execute function imeediatedly we use this method 
// For example we need to connect to mysql then we need immediate connection then we use this method 

(function one(){ // named iife
    console.log("DB connected")
})(); // for telling the compiler that iife function is ended here we need to add ; here so that another functions can also run

// () where we are running the function this is important so that we don't have to return anything
// {} execution of our function




// IIfe using arrow function 
( (name)=>{ // unnamed iife
    console.log(`Db connected 2 ${name}`);
})("Gautam")