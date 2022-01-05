// Code goes here!

//const and let in Typescript (same as in JS)
const userName:string = 'Max';
let age:number = 30;
age = 29;

// const add = (a: number, b:number ) => a+b
//Implicit return of arrow functions
//type declratation after each paramter
//more than one line of code in function, still need return statement

const subtract = (a: number, b:number = 1) => a-b;
//b in this case is a default paramter
//if using default parameter, must be the last parameter, otherwise error is thrown

const hobbies = ['sports', 'cooking']
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
//using spread operator on activeHobbies array
//pulls out all elements of hobbies erray
//adds them into to activeHobbies as seperate list of arguments

const person = {
  name: 'Max',
  age: 30
};

const copiedPerson = {...person};
//spread operator pulls out elements (key:value pairs)
//can be used anywehre where we would need key:value pairs (like the new copiedPerson Object)

const add = (...numbers: number[]) => {  //...numbers (rest paramater, accepts unlimted number of arguments)
                                        //will merge all incoming values into an array.
                                        // number:[] will define that the incoming values will be an array
  return numbers.reduce((curResult, curValue) => { //.reduce = perfroms an operatoion on every element on an array,
                                                // returns a result, and then adds the result together.
                                                // 0 in this case is a starting value
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5,10,2,3.7)
console.log('numbers.reduce solution', addedNumbers);


// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
//Both lines above are before object/array destructruing

const [hobby1, hobby2] = hobbies;
//goes through hobbies array, goes to first element and stores it in hobby 1,
//goes through hobbies array, gets to second element and stores it in hobby 2
//Does not change original array/object
