// OBJECT TYPES
/*
const person: {
  name: string;
  age: number;
} = {
  name: 'Anurag',
  age: 26,
};

// the above code is same as JS
//const person = {name : 'Anurag', age: 26};

console.log(person);
*/

// ARRAY TYPES
/* 
const hobbies = ['Sports', 'Cooking'];
//const mixedArray: any[] = ['something', 1, true];

for (const hobby of hobbies) {
  console.log(hobby.toUpperCase());
} 
*/

// TUPLE
/* 
const role:[number, string] = [1, 'Author'];
*/

// ENUM
enum Role {
  ADMIN,
  USER,
  AUTHOR,
}
console.log(Role.ADMIN); // 0
console.log(Role.AUTHOR); //2
