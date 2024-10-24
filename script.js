console.log('Hello!');

// Variables

// Let variable saving the number 44 on the age
let age =44;
// Chaining method:
console.log("Min alder er" ,age);
// Template litteral:
console.log("Min alder");
console.log(typeof age);

// Const variable saving the string Sanja on the name name
const name = "Sanja";
console.log("Mitt navn er:",name);
console.log(typeof name);

// Const variable saving the boolen true on the name isPresent
const isPresent = true;
console.log("Er tilstede? ",isPresent);
console.log(typeof isPresent);

// Two const variables saving strings
// One const variable saving the date from the two first variables
const firstName = "Sanja";
const lastName = "Duric";
const fullName = firstName + " " + lastName; 
console.log("fullName variable viser",fullName);

const htmlElement = document.querySelector("javaScriptdata");
htmlElement.textContent = fullName;
