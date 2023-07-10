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

// Create a function, returnTotalSales, that takes in an array of sales data objects and returns the sum of all
// totalItemsSold properties. Assume all elements in the input array are valid sales data objects with a totalItemsSold
// property.
//
//     EXAMPLE...
//
// const salesData = [
//     {
//         month: 'January',
//         totalItemsSold: 0
//     },
//     {
//         month: 'February',
//         totalItemsSold: 5
//     },
//     {
//         month: 'March',
//         totalItemsSold: 2
//     },
//     {
//         month: 'April',
//         totalItemsSold: 10
//     },
//     {
//         month: 'May',
//         totalItemsSold: 30
//     }
// ];
//
// function returnTotalSales(salesData){
//     let sum = 0
//
//    for (let i = 0; i < salesData.length; i += 1) {
//        sum += salesData[i].totalItemsSold;
//    }
//    return sum
// }
//
//
//
// console.log(salesData[0].totalItemsSold)
// console.log(returnTotalSales(salesData)); // returns 47




// Create a function, returnAdmins, that takes in an array of user objects
// and returns an array of only the admin user objects. Assume the array
// has at least one user object and all elements have an isAdmin property.
//
//     Example:


// const users = [
//
//     {
//         username: 'fred123',
//         password: 'letmein',
//         email: 'fred123@email.com',
//         isAdmin: true
//     },
//     {
//         username: 'cindy123',
//         password: 'hello123',
//         email: 'cindy123@email.com',
//         isAdmin: false
//     },
//     {
//         username: 'kathy123',
//         password: 'letmein',
//         email: 'kathy123@email.com',
//         isAdmin: true
//     },
//     {
//         username: 'kyle123',
//         password: 'letmein',
//         email: 'kyle123@email.com',
//         isAdmin: false
//     }
// ]
//
// // function returnAdmins(users) {
// //     let obj = true
// //     for (let i = 1; true = users.isAdmin; i += 1) {
// //         obj = users[i].isAdmin
// //     }
// //     return obj
// // }
//
// function returnAdmins(users) {
//     let admins = [];
//     for (let i = 0; i < users.length; i += 1) {
//         if (users[i].isAdmin === true) {
//             admins.push(users[i].username);
//         }
//     }
//     return admins
// }
// console.log(returnAdmins(users));
// /*

// returnAdmins(users) returns...
//
// [
//
//     {
//         username: 'fred123',
//         password: 'letmein',
//         email: 'fred123@email.com',
//         isAdmin: true
//     },
//     {
//         username: 'kathy123',
//         password: 'letmein',
//         email: 'kathy123@email.com',
//         isAdmin: true
//     }
// ]


// Write a function, returnLargestStudentCount, that takes in an array of classes returns the number of students in the largest class.
// Assume at least one class object will be present in the input array with students property set to a valid positive integer.

//     let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22},
//     {class: "4th grade history", students: 30},
//     {class: "10th grade history", students: 25}
// ];
//
//     for highestStudentCount = 0;
//     for (let i = 0; i < classes.length; i += 1) {
//         if (highestStudentCount < classes [i].students) {
//         }
//             console.log(classes[i].students);
//     }


// console.log(classes[3])

// function returnLargesStudentCount (classes) {
//     let x = []
//     for (let i = 0; i < classes.length; i += 1) {
//         if (classes[i].students === 30) {
//             return classes
//         }
//     }
//     return classes
// }
// console.log(classes); // returns 30

'use strict';

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop
//
// let count = 0;
// let max = 10;
// let interval = 1000; // interval time in milliseconds
//
// let intervalId = setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }, interval);

// 'use strict';
//
// let delay = 5000; // delay time in milliseconds
//
// let timeoutId = setTimeout(function () {
//     alert('Here is a delayed hello!');
// }, delay);

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring

// You are given an array of runner objects, where each object represents a
// runner with properties name, age, and lapTimes (in seconds). Write a
// function called getTopRunners that takes the runners array as input and
// returns an array of top runners. A runner is considered top if their
// average lap time is 50 seconds or faster. If there are no top runners in
// the input array, the function should return an empty array


// HINT: You might want to create a function called calculateLapTimeAverage
// that takes in an array of numbers and returns the average


// Input:
const runners = [
    { name: "Alice", age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
    { name: "Bob", age: 28, lapTimes: [55.2, 50.7, 53.3, 52.9] },
    { name: "Charlie", age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
    { name: "David", age: 27, lapTimes: [51.4, 50.2, 49.8, 52.3] },
    { name: "Eve", age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] },
]



function getTopRunners (runners) {
    let x = []
    for (let i = 0; i < runners.length; i += 1) {
        if (runners[i].lapTimes < 50) {
            return runners
        }
        return x
    }
}
    console.log(getTopRunners())

// Expected Output:
// [
//     { name: 'Alice', age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
//     { name: 'Charlie', age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
//     { name: 'Eve', age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] }
// ]



// BONUS: Each runner in the resulting array should be represented as an
// object containing only the name and age properties.


// // Expected Bonus Output:
//     [
//     { name: "Alice", age: 18 },
//         { name: "Charlie", age: 19 },
//         { name: "Eve", age: 17 }
//     ]










