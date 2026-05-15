# Graph Isomorphisms


<div class="academic-env env-definition">
<span class="env-label">Definition 15.1</span>

Two graphs $G = (V,E)$ and $H = (W,F)$ are said to be isomorphic if there exists a bitjective map $\varphi: V \to W$ such that $\{v_1,v_2\}\in E$ iff $\{\varphi(v_1),\varphi(v_2)\}\in W$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 15.1</span>

The following two graphs do not look similar at the first glance.  


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_4797b41acd50ec883d1e89d32a7cd98b.png" alt="Figure" class="max-w-full h-auto" /></div>


However, we can show the two graphs are isomorphic, by producing an explicit bijection $\varphi(1) = 1$, $\varphi(2) = 3$, $\varphi(3) = 5$, $\varphi(4) = 2$, and $\varphi(5) = 4$.  If we relabel the vertices of the first graph in this fashion, we get 


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_569bb215a177c8239030b2c9136a5ceb.png" alt="Figure" class="max-w-full h-auto" /></div>


It is easy to check that two vertices are adjacent in this graph, iff they are in the second graph.

</div>


The above example is an example of a very important class of graphs called cycles.  I could guess the isomorphism by observing that 1-3-5-2-4-1 forms a cycle and accounts for all vertices and edges.


<div class="academic-env env-definition">
<span class="env-label">Definition 15.2</span>

Given an $n$, the cycle with $n$ vertices is the graph 
$$C_n = (\{v_1,v_2,\dots,v_n\},\{\{v_1,v_2\},\{v_2,v_3\},\dots,\{v_{n-1},v_n\},\{v_n,v_1\}\}).$$   


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_a8c4de743e11ad4383b10857845c71d4.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>



<div class="academic-env env-example">
<span class="env-label">Example 15.2</span>


The two graphs below do not look isomorphic, because in the second graph, there is a vertex of degree $1$, but the first graph has no vertex of degree $3$.  So, we would guess that the two graphs are not isomorphic.  


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_4113a025940165ea7a0235605001a9f9.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>


This is a much general idea.  We can prove that certain properties/attributes are preserved under isomorphisms.  For example, dimension is a property that is preserved under vector space isomorphism.  Such objects are called **invariants**.  These invariants are extremely handy when you want to prove two graphs are not isomorphic.  The most obvious invariants are ofcourse the number of vertices and edges.  Notice that an isomorphism is a bijection between the vertex sets, but also induces a bijection between the edge sets.


<div class="academic-env env-theorem">
<span class="env-label">Theorem 15.1</span>

If $\varphi$ is an isomorphism between $G = (V,E)$ and $H = (W,F)$, then $\Phi:E\to F$ defined as $\Phi(\{u,v\}) = \{\varphi(u),\varphi(v)\}$ is a bijection between the edges.

</div>


Thus, 

<div class="academic-env env-theorem">
<span class="env-label">Theorem 15.2</span>

If $G = (V,E)$ and $H = (W,F)$ are isomorphic, then $|V| = |W|$ and $|E| = |F|$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 15.3</span>

If $\varphi$ is an isomorphism between $G = (V,E)$ and $H = (W,F)$, then 

- $deg(v) = deg(\varphi(v))$
- $deg(w) = deg(\varphi^{-1}(w))$


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $deg(v) = n$.  Then, there exists $v_1,\dots,v_n$ such that $\{v,v_i\}\in E$ for all $i$.  Thus, $\{\varphi(v),\varphi(v_i)\} \in F$ for all $i$.  Moreover, as $\varphi$ is a bijection, $\varphi(v_i)\neq \varphi(v_j)$ for $i\neq j$.  Thus, the degree of $\varphi(v)$ is at least $n$.  If degree of $\varphi(v) > n$, then there exists $w\neq \varphi(v_i)$ such that $\{\varphi(v),w\}\in F$.  But, as $\varphi$ is an isomorphism, $w = \varphi(u)$ for some $u\in V$.  That is $\{\varphi(v),\varphi(u)\} \in F$ or $\{v,u\}\in E$.  But, this implies $v$ has $n+1$ neighbours contradicting the assumption that $deg(v) = n$.  Thus, $\deg(\varphi(v)) = n$.

