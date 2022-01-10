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

type Combinable = string | number;

const add = (n1: Combinable, n2: Combinable) => {
  if(typeof n1 === 'string' || typeof n2 === 'string'){ //typeof is example of a type guard
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

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
