class Department {
  //name: string;
  // private employees: string[] = [];
  protected employees: string[] = [];

  // constructor(n: string) {
  //   this.name = n;
  // }

  // shorthand initialization
  // constructor(public name: string, private id: number) {
  constructor(private readonly id: number, public name: string) {
    this.name = name;
    this.id = id;
  }

  dsecribe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department(1, 'Accounting');
console.log(accounting);

accounting.dsecribe();
// const accountingCopy = { dsecribe: accounting.dsecribe };
//accountingCopy.dsecribe() // Error

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

//accounting.employees[2] = 'Anna'; // But we can't access a private property directly

accounting.printEmployees();

// INHERITANCE

class ITDepartment extends Department {
  constructor(id: number, public admins: string[]) {
    super(id, 'IT');
  }
}

const it = new ITDepartment(2, ['Saurabhh', 'Keshav']);
it.addEmployee('Raj');
it.addEmployee('Ragini');

it.dsecribe();
it.printEmployees();

console.log(it);

class AccountingDepartment extends Department {
  private lastReport: string;

  // getter method i.e., accessible as a regular property
  public get mostRecentReport() {
    return this.lastReport;
  }

  // setter method
  public set mostRecentReport(value: string) {
    this.addReport(value);
  }

  constructor(id: number, private reports: string[]) {
    super(id, 'ACCOUNTING');
    this.lastReport = reports[0];
  }

  // Method overriding
  addEmployee(name: string) {
    if (name === 'Max') return;

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);

    this.lastReport = text;
  }

  getReports() {
    console.log(this.reports);
  }
}

const accountingDeptt = new AccountingDepartment(3, [
  'First Report',
  'Second Report',
]);

accountingDeptt.addEmployee('Max');
accountingDeptt.addEmployee('Gautam');

accountingDeptt.addReport('Third Report');
accountingDeptt.getReports();

// accessing the getter prorperty
console.log(accountingDeptt.mostRecentReport);

// accessing the setter property
accountingDeptt.mostRecentReport = 'Year end report';

console.log(accountingDeptt);

/**************************************/
// ABSTRACT CLASS
abstract class Parent {
  constructor() {}

  abstract someMethod(this: Parent): void;
}

/**************************************/
// SINGLETON PATTERN and private constructor
class SpecificUnique {
  private static instance: SpecificUnique;
  private constructor(protected id: number, public name: string) {}

  public static getInstance() {
    if (SpecificUnique.instance) return SpecificUnique.instance;

    this.instance = new SpecificUnique(1, 'something');
  }
}

const speicificInstance = SpecificUnique.getInstance();

/*******************************************/
