// 5 types of log 
console.log("Hello");
console.error("error");
console.warn("Warning");
console.info("Info");
console.table({name:"john", age:24})    // object pass karna jarurui hai 

// Log the data type of "123", 123, true, and null using typeof
let a = "123";
let b = 123;
let c = true;
let d = null;
let e = []
console.log(typeof a , typeof b , typeof c , typeof d, typeof e);
// javascript ko banate waqt ek mistake huaa thaa null ka type object rakh diya thaa 
// typeof jo hai woh "DATATAG name ke concept par kaam karta hai typeoff will check the type object ka datatag hai 000 aur galti se null ko datatag diya hai 000



// Write a program that swaps the values of two variables.
let num1 = Number(prompt("enter the first value "));
let num2 = Number(prompt("enter the second value  "))
console.log(`before swapping the value of a ${num1} and b is ${num2}`);
// on way using third variable 
// {let temp  = num1;
// num1 = num2;
// num2 = temp ; }

[num1,num2] = [num2 , num1]

console.log("after swapping the number value of a is "+num1+ " and value of b is "+num2 );

// Use console.group() to organize logs into a group.

console.group("TODO for TOday");   // by default yeh pehle se he open rahegaa console mein incase yeh close chaiyae use console.groupCollapsed
console.log("wake up at 4.45");
console.log("Taking Bath");
console.log("go to gym");
console.log("freshn upp...");
console.groupEnd();

//-----------------






