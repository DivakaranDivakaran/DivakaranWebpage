# Planar graphs and five/six colouring



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">14.1 New graphs from old</summary>



When you study a category of objects, after seeing a few examples, we should ask about procedures that help us construct new examples from existing examples.  While studying vector spaces you had subspaces and while studying rings you had subrings.  Similarly, we have a notion called subgraph and it has a very natural definition.   

<div class="academic-env env-definition">
<span class="env-label">Definition 14.1</span>

A graph $H = (W,F)$ is said to be a subgraph of $G = (V,E)$ if $W\subset V$ and $F\subset E$.

</div>


We will see many ways of constructing subgraphs from existing graphs, by throwing away vertices and/or edges.  


<div class="academic-env env-definition">
<span class="env-label">Definition 14.2</span>

Given a graph $G = (V,E)$ and $W\subset V$, we call the graph 
$$H = (W,\{e\in E : \text{both end points of $e$ belong to $W$}\})$$
the subgraph induced by $W$.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 14.3</span>

Given a graph $G = (V,E)$ and $e\in E$, we denote the graph 
$$H = (V,E \setminus \{e\})$$
by $G-e$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 14.1</span>

Let $V = \{1,2,3,4,5,6\}$ and $E = \{\{1,2\},\{1,3\}, \{2,3\}, \{2,4\}, \{4,5\}, \{4,6\},\{5,6\}\}$ and $G = (V,E)$.  Then $G - \{2,4\} = (\{1,2,3,4,5,6\}, \{\{1,2\},\{1,3\}, \{2,3\}, \{4,5\}, \{4,6\},\{5,6\}\})$



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_f1f2c424b7b223f9f75439ad744c91a4.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 14.4</span>

Given a graph $G = (V,E)$ and $v\in V$, we denote the graph 
$$H = (V\setminus \{v\},E \setminus \{e \in E : v \text{ is an end point of } e\})$$
by $G-v$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 14.2</span>

Let $V = \{1,2,3,4,5,6\}$ and $E = \{\{1,2\},\{1,3\}, \{2,3\}, \{2,4\}, \{4,5\}, \{4,6\},\{5,6\}\}$ and $G = (V,E)$.  Then $G - 2 = (\{1,3,4,5,6\}, \{\{1,3\}, \{4,5\}, \{4,6\},\{5,6\}\})$



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_310f75b8450ef9de1756f9c154275fd2.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 14.5</span>

Let $G = (V,E)$ be a graph and $e\in E$.  We can contract $e$ to obtain a new graph $H$.  Let $e = \{u,v\}$.  We obtain the vertex set of this new graph by removing $u$ and $v$ from the vertex set of $G$ and adding a new vertex $[u]$<span class="footnote-trigger" title="This notation is reminiscent of the notation for the equivalence class in other quotient constructions like $\mathbb{Z}/n\mathbb{Z}$.  Another option would be to denote this new vertex as $uv$."><sup>[*]</sup></span>.  That is, 
$$
\begin{align*}
        V_e &:= (V \setminus \{u,v\})\cup \{[u]\}
    \end{align*}
$$
The edge set of the new graph will not contain any edge incident on $u$ or $v$.  But for each edge $\{u,w\}$ and $\{v,w\}$ in $E$, we will add an edge $\{[u],w\}$.
$$
\begin{align*}
        E_e &:= (E \setminus \{e\in E : u \text{ or $v$ is an endpoint of $e$}\}) \cup \{\{[u],w\} : \{u,w\}\in E \text{ or } \{v,w\} \in E\}).
    \end{align*}
$$
And, $G \sim e = (V_e,E_e)$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 14.3</span>

Let $V = \{1,2,3,4,5,6\}$ and $E = \{\{1,2\},\{1,3\}, \{1,6\}, \{2,3\}, \{2,4\}, \{4,5\}, \{4,6\},\{5,6\}\}$ and $G = (V,E)$.  Then $G \sim \{1,2\} = (\{[1],3,4,5,6\}, \{\{[1],3\}, \{[1],6\}, \{[1],4\}, \{4,5\}, \{4,6\},\{5,6\}\})$



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_2a57650945c52f612dbb11c14d11d3c9.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 14.6</span>

Let $G = (V,E)$ and $H = (W,F)$ be two graphs.  Then we can construct a new graph $G \cup H = (V\cup W, E\cup F)$.

