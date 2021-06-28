const Graph = require('../graph/graph.js');
const Vertex = require('../graph/vertex.js');

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

function Path(graph, array) {

    let money = 0
    for (let i = 0; i < array.length-1; i++) {
        graph.getNeighbors(array[i]).forEach(obj => {
            if (obj.vertex === array[i + 1]) {
                money=money+obj.weight
            }

        });
    }
    return money




}
module.exports=Path

