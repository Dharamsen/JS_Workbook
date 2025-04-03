MultiDimensional Array [ [1,2,3] , [4,5,6,7] ,[8,9,10]  ],

traversing multidimensional array 
let arr = [ [1,2,3] , [4,5,6,8] , [7,10,8,9]  ]
for (let i = 0; i < arr.length; i++) {  // yeh row k liye chalgea
   for (let j = 0; j < arr[i].length  ; j++) { // yeh coloumn ke liye chalega 
      process.stdout.write(` ${arr[i] [j] }`)    //process.stdout.write always accept string 
   }
   console.log();
   
}
// ---------------------------------------------------------------------------------------------------------

taking value from users
let prompt = require('prompt-sync')();
let outer = Number(prompt("Enter Size of array"));
let arr = new Array(outer);//3  
for (let i = 0; i < arr.length; i++) {
    let inner = Number(prompt("enter innner number array size"));
    arr[i] = new Array(inner);

}
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i] [j] = Number(prompt("Enter a Element"))
        
    }
    
}
console.log(arr);

// -------------------------------------------------------------------------------------------------------------------

Daigonal Sum 

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let leftsum = 0, Rightsum = 0;
for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr[i].length; j++) {
   if( i==j  ) leftsum += arr[i][j]
   if(i+j == arr.length-1) Rightsum += arr[i][j]
    
   }
}
console.log("leftSum "+leftsum);
console.log('rightSum '+Rightsum);

// -------------------------------------------------------------------------------------------------------------

jagged array 

let prompt = require('prompt-sync')();
let arr = new Array(4)
for (let i = 0; i < arr.length; i++) {
    let size = Number(prompt('Enter inner Array size'));
    arr[i] = new Array(size);
  
}
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
       arr[i][j] = Number(prompt('Enter array element: '))
        
    }
}
console.log(arr);

// -------------------------------------------------------------------------------------------------------------------------

// ek line mein 2d array creation

let arr = Array.from({length:4},()=>Array(4).fill(0))
console.log(arr);



