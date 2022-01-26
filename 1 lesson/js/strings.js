let str1 = '111';
let name = "Lilia";
let name2 = "don't";

let str3 = `Hello ${name2}, nice to see you!`;

let str2 = "123";
console.log(str2.length)
let str4 = `${str1} ${str2}`;
console.log(str4); 

// && - AND
// || - OR
// ! - NOT

let ifUserAlive = false;
let ifUserLoggedIn = true;

if (!ifUserLoggedIn) {
    console.log("Hello it is true");
}




const paragraph = 'Hello world';
                // 012345678910


console.log(paragraph.substr(2,5));
const searchTerm = 'world';

const indexOfFirst = paragraph.indexOf(searchTerm); // 6
const indexOfFirst = paragraph.indexOf('!!!!'); // -1

console.log(paragraph.includes(searchTerm)) // true


const paragraph = 'Hello world';
console.log(paragraph.replace('Hello', 'Good Morning'));