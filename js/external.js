
alert('Welcome to my Website!')

//let userInput = prompt('What is your favorite color?:');
//console.log('The user entered: ' + userInput);

// Movie Rental
//You have rented some movies for your kids: The little mermaid (for 3 days),
//Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
//If price for a movie per day is $3, how much will you have to pay?



const dailyRentalRateDollars = 5

const littleMermaidDaysRented = parseInt(prompt( 'How many days have you rented The Little Mermaid?:'))
console.log(`The user entered ${littleMermaidDaysRented}`);

const brotherBearDaysRented = parseInt(prompt('How many days have you rented Brother Bears?:'));
console.log(`The user entered ${brotherBearDaysRented}`);

const herculesDaysRented = parseInt(prompt('How many days have you rented Hercules?:'));
console.log(`The user entered ${herculesDaysRented}`);

let totalRentalCost

alert(`Your Total Cost is: \n\n$${totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars}`);

// Contractor
//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
//they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

const googleHourlyRateDollars = 400;
const amazonHourlyRateDollars = 380;
const facebookHourlyRateDollars = 350;


const googleHours = parseInt(prompt('How many hours have you worked in google?:'));
console.log(`the user entered ${googleHours}`);
const amazonHours = parseInt(prompt('How many hours have you worked in amazon?:'));
console.log(`the user entered ${amazonHours}`);
const facebookHours = parseInt(prompt('How many hours have you worked in facebook?:'));
console.log(`the user entered ${facebookHours}`);

let totalPayment
let totalPayment2
let totalPayment3

let pays

alert(`total payment for Google is \n\n$${totalPayment = googleHours * googleHourlyRateDollars}`);
alert(`total payment for amazon is \n\n$${totalPayment2 = amazonHours * amazonHourlyRateDollars}`);
alert(`total payment for facebook is \n\n$${totalPayment3 = facebookHours * facebookHourlyRateDollars}`);
alert(`Your total payment is: \n\n $${pays = totalPayment + totalPayment2 + totalPayment3 }`);
// Student Enrollment
//A student can be enrolled to a class only if the class is not full
// and the class schedule does not conflict with her current schedule.

const classIsNotFull = confirm("Is class full? Press 'OK' if Yes, 'Cancel' if No.");
console.log('The user entered: ' + classIsNotFull)
const classScheduleDoesNotConflict= confirm("does class schedule conflict with your schedule? Press 'OK' if Yes, 'Cancel' if No.");
console.log('The user entered: ' + classScheduleDoesNotConflict)
let studentEnrolled

alert(`If "true" you're good to take this class if "false" you're unable to take this class: \n\n ${studentEnrolled = (!classIsNotFull && !classScheduleDoesNotConflict)}`)

// A product offer can be applied only if a
// person buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.

let atLeastTwo = confirm("Do you have more than 2 items? Press 'OK' if Yes, 'Cancel' if No. ");
console.log(`the use entered ${atLeastTwo}`)
let offerNotExpired = confirm("Is the offer still valid? Press 'OK' if Yes, 'Cancel' if No.");
console.log(`the user entered ${offerNotExpired}`)
let premMem = confirm("Are you a premium Member ");
console.log(`the use entered ${premMem}`)

alert(`if the offer is "false", you're not eligible. If the offer is "true", you're eligible \n\n ${PremiumMember = (atLeastTwo && offerNotExpired) || (premMem && offerNotExpired)}`)




