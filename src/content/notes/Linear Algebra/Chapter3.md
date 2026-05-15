# Abstract vector spaces

In the previous chapter, we saw the importance of linear functions.  To define linearity, we need addition and scalar multiplication on both domain and co-domain.  Of course, we do not want these operations to be defined extremely weirdly, so we expect them to satisfy certain properties.  This motivates the definition of vector spaces which are the natural domains and co-domains of linear functions.    


<div class="academic-env env-definition">
<span class="env-label">Definition 3.1</span>

Given a set $V$ and functions $+:V\times V\to V$ and $.:\mathbb{R} \times V \to V$, the triple $(v,+,.)$ where  is called a vector space over $\mathbb{R}$ if it satisfies the following properties.

- $\forall v_1,v_2,v_3\in V$, $v_1 + (v_2 + v_3) = (v_1 + v_2) + v_3$ (Associativity of vector addition)
- $\forall v_1,v_2\in V$, $v_1 + v_2 = v_2 + v_1$ (Commutativity of vector addition)
- $\exists 0 \in V$ such that $v+0 = v = 0+v$ (Existence of additive identity)
- $\forall v\in V$, $\exists v'\in $V such that $v+v' = 0 = v'+v$ (Existence of additive inverse)
- $\forall \alpha,\beta,\gamma\in \mathbb{R}$ and $\forall v\in V$, $(\alpha \beta).v = \alpha(\beta . v)$ (Associativity of scalar multiplication)
- $\forall \alpha\in \mathbb{R}$ and $v_1,v_2\in V$, $\alpha . (v_1 + v_2) = \alpha . v_1 + \alpha . v_2$ 
- $\forall \alpha,\beta \in \mathbb{R}$ and $v\in V$, $(\alpha + \beta) . v = \alpha . v + \beta . v$.
- $\forall v\in V$, $1 . v = v$.


</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.1</span>

Let $V = \{0\}$, $0 + 0 = 0$ and $\forall \alpha\in \mathbb{R},\alpha . 0 = 0$.  Then, $(V,+,.)$ is a vector space over $\mathbb{R}$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.2</span>

For all vectors $(v_1,\dots,v_n), (w_1,\dots,w_n)\in \mathbb{R}^n$ define $(v_1,\dots,v_n) + (w_1,\dots,w_n) = (v_1 + w_1,\dots,v_n + w_n)$.  Similarly, for all $\alpha \in \mathbb{R}$ and $(v_1,\dots,v_n)\in \mathbb{R}^n$ define $\alpha . (v_1,\dots,v_n) = (\alpha v_1,\dots,\alpha v_n)$.  Then, $(\mathbb{R}^n,+,.)$ is a vector space over $\mathbb{R}$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.3</span>

Let $X$ be any set and let $\mathcal{F}(X,\mathbb{R})$ be the set of all functions from $X$ to $\mathbb{R}$.  We can define $+$ as follows.  Given two functions $f:X\to \mathbb{R}$ and $g:X\to \mathbb{R}$, we define $f+g:X\to \mathbb{R}$ as the function $(f+g)(x) = f(x) + g(x)$.  Similarly, if $f:X\to \mathbb{R}$ is a function and $\alpha \in \mathbb{R}$, then we define $\alpha f$ to be the function defined as $(\alpha f)(x) = \alpha .(f(x))$ .  Then, $(\mathcal{F}(X,\mathbb{R}),+,.)$ is a vector space over $\mathbb{R}$.

Notice, that if you take $X = \mathbb{N}$, then you get the set of all real sequences.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.4</span>

Let $\mathcal{P}$ be the set of all polynomials with real coefficients.  Given two polynomials $a_0 + \dots + a_n x^n$ and $b_0 + \dots +b_m x^m$ we may assume without loss of generality that $m \geq n$.  Recall from school that the sum of these two polynomials is the polynomial $(a_0 + b_0)+ \dots (a_n+b_n)x^n + b_{n+1}x^{n+1}+\dots b^n x^n$.  Given a polynomial $a_0 + \dots + a_n x^n$ and $\alpha \in \mathbb{R}$, the scalar multiplication is defined as $\alpha . (a_0 + \dots + a_n x^n) = (\alpha a_0) + \dots (\alpha a_n)x^n$. Then $(\mathcal{P},+,.)$ is a vector space over $\mathbb{R}$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.5</span>

Let $\mathcal{P}(n)$ be the set of polynomials (with real coefficients) whose degree is less than or equal to $n$.  Notice that any polynomial in $\mathcal{P}(n)$ is of the form $a_0 + \dots + a_n x^n$.  As in the previous example, we can define $(a_0 + \dots + a_n x^n) + (b_0 + \dots + b_n x^n) = (a_0 + b_0)+ \dots (a_n+b_n)x^n$ and $\alpha . (a_0 + \dots + a_n x^n) = (\alpha a_0) + \dots (\alpha a_n)x^n$. Then $(\mathcal{P}(n),+,.)$ is a vector space over $\mathbb{R}$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.6</span>

If $V$ is a subspace of $\mathbb{R}^n$, then it inherits addition and scalar multiplication from $\mathbb{R}^n$ making $(V,+,.)$ a vector space over $\mathbb{R}$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.1</span>

Show that all the above examples are indeed examples of vector spaces over $\mathbb{R}$.

</div>


More generally,


<div class="academic-env env-definition">
<span class="env-label">Definition 3.2</span>

Let $(V,+,.)$ is a vector space.  A subset $W$ of $V$ is called a subspace if 

- $0\in W$
- $\forall v,w\in W$, $v+w\in W$
- $\forall \alpha\in \mathbb{R}$ and $\forall w\in W$, $\alpha w\in W$


</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.7</span>

Let $(V,+,.)$ is a vector space and $W \subset V$.  Then $(W,+,.)$ is a vector space iff $W$ is a subspace of $V$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.8</span>

We saw earlier that $(\mathcal{F}(X,\mathbb{R}),+,.)$ is a vector space for all sets $X$.  In particular, $(\mathcal{F}(\mathbb{R},\mathbb{R}),+,.)$ is a vector space.  If $\mathcal{C}^0(\mathbb{R},\mathbb{R})$ denotes the set of all continuous functions from $\mathbb{R}$ to $\mathbb{R}$ then $\mathcal{C}^0(\mathbb{R},\mathbb{R})$ is a subspace of $(\mathcal{F}(X,\mathbb{R}),+,.)$.  Similarly, if $\mathcal{C}^1(\mathbb{R},\mathbb{R})$ denotes the set of all continuously differentiable functions from $\mathbb{R}$ to $\mathbb{R}$ then $\mathcal{C}^1(\mathbb{R},\mathbb{R})$ is a subspace of $(\mathcal{F}(X,\mathbb{R}),+,.)$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.9</span>

The set $\mathcal{P}(n)$ is a subspace of $(\mathcal{P},+,.)$.

</div>





<div class="academic-env env-xca">
<span class="env-label">Exercise 3.2</span>

Show that the intersection of two vector subspaces is a vector subspace.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.3</span>

Prove that the union of two subspaces of $V$ is a subspace of $V$ if and only if one of the subspaces is contained in the other.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.4</span>

Let $p$ be a polynomial.  What extra condition should $p$ satisfy so that 
$$\{(x_1,x_2,\ldots,x_n)| \ p(x_1,x_2,\ldots,x_n) = 0\} \subset \mathbb{R}^n$$ 
is a subspace?  Prove your claim.

</div>


\begin{mdframed}[backgroundcolor=blue!10, frametitle={Redundancy of axioms}]
Mathematicians often like to have a minimal set of axioms.  Famously, many mathematicians thought that Euclid's fifth postulate was redundant, that is, it was a consequence of the other four postulates.  It was proved much later that the fifth postulate is not a consequence of the other four - we can come up with ``geometries" where the first four axioms are satisfied, but the fifth axiom is not satisfied.  This was the birth of hyperbolic and spherical geometry.  

