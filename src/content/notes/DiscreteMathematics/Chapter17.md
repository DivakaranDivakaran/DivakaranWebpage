# Trees


<div class="academic-env env-definition">
<span class="env-label">Definition 17.1</span>

A connected acyclic graph is called a tree.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 17.1</span>

Family tree can be an example of a tree if we start from an individual and trace back their lineage.  For example, the family tree of Rama would look as follows


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_ad05bb995dbcc2f638d9a8c5675245af.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>


Similarly, if we start from an individual and trace forward their lineage (without looking at spouses), we get a tree.  However, if we include all members of a family and connect parent-child we don/t usually get a tree.


<div class="academic-env env-example">
<span class="env-label">Example 17.2</span>

The family tree of Sheldon would look as follows.


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_d4ec615347c3266587ef6b1759c3c977.png" alt="Figure" class="max-w-full h-auto" /></div>


Notice that this is not a tree, as we have the cycle George-Missy-Mary-Sheldon-George!

</div>




<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">17.1 Equivalent characterisations</summary>




<div class="academic-env env-definition">
<span class="env-label">Definition 17.2</span>

A graph is called maximally acyclic, if adding an edge (not present in the graph) creates a cycle.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 17.1</span>

A graph is a tree iff it is maximally acyclic.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Assume the graph is a tree.  Then clearly the graph is acyclic (and connected).  Suppose it was not maximally connected.  Then, there exists an edge $\{v,w\}$ which you can add to the graph without creating cycles.  If there was a path between $v$ and $w$, then adding this edge would create a cycle.  So, there was no path between $v$ and $w$ in the original graph.  This contradicts the assumption that the graph was connected.  Hence, our assumption that the graph was not maximally connected has to be wrong.  

Assume the graph is maximally acyclic.  Then clearly the graph is acyclic.  Let us assume the graph is not connected.  Then, there exists two vertices $v$ and $w$ such that there is no path between $v$ and $w$.  But, this would imply that adding the edge $\{v,w\}$ would not create any cycles.  This contradicts the assumption that the graph was maximally acyclic.

</details>
</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 17.3</span>

A graph is called minimally connected if removing any edge from the graph disconnects the graph.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 17.2</span>

A graph is a tree iff it is minimally connected.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Left as an exercise.

</details>
</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">17.2 Matroid</summary>


The above characterisations of a tree might have reminded you characterisation of basis of a vector space.  Let us recall


- A collection of vectors is called a basis if they are linearly independent and spans.
- A collection of vectors is called a basis if they are maximally linearly independent.
- A collection of vectors is called a basis if they form a minimal spanning set.


Clearly, the existence of a cycle is analogous to dependence and connectedness is analogous to spanning.  Interestingly the connection goes much deeper and the common abstraction is called a matroid. 

### Partial order
A partial order $\leq$ is a relation on a set $X$ that satisifies three properties:

- (Reflexive) $\forall x\in X$, $x \leq x$
- (Antisymmetric) If $x \leq y$ and $y\leq x$, then $x = y$
- (Transitive) If $x \leq y$ and $y\leq z$, then $x \leq z$



<div class="academic-env env-example">
<span class="env-label">Example 17.3</span>

The most obvious example is $\mathbb{R}, \leq$.  However, given any two real numbers $x$ and $y$ either $x\leq y$ or $y\leq x$.  This is not expected in general.  If any two members are related, then we call it a total order.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 17.4</span>

A partial order $(X,\leq)$ forms a lattice if

- (Join) given any two elements $x$ and $y$, there exists an element $x \lor y$ (join of $x$ and $y$) such that $x\leq x\lor y$ and $y \leq x\lor y$.  Moreover, if $x\leq z$ and $y\leq z$ then $x\lor y \leq z$.
- (Meet) given any two elements $x$ and $y$, there exists an element $x\land y$ (meet of $x$ and $y$) such that $x\land y \leq x$ and $x\land y \leq y$. Moreover, if $z\leq x$ and $z\leq y$ then $z\leq x\land y$.


</div>



<div class="academic-env env-example">
<span class="env-label">Example 17.4</span>

Consider a set $X$ and let $2^X$ be the power set of $X$.  The relation $\subseteq$ is a partial order on $2^X$.  You can find two subsets $A$, $B$ such that neither $A$ is a subset of $B$ nor $B$ is a subset of $A$.  So, it is not a total order.  Moreover

- Union $\cup$ acts as join
- Intersection $\cap$ acts as meet
- There is an element $\emptyset$ such that $\emptyset \leq A$ for all $A\in 2^X$ (often called the bottom)
- There is an element $X$ such that $A\subset X$ for all $A\in 2^X$ (often called top)


