[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13164466&assignment_repo_type=AssignmentRepo)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function. I have not provided any test code, but you can base
yours on test code from other exercises.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one!

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The big $\Theta$ complexity of the djkstra's algorithm implementation can be determined by analyzing each step. The initalization of the distances and unvisited vertices+ to infinity each take O(|V|) time. Initializing the distance and source to 0 take O(1). The while loop iterates through all the vertices in the graph which takes O(|V|). Selecting the shortest distance to an unvisted vertex take O(|V|). Marking the vertex with distance dist take O(1). Going through each edge to find its distance from the source node is O(|E|). Therefore the big $\Theta$ = $\Theta$(|V|+|E|+|V|*|V|)=$\Theta(|E|+|V|^2)$. 