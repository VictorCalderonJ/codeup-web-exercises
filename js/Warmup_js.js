/* TODO

   Write a function, addTen, that takes in an input. If the input is a number,
   return the input plus ten and false otherwise.

   Examples:

   addTen(0); // returns 10
   addTen(10); // returns 20
   addTen('bob'); // returns false

  */

function addTen(x) {

    if (!isNaN( x )) {
        return x + 10
    } else {
        return false
    }


}


console.log(addTen(0))
console.log(addTen(10))
console.log(addTen('bob'))


