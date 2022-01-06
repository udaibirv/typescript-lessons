// Code goes here!
class Department{

  private employees: string[] = [] //an array with string values for Employees
  //private keyword now makes employees array only accessible within Department class (all methods too)
  constructor(private readonly id: string, public name: string){  //function tied to this class, which is executed when object is being created
    // this.id = id;
    // this.name = n;
  }

  describe(this:Department) { //method defined within Department Class. This is passed as parameter which has a type of the class
                              //Will always refer to an isntance of an object which alwasys referring to Department
    console.log(`Department${this.id}): ${this.name}`);
  }

  addEmployee(employee: string){ //Gets the value passed with this method, and pushes it to employees array defined above
    this.employees.push(employee);
  }

  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department{ //inehrits from Department class, gets everything including it's constructor.
  admins: string[];
  constructor(id: string, admins: string[]){
    super(id, 'IT'); //whenever you add new constructor from class that inheirts from a parent, need super();
    this.admins = admins;
  }
}

class AccountingDepartment extends Department{
  constructor(id: string, private reports: string[]){
    super(id, 'ACCT')
  }
  addReport(text: string){
    this.reports.push(text);
  }

  getReports(){
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Max']);

const accounting = new AccountingDepartment('d2', []);

accounting.addReport('Something went wrong. CEO is dodging taxes');

accounting.getReports();

it.addEmployee('Max');
it.addEmployee('Manu');
//Adds new employees to the employee array

it.describe();
it.printEmployeeInformation();
console.log(it);

// const accountingCopy = {name: 'Finanace', describe: accounting.describe}
// accountingCopy.describe();
