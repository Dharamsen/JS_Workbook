// Create a function that takes a callback and executes it after every `n` seconds indefinitely.
// function abc(fn, time)
// {
//     setInterval(fn,time)

// }

// abc(function()
// {
//     console.log("hello");

// },2000)

//--------------------------------------------------------------------------------------------

// Implement a function that returns a function with a preset greeting (Closure).

// function greet(value)
// {
//     return function(name)
//     {
//         console.log(`${value} ${name}`);

//     }
// }

// let ans = greet("Hellooo")
// ans("john")
// ans("virat")

// let spanish = greet("Holaa!!")
// spanish("Pablooo")

// -----------------------------------------------------------------------------------------------------------------------------------

// Implement a function that takes a callback and only executes it once (HOF + Closure).

//  function caller(fn)
//  {
//     let executed = false;
//     return function()
//     {
//         if(!executed)
//         {
//             executed = true;
//             fn();

//         }

//     }

//  }

// let ans = caller(function()
// {
//     console.log("callback should only called once ");

// })
// ans();
// ans();
// ans();

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Implement a function that throttles another function (HOF + Closures).

function throt(fn, delay) {
  let lastcall = 0;
  return function () {
    let current = Date.now();
    if (current - lastcall >= delay) {
      lastcall = current;
      fn();
    }
  };
}
let ans = throt(function () {
  console.log("next function will run after 3 seconds");
}, 3000);
