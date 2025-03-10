// Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).
 function abc (fn)
 {
    setTimeout(fn , 3000)

 }

 abc(function()
{
    console.log("calling after 3 seconds");

})

// ------------------------------------------------------------------------------------------------------------------------

// Implement your own version of `.map()` as a higher-order function.

let arr = [1,2,3,4,5,6]
let ans =   arr.map((item)=>{
    return item*2;
  })

let arr = [1,2,3,4,5]
function mapkicopy(arr, fn)
{
    let newarr = [];  // .map new array mein push karta hai
    for (let i = 0; i < arr.length; i++) {
        newarr.push(fn(arr[i]));

    }
    return newarr;

}

let ans = mapkicopy(arr , function(val)
{
    return val*2;
})

// -------------------------------------------------------------------------------------------------------------------------------

// Write a function that uses closures to create a counter.

  function abc()
  {
    let count = 0;
    return function()
    {
       count++;
       console.log(count);

    }
  }
let counter =  abc();
counter();
counter();
counter();

//-----------------------------------------------------------------------------------------------------------------------------------

//Implement a function that limits how many times another function can be called (Closure + HOF)

  function fnlimiter(fn , limit)
  {
    let total = 0;    
    return function()
    { 
        if(total<limit)
        {
            total++;
            fn();
        }
        else{
            console.error("limit reached")
        }

    }

  }

 let ans =  fnlimiter(function()
{
    console.log("called ");
    
},3)
ans()
ans()
ans()
ans()
