/**
 * JS
 */

let dog1 = { name: 'Snickers', age: 3 };
const dog2 = { name: 'Sunny', age: 1 };

const weakSauce = new WeakSet([dog1, dog2]);

console.log(weakSauce);
dog1 = null;
console.log(weakSauce);
