# Linear maps

Vector spaces were introduced to serve as domains and codomains of "linear" functions.  Thus, it would be a waste to not study linear maps.  


<div class="academic-env env-definition">
<span class="env-label">Definition 4.1</span>

Given two vector spaces $(V,+,.)$ and $(W,\oplus,\otimes)$, a function $L:V\to W$ is called linear if 

- $L(u+v) = L(u) \oplus L(v)$
- $L(\alpha .v) = \alpha \otimes L(v)$


</div>


We have seen several examples of linear functions from $\mathbb{R}^m$ to $\mathbb{R}^n$.  Let us now look at some examples of linear maps between more abstract vector spaces.


<div class="academic-env env-example">
<span class="env-label">Example 4.1</span>

Let $\mathcal{P}$ be the vector space of polynomials.  Then, the function $D: \mathcal{P}\to \mathcal{P}$ defined as $$D(a_0+\dots + a_nx^n) = a_1 + 2a_2 x + \dots na_n x^n$$ is a linear map.  If you want to restrict your attention to finite dimensional vector space, you can restrict the domain to $\mathcal{P}(n)$.  Notice that, if a polynomial $p$ has degree $n$, then degree of $D(p)$ is less than or equal to $n-1$.  Thus, $D:\mathcal{P}(n)\to \mathcal{P}(n-1)$ is also a linear map.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 4.2</span>

Let $\mathcal{P}$ be the vector space of polynomials.  Then, the function $I: \mathcal{P}\to \mathcal{P}$ defined as $$I(a_0+\dots + a_nx^n) = a_0 x + \frac{a_1}{2}x^2 + \frac{a_2}{3} x^3 + \dots \frac{a_n}{n+1} x^{n+1}$$ is a linear map.  If you want to restrict your attention to finite dimensional vector space, you can restrict the domain to $\mathcal{P}(n)$.  Notice that, if a polynomial $p$ has degree $n$, then degree of $I(p)$ is less than or equal to $n+1$.  Thus, $I:\mathcal{P}(n)\to \mathcal{P}(n+1)$ is also a linear map.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.1</span>

Let $(V,+,.)$ and $(W,\oplus,\otimes)$ be two vector spaces.  Then, $L(0) = 0$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

By Theorem **3.3** $0.v = 0$ for all vector $v$.  As $L$ is linear, $L(0) = L(0.v) = 0\otimes L(v)$.  Applying Theorem **3.3** again, we get $L(0) = 0$.

</details>
</div>




<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">4.1 Null set and Range</summary>




<div class="academic-env env-definition">
<span class="env-label">Definition 4.2</span>

Let $(V,+,.)$ and $(W,\oplus,\otimes)$ be two vector spaces and $L:V\to W$ be a linear map.  Then, the range or image of $L$ denoted as $Im(L)$ is the subset $\{L(v) \ | \ v\in V\}$.  Note that $Im(L)$ is a subspace because

- $0 = L(0)\in Im(L)$
- If $w_1,w_2\in Im(L)$, then there exits $v_1,v_2\in V$ such that $w_1 = L(v_1)$ and $w_2 = L(v_2)$.  Thus, $w_1 \oplus w_2 = L(v_1) \oplus L(v_2) = L(v_1 + v_2)\in Im(L)$.
- If $w\in Im(L)$, then there exists $v\in V$ such that $L(v) = w$.  Thus, $\alpha \otimes w = \alpha \otimes L(v) = L(\alpha v)\in Im(L)$.  


</div>


The following theorem is then obvious


<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.2</span>

Let $(V,+,.)$ and $(W,\oplus,\otimes)$ be two vector spaces and $L:V\to W$ be a linear map.  Then, $L$ is surjective iff $Im(L) = W$.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 4.3</span>

Let $(V,+,.)$ and $(W,\oplus,\otimes)$ be two vector spaces and $L:V\to W$ be a linear map.  Then, the null space or kernel of $L$ denoted as $Ker(L)$ or $Null(L)$ is the subset $\{v\in V \ | \ L(v) = 0\}$.  Note that $Ker(L)$ is a subspace because

- $L(0) = 0$
- If $v_1,v_2\in Ker(L)$, then $L(v_1) = 0 = L(v_2)$.  Thus, $L(v_1 + v_2) = L(v_1)\oplus L(v_2) = 0 \oplus 0 = 0$.  Hence $v_1 + v_2 \in Ker(L)$. 
- If $v\in Ker(L)$, then $L(\alpha .v) = \alpha \otimes L(v) = \alpha \otimes 0 = 0$.  Thus, $\alpha . v\in Ker(L)$.  


</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.3</span>

Let $(V,+,.)$ and $(W,\oplus,\otimes)$ be two vector spaces and $L:V\to W$ be a linear map.  Then, $L$ is injective iff $Ker(L) = \{0\}$.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Assume $L$ is injective.  We already proved that $L(0) = 0$.  Thus, if $v\in V$ and $L(v) = 0 = L(0)$, then $v=0$ by injectivity of $L$.  Thus, $Ker(L) = \{0\}$.  

Now assume $Ker(L) = \{0\}$.  To show $L$ is injective, we would assume $L(v) = L(w)$ and prove $v=w$.  If $L(v) = L(w)$, then $L(v) \oplus (-1)\otimes L(w) = 0$.  Thus, then $L(v + (-1).w) = L(v) \oplus (-1)\otimes L(w) = 0$.  Thus, $v + (-1).w\in Ker(L) = \{0\}$.  Thus, $v=w$.

</details>
</div>


We saw that given a linear map $L:V\to W$, $Ker(L)$ is a subspace of $V$.  It is therefore natural to ask if given a subspace $U$ of a (finite dimensional vector space)<span class="footnote-trigger" title="You can ask the question for more general vector spaces, but the answer is a lot harder"><sup>[*]</sup></span> $(V+,.)$, does there exists a vector space $(W,\oplus,\otimes)$ and a linear map $L:V\to W$ such that $Ker(L) = U$?  Before answering the general question, it might be useful to work with some examples.


<div class="academic-env env-example">
<span class="env-label">Example 4.3</span>

Let $V= \mathbb{R}^2$ and let $U = \{(x,mx) \ | \ x\in \mathbb{R}\}$.  Then note that $L:\mathbb{R}^2 \to \mathbb{R}$ defined as $L(x,y) = y-mx$ does the trick - in other words, $Ker(L) = U$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 4.4</span>

Let $V = \mathbb{R}^3$ and let $U = \{(x,y,z) \ | \ 3x+2y+4z = 0\}$.  Then, $L:\mathbb{R}^3\to \mathbb{R}$ defined as $L(x,y,z) = 3x+2y+4z$ does the trick.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 4.5</span>

Let $V = \mathbb{R}^3$ and let $U = \{(x,y,z) \ | \ 3x+2y+4z = 0 \text{ and } y+z = 0\}$.  Then, $L:\mathbb{R}^3\to \mathbb{R}^2$ defined as $L(x,y,z) = (3x+2y+4z,y+z)$ does the trick.

</div>


In the above two examples, the subspace $U$ was given in a comfortable form which enabled us to find the function quickly. 


<div class="academic-env env-example">
<span class="env-label">Example 4.6</span>

Let $V = \mathbb{R}^3$ and let $U = \text{Span}((1,2,3))$.  Of course, we could express this subspace as the solution of two linear equations (or intersection of two planes), but we will take a different approach.  We note that the basis of $U$ can be extended to form a basis of $V$, namely, $((1,2,3),(0,1,0),(0,0,1))$ forms a basis of $V$.  Now, given any vector $(x,y,z)$, note that $(x,y,z) = x(1,2,3) + (y-2x)(0,1,0) + (z-3x)(0,0,1)$.  As $(1,2,3)\in Ker(L)$, we would certainly want $L(1,2,3) = 0$.  Moreover, we want $(L(0,1,0),L(0,0,1))$ to be linearly independent if we want $L$ to be injective.  Thus, the codomain should be atleast two dimensional.  Hence we may assume WLOG that the codomain is $\mathbb{R}^2$ and $L(0,1,0) = (1,0)$ and $L(0,0,1) = (0,1)$.  Thus,
$$
\begin{align*}
L(x,y,z) &= L(x(1,2,3) + (y-2x)(0,1,0) + (z-3x)(0,0,1)) \\
&= xL(1,2,3) + (y-2x)L(0,1,0) + (z-3x)L(0,0,1) \\
&= 0 + (y-2x)(1,0) + (z-3x)(0,1) \\
&= (y-2x,z-3x)
\end{align*}
$$