</div>


There are two possibilities - $V$ and $W$ intersect, $V$ and $W$ are disjoint.  We will see one example for each of the two cases.


<div class="academic-env env-example">
<span class="env-label">Example 14.4</span>


Let $G = (\{1,2,3,4,5\}, \{\{1,2\},\{1,3\}, \{2,3\}, \{2,4\}, \{4,5\}\})$ and $H = (\{4,5,6,7\}, \{\{4,7\},\{5,6\}\})$.  Then, $G\cup H = (\{1,2,3,4,5,6,7\},\{\{1,2\},\{1,3\}, \{2,3\}, \{2,4\}, \{4,5\}, \{4,7\},\{5,6\}\})$.



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_9f96ecd99b976b3854e82ce4e06f722f.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>



<div class="academic-env env-example">
<span class="env-label">Example 14.5</span>

Let $G = (\{1,2,3,4,5\}, \{\{1,2\},\{1,3\}, \{2,3\}, \{2,4\}, \{4,5\}\})$ and $H = (\{6,7,8,9\}, \{\{6,9\},\{7,8\}\})$.  Then, $G\cup H = (\{1,2,3,4,5,6,7,8,9\},\{\{1,2\},\{1,3\}, \{2,3\}, \{2,4\}, \{4,5\}, \{6,9\},\{7,8\}\})$.



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_661ce139c56fe78b045ada7a5b294b08.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>






</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">14.2 Planar graphs</summary>




<div class="academic-env env-definition">
<span class="env-label">Definition 14.7 (Planar graph)</span>

A graph is called planar, if we can draw it on a plane such that if two edges interesect, they intersect only at a vertex.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 14.8 (Connected Graph)</span>

A graph $G = (V,E)$ is said to be connected, if given any two vertices $v,w\in V$, there exists a sequence of vertices $v = v_0, v_1,\dots,v_n = w$ such that $\{v_i,v_{i+1}\}\in E$ for all $i\in \{0,\dots,n-1\}$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 14.6</span>

The graph $G$ in Example **14.4** is connected, while graph $H$ is not connected.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 14.1 (Euler)</span>

Let $G$ be a connected planar graph with $v$ vertices, $e$ edges.  If a planar representation of $G$ divides the plane into $f$ regions, then $v - e + f = 2$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We will first construct a sequence of graphs $G_1,G_2,\dots,G_e = G$.  Let $v_i$ denote the number of vertices in $G_i$, $e_i$ denote the number of edges in $G_i$ and let the number of regions $G_i$ divides the plane into be denoted by $f_i$.  We would construct $G_i$ such that 

- $v_1 + e_1 - f_1= 2$
- If $v_k -e_k + f_k = 2$ then $v_{k+1} - e_{k+1} + f_{k+1} = 2$

Therefore, $2 = v_e - e_e + f_e = v - e + f$, completing our proof.    

To construct $G_1$, choose any edge $d_1$ of $G$ and define $G_1 = (d_1,\{d_1\})$.  Assume $G_k = (V_k,E_k)$ has been constructed.  Choose an edge $d_{k+1}$ such that at least one of the vertices of $d_{k+1}$ belong to $V_k$.  And define $G_{k+1} = (V_k \cup d_{k+1},E_k \cup \{d_{k+1}\})$.  The connectedness of $G$ guarantee the existence of an edge $d_{k+1}$ for all $k<|E|$.

Notice that $f_1 = 1$.  Thus, $v_1 - e_1 + f_1 = 2 - 1 + 1 = 2$.  Now, assume $v_k - e_k + f_k = 2$.  We can choose a vertex $d_{k+1}$ in two different ways.  Both the vertices of $d_{k+1}$ may lie in $V_k$ or just one of the two vertices lie in $V_k$.  

If both the vertices of $d_{k+1}$ lie in $V_k$, the edge $d_{k+1}$ splits an existing region into two pieces.  Thus, $v_{k+1} = v_k$, $e_{k+1} = e_k + 1$, and $f_{k+1} = f_k + 1$.  Therefore, $v_{k+1} - e_{k+1} + f_{k+1} = v_k - (e_k + 1) + f_k + 1 = v_k - e_k + f_k = 2$.  If only one of the vertices lie on $V_k$, then drawing $d_{k+1}$ does not create any new regions.  Thus, $v_{k+1} = v_k + 1$, $e_{k+1} = e_k + 1$, and $f_{k+1} = f_k$.  Therefore, $v_{k+1} - e_{k+1} + f_{k+1} = v_k + - (e_k + 1) + f_k = v_k - e_k + f_k = 2$.

