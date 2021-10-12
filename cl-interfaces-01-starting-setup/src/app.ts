const userName = 'Max';
// const add = (a: number, b: number) => a + b;
// console.log(add(5, 12));


const hobbies = ['sports', 'cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies); //spread operator = pulling out elements in an array or objects

console.log(activeHobbies);

const person = {
  firstName: 'max',
  age: 20
};

const copiedPerson = {...person}; //spread operator in objects

const add = (...numbers: number[]) => { // rest paramter to allow for n number of paramters
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0)  //perfroms an operation on every element in array and adds currentResult and currentValue and returns, second argument is currentValue which is 0
}

const addNumbers = add(5, 10, 15, 20);

const [hobby1, hobby2] = hobbies;  // array destructring: goes through hobbies array, stores first element to hobby1 and second element to hobby 2

const {firstName, age} = person //name and person will be stored in their own constants