</div>


### Matroid of vectors and edges

A matroid is a lattice that is atomistic and semi modular.  We won't define what atomistic and semi modular are in general, but would explain what they are for the examples we are interested in.  

\begin{table}[htbp]
\centering
\renewcommand{\arraystretch}{1.8}
\begin{tabular}{| c | p{5.5cm} | p{6.5cm} |}
\hline
& \multicolumn{1}{c|}{**Vector spaces**} & \multicolumn{1}{c|}{**Graphs**} \\
\hline
& The relation of $\subseteq$ form a partial order on the collection of all vector subspaces of a vector space $V$ &  Let $G$ be a connected graph. A set of edges is closed if you cannot add any new edge from the original graph without connecting previously disconnected component.  The relation $\subseteq$ form a partial order on the collection of all closed sets of edges of $G$\\
& $\{0\}$ is the bottom & graph w/ no edges is the bottom \\
& $V$ is the top & The full graph is the top \\
\hline
\multirow{4}{*}{{\textcolor{red}{Lattice}}} 
& Intersection acts as the meet & Intersection acts as the meet \\
\cline{2-3}
& Direct sum acts as join.  Recall that union of two vector subspaces is not a subspace.  Direct sum is the smallest subspace containing the union of two subspaces & Union acts as join \\
\cline{2-3}

\hline
\multirow{2}{*}{{\textcolor{red}{Atomistic}}} 
& every subspace is direct sum of a collection of $\langle v \rangle$ & every closed set of edges is formed by taking union of individual atoms \\
& $\langle v \rangle$ are atoms & individual edges are atoms \\
\hline
{\textcolor{red}{Semi-modularity}}
& $\dim(U+W) = \dim(U) + \dim(W) - \dim(U \cap W)$ 
& Instead of dimension, we have a function $r$ on the collection of closed set of edges.  Let us define $r(X) = V - \text{no. of components in } X$.  Then, \newline 
$r(A \cup B) \leq r(A) + r(B) - r(A \cap B)$ \\
\hline
\end{tabular}
\end{table}



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">17.3 Spanning trees</summary>


The above parallel between vector spaces and graphs allows us to translate algorithms in linear algebra to algorithms in graph theory and vice versa.  We will see one example, deeper examples are beyond the scope of this course.


<div class="academic-env env-definition">
<span class="env-label">Definition 17.5</span>

A subgraph of a graph containing all its vertices and is a tree is called a spanning tree of the graph.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 17.5</span>


For example, in the figure below, the graph on the right is a spanning tree of the graph on the right.  


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_f095234424e4b25eb3eedffb13f94b82.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>


A spanning tree of a graph is analogous to a basis of a vector space from our earlier discussion.  Thus, algorithms to find basis should inform us how to find a spanning tree.  The most standard algorithm to find a basis is the following: 

- Choose an arbitrary vector $v\in V$ and define $S_1 = \{v\}$.
- If $\text{span}(S_k) = V$, $S_k$ is a basis.  Else, choose a vector $w\in V\setminus \text{span}(S_k)$. Define $S_{k+1} = S_k\cup \{w\}$.    


The exact same technique can be used to find a spanning tree of a connected graph $G = (V,E)$

- Choose an arbitrary edge $e\in E$ and define $S_1 = \{e\}$
- If $S_k$ is connected, $S_k$ is a tree.  Else, choose an edge $f\in E$ such that $S_k \cup \{f\}$ does contain any cycles.  Define $S_{k+1} = S_k \cup \{f\}$




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">17.4 Exercises</summary>



- Show that $(\mathbb{N},k)$ is a partial order if $|$ is defined as $a | b$ if there exists a natural number $k$ such that $b = ak$.  Does it form a lattice? 
- Prove that a graph is a tree iff it is minimally connected. 
- Prove the correctness of the algorithm to find a spanning tree.  More precisely, prove that if $H$ is a subgraph of $G$ that is not connected, then there exists an edge $f$ such that $H\cup \{f\}$ does not contain any cycles.  
- If you know a finite spanning set $S$, then we have the following algorithm to convert it to a basis: 

Let $S_1 = S$.  If $S_k$ is linearly independent, $S_k$ is a basis.  Else, there exists some vector $v\in S_k$ such that $v$ can be expressed as as a linear combination of vectors in $S_k$.  Define $S_{k+1} = S_k\setminus \{v\}$

Notice that a finite connected graph $G = (V,E)$ has a closed set of edges that connects the graph, namely $E$.  We can throw away some edges from $E$ to form a spanning tree.  Write an algorithm to do this inspired by the above algorithm to find a basis.  





</details>