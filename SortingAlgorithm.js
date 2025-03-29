Stable sort & unstable sort 

Bubble sort 
let arr = [1,72,96,87,10,55]
let n = arr.length
for (let i = 0; i <=n-1; i++){
    for (let j = 0; j < n-i-1; j++) {
        if(arr[j] > arr[j+1])
        {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
   
}
console.log(arr);

// --------------------------------------------------------------------------------------------------------

 

let arr = [11,9,5,63,88,45,12,3]
for (let i = 0; i < arr.length - 1; i++) {
    let small = i ; 
    for (let j = i+1 ; j < arr.length; j++) {
        if(arr[small] > arr[j])
        {
            small = j ; 
        }
    
        }
        if(i != small)
        {
            let temp = arr[i];
            arr[i] = arr[small];
            arr[small] = temp;
        }
    
} 
console.log(arr);

// -----------------------------------------------------------------------------------------------------------------

// INSERTION SORT 
let arr = [10,9,7,2,1]
for (let i = 1; i < arr.length ; i++) {
    let key = arr[i];
    let j = i-1;
    while (j>=0 && arr[j] > key) {
        arr[j+1] = arr[j];
        j--
    }
    arr[j+1] = key 
}
console.log(arr);
