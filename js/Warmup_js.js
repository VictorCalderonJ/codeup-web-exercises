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

    let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22},
    {class: "4th grade history", students: 30},
    {class: "10th grade history", students: 25}
];

    // for highestStudentCount = 0;
    // for (let i = 0; i < classes.length; i += 1) {
    //     if (highestStudentCount < classes [i].students) {
    //     }
    //         console.log(classes[i].students);
    // }


// console.log(classes[3])

// function returnLargestStudentCount(classes) {
//     let highestStudentCount = 0;
//     for (let i = 0; i < classes.length; i += 1) {
//         if (highestStudentCount < classes[i].students) {
//             highestStudentCount = classes[i].students;
//         }
//     }
//     return highestStudentCount;
// }

// console.log(returnLargestStudentCount(classes), 30); // returns 30

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
// const runners = [
//     { name: "Alice", age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
//     { name: "Bob", age: 28, lapTimes: [55.2, 50.7, 53.3, 52.9] },
//     { name: "Charlie", age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
//     { name: "David", age: 27, lapTimes: [51.4, 50.2, 49.8, 52.3] },
//     { name: "Eve", age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] },
// ]
//
// function One(runners) {
//     let TopRunner = runners[0];
//     for (let i = 1; i < runners.length; i += 1) {
//         if (TopRunner < runners[i].lapTimes) {
//             TopRunner = runners[i];
//         }
//     }
//     return TopRunner;
// }
//  console.log(One(runners), 47.7)

// function getTopRunners(runnersArray) {
//     // declare topRunners array
//     let topRunners = [];
//
//     // loop through every piece of our runnersArray
//     for(let runner of runnersArray) {
//         // check if top runner
//         if(calculateLapTimeAverage(runner.lapTimes) <= 47.7) {
//             // if true, add to topRunners
//             // topRunners.push(runner);
//
//
//             // bonus:
//             const topRunner = {
//                 name: runner.name,
//                 age: runner.age
//             };
//             topRunners.push(topRunner);
//         }
//         // if not, do nothing
//     }
//
//     // return topRunners
//     // if there are no top runners, this will be an empty array
//     return topRunners;
// }
//
//
// function calculateLapTimeAverage(lapTimesArray) {
//     let total = 0;
//     let count = 0;
//     // loop through array
//     for(let lapTime of lapTimesArray) {
//         // record the total amount and the count
//         total += lapTime;
//         count++;
//     }
//
//     // return average
//     return total / count;
// }
//
// console.log(getTopRunners(runners));


// Given the following ARRAY of objects, write a function that LOOPS through
// the array and console logs the following for each Hogwarts House:
// Name:
// Animal:
// Founder:
// Common Room:
// First and Last Name of at least one house head:

//how to create a function that loops through an array and console logs name, animal, dog.

// HINT:
// When you copy the object into IntelliJ, make sure to expand and collapse
// the different properties to get a good idea of what is going on and keep
// from being overwhelmed


// BONUS:
// - Log a random house head each time
// - Throw some traits in there
// - Write a conditional statement to log something special for your favorite house

//write a function



