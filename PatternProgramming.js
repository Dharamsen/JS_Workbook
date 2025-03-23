
// // process.stdout.write is a function from nodes
// * * * * * 
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write("* ")               
        
//     }
//     console.log();
    
    
// }

// -------------------------------------------------------------------------------------------------------------------------------------

// installing prompt-sync to get value from users
// const prompt = require('prompt-sync')()
// let n = prompt("enter the num");
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//        process.stdout.write("* ")
        
//     }
//     console.log();
    
// }

// ------------------------------------------------------------------------------------------------------------------------------------

// right angle traingle 

// const prompt = require('prompt-sync')();
// let n = prompt("enter a number ");
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
        
//     }
//     console.log();
    
    
// }

// -----------------------------------------------------------------------------------------------------------------------------------

// printing the same but in this case 
// A
// A B
// A B C 
// A B C D

// const prompt = require('prompt-sync')();
// let n = prompt("enter a number ");
// for (let i = 1; i <= n; i++) {
//    for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(64+j)+ (" "));
    
//    }
//   console.log("");
      
// }

// ----------------------------------------------------------------------------------------------------------------------------------------

// printing inverted traingle 

// const prompt = require('prompt-sync')();
// let n = prompt("enter the num ")
// for (let i = n; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ")
    
//   }
//   console.log("");
  
    
// }

// --------------------------------------------------------------------------------------------------------------------------------------------

//      *
//     **
//    ***
//  *****

// const prompt = require('prompt-sync')();
// const n = prompt("enter a number");
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n- i ; j++) {       
//         process.stdout.write("-");
               
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ");

//     }
//     console.log();
    
         
// }

// ---------------------------------------------------------------------------------------------------------------------------

// creating X pattern 

// const prompt = require('prompt-sync')();
// const n = Number( prompt("enter a number"));
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <=n; j++) {
//        if (i==j || i+j == n+1)
//         {
//             process.stdout.write("* ") 
//         } 
//         else process.stdout.write("  ")            
       
//     }
//     console.log();
    
    
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------

// creating a V pattern 

const prompt = require('prompt-sync')();
const n = Number(prompt("enter the num"));
for (let i = 1; i <= n ; i++) {
    for (let j = 1; j <= (n*2)-1; j++) {
        if(i==j || i+j == n*2) process.stdout.write("* ")
        else process.stdout.write(" ")    
        
    }
    console.log();
    
      
}






