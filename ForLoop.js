//  Accept an integer and Print hello world n times.
let n = Number(prompt("enter a number to check natural number"));
if (isNaN(n)) {
  console.log("Inavlid !!");
}
else {
  let i;
  for (i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log(i);
}

// ----------------------------------------------------------------------------------------------

//  Print natural number up to n.
let n = Number(prompt("enter a number"));

for (let i = n; i >=1; i--) {
    console.log(i);
    
    
}

// -----------------------------------------------------------------------------------------------

//  Take a number as input and print its table
5 * 1 = 5
5 * 2 = 10 ... up to 10 terms

let n = Number(prompt("enter a num to print the table "))

for (let i = 0; i <= 10; i++) {
  console.log(`${n} * ${i} = ${n*i}`);
         
}

// -------------------------------------------------------------------------------------------------

// sum upto nth terms  matlb if n= 5   1+2+3+4+5=15
    let n = Number(prompt("enter the num "))
    let sum = 0 ; 
    for (let i = 1; i <= n; i++) {
        sum += i;
        
        
    }
    console.log(sum );

// ----------------------------------------------------------------------------------------------------

//  Factorial of a number
let n = Number(prompt("enter a num"));
let fact = 1; 
for (let i = 1; i <= n; i++) {
    fact = fact * i;
     
    
}
console.log(`factorial of ${n} is ${fact}`);

// ---------------------------------------------------------------------------------------------------------

//Print the sum of all even & odd numbers in a range seperately.
let n = Number(prompt("enter a num to check wheather it is even or odd"))
let evenSum = 0 , oddSum = 0 ;

for (let i = 1; i <=n ; i++) {
    if(i % 2 == 0) evenSum = evenSum + i;
    else oddSum = oddSum + i;
        
}
console.log("evenSum is "+evenSum);
console.log("oddSum is "+oddSum);

//----------------------------------------------------------------------------------------------------------

// Print all the factors of a number.
let n = Number(prompt("enter a num "))

for (let i = 1; i <= n/2 ; i++) {
    if(n % i == 0) console.log(i);
    
}
console.log(n);

// ----------------------------------------------------------------------------------------------------------

//  Check if the number is Prime or not.

let n = Number(prompt("enter a num "))
let isPrime = true;
for (let i = 2; i <= n/2; i++) {
    if(n % i== 0)
        {
            isPrime = false;
            break;
        }   
    
}
if(isPrime) console.log("its a prime number");
else console.log("not a prime number");

//-----------------------------------------------------------------------------------------------------------
//






