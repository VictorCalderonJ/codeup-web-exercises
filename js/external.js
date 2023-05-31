
alert('Welcome to my Website!')

//let userInput = prompt('What is your favorite color?:');
//console.log('The user entered: ' + userInput);

// Movie Rental
//You have rented some movies for your kids: The little mermaid (for 3 days),
//Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
//If price for a movie per day is $3, how much will you have to pay?



let dailyRentalRateDollars = 5

let littleMermaidDaysRented = parseInt(prompt( 'How many days have you rented The Little Mermaid?:'))
console.log('The user entered: ' + littleMermaidDaysRented);

let brotherBearDaysRented = parseInt(prompt('How many days have you rented Brother Bears?:'));
console.log('The user entered: ' + brotherBearDaysRented);

let herculesDaysRented = parseInt(prompt('How many days have you rented Hercules?:'));
console.log('The user entered: ' + herculesDaysRented);

let totalRentalCost

alert(`Your Total Cost $${totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars}`);

// Contractor
//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
//they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let googleHourlyRateDollars = 400
let amazonHourlyRateDollars = 380
let facebookHourlyRateDollars = 350

let googleHours = parseInt(prompt('How many hours have you worked in google?:'));
console.log('The user entered: ' + googleHours);
let amazonHours = parseInt(prompt('How many hours have you worked in amazon?:'));
console.log('The user entered: ' + amazonHours);
let facebookHours = parseInt(prompt('How many hours have you worked in facebook?:'));
console.log('The user entered: ' + facebookHours);

let totalPayment

alert(`total payment for Google is $${totalPayment = googleHours * googleHourlyRateDollars}`);
alert(`total payment for amazon is $${totalPayment += amazonHours * amazonHourlyRateDollars}`);
alert(`total payment for facebook is $${totalPayment += facebookHours * facebookHourlyRateDollars}`);

// Student Enrollment
//A student can be enrolled to a class only if the class is not full
// and the class schedule does not conflict with her current schedule.

let classIsNotFull = confirm("Is class full? Press 'OK' if Yes, 'Cancel' if No.");
console.log('The user entered: ' + classIsNotFull)

let classScheduleDoesNotConflict= confirm("does class schedule conflict with your schedule? Press 'OK' if Yes, 'Cancel' if No.");
console.log('The user entered: ' + classScheduleDoesNotConflict)

let studentEnrolled

alert(`If "true" you're good to take this class if "false" you're unable to take this class:   ${studentEnrolled = (!classIsNotFull && !classScheduleDoesNotConflict)}`)





