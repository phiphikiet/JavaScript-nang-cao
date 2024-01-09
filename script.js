// bai tap 1

// Log number
console.log(10000)

// Log string
console.log('Hello World');

// Log multiple values
console.log(20, 'Hello', true);

// Log a variable
const x = 100;
console.log(x);

// Console error & warning
console.error('Alert');
console.warn('Warning');

// Log object as table
console.table({ name: 'Brad', email: 'brad@gmail.com' });

// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 20px; background-color: black; color: red';
console.log('%cHello World', styles);

// Bai tap 2

// This is a single line of code

/*
Multi-line comment
console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);
*/

// bai tap 3
let firstName = 'John';
const lastName = 'Doe';
let age = 30;

console.log(age);

const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);