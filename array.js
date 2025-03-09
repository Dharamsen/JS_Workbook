// Remove duplicate values from an array.
let arr = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5,5,6,6,6,7,8,7,8,7,9,9,9,9]
 let ans = [...new Set(arr)]
 console.log(ans);
 
 //---------------------------------------------------------------------------------

//  Find the second largest number in an array.
var arr =[10,9,8,7,8,7,99,8]
// uniques values nikallo
// sort aray from descending order
 let ans = [...new Set(arr)]
//  console.log(ans);
let sortedArr = ans.sort(function(a,b)
{
    return b-a;
})
 console.log(sortedArr[1]);

//  -----------------------------------------------------------------------------------------------------------------------------

// . Sort an array in descending order

let arr = [10,8,7,4,5,9,6,3,55,11,48,96,5,47,22,56]
let ans = arr.sort(function(a,b){
    return b-a;
})
console.log(ans);

// --------------------------------------------------------------------------------------------------------
// Reverse an array without using .reverse().

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

let arr2 = [];
for (let i = arr.length-1;i>=0 ;i--) {
    arr2.push(arr[i])
    
}

// -------------------------------------------------------------------------------------------------------


// Find the most frequent element in an array. // sabse zyada baar kaun aaya hai 

let arr = [1,1,2,2,3,3,4,4,4,5,5,6,6,6,6,7,7,7,8,8,8,9,9,9]
 let obj = {}

 let ans = arr.forEach(function(val){
    obj[val] === undefined ? (obj[val]=1) : obj[val]++;
    
 })
 





 
  

 