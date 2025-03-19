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
