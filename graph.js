// This is a non directed graph
class Graph {
	constructor() {
		this.nodes = 0;
		this.adjList = {};
	}

	addVertex(node) {
		this.adjList[node] = [];
		this.nodes++;
	}

	addEdge(node1, node2) {
		this.adjacentList[node1].push(node2);
		this.adjacentList[node2].push(node1);
	}
}

const graph = new Graph();