</div>


The approach in the previous example, guides the proof of the more general result


<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.4</span>

Let $(V+,.)$ be a finite dimensional vector space and let $U$ be a subspace.  Then, there exists a vector space $(W,\oplus,\otimes)$ and a linear map $L:V\to W$ such that $Ker(L) = U$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $U$ is a subspace of $V$, by Theorem **3.18**, $U$ is finite dimensional and $dim(U)\leq dim(V)$.  Let $(v_1,\dots, v_k)$ be a basis for $U$.  Using Theorem **3.14**, we can extend this list to form a basis $(v_1,\dots,v_n)$.  Therefore given any $v\in V$, there exists $\alpha_1,\dots,\alpha_n\in \mathbb{R}$ such that $v = \alpha_1 v_1 + \dots + \alpha_n v_n$.  Define $L:V\to \mathbb{R}^{n-k}$ as $L(\alpha_1 v_1 + \dots + \alpha_n v_n) = (\alpha_{k+1},\alpha_{k+2},\dots,\alpha_n)$.  Clearly, $L(\alpha_1 v_1 + \dots + \alpha_n v_n) = 0$ iff $(\alpha_{k+1},\alpha_{k+2},\dots,\alpha_n) = 0$.  That is, 
$$v = \alpha_1 v_1 + \dots + \alpha_n v_n = \alpha_1 v_1 + \dots + \alpha_k v_k \in \text{Span}(v_1,\dots,v_k) = U.$$

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.5 (Rank nullity theorem)</span>

Let $(V,+,.)$ and $(W,\oplus,\otimes)$ be two finite dimensional vector spaces and $L:V\to W$ be a linear map.  Then, $dim(Ker(L)) + dim(Im(L)) = dim(V)$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We know that $Ker(L)$ is a subspace of $V$.  Thus, by Theorem **3.18**, $Ker(L)$ has some basis $(v_1,\dots,v_k)$.  Thus, $(v_1,\dots,v_k)$ is linearly independent.  Therefore, by Theorem **3.14**, we can extend $(v_1,\dots,v_k)$ to a list $(v_1,\dots,v_n)$ which form a basis of $V$.  Let $L(v_{k+1}) = w_{k+1}$, $L(v_{k+2}) = w_{k+2},\dots$ $L(v_n) = w_n$.  As $(v_1,\dots,v_n)$ is a basis of $V$, given any vector $v\in V$ there exists $(\alpha_1,\dots,\alpha_n)\in \mathbb{R}^n$ such that $v = \alpha_1 v_1 + \dots + \alpha_n v_n$.  As $L$ is linear,
$$
\begin{align*}
L(v) &= \left(\alpha_1 \otimes L(v_1)\right) \oplus \dots \oplus \left(\alpha_n \otimes L(v_n)\right)\\
&= \left(\alpha_1 \otimes 0\right) \oplus \dots \oplus \left(\alpha_k \otimes 0\right) \oplus \left(\alpha_{k+1} \otimes w_{k+1}\right) \oplus \dots \oplus \left(\alpha_n \otimes w_n\right)\\
&= \left(\alpha_{k+1} \otimes w_{k+1}\right) \oplus \dots \oplus \left(\alpha_n \otimes w_n\right).
\end{align*}
$$
As $v$ was arbitrary, this implies that $Im(L) = \text{Span}(w_{k+1},\dots,w_n)$.  Moreover, if $\left(\alpha_{k+1} \otimes w_{k+1}\right) \oplus \dots \oplus \left(\alpha_n \otimes w_n\right) = 0$, then, $L(\alpha_{k+1} v_{k+1} + \dots + \alpha_n v_n) = \left(\alpha_{k+1} \otimes w_{k+1}\right) \oplus \dots \oplus \left(\alpha_n \otimes w_n\right) = 0$.  That is $\alpha_{k+1}v_{k+1} + \dots + \alpha_n v_n \in Ker(L)$.  As $(v_1,\dots,v_k)$ is a basis of $Ker(L)$, there exists $(\alpha_1,\dots,\alpha_k)\in \mathbb{R}^k$ such that $\alpha_1 v_1 + \dots + \alpha_k v_k = \alpha_{k+1}v_{k+1} + \dots + \alpha_n v_n$.  In other words, $\alpha_1 v_1 + \dots + \alpha_k v_k + (-\alpha_{k+1})v_{k+1} + \dots + (-\alpha_n) v_n = 0$.  As $(v_1,\dots,v_n)$ is linearly independent, this would imply that $\alpha_i = 0$ for all $i \in \{1,\dots,n\}$.  Thus, in particular $(\alpha_{k+1},\dots,\alpha_n) = 0$.  Hence, $(w_{k+1},\dots,w_n)$ is linearly independent.  Therefore, $(w_{k+1},\dots,w_n)$ is a basis for $Im(L)$.  Thus, $dim(Ker(L)) + dim(Im(L)) = k + (n-k) = n = dim(V)$.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.6</span>

Let $(V,+,.)$ and $(W,\oplus,\otimes)$ be two finite dimensional vector spaces and $L:V\to W$ be a linear map.  If $(v_1,\dots,v_k)$ is linearly independent in $V$ and $L$ is injective, then $(L(v_1),\dots,L(v_k))$ is linearly independent in $W$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Assume $\alpha_1 L(v_1) + \dots + \alpha_k L(v_k) = 0$.  Then, 
$$
\begin{align*}
L(\alpha_1 v_1 +\dots + \alpha_k v_k) = \left(\alpha_1\otimes L(v_1)\right) \oplus \dots \oplus \left(\alpha_k \otimes L(v_k)\right) = 0
\end{align*}
$$
Thus, $\alpha_1 v_1 +\dots + \alpha_k v_k\in Ker(L) = \{0\}$ as $L$ is injective.  As $(v_1,\dots,v_k)$ is linearly independent, this would imply that $(\alpha_1,\dots,\alpha_k) = 0$.  Thus, $(L(v_1),\dots,L(v_k))$ is linearly independent.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.7</span>

Let $(V,+,.)$ and $(W,\oplus,\otimes)$ be two finite dimensional vector spaces and $L:V\to W$ be a linear map.  If $\text{Span}(v_1,\dots,v_k) = V$ and and $L$ is surjective, then $\text{Span}(L(v_1),\dots,L(v_k)) = W$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $L$ is surjective, given any $w\in W$, there exists a $v\in V$ such that $L(v) = w$.  As $\text{Span}(v_1,\dots,v_k) = V$, there exists $(\alpha_1,dots,\alpha_k)\in \mathbb{R}^k$ such that $v = \alpha_1 v_1 + \dots + \alpha_k v_k$.  Thus, 
$$w = L(v) = L(\alpha_1 v_1 + \dots + \alpha_k v_k) = \left(\alpha_1\otimes L(v_1)\right) \oplus \dots \oplus \left(\alpha_k \otimes L(v_k)\right) \in \text{Span}(L(v_1),\dots,L(v_k)).$$
As $w\in W$ was arbtitrary, $\text{Span}(L(v_1),\dots,L(v_k)) = W$.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.8</span>

Let $(V,+,.)$ and $(W,\oplus,\otimes)$ be two finite dimensional vector spaces and $L:V\to W$ be a linear map.  If $dim(V)>dim(W)$, then $L$ is not injective.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

