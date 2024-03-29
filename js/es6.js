/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Victor';
const email = 'Calderon.J.Victor@Gmail.com';
const languages = [`JS`, `CSS`, `HTML`];

// TODO: rewrite the object literal using object property shorthand
users.push({
    name,
    email,
    languages
});
console.log(users)
// TODO: replace `var` with `let` in the following variable declarations
const emails = [];
const names = [];

// TODO: rewrite the following using arrow functions

// users.forEach(function(user) {
//     return emails.push(user.email);
// });
users.forEach(({email}) => emails.push(email));

// users.forEach(function(user) {
//     return names.push(user.name);
// });
users.forEach(({name}) => names.push(name));


console.log(email);
console.log(name);

// TODO: replace `var` with `let` in the following declaration
let developers = [];

// TODO: rewrite the code below to use object destructuring assignment
//       note that you can also use destructuring assignment in the function
//       parameter definition
// TODO: rewrite the assignment below to use template strings

// users.forEach(function(user) {

//     const name = user.name;
//     const email = user.email;
//     const languages = user.languages;
//
//     developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
// });

users.forEach(function(user) {
    const { name, email, languages } = user;

    developers.push(`${name}'s email is ${email} ${name} knows ${languages.join(', ')}`);
});

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
developers.forEach(function (developer) {

    // TODO: rewrite the assignment below to use template strings
    list += '<li>' + developer + '</li>';
});
list += '</ul>';



// // TODO: rewrite the following loop to use a for..of loop
// developers.forEach( (developer) => {
//     // TODO: rewrite the assignment below to use template strings
//     list += '<li>' + developer + '</li>';
// });
//
// // TODO: rewrite the following loop to use a for..of loop
// for (let developer of developers) {
//     list += `<li>${developer}</li>`;
// }
//
// list += '</ul>';
//
//
// console.log(list);
//
// document.write(list);





