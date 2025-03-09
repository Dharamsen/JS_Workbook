// Declare a const object, modify its properties, and log the updated object.
// ****** const se aap value change nhi kar sakta hai but u can update that value ke anadar ke cheeze koo 

const obj = {
    name:"John Doe",
    email:"JOhnDo@gmail.com",
    phone:+4587965,
    profession:"Developer"
}

// obj.name="Smith john";
// console.log(obj);
// *** if u dont want to update in that case use 
Object.freeze(obj)
obj.name="Smith john";
console.log(obj);
// ---------------------------------------------------------------------------------------------------------------------------------------------------


// Convert "50" (string) into a number using 3 different methods.
let a = Number("50");
let b = parseInt("50");
let c = +"50"

console.log(a, b , c);

// -------------------------------------------------------------------------------------------------------------------------------------------------

// Check if "JavaScript" contains "Script" without using .includes().

let str = "Javascript";

if((str.indexOf("script") === -1)) // === -1 matlb false matlb script nhi milaa so usko true karunga bhai using !==
    {
        console.log(false);
        
    } 
    else{
        console.log(true);
        
    }
// indexof se kuch bhe dhund sakta hai 

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//Create an array of 5 numbers and log the sum using .reduce().

const arr = [1,2,3,4,5,6,7,8,9]

const ans = arr.reduce(function(acc,num)
{
    return acc+num;

},0)

//--------------------------------------------------------------------------------------------------------------------------------


// Explain the difference between undefined, null, and NaN with examples

undefined : "A variable is declared but not assigned a value"
eg:"let x; console.log(x); // undefined",

"null":"Represents an intentional absence of a value"
eg:"let y = null; console.log(y);" // null

NaN (Not a Number) :A result of an invalid math operation


let a; // Undefined
console.log(a); // undefined

let b = null; // Explicitly assigned null
console.log(b); // null

let c = "hello" / 2; // Invalid math operation
console.log(c); // NaN
console.log(typeof NaN); // "number" (weird JS quirk)