const hogwartsHouses = [
    {
        "id": "0367baf3-1cb6-4baf-bede-48e17e1cd005",
        "name": "Gryffindor",
        "houseColours": "Scarlet and gold",
        "founder": "Godric Gryffindor",
        "animal": "Lion",
        "element": "Fire",
        "ghost": "Nearly-Headless Nick",
        "commonRoom": "Gryffindor Tower",
        "heads": [
            {
                "id": "530da97d-5a83-4ea6-bc15-790edf5b5efc",
                "firstName": "Minerva",
                "lastName": "McGonagall"
            },
            {
                "id": "9915c5f8-9177-4f63-bba8-d04387a404f9",
                "firstName": "Godric",
                "lastName": "Gryffindor"
            }
        ],
        "traits": [
            {
                "id": "1773bce8-7a22-4d57-b8e1-7e1cbe26fa2b",
                "name": "Courage"
            },
            {
                "id": "21f22e43-efd9-4a43-87f5-eab5fb1666ea",
                "name": "Chivalary"
            },
            {
                "id": "60d8f5d0-de4b-41f7-b152-40543555bf3a",
                "name": "Nerve"
            },
            {
                "id": "68f73efc-fae9-4a54-b3e2-04bbe72f5d63",
                "name": "Daring"
            },
            {
                "id": "7e6d321d-fe7d-4c05-8ad7-ddabda83d8cd",
                "name": "Determination"
            },
            {
                "id": "adf83e9f-859b-41c4-947d-b359a05f8f3c",
                "name": "Bravery"
            }
        ]
    },
    {
        "id": "805fd37a-65ae-4fe5-b336-d767b8b7c73a",
        "name": "Ravenclaw",
        "houseColours": "Blue and bronze",
        "founder": "Rowena Ravenclaw",
        "animal": "Eagle",
        "element": "Air",
        "ghost": "Grey Lady",
        "commonRoom": "Ravenclaw Tower",
        "heads": [
            {
                "id": "102ac5fc-db71-4055-8250-bc238cffb3d9",
                "firstName": "Filius",
                "lastName": "Flitwick"
            },
            {
                "id": "57c04cf4-f3dd-46d6-a78f-84c30fb42533",
                "firstName": "Rowena",
                "lastName": "Ravenclaw"
            }
        ],
        "traits": [
            {
                "id": "08a54d21-6137-4eda-9c32-004706650b44",
                "name": "Learning"
            },
            {
                "id": "5056effc-b92b-4f86-96fd-978b26a849da",
                "name": "Acceptance"
            },
            {
                "id": "78db6224-33d1-490d-a553-9bbbedb3282a",
                "name": "Inteligence"
            },
            {
                "id": "ab88a4fb-1c4d-4e14-88bf-7f55dfabb75a",
                "name": "Wisdom"
            },
            {
                "id": "e43d0b2f-dcfe-4a5f-b3ab-d39679bbfbe3",
                "name": "Wit"
            },
            {
                "id": "ffc55017-c03f-490a-9c48-2f38af6e2f0a",
                "name": "Creativity"
            }
        ]
    },
    {
        "id": "85af6295-fd01-4170-a10b-963dd51dce14",
        "name": "Hufflepuff",
        "houseColours": "Yellow and black",
        "founder": "Helga Hufflepuff",
        "animal": "Badger",
        "element": "Earth",
        "ghost": "Fat Friar",
        "commonRoom": "Hufflepuff Basement",
        "heads": [
            {
                "id": "a593e800-95dc-47ab-9243-6ac98d2f6ab4",
                "firstName": "Helga",
                "lastName": "Hufflepuff"
            },
            {
                "id": "fab07935-774e-4eb4-8ed5-621bfe416d85",
                "firstName": "Pomona",
                "lastName": "Sprout"
            }
        ],
        "traits": [
            {
                "id": "22d8bc5b-67ee-49fb-89ee-8811fc22062b",
                "name": "Hardworking"
            },
            {
                "id": "76973c67-0dd1-4aca-b0b7-b053d9eaf206",
                "name": "Patience"
            },
            {
                "id": "a8494f18-caff-491e-96e3-1ff73bd6f4ab",
                "name": "Loyalty"
            },
            {
                "id": "af80b93e-3c61-4586-824a-8f7e6ac4ae0a",
                "name": "Just"
            },
            {
                "id": "c080647f-5b31-434f-8327-376abbfb0989",
                "name": "Fairness"
            },
            {
                "id": "f62f4753-fdb5-473b-a8ac-07c1b5844eec",
                "name": "Modesty"
            }
        ]
    },
    {
        "id": "a9704c47-f92e-40a4-8771-ed1899c9b9c1",
        "name": "Slytherin",
        "houseColours": "Green and silver",
        "founder": "Salazar Slytherin",
        "animal": "Serpent",
        "element": "Water",
        "ghost": "Bloody Baron",
        "commonRoom": "Slytherin Dungeon",
        "heads": [
            {
                "id": "36ba2ceb-6b6f-48a3-b512-9c1e66321eff",
                "firstName": "Horace",
                "lastName": "Slughorn"
            },
            {
                "id": "5cac8ad3-b5fc-4c48-a951-990cdd5671bc",
                "firstName": "Salazar",
                "lastName": "Slytherin"
            },
            {
                "id": "ef90f8c9-9f03-478e-baec-8a3c487e5271",
                "firstName": "Severus",
                "lastName": "Snape"
            }
        ],
        "traits": [
            {
                "id": "0992c505-80dd-4b49-ad0b-3b7383d6ec89",
                "name": "Resourcefulness"
            },
            {
                "id": "36dad9bf-010e-47ef-8908-ecb6d5acfac5",
                "name": "Selfpreservation"
            },
            {
                "id": "42b7c304-5e62-4fae-9e52-f8c6a106e406",
                "name": "Ambition"
            },
            {
                "id": "540aaafe-6185-4dc8-94ed-bd0236b433d3",
                "name": "Cunning"
            },
            {
                "id": "d7b7c1b7-3fce-4474-9fd1-9b731e0b2649",
                "name": "Pride"
            },
            {
                "id": "df43d46b-1ebf-409d-a63e-6c6bcb049aef",
                "name": "Determination"
            }
        ]
    }
]

function HPInfo(array) {
    //creat a loop
    for (let i = 0; i < hogwartsHouses.length; i += 1) {
        const {name, founder, animal, commonRoom} = array[i]
        console.log(`Group Name: ${name}, \n\ Founders name: ${founder},\n\ Animal they represent: ${animal},\n\ Located: ${commonRoom}`)
    }
}
HPInfo(hogwartsHouses)
