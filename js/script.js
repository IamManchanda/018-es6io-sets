/**
 * JS
 */

/* eslint-disable */
const brunch = new Set();
brunch.add('Wes');
brunch.add('Sarah');
brunch.add('Simone');

const line = brunch.values();
console.log(line.next().value);
console.log(line.next().value);
brunch.add('Heather');
brunch.add('Snickers');
console.log(line.next().value);
console.log(line.next().value);
console.log(line.next().value);



