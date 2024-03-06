// let cenatovara = 100; 
// const procent = 10;
// const day = 7;

// for (let i = 0; i < day; i++)  { 
//     cenatovara += cenatovara * procent / 100     
// }

// console.log("cenatovara:", cenatovara.toFixed(2),"рублей");


// function Pob(a, b) {
//     console.log(a + b);
//     Pob(a, b);

// }

// Pob(2, 3);

// let clasCount = 0;

// let boolion = true;

// while(clasCount < 12){
//     if(clasCount == 13){
//         clasCount = clasCount + 1
//         break;
//     }

//     clasCount = clasCount + 1;

//     console.log(clasCount);

//     if (clasCount == 12){
//         boolion = false;
//     }
// }


let num = 123456789;
let reversed

function reverse(num, reversed = 0) {
    if (num === 0) {
        return reversed;
    }
    return reverse(Math.floor(num / 10),
        reversed * 10 + num % 10);
};
console.log(reverse(num, reversed = 0));