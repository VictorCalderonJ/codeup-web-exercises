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

// function makeUpperCase(x) {
//
//
//     if (isNaN(x)) {
//         return x.toUpperCase()
//     } else {
//         return false
//     }
// }
//
// console.log(makeUpperCase('cat')).log; // returns 'CAT'
// console.log(makeUpperCase('DoG')); // returns 'DOG'
// console.log(makeUpperCase('CODEUP')); // returns 'CODEUP'
// console.log(makeUpperCase(54)); // returns false
// console.log(makeUpperCase(true)); // returns false
// console.log(makeUpperCase(null)); // returns false
// console.log(makeUpperCase('5'))
// console.log(makeUpperCase("5dogs"))

// let x = 1
// while (x <= 10) {
//     console.log("Victor")
//     x++
// }

/*
        TODO - write a do-while loop that will alert the current date and time and
          continue checking with the user if they want to see the latest time.

          Current date can be created with new Date().toLocaleString()
     */



// do {
//     alert(`The current date and local time is: \n\n\ ${new Date().toLocaleString()}`)
// } while((confirm(`Would the user want to know the date and time?`)))


// ++i or i += 1 (increase by the number you have listed

/*
    TODO - write a for loop that prints all even numbers from 2 to 100

    TODO - write a for loop that prints all integers from 20 down to 1
 */


// for (let x = 2; x <= 100; x += 2, ) {
//     console.log(`Value of x: ${x}`);
//}

// for (let y = 20, y >= 1, --y {
//      console.log(`Value of y: ${y}`);
//}

// function greet(name) {
//
//     if (name === "Johnny") {
//         return `Hello, my love!`;
//     } else {
//         return `Hello, ${name}!`
//     }
//
// }
// console.log(greet('victor'))
// console.log(greet('calderon'))
// console.log(greet('Johnny'))
// console.log(greet('Sam'))
// function greet(name){
//     return "Hello, " + name + "!";
//
//     if(name === "Johnny") {
//         return "Hello, my love!";
// // }
//
//
// const cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30,
//             sayMyName: function (){
//                 console.log(`${this.name} said hi`)
//             }
//         },
//         honk: function (){
//             console.log(`${this.model} honked..`)
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         },
//         honk: function (){
//             console.log(`${this.model} honked..`)
//         }
//     }
// ]
// console.log(cars[0])

// var helloWorld=_=>/Hello, World!/.source


// function helloWorld() {
//     return /Hello, World!/.source
// }
//
// console.log(helloWorld())

// Write a function, sumIsEqual, that takes in three inputs.
// The function should return true if the sum of the first two inputs are equal to the third input.
// If any of the inputs are not numbers, return false.
//


// function sumIsEqual(x, y, z){
//     if(x + y == z) {
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(sumIsEqual(1, 2, 3), true); // returns true
// console.log(sumIsEqual(2, 2, 4), true); // returns true
// console.log(sumIsEqual(10, 2, 12), true); // returns true
// console.log(sumIsEqual(10, false, 12), false); // returns false
// console.log(sumIsEqual('10', '2', 12), false); // returns false
// console.log(sumIsEqual('fred', 'bob', 'hello'), false); // returns false
//
//
//
// const xvalue= parseInt(prompt(`what is the value of x?`))
// console.log(`the user input ${xvalue}`)
// const yvalue = parseInt(prompt(`what is the value of y?`))
// console.log(`the user input ${yvalue}`)
// const zvalue = parseInt(prompt(`what is the value of z`))
// console.log(`The user input ${zvalue}`)
//
// console.log(sumIsEqual(xvalue, yvalue, zvalue))


// function returnProduct(x) {
// let product = 1
//     for (let num of num){
//         product *= num;
//     }
//     // for (let i = o; i < nums.length; i += 1){
//     // product *= nums[i]
// }
//
// console.log(returnProduct([1, 2, 3])); // returns 1 * 2 * 3 = 6
// console.log(returnProduct([3, 3, 3])); // returns 3 * 3 * 3 = 27
// console.log(returnProduct([4, 1, 2])); // returns 4 * 1 * 2 = 8
// console.log(returnProduct([4, 0, 2])); // returns 4 * 0 * 2 = 0
// console.log(returnProduct([5, 3, 2])); // returns 5 * 3 * 2 = 30