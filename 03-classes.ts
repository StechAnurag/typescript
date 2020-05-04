/*
class Department {
  //name: string;
  private employees: string[] = [];

  // constructor(n: string) {
  //   this.name = n;
  // }

  // shorthand initialization
  // constructor(public name: string, private id: number) {
  constructor(public name: string, private readonly id: number) {
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

const accounting = new Department('Accounting', 1);
console.log(accounting);

accounting.dsecribe();
// const accountingCopy = { dsecribe: accounting.dsecribe };
//accountingCopy.dsecribe() // Error

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

//accounting.employees[2] = 'Anna'; // But we can't access a private property directly

accounting.printEmployees();
*/
