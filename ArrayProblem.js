strong number problem if factorial additon is same as that number it is strong number 1 2 145 => 1! + 4! + 5! = 1+ 24+120 = 145
let prompt = require("prompt-sync")();
let n = Number(prompt("enter a num"));
let copy = n ;
let ans = 0;

while (n > 0) {
     let rem = n % 10;
     let fact = 1 ; 
     for (let i = 1; i <= rem; i++) {
       fact = fact * i
        
     }
     ans = ans + fact;
     n = Math.floor(n/10)    
    
}
if(copy == ans ) console.log("Strong number");
else console.log("no strong number ");

----------------------------------------------------------------------------------------------------------------------------------------

let arr = [10,20,30,40];
 arr.push(50); //insert at last 
 arr.pop() // delete at last 
 arr.unshift(val) // insert at first 
 arr.shift() // delete at first 

let a = arr.slice(0,2);
console.log(a);

-----------------------------------------------------------------------------------------------------------------------------------------------
 Fixed and dynamic size array
 let arr = new Array(5);
 arr[0] = 10;
 arr[1] = 10;
 arr[2] = 20;
 arr[3 ] = 30;
 arr[4] = 40;
 console.log(arr);

--------------------------------------------------------------------------------------------------------------------
 taking size from user and data 
Accept value from user and assign in the array  & Sum of array’s element
let prompt = require('prompt-sync')();
let n = Number(prompt("enter a number"))
 let arr = new Array(n);
 let sum = 0;
 for (let i = 0; i <  arr.length; i++) {
    arr[i] = Number(prompt("enter the element"))  
    sum = sum + arr[i]
    
 }
 console.log(`sum is ${sum}`);

---------------------------------------------------------------------------------------------------------------------

 Max element from array

let arr = [10 , 20 , 30 , 400 , 50 , 60 , 70 , 80]
let max = arr[0] // let assume ke 0th index par max\
for (let i = 1; i < arr.length; i++) {
    if(arr[i] > max)
    {
        max = arr[i] 
    }
    
}

console.log(`max element is ${max}`);

------------------------------------------------------------------------------------------------------------------------------

 second max element from the array 
let arr = [10,120,30,40,120,50,80]
let max = Math.max(arr[0] , arr[1]);
let secondmax = Math.min(arr[0] , arr[1])

for (let i =  2; i < arr.length; i++) {
    if(arr[i]>max)
        {
            secondmax = max ;
            max = arr[i]
        }  
    else if(arr[i]< max && arr[i] != max )
    {
        secondmax = arr[i]
    }

}
console.log(`second max is ${secondmax}`);

// -------------------------------------------------------------------------------------------------------------------------------

Reverse the array 2 types

let arr = [10,20,30,40,50,60]
let temp = new Array(arr.length);
let i = 0 ;
for (let j = arr.length-1 ; j >= 0; j--) {
    temp[i] = arr[j]
    i++;
    
}
console.log(temp);


without creating extra array  ; it is also called 2 pointer algorithm

let arr = [1,2,3,4,5,6]
let i = 0 ; 
let j = arr.length-1;

while (i<j) {
    let temp = arr[i] ;
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
    
}
console.log(arr);




----------------------------------------------------------------------------------------------------------------------

All zeroes to left and all ones to right
let arr = [ 1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1]
let i = 0 ; 
let j = 0; 

while (i<arr.length) {
    if(arr[i]==1)
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp ;
        j++

    }
    i++;
    
}
console.log(arr);

------------------------------------------------------------------------------------------------------------------------------

Array left Rotation by 1   eg: [1,2,3,4,5]  roate by 1 [2,3,4,5,1]

let arr = [10,20,40,60,80]
let temp = arr[0];
for (let i = 0; i < arr.length-1; i++) {
    arr[i] = arr[i+1];
    
}
arr[arr.length - 1] = temp;
console.log(arr);

----------------------------------------------------------------------------------------------------------------------------------

array right rotation by right 1

let arr = [1,2,3,4,5]
let temp = arr[arr.length-1]
for (let i = arr.length- 1; i > 0; i--) {
    arr[i] = arr[i-1];
    
}
arr[0] = temp;
console.log(arr);








 