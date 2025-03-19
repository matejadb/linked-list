import { LinkedList } from './linkedlist.js';

const list = new LinkedList();

list.append('dog');
list.prepend('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.prepend('turtle');
console.log(list.toString());