The rank nullity theorem tells us that $dim(Ker(L)) = dim(V) - dim(Im(L))$.  But, by Theorem **3.18**, $dim(Im(L)) \leq dim(W)$.  Thus, $$dim(Ker(L)) = dim(V) - dim(Im(L)) \geq dim(V) - dim(W) > 0.$$
Therefore, $Ker(L)\neq \{0\}$ and thus by Theorem **4.3**, $L$ is not injective.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.9</span>

A system of $n$ equations in $m$ unknowns
$$
\begin{align*}
a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_m &= 0\\ \nonumber
a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_m &= 0\\ \nonumber
.\\ \nonumber
.\\ \nonumber
.\\ \nonumber
a_{n1} x_1 + a_{n2} x_2 + \dots + a_{nm} x_m &= 0\\ \nonumber
\end{align*}
$$
has a non-trivial solution if $m>n$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Define $L:\mathbb{R}^m \to \mathbb{R}^n$ as
$$L(x_1,\dots,x_n) = (a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_m,\dots,a_{n1} x_1 + a_{n2} x_2 + \dots + a_{nm} x_m).$$
Notice that the set of solutions of the system is equal to $Ker(L)$.  But, the previous theorem tells us that $L$ cannot be injective if $m>n$.  Thus, $Ker(L) \neq \{0\}$ and hence we have non-trivial solutions.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.10</span>

Let $(V,+,.)$ and $(W,\oplus,\otimes)$ be two finite dimensional vector spaces and $L:V\to W$ be a linear map.  If $dim(V)<dim(W)$, then $L$ is not surjective.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

The rank nullity theorem tells us that $dim(Im(L)) = dim(V) - dim(Ker(L)) \leq dim(V)< dim(W)$. Thus, $Im(L) \neq W$ and hence $L$ is not surjective.

</details>
</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">4.2 Isomorphisms</summary>




<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.11</span>

Let $(V,+,.)$ and $(W,\oplus,\otimes)$ be two vector spaces and $L:V\to W$ be a bijective linear map.  Then, $L^{-1}$ is a linear map.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $w_1,w_2\in W$.  Let $L^{-1}(w_1) = v_1$ and $L^{-1}(w_2) = v_2$.  That is, $L(v_1) = w_1$ and $L(v_2) = w_2$.  Thus,
$$
\begin{align*}
L^{-1}(w_1+w_2) &= L^{-1}(L(v_1) + L(v_2)) = L^{-1}(L(v_1 + v_2))\\
&=v_1 + v_2 = L^{-1}(w_1) + L^{-1}(w_2)
\end{align*}
$$
Let $w\in W$ and let $v = L^{-1}(w)$.  That is $L(v) = w$.  Thus,
$$
\begin{align*}
L^{-1}(\alpha\otimes w) &= L^{-1}(\alpha \otimes L(v)) = L^{-1}(L(\alpha . v)) = \alpha .v = \alpha . L^{-1}(w)
\end{align*}
$$

</details>
</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 4.4</span>

Let $(V,+,.)$ and $(W,\oplus,\otimes)$ be two vector spaces.  A bijective linear map $L:V\to W$ is called an isomorphism.  We say $V$ and $W$ are isomorphic if there exists an isomorphism $L:V\to W$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 4.7</span>

Let $\mathcal{L}(\mathbb{R}^3,\mathbb{R}^2)$ be the vector space of linear functions from $\mathbb{R}^3$ to $\mathbb{R}^2$.  Then, $\mathcal{L}(\mathbb{R}^3,\mathbb{R}^2)$ is isomorphic to $M_2^3(\mathbb{R})$ - TO BE COMPLETED

</div>


From Theorem **4.10** and Theorem **4.8**, we have the following result


<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.12</span>

Let $(V,+,.)$ and $(W,\oplus,\otimes)$ be two finite dimensional vector spaces.  If $V$ and $W$ are isomorphic, then $dim(V) = dim(W)$.

</div>


Interestingly, its converse is also true


<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.13</span>

Let $(V,+,.)$ and $(W,\oplus,\otimes)$ be two finite dimensional vector spaces.  If $dim(V) = dim(W)$, then $V$ and $W$ are isomorphic.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $(v_1,\dots,v_n)$ and $(w_1,\dots,w_n)$ be a basis for $V$ and $W$ respectively.  Define 
$$L(\alpha_1 v_1 +\dots +\alpha_n v_n) = \left( \alpha_1 \otimes w_1\right) \oplus \dots \oplus \left( \alpha_n \otimes w_n\right).$$ 
Clearly $L$ is linear.  Injectivity of $L$ follows from the linear indepdendence of $(w_1,\dots,w_n)$ and surjectivity of $L$ follows from the fact that $\text{Span}(w_1,\dots,w_n) = W$.

</details>
</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 4.1</span>

Find an isomorphism from $\text{span}(\{(1,2,3),(4,5,6),(13,14,15)\})$ to $\mathbb{R}^2$ (and prove it is an isomorphism).

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 4.2</span>

Find an isomorphism from $\text{span}(\{(1,2,3),(4,5,6),(13,14,13)\})$ to $\mathbb{R}^3$ (and prove it is an isomorphism).

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 4.3</span>

A function $f:\mathbb{R}^2 \to \mathbb{R}$ is called a Lakhan functions if $f$ is linear and $f(1,2) = 4$ and $f(4,2) = 1$.  Show that there is a unique Lakhan function and find it.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 4.4</span>

Let $\mathcal{P}(3)$ be the vector space of all polynomials of degree less than or equal to $3$.  Show that $\mathcal{P}(3)$ is isomorphic to $\mathbb{R}^4$ by explicitly constructing an isomorphism $L: \mathcal{P}(3) \to \mathbb{R}^4$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 4.5</span>

Let $U = \{f\in \mathcal{F}(\mathbb{N}, \mathbb{R}) \ | \ f(n) = 0 \ \forall n\geq 10\}$.  Show that $U$ is isomorphic to $\mathbb{R}^9$ by explicitly constructing an isomorphism $L: U \to \mathbb{R}^9$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 4.6</span>

Suppose $V$ is a finite dimensional vector space and $U$ its subspace.  Let $f:U \to W$ be a linear map.  Show that you can find a linear map $F:V\to W$ such that $F|_U = f$.  Is the function $F$ unique?

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 4.7</span>

Let $(V,+,.)$ be a vector space and $U$ a subspace of $V$.  Does there exist a vector space $(W,\oplus,\otimes)$ and a linear map $L:W\to V$ such that $Im(L) = U$?

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">4.3 Matrix associated to a linear map</summary>




<div class="academic-env env-definition">
<span class="env-label">Definition 4.5</span>

Let $V$ and $W$ be finite dimensional vector spaces and let $B_1 = (v_1,\dots,v_m)$ and $B_2 = (w_1,\dots,w_n)$ be basis of $V$ and $W$ respectively.  Further, let $L:V\to W$, be a linear map.  Notice that as $L(v_j)\in W$, we can find constants $a_{ij}$ for $i\in {1,\dots,n}$ such that $L(v_j) = \sum_{i=1}^n a_{ij} w_i$.  The matrix 
$$\begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1m}\\
a_{21} & a_{22} & \dots & a_{2m}\\
. & . & \dots & .\\
. & . & \dots & .\\
a_{n1} & a_{n_2} & \dots & a_{nm}\\
\end{bmatrix}$$
is called the matrix of the linear transformation $L$ with respect to the basis $B_1$ on $V$ and $B_2$ on $W$ and is denoted by $[L]_{B_1}^{B_2}$.

</div>