Similarly, one may ask if axioms of vector spaces are essential.  Here I reproduce the proof in \cite{Bryant} of the fact that Axiom 2 is redundant.  If $v,w\in V$, then notice that $(v+w) + (v+w) = (1+1)(v+w) = (1+1)v + (1+1)w = (v+v) + (w+w)$.  Let $v'$ be the inverse of $v$ and $w'$ be the inverse of $w$.  Then,
$$
\begin{align*}
(v'+ ((v+w) + (v+w))) + w' &= ((v' + (v+w)) + (v+w))+w'\\
&= (((v'+v)+w) + (v+w))+w'\\ 
&= ((0+w) + (v+w)) + w' = (w + (v+w)) + w'\\
&= w + ((v+w)+w') = w + (v + (w+w')) = w + (v+0)\\
&= w+v.
\end{align*}
$$  
And,
$$
\begin{align*}
(v'+ ((v+v) + (w+w))) + w' &= ((v' + (v+v)) + (w+w))+w'\\
&= (((v'+v)+v) + (w+w))+w'\\ 
&= ((0+v) + (w+w)) + w' = (v + (w+w)) + w'\\
&= v + ((w+w)+w') = v + (w + (w+w')) = v + (w+0)\\
&= v+w.
\end{align*}
$$


<div class="academic-env env-xca">
<span class="env-label">Exercise 3.5</span>

Justify each equality in the above two computations.

</div>


But, $(v'+ ((v+w) + (v+w))) + w' = (v'+ ((v+v) + (w+w))) + w'$ and therefore $w+v = v+w$.  Notice that we used only associativity, existence of additive identity and existence of additive inverse.  Thus, commutativity is redundant.  

In \cite{Rigby-Wiegold} the authors show that actually you need only $6$ axioms.  I believe, according to their definition, the empty set would become a vector field.  But, with a small modification, we can solve this issue.  Basically, we can replace Axiom 3 and Axiom 4 with a single axiom: **$\exists$ a vector $0\in V$ such that $\forall v\in V$, $0.v = 0$**.  This vector is the additive identity as $v+0 = 1.v + 0.v = (1+0).v = 1.v = v$.  Also, $(-1)v$ is the additive inverse as $v + (-1)v = (1+(-1)).v = 0.v = 0$.  Also, we cannot just keep our current “Existence of additive identity” as it is and delete “Existence of additive inverse”.  Because, then although v + (-1)v = 0.v, we cannot conclude that is the zero vector.

It is still unclear to me if the other axioms are redundant or not.  It is a very interesting exercise to come up with examples that satisfy all but one axiom.  Some interesting examples for vector spaces over a field (not necessarily $\mathbb{R}$) is provided in \cite{user7530}.
\end{mdframed}


<div class="academic-env env-xca">
<span class="env-label">Exercise 3.6</span>

Let $V = \{(x,0) \ | \ x\in \mathbb{R}\}\cup \{(0,y) \ | \ y\in \mathbb{R}\}$.  Define $+$ as

- $\forall x,x'\in \mathbb{R}$, $(x,0) + (x',0) = (x+x',0)$
- $\forall y,y'\in \mathbb{R}$, $(0,y) + (0,y') = (0,y+y')$
- $\forall x,y\in \mathbb{R}\setminus \{0\}$, $(x,0) + (0,y) = (0,0)$

Similarly, define $.$ as $\forall \alpha\in \mathbb{R}$ and $\forall x\in \mathbb{R}$, $\alpha . (x,0) = (\alpha x,0)$ and $\alpha . (0,x) = (0,\alpha x)$.  Which of the axioms of a vector space is violated by $(V,+,.)$? %**Hint: only violates Axiom 1**

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.7</span>

Let $V = \emptyset$.  Let $+$ be the empty function - the function corresponding to the set $\emptyset = \emptyset \times \emptyset$.  Let $.$ be the empty function - the function corresponding to $\emptyset = \mathbb{R} \times \emptyset$.  Which of the axioms of a vector space is violated by $(V,+,.)$? %**Hint: only violates Axiom 3**

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.8</span>

Take $V=[0,\infty)$, $+$ be **multiplication** and let $.$ be defined as $\alpha.x = x^{\alpha}$ if $x\neq 0$ and $\alpha.0 = 0$.  Which of the axioms of a vector space is violated by $(V,+,.)$?  This example is from \cite{user7530}.
%**Hint: only violates Axiom 4**

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.9</span>

Let $V=\mathbb{R}$ and let $+$ be the usual addition on $\mathbb{R}$.  Let $.$ be defined as $\alpha.v = \alpha v$ for all $\alpha \in \mathbb{Q}$ and $\alpha.v = 0$ for all $\alpha \not\in \mathbb{Q}$.  Which of the axioms of a vector space is violated by $(V,+,.)$?  
%**Hint: only violates Axiom 5**

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.10</span>

Let $V=\{0,1\}$.  Define $+$ as $0+0 = 0 = 1+1$ and $0+1 = 1 = 1+0$.  Define $.$ as $\alpha.0 = 0$ for all $\alpha$, $\alpha.1 = 1$ for $\forall \alpha \neq 0$ and $0.1 = 0$.  Which of the axioms of a vector space is violated by $(V,+,.)$?  
%**Hint: only violates Axiom 7**

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.11</span>

Let $V=\{0,1\}$.  Define $+$ as $0+0 = 0 = 1+1$ and $0+1 = 1 = 1+0$.  Define $.$ as $\alpha.v = 0$ for all $\alpha\in \mathbb{R}$ and $v\in V$.  Which of the axioms of a vector space is violated by $(V,+,.)$?  %**Hint: only violates Axiom 8**

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.12</span>

Let $V = \mathbb{R}^2$, let $+$ be the usual addition on $\mathbb{R}^2$ and let $.$ be defined as $\alpha.(x,y) = (\alpha x,0)$.  Which of the axioms of a vector space is violated by $(V,+,.)$?<span class="footnote-trigger" title="This example is taken from a comment of \href{https://math.stackexchange.com/users/11619/jyrki-lahtonen"><sup>[*]</sup></span>{Jyrki Lahtonen} for a \href{https://math.stackexchange.com/q/1412899}{question on mathstackexchange}.} %**Hint: only violates Axiom 8**

</div>




<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">3.1 Important properties of vector spaces</summary>



Throughout this section, $(V,+,.)$ is an arbitrary vector space.


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.1</span>

Additive identity is unique.  That is, there exists only one vector $w\in V$ such that $\forall v\in V$, $v+w = v = w+v$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $0$ and $0'$ be such that $\forall v\in V$. $v+0 = v = 0+v$ and $v+0' = v = 0'+v$.  Taking $v = 0$, the equality $v+0' = v = 0'+v$ gives us $0 = 0 + 0'$. But, taking $v = 0'$, the equality $v+0 = v = 0+v$ gives us $0 + 0' = 0'$.  Thus, $0 = 0 + 0' = 0'$.  In other words, any two additive identities have to be equal.  So, the additive identity is unique.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.2</span>

Additive inverse is unique.  That is, given any vector $v$, there exists a unique $w$ such that $v+w = 0 = w+v$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Assume the contrary.  Assume there exists vector $u,v,w$ such that $u+v=0=v+u$ and $u+w=0=w+u$ ($v$ and $w$ are both inverses of $u$).  Then, 
$$
\begin{align*}
v = v+0 = v+(u+w) = (v+u)+w = 0+w = w 
\end{align*}
$$
In other words, any two additive inverses have to be equal.  So, additive inverse is unique.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.3</span>

Let $\alpha \in \mathbb{R}$ and $v\in V$.  Then, $\alpha . v = 0$ iff $\alpha = 0$ or $v=0$.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

First note that $0.v = (0+0).v = 0.v + 0.v$.  Let $w$ be the additive inverse of $0.v$.  Then, $0 = w+0.v = w+(0.v+0.v) = (w+0.v)+0.v = 0+0.v = 0.v$.  Thus, $0.v=0$.  Similarly, $\alpha . 0 = \alpha . (0+0) = \alpha . 0 + \alpha . 0$.  Let $w$ be the additive inverse of $\alpha.0$.  Then, $0 = w+(\alpha . 0) = w+(\alpha . 0+\alpha . 0) = (w+\alpha . 0)+\alpha . 0 = 0+\alpha . 0 = \alpha . 0$.  Thus, $\alpha . 0=0$.  Thus, if $\alpha = 0$ or $v=0$, then $\alpha . v = 0$.

Now, let us prove the converse - if $\alpha . v = 0$, then $\alpha = 0$ or $v=0$.  In other words, we will assume $\alpha . v = 0$ and prove $\alpha = 0$ or $v=0$.  We will do this by assuming $\alpha \neq 0$ and proving $v=0$.  In other words, we have $\alpha . v = 0$ and $\alpha \neq 0$.  As $\alpha \neq 0$, $\frac{1}{\alpha}\in \mathbb{R}$.  Thus, $$v = 1.v = \left(\frac{1}{\alpha}\alpha\right).v = \frac{1}{\alpha}.(\alpha . v) = \frac{1}{\alpha}.0 = 0.$$

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.4</span>

Let $(V,+,.)$ be a vector space.  Then, $V$ is singleton or uncountable.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We will assume $V\neq \{0\}$ and prove that $V$ is uncountable.  As $V\neq \{0\}$, there exists a non-zero vector $v\in V$.  Given any two real numbers $\alpha$ and $\beta$, $\alpha . v = \beta . v$ implies that $(\alpha - \beta).v = 0$.  As $v\neq 0$, the previous theorem tells us that $(\alpha - \beta) = 0$ or $\alpha = \beta$.  Thus, for each real number $\alpha$ we get a distinct vector $\alpha . v$.  Thus, there are atleast as many vectors as there are real numbers.  Hence $V$ is uncountable.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.5</span>

Given an vector $v$, the vector $(-1).v$ is the additive inverse of $v$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

$$
\begin{align*}
v + (-1).v = 1.v + (-1).v = (1+(-1)).v = 0.v = 0
\end{align*}
$$

</details>
</div>



<div class="academic-env env-remark">
<span class="env-label">Remark 3.1</span>

We use the article **the** to remind us that the additive inverse is unique.

</div>



<div class="academic-env env-remark">
<span class="env-label">Remark 3.2</span>

Thus, we will denote the additive inverse of $v$ by $-v$!

</div>







</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">3.2 Maximally linearly independent list of vectors</summary>




<div class="academic-env env-definition">
<span class="env-label">Definition 3.3</span>

Let $v_1,\dots, v_k\in V$.  We say $(v_1,\dots,v_k)$ is linearly independent if $\forall (\alpha_1,\dots,\alpha_k)\in \mathbb{R}^k$, $\alpha_1 v_1 + \dots +\alpha_k v_k = 0$ implies that $(\alpha_1,\dots,\alpha_k) = 0$.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 3.4</span>

Let $v_1,\dots, v_k\in V$.  We say $(v_1,\dots,v_k)$ is linearly dependent if it is not linearly independent.  More precisely, $(v_1,\dots,v_k)$ is linearly dependent if $\exists (\alpha_1,\dots,\alpha_k)\in \mathbb{R}^k$ such that $\alpha_1 v_1 + \dots +\alpha_k v_k = 0$ but $(\alpha_1,\dots,\alpha_k) \neq 0$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.6</span>

If $(v_1,v_2,\dots,v_k)$ is linearly independent, then any subcollection $(v_{i_1},v_{i_2},\dots,v_{i_m})$ (where $1\leq i_1\leq i_2\leq \dots \leq i_m \leq k$) is also linearly independent.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Proof (by contradiction))</summary>

Assume $v_{i_1},v_{i_2},\dots,v_{i_m}$ are linearly dependent, that is, $\exists (a_{i_1},\dots,a_{i_m})\neq 0$ such that $a_{i_1}v_{i_1} + \dots + a_{i_m}v_{i_m} = 0$.  Define $a_j = 0$ if $j\not\in \{i_1,i_2,\dots,i_m\}$.  Then $(a_1,\dots,a_n)\neq 0$ but,
$$a_1v_1 + \dots a_k v_k = a_{i_1}v_{i_1} + \dots + a_{i_m}v_{i_m} = 0.$$
Thus, $v_1,\dots,v_k$ are linearly dependent.  But, this is a contradiction.  So, our assumption that $v_{i_1},v_{i_2},\dots,v_{i_m}$ are linearly dependent should be incorrect.

</details>
</div>



<div class="academic-env env-remark">
<span class="env-label">Remark 3.3</span>

Notice that the theorem and proof is verbatim the same as the statement and proof of Theorem **2.12**.  I would like you to observe and appreciate how similar the proofs are.  It would be best if you tried to generalise results you have studied in the previous chapter to abstract vector spaces.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 3.5</span>

Let $v_1,\dots, v_k\in V$.  We say $(v_1,\dots,v_k)$ is maximally linearly independent if $(v_1,\dots,v_k)$ is linearly independent, but $(v_1,\dots,v_k,v)$ is not linearly independent for any $v\in V$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.10</span>

The vectors $((1,0),(0,1))$ are maximally linearly independent in $\mathbb{R}^2$.  Given any $(x,y)\in \mathbb{R}^2$, $x(1,0) + y(0,1) + (-1)(x,y) = (0,0)$.  Thus, $((1,0),(0,1),(x,y))$ is not linearly independent for any $(x,y)\in \mathbb{R}^2$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.11</span>

The vectors $((1,0,0),(0,1,0))$ are linearly independent in $\mathbb{R}^3$, but not maximally linearly independent as $((1,0,0),(0,1,0),(0,0,1))$ are linearly independent.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 3.6</span>

Given vectors $v_1,\dots,v_k\in V$, $\text{Span}(v_1,\dots,v_k)$ is the smallest subspace containing $\{v_1,\dots,v_k\}$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.13</span>

Prove that $\text{Span}(v_1,\dots,v_k) = \{\alpha_1 v_1 + \dots + \alpha_k v_k \ | \ (\alpha_1,\dots,\alpha_k)\in \mathbb{R}^k\}$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.14</span>

Let $V$ be a vector space.  Let $(v_1,\dots,v_n)$ and $(w_1,\dots, w_m)$ be two lists of vectors in $V$.  Show that if $v_i \in span(w_1,\dots, w_m)$ for all $i \in \{1,\dots n\}$, then $span(v_1,\dots , v_n) \subset span(w_1,\dots, w_m)$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.7</span>

Let $(V,+,.)$ be a vector space and let $(v_1,\dots,v_k)$ be maximally linearly independent list of vectors in $V$.  Then, $\text{Span}(v_1,\dots,v_k) = V$.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $v\in V$ be arbitrary.  As $(v_1,\dots,v_k)$ is maximally linearly independent, $(v_1,\dots,v_k,v)$ is linearly dependent.  That is there exits $0\neq (\alpha_1,\dots,\alpha_k,\alpha)\in \mathbb{R}^{k+1}$ such that $\alpha_1 v_1 + \dots \alpha_k v_k + \alpha v = 0$.  Further, $\alpha \neq 0$, as $\alpha = 0$ implies $(v_1,\dots,v_k)$ is linearly dependent which is a contradiction.  Thus, $$v = \left(-\frac{\alpha_1}{\alpha}\right).v_1 + \dots + \left(-\frac{\alpha_k}{\alpha}\right).v_k.$$
That is $v\in \text{Span}(v_1,\dots,v_k)$.  As $v\in V$ was arbitrary, we have the result.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.8</span>

The collection $(v_1,\dots,v_k)$ is maximally linearly independent in $\mathbb{R}^n$ iff $k=n$ and $(v_1,v_2,\dots,v_n)$ is linearly independent.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

If $(v_1,\dots,v_k)$ is maximally linearly independent, then $(v_1,\dots,v_k)$ is linearly independent.  Thus, by Corollary **??**, $k\leq n$.  As $(v_1,\dots,v_n)$ is maximally linearly independent, by Theorem **3.7**, $\text{Span}(v_1,\dots,v_k) = \mathbb{R}^n$.  Thus, by Corollary **??**, $k\geq n$.  Thus, $k=n$.  Of course, if $(v_1,\dots,v_n)$ is maximally linearly independent, then it is linearly independent.  Thus, we have the result.

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.12</span>

The list $((1,1,1),(0,1,0),(0,0,1))$ is a maximally linearly independent list in $\mathbb{R}^3$.  Notice that by the previous theorem, it is enough to show that $((1,1,1),(0,1,0),(0,0,1))$ is linearly independent.  To show this consider $(\alpha,\beta,\gamma)\in \mathbb{R}^3$ such that $(0,0,0) = \alpha(1,1,1) + \beta(0,1,0)+\gamma (0,0,1) = (\alpha, \alpha+\beta,\alpha+\gamma)$.  Thus, $(\alpha,\beta,\gamma) = (0,0,0)$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.15</span>

Show that the following are maximally linearly independent list of vectors in $\mathbb{R}^3$.

- $((1,1,0),(1,-1,0),(0,0,1))$ 
- $((1,2,3),(4,5,6),(13,14,13))$


</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.13</span>

Consider the list $(1,x,x^2)$ in $\mathcal{P}(2)$.  Let  $\alpha 1 + \beta . x + \gamma .x^2 0 = 0 + 0.x + 0.x^2$.  Two polynomials are equal iff the coefficients of $x^i$ is equal for all $i$.  Thus, $\alpha = 0$, $\beta = 0$, and $\gamma = 0$.  Thus, $(1,x,x^2)$ is linearly independent.  Moreover, given any polynomial $p$ of degree less than or equal to $2$, there exists $a,b,c\in \mathbb{R}$ such that $p = a + bx + cx^2$.  Thus, $(-a).1 + (-b).x + (-c).x^2 + 1.(a+bc+cx^2) = 0$.  Thus, $(1,x,x^2,p)$ is linearly dependent for every $p\in \mathcal{P}(2)$.  In other words, $(1,x,x^2)$ is a maximally linearly independent list.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.14</span>

Consider the list $(1+x+x^2,x,x^2)$ in $\mathcal{P}(2)$.  Let  $\alpha (1+x+x^2) + \beta . x + \gamma .x^2 = 0 = 0 + 0.x + 0.x^2$.  Two polynomials are equal iff the coefficients of $x^i$ is equal for all $i$.  But, $\alpha (1+x+x^2) + \beta . x + \gamma .x^2 = (\alpha) + (\alpha + \beta)x + (\alpha +\gamma)x^2$.  Thus, $\alpha = 0$, $\alpha + \beta = 0$, and $\alpha + \gamma = 0$.  Thus, $(\alpha,\beta,\gamma) = (0,0,0)$ and hence $(1+x+x^2,x,x^2)$ is linearly independent.  Moreover, given any polynomial $p$ of degree less than or equal to $2$, there exists $a,b,c\in \mathbb{R}$ such that $p = a + bx + cx^2$.  Thus, $a.(1+x+x^2) + (b-a).x + (c-a).x^2 + (-1).(a+bc+cx^2) = 0$.  Thus, $(1+x+x^2,x,x^2,p)$ is linearly dependent for every $p\in \mathcal{P}(2)$.  In other words, $(1+x+x^2,x,x^2)$ is a maximally linearly independent list.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.16</span>

Show that the following are maximally linearly independent list of vectors in $\mathcal{P}(2)$.

- $(1+x,1-x,x^2)$
- $(1+2x+3x^2,4+5x+6x^2,13+14x+13x^2)$


</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">3.3 Minimal spanning list of vectors</summary>




<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.9</span>

Let $(V,+,.)$ is a vector space and let $v_1,\dots,v_k$ be elements of $V$ such that $\text{Span}(v_1,\dots,v_k) = V$.  Given any $l-k$ vectors $v_{k+1},\dots,v_l$, $\text{Span}(v_1,\dots,v_l) = \text{Span}(v_1,\dots,v_k)$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $\{v_1,\dots,v_k\}\subset \{v_1,\dots,v_l\}$, the smallest subset containing $\{v_1,\dots,v_k\}$ is contained in the smallest subspace containing $\{v_1,\dots,v_l\}$.  Thus, $\text{Span}(v_1,\dots,v_k)\subseteq \text{Span}(v_1,\dots,v_l)$.  But as $\text{Span}(v_1,\dots,v_k) = V$, in particular $\{v_1,\dots,v_l\} \subset \text{Span}(v_1,\dots,v_k)$ and $\text{Span}(v_1,\dots,v_k)$ is a subspace.  Thus, the smallest subspace containing $\{v_1,\dots,v_l\}$ is contained in $\text{Span}(v_1,\dots,v_k)$.  Thus, $\text{Span}(v_1,\dots,v_l) \subseteq \text{Span}(v_1,\dots,v_k)$

</details>
</div>


Thus, we should be interested in the ``smallest" spanning list.  


<div class="academic-env env-definition">
<span class="env-label">Definition 3.7</span>

Let $(V,+,.)$ be a vector space over $\mathbb{R}$ and let $v_1,\dots,v_k$ be vectors in $V$.  We say the list $(v_1,\dots,v_k)$ is a minimal spanning set if 

- $\text{Span}(v_1,\dots,v_k) = V$
- $\text{Span}(v_2,\dots,v_k) \neq V$, $\text{Span}(v_1,\dots,v_{k-1}) \neq V$ and for any $i\in \{2,\dots,n-1\}$, we have $\text{Span}(v_1,\dots,v_{i-1},v_{i+1},\dots, v_k) \neq V$.


</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.15</span>

The list $((1,1,1),(0,1,0),(0,0,1))$ is a minimal spanning list in $\mathbb{R}^3$.  First notice that given any $(a,b,c)\in \mathbb{R}^3$, $(a,b,c) = a(1,1,1) + (b-a)(0,1,0) + (c-1)(0,0,1)$.  Thus, $\mathbb{R}^3 = \text{Span}((1,1,1),(0,1,0),(0,0,1))$.  Further note that, $\text{Span}((0,1,0),(0,0,1)) = \{\alpha(0,1,0) + \beta(0,0,1) \ | \ (\alpha,\beta)\in \mathbb{R}^2\} = \{(0,\alpha,\beta)\ | \ (\alpha,\beta)\in \mathbb{R}^2\}$.  Thus, the $x$-coordinate of every element in $\text{Span}((0,1,0),(0,0,1))$ is $0$.  Thus, $(1,1,1)\not\in \text{Span}((0,1,0),(0,0,1))$.  Similarly, we see that $\text{Span}((1,1,1),(0,1,0)) = \{\alpha(1,1,1) + \beta(0,1,0) \ | \ (\alpha,\beta)\in \mathbb{R}^2\} = \{(\alpha,\alpha + \beta,\alpha)\ | \ (\alpha,\beta)\in \mathbb{R}^2\}$.  If $(0,0,1)\in \text{Span}((1,1,1),(0,1,0))$, then there exists $(\alpha,\beta)\in \mathbb{R}^2$ such that $(0,0,1)=(\alpha,\alpha + \beta,\alpha)$.  That is $0 = \alpha = 1$.  But, this is not possible.  So, $(0,0,1)\not\in \text{Span}((1,1,1),(0,1,0))$.  Finally, we see that $\text{Span}((1,1,1),(0,0,1)) = \{\alpha(1,1,1) + \beta(0,0,1) \ | \ (\alpha,\beta)\in \mathbb{R}^2\} = \{(\alpha,\alpha,\alpha + \beta)\ | \ (\alpha,\beta)\in \mathbb{R}^2\}$.  If $(0,1,0)\in \text{Span}((1,1,1),(0,0,1))$, then there exists $(\alpha,\beta)\in \mathbb{R}^2$ such that $(0,1,0)=(\alpha,\alpha,\alpha + \beta)$.  That is $0 = \alpha = 1$.  But, this is not possible.  So, $(0,1,0)\not\in \text{Span}((1,1,1),(0,0,1))$.  Thus, $((1,1,1),(0,1,0),(0,0,1))$ is a minimal spanning list.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.17</span>

Show that the following are minimal spanning list of vectors in $\mathbb{R}^3$.

- $((1,1,0),(1,-1,0),(0,0,1))$
- $((1,2,3),(4,5,6),(13,14,13))$


</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.16</span>

Consider the list $(1,x,x^2)$ in $\mathcal{P}(2)$.  First notice that given any polynomial $a+bx+cx^2\in \mathcal{P}(2)$, $a+bx+cx^2 = a.1 + b.x + c.x^2$.  Thus, $\mathcal{P}(2) = \text{Span}(1,x,x^2)$.  Further note that, $\text{Span}(x,x^2) = \{\alpha.x + \beta.x^2 \ | \ (\alpha,\beta)\in \mathbb{R}^2\}$.  Thus, the constant term of every polynomial in $\text{Span}(x,x^2)$ is $0$.  Thus, $1\not\in \text{Span}(x,x^2)$.  Similarly, we see that $\text{Span}(1,x^2) = \{\alpha .1 + \beta . x^2 \ | \ (\alpha,\beta)\in \mathbb{R}^2\} = \{\alpha.1 + 0.x + \beta. x^2\ | \ (\alpha,\beta)\in \mathbb{R}^2\}$.  Thus, the co-efficient of $x$ of every polynomial in $\text{Span}(1,x^2)$ is $0$.  Thus, $x\not\in \text{Span}(1,x^2)$.  Finally, we see that $\text{Span}(1,x) = \{\alpha.1 + \beta .x \ | \ (\alpha,\beta)\in \mathbb{R}^2\} = \{\alpha .1 + \beta . x + 0.x^2\ | \ (\alpha,\beta)\in \mathbb{R}^2\}$.  Thus, the co-efficient of $x^2$ of every polynomial in $\text{Span}(1,x)$ is $0$.  Thus, $x^2\not\in \text{Span}(1,x)$.  Thus, $(1,x,x^2)$ is a minimal spanning list.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.17</span>

Consider the list $(1+x+x^2,x,x^2)$ in $\mathcal{P}(2)$.  First notice that given any polynomial $a+bx+cx^2\in \mathcal{P}(2)$, $a+bx+cx^2 = a.(1+x+x^2) + (b-a).x + (c-a).x^2$.  Thus, $\mathcal{P}(2) = \text{Span}(1+x+x^2,x,x^2)$.  Further note that, $\text{Span}(x,x^2) = \{\alpha.x + \beta.x^2 \ | \ (\alpha,\beta)\in \mathbb{R}^2\}$.  Thus, the constant term of every polynomial in $\text{Span}(x,x^2)$ is $0$.  Thus, $1+x+x^2\not\in \text{Span}(x,x^2)$.  Similarly, we see that $\text{Span}(1+x+x^2,x^2) = \{\alpha .(1+x+x^2) + \beta . x^2 \ | \ (\alpha,\beta)\in \mathbb{R}^2\} = \{\alpha.1 + \alpha.x + \alpha+\beta. x^2\ | \ (\alpha,\beta)\in \mathbb{R}^2\}$.  If $x\in \text{Span}(1+x+x^2,x^2)$, then there exists $(\alpha,\beta)\in \mathbb{R}^2$ such that $0.1 + 1.x + 0.x^2 = \alpha.1 + \alpha.x + \alpha+\beta. x^2$.  That is $0=\alpha=1$.  As this is not possible, $x\not\in \text{Span}(1+x+x^2,x^2)$.  Finally, we see that $\text{Span}(1+x+x^2,x) = \{\alpha.(1+x+x^2) + \beta .x \ | \ (\alpha,\beta)\in \mathbb{R}^2\} = \{\alpha .1 + (\alpha+\beta) . x + \alpha.x^2\ | \ (\alpha,\beta)\in \mathbb{R}^2\}$.  If $x^2\in \text{Span}(1+x+x^2,x)$, then there exists $(\alpha,\beta)\in \mathbb{R}^2$ such that $0.1 + 0.x + 1.x^2 = \alpha .1 + (\alpha+\beta) . x + \alpha.x^2$.  That is $0=\alpha=1$.  As this is not possible, $x\not\in \text{Span}(1+x+x^2,x^2)$.  Thus, $(1,x,x^2)$ is a minimal spanning list.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.18</span>

Show that the following are minimal spanning list of vectors in $\mathcal{P}(2)$.

- $(1+x,1-x,x^2)$ 
- $(1+2x+3x^2,4+5x+6x^2,13+14x+13x^2)$


</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.10</span>

Let $(V,+,.)$ be a vector space over $\mathbb{R}$ and let $(v_1,\dots,v_k)$ be a minimal spanning list.  Then, $(v_1,\dots,v_k)$ is linearly independent.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Assume $(v_1,\dots,v_k)$ is linearly dependent.  Then, there exists $(\alpha_1,\dots,\alpha_k)\in \mathbb{R}^k$ such that $(\alpha_1,\dots,\alpha_k) \neq 0$ but $\alpha_1 v_1 + \dots + \alpha_k v_k = 0$.  As, $(\alpha_1,\dots,\alpha_k) \neq 0$, there exists an $i\in \{1,\dots,k\}$ such $\alpha_i\neq 0$.  Without loss of generality we may assume that $\alpha_1\neq 0$.  Thus, $v_1 = \left(-\frac{\alpha_2}{\alpha_1}\right)v_2 + \dots + \left(-\frac{\alpha_k}{\alpha_1}\right)v_k$.  Thus, $v_1\in \text{Span}(v_2,\dots, v_k)$.  Thus, $\text{Span}(v_2,\dots, v_k) = \text{Span}(v_1,\dots, v_k) = V$.  That is, $(v_1,\dots,v_k)$ is not a minimal spanning list.  Hence our assumption that $(v_1,\dots,v_k)$ is linearly dependent has to be wrong.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.11</span>

Let $(V,+,.)$ be a vector space over $\mathbb{R}$.  Then $(v_1,\dots,v_k)$ is a minimal spanning list iff $(v_1,\dots,v_k)$ is a maximally linearly independent list.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Assume $(v_1,\dots,v_k)$ is a minimal spanning list.  Then, by Theorem **3.10**, $(v_1,\dots,v_k)$ is linearly independent.  Further, as $\text{Span}(v_1,\dots,v_k) = V$, given any vector $v\in V$, there exists $(\alpha_1,\dots,\alpha_k)\in \mathbb{R}^k$ such that $v = \alpha_1 v_1 + \dots \alpha_k v_k$.  Thus, $\alpha_1 v_1 + \dots \alpha_k v_k + (-1)v = 0$.  As, $-1\neq 0$, we have $(v_1,\dots,v_k,v)$ is linearly dependent.  As $v\in V$ was arbitrary, we know that $(v_1,\dots,v_k,v)$ is linearly dependent for every $v\in V$.  Thus, $(v_1,\dots,v_k)$ is a maximally linearly independent list.  

Assume $(v_1,\dots,v_k)$ is a maximally linearly independent list.  Then, by Theorem **3.7**, we have $\text{Span}(v_1,\dots,v_k) = V$.  Further, if $v_i\in \text{Span}(v_1,\dots,v_{i-1},v_{i+1},v_k)$, then there exists a tuple $(\alpha_1,\dots,\alpha_{i-1},\alpha_{i+1},\dots,\alpha_k)\in \mathbb{R}^{k-1}$ such that $v_i = \alpha_1 v_1 + \dots + \alpha_{i-1}v_{i-1}+\alpha_{i+1}v_{i+1}+\dots \alpha_k v_k$.  That is, $\alpha_1 v_1 + \dots + \alpha_{i-1}v_{i-1} (-1)v_i +\alpha_{i+1}v_{i+1}+\dots \alpha_k v_k$.  That is $(v_1,\dots,v_k)$ is linearly dependent - a contradiction.  Thus, $v_i\not\in \text{Span}(v_1,\dots,v_{i-1},v_{i+1},v_k)$ for all $i$.  Thus, $(v_1,\dots,v_k)$ is a minimal spanning set.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.12</span>

Let $(V,+,.)$ be a vector space over $\mathbb{R}$.  Let $(v_1,\dots,v_k)$ be linearly independent and $\text{Span}(v_1,\dots,v_k) = V$.  Then,

- $(v_1,\dots,v_k)$ is a minimal spanning list
- $(v_1,\dots,v_k)$ is a maximally linearly independent list.



</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $\text{Span}(v_1,\dots,v_k) = V$, given any vector $v\in V$ there exists $(\alpha_1,\dots,\alpha_k)\in \mathbb{R}^k$ such that $v = \alpha_1 v_1 + \dots + \alpha_k v_k$.  Thus, $\alpha_1 v_1 + \dots + \alpha_k v_k + (-1)v = 0$.  As $-1\neq 0$, $(v_1,\dots,v_k,v)$ is linearly dependent.  As $v$ was arbitrary, for all $v\in V$, $(v_1,\dots,v_k,v)$ is linearly dependent.  But, $(v_1,\dots,v_k)$ is linearly independent.  Thus, $(v_1,\dots,v_k)$ is maximally linearly independent.  And by Theorem **3.11**, $(v_1,\dots,v_k)$ is also a minimal spanning list.

</details>
</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">3.4 Finite dimensional vector spaces</summary>



Inspired by what we had seen for $\mathbb{R}^n$, given any vector space $(V,+,.)$ we would ideally like to construct a linearly independent spanning list.  However, as we can see from the following example, it is not always possible.


<div class="academic-env env-example">
<span class="env-label">Example 3.18</span>

Let $(\mathcal{P},+,.)$ be the vector space of polynomials.  Given any $k$ polynomials $(p_1,\dots,p_k)$, let $n = \max\{deg(p_1),\dots,deg(p_k)\}$.  Then, note that $\{p_1,\dots,p_k\}\subseteq \mathcal{P}(n)$.  Thus, $\text{Span}(p_1,\dots,p_k)\subseteq \mathcal{P}(n)\subsetneq \mathcal{P}$.  Thus, we cannot find any finite list of vectors that span $\mathcal{P}$.  If we cannot find a spanning set, we certainly cannot find a minimal spanning set.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 3.8</span>

A vector space $(V,+,.)$ is called a finite dimensional vector space (f.d.v.s) if there exits a list $(v_1,\dots,v_k)$ of vectors in $V$ that span $V$, that is $\text{Span}(v_1,\dots,v_k) = V$.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 3.9</span>

A list of vectors $(v_1,\dots,v_n)$ is called a basis of a vector space $(V,+,.)$ if 

- $\text{Span}(v_1,\dots,v_n) = V$.
- $(v_1,\dots,v_n)$ is linearly independent.  


</div>



<div class="academic-env env-remark">
<span class="env-label">Remark 3.4</span>

Thus, by Theorem **3.12**, $(v_1,\dots,v_n)$ is a basis iff $(v_1,\dots,v_n)$ is a minimal spanning list and maximally linearly independent list.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.19</span>

The vector space $(\mathbb{R}^n,+,.)$ is a finite dimensional vector space and $(e_1,\dots,e_n)$ is a basis.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.20</span>

The list $((1,1,0),(1,-1,0),(0,0,1))$ is a basis for $\mathbb{R}^3$. Another basis for $\mathbb{R}^3$ is the list $((1,2,3), (4,5,6), (13,14,13))$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.21</span>

The list $(1,x,x^2,x^3,x^4,x^5)$ is a basis for $\mathcal{P(2)}$.  First observe that $0$ in $\mathcal{P}(2)$ is the polynomial $0.1 + 0.x + 0.x^2$.  Thus, $\alpha_1 .1 + \alpha_2 .x + \alpha_3.x^2 = 0.1 + 0x + 0.x^2$.  As two polynomials are equal iff their corresponding coefficients are equal, have $(\alpha_1,\alpha_2,\alpha_3) = 0$.  Thus, $(1,x,x^2)$ is linearly independent.  Further, given any polynomial $p$ of degree less than or equal to $2$, we can find $a,b,c\in \mathbb{R}$ such that $p = a + bx + cx^2$.  Therefore, $p = a.1 + b.x + c.x^2\in \text{Span}(1,x,x^2)$.

</div>


More generally,


<div class="academic-env env-example">
<span class="env-label">Example 3.22</span>

The vector space of polynomials of degree less than or equal to $n$, $\mathcal{P}(n)$ is a finite dimensional vector space, with a basis $(1,x,\dots,x^n)$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.23</span>

The list $(1+x,1-x,x^2)$ is a basis for $\mathcal{P}(2)$ and the list $(1+2x+3x^2,4+5x+6x^2,13+14x+13x^2)$ is another basis for $\mathcal{P}(2)$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.24</span>

Let $I_n = \{1,\dots,n\}$.  Then, the vector space $(\mathcal{F}(I_n,\mathbb{R}),+,.)$ is a finite dimensional vector space.  Moreover, if we define functions $f_i:I_n\to \mathbb{R}$ as 
$$
\begin{align*}
f_i(j) = \begin{cases}
1 & \text{ if $i=j$}\\
0 & \text{otherwise}
\end{cases}
\end{align*}
$$
then $(f_1,\dots,f_n)$ form a basis for $(\mathcal{F}(I_n,\mathbb{R}),+,.)$.  To see that given any function $f:I_n\to \mathbb{R}$, define the linear combination $f(1)f_1 + \dots f(n)f_n$.  Then, notice that $(f(1)f_1 + \dots + f(n)f_n)(i)$
$$
\begin{align*}
&= f(1)f_1(i) + \dots + f(i-1)f_{i-1}(i)+ f(i)f_i(i) + f(i+1)f_{i+1} + \dots + f(n)f_n(i)\\
&= f(1).0 + \dots + f(i-1).0 + f(i).1 + f(i+1).0 + \dots + f(n).0\\
&= f(i)
\end{align*}
$$
As $i$ was arbitrary, $f(1)f_1 + \dots f(n)f_n = f$.  As $f$ was arbitrary, $\text{Span}(f_1,\dots,f_n) = \mathcal{F}(I_n,\mathbb{R})$.  Moreover, if $\alpha_1 f_1 + \dots +\alpha_n f_n = 0$, then $\alpha_1 f_1 + \dots +\alpha_n f_n(i) = 0$ for all $i$ (as here the zero vector is the constant function $0$).  But, $\alpha_1 f_1 + \dots +\alpha_n f_n(i) = \alpha_i$.  Therefore, $(\alpha_1,\dots,\alpha_n) = 0$, thus, $(f_1,\dots,f_n)$ is linearly independent.

</div>


Note that the trivial vector space $({0},+,.)$ is finite dimensional as $\text{Span}(0) = \{0\}$.  However, as the only vector in the vector space is the $0$ vector, we cannot find a linearly independent list of vectors - unless we accept the empty list!  There is some merit in accepting the empty list as that would give us a better reason to say that the trivial vector space has dimension $0$.  Else, you can just assume that vector space is non-trivial.   


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.13</span>

Every non-trivial finite dimensional vector space has a basis.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $(V,+,.)$ be an arbitrary non-trivial finite dimensional vector space.  As $V$ is finite dimensional, there exists vectors $(v_1,\dots,v_k)$ such that $\text{Span}(v_1,\dots,v_k) = V$.  If $(v_1,\dots,v_k)$ is not linearly independent, then there exists, $(\alpha_1,\dots,\alpha_k)\in \mathbb{R}^k$ such that $(\alpha_1,\dots,\alpha_k)\neq 0$ and $\alpha_1 v_1 + \dots + \alpha_k v_k=0$.  As the span does not depend on the ordering of the vectors, we might assume without loss of generality that $\alpha_k \neq 0$.  Thus, $v_k = -\left(\frac{\alpha_1}{\alpha_k}\right)v_1 + \dots + -\left(\frac{\alpha_{k-1}}{\alpha_k}\right)v_{k-1}$.  Thus, $v_k\in \text{Span}(v_1,\dots,v_{k-1})$ and hence $\text{Span}(v_1,\dots,v_{k-1}) = \text{Span}(v_1,\dots,v_{k})$.  Keep repeating the process until you get a linearly independent list of vectors.  It is a valid concern that we might end up in the scenario where $\text{Span}(v) = V$, but $(v)$ is not linearly independent.  But, a single vector is linearly dependent iff it is the $0$ vector.  Thus, this would imply that $V= \{0\}$.  But, we had assumed that $V$ is a non-trivial finite dimensional vector space, so this cannot happen.

</details>
</div>


Notice that in the above proof, we took a spanning list and threw away some vectors to form a basis.  We can do the opposite process, if we start with a linearly independent list.  More precisely,


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.14</span>

Let $(V,+,.)$ be a finite dimensional vector space. Then, given any linearly independent list $(v_1,\dots,v_k)$, $\exists \ v_{k+1},\dots,v_n\in V$ such that $(v_1,\dots,v_n)$ is a basis of $V$.


</div>


To make the proof easier to understand, we introduce the operation of appending an element to a list.  More precisely, given a list $(v_1,\dots,v_m)$ and a vector $v$, we say $(v_1,\dots,v_m)\oplus v = (v_1\dots,v_m,v)$.


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $V$ is a finite dimensional vector space, there exists vectors $(w_1,\dots,w_l)$ such that $\text{Span}(w_1,\dots,w_l) = V$.  Let us say $B = (v_1,\dots,v_k)$ to begin with.  The idea is to successively modify the list $B$, till we get a basis.  First, if $w_1\in \text{Span}(B)$ then keep $B$ as it is, else assign the name $B$ to $B\oplus w_1$.  Keep repeating this process.  At the $i$th state, if $w_i\in \text{Span}(B)$ then keep $B$ as it is, else assign the name $B$ to $B\oplus w_i$.  Notice that at each step, we are adding a vector that does not belong to $\text{Span}(B)$, thus the list continues to remain linearly independent.  Moreover, after $l$ steps, we know that $\{w_1,\dots,w_l\} \subset \text{Span}(B)$.  Thus, $B$ forms a basis.

</details>
</div>


\begin{corollary}
Let $(V,+,.)$ be a finite dimensional vector space, let $n=dim(V)$, and let $(v_1,\dots,v_n)$ be a linearly independent list of vectors.  Then, $(v_1,\dots,v_n)$ is a basis of $V$.
\end{corollary}


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.15</span>

Let $(V,+,.)$ be a vector space.  A list $(v_1,\dots,v_n)$ is a basis iff $\forall v\in V$, there exists a unique $(\alpha_1,\dots,\alpha_n)\in \mathbb{R}^n$ such that $v = \alpha_1 v_1+\dots + \alpha_n v_n$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let us assume that $(v_1,\dots,v_n)$ is a basis.  Then, $\text{Span}(v_1,\dots,v_n) = V$.  Thus, given any $v\in V$, there exists $(\alpha_1,\dots,\alpha_n)\in \mathbb{R}^n$ such that $v = \alpha_1 v_1+\dots + \alpha_n v_n$.  So, we just need to show that this representation is unique.  But, if $(\beta_1,\dots,\beta_n)\in \mathbb{R}^n$ and $v= \beta_1 v_1 + \dots + \beta_n v_n$.  Thus, $\alpha_1 v_1+\dots + \alpha_n v_n = \beta_1 v_1 + \dots + \beta_n v_n$.  That is $(\alpha_1 - \beta_1)v_1 + \dots + (\alpha_n -\beta_n)v_n = 0$.  As, $(v_1,\dots,v_n)$ is linearly independent, this would imply that $\alpha_i = \beta_i$ for all $i$.  Thus, the representation is indeed unique.  

Now assume that $\forall v\in V$, there exists a unique $(\alpha_1,\dots,\alpha_n)\in \mathbb{R}^n$ such that $v = \alpha_1 v_1+\dots + \alpha_n v_n$.  Then, clearly, $\text{Span}(v_1,\dots,v_n) = V$.  Moreover, note that, $0 = 0.v_1 + \dots + 0.v_n$.  Thus, by uniqueness, if $\alpha_1 v_1 + \dots \alpha_n v_n = 0$, then $\alpha_i = 0$ for all $i$.  Therefore, $(v_1,\dots,v_n)$ is linearly independent.  Hence $(v_1,\dots,v_n)$ is a basis.

</details>
</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 3.1</span>

If $v\in \text{Span}(v_1,\dots,v_k)$, then $(v,v_1,\dots,v_k)$ is linearly dependent.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $v\in \text{Span}(v_1,\dots,v_k)$, there exists $(\alpha_1,\dots,\alpha_k)\in \mathbb{R}^k$ such that $v = \alpha_1 v_1 + \dots + \alpha_k v_k$.  Therefore, $(-1)v + \alpha_1 v_1 + \dots + \alpha_k v_k = 0$ and therefore $(v,v_1,\dots,v_k)$ is linearly dependent.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.16</span>

Let $(V,+,.)$ be a finite dimensional vector space.  Let $v_i\in V$ for all $i\in \{1,\dots,k\}$ and let $w_j\in V$ for all $j\in \{1,\dots, l\}$.  If $(v_1,\dots,v_k)$ are linearly independent and $\text{Span}(w_1,\dots,w_l) = V$, then $k\leq l$.<span class="footnote-trigger" title="The statement of this theorem and its proof is from \cite{Axler"><sup>[*]</sup></span>.  The proof is however significantly elaborated.}


</div>


The proof verbatim the same as the proof of Theorem **2.13**, the analogous result for subspaces in $\mathbb{R}^n$. This proof is very involved.  So, we would first give the key ideas of the proof without getting into the details.  Hopefully, keeping this idea in mind would help you appreciate the proof better.


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Proof Sketch)</summary>

We start with the list $(w_1,\dots,w_l)$ and adjoin the vector $v_k$ to it to obtain the list $(v_k,w_1,\dots,w_l)$.  We show $(v_k,w_1,\dots,w_l)$ is linearly dependent and therefore we may without loss of generality assume $\text{Span}(w_1,\dots,w_l) = \text{Span}(v_k,w_2,\dots,w_l)$.  Thus, we replace the list $(w_1,\dots,w_l)$ with $(v_k,w_2,\dots,w_l)$.  We repeat this process - at every stage, we add a $v$ and drop a $w$.  If we run out of $w$'s before we run out of $v$'s then a subcollection of $v$'s  will span $V$.  This would contradict the fact that $(v_1,\dots,v_k)$ is linearly independent.  Thus, there should be at least as many $w$'s as there are $v$'s.

</details>
</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $\text{Span}(w_1,\dots,w_l) = V$ and $v_k\in V$, by Lemma **3.1** we know that $(v_k,w_1,\dots,w_l)$ is linearly dependent.  Thus, there exists $(a_k,b_1,\dots,b_l) \neq 0$ such that $a_k v_k + b_1 w_1 + \dots + b_l w_l = 0$.  Notice if $(b_1,\dots, b_l) = 0$, then $a_k\neq 0$ but $0 = a_k v_k + b_1 w_1 + \dots + b_l w_l = a_k v_k$.  Which implies that $v_k$ is the $0$ vector.  But then $0v_1 + \dots + 0v_{k-1} + 1v_k = 0$.  This contradicts our assumption that $(v_1,\dots,v_k)$ is linearly independent.  So, $(b_1,\dots, b_l) \neq 0$.  If $l = 1$, then $V = \text{Span}(w_1)$ and $b_1\neq 0$.  Thus, $w_1 = -\frac{a_k}{b_1}v_k$.  Hence $\text{Span}(v_k) = \text{Span}(w_1) = V$.  As $(v_1,\dots,v_k)$ is linearly independent, this would imply that $k = 1$.  Else, $v_1 \in \text{Span}(v_k)$, which means $v_1 = \alpha_k v_k$.  Then, $(-1)v_1 + 0v_2 + \dots + 0v_{k-1} + \alpha_k v_k = 0$ and $(v_1,\dots,v_k)$ is linearly dependent - a contradiction.  Thus, if $l=1$, then $k=1$ and we have $k\leq l$.  So, we may assume $l> 1$.  If $k = 1$, then $k < l$.  Thus, we may assume that $k>1$.  Without loss of generality (Notice that span does not depend on the order of the vectors.  Thus, if needed we can renumber $w_1,\dots,w_l$) we may assume that $b_1\neq 0$.  Thus, 
$$w_1 = \left(-\frac{a_k}{b_1}\right)v_k + \left(-\frac{b_2}{b_1}\right)w_2 + \left(-\frac{b_3}{b_1}\right)w_3 + \dots + \left(-\frac{b_l}{b_1}\right)w_l.$$
Thus, $V = \text{Span}(w_1,\dots,w_l) \subset \text{Span}(v_k,w_2,\dots,w_l)$.  But as $\{v_k,w_2,\dots,w_l\}\subset V$, we have $\text{Span}(v_k,w_2,\dots,w_l) \subset V$.  That is $\text{Span}(v_k,w_2,\dots,w_l) = V$.  

Now, As $\text{Span}(v_k,w_2,\dots,w_l) = V$ and $v_{k-1}\in V$, by Lemma **2.1** $(v_{k-1},v_k,w_2,\dots,w_l)$ is linearly dependent.  Thus, there exists $(a_{k-1},a_k,b_2,\dots,b_l) \neq 0$ such that $a_{k-1}v_{k-1} + a_k v_k + b_2 w_2 + \dots + b_l w_l = 0$.  Notice if $(b_2,\dots, b_l) = 0$, then $(a_{k-1},a_k)\neq 0$ but $0 = a_{k-1}v_{k-1} + a_k v_k + b_1 w_1 + \dots + b_l w_l = a_{k-1}v_{k-1} + a_k v_k$.  But then $0v_1 + \dots + 0v_{k-2} + a_{k-1}v_{k-1} + a_k v_k = 0$.  This contradicts our assumption that $(v_1,\dots,v_k)$ is linearly independent.  So, $(b_2,\dots, b_l) \neq 0$.  If $l = 2$, then $V = \text{Span}(v_k,w_2)$ and $b_2\neq 0$.  Thus, $w_2 = \left(-\frac{a_{k-1}}{b_2}\right) v_{k-1} + \left(-\frac{a_{k}}{b_2}\right)v_k$.  Thus, $V = \text{Span}(v_k,w_2) \subset \text{Span}(v_{k-1},v_k)$.  But, as $\{v_{k-1},v_k\}\subset V$, $\text{Span}(v_{k-1},v_k) = V$.  As $(v_1,\dots,v_k)$ is linearly independent, this would imply that $k = 2$.  Else, $v_1 \in \text{Span}(v_{k-1},v_k)$, which means $v_1 = \alpha_{k-1}v_{k-1} + \alpha_k v_k$.  Then, $(-1)v_1 + 0v_2 + \dots + 0v_{k-2} + \alpha_{k-1}v_{k-1} + \alpha_k v_k = 0$ and $(v_1,\dots,v_k)$ is linearly dependent - a contradiction.  Thus, if $l=2$ and $k > 1$, then $k=2$ and we have $k\leq l$.  So, we may assume $l> 2$.  If $k = 2$, then $k < l$ and we are done.  So, we may assume $k>2$. Without loss of generality (by renumbering $w_2,\dots,w_l$) we may assume that $b_2\neq 0$.  Thus, 
$$w_2 = \left(-\frac{a_{k-1}}{b_2}\right)v_{k-1} + \left(-\frac{a_{k}}{b_2}\right)v_{k} + \left(-\frac{b_3}{b_2}\right)w_3 + \left(-\frac{b_4}{b_2}\right)w_4 + \dots + \left(-\frac{b_l}{b_2}\right)w_l.$$
Thus, $V = \text{Span}(v_k,w_2,\dots,w_l) \subset \text{Span}(v_{k-1}, v_k,w_3,\dots,w_l)$.  But as $\{v_{k-1},v_k,w_3,\dots,w_l\}\subset V$, we have $\text{Span}(v_{k-1},v_k,w_3,\dots,w_l) \subset V$.  That is $\text{Span}(v_{k-1},v_k,w_3,\dots,w_l) = V$. 

We can continue this process and assume $l > i$ and $k > i$.  As $\text{Span}(v_{k-i+1},\dots,v_k,w_{i+1},\dots,w_l) = V$ and $v_{k-i}\in V$, by Lemma **2.1** $(v_{k-i},\dots,v_k,w_{i+1},\dots,w_l)$ is linearly dependent. Thus, there exists $(a_{k-i},\dots,a_k,b_{i+1},\dots,b_l) \neq 0$ such that $a_{k-i}v_{k-i} + \dots + a_k v_k + b_{i+1} w_{i+1} + \dots + b_l w_l = 0$.  Notice if $(b_{i+1},\dots, b_l) = 0$, then $(a_{k-i},\dots,a_k)\neq 0$ but $0 = a_{k-i}v_{k-i} + \dots + a_k v_k + b_{i+1} w_{i+1} + \dots + b_l w_l = a_{k-i}v_{k-i} + \dots + a_k v_k$.  But then $0v_1 + \dots + 0v_{k-i-1} + a_{k-i}v_{k-i} + \dots + a_k v_k = 0$.  This contradicts our assumption that $(v_1,\dots,v_k)$ is linearly independent.  So, $(b_{i+1},\dots, b_l) \neq 0$.  If $l=i+1$, then $\text{Span}(v_{k-i+1},\dots,v_k,w_l) = V$ and $b_l\neq 0$.  Thus, 
$$w_l = \left(-\frac{a_{k-i}}{b_l}\right)v_{k-i} + \dots + \left(-\frac{a_{k}}{b_l}\right)v_{k}.$$
That is $V = \text{Span}(v_{k-i+1},\dots,v_k,w_l) \subset \text{Span}(v_{k-i},\dots,v_k)$.  As $\{v_{k-i},\dots,v_k\}\subset V$, we have $\text{Span}(v_{k-i},\dots,v_k) = V$.  If $k-i > 1$, then $v_1\in \text{Span}(v_{k-i},\dots,v_k) = V$ and hence $(v_1,\dots,v_k)$ is linearly dependent.  Therefore $k-i \leq 1$, that is $k\leq i+1 = l$.  **Thus, we will not run out of $w$'s before $v$'s**.  

Thus, the above process works for each $i$.  When $i = k-1$, the process terminates and the proof becomes complete.  Thus, we have the result.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.17</span>

Let $(V,+,.)$ be a finite dimensional vector space.  Let $(v_1,\dots,v_m)$ and $(w_1,\dots,w_n)$ both be a basis for $V$.  Then, $m=n$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $(v_1,\dots,v_n)$ is a basis, $(v_1,\dots,v_m)$ is linearly independent and $\text{Span}(v_1,\dots,v_m) = V$.  And as $(w_1,\dots,w_n)$ is a basis, $(w_1,\dots,w_n)$ is linearly independent and $\text{Span}(w_1,\dots,w_n) = V$.  But, $(v_1,\dots,v_m)$ is linearly independent and $\text{Span}(w_1,\dots,w_n) = V$ would imply (using previous theorem) that $m\leq n$.  Also, $(w_1,\dots,w_n)$ is linearly independent and $\text{Span}(v_1,\dots,v_m) = V$ would imply (by previous theorem) that $n\leq m$.  Thus, $m=n$.

</details>
</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 3.10</span>

Let $(V,+,.)$ be a finite dimensional vector space.  We say the dimension of $V$ (denoted as $dim(V)$) is $n$ if there exists a basis $(v_1\dots,v_n)$ of $V$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.25</span>

Let $M_2(\mathbb{R}) = \left\{\begin{bmatrix}a&b\\c&d\end{bmatrix} \ | \ a,b,c,d\in \mathbb{R}\right\}$ and let $+$ and $.$ be defined as follows:
$$
\begin{align*}
\begin{bmatrix}a_1 & b_1\\c_1 & d_1\end{bmatrix} + \begin{bmatrix}a_2 & b_2 \\c_2 & d_2\end{bmatrix} &= \begin{bmatrix}a_1 + a_2 & b_1 + b_2 \\ c_1 + c_2 & d_1+d_2\end{bmatrix}\\
\alpha \begin{bmatrix}a&b\\c&d\end{bmatrix} &= \begin{bmatrix}\alpha a & \alpha b\\\alpha c & \alpha d\end{bmatrix}
\end{align*}
$$
Then, $M_2(\mathbb{R})$ is a vector space.  Moreover, $\left(\begin{bmatrix}1&0\\0&0\end{bmatrix},\begin{bmatrix}0&1\\0&0\end{bmatrix},\begin{bmatrix}0&0\\1&0\end{bmatrix},\begin{bmatrix}0&0\\0&1\end{bmatrix}\right)$ is a basis for $M_2(\mathbb{R})$.  To show that $\text{Span}\left(\begin{bmatrix}1&0\\0&0\end{bmatrix},\begin{bmatrix}0&1\\0&0\end{bmatrix},\begin{bmatrix}0&0\\1&0\end{bmatrix},\begin{bmatrix}0&0\\0&1\end{bmatrix}\right) = M_2(\mathbb{R})$, note that given any element $\begin{bmatrix}a&b\\c&d\end{bmatrix}\in M_2(\mathbb{R})$,
$$\begin{bmatrix}a&b\\c&d\end{bmatrix} = a \begin{bmatrix}1&0\\0&0\end{bmatrix} + b \begin{bmatrix}0&1\\0&0\end{bmatrix} + c \begin{bmatrix}0&0\\1&0\end{bmatrix} + d \begin{bmatrix}0&0\\0&1\end{bmatrix}.$$
As the zero in this vector space is the matrix $\begin{bmatrix}0&0\\0&0\end{bmatrix}$, it is also clear that 
$$\begin{bmatrix}0&0\\0&0\end{bmatrix} = \alpha \begin{bmatrix}1&0\\0&0\end{bmatrix} + \beta \begin{bmatrix}0&1\\0&0\end{bmatrix} + \gamma \begin{bmatrix}0&0\\1&0\end{bmatrix} + \delta \begin{bmatrix}0&0\\0&1\end{bmatrix} = \begin{bmatrix}\alpha&\beta\\\gamma&\delta\end{bmatrix}$$
iff $(\alpha,\beta,\gamma,\delta) = 0$.  Thus, $\left(\begin{bmatrix}1&0\\0&0\end{bmatrix},\begin{bmatrix}0&1\\0&0\end{bmatrix},\begin{bmatrix}0&0\\1&0\end{bmatrix},\begin{bmatrix}0&0\\0&1\end{bmatrix}\right)$ is linearly independent.  Thus, we can conclude that $dim(M_2(\mathbb{R})) = 4$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.26</span>

Conside the vector space $\mathcal{F}(\{1,2,3\},\mathbb{R})$.  Note that any function $f:\{1,2,3\} \to \mathbb{R}$ is defined uniquely once we specify $f(1),f(2)$, and $f(3)$.  Let $f_1:\{1,2,3\}\to \mathbb{R}$ be the function with $f_1(1) = 1$, $f_1(2) = 0$, and $f_1(3) = 0$. Let $f_2:\{1,2,3\}\to \mathbb{R}$ be the function with $f_2(1) = 0$, $f_2(2) = 1$, and $f_2(3) = 0$. Let $f_3:\{1,2,3\}\to \mathbb{R}$ be the function with $f_3(1) = 0$, $f_3(2) = 0$, and $f_3(3) = 1$.  Then, $(f_1,f_2,f_3)$ is a basis for $\mathcal{F}(\{1,2,3\},\mathbb{R})$.  To show linear independence, note that the zero vector is the function $0:\{1,2,3\}\to \mathbb{R}$ such that $0(1) = 0$, $0(2)=0$, and $0(3) = 0$.  Thus, $\alpha_1 f_1 + \alpha_2 f_2 + \alpha_3 f_3 = 0$ iff 
$$
\begin{align*}
\alpha_1 = (\alpha_1 f_1 + \alpha_2 f_2 + \alpha_3 f_3)(1) = 0(1) = 0\\ 
\alpha_2 = (\alpha_1 f_1 + \alpha_2 f_2 + \alpha_3 f_3)(2) = 0(2) = 0\\
\alpha_3 = (\alpha_1 f_1 + \alpha_2 f_2 + \alpha_3 f_3)(3) = 0(3) = 0
\end{align*}
$$
Thus, $(f_1,f_2,f_3)$ is linearly independent.  To show that $(f_1,f_2,f_3)$ span $\mathcal{F}(\{1,2,3\},\mathbb{R})$, note that given any $f:\{1,2,3\}\to \mathbb{R}$, $f = f(1).f_1 + f(2).f_2 + f(3)f_3$ as
$$
\begin{align*}
f(1) = f(1).1 + f(2).0 + f(3).0 = (f(1).f_1 + f(2).f_2 + f(3)f_3)(1)\\
f(2) = f(1).0 + f(2).1 + f(3).0 = (f(1).f_1 + f(2).f_2 + f(3)f_3)(2)\\
f(3) = f(1).0 + f(2).0 + f(3).1 = (f(1).f_1 + f(2).f_2 + f(3)f_3)(3)
\end{align*}
$$

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.18</span>

Let $(V,+,.)$ be a finite dimensional vector space and let $W$ be a subspace of $V$.  Then, $W$ is also a finite dimensional vector space.  Moreover, $dim(W) \leq dim(V)$.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $V$ is finite dimensional, there exists a list $(v_1,\dots,v_n)$ such that $Span(v_1,\dots,v_n) = V$. If $W = \{0\}$, then $W$ is a f.d.v.s by convention and $dim(W) = 0$.  If $W\neq \{0\}$, let $w_1\in W$ be a a non-zero vector.  If $Span(w_1)= W$, then $W$ is not finite dimensional.  If not, let $w_2\in W\setminus Span(w_1)$ - that is $(w_1,w_2)$ is linearly independent.  If $Span(w_1,w_2) = W$, then $W$ is finite dimensional.  If not, let $w_3\in W\setminus Span(w_1,w_2)$ - that is $(w_1,w_2,w_3)$ is linearly independent.  Keep continuing this process.  After $i$ steps, you would have a linearly independent list $(w_1,\dots,w_i)$.  But, note that $i\leq n$ by Theorem **3.16**.  Thus, the process has to terminate.  

Further, let $(v_1,\dots,v_n)$ is a basis of $V$ and $(w_1,\dots,w_k)$ be a basis of $W$.  Then, $(w_1,\dots,w_k)$ is a linearly independent list of vectors in $V$ and $(v_1,\dots,v_n)$ is a spanning list.  Thus, by Theorem **3.16**, $k\leq n$.  That is, $dim(W)\leq dim(V)$.

</details>
</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.19</span>

Let $\mathcal{L}(\mathbb{R}^3,\mathbb{R}^2)$ be the set of linear functions from $\mathbb{R}^3$ to $\mathbb{R}^2$.  Given $f,g\in \mathcal{L}(\mathbb{R}^3,\mathbb{R}^2)$, define $f+g:\mathbb{R}^3\to \mathbb{R}^2$ as $(f+g)(v) = f(v) + g(v)$.  Given $f\in \mathcal{L}(\mathbb{R}^3,\mathbb{R}^2)$ and $\alpha\in \mathbb{R}$, define $\alpha.f:\mathbb{R}^3\to \mathbb{R}^2$ as $(\alpha.f)(v) = \alpha f(v)$.  Then, show that $(\mathcal{L}(\mathbb{R}^3,\mathbb{R}^2),+,.)$ forms a vector space.  Is $\mathcal{L}(\mathbb{R}^3,\mathbb{R}^2)$ finite dimensional space? Prove your claim

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.20</span>

Let $P_3$ be the set of all polynomials of degree less than or equal to 3.   Prove or disprove: there exists a basis $(p_0, p_1, p_2, p_3)$ of $P_3$ such that none of the polynomials $p_0$, $p_1$, $p_2$, $p_3$ has degree 2. %Problem 9, Chapter 2 Axler

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.21</span>

Let $V = \mathbb{R}^3$.  Consider the two subspaces $U = span((1,0,0),(3,1,1),(-1,1,1))$ and $W = span((0,1,2),(0,0,1))$. Find the dimension of $U \cap W$.  Explain your answer!

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.22</span>

Let $\mathcal{P}(n)$ be set of all polynomials of degree less than or equal to n.  Show that $(1, 1+x, 1+x+x^2, 1+x+x^2+x^3, \dots, 1+x+\dots+x^n)$ is a basis of $\mathcal{P}(n)$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.23</span>

Let $L:\mathbb{R}^n \to \mathbb{R}^n$ be a linear map.  Show that the set $\{v\in \mathbb{R}^n : L(v) = \lambda v\}$ is a subspace for all $\lambda \in \mathbb{R}$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.24</span>

Let $U = \{f\in \mathcal{F}(\mathbb{N}, \mathbb{R}) \ | \ f(n) = 0 \ \forall n\geq 10\}$.  Show that $U$ is a subspace of $(\mathcal{F}(\mathbb{N}, \mathbb{R}),+,.)$ and find the dimension of $U$.

</div>




</details>