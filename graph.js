class Graph {
	constructor() {
		this.nodes = 0;
		this.adjList = {};
	}

	addVertex(node) {
		this.adjList[node] = [];
		this.nodes++;
	}
}

const graph = new Graph();