To avoid the cumbersome notation, $\begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1m}\\
a_{21} & a_{22} & \dots & a_{2m}\\
. & . & \dots & .\\
. & . & \dots & .\\
a_{n1} & a_{n_2} & \dots & a_{nm}\\
\end{bmatrix}$,
we would often represent an $n\times m$ matrix whose $ij$-th entry is $a_{ij}$ as $(a_{ij})_{n\times m}$.  This allows us to express the product of two matrices also in a convenient form.  Let $A$ be an $m\times n$ matrix $(a_{ij})$ and $B$ be an $n\times p$ matrix, then $AB = C$ is a $m\times p$ matrix whose $ik$-th entry is $c_{ik} = \sum_{j=1}^n a_{ij}b_{jk}$.  As we saw earlier, the matrix multiplication is so defined to ensure the following theorem is true.    


<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.14</span>

Let $U$, $V$, and $W$ be finite-dimensional vector spaces and let $B_1 = (u_1,\dots,u_m)$, $B_2 = (v_1,\dots,v_n)$, and $B_3 = (w_1,\dots,w_p)$ be basis of $U$, $V$, and $W$ respectively.  Further, let $S:U\to V$ and $T:V\to W$ be two linear maps.  Then, 
$$[T\circ S]_{B_1}^{B_3} = [T]_{B_2}^{B_3}[S]_{B_1}^{B_2}.$$


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $[T]_{B_2}^{B_3} = (a_{ij})$ and let $[S]_{B_1}^{B_2} = (b_{jk})$.  Thus,
$$
\begin{align*}
T\circ S(u_k) &= T(S(u_k)) = T\left(\sum_{j=1}^n b_{jk} v_j\right)\\
&= \sum_{j=1}^n b_{jk} T(v_j) = \sum_{j=1}^n b_{jk} \left(\sum_{i=1}^p a_{ij} w_i\right)\\
&= \sum_{i=1}^p \left(\sum_{k=1}^n a_{ij}b_{jk} \right) w_i
\end{align*}
$$
Therefore if $[T\circ S]_{B_1}^{B_3} = (c_{ij})$, then $c_{ij} = \sum_{k=1}^n a_{ij}b_{kj}$, which is also the $ij$-th entry of $[T]_{B_2}^{B_3}[S]_{B_1}^{B_2}$.  Hence, $[T\circ S]_{B_1}^{B_3} = [T]_{B_2}^{B_3}[S]_{B_1}^{B_2}$.

</details>
</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">4.4 Change of coordinates - an example</summary>



Let $R$ be the reflection about the line passing through $(0,0)$ and $(a,b)$.  Thus, $R(a,b) = (a,b)$ and $R(-b,a) = (b,-a) = -(-b,a)$.  We feel intuitively that if we align our head along the vectors $(a,b),(-b,a)$, then the linear transformation would look like the map $L(x,y) = (x,-y)$.  In this section, we make this idea precise. Consider two basis of $\mathbb{R}^2$ namely 
$$B_1 = ((1,0),(0,1)) \text{ and } B_2 = ((a,b),(-b,a)).$$
Then, $(1,0) = x(a,b) + y(-b,a) = (xa-yb,xb+ya)$.  That is, $xa-yb = 1$ and $xb = -ya$.  That is $xab - yb^2 = b$ or $-ya^2-yb^2 = b$.  Thus, 
$$(1,0) = \frac{a}{a^2 + b^2}(a,b) + \frac{-b}{a^2 + b^2}(-b,a).$$
Similarly, $(0,1) = (xa-yb,xa+yb)$ implies that $xa = yb$ and $xb+ya=1$.  Substituting, we get
$$(0,1) = \frac{b}{a^2 + b^2}(a,b) + \frac{a}{a^2 + b^2}(-b,a).$$
Thus, it is easy to see that $[I]_{B_1}^{B_2} = \begin{bmatrix}\frac{a}{a^2+b^2} & \frac{b}{a^2+b^2} \\ \frac{-b}{a^2+b^2} & \frac{a}{a^2+b^2}\end{bmatrix}$ and $I_{B_2}^{B_1} = \begin{bmatrix}a & -b\\b & a\end{bmatrix}$ and they are inverses to each other.  Further,
$$
\begin{align*}
R(1,0) &= R\left(\frac{a}{a^2 + b^2}(a,b) + \frac{-b}{a^2 + b^2}(-b,a)\right)= R\left(\frac{a}{a^2 + b^2}(a,b)\right) + R\left(\frac{-b}{a^2 + b^2}(-b,a)\right)\\
&= \frac{a}{a^2 + b^2} R\left(a,b\right) + \frac{-b}{a^2 + b^2} R\left(-b,a\right)= \frac{a}{a^2 + b^2} \left(a,b\right) + \frac{-b}{a^2 + b^2} \left(b,-a\right)\\
&= \frac{a}{a^2 + b^2} \left(a(1,0)+b(0,1)\right) + \frac{-b}{a^2 + b^2} \left(b (1,0) + a(0,1)\right)\\
&= \frac{a^2 - b^2}{a^2 + b^2} (1,0) + \frac{2ab}{a^2 + b^2}(0,1)
\end{align*}
$$
Similarly, 
$$
\begin{align*}
R(0,1) &= R\left(\frac{b}{a^2 + b^2}(a,b) + \frac{a}{a^2 + b^2}(-b,a)\right)= R\left(\frac{b}{a^2 + b^2}(a,b)\right) + R\left(\frac{a}{a^2 + b^2}(-b,a)\right)\\
&= \frac{b}{a^2 + b^2} R\left(a,b\right) + \frac{a}{a^2 + b^2} R\left(-b,a\right)= \frac{b}{a^2 + b^2} \left(a,b\right) + \frac{a}{a^2 + b^2} \left(b,-a\right)\\
&= \frac{b}{a^2 + b^2} \left(a(1,0)+b(0,1)\right) + \frac{a}{a^2 + b^2} \left(b(1,0)-a(0,1)\right)\\
&= \frac{2ab}{a^2 + b^2}(0,1) + \frac{b^2-a^2}{a^2+b^2}.
\end{align*}
$$
Thus, 
$$
\begin{align*}
R(x,y) &= R(x(1,0) + y(0,1)) = xR(1,0) + yR(0,1)\\
&= x\left[\frac{a^2 - b^2}{a^2 + b^2} (1,0) + \frac{2ab}{a^2 + b^2}(0,1)\right] + y\left[\frac{2ab}{a^2 + b^2}(0,1) + \frac{b^2-a^2}{a^2+b^2}\right]\\
&= \left(\left(\frac{a^2 - b^2}{a^2 + b^2}\right)x + \left(\frac{2ab}{a^2+b^2}\right)y,\left(\frac{2ab}{a^2+b^2}\right)x + \left(\frac{b^2-a^2}{a^2+b^2}\right)y\right)
\end{align*}
$$
Hence, the matrix of this linear transformation is $\begin{bmatrix} \frac{a^2 - b^2}{a^2 + b^2} & \frac{2ab}{a^2 + b^2}\\ \frac{2ab}{a^2 + b^2} & \frac{b^2-a^2}{a^2 + b^2}\end{bmatrix}$.  From now on, we would be a little bit more specific and say that this is the matrix of $R$ with respect to the basis $B_1$ and denote it as $[R]_{B_1}$.  Further notice that 
$$[R]_{B_1} = \begin{bmatrix}a & -b \\b &a\end{bmatrix}\begin{bmatrix}1 & 0 \\0 &-1\end{bmatrix}\begin{bmatrix}\frac{a}{a^2+b^2} & \frac{b}{a^2+b^2} \\ \frac{-b}{a^2+b^2} & \frac{a}{a^2+b^2}\end{bmatrix}.$$
Take any point $(x,y)\in \mathbb{R}^2$, that is, 
$$
\begin{align*}
(x,y) &= x(0,1) + y(1,0)\\
&= x\left(\frac{a}{a^2 + b^2}(a,b) + \frac{-b}{a^2 + b^2}(-b,a)\right) + y\left(\frac{b}{a^2 + b^2}(a,b) + \frac{a}{a^2 + b^2}(-b,a)\right)\\
&= \left[\left(\frac{a}{a^2 + b^2}\right)x + \left(\frac{b}{a^2 + b^2}\right)y\right](a,b) + \left[\left(\frac{-b}{a^2 + b^2}\right)x + \left(\frac{a}{a^2 + b^2}\right)y\right](-b,a)
\end{align*}
$$
As $\begin{bmatrix}\frac{xa+yb}{a^2+b^2} \\\frac{-xb+ya}{a^2+b^2}\end{bmatrix}$ represents the coefficients when you express $(x,y)$ as a linear combination of $(a,b)$ and $(-b,a)$, we say it is the coordinates of $(x,y)$ in basis $B_2$.  And we write $[(x,y)]_{B_2} = \begin{bmatrix}\frac{xa+yb}{a^2+b^2} \\\frac{-xb+ya}{a^2+b^2}\end{bmatrix}$.  We further notice that 
$$\begin{bmatrix}\frac{xa+yb}{a^2+b^2} \\\frac{-xb+ya}{a^2+b^2}\end{bmatrix} = \begin{bmatrix}\frac{a}{a^2 + b^2} & \frac{b}{a^2 + b^2} \\\frac{-b}{a^2 + b^2} &\frac{a}{a^2 + b^2}\end{bmatrix}\begin{bmatrix}x \\y \end{bmatrix}.$$
Thus, the matrix $[I]_{B_1}^{B_2}$ allows us to convert the coordinates of $(x,y)$ in terms of $B_1$ (written as $[(x,y)]_{B_1}$) to coordinates of $(x,y)$ in terms of $B_2$ (written as $[(x,y)]_{B_2}$).  Thus, the matrix is called a change of coordinate matrix.  Further notice that
$$
\begin{align*}
\begin{bmatrix}\frac{a}{a^2 + b^2} & \frac{b}{a^2 + b^2} \\\frac{-b}{a^2 + b^2} &\frac{a}{a^2 + b^2}\end{bmatrix}\begin{bmatrix}a \\b \end{bmatrix} = \begin{bmatrix}1 \\0 \end{bmatrix} \text{ and }\begin{bmatrix}\frac{a}{a^2 + b^2} & \frac{b}{a^2 + b^2} \\\frac{-b}{a^2 + b^2} &\frac{a}{a^2 + b^2}\end{bmatrix}\begin{bmatrix}-b \\a \end{bmatrix} = \begin{bmatrix}0 \\1 \end{bmatrix}.
\end{align*}
$$
Hence, the matrix $[I]_{B_1}^{B_2}$ sends $B_2$ to $B_1$ while the matrix $[I]_{B^2}^{B_1}$ sends $B_1$ to $B_2$.   



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">4.5 Change of coordinates</summary>




