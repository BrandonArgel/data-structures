class MyArray {
	constructor() {
		this.lenght = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.lenght] = item;
		this.lenght++;
		return this.lenght;
	}

	pop() {
		const lastItem = this.data[this.lenght - 1];
		delete this.data[this.lenght - 1];
		this.lenght--;
		return lastItem;
	}

	delete(index) {
		const item = this.data[index];
		this.shiftItems(index);
		return item;
	}

	shiftItems(index) {
		for (let i = index; i < this.lenght - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.lenght - 1];
		this.lenght--;
	}

	unshift(item) {
		for (let i = this.length; i > 0; i--) {
			this.data[i] = this.data[i - 1];
		}
		this.data[0] = item;
		this.length++;
		return this.data;
	}

	shift() {
		return this.delete(0);
	}
}

const myArray = new MyArray();
