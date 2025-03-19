import { Node } from './node.js';

export class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	append(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			return;
		}
		let current = this.head;

		while (current.nextNode) {
			current = current.nextNode;
		}

		current.nextNode = newNode;
	}

	prepend(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			return;
		}

		newNode.nextNode = this.head;
		this.head = newNode;
	}

	size() {
		if (!this.head) {
			return console.log('0');
		}
		let count = 1;
		let current = this.head;

		while (current.nextNode) {
			count += 1;
			current = current.nextNode;
		}

		console.log(count);
	}

	headItem() {
		if (!this.head) {
			return `Empty Linked List`;
		}

		console.log(this.head.value);
	}

	tailItem() {
		if (!this.head) {
			return `Empty Linked List`;
		}

		let current = this.head;
		while (current.nextNode) {
			current = current.nextNode;
		}

		console.log(current.value);
	}

	at(index) {
		if (!this.head) {
			return `Empty Linked List`;
		}
		let i = 0;
		let current = this.head;

		while (i < index) {
			current = current.nextNode;
			i++;
		}

		if (current === null) {
			return console.log(`Index out of bounds`);
		}

		return console.log(current.value);
	}

	toString() {
		let printList = ``;
		let current = this.head;

		while (current) {
			printList += `( ${current.value} ) -> `;
			current = current.nextNode;
		}
		printList += `null`;

		return printList;
	}
}
