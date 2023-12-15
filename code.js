function dijkstra(graph, sourceNode) {
    if(Object.keys(graph.length==0)){       //If the input is an empty array
        return {};                          //Return an empty array
    }

    const dist = [];            //Empty array to store the distance
    const notVisited = new Set(Object.keys(graph));     //Graph to store nodes that haven't been visited
    
    for(const v in graph){      //For each vertex in the graph
        dist[v] = Infinity;     //Initialize the dist to infinity
    }
    dist[sourceNode] = 0;       //Initialize the distance of the source node to 0

    while(notVisited > 0){      //While there are vertices that have not been visited in the graph iterate
        let currV = null;       //Keeps track of the current vertex during the iterations

        for(const v of notVisited){     //Find the unvisited vertices in the graph
            if(currV==null || dist[v]<dist[currV]){     //Is this the first or is the distance from the source to the unvisited vertex < the distance from the source to the current vertex    
                currV = v;              //If so update current vertex to the vertex with the smallest distance from the source
            }
        }
        notVisited.delete(currV);       //Mark the current vertex as visited

        for(const i in graph[currV]){   //Update distances for surronding vertices of the current vertes
            const weight = graph[currV][i];     //Get the weight of the edge between the current vertex and the surronding vertex i
            const newDist = dist[currV]+weight; //Calculate the new distance
    
            if(newDist<dist[i]){        //Checks if the new distance to vertex i is shorter than the previously recorded distance
                dist[i] = newDist;      //Update the distance to the shortest path
            }
        }
    }
    return dist;        //Return the final distance from the source to all vertices
}
