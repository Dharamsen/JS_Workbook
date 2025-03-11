console.log(Math.ceil(10.4));  // ek number increase 11

console.log(Math.floor(10.0)); // lower range mein layega 10

console.log(Math.round(10.6)); //10.5 ke upar liya toh floor ke tara behave karega aur uske neeche floor ke tarah behave karega 

console.log(Math.abs(-10));  //neagtive ko positve 

console.log(Math.trunc(10.8579468545)); // decimal wala part remove kar dega 

console.log(Math.pow(5,2)); //5^2 ans 25 it take 2 parameters

console.log(Math.sqrt(100));  //sqaure root return karega 

console.log(Math.cbrt(125)); //5

console.log(Math.max(10,54,98,55,63)); // maximum value 98

console.log(Math.min(2,0,-3,5,-7)); // minimum value is 10

console.log((Math.random()*1000)); // it will return the random value between 0 to 1

let a = 1254.5896 // point ke bad exact 2 digit rakhna
console.log(a.toFixed(2));   // yeh string aata hai 

// ----------------------------------------------------------------------------------------------------------------------------------------

//  calcuate compund intrest 
cp = p * (1 + r/100) ^ t
 let p = Number(prompt("enter the principal amount"))
 let r = Number(prompt("enter the rate of interst"));
 let t = Number(prompt("enter the time"))
 
  console.log(p*Math.pow(1+r/100,t) -p);  //157.

// -----------------------------------------------------------------------------------------------------------------

// generate OTP 
console.log( Math.floor(Math.random()*9000 + 1000)  );

// -------------------------------------------------------------------------

// calculate area of traingle by heron's formula

let a = Number(prompt("enter the number"))

let b = Number(prompt("enter the second number"))

let c = Number(prompt("enter the third number"))

// perimeter is sum of all side which means s= a+b+c   agar isko divide by half kiya toh semiperimeter (a+b+c)/2s
// semiperimeter s = sqrt of s * (s-a) * (s-b) * (s-c)

if(a+b<=c || a+c<=b  || b+c<=a )
{
    console.log("not possible");
    
}
else{
    let s = (a+b+c)/2;
    console.log( Math.sqrt( s * (s-a) * (s-b) * (s-c))  );
    
}


// ------------------------------------------------------------------------------------------------------------------

//calculate circumference of circle
let r = Number(prompt("enter the num to calculate the circumference of circle"))
console.log(2*Math.PI*r);

// ----------------------------------------------------------------------------------------------------------



    

 