<div class="academic-env env-definition">
<span class="env-label">Definition 4.6</span>

Let $V$ be a finite-dimensional vector space and let $B = (v_1,\dots,v_n)$ be a basis of $V$.  Given any vector $v\in V$. there exists $(\alpha_1,\dots,\alpha_n)$ such that $v = \alpha_1 v_1 + \dots + \alpha_n v_n$.  Then, we say that the coordinates of $v$ with respect to the basis $B$, denoted as $[v]_{B}$ is $(\alpha_1,\dots,\alpha_n)$ or $\begin{bmatrix}\alpha_1\\ .\\ .\\ .\\ \alpha_n\end{bmatrix}$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 4.8</span>

Let $V = \mathbb{R}^2$, $B_1 = ((1,1),(1,-1))$, and $B_2 = ((1,2),(3,4))$.  Given any element $(x,y)\in \mathbb{R}^2$, note that $(x,y) = (\frac{x+y}{2})(1,1) + (\frac{x-y}{2})(1,-1)$.  Thus, $[(x,y)]_{B_1} = \begin{bmatrix}\frac{x+y}{2}\\ \frac{x-y}{2}\end{bmatrix}$.  To find $[(x,y)]_{B_2}$, we solve $(x,y) = \alpha(1,2) + \beta(3,4) = (\alpha + 3\beta, 2\alpha + 4\beta)$.  That is $2\beta = 2x-y$ or $\beta = x - \frac{y}{2}$. Thus, $\alpha + 3x-3\frac{y}{2} = x$.  Hence, $(\alpha,\beta) = (\frac{3y}{2}-2x,x-\frac{y}{2})$.  Hence,
$$[(x,y)]_{B_2} = \begin{bmatrix}\frac{3y}{2}-2x\\ x-\frac{y}{2}\end{bmatrix}.$$
To check your answer is indeed correct, note that 
$$[(1,2)]_{B_2} = \begin{bmatrix}\frac{3(2)}{2}-2(1)\\ (1)-\frac{(2)}{2}\end{bmatrix} = \begin{bmatrix}1\\ 0\end{bmatrix}$$
$$[(3,4)]_{B_2} = \begin{bmatrix}\frac{3(4)}{2}-2(3)\\ (3)-\frac{(4)}{2}\end{bmatrix} = \begin{bmatrix}0\\ 1\end{bmatrix}.$$

</div>



<div class="academic-env env-example">
<span class="env-label">Example 4.9</span>

Let $V = \mathbb{R}^3$, $B_1 = ((0,1,0),(0,0,1),(1,0,0))$.  Then given any vector $(x,y,z)\in \mathbb{R}^2$, $(x,y,z) = x(1,0,0) + y(0,1,0) + z(0,0,1) = y(0,1,0) + z(0,0,1) + x(1,0,0)$.  Thus, $$[(x,y,z)]_{B_1} = \begin{bmatrix}y\\ z\\ x\end{bmatrix}.$$  
Let $B_2 = ((1,1,-1),(1,-1,1),(0,1,0))$.  Given any element $(x,y,z)\in \mathbb{R}^3$, note that $(x,y,z) = \alpha(1,1,-1) + \beta (1,-1,1) + \gamma (0,1,0) = (\alpha + \beta,\alpha - \beta + \gamma,\beta - \alpha)$. Thus, $\beta = \frac{x+z}{2}$ and $\alpha = \frac{x-z}{2}$.  Therefore, $\frac{x-z}{2} - \frac{x+z}{2} + \gamma = y$.  That is, $\gamma = y + z$.  Hence
$$[(x,y,z)]_{B_2} = \begin{bmatrix}\frac{x-z}{2}\\ \frac{x+z}{2}\\ y+z\end{bmatrix}.$$
To check your answer is indeed correct, note that 
$$[(1,1,-1)]_{B_2} = \begin{bmatrix}\frac{(1)-(-1)}{2}\\ \frac{(1)+(-1)}{2}\\ (1)+(-1)\end{bmatrix} = \begin{bmatrix}1\\ 0\\0\end{bmatrix}$$
$$[(1,-1,1)]_{B_2} = \begin{bmatrix}\frac{(1)-(1)}{2}\\ \frac{(1)+(1)}{2}\\ (-1)+(1)\end{bmatrix} = \begin{bmatrix}0\\ 1\\0\end{bmatrix}$$
$$[(0,1,0)]_{B_2} = \begin{bmatrix}\frac{(0)-(0)}{2}\\ \frac{(0)+(0)}{2}\\ (1)+(0)\end{bmatrix} = \begin{bmatrix}0\\ 0\\1\end{bmatrix}.$$

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.15</span>