Now consider $w\in W$.  As, $\varphi$ is an isomorphism, $w=\varphi(v)$ for some $v\in V$.  Thus, $deg(w) = deg(\varphi(v))$.  But, we already proved that $deg(\varphi(v)) = deg(v)$.  Finally, observe that $v=\varphi^{-1}(w)$, so $deg(v) = deg(\varphi^{-1}(w))$.  Hence $deg(w) = deg(\varphi(v))= deg(v)= deg(\varphi^{-1}(w))$.

</details>
</div>


More generally, the degree sequence of a graph is an isomorphism invariant


<div class="academic-env env-definition">
<span class="env-label">Definition 15.3</span>

The degree sequence of a graph is the sequence of degrees arranged in non-increasing order.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 15.3</span>

The degree sequence of the first graph in Example **15.2** is $(3,3,2,2,2)$ while the degree sequence of the second graph in Example **15.2** is $(4,3,2,2,1)$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 15.4</span>

If $G = (V,E)$ and $H = (W,F)$ are isomorphic, the degree sequence of $G$ is same as the degree sequence of $H$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Relabel the vertices of $G$ such that $deg(v_1) \geq deg(v_2) \geq \dots \geq deg(v_n)$.  Then, $deg(\varphi(v_1)) = deg(v_1) \geq deg(v_2) = deg(\varphi(v_2)) \geq \dots \geq deg(v_n) = deg(\varphi(v_n))$.  Thus, the degree sequence of $G$ and $H$ would be the same.

</details>
</div>


Although two isomorphic graphs will have the same degree sequence, two graphs having the same degree sequence need not be isomorphic.  


<div class="academic-env env-example">
<span class="env-label">Example 15.4</span>

The following two graphs have the same degree sequence, namely $(2,2,2,2,2,2)$, however, they are not isomorphic.  The easiest way is to observe that the second graph is connected, but the first is not! 


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_e5b87329a2cf95f6f1bb906aab5d62bf.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 15.5</span>

Connectedness is a graph isomorphism invariant.  More precisely, if $G = (V,E)$ and $H = (W,F)$ are isomorphic and $G$ is connected, then $H$ is also connected.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $\varphi: V\to W$.  Let $w$ and $w'$ be two arbitrary elements in $W$.  Then, there exists $v,v'\in V$ such that $\varphi(v) = (w)$ and $\varphi(v') = w'$.  As $G$ is a connected, there exists a sequence of vertices $v_0,\dots, v_n$ such that $v = v_0$, $v_n = v'$ and $\{v_i,v_{i+1}\}\in E$ for all $i\in \{0,\dots,n-1\}$.  Thus, $\{\varphi(v_i),\varphi(v_{i+1})\}\in F$ for all $i\in \{0,\dots,n-1\}$.  Moreover, $\varphi(v_0) = \varphi(v) = w$ and $\varphi(v_n) = \varphi(v') = w'$.  Thus, we have obtained a path from $v$ to $v'$.  As $w$ and $w'$ were arbitrary,  we have proved that $H$ is connected.

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 15.5</span>

To show that the following two graphs is a bit trickier.  In the first graph, the vertices having degree $3$ are $1,5,7,3$.  In the second graph, the vertices that have degree $3$ are $1,5,8,4$.  A vertex of degree $3$ has to be mapped to another vertex of degree $3$.  An isomorphism preserves degree.  So, $1$ has to be mapped to a vertex of degree $3$ - $1,5,8,4$.  Moreover, neighbours of $1$ will be mapped to neighbours of its image.  However, $1$ has two neighbours of degree $3$ in the first graph.  But, in the second graph, each of the vertices $1,5,8,4$ has only one neighbour of degree $3$.  Thus, we cannot map them correctly. 


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_5fd294848960dc7f5bee0e7ad12baf50.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>



<div class="academic-env env-example">
<span class="env-label">Example 15.6</span>

