// sum of digit if 182 // 1+8+2 = 11  //2+8+1=11
let n= Number(prompt("enter a number"));

let sum = 0 ;
while(n>0)
{
    let rem = n % 10;  // 182%10 //18 ek digit hath jayega hamesha yaad rakhnaa 
    sum = sum + rem ;
    n = Math.floor(n/10) // n/10 means last digit hath jayega 182/10 hai toh 18.2 ayega lekin math.floor hai toh 18 aayega

}
console.log(sum);

//--------------------------------------------------------------------------------------------------------------------------

// .reverse of number
// 182 - 281 //782-287
let n= Number(prompt("enter a number"));
let rev = 0;
while (n>0) {
    let rem = n % 10;
   rev = (rev * 10) + rem ; 
   n = Math.floor(n/10)
  
    
}
console.log(rev);

// ---------------------------------------------------------------------------------------------------------------------------------

// Automorphic number
An automorphic number is a natural number where its square ends with the same digits as the number itself. For example, 5 squared is 25, and 6 squared is 36
let n = Number(prompt("enter a num"));
let copy = n;
let sq = n * n ;

let count = 0 ; 
while (n>0) {
    count++;
    n = Math.floor(n/10);

}
if(sq % Math.pow(10,count) == copy) console.log("Automorphic NUmber");
else console.log("no !!!Autophirc number");












