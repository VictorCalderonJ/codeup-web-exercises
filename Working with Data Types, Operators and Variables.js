// Write some JavaScript code, that is, variables and operators, to describe the
// following scenarios. Do not worry about the real operations to get the values,
// the goal of these exercises is to understand how real world conditions can be represented with code.

//You have rented some movies for your kids:
// The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

let priceperday = 3.00;
let BrotherBearDay = 5;
let LittleMermaidDay = 3;
let HerculesDay = 1;
let Price = (priceperday * BrotherBearDay) + (priceperday * LittleMermaidDay) + (priceperday * HerculesDay);
console.log(Price);

// Suppose you're working as a contractor for 3 companies:
// Google, Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400,
// Amazon $380,
// and Facebook $350.
// How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let Googleperhour = 400.00;
let Amazonperhour = 380.00;
let Facebookperhour = 350.00;
let Paymentforthisweek = (Googleperhour * 6) + (Amazonperhour * 4) + (Facebookperhour * 10);
console.log(Paymentforthisweek)

// A student can be enrolled in a class only if the class is not full
// and the class schedule does not conflict with her current schedule.

let fullClass = false;
let dateConflict = false;
let canEnroll = !fullClass && !dateConflict;
console.log(canEnroll);

//A product offer can be applied only if a
// person buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.

let atLeastTwo = true;
let offerNotExpired = true;
let premMem = true
console.log(offerNotExpired && (premMem || offerNotExpired));

// 4. Use the following code to follow the instructions below:

//Create a variable that holds a boolean value for each
// of the following conditions:
//the password must be at least 5 characters
//the password must not include the username
//the username must be no more than 20 characters
//neither the username or password can start or end with whitespace

let username = 'codeup';
let password = 'notastrongpassword';

let Passwordatleastfive = password.length >= 5;
let PasswordHasNoUserName = !password.includes(username)
let UsernameAtleastTwenty = username.length <= 20;
let UseernameAndPasswordTrimmed = username.trim() === username && password.trim() === password;