The following two graphs are complicated enough that we can't immediately find an isomorphism between them.  We can however look at the *complementary* graph which would help us construct an isomorphism.


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_aac769b130f3404ddbf0164ae9fb4808.png" alt="Figure" class="max-w-full h-auto" /></div>





</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 15.4</span>

Given a graph $G = (V,E)$, the complementary graph is the graph $G^C = (V,E^C)$ where $E^C = \{\{v,w\}|v,w\in V\}\setminus E$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 15.7</span>

The graph complements of the graphs in Example **??** are 


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_dd7d907bfc1b223a7e35eb469ea9fa5e.png" alt="Figure" class="max-w-full h-auto" /></div>


Define $\varphi$ defined as $\varphi(1) = 1$, $\varphi(3) = 5$, $\varphi(5) = 6$, $\varphi(2) = 2$, $\varphi(4) = 4,\varphi(6) = 3$.  Then it is evident that $\varphi$ is an isomorphism between $G$ and $H$ and also between $G^C$ and $H^C$.

</div>


More generally,


<div class="academic-env env-theorem">
<span class="env-label">Theorem 15.6</span>

If $\varphi:V\to W$ is an isomorphism between $G = (V,E)$ and $H=(W,F)$, then $\varphi$ is also an isomorphism between $G^C$ and $H^C$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 15.8</span>

To show that following two graphs are not isomorphic, we will show that the first graph is bipartite, while the second is not.  The proof that bipartedness is an invariant is left as an exercise.  Combining the three pieces we have the result.  


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_9453fc7d7340d2ef348ab50741aea35c.png" alt="Figure" class="max-w-full h-auto" /></div>




</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 15.5</span>

A graph $G = (V,E)$ is called a biparted graph, if we can write $V = V_1 \sqcup v_2$ (disjoint union) such that if $\{v,w\}\in E$, then either $v\in V_1$ and $w\in V_2$ or $v\in V_2$ and $w\in V_1$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 15.9</span>

The first graph in the previous example is a bipartite graph as we can write $V = \{1,3,5\} \sqcup \{2,4,6\}$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 15.10</span>

The second graph in Example **??** is not bipartite and we can prove it using a proof by contradiction.  Assume the contrary and further assume without loss of generality that $1\in V_1$.  Then, $2,6\in V_2$ as $\{1,2\},\{1,6\}\in E$.  But, $\{2,6\} \in E$.  So, there is an edge between two vertices in $V_2$.  A contradiction.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 15.6</span>

A graph $G = (V,E)$ is called complete bipartite, if there exists $V_1,V_2$ such that $V = V_1\sqcup V_2 $ and $E = \{\{v,w\}|v\in V_1, w\in V_2\}$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 15.11</span>

Both $G$ and $H$ from Example **??** are complete biparted graphs.

</div>




<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">15.1 Exercises</summary>



[1.]
- Determine if the following graphs are isomorphic.  Prove your claim


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_1885e8a45b2c72e5b733147ce607767c.png" alt="Figure" class="max-w-full h-auto" /></div>


- How many non-isomorphic simple graphs are there with $4$ vertices?  Prove your claim rigorously.  
- Determine if graphs $G$ and $H$ are isomorphic to each other.  Justify your claims rigorously.  


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_e0b5326814d74837fc3f3b061e81b933.png" alt="Figure" class="max-w-full h-auto" /></div>



- Determine whether the following two graphs  are isomorphic.  Prove your claim 



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_ac4dccc8dd27d08e0ede8740c3ca64f6.png" alt="Figure" class="max-w-full h-auto" /></div>


- Show that the existence of a cycle such that the sum of the degrees of the vertices in the cycle is $k$ is an invariant.
- Show that the property that a graph is bipartite is an invariant.
- Show that the number of connected components is an invariant.
- Show that if a graph contains an odd cycle, then it is not biparted.
- Prove that none of these five graphs are isomorphic: find invariants distinguishing them all from each other.


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_d90903bd2c6c031d83aad620819b89fd.png" alt="Figure" class="max-w-full h-auto" /></div>





</details>