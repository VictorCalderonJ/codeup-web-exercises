// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication
// table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70


// function showMultiplicationTable(y) {
//
//
//     for (let x = 1; x <= 10; ++x){
//         console.log(`(Value of y: ${y} ) time (value is x: ${x}) = ${y * x}`)
//     }
// }
//
// console.log(showMultiplicationTable(7))
//
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
function alphabetPosition() {
    let a = 1;
    let  b = 2;
    let  c = 3;
    let  d = `d`;
    let  e = `e`;
    let  f = `f`;
    let  g = `g`;
    let  h = `h`;
    let  i = `i`;
    let  j = `j`;
    let  k = `k`;
    let  l = `l`;
    let  m = `m`;
    let  n = `n`;
    let  o = `o`;
    let  p = `p`;
    let  q = `q`;
    let  r = `r`;
    let  s = `s`;
    let  t = `t`;
    let  u= `u`;
    let v = `v`
    let  w = `w`;
    let  x = `x`;
    let  y = `y`;
    let  z = `z`;
return a, b, c

}





// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
// and output to the console whether each number is odd or even. For example:
//
//
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...
// function generateRandom(min = 20, max = 200) {
//
//     // find diff
//     let difference = max - min;
//
//     // generate random number
//     let rand = Math.random();
//
//     // multiply with difference
//     rand = Math.floor( rand * difference);
//
//     // add with min value
//     rand = rand + min;
//
//     return rand;
// }
//
// function EvenOrOdd(x) {
//
//     if (x % 2 === 0) {
//         return `is even`
//     } else {
//         return `is odd`
//     }
// }
//
//
//
// for (let x = 1; x <= 10; x++) {
//     console.log()
// }


// function getRandomIntInclusive(min = 20, max = 200) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
// }
//
// function EvenOrOdd() {
//
//     if (getRandomIntInclusive() % 2 === 0) {
//         return `is even`
//     } else {
//         return `is odd`
//     }
// }
//
//
// console.log(getRandomIntInclusive(), EvenOrOdd(getRandomIntInclusive()))



// Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999



// Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5