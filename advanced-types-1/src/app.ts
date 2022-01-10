// Advanced Types in TypeScript Part 1
//Will include Intersection Types, Type Guards, Discriminated Unions, and Type Casting
//Index Properties, Function overloads, Optional Chaining, and Nullish Coalescing
type Admin = {
  name: string;
  privelages: string[];
} //type defintion, not object def

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Udaibir',
  privelages: ['Create and Run Server'],
  startDate: new Date()
}

//Type Guards = idea of checking if a certain property or method exists before trying to use it (objects = instanceof or in) and typeof for anything else

// type Combinable = string | number;

// const add = (n1: Combinable, n2: Combinable) => {
//   if(typeof n1 === 'string' || typeof n2 === 'string'){ //typeof is example of a type guard
//     return n1.toString() + n2.toString();
//   }
//   return n1 + n2;
// }

type UnknownEmployee = Employee | Admin; //type that combines both employee and admin properties

const printEmployeeInfomration = (emp: UnknownEmployee) => {
  console.log('Name: ' + emp.name);
  if('privelages' in emp){ //type check/type guard
    console.log('Privileges ' + emp.privelages)
  }

  if('startDate' in emp){
    console.log('Start Date: ', emp.startDate);
  }

}

printEmployeeInfomration(e1); //printEmployeeInformation takes info from e1 made earlier,
                              //The type guards were used to ensure that the properties existed on this new employee type

class Car {
  drive(){
    console.log('Driving...');
  }
}

class Truck {
  drive(){
    console.log('Driving a truck...');
  }

  loadCargo(amount: number){
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if(vehicle instanceof Truck){ //executes at runtime, knows to check if vehicle was created on truck constructor function
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);


//discrimnated union type
//makes implementing type guards easier
//avaialbe when workign with object types

interface Bird{
  type: 'bird'; //example of discriminated union; type assignment, narrowed down so that type in this class must be 'bird'
  flyingSpeed: number;
}

interface Horse{
  type: 'horse'; //example of discriminated union; type assignment, narrowed down so that type in this class must be 'horse'
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal:Animal) => {
  let speed;
  switch(animal.type){
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }

  console.log('Moving at speed: ' + speed);

}

moveAnimal({type: 'bird', flyingSpeed: 10});


//type casting = helps you tell typescript that some value is of a specific type

// const $userInput = <HTMLInputElement>document.getElementById('user-input');
//adding <HTMLInputElement> is an example of type casting so typescript knows what exactly you are targeting

const $userInput = document.getElementById('user-input') as HTMLInputElement;
//another way for type casting, will probably use this when working with react

$userInput.value = 'Hi There!';

//index types
//allows to create objects that are more flexible with properties they might hold

interface ErrorContainer { //creates object that has an "error identifier" and then an error message.
  [prop: string]:string;
}

const errorBag : ErrorContainer = {
  email: 'not a valid email', //both string value types like defiend in the errorContainer
  username: 'Must start with a capital character!'
};

//function overloads = multiple ways of calling a fucntion with different parameters

type Combinable = string | number;

function add(n1: number, n2:number):number //if add is called and both args are a number, then the result will be a number
function add(n1: string, n2:string):string //if add is called and both args are a string, then the result will be a string
function add (n1: Combinable, n2: Combinable) {
  if(typeof n1 === 'string' || typeof n2 === 'string'){ //typeof is example of a type guard
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}


//optional chaining

const fetchedUserData = {
  id: 'u1',
  name: 'Udaibir',
  job: {title: 'frontend application developer', description: 'Monster Energy', salary: '250k'}
};
// console.log(fetchedUserData.job && fetchedUserData.job.title);
//example of optional chaining, first checks if job object exists, then checks for the specefic title property (older syntax)

console.log(fetchedUserData?.job?.title);
//optional chaining (newer syntax) = helps us safely acess nested properties and objects. avoids runtime errors.


//nullish coalescing
const userInput = '';
const storedData = userInput ?? 'Default'; //nullish coalescing operator, if left of ?? is null/undefined, value to the right is used
console.log(storedData);
