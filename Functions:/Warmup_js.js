// /* TODO
//
//    Write a function, addTen, that takes in an input. If the input is a number,
//    return the input plus ten and false otherwise.
//
//    Examples:
//
//    addTen(0); // returns 10
//    addTen(10); // returns 20
//    addTen('bob'); // returns false
//
//   */
//
// function addTen(x) {
//
//     if (!isNaN( x )) {
//         return x + 10
//     } else {
//         return false
//     }
//
//
// }
//
//
// console.log(addTen(0))
// console.log(addTen(10))
// console.log(addTen('bob'))

function makeUpperCase(x) {


    if (isNaN(x)) {
        return x.toUpperCase()
    } else {
        return false
    }
}

console.log(makeUpperCase('cat')).log; // returns 'CAT'
console.log(makeUpperCase('DoG')); // returns 'DOG'
console.log(makeUpperCase('CODEUP')); // returns 'CODEUP'
console.log(makeUpperCase(54)); // returns false
console.log(makeUpperCase(true)); // returns false
console.log(makeUpperCase(null)); // returns false
console.log(makeUpperCase('5'))
console.log(makeUpperCase("5dogs"))

