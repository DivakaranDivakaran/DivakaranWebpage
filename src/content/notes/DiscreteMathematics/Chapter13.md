# Graphs

It is believed that the subject of graph theory began with Euler's answer to the famous Konigsberg problem.  The city of Konigsberg has the river Pregel flowing through it.  The river splits the town into four regions and there are sever bridges connecting these four regions.  The people of the town loved walking across the town and were curious if it was possible to walk around town ensuring that you walk over each bridge exactly once.  Although many people tried to find such a path, no one was able to do it.  



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_0c8f9482db146c8daca4a1bcada86efe.png" alt="Figure" class="max-w-full h-auto" /></div>



Euler's had the insight that the paths inside the regions are not relevant, so we can represent each region by a point and each bridge by a line, obtaining a figure as below.  In the figure below, I have numbered the central region (with maximum bridges) $1$, the southern and the northern regions $2$ and $3$ respectively, and the eastern region $4$.



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_6bd531c0ec03d77d6816b336d81dac49.png" alt="Figure" class="max-w-full h-auto" /></div>



The figure we have obtained after stripping all unnecessary information is a (multi) graph.  The points are called vertices and the lines are called edges.  Euler further observed that, except for the starting and the ending vertices, you need to exit every vertex you enter.  Thus, the number of edges incident on a vertex (has the vertex as one of its end points), has to be even.  However, the number of vertices incident on every vertex in the graph corresponding to the Konigsberg problem is odd.  With this observation Euler showed that there is no way to walk across the town passing each bridge exactly once.  



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">13.1 Basic Terminology</summary>



Notice that in the ``graph" corresponding to the Konigsberg problem, there are two edges connecting $1$ and $2$.  Our definition will not consider such cases.  If there are multiple edges between some pair of vertices, we will call it a multi-graph.  Others might want to allow graphs to have multiple edges between a pair of vertices.  So out multi-graphs are graphs for them and our graphs are simple-graphs for them.


<div class="academic-env env-definition">
<span class="env-label">Definition 13.1</span>

A graph $G$ is a tuple $(V,E)$ where $V$ is a set and $E\subset 2^V$ such that if $e\in E$, then $|e| = 2$.  The intuition is that if $\{v,w\}\in E$, then there is an edge connecting $v$ and $w$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 13.1</span>


Let $V = \{1,2,3,4,5,6\}$ and $E = \{\{1,2\},\{1,3\}, \{2,3\}, \{2,4\}, \{4,5\}, \{4,6\},\{5,6\}\}$.  Then, the graph $G=(V,E)$ can be represented pictorially as 


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_cd39cd4a71c7d0a9ab91a1373335ad31.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>


Although the vertex set of a graph need not be finite, we will mostly focus on finite graphs in this course.  


<div class="academic-env env-definition">
<span class="env-label">Definition 13.2</span>

Let $G = (V,E)$ be a graph and $v\in V$. The number of edges incident on vertex $v$ is called the degree of $v$ denoted by $\text{deg}(v)$

</div>



<div class="academic-env env-example">
<span class="env-label">Example 13.2</span>

Let $G$ be as in Example **13.1**.  Then, the $\text{deg}(2) = 3 = \text{deg}(4)$ and $\text{deg}(1) = \text{deg}(3) = \text{deg}(5) = \text{deg}(6) = 2$.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 13.3</span>

Let $G = (V,E)$ be a finite graph with $V = \{v_1,\dots,v_n\}$.  We can capture all information about the graph using a matrix $A$ whose $ij$-th entry is $1$ if there is an edge between $v_i$ and $v_j$ and $0$ otherwise.  This matrix is called the adjacency matrix of the graph $G$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 13.3</span>

The adjacency matrix of $G$ from Example **13.1** is 
$$\begin{bmatrix}
0 & 1 & 1 & 0 & 0 & 0\\
1 & 0 & 1 & 1 & 0 & 0\\
1 & 1 & 0 & 0 & 0 & 0\\
0 & 1 & 0 & 0 & 1 & 1\\
0 & 0 & 0 & 1 & 0 & 1\\
0 & 0 & 0 & 1 & 1 & 0
\end{bmatrix}.$$

</div>


It is easy to observe that 

- The adjacency matrix is symmetric (whenever there is an edge between $v_i$ and $v_j$, there is an edge between $v_j$ and $v_i$).
- All diagonal entries of the adjacency matrix are $0$ (there are no loops).
- The degree of $v_i$ is the sum of entries in the $i$-th row (or equivalently $i$-th column).



<div class="academic-env env-definition">
<span class="env-label">Definition 13.4</span>

Let $G = (V,E)$ be a finite graph with $V = \{v_1,\dots,v_n\}$.  We can capture all information about the graph using a list $l$ whose $i$-th entry is a list of all the neighbours of $v_i$.  This list is called the adjacency list of the graph $G$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 13.4</span>

The adjacency list of $G$ from Example **13.1** is 
$$[[2,3],[1,3,4],[1,2],[2,5,6],[4,6],[4,5]].$$

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">13.2 Another puzzle</summary>



\begin{quote}
Show that in a party with $51$ people, there is always a person who is friends with even number of people.
\end{quote}

You have it easier than the people who first encountered this problem.  Because you encountered it in a chapter on Graph theory, you know what to use.  But, they were not as fortunate.  Once, we know that we have to use graph theory, it becomes significantly easier.  We create a graph as follows: 

- The set $V$ contains all the people in the party.  
- Given $v,w\in V$, $\{v,w\}\in E$ iff $v$ and $w$ are friends. 



