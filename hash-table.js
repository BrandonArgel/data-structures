class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	hashMethod(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		const address = this.hashMethod(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
	}

	get(key) {
		const address = this.hashMethod(key);
		if (this.data[address]) {
			for (let i = 0; i < this.data[address].length; i++) {
				if (this.data[address][i][0] === key) {
					return this.data[address][i][1];
				}
			}
		}
		return undefined;
	}
	getAllKeys() {
		const keys = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				for (let j = 0; j < this.data[i].length; j++) {
					keys.push(this.data[i][j][0]);
				}
			}
		}
		return keys;
	}

	remove(key) {
		const address = this.hashMethod(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					const deletedValue = this.data[address][i];
					this.data[address].splice(i, 1);
					return deletedValue;
				}
			}
		}
		return undefined;
	}
}

const hashTable = new HashTable(50);
