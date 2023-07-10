"use strict";

// ========== Retrieve elements by id, class, tag name

// // id
//     const header = document.getElementById('main-title');
//     console.log(header);

// // class - will return an HTMLCollection
//     const cards = document.getElementsByClassName('card');
//     console.log(cards);
//     console.log(cards[0]);
//     // cards.pop(); // ERR/**/OR: Array specific method
//     const cardsArr = Array.from(cards); // convert HTMLCollection and NodeList to Array
//     cardsArr.pop();
//     console.log(cardsArr);



// // tag
//     const sections = document.getElementsByTagName('section');
//     console.log(sections);


// ========== Query Selector and Query Selector All

// querySelector()

// const headerTitle = document.querySelector('header h1');
// const headerTitle = document.querySelector('#main-title');
// console.log(headerTitle);

// const li = document.querySelector('li'); // only returns first matching
// console.log(li);

// const lis = document.querySelectorAll('li'); // only returns first matching
// console.log(lis);

// const secondLi = document.querySelector('li:nth-child(2)');
// console.log(secondLi);



// // ========== Direct access to form inputs
//
//     const forms = document.forms;
//     console.log(forms['feedback-form'].feedback.value);


// ========== Accessing and modifying elements and properties

// // get value of innerHTML
//     const heading = document.getElementById("main-heading");
//     console.log(heading);
//
//     console.log(heading.innerHTML);
//     console.log(heading.innerText);

// set value of innerHTML
//     heading.innerHTML = "<em>Hi MOM!</em>";

// // set value of innerText
//     heading.innerText = "<em>Hi MOM!</em>";
//
// // append value to innerText (works the same with innerHTML)
//     heading.innerHTML += " ...and hi Mom!";


// // ========== Accessing and modifying attributes
//
// // check if attribute exists
//     const cowboy = document.getElementById('cowboy');
//     console.log(cowboy.hasAttribute('data-1'));
//
// // get an attribute value
//     console.log(cowboy.getAttribute('data-1'));
//
// // create a new attribute or change a value of an existing attribute
//     cowboy.setAttribute('data-1', 'hello');
//     cowboy.setAttribute('data-test', 'testing');
//     console.log(cowboy.getAttribute('data-1'));
//
// // remove attribute
//     cowboy.removeAttribute("data-test");
//     console.log(cowboy);


// // ========== Accessing and modifying styles
//
// // single style
//     const jumbotron = document.querySelector('.jumbotron');
//     jumbotron.style.display = "none";
//     jumbotron.style['font-family'] = "times";
//
// // apply multiple style changes
//     Object.assign(jumbotron.style, {
//         border: "10px solid black","font-family": "times", "text-decoration": "underline"
//     });
//
// // styling node list
//     const tableRows = document.getElementsByTagName("tr");
//     for (let i = 0; i < tableRows.length; i += 1) {
//         tableRows[i].style.background = "red";
//     }


// // ========== Add / Remove Elements
//
// see curriculum links


// Rick Morales
// 1:52 PM
function defuseTheBOM() {
    clearTimeout(updateTimer);
    detonationTimer = null;
};
// :yellow_cup:
//     1
// :conga_parrot:
//     1



// Justin Reich
// 2:45 PM
// @channel Let’s spend 10 minutes exploring various DOM methods to select elements: document.getElementById(), document.getElementsByClassName() , document.getElementsByTagName(), document.querySelector(), document.querySelectorAll()
//
//
// Justin Reich
// 9:06 AM
// ================================= WARM UP


// Write a function, returnLargestStudentCount, that takes in an array of classes returns the number of students in the largest class.
// Assume at least one class object will be present in the input array with students property set to a valid positive integer.

    let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22},
    {class: "4th grade history", students: 30},
    {class: "10th grade history", students: 25}
];


returnLargestStudentCount(classes) // returns 30
// New
//
//
// Jeremy Tanner
// 9:32 AM
returnLargestStudentCount = () => {
    let largestStudentCount;
    let classIds = classes.map(elements => {
        return elements.students;
    });
    console.log(Math.max(...classIds));

}


// Jesse Dorman
// 9:36 AM
const returnLargestStudentCount = classes => classes.reduce((highest, element) => (element.students > highest) ? highest = element.students : highest + 0, 0);

//
// Jose De La Luz
// 9:41 AM

function returnLargestStudentCount(x) {
    let y = x[0].students;
    for (let i = 1; i < x.length; i++) {
        if (y.students > x[i].students){
            return y.students
        }else{
            y.students = x[i].students;
        }
    }
    return y;
}





