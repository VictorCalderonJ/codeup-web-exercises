
function isValid(num) {
    return num <= 0 || num >= 51 || num % 2 === 0
}
console.log("Inside break_and_continue.js");



function numberOneThroughFifty() {
    return parseInt(prompt("Enter an odd number from 1 to 50"));
}

function promptUntilOdd() {
    do{
        const userNumber = numberOneThroughFifty();
        if(userNumber >= 1 && userNumber <= 50 && userNumber % 2 !== 0){
            console.log(`Number to skip is: ${userNumber}`);
            for(let i = 1; i <= 50; i++) {
                if(i === userNumber) {
                    console.log(`Yikes! Skipping ${i}`);
                    continue;
                }
                if(i % 2) {
                    console.log(`Here's an odd number: ${i}`);
                }
            }
            break;
        }
        console.log("Invalid input");
    } while(true)
}

// promptUntilOdd();


function promptBetweenOneAndFiftyAndOdd() {
    let num;
    do {
        num = prompt("Please enter an odd number between 1-50?");
        if(isValid(num)) {
            alert("Number entered is outside the acceptable range or an even number. Please try again.");
        }
        else
            break;
    } while (true);
    return num;
}

let userNumber = promptBetweenOneAndFiftyAndOdd();

for (let i = 1; i <= 50; i += 2) {
    if(i == userNumber) {
        console.log(`Yikes! Skipping over: ${userNumber}`);
        continue;
    }
    console.log(`There is an odd number: ${i}.`);
}