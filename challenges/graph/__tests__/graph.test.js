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
    // console.log(myGraph.breadthFirst(zero));



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
describe('Implementation: Graphs breadthFirst', () => {

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

    myGraph.addDirectEdge(Pandora, Arendelle);
    myGraph.addDirectEdge(Arendelle, Pandora);

    myGraph.addDirectEdge(Arendelle,Metroville );
    myGraph.addDirectEdge(Metroville,Arendelle );
    

    myGraph.addDirectEdge(Arendelle,Monstroplolis );
    myGraph.addDirectEdge(Monstroplolis,Arendelle );

    myGraph.addDirectEdge(Metroville,Narnia );
    myGraph.addDirectEdge(Narnia,Metroville );

    myGraph.addDirectEdge(Metroville,Naboo );
    myGraph.addDirectEdge(Naboo,Metroville );

    myGraph.addDirectEdge(Metroville,Monstroplolis );
    myGraph.addDirectEdge(Monstroplolis,Metroville );


    myGraph.addDirectEdge(Monstroplolis,Naboo );
    myGraph.addDirectEdge(Naboo,Monstroplolis );
    
    

    myGraph.addDirectEdge(Narnia,Naboo );
    myGraph.addDirectEdge(Naboo,Narnia );


    // console.log(myGraph.breadthFirst(Pandora));

    it('the method return an array ', () => {
        expect(Array.isArray(myGraph.breadthFirst(Pandora))).toBeTruthy()
    });

    it('first city to be Pandora ', () => {
        expect(myGraph.breadthFirst(Pandora)[0].value).toEqual('Pandora')
    });

    it('last city to be msh pandora ', () => {
        expect(myGraph.breadthFirst(Pandora)[5].value).toEqual('Naboo')
    });

    it('the array of result ', () => {
        expect(myGraph.breadthFirst(Pandora)).toEqual([
             { value: 'Pandora' },
             { value: 'Arendelle' },
             { value: 'Metroville' },
             { value: 'Monstroplolis' },
             { value: 'Narnia' },
             { value: 'Naboo' }
          ])
    });

})
