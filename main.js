import { HashMap } from './hash-map.js';

const test = new HashMap();
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('7', 'seven');
test.set('8', 'seven');
test.set('6', 'seven');
test.set('22', 'twenty-two');

console.log(test.length());

// console.log(test.keys());
// console.log(test.values());
// console.log(test.entries());
