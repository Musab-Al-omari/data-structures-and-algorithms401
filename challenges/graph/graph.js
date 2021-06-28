'use strict'
// const Vertex=require('./vertex.js')
const Edge = require('./edge.js')


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


}
module.exports = Graph