Let $V$ be a finite-dimensional vector space and let $B_1$ and $B_2$ be two bases.  Then $[v]_{B_2} = [I]_{B_1}^{B_2}[v]_{B_1}$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $B_1 = (v_1,\dots, v_n)$ and $B_2 = (w_1,\dots,w_n)$.  Then,
$$
\begin{align*}
[v]_{B_1} = (\alpha_1,\dots, \alpha_n) \iff v = \alpha_1 v_1+\dots + \alpha_n v_n.
\end{align*}
$$
Let $v_i = a_{1i}w_1 + \dots + a_{ni} w_n$.  Thus, 
$$
\begin{align*}
v &= \alpha_1 v_1+\dots + \alpha_n v_n\\
&= \alpha_1 (a_{11}w_1 + \dots + a_{n1} w_n) + \dots, \alpha_n (a_{1n}w_1 + \dots + a_{nn} w_n)\\
&= (\alpha_1 a_{11} + \alpha_2 a_{12} + \dots \alpha_n a_{1n})w_1 + \dots + (\alpha_1 a_{n1} + \alpha_2 a_{n2} + \dots \alpha_n a_{nn})w_n
\end{align*}
$$
That is,
$$
\begin{align*}
[v]_{B_2} = \begin{bmatrix}\alpha_1 a_{11} + \alpha_2 a_{12} + \dots \alpha_n a_{1n}\\
\alpha_1 a_{21} + \alpha_2 a_{22} + \dots \alpha_n a_{2n}\\ .\\ .\\ \alpha_1 a_{n1} + \alpha_2 a_{n2} + \dots \alpha_n a_{nn}\end{bmatrix} = \begin{bmatrix}a_{11} & a_{12} & \dots & a_{1n}\\ a_{21} & a_{22} & \dots & a_{2n}\\ . & .& \dots & .\\ . & .& \dots & .\\ a_{n1} & a_{n2}& \dots & a_{nn}\\  \end{bmatrix}\begin{bmatrix}\alpha_1\\ \alpha_2\\ . \\ .\\ \alpha_n \end{bmatrix}
\end{align*}
$$

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 4.10</span>

Let $V = \mathbb{R}^2$, $B_1 = ((1,1),(1,-1))$, and $B_2 = ((1,2),(3,4))$.  Then, $(1,1) = -\frac{1}{2} (1,2) + \frac{1}{2} (3,4)$ and $(1,-1) = -\frac{7}{2}(1,2) + \frac{3}{2}(3,4)$.  Thus, $[I]_{B_1}^{B_2} = \frac{1}{2}\begin{bmatrix}-1 & -7\\ 1 & 3\end{bmatrix}$.  And, 
$$[I]_{B_1}^{B_2}[(x,y)]_{B_1} = \frac{1}{2}\begin{bmatrix}-1 & -7\\ 1 & 3\end{bmatrix}\begin{bmatrix}\frac{x+y}{2}\\ \frac{x-y}{2}\end{bmatrix} = \begin{bmatrix}\frac{-x-y-7x+7y}{4}\\ \frac{x+y+3x-3y}{4}\end{bmatrix} = \begin{bmatrix}\frac{3y}{2} - 2x\\ x-\frac{y}{2}\end{bmatrix} = [(x,y)]_{B_2}.$$

</div>



<div class="academic-env env-example">
<span class="env-label">Example 4.11</span>

Let $V = \mathbb{R}^3$, $B_1 = ((0,1,0),(0,0,1),(1,0,0))$ and $B_2 = ((1,1,-1), (1,-1,1),$ $(0,1,0))$.  Then, 
$$
\begin{align*}
(0,1,0) &= 0(1,1,-1) + 0.(0,0,1) + 1(0,1,0)\\
(0,0,1) &= \frac{-1}{2}(1,1,-1) + \frac{1}{2}(1,-1,1) + 1(0,1,0)\\
(1,0,0) &= \frac{1}{2}(1,1,-1) + \frac{1}{2}(1,-1,1) + 0(0,1,0) 
\end{align*}
$$
Thus, 
$$[I]_{B_1}^{B_2} = \begin{bmatrix}
0 & \frac{-1}{2} & \frac{1}{2}\\
0 & \frac{1}{2} & \frac{1}{2}\\
1 & 1 & 0
\end{bmatrix}.$$
And,
$$
\begin{align*}
[I]_{B_1}^{B_2}[(x,y,z)]_{B_1} = \begin{bmatrix}0 & \frac{-1}{2} & \frac{1}{2}\\ 0 & \frac{1}{2} & \frac{1}{2}\\1 & 1 & 0 \end{bmatrix}\begin{bmatrix}y\\ z\\ x\end{bmatrix} = \begin{bmatrix}\frac{x-z}{2}\\ \frac{x+z}{2}\\ y+z\end{bmatrix} = [(x,y,z)]_{B_2}.
\end{align*}
$$

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 4.7</span>

Let $V$ and $W$ be finite-dimensional vector spaces and let $B_1 = (v_1,\dots,v_m)$ and $B_2= (w_1,\dots,w_m)$ be basis of $V$ and $W$ respectively.  Finally, let $L:V\to W$ be a linear map. As $L(v_i)\in W$, there exist constants $(a_{1i},\dots,a_{ni})$ such that $L(v_i) = a_{1i}w_1 + \dots + a_{ni}w_n$.  Then, we say that the matrix associated to the linear map $L$ with respect to $B_1$ and $B_2$, 
$$[L]_{B_1}^{B_2} = \begin{bmatrix}a_{11} & a_{12} & \dots & a_{1n}\\ a_{21} & a_{22} & \dots & a_{2n}\\ . & .& \dots & .\\ . & .& \dots & .\\ a_{n1} & a_{n2}& \dots & a_{nn}\\  \end{bmatrix}.$$

</div>



<div class="academic-env env-remark">
<span class="env-label">Remark 4.1</span>

Let $V$ be a finite-dimensional vector space and $B = (v_1,\dots,v_m)$ be a basis of $V$. Given a linear map $L:V\to W$, we will often write $[L]_B$ instead of $[L]_{B}^{B}$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.16</span>

Let $V$ be finite-dimensional vector spaces and let $B_1 = (v_1,\dots,v_n)$ and $B_2= (w_1,\dots,w_n)$ be two basis of $V$.  Finally, let $L:V\to V$ be a linear map.  Then,
$$[L]_{B_2} = [I]_{B_1}^{B_2}[L]_{B_1}^{B_1}[I]_{B_1}^{B_2}.$$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Using Theorem **4.14**, $[L]_{B_1}^{B_1}[I]_{B_1}^{B_2} = [L\circ I]_{B_2}^{B_1} = [L]_{B_2}^{B_1}$.  Thus, $[I]_{B_1}^{B_2}[L]_{B_1}^{B_1}[I]_{B_1}^{B_2} = [I]_{B_1}^{B_2}[L]_{B_2}^{B_1}$.  Once again, using Theorem **4.14**, we can see that $[I]_{B_1}^{B_2}[L]_{B_2}^{B_1} = [I\circ L]_{B_2}^{B_2} = [L]_{B_2}^{B_2}$.

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 4.12</span>

Let $L:\mathbb{R}^2 \to \mathbb{R}^2$ be the function $L(x,y) = (4x+3y,5x+7y)$.  Further, let $B_1 = ((1,1),(1,-1))$ and $B_2= ((1,2),(3,4))$.  We will find $[L]_{B_1}^{B_1}$, $[L]_{B_1}^{B_2}$, $[L]_{B_2}^{B_1}$, and $[L]_{B_2}^{B_2}$.

Notice
$$
\begin{align*}
L(1,1) = (4+3,5+7) &= (7,12) = \frac{19}{2}(1,1) + \frac{-5}{2}(1,-1)\\ 
L(1,-1) = (4-3,5-7) &= (1,-2) = \frac{-1}{2}(1,1) + \frac{3}{2}(1,-1) 
\end{align*}
$$
Thus,
$$[L]_{B_1}^{B_1} = \frac{1}{2}\begin{bmatrix}
19 & -1\\
-5 & 3
\end{bmatrix}.$$
Similarly, as
$$
\begin{align*}
L(1,1) = (4+3,5+7) &= (7,12) = 4(1,2) + 1(3,4)\\ 
L(1,-1) = (4-3,5-7) &= (1,-2) = -5(1,2) + 2(3,4)
\end{align*}
$$
we have
$$[L]_{B_1}^{B_2} = \begin{bmatrix}
4 & -5\\
1 & 2
\end{bmatrix}.$$
Similarly, as
$$
\begin{align*}
L(1,2) = (4+6,5+14) &= (10,19) = \frac{29}{2}(1,1) + \frac{-9}{2}(1,-1)\\ 
L(3,4) = (12+12,15+28) &= (24,43) = \frac{67}{2}(1,1) + \frac{-19}{2}(1,-1)
\end{align*}
$$
we have
$$[L]_{B_2}^{B_1} = \frac{1}{2}\begin{bmatrix}
29 & 67\\
-9 & -19
\end{bmatrix}.$$
Similarly, as
$$
\begin{align*}
L(1,2) = (4+6,5+14) &= (10,19) = \frac{17}{2}(1,2) + \frac{1}{2}(3,4)\\ 
L(3,4) = (12+12,15+28) &= (24,43) = \frac{33}{2}(1,2) + \frac{5}{2}(3,4)
\end{align*}
$$
we have
$$[L]_{B_2}^{B_2} = \frac{1}{2}\begin{bmatrix}
17 & 1\\
33 & 5
\end{bmatrix}.$$

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 4.8</span>

