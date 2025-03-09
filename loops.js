// Write a for loop to print numbers from 10 to 1 in reverse.

for (let i = 10; i>=1; i--) {
    console.log(i);
       
}
// --------------------------------------------------------------------------------------------------------
// array reduce  ek array se koie ek value bana na hai 

let arr = [1,2,3,4,5,6]
 let ans = arr.reduce(function(acc,val)
{
    return acc+val;
    
},0)

// -----------------------------------------------------------------------------------------------------------------------

// Use a while loop to print multiples of 3 from 3 to 30

 let i = 3 ; 
 while (i<=30) {
    console.log(i);
    i+=3;
    
    
 }

// ---------------------------------------------------------------------------------------------------------------------------------------------

//  Write a program to calculate the sum of numbers from 1 to 100 using a loop.

let sum = 0 ; 
 for (let i = 1; i <= 100; i++) {
    sum = sum + i ;
    console.log(sum);
    
 }

// ---------------------------------------------------------------------------------------------------------------------------------


//  Use a for...of loop to iterate over the string "JavaScript"

let str = "Javascript"
 for (const key of str) {
    console.log(key);
    
    
 }
