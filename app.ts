// INTERSECTION TYPE

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  joiningDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privilages: ['create-server'],
  joiningDate: new Date(),
};