Let $B_1 = ((1,0),(0,1))$ and $B_2 = ((1,1),(1,2))$. Let $L: \mathbb{R}^2 \to \mathbb{R}^2$ be the linear map $L(x,y) = (6x + 2y, 3y - x)$.

- Find $[(x,y)]_{B_2}$ and $[I]_{B_1}^{B_2}$.
- Check that $[(x,y)]_{B_2} = [I]_{B_1}^{B_2}[(x,y)]_{B_1}$.
- Find the matrix $[L]_{B_2}^{B_2}$
- Verify that $[L]_{B_2}^{B_2} = [I]_{B_1}^{B_2} [L]_{B_1}^{B_1} [I]_{B_2}^{B_1}$.


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 4.9</span>

Let $B_1 = ((1,0,0),(0,1,0),(0,0,1))$ and $B_2 = ((1,1,0),(1,0,1),(0,1,1))$.  Let $L: \mathbb{R}^3 \to \mathbb{R}^3$ be the linear map $L(x,y,z) = (3x + z, 3y - x,z)$. 

- Find $[(x,y,z)]_{B_2}$ and $[I]_{B_1}^{B_2}$.
- Check that $[(x,y,z)]_{B_2} = [I]_{B_1}^{B_2}[(x,y,z)]_{B_1}$. 
- Find the matrix $[L]_{B_2}^{B_2}$
- Verify that $[L]_{B_2}^{B_2} = [I]_{B_1}^{B_2} [L]_{B_1}^{B_1} [I]_{B_2}^{B_1}$.


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 4.10</span>

Find the change of coordinates matrix $[I]_B^C$ for the ordered basis $B$ and $C$ of the vector space $V$.

- $V = \mathcal{P}(1)$, $B = (7-4x,5x)$, and $C= (1-2x,2+x)$
- $V = \mathcal{P}(2)$, $B = (5-3x,1,1+2x^2)$, and $C= (1-x+x^2,1-x,4)$
- $V = M_2(\mathbb{R})$ ($2\times 2$ matrices), $B = \left(\begin{bmatrix} 1&0\\-1&2\end{bmatrix},\begin{bmatrix} 3&5\\0&0\end{bmatrix},\begin{bmatrix} 0&-1\\3&0\end{bmatrix},\begin{bmatrix} -2&-4\\0&0\end{bmatrix}\right)$, and $C= \left(\begin{bmatrix} 1&1\\1&1\end{bmatrix},\begin{bmatrix} 1&1\\1&0\end{bmatrix},\begin{bmatrix} 1&1\\0&0\end{bmatrix},\begin{bmatrix} 1&0\\0&0\end{bmatrix}\right)$


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 4.11</span>

Let $(v_1,v_2,v_3)$ be a basis of $\mathbb{R}^3$ and $L: \mathbb{R}^3\to \mathbb{R}^3$ be the linear map such that $[L]_{(v_1,v_2,v_3)} = \begin{bmatrix} 1 & 2 & 3\\ 4 & 5 & 6\\ 7 & 8 & 9 \end{bmatrix}$. Find
\begin{multicols}{3}

- $[L]_{(v_2,v_1,v_3)}^{(v_1,v_2,v_3)}$.
- $[L]_{(v_1,v_2,v_3)}^{(v_2,v_1,v_3)}$.
- $[L]_{(v_2,v_1,v_3)}^{(v_2,v_1,v_3)}$.
- $[L]_{(v_1+v_2,v_2,v_3)}^{(v_1,v_2,v_3)}$
- $[L]^{(v_1+v_2,v_2,v_3)}_{(v_1,v_2,v_3)}$
- $[L]^{(v_1+v_2,v_2,v_3)}_{(v_1+v_2,v_2,v_3)}$

\end{multicols}

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">4.6 Diagonalisation</summary>


Earlier we observed that for the linear map 
$R:\mathbb{R}^2 \to \mathbb{R}^2$ defined as 
$$R(x,y) = \left(\left(\frac{a^2 - b^2}{a^2 + b^2}\right)x + \left(\frac{2ab}{a^2+b^2}\right)y,\left(\frac{2ab}{a^2+b^2}\right)x + \left(\frac{b^2-a^2}{a^2+b^2}\right)y\right)$$
we could choose a basis (namely $B_2 = ((a,b),(-b,a))$) such that $[L]_{B_2}$ is diagonal.  It would be awesome if we could as diagonal matrices are easy to work with - all computations are easy.  

Let $V$ be a finite-dimensional vector space and $L:V\to V$ a linear map.  Assume there exists a basis $B = (v_1,\dots,v_n)$ with respect to which the matrix of the linear transformation is diagonal, say 
$$[L]_{B} = \begin{bmatrix}
\lambda_1 & 0 & 0 & \dots & 0 & 0\\
0 & \lambda_2 & 0 & \dots & 0 &  0\\
. & . & . & \dots & . & .\\
. & . & . & \dots & . & .\\
0 & 0 & 0 & \dots & 0 & \lambda_n\\
\end{bmatrix}$$
Then by the definition of a matrix associated to a linear map, we have $L(v_i) = \lambda_i v_i$.  


<div class="academic-env env-definition">
<span class="env-label">Definition 4.8</span>

Let $V$ be a finite-dimensional vector space and $L:V\to V$ be a linear map.  A non-zero vector $v\in V$ is said to be an eigenvector iff there exists a $\lambda\in \mathbb{R}$ such that $L(v) = \lambda v$.  The value $\lambda$ is called an eigenvalue of $L$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 4.13</span>

For the linear map $R:\mathbb{R}^2 \to \mathbb{R}^2$ defined as 
$$R(x,y) = \left(\left(\frac{a^2 - b^2}{a^2 + b^2}\right)x + \left(\frac{2ab}{a^2+b^2}\right)y,\left(\frac{2ab}{a^2+b^2}\right)x + \left(\frac{b^2-a^2}{a^2+b^2}\right)y\right)$$
$(a,b)$ is an eigenvector corresponding to the eigenvalue $1$ and $(-b,a)$ is an eigenvector corresponding to the eigenvalue $-1$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.17</span>

