# Graphs
A graph is a non-linear data structure that can be looked at as a collection of vertices (or nodes) potentially connected by line segments named edges.

## Challenge
to create a Graph Data structure


## API

##### **add node**
- Arguments: value
- Returns: The added node
- Add a node to the graph 
##### **add edge**
- Arguments: 2 nodes to be connected by the edge, weight (optional)
- Returns: nothing
- Adds a new edge between two nodes in the graphIf specified, assign a weight to the edge Both nodes should already be in the Graph
##### **get nodes**
- Arguments: none
- Returns all of the nodes in the graph as a collection (set, list, or similar)
##### **get neighbors**
- Arguments: node
- Returns a collection of edges connected to the given node
Include the weight of the connection in the returned collection
##### **size**
- Arguments: none
- Returns the total number of nodes in the graph

##### **breadth first**
- Arguments: Node
- Return: A collection of nodes in the order they were visited.
- Display the collection