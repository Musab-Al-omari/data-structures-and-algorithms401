'use strict'

const Graph = require('../../graph/graph.js');
const Vertex = require('../../graph/vertex.js');
const Path = require('../graph-business-trip.js')


describe('Implementation: Graphs', () => {

    const myGraph = new Graph();

    const Pandora = new Vertex('Pandora');
    const Arendelle = new Vertex('Arendelle');
    const Metroville = new Vertex('Metroville');
    const Monstroplolis = new Vertex('Monstroplolis');
    const Narnia = new Vertex('Narnia');
    const Naboo = new Vertex('Naboo');

    myGraph.addVertex(Pandora);
    myGraph.addVertex(Arendelle);
    myGraph.addVertex(Metroville);
    myGraph.addVertex(Monstroplolis);
    myGraph.addVertex(Narnia);
    myGraph.addVertex(Naboo);

    myGraph.addDirectEdge(Pandora, Arendelle, 150);
    myGraph.addDirectEdge(Arendelle, Pandora, 150);

    myGraph.addDirectEdge(Pandora, Metroville, 82);
    myGraph.addDirectEdge(Metroville, Pandora, 82);

    myGraph.addDirectEdge(Arendelle, Metroville, 99);
    myGraph.addDirectEdge(Metroville, Arendelle, 99);


    myGraph.addDirectEdge(Arendelle, Monstroplolis, 42);
    myGraph.addDirectEdge(Monstroplolis, Arendelle, 42);

    myGraph.addDirectEdge(Metroville, Narnia, 37);
    myGraph.addDirectEdge(Narnia, Metroville, 37);

    myGraph.addDirectEdge(Metroville, Naboo, 26);
    myGraph.addDirectEdge(Naboo, Metroville, 26);

    myGraph.addDirectEdge(Metroville, Monstroplolis, 105);
    myGraph.addDirectEdge(Monstroplolis, Metroville, 105);


    myGraph.addDirectEdge(Monstroplolis, Naboo, 73);
    myGraph.addDirectEdge(Naboo, Monstroplolis, 73);


    myGraph.addDirectEdge(Narnia, Naboo, 250);
    myGraph.addDirectEdge(Naboo, Narnia, 250);

    it('[Metroville, Pandora, ]to equal 82', () => {


        expect(Path(myGraph, [Metroville, Pandora])).toEqual(82)

    })

    it(' [Arendelle, New Monstropolis, Naboo] to equal 115', () => {
        // console.log(Path(myGraph, [Metroville, Pandora]));
        // console.log(Path(myGraph, [Arendelle, Monstroplolis,Naboo]));
        // const x=myGraph.adjacencyList.entries()
        // console.log(x);
        expect(Path(myGraph, [Arendelle, Monstroplolis, Naboo])).toEqual(115)
    })


    it('[Naboo, Pandora]to equal 0', () => {
    
        expect(Path(myGraph, [Naboo, Pandora])).toEqual(0)
    })

    
})