Let $V$ be a finite-dimensional vector space and $L:V\to V$ be a linear map.  Let $v_1,\dots,v_k$ be nonzero vectors such that $L(v_i) = \lambda_i v_i$ with $\lambda_i\neq \lambda_j$ if $i\neq j$.  Then $(v_1,\dots,v_k)$ are linearly independent.  This is often informally stated as: eigenvalues corresponding to distinct eigenvalues are linearly independent.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We will prove this statement using induction.  Notice that P(1) is obvious as any nonzero vector is linearly independent.  Assume that P(k) is true.  Now we will prove P(k+1).  Let  $v_1,\dots,v_{k+1}$ be nonzero vectors such that $L(v_i) = \lambda_i v_i$ with $\lambda_i\neq \lambda_j$ if $i\neq j$.  Assume $\alpha_1 v_1 + \dots + \alpha_{k+1}v_{k+1} = 0$.  Thus, $\lambda_{k+1}\alpha_1 v_1 + \dots + \lambda_{k+1}\alpha_{k+1}v_{k+1} = 0$ and $0 = L(0) = L(\alpha_1 v_1 + \dots + \alpha_{k+1}v_{k+1}) = \lambda_1\alpha_1 v_1 + \dots + \lambda_{k+1}\alpha_{k+1}v_{k+1}$.  Subtracting the two equations, we have 
$$\alpha_1(\lambda_1-\lambda_{k+1})v_1 + \dots + \alpha_k (\lambda_k - \lambda_{k+1})v_k = 0.$$
But, by the induction hypothesis, $(v_1,\dots,v_k)$ is linearly independent.  Thus, $\alpha_i(\lambda_i - \lambda_{k+1}) = 0$ for all $i\in \{1,\dots,k\}$.  But, $\lambda_i - \lambda_{k+1}\neq 0$ so, $\alpha_i = 0$ for all $i\in \{1,\dots,k\}$.  Thus, $0 = \alpha_1 v_1 + \dots + \alpha_{k+1}v_{k+1} = \alpha_{k+1}v_{k+1}$.  As, $v_{k+1}\neq 0$, $\alpha_{k+1} = 0$.  Thus, $(\alpha_1,\dots, \alpha_{k+1} )= 0$ and hence $(v_1,\dots,v_{k+1})$ is linearly independent.

</details>
</div>


\begin{corollary}
Let $V$ be a finite-dimensional vector space of dimension $n$ and $L:V\to V$ be a linear map.  Then $L$ has at most $n$ distinct eigenvalues.
\end{corollary}

Thus, the problem of diagonalisation is closely tied with the problem of finding eigenvalues and eigenvectors.  Notice that $L(v) = \lambda v$ iff $(L-\lambda I)(v) = 0$ (where $I$ is the transformation $I(v) = v$).  Thus, $\lambda$ is an eigenvalue iff $Ker(L-\lambda I)\neq \{0\}$.  Thus, we need a quick method to find if $L-\lambda I$ is injective.  Recall that if $L:\mathbb{R}^2 \to \mathbb{R}^2$ is the linear map $L(x,y) = (ax+by,cx+dy)$, then $L$ is injective iff $ad-bc \neq 0$.  If $B = (e_1,e_2)$ is the standard basis $[L]_B = \begin{bmatrix}a&b\\c&d\end{bmatrix}$ and the quantity $ad-bc$ is called the determinant of $\begin{bmatrix}a&b\\c&d\end{bmatrix}$.  

Let $B = (e_1,e_2,e_3)$ is the standard basis on $\mathbb{R}^3$  We can similarly show that a linear map $L:\mathbb{R}^3 \to \mathbb{R}^3$ with $[L]_B = \begin{bmatrix}a&b&c\\d&e&f\\g&h&i\end{bmatrix}$ is injective iff determinant of $\begin{bmatrix}a&b&c\\d&e&f\\g&h&i\end{bmatrix}$ defined as $a(ei-fh)-b(di-fg)+c(dh-eg) \neq 0$.

**---- Geometrically determinant captures the factor by which area or volume gets scaled: no time to complete this right now! Sorry!---**

The determinant allows us to easily compute eigenvalues and hence eigenvectors.  Let us look at some examples.


<div class="academic-env env-example">
<span class="env-label">Example 4.14</span>

Let $L:\mathbb{R}^2 \to \mathbb{R}^2$ be the linear map $L(x,y) = (x+2y,3x+4y)$ and $B = (e_1,e_2)$.  Then, $[L]_B = \begin{bmatrix}1&2\\3&4\end{bmatrix}$.  To find the eigenvalues, we look at 
$$det\left(\begin{bmatrix}1&2\\3&4\end{bmatrix} -\lambda \begin{bmatrix}1&0\\0&1\end{bmatrix}\right) = det\left(\begin{bmatrix}1-\lambda &2\\3&4-\lambda\end{bmatrix}\right) = \lambda^2 - 5\lambda -2.$$
Thus, the determinant is $0$ iff 
$$\lambda = \frac{5\pm \sqrt{25 + 8}}{2}  = \frac{5\pm \sqrt{33}}{2}.$$
Let us now find the corresponding eigenvectors
$$
\begin{align*}
\begin{bmatrix} \frac{5+ \sqrt{33}}{2}x\\ \frac{5+ \sqrt{33}}{2}y\end{bmatrix} = \begin{bmatrix}1&2\\3&4\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix} x+2y\\ 3x+4y\end{bmatrix}
\end{align*}
$$
Thus, we get $2y = \frac{5+ \sqrt{33}}{2}x - x = \frac{3+ \sqrt{33}}{2}x$.  Thus, $(4,3+ \sqrt{33})$ is an eigenvector.  Let us confirm our answer.
$$\begin{bmatrix}1&2\\3&4\end{bmatrix}\begin{bmatrix}4\\3+ \sqrt{33}\end{bmatrix} = \begin{bmatrix}10 + \sqrt{33}\\24+ \sqrt{33}\end{bmatrix} = \frac{5+\sqrt{33}}{2}\begin{bmatrix}4\\3+ \sqrt{33}\end{bmatrix}.$$
Similarly, we can check that $(4,3-\sqrt{33})$ is an eigenvector corresponding to $5-\sqrt{33}$.  It is easy to see that, $B' = ((4,3+\sqrt{33}),(4,3-\sqrt{33}))$ is a basis of $\mathbb{R}^2$ and $[L]_{B'} = \begin{bmatrix}\frac{5+ \sqrt{33}}{2}&0\\0&\frac{5- \sqrt{33}}{2}\end{bmatrix}$

</div>



<div class="academic-env env-example">
<span class="env-label">Example 4.15</span>

Not all matrices have eigenvalues.  To see an example, look at $L(x,y) = (y,-x)$.  Then, $[L]_B = \begin{bmatrix}0&1\\-1&0\end{bmatrix}$ and 
$$det\left(\begin{bmatrix}0&1\\-1&0\end{bmatrix} -\lambda \begin{bmatrix}1&0\\0&1\end{bmatrix}\right) = det\left(\begin{bmatrix}-\lambda &1\\-1&-\lambda\end{bmatrix}\right) = \lambda^2 + 1.$$
Thus, the determinant is not zero for any real number $\lambda$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 4.16</span>

Let $B = (e_1,e_2,e_3)$ be the standard basis of $\mathbb{R}^3$. Let $L:\mathbb{R}^3 \to \mathbb{R}^3$ be the linear map such that $[L]_B = \begin{bmatrix}1&2&3\\4&5&6\\7&8&9\end{bmatrix}$.  Then, 
$$
\begin{align*}
det\left(\begin{bmatrix}1&2&3\\4&5&6\\7&8&9\end{bmatrix} -\lambda \begin{bmatrix}1&0&0\\0&1&0\\0&0&1\end{bmatrix}\right) &= det\left(\begin{bmatrix}1-\lambda &2&3\\4&5-\lambda&6\\7&8&9-\lambda \end{bmatrix}\right)\\
&= (1-\lambda)(\lambda^2 - 14\lambda - 3) - 2(-6-4\lambda) + 3(-3+7\lambda)\\
&= -\lambda^3 +15\lambda^2 + 18\lambda\\
&= (-\lambda)(\lambda^2 - 15\lambda -18)
\end{align*}
$$
Thus, the eigenvalues are $0$, $\frac{15\pm \sqrt{297}}{2}$.  Solving 
$$
\begin{align*}
\begin{bmatrix}1&2&3\\4&5&6\\7&8&9\end{bmatrix}\begin{bmatrix}x\\y\\z\end{bmatrix} = \begin{bmatrix}0\\0\\0\end{bmatrix}
\end{align*}
$$
we get $y = -2x$ and $z = x$.  Thus, $(1,-2,1)$ is an eigenvector corresponding to $0$.  
The computations for the other eigenvectors is really tedious, so let us not do it.

</div>


</details>