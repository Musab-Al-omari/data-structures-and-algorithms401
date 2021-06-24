'use strict'
const Graph = require('../graph.js')
const Vertex = require('../vertex.js')


describe('Implementation: Graphs', () => {

    const myGraph = new Graph();
    const hisGraph = new Graph();
    const zero = new Vertex(0);
    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    const five = new Vertex(5);

    myGraph.addVertex(zero);
    myGraph.addVertex(one);
    myGraph.addVertex(two);
    myGraph.addVertex(three);
    myGraph.addVertex(four);
    myGraph.addVertex(five);

    myGraph.addDirectEdge(zero, two);
    myGraph.addDirectEdge(two, three);
    myGraph.addDirectEdge(two, four);
    myGraph.addDirectEdge(three, five);
    myGraph.addDirectEdge(four, five);
    myGraph.addDirectEdge(one, three);
    // myGraph.print();
    // console.log("-----------------")
    // console.log(myGraph.getNeighbours(two));
    // console.log("-----------------")
    // console.log(myGraph.getNeighbours(one));


    it('Node can be successfully added to the graph', () => {
        // myGraph.addVertex(zero)
        // const y = x.values().next()
        expect(myGraph.addVertex(zero).has(zero)).toEqual(true)

    })
    it('A collection of all nodes can be properly retrieved from the graph', () => {
        // const x=myGraph.adjacencyList.entries()
        // console.log(x);
        expect(myGraph.getSize()).toEqual(6)
    })
    it('All appropriate neighbors can be retrieved from the graph', () => {
        const opad=myGraph.getNeighbors(four)
        expect(opad[0].vertex).toEqual({"value": 5})
    })
    it('The proper size is returned, representing the number of nodes in the graph', () => {
        expect(myGraph.getSize()).toEqual(6)
    })
    
    it('An empty graph properly returns null', () => {
        expect(hisGraph.getSize()).toEqual(0)
    })


})