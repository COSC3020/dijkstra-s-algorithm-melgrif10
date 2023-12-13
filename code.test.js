const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function storeValues(rand1, rand2){     //Store values for the surrounding vertex and the weight in a tuple
    return jsc.tuple([rand1, rand2]).smap(tuple => ({i: tuple[0], weight: tuple[1]}), obj => [obj.i, obj.weight]);
    //Create a tuple generator and convert the tuple to an object then an array
}

const test = jsc.forall(jsc.dict(jsc.array(storeValues(jsc.nat, jsc.nat))), function(graphDj){  //Generate input for djkstra's algoritm
    const graph = {};               //Convert to expected format
    for(const v in graphDj){        //For the vertices in the graph
        graph[v] = {};              //Convert to expected format     
        for(const {i, weight} of graphDj[v]){
            graph[v][i] = weight;   //Represent graph as an adjacency list
        }
    }

    const vertices = Object.keys(graph);    //Used to retrieve an array containg all the "keys"       
    const source = vertices[Math.floor(Math.random()*vertices.length)];     //Choose a random source vertex 
    const result = dijkstra(graph, source); //Run Dijkstra's algorithm
    const Distances = Object.values(result).every(distance => distance<=0); //Check if the distances are <= 0
    
    return Distances;   //Return the distance
});

jsc.assert(test);