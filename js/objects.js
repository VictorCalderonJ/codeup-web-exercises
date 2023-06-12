(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person = {
        firstName: "Victor",
        lastName: "Calderon",
        sayHello() {
            return `Hello from ${this.firstName} ${this.lastName}!`;
        }
    };
    console.log(person.firstName)
    console.log(person.lastName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log(person.sayHello())

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

function TotalDue(y) {
let total1

    if (y >= 200.00){
        return total1 = `since your amount is over 200 you get a 20% discount, your total amount is: \n $${y * .88}`;
    } else {
        return `You're not qualified for a discount.`;
    }
}

    const test1 = TotalDue(shoppers[0].amount);
    const test2 = TotalDue(shoppers[1].amount);
    const test3 = TotalDue(shoppers[2].amount);

    console.log(`${shoppers[0].name}, ${test1}`);
    console.log(`${shoppers[1].name}, ${test2}`);
    console.log(`${shoppers[2].name}, ${test3}`);

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

const books = [
        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams",
            }
        }
]

        console.log(books[0].title) // "The Salmon of Doubt"
        console.log(books[0].author.firstName) // "Douglas"
        console.log(books[0].author.lastName) // "Adams"

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    const Book = [
    {
        Book: `#1`,
        Tittle: "Walkaway",
        Author: "Douglas Adams",
    },
        {
            Book: `#2`,
            Tittle: "The Salmon of Doubt",
            Author: "Cory Doctorow",
        },

        {
            Book: `#3`,
            Tittle: "A Brief History of Time",
            Author: "Cory Doctorow",
        }
]

    console.log(`Book #1 \n\ Title: ${Book[0].Tittle} \n\ Author: ${Book[0].Author}`)




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
