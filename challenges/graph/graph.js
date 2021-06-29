'use strict'
// const Vertex = require('./vertex.js')
// const Edge = require('./edge.js')


class Vertex {
    constructor(value) {
        this.value = value
    }
}

class Edge{
    constructor(vertex,weight){
        this.vertex=vertex;
        this.weight=weight;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map()
    }

    addVertex(vertex) {
        return this.adjacencyList.set(vertex, [])
    }


    addDirectEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            if (!this.adjacencyList.has(start) && !this.adjacencyList.has(end)) {
                return `There are no start vertex${start} and end vertex ${end} `
            }
            if (!this.adjacencyList.has(start)) {
                return `There are no ${start} vertex`
            }
            if (!this.adjacencyList.has(end)) {
                return `There are no ${end} vertex`
            }
        }

        const adjacencies = this.adjacencyList.get(start)
        adjacencies.push(new Edge(end, weight))

    }
    print() {
        for (const [k, v] of myGraph.adjacencyList.entries()) {
            console.log("k---->", k);
            console.log("v---->", v);
        }
    }

    getNeighbors(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            return `There are no ${vertex} vertex`
        }
        return this.adjacencyList.get(vertex)
    }
    getSize() {
        return this.adjacencyList.size
    }

    breadthFirst(vertex) {
        const visited = new Set()
        let queue = []
        queue.push(vertex)
        while (queue.length) {
            let currentVertex = queue.shift()

            visited.add(currentVertex)

            this.adjacencyList.get(currentVertex).forEach((vertex, idx) => {
                if (!visited.has(vertex.vertex)) {
                    queue.push(vertex.vertex)

                }
            });
        }
        return [...visited]

    }

    dfs(start, visited = new Set()) {
        visited.add(start);
        // console.log(start);
        const destinations = this.adjacencyList.get(start);

        for (const destination of destinations) {
            if (!visited.has(destination.vertex)) {
                this.dfs(destination.vertex, visited);
            }
        }

        return [...visited];
    }
}



let myGraph = new Graph();
console.log(myGraph);
const a = new Vertex('a');
const b = new Vertex('b');
const c = new Vertex('c');
const d = new Vertex('d');
const e = new Vertex('e');
const f = new Vertex('f');
const h = new Vertex('h');
const g = new Vertex('g');

myGraph.addVertex(a);
myGraph.addVertex(b);
myGraph.addVertex(c);
myGraph.addVertex(d);
myGraph.addVertex(e);
myGraph.addVertex(f);
myGraph.addVertex(h);
myGraph.addVertex(g);

myGraph.addDirectEdge(a,b);

myGraph.addDirectEdge(a, d);

myGraph.addDirectEdge(b, c);
myGraph.addDirectEdge(b, d);
myGraph.addDirectEdge(b, a);

myGraph.addDirectEdge(c, g);
myGraph.addDirectEdge(c, b);

myGraph.addDirectEdge(g, c);

myGraph.addDirectEdge(d, a);
myGraph.addDirectEdge(d, b);
myGraph.addDirectEdge(d, e);
myGraph.addDirectEdge(d, h);
myGraph.addDirectEdge(d, f);

myGraph.addDirectEdge(e, d);

myGraph.addDirectEdge(h, f);
myGraph.addDirectEdge(h, d);

myGraph.addDirectEdge(f, d);
myGraph.addDirectEdge(f, h);




console.log(myGraph.dfs(a)); 


console.log(1)





module.exports = Graph