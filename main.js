import { LinkedList } from './linkedlist.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
list.append('seal');

console.log(list.toString());
list.size();
list.headItem();
list.tailItem();
list.at(1);
list.pop();
console.log(list.toString());
console.log(list.contains('seal')); // false, seal removed from list
console.log(list.contains('dog')); // true
console.log(list.find('seal')); // null
console.log(list.find('hamster')); // 3
list.insertAt('pewpew', 2);
console.log(list.toString());
list.removeAt(0);
console.log(list.toString());
