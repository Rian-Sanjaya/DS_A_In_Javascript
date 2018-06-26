function Dictionary() {
    var items = {};

    // return true if the key exists in the dictionary, false otherwise
    this.has = function(key) {
        return key in items;
    }

    // use to add a new value or update an existing one
    this.set = function(key, value) {
        items[key] = value;
    }

    // remove value from dictionary using the key
    this.delete = function(key) {
        if (this.has(key)) {
            delete items(key);
            return true;
        }

        return false;
    }

    // return a specific value searched by the key
    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    }

    // retrive an array of  all values in the dictionary
    this.values = function() {
        var values = [];

        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }

        return values;
    }

    // remove all items from dictionary
    this.clear = function() {
        items = {};
    }

    // return how many elements the dictionary contains
    this.size = function() {
        // works with modern browser (IE9+, FF4+, Chrome5+, Opera12+, Safari5+, and so on)
        return Object.keys(items).length;

        // works in any browser
        // var count = 0;

        // for (var key in items) {
        //     if (items.hasOwnProperty(key)) {
        //         ++count;
        //     }
        // }

        // return count;
    }

    // return an array of all the keys the dictionary contains
    this.keys = function() {
        return Object.keys(items);
    }

    // 
    this.getItems = function() {
        return items;
    }
}

function Queue() {
	let items = [];

	this.enqueue = function(element) {
		items.push(element);
	}

	this.dequeue = function() {
		return items.shift();
	}

	this.front = function() {
		return items[0];
	}

	this.isEmpty = function() {
		return items.length == 0;
	}

	this.size = function() {
		return items.length;
	}

	this.print = function() {
		console.log(items.toString());
	}
}

function Stack() {
	let items = [];  // use array as a data structure

	this.push = function(element) {
		items.push(element);
	};

	this.pop = function() {
		return items.pop();
	};

	this.peek = function() {
		return items[items.length-1];
	};

	this.isEmpty = function() {
		return items.length == 0;
	};

	this.size = function() {  // similar to the length property from the array class, for collections we usually use the term size
		return items.length;
	};

	this.clear = function() {
		items = [];
	};

	this.print = function() {
		console.log(items.toString());
	};

	this.decimalToBinary = function(decNumber) {
		var remStack = new Stack(),
			rem,
			binString = '';

		while (decNumber > 0) {
			rem = Math.floor(decNumber % 2);
			remStack.push(rem);
			decNumber = Math.floor(decNumber / 2);
		}

		while (!remStack.isEmpty()) {
			binString += remStack.pop().toString();
		}

		return binString;
	}

	this.baseConverter = function(decNumber, base) {
		var remStack = new Stack(),
			rem,
			baseString = '',
			digits = '0123456789ABCDEF';

		while (decNumber > 0) {
			rem = Math.floor(decNumber % base);
			remStack.push(rem);
			decNumber = Math.floor(decNumber / base);
		}

		while (!remStack.isEmpty()) {
			baseString += digits[remStack.pop()];
		}

		return baseString;
	}
}

function Graph() {
    var vertices =[];   // {1}
    var adjList = new Dictionary(); // {2}

    this.addVertex = function(v) {
        vertices.push(v);   // {3}
        adjList.set(v, []); // {4}
    };

    this.addEdges = function(v, w) {
        adjList.get(v).push(w); // {5}
        adjList.get(w).push(v); // {6}
    };

    this.toString = function() {
        var s = '';
        for (var i=0; i<vertices.length; i++) {
            s += vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i]);
            for (var j=0; j<neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }

        return s;
    };

    var initializeColor = function() {
        var color = [];
        for (var i=0; i<vertices.length; i++) {
            color[vertices[i]] = 'white';   // {1}
        }
        return color;
    }

    // Graph traversal - Breadth-first search (BFS)
    // we use color to reflect vertices status when traverse the graph
    // White: represents that the vertex has not been visited
    // Grey: represents that the vertex has been visited but not explored
    // Black: represents that the vertex has been completely explored 
    this.bfs = function(v, callback) {
        var color = initializeColor();  // {2}
        var queue = new Queue();    // {3}
        queue.enqueue(v);           // {4}

        while (!queue.isEmpty()) {  // {5}
            var u = queue.dequeue();    // {6}
            var neighbors = adjList.get(u); // {7}
            color[u] = 'grey';  // {8}
            for (var i=0; i<neighbors.length; i++) {    // {9}
                var w = neighbors[i];                   // {10}
                if (color[w] === 'white') {             // {11}
                    color[w] = 'grey';                  // {12}
                    queue.enqueue(w);                   // {13}
                }
            }
            color[u] = 'black'; // {14}
            if (callback) {     // {15}
                callback(u);
            }
        }
    }

    // improved version of BFS
    // 1. it can find the distance from a vertex v to each other vertex u
    // 2. it can show the predecessor of a vertex (which can be used to find the shortest path from a vertex v  to every other vertex u)
    this.BFS = function(v) {
        var color = initializeColor(),
            queue = new Queue(),
            d = [],     // {1}
            pred = [];  // {2}
        queue.enqueue(v);

        for (var i=0; i<vertices.length; i++) { // {3}
            d[vertices[i]] = 0;         // {4}
            pred[vertices[i]] = null;   // {5}
        }

        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';
            for (var i=0; i<neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;    // {6}
                    pred[w] = u;        // {7)}
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }

        return {    // {8}
            distances: d,
            predecessors: pred
        };
    }
}

function printNode(value) {
    console.log('Visited vertex: ' + value);
}

// Graph class implementation example
var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i=0; i<myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdges('A', 'B');
graph.addEdges('A', 'C');
graph.addEdges('A', 'D');
graph.addEdges('B', 'E');
graph.addEdges('B', 'F');
graph.addEdges('C', 'D');
graph.addEdges('C', 'G');
graph.addEdges('D', 'G');
graph.addEdges('D', 'H');
graph.addEdges('E', 'I');
console.log(graph.toString());
// graph traversel
graph.bfs(myVertices[0], printNode);

var shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA); // return an object with one of the key is a predecessors array

// with the predecessors array, we can build the path from vertex A to the other vertices
var fromVertex = myVertices[0]; // {9}
for (var i=1; i<myVertices.length; i++) {   // {10}
    var toVertex = myVertices[i];           // {11}
    var path = new Stack();                 // {12}
    for (var v=toVertex; v!==fromVertex; v=shortestPathA.predecessors[v]) { // {13}
        path.push(v);   // {14}
    }
    path.push(fromVertex);  // {15}
    var s = path.pop();     // {16}
    while (!path.isEmpty()) {   // {17}
        s += ' - ' + path.pop();    // {18}
    }
    console.log(s); // {19}
}