</details>
</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 14.9</span>

A planar representation of a graph $G$ divides the plane into regions.  The degree of each region is the weighted sum of edges bounding the region.  If an edge is a boundary of more than one region, it has weight $1$.  If an edge is completely contained in a region it has weight $2$

</div>



<div class="academic-env env-example">
<span class="env-label">Example 14.7</span>

Consider the following planar graph.  It splits the plane into two bounded regions and one unbounded region.  


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_26544f15949f4ac99fba8fb5235b854d.png" alt="Figure" class="max-w-full h-auto" /></div>


Each of the edges $\{1,2\}, \{2,3\},\{3,1\}$ forms the boundary of the unbounded region and the region bounded by $\{1,2\}, \{2,3\},\{3,1\}$.  Hence, the latter has degree $3$.  The region bounded by $\{2,4\}, \{4,5\},\{5,6\},\{6,7\}, \{7,2\}$ has the edge $\{2,9\}$ completely contained inside it.  The other edges also form the boundary of the unbounded region.  Hence, the degree of the region bounded by $\{2,4\}, \{4,5\},\{5,6\},\{6,7\}, \{7,2\}$ is $5+2 = 7$.  The unbounded region also has one edge, namely $\{6,8\}$ completely contained inside.  So, its degree is $8 + 2 = 10$.

</div>


As each edge either contributes a point to two regions or two points to one region, we have


<div class="academic-env env-theorem">
<span class="env-label">Theorem 14.2</span>

Given a planar graph with $e$ edges, the sum of degrees of regions described by it is $2e$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 14.3</span>

If a planar graph has more than $3$ vertices, then the degree of every region it describes is greater than or equal to $3$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

A bounded region cannot be formed with two edges as multiple edges between two vertices are not allowed.  Thus, every bounded region will have degree greater than or equal to $3$.  If there are bounded regions, then atleast $3$ of the edges should be part of the boundary of the unbounded region for the same reason.  If there are no bounded regions, then each edge has weight $2$.  And for a graph with more than $3$ vertices to be connected, it should atleast have $2$ edges.  Hence, the degree is greater than or $4$.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 14.4</span>

Let $G$ be a planar graph with $v$ vertices, $e$ edges that split the plane into $f$ regions.  If $v\geq 3$, then $e\leq 3v - 6$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We saw in this lecture that the sum of degrees of all regions add up to $2e$.  But, the degree of each region is greater than or equal to $3$.  So, $2e\geq 3f$ or $\frac{2}{3}e\geq f$.  But, $f = e-v+2$.  Thus, $\frac{2}{3}e\geq e-v+2$ or $e\leq 3v-6$.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 14.5</span>

Let $G$ be a planar graph then there is atleast one vertex whose degree is less than or equal to $5$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

If $G$ has less than $3$ vertices, then the statement is obvious.  So, let us assume that the number of vertices is greater than or equal to $3$.  We will prove the theorem for this case, using a proof by contradiction.  Assume, the degree of each vertex is greater than or equal to $6$.  We saw in the previous lecture that the sum of degrees of the vertices is also $2e$.  Thus, $2e\geq 6v$.  But, by the previous theorem, $e\leq 3v-6$ or $2e \leq 6v-12$.  Hence, $6v\leq 2e\leq 6v-12$ or $0\leq -12$.  A contradiction.  So, our assumption that the degree of each vertex is greater than or equal to $6$ has to be wrong.  So, there is atleast one vertex with degree $5$.

</details>
</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 14.10</span>

We say a planar graph $G$ is $n$ colourable, if we can colour the vertices using $n$ colours such that no two adjacent vertices have the same colour.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 14.6 (Six colouring theorem)</span>

Every planar graph is six colourable.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

