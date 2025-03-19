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