<div class="academic-env env-theorem">
<span class="env-label">Theorem 13.1 (Hand shaking theorem)</span>

Let $G=(V,E)$ be a graph with $e$ edges.  Then 
$$\sum_{v\in V} \text{deg}(v) = 2e.$$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Notice that each edge contributes to the degree of exactly $2$ vertices.  Thus, the sum of degrees has to be equal to $2e$.

</details>
</div>


Now, if each of the $51$ people in the party has an odd number of friends, then the degree of each vertex is odd.  The sum of these $51$ odd numbers (the degrees of these vertives) sum up to an odd number and hence cannot be equal to $2e$.  Thus, solving the puzzle.  More generally,


<div class="academic-env env-theorem">
<span class="env-label">Theorem 13.2</span>

Let $G=(V,E)$ be a graph.  The number of vertices that has an odd degree has to be even.  Thus, if the total number of vertices is odd, there should be atleast one vertex that has even degree.

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">13.3 Themes in Graph theory</summary>



- Does renaming the vertices of one graph give you another?  If yes, we say that the two graphs are isomorphic.  Determining if two graphs are isomorphic and finding explicit isomorphisms are important problems.
- Given a graph $G = (V,E)$, can we draw the graph on a plane such that edges intersect only at vertices?  Does the answer change if we replace plane with some other surface?  These representations are sometimes called embeddings and the study of graph embeddings is a rich field. 
- Can we colour a graph using $n$ colours such that no two adjacent vertices have the same colour?  The four colouring theorems is a celebrated result which said that a planar graph (we draw the graph on a plane such that edges intersect only at vertices) can be coloured using $4$ colours such that no two adjacent vertives have the same colour.  The theorem was first proved in 1976 by Kenneth Appel and Wolfgang Haken.  They showed that the general result is true iff a specific large collection of graphs can be coloured using $4$ colours.  And a computer gave a four colouring for all those graphs.  This proof didnt satisfy all people and some craved for a traditional proof.  In 2005, the theorem was verified by Georges Gonthier using a theorem prover.  The four colouring theorem is beyond the scope of this course, but we will prove the five and six colouring theorems in the next class.   




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">13.4 Exercises</summary>


[1.]
- The intersection graph of a collection of sets $A_1, A_2, \dots, A_n$ is the graph that has a vertex for each of these sets and has an edge connecting the vertices representing two sets if these sets have a nonempty intersection. Construct the intersection graph of these collections of sets.

- $A_1 = \{0, 2, 4, 6, 8\} , A_2= \{0, 1, 2, 3, 4\}, A_3 = \{1, 3, 5, 7, 9 \},$\\
$A_4 = \{5, 6, 7, 8, 9\}, A_5 = \{0, 1, 8, 9\}$
- $A_1= \{\dots, -4, -3, -2, -1, 0 \}, A_2 = \{\dots, -2, -1, 0, 1, 2,\dots\},$\\
$ A_3 = \{\dots, -6, -4, -2, 0, 2, 4, 6, . . . \}, A_4 = \{\dots, -5, -3, -1, 1, 3, 5, \dots \},$\\
$ A_5 = \{\dots, -6, -3, 0, 3, 6, \dots \}$
- $A_1 = \{x\in \mathbb{R} | x<0\}, A_2 = \{x\in \mathbb{R} | -1 < x < 0\}, A_3 = \{x\in \mathbb{R} | 0 < x < 1\}$\\
$A_4 = \{x\in \mathbb{R} | -1 < x < 1\}, A_5 = \{x\in \mathbb{R} | x > -1\}, A_6 = \mathbb{R}$

- For each course at a university, there may be one or more other courses that are its prerequisites. How can a graph be used to model these courses and which courses are prerequisites for which courses? Should edges be directed or undirected? Looking at the graph model, how can we ﬁnd courses that do not have any prerequisites and how can we ﬁnd courses that are not the prerequisite for any other courses?
- Find the number of vertices, the number of edges, and the degree of each vertex in the given undirected graphs.  Find the sum of the degrees of the vertices of each graph and verify that it equals twice the number of edges in the graph.

\begin{minipage}{.33\textwidth}
\includegraphics[width = 0.7\textwidth]{Images/Graph1.png}
\end{minipage}
\begin{minipage}{.33\textwidth}
\includegraphics[width = 0.85\textwidth]{Images/Graph2.png}
\end{minipage}
\begin{minipage}{.33\textwidth}
\includegraphics[width = 0.9\textwidth]{Images/Graph3.png}
\end{minipage}
- Represent the graphs in the previous problem in the following three ways:


- As a tuple $(V,E)$
- using an adjacency list
- using an adjacency matrix

- Draw a graph with the given adjacency matrix
\vspace{0.5cm}
\begin{multicols}{3}

- $\begin{bmatrix}
0 & 1 & 0\\
1 & 0 & 1\\
0 & 1 & 0\\
\end{bmatrix}$
- $\begin{bmatrix}
0 & 0 & 1 & 1\\
0 & 0 & 1 & 1\\
1 & 1 & 0 & 1\\
1 & 1 & 1 & 0
\end{bmatrix}$
- $\begin{bmatrix}
1 & 1 & 1 & 0\\
0 & 0 & 1 & 0\\
1 & 0 & 1 & 0\\
1 & 1 & 1 & 0
\end{bmatrix}$

\end{multicols} 
- What is the sum of the entries in a row of the adjacency matrix for an undirected graph? What is the sum of the entries in a column of the adjacency matrix for an undirected graph?


</details>