If the number of vertices is less than $3$, then the theorem is obvious.  We will prove the general result by induction on the number of vertices.  Assume that every graph with $k$ vertices is $6$ colourable.  Let $G$ be a planar graph with $k+1$ vertices.  Then, by the previous result, there is a vertex $v$ in $G$ whose degree is less than or equal to $5$.  As $G-v$ has only $k$ vertices, it is $6$ colourable.  The neighbours of $v$ have used atmost $5$ colours (as there are only $5$ neighbours).  Colour $v$ with one of the left over colour.  Now, we have coloured $G$ such that no two neighbours have the same colour.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 14.7 (Five colouring theorem)</span>

Every planar graph is five colourable.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

If the number of vertices is less than $3$, then the theorem is obvious.  We will prove the general result by induction on the number of vertices.  Assume that every graph with $k$ vertices is $5$ colourable.  Let $G$ be a planar graph with $k+1$ vertices.  Then, by the previous result, there is a vertex $v$ in $G$ whose degree is less than or equal to $5$.  As $G-v$ has only $k$ vertices, it is $5$ colourable.  The neighbours of $v$ have used atmost $5$ colours (as there are only $5$ neighbours).

**Case 1 - The neighbours of $v$ have used atmost $4$ colours:** If the neighbours of $v$ have used atmost $4$ colours, as before, we can use the left over colour to colour $v$.  

**Case 2 - All $5$ colours were used to colour neighbours of $v$:**  We will show that we can recolour to ensure that only four colours to colour the neigbours of $v$.  Let us number the neighbours of $v$ and say that $v_i$ has colour $c_i$.  



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_b9c8f127453610505616be40a946b61d.png" alt="Figure" class="max-w-full h-auto" /></div>


Let $V_{ij} = \{w\in V\setminus\{v\} : w \text{ has colour $c_i$ or $c_j$}\}$, $E_{ij} = \{e\in E: e\subset V_{ij}\}$ and let $G_{ij} = (V_{ij}, E_{ij})$.  Now we can consider two cases:

**Case 2a - $v_1$ and $v_3$ are not connected in $G_{13}$:** Let $W$ be the set of all vertices in $G_{13}$ that are connected to $v_3$.  If an element of $W$ was originally coloured $c_1$, recolour it with $c_2$.  If an element of $W$ was originally coloured $c_2$, recolour it with $c_1$.  Now, $v_1$ and $v_3$ has the same colour, so we have one colour (namely $c_3$) that is unused.  Give $v$ colour $c_3$.

**Case 2b - $v_1$ and $v_3$ are not connected in $G_{13}$:**  Notice that $V_{24}$ and $V_{13}$ do not share any vertices.  Thus, if $v_2$ and $v_4$ are connected in $V_{24}$ and edge in $V_{24}$ and an edge in $V_{13}$ will intersect.  But, this is not allowed as we have a planar represenation.  Hence, $v_2$ and $v_4$ cannot be connected in $V_{24}$.  Let $W$ be the set of all vertices in $G_{24}$ that are connected to $v_4$.  If an element of $W$ was originally coloured $c_2$, recolour it with $c_4$.  If an element of $W$ was originally coloured $c_4$, recolour it with $c_2$.  Now, $v_2$ and $v_4$ has the same colour, so we have one colour (namely $c_4$) that is unused.  Give $v$ colour $c_4$.

</details>
</div>







</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">14.3 Exercises</summary>



[1.]
- Let $K_n$ denote the complete graph with $n$ vertices.  Show that

- Show that $K_1$, $K_2$, $K_3$, and $K_4$ are planar by giving an explicit planar represenatation.
- Show that $K_5$ is not a planar graph.

- Let $V = \{1,2,3,4,5,6\}$ and $E = \{\{1,2\},\{1,3\}, \{1,6\}, \{2,3\}, \{2,4\}, \{4,5\}, \{4,6\},\{5,6\}\}$ and $G = (V,E)$.  Describe all subgraphs of $G$.


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_b4ced57e06d166d59a0de78de9120594.png" alt="Figure" class="max-w-full h-auto" /></div>


- Let $G$ be the graph described below.  


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_3a371620a0b353cc7c0f09fb4a9cd995.png" alt="Figure" class="max-w-full h-auto" /></div>


Describe the following graphs pictorially **or** as a tuple (V,E) **or** using the adjacency matrix.

- $G - 5$
- $G - \{3,5\}$
- The graph obtained from $G$ by contracting the edge $\{3,5\}$.



</details>