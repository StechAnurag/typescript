/*******************
 *  CUSTOM TYPES
 *******************/

// UNION TYPES
let input: number | string;

input = 24;
input = 'Krishna';

// Literal Type

let resultConversion: 'as-number' | 'as-string';

resultConversion = 'as-number';

// RETURN TYPE OF A FUNCTION
function printSomething(num: number): void {
  console.log(num);
}

// FUNCTION AS A TYPE
// let combinedValues : Function;

let combinedValues: (a: number, b: number) => number;

// FUNCTION TYPES & CALLBACKS
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(1, 2, (num) => {
  console.log(num);
});

// UNKNOWN TYPE
let userInput: unknown;
let username: string;

userInput = 5;
userInput = 'Max';

//username = userInput; // ERROR
if (typeof userInput === 'string') {
  username = userInput;
}

// NEVER TYPE
function generateError(message: string, errorCode: number): never {
  throw { message, errorCode };
}

generateError('Something failed', 500);
