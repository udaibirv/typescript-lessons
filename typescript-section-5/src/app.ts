// Code goes here!
class Department{

  protected employees: string[] = [] //an array with string values for Employees
  //private keyword now makes employees array only accessible within Department class (all methods too)
  //protected keywrod makes the variable availaible in any class that extends the Department class
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
  private lastReport:string;

  get mostRecentReport() { //get is a property where a function is executed when you retrieve a value
    if(this.lastReport){
      return this.lastReport;
    }
    throw new Error('No Report Found');
  }

  set mostRecentReport(value: string) {
    if(!value){
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]){
    super(id, 'ACCT')
    this.lastReport = reports[0]
  }
  addReport(text: string){
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports(){
    console.log(this.reports);
  }

  addEmployee(name: string){
    if(name === 'Max'){
      return;
    }
    this.employees.push(name);
  }
}

const it = new ITDepartment('d1', ['Max']);

const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'Most recent end of year report';
accounting.addReport('Something went wrong. CEO is dodging taxes');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeeInformation();

accounting.getReports();

it.addEmployee('Max');
it.addEmployee('Manu');
//Adds new employees to the employee array

it.describe();
it.printEmployeeInformation();
console.log(it);

// const accountingCopy = {name: 'Finanace', describe: accounting.describe}
// accountingCopy.describe();
