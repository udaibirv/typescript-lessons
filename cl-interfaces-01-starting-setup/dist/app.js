"use strict";
const userName = 'Max';
const hobbies = ['sports', 'cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    firstName: 'max',
    age: 20
};
const copiedPerson = Object.assign({}, person);
const add = (...numbers) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
};
const addNumbers = add(5, 10, 15, 20);
const [hobby1, hobby2] = hobbies;
const { firstName, age } = person;
//# sourceMappingURL=app.js.map