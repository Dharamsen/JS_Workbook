 array left rotation by k element {k ke value kitne bhe hoo sakta hai }

let arr = [1,2,3,4,5,6]
by 1 side rotate [2,3,4,5,1]
by 2 side [3,4,5,1,2]
 first elemnt lost hoo raha hai usko temp mein save karna 
 main login 
{let copy = arr[0];
for (let i = 0; i < arr.length-1; i++) {
       arr[i] = arr[i+1];
       
}
arr[arr.length-1] = copy;
console.log(arr);}
if k times 
brute force approach
console.log(arr);

k =4;
for (let j = 1; j <= k; j++) {
    let copy = arr[0];
        for (let i = 0; i < arr.length-1; i++) {
                arr[i] = arr[i+1];
        }
        arr[arr.length-1] = copy;

}
console.log(arr);

// best approach *---------------------------------------
let arr = [1,2,3,4,5]
let k = 2; 
let temp = new Array(arr.length)
k = k % arr.length;

for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[(i+k) % arr.length];
 }

console.log(temp);

// ----------------------------------------------------------------------
efficent solution

let prompt = require('prompt-sync')();
let arr = [1,2,3,4,5]
let k = Number(prompt('enter a number '))
k = k % arr.length;

reverse(arr , 0 , k-1)
reverse(arr , k , arr.length-1)
reverse(arr , 0 , arr.length-1)
console.log(arr);


function reverse(arr , i , j)
{
    while (i<j) {
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp ;
        i++;
        j--;
        
    }
}



// ----------------------------------------------------------------------------------

Liner search an array - if element found print the index or  else-1 oherwise not found 
let prompt = require('prompt-sync')();

let target = Number(prompt("Enter a target value "))

let arr = [11,54,12,88,96,35,74]
let index = 0 ; 

for (let i = 0; i <=arr.length ; i++) {
    if(arr[i] == target)
    {
      index = i ;
      break
    }

}
if(index == -1) console.log("element not found ");
else console.log('Element found at '+ index + ' index');

// -----------------------------------------------------------------------------------------------------------------


// BINARY SEARCH 
let arr = [10,20,47,85, 96,35,12,48,55,78]

if(BinarySearch (arr,6) == -1) console.log("not found ");
else console.log('element found in the array  ');



function BinarySearch(arr,target)
{
    let s = 0 , e = arr.length-1;
    while(s<=e)
    {
        let mid = Math.floor((s+e)/2);
        if(arr[mid] == target ) return mid
         else if (arr[mid] > target) e = mid - 1;
         else s = mid + 1 ;      


    }
    return -1 ;
}

