// Code goes here!
class Department{
  private name: string;
  private employees: string[] = [] //an array with string values for Employees
  //private keyword now makes employees array only accessible within Department class (all methods too)
  constructor(n: string){  //function tied to this class, which is executed when object is being created
    this.name = n;
  }

  describe(this:Department) { //method defined within Department Class. This is passed as parameter which has a type of the class
                              //Will always refer to an isntance of an object which alwasys referring to Department
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string){ //Gets the value passed with this method, and pushes it to employees array defined above
    this.employees.push(employee);
  }

  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');
//Adds new employees to the employee array

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {name: 'Finanace', describe: accounting.describe}
// accountingCopy.describe();
