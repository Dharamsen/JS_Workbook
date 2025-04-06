// let h = document.querySelector('h1');
// // console.log(h);
// h.innerHTML = " no hello start working";
// h.style.backgroundColor="green"
// h.addEventListener('click',()=>{
//     console.log('clicked')

// })

// -----------------------------------------------------------------
// let box =  document.getElementById('box');
// box.innerHTML = "Changed";

// ------------------------------------------------------------------

// function changeBox()
// {
//     console.log('changed');
//     box.innerHTML="using function"
//    box.style.backgroundColor="green";
    
// }


// // let btn = document.querySelector('button')
// // btn.addEventListener('click',()=>{
// //     box.style.backgroundColor='yellow'
// //     box.style.color='black'

// // })

// let btn = document.querySelector('button');
// btn.addEventListener('click',changeBox)
// -----------------------------------------------------------------------------------------------------------

let button = document.getElementById('btn');
let h = document.querySelector('h3')

let check = 0;
button.addEventListener('click',()=>{
 if(check == 0)
 {
    h.innerHTML = "FREINDS";
    h.style.color='green'
    btn.innerHTML = "Remove Freinds  "
    check=1;
 }
 else{
    h.innerHTML = 'Strangers'
    h.style.color = 'red';
    btn.innerHTML = "ADD FREIND"
    check =0;
 }
   
})