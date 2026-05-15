# More graph invariants



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">16.1 Isomorphisms and Permutation matrices</summary>




<div class="academic-env env-definition">
<span class="env-label">Definition 16.1</span>

A permutation matrix is a matrix obtained by permuting the rows or columns of the identity matrix.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 16.1</span>

Let $n = 3$ and consider the permutation $f(1) = 2$, $f(2) = 3$, and $f(3) = 1$.  If we permute the columns of the $3\times 3$ identity matrix with respect to this permutation, we get the following matrix
$$\begin{bmatrix}
        0 & 1 & 0\\
        0 & 0 & 1\\
        1 & 0 & 0
    \end{bmatrix}.$$
On the other hand, if we permute the rows of the matrix, we get
$$\begin{bmatrix}
        0 & 0 & 1\\
        1 & 0 & 0\\
        0 & 1 & 0
    \end{bmatrix}.$$
Further notice that 
$$\begin{bmatrix}
        0 & 1 & 0\\
        0 & 0 & 1\\
        1 & 0 & 0
    \end{bmatrix}\begin{bmatrix}
        0 & 0 & 1\\
        1 & 0 & 0\\
        0 & 1 & 0
    \end{bmatrix} = \begin{bmatrix}
        1 & 0 & 0\\
        0 & 1 & 0\\
        0 & 0 & 1
    \end{bmatrix}.$$

</div>


More generally, given a permutation $f:I_n \to I_n$, we can construct the matrix $R_f$ by permuting the rows of the identity matrix.  Let $\delta$ be the function
$$\delta(i,j) = \begin{cases}
    1 & \text{if $i= j$}\\
    0 & \text{otherwise}
\end{cases}$$
Then, the $ij$-th entry of $R_f$ is $\delta(f(i),j)$ and Similarly, we can construct the matrix $C_f$ by permuting the columns of the identity matrix.  The $ij$-th entry of $C_f$ is $\delta(i,f(j))$.  Notice that $(R_f)^T = C_f$.  Further, the $ij$-th entry of $R_fC_f$ if $\sum_{k=1}^n \delta(f(i),k)\delta(k,f(j))$.  And the product $\delta(f(i),k)\delta(k,f(j))$ is non-zero iff $f(i) = k = f(j)$.  But, as $f$ is a bijection, $f(i) = f(j)$ iff $i=j$.  When $i=j$, $\sum_{k=1}^n \delta(f(i),k)\delta(k,f(j)) = 1$.  Thus, $R_fC_f$ is the identity matrix.  In other words, $C_f = (R_f)^{-1}$. 

Let us denote the $ij$-th entry of a matrix $A$ by $A_{ij}$.  Given a matrix $A$, $(R_fA)_{ij}$ is $\sum_{k=1}^n \delta(f(i),k)A_{kj} = A_{f(i)j}$.  Thus, multiplying by $R_f$ on the left permutes the rows of $A$.  Similarly, multiplying by $C_f$ on the right permutes the columns of $A$ - $(AC_f)_{ij} = \sum_{k=1}^n A_{ik}\delta(k,f(j)) = A_{if(j)}$.  Combining the two, we have $(R_fAC_f)_{ij} = A_{f(i)f(j)}$.  

Let $A$ be the adjacency matrix of a graph $G$, then $A_{ij}$ is $1$ if there is an edge between $i$ and $j$ and $0$ otherwise.  On the other hand, $(R_fAC_f)_{ij}$ is $1$ if there is an edge between $f(i)$ and $f(j)$.  Thus, this is the adjacency graph of the graph obtained by relabeling the vertices using $f$.  It is also evident that two graphs $G$ and $H$ with adjacency matrices $A$ and $B$ are isomorphic iff there exists some permutation $f$ such that $B = R_fAC_f$.   

Therefore, any property that is preserved under similarity is an invariant under graph isomorphism.  For instance, the eigenvalues of the adjacency matrix is such an important invariant that there is a field called \href{https://en.wikipedia.org/wiki/Spectral_graph_theory}{spectral graph theory} studying graphs using eigenvalues of the adjacency matrix.  However, even this is not a complete invariant - there are graphs whose adjacency matrices have same eigenvalues but are not isomorphic.  Graphs with matching eigenvalues are called cospectral graphs and wikipedia gives the following example of two cospectral graphs that are not isomorphic.



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_de68806db35ac944ccfe1d1d008bb1c3.png" alt="Figure" class="max-w-full h-auto" /></div>



Nonetheless, it allows us to distinguish graphs which we couldn't distinguish using the invariants so far.  It is most useful in distinguishing *trees* - a special type of graphs that will be the topic of the next unit. 


<div class="academic-env env-example">
<span class="env-label">Example 16.2</span>

(generated using Gemini AI) Notice that both the following graphs have no cycles, are not biparted and have the same degree sequences.


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_9c4ae60dde0a7dac3d323fb144c787f5.png" alt="Figure" class="max-w-full h-auto" /></div>



The adjacency matrix of $G$ and $H$ are 
$$ \begin{bmatrix} 
0 & 1 & 0 & 0 & 0 & 0\\ 
1 & 0 & 1 & 0 & 0 & 1\\ 
0 & 1 & 0 & 1 & 0 & 0\\ 
0 & 0 & 1 & 0 & 1 & 0\\ 
0 & 0 & 0 & 1 & 0 & 0\\
0 & 1 & 0 & 0 & 0 & 0\\ 
\end{bmatrix}\text{ and }
\begin{bmatrix} 
0 & 1 & 0 & 0 & 0 & 0\\ 
1 & 0 & 1 & 0 & 0 & 0\\ 
0 & 1 & 0 & 1 & 0 & 1\\ 
0 & 0 & 1 & 0 & 1 & 0\\ 
0 & 0 & 0 & 1 & 0 & 0\\
0 & 0 & 1 & 0 & 0 & 0\\ 
\end{bmatrix}$$
respectively.  Hence the characteristic polynomials are $x^6 - 5x^4 + 5x^2$ and $x^6 - 5x^4 + 5x^2 - 1$.  As the characteristic polynomials are not identical, the two graphs are not isomorphic.

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">16.2 Quantifying connectedness</summary>



We had discussed connectedness of graphs earlier.  However, even among connected graphs, we feel some graphs are more connected than others.  So, is there a way to quantify this notion.  There are two standard notions, namely, vertex connectivity and edge connectivity.


<div class="academic-env env-definition">
<span class="env-label">Definition 16.2 (Cut vertex)</span>

A vertex $v$ in $G = (V,E)$ is called a cut vertex if $G$ is connected, but $G - v$ is disconnected.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 16.3</span>

In the following graph, the vertex $3$ is a cut vertex.


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_ec2698d255e9e9c093faa9c8a08bf417.png" alt="Figure" class="max-w-full h-auto" /></div>




</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 16.3 (Cut edge)</span>

An edge $e$ in $G = (V,E)$ is called a cut edge if $G$ is connected, but $G - e$ is disconnected.

</div>




<div class="academic-env env-example">
<span class="env-label">Example 16.4</span>

The edge $\{3,4\}$ is a cut edge


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_6a7c06210f26aea2d723472ab87ac172.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>


Not all graphs have a cut edge or a cut vertex.  For example, the graph from Example **??** does not have a cut edge.  The minimum number of vertices or edges we need to remove to disconnect a graph are called vertex connectivity and edge connectivity respectively.  


<div class="academic-env env-definition">
<span class="env-label">Definition 16.4 (Vertex connectivity)</span>

We say a graph $G = (V,E)$ is $k$ vertex connected if there exists $k$ vertices $v_1,\dots,v_k$ such that $(V\setminus \{v_1,\dots,v_k\},\{e\in E : e\cap \{v_1,\dots,v_k\} = \emptyset\})$ is disconnected, but given any $k-1$ vertices $u_1,\dots,u_{k-1}$ the graph  $(V\setminus \{u_1,\dots,u_{k-1}\},\{e\in E : e\cap \{u_1,\dots,u_{k-1}\} = \emptyset\})$ is connected.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 16.5</span>

Notice that both vertices $3$ and $4$ are cut vertices for the first graph below.  But, the second graph does not have any cut vertices.  Thus, the vertex connectivity helps us distinguish the two graphs.  


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_a3c39797a6d954fd6c1dd9c89783234b.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 16.5 (Edge connectivity)</span>

We say a graph $G = (V,E)$ is $k$ edge connected if there exists $k$ edges $e_1,\dots,e_k$ such that $(V,E\setminus\{e_1,\dots,e_k\})$ is disconnected, but for any $k-1$ edges $f_1,\dots, f_{k-1}$ the graph $(V,E\setminus \{f_1,\dots,f_{k-1}\})$ is connected.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 16.6</span>

Now we will look at two graphs that both have $8$ vertices and each of the vertices have degree $3$.  We will show that the first of these two graphs have an edge connectivity of $2$ while the second has an edge connectivity of $3$ and hence the two are not isomorphic.

It is easy to see that removing any one edge does not disconnect either of the two graphs given below.  Further notice that removing $\{2,6\}$ and $\{4,8\}$ disconnects the first graph.  There are $3$ ways in which you can remove two edges from the second graph

- Both edges are on the same face.  In this case, exit the face containing these two edges to a parallel face.  All the vertices on the parallel face can now be accessed.  From the vertices on the parallel face, you can come back to the other vertices on the original face.  
- The edges are on different faces. Pick a face.  All the vertices of this face are accessible.  At least one of the faces is connected to a vertex on the parallel face.  Use that edge to go to the parallel face.  Every vertex on the parallel face is connected to the vertex you are currently in.

Thus, you cannot disconnect the graph by removing two edges.  But, we can disconnect by removing all $3$ edges incident on a vertex.


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_75334d687a14e26c861022121a9bc8a7.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">16.3 Exercises</summary>




- Show that similar matrices have same characteristic polynomial.
- Show that similar matrices have same determinant.  Use this property to distinguish the following two graphs.


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_0ba13c6fe3279644579456f9aa63fa32.png" alt="Figure" class="max-w-full h-auto" /></div>


- Show that similar matrices have same trace.  Further conclude that $tr(A^k)$ is a graph invariant.  Use this to distinguish the following two matrices.  (Example generated using Gemini AI)


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_af5fb27bf3fc1378d5ad1f69722ae51c.png" alt="Figure" class="max-w-full h-auto" /></div>


- If $A$ is the adjacency matrix of a graph $G$, show that $(A^k)_{ij}$ represents the number of $k$ element path from $i$ to $j$.  Thus, show that the $tr(A^k)$ denotes the number of cycles of length $k$.
- Show that vertex connectivity is an invariant.
- Show that edge connectivity is an invariant.




</details>