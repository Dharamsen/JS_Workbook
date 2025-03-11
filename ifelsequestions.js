// Accept two nube & check greatest between them

let a = Number(prompt("enter the first value "));
let b = Number(prompt("enter the second value "))

if(a>b) console.log("a is greater than b"+a);
else console.log("b is greater than a" +b);

// -----------------------------------------------------------------------------------------------------------------------------

// Accept an integer & check  wheater it is an even or odd

let a  = Number(prompt("enter the num to check "))
if(a % 2 ==0) console.log(`it is an even number ${a} `);
else console.log(`it is an odd number ${a} `);

//------------------------------------------------------------------------------------------------------------------------

//Accept name & age from user , check if the user is valif for vote or not 

let a = prompt("enter your name");
let b = Number(prompt("enter your age "))
if(a>=18) console.log(`hey ${a} you age is ${b} and u can vote `);
else console.log(`hey ${a} !!!!! sorry but your age is ${b} and u cannot vote `);

// ---------------------------------------------------------------------------------------

// Accept three numbers & print the greatest of them

let a = Number(prompt("enter first number"));
let b = Number(prompt("enter second number"));
let c = Number(prompt("enter thirs number"));

if(a>b && a>c) console.log(`${a} is the greatest number`);
else if(b>a && b>c) console.log(`${b} is the greated number`);
else console.log(`${c} is the greatest number`);

// -------------------------------------------------------------------------------------------------------------

// Accept a year and check if it a leap year or not (google to find out what's a leap year)
// divisble by 4 is a leap year 4 se check karna hai aur 400 se 

let a = Number(prompt("Enter the numbe to check the leap year"))
let isLeap =false 

if(a % 4 == 0)
{
    if(a % 100 == 0){
        if (a % 400 ==0)  isLeap=true;
        else isLeap=false;         
      }
      else{
        isLeap=true
      }

}
else isLeap=false;
console.log(isLeap ? "It is a Leap year " : "it is not a Leap year");

second way 

if(a % 4 ==0 && a % 100 !=0)
{
    console.log(`${a} is a Leap year`);
}
else if(a % 400 == 0)
{
    console.log(`${a} is a Leap year`);
    
}
else console.log("it is not a Leap Year");

//-------------------------------------------------------------------------------------------------------------------------

//Shop discount - Description on Graphic 
// Amount   discount 
// 0-5000      0%
// 5000-7000   5%
// 7001-9000   10%
// 9000<       20%

// discount formula is discount * amount / 100

let amount = Number(prompt("enter the number"));

if(amount >=0 && amount <=5000)
{
    console.log(amount);    
}
else if(amount > 5000 && amount <=7000)
{
    console.log(`after discount of 5% the amount is ${amount -(5*amount) / 100}`);    
}
else if(amount > 7001 && amount <=9000)
{
    console.log(`after discount of 10% the amount is ${amount - (10*amount)/100}`);
    
}
else if(amount >9000) console.log(`after discount of 20% the amount is ${amount - (20*amount)/100}`);
else console.log("Invalid input ");

second way optimize way
let discount = 0 ;
if(amount >=0 && amount < 5000) discount = 0;
else if(amount >5000 && amount <=7000) discount = 5;
else if(amount >7000 && amount <=9000) discount = 10;
else if(amount > 9000) discount = 20;
else console.log("Inavlid input");

console.log(amount - (discount * amount )/100);
.
// ------------------------------------------------------------------------------------------------------------------------------

// electricity bill calculation
// units    --  price
// upto 100 -- 4.2/unit
// 101-200  -- 6/unit
// 201-400  -- 8/ unit
// more<400 -- 13/unit

// eg: agr 257 ha toh 100*4.2 100*6 aur 57*8 unko add karne ke baad unit aayega 

let unit = Number(prompt("Enter a unit"))
let amount = 0 ; 

//top to bottom 
if(unit > 0 && unit <=100) amount = unit * 4.2 ;
else if(unit > 101 && unit <= 200) amount = (100 * 4.2) + (unit-100)*6; // yeh know hai ke 100 ke upar he aarha hai unit 
else if(unit > 201 && unit <= 400) amount = (100 * 4.2) + (100 * 6) + (unit -200)*8; // ismein bhe 200 ke upar he unit aaraha hai 
else if(unit > 400) amount = (100 * 4.2) + (100 * 6) + (200 * 8) + (unit - 400)*13;
console.log(amount);


//bottom to top
//eg: unit 700 
// more than 700 kitna hai 300 toh usko multipy kar dege 13 se bacha 400 -- toh 200 ke upar ek unit hai aur 400 ke andar 
//  to 200*8 uske baad 200 bacha -- 100 ke upar aur 200 ke andar kitna unit hai 100 unit hai usko muliply 6 se 

// (300 * 13) + (200 * 8) + (100 * 6) + 100*4.2 =3900+1600+600+420 =6520

if( unit > 400)
{
    amount = (unit-400) * 13;
    unit = 400;
}
if( unit > 200 && unit <= 400)
{
    amount = amount + (unit - 200) * 8;
    unit = 200;
}
if( unit > 100 && unit <=200)
{
    amount = amount + (unit - 100) * 6;
    unit = 100;
}
amount = amount + unit * 4.2
console.log(amount);
     
// ------------------------------------------------------------------------------------------------------------------------




