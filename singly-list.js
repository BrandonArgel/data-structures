class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;

		return this;
	}

	append(value) {
		let newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.lenght++;

		return this;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;

		return this;
	}

	insert(position, value) {
		if (index >= this.length) {
			return this.append(value);
		}

		const newNode = new Node(value);
		const firstPointer = this.getTheIndex(position - 1);
		const holdingPointer = firstPointer.next;
		firstPointer.next = newNode;
		newNode.next = holdingPointer;
		this.length++;

		return this;
	}

	remove(index) {
		const previousPointer = this.getTheIndex(index - 1);
		const holdingPointer = this.getTheIndex(index + 1);

		previousPointer.next = holdingPointer;

		this.length--;

		return this;
	}

	getTheIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
}

const list = new SinglyLinkedList(1);
