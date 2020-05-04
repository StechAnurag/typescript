// INTERFACE

// an interface is used to describe the structure of an Object
interface Person {
  name: string;
  age: number;
  isMale: Boolean;

  greet(greeting: string): void;
}

let user: Person;

user = {
  name: 'Anmol',
  age: 27,
  isMale: true,

  greet(greeting: string) {
    console.log(greeting + ', I am ' + this.name);
  },
};

user.greet('Hello World');

// Implementing an interface
interface Animal {
  name: string;

  speak(phrase: string): void;
}

class Cat implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  speak(phrase: string) {
    console.log(this.name + ' ' + phrase);
  }
}

const pussy = new Cat('Pussy');
pussy.speak('meowwws...');
