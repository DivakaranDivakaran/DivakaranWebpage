# Solving m equations in n unknowns

The previous chapter was a warm-up before we tackle the more general question of solving $m$ equations in $n$ unknowns.  If there are two unknowns, we may call them $x$ and $y$.  If there are $3$ we may call them $x$, $y$, and $z$.  But, if we need arbitrarily large number of unknowns, then it is difficult to use the letters of the alphabet to represent them.  Therfore, we would use subscripts to denote these unknowns.  The $n$ unknowns would typically be written as $x_1,x_2,\dots, x_n$.  In fact, we already used this notation in the previous chapter in some places - mainly because I am so used to it.  Thus, the most general system of $m$ equations in $n$ unknowns would have the following form:

$$
\begin{align}
    \label{eqn: gennonhom}
    a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_n &= b_1\\ \nonumber
    a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_n &= b_2\\ \nonumber
    .\\ \nonumber
    .\\ \nonumber
    .\\ \nonumber
    a_{m1} x_1 + a_{m2} x_2 + \dots + a_{mn} x_n &= b_m\\ \nonumber
\end{align}
$$

Thus, the solutions to this system of equations is a tuple $(x_1,x_2,\dots, x_n)$ where each $x_i$ is a real number.  We will start by first understanding the collection of all such tuples.  



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.1 Cartesian products</summary>



The set $\mathbb{R}^2$ (the Cartesian plane) was the set $\{(x,y) \ | \ x,y \in \mathbb{R}\}$.  This is a an example of a more general construction called the Cartesian product.  


<div class="academic-env env-definition">
<span class="env-label">Definition 2.1 (Cartesian product)</span>

The Cartesian product of two sets $A$ and $B$ is the set $A\times B:= \{(a,b) \ | \ a\in A \text{ and } b\in B\}$

</div>


Given a number $a$, the quantity $a\times a$ is represented as $a^2$.  Following this convention, the set $\mathbb{R} \times \mathbb{R}$ is represented as $\mathbb{R}^2$.  Intuitively, we feel $(x_1,\dots, x_n)$ should similarly be in $\mathbb{R}^n$.  But, even when $n=3$, there is some ambiguity in the meaning for $\mathbb{R}\times \mathbb{R} \times \mathbb{R}$.  Do I mean $(\mathbb{R} \times \mathbb{R})\times \mathbb{R}$ or $\mathbb{R} \times (\mathbb{R} \times \mathbb{R})$?  The associativity of real number multiplication implied that $(a\times a) \times a = a\times (a\times a)$ and thus there was no confusion.  However, the Cartesian product is not associative!  As sets, $(A\times B)\times C$ is not the same as $A \times (B\times C)$ - an element of $(A\times B)\times C$ has the form $((a,b),c)$ while an element of $A \times (B\times C)$ has the form $(a,(b,c))$.  But, we feel they are the same in an intuitive sense -  both $((a,b),c)$ and $(a,(b,c))$ are just a triple of numbers $(a,b,c)$.  In other words, there is a natural bijection $f: (A\times B)\times C \to A \times (B\times C)$ defined as $f(((a,b),c)) = (a,(b,c))$.


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.1</span>

Show that $f: (A\times B)\times C \to A \times (B\times C)$ defined as $f(((a,b),c)) = (a,(b,c))$ is a bijection.

</div>


And thus, we would love to treat them as the same.  However, if you would like to be really pedantic, the way is to stick to some convention -  I decide that whenever I write $A\times B\times C$, I mean $(A\times B)\times C$.  Of course, someone else might choose the convention that $A\times B\times C$ stands for $A\times (B\times C)$.  The natural bijection we discussed earlier implies that the ``mathematics" we both develop would not be so different from each other.  

That level of formalism is neither necessary not helpful unless you are working with the foundations of mathematics.  For instance, if we want to think $\mathbb{R}^n$ as an $n$-fold product, it would be better to define it recursively as $\mathbb{R}^{n-1}\times \mathbb{R}$.  However, then the elements would be of $\mathbb{R}^3$ would be of the form $((x,y),z)$.  Keeping track of these notations can get unwieldy.  Thus, 


<div class="academic-env env-definition">
<span class="env-label">Definition 2.2</span>

We define $\mathbb{R}^n:= \{(x_1,\dots,x_n) \ | \ x_i\in \mathbb{R}\}$.

</div>


As in the case of $\mathbb{R}^2$, we can define addition, scalar multiplication, norm, distance, etc in $\mathbb{R}^n$.  We will mimic these constructions now.


<div class="academic-env env-definition">
<span class="env-label">Definition 2.3</span>

For two points $x = (x_1,\dots,x_n)$ and $y = (y_1,\dots,y_n)$ in $\mathbb{R}^n$, we say $x=y$ if $\forall i, \ x_i = y_i$.

</div>


### Addition Given two elements in $\mathbb{R}^n$, say $x = (x_1,\dots,x_n)$ and $y = (y_1,\dots,y_n)$ in $\mathbb{R}^n$, we can add these elements to form an element $x+y = (x_1 + y_1,\dots,x_n + y_n)$.  This defines a function $+:\mathbb{R}^n\times \mathbb{R}^n \to \mathbb{R}^n$ defined as $+((x_1,\dots,x_n),(y_1,\dots,y_n)) = (x_1 + y_1,\dots,x_n + y_n)$.  We will typically write $(x_1,\dots,x_n) + (y_1,\dots,y_n)$ instead of $+((x_1,\dots,x_n),(y_1,\dots,y_n))$ -  as you have been doing for addition in $\mathbb{R}^2$.  This is called **infix notation**.


<div class="academic-env env-example">
<span class="env-label">Example 2.1</span>

Let $v = (1,2,3,4)$ and $w= (5,6,7,8)$.  Then $v+w = (1,2,3,4) + (5,6,7,8) = (1+5,2+6,3+7,4+8) = (6,8,10,12)$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.1 (Existence of additive identity)</span>

There exists an element $x = (x_1\dots,x_n)$ in $\mathbb{R}^n$ such that $\forall a = (a_1,\dots,a_n)\in \mathbb{R}^n$, $a + x = a = x + a$.  Thus, from now on, we would write $(0,\dots,0)$ as $0$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

To prove an existential statement, it is enough to give an example.  We would prove that $x = (0,\dots, 0)$ has the property $\forall a = (a_1,\dots,a_n)\in \mathbb{R}^n$, $a + x = a = x + a$.  To this end, fix an arbitrary $a = (a_1,\dots,a_n)\in \mathbb{R}^n$.  Then, 
we need to prove $a + x = a$ and $x+a = a$.  But, they are both easy to prove.
$$
\begin{align*}
        (a_1,\dots a_n) + (0,\dots,0) &= (a_1+0,\dots,a_n+0) & \text{(definition of addition on $\mathbb{R}^n$)}\\
        &= (a_1,\dots,a_n) & \text{($0$ is additive identity in $\mathbb{R}$)}
    \end{align*}
$$ 
Similarly,
$$
\begin{align*}
        (0,\dots,0) + (a_1,\dots,a_n) &= (0+a_1,\dots,0+a_n) & \framebox(125,10){}\\
        &= (a_1,\dots,a_n) & \framebox(125,10){}
    \end{align*}
$$

</details>
</div>


Note that the proof is almost identical to the proof we had written to prove the existence of additive identity in $\mathbb{R}^2$.  Now mimic the proofs we had in Chapter 1, and


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.2</span>

Prove

- Addition on $\mathbb{R}^n$ is commutative.  More precisely, $\forall a = (a_1,\dots,a_n),b=(b_1,\dots,b_n)\in \mathbb{R}^n$, $a + b = b + a$.
- Addition on $\mathbb{R}^n$ is associative.  More precisely, $\forall a = (a_1,\dots,a_n),b=(b_1,\dots,b_n),c=(c_1,\dots,c_n)\in \mathbb{R}^n$, $(a + b) + c = a + (b+c)$.
- For all $a=(a_1,\dots,a_n)\in \mathbb{R}^n$, there exists an $x=(x_1,\dots,x_n)\in \mathbb{R}^n$ such that $a+x=0=x+a$.  Use this to define subtraction on $\mathbb{R}^n$  


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.3</span>

Let $v=(5,3,2,7)$ and $w=(2,7,3,8)$.  Then find $v-w$.

</div>


### Scalar Multiplication We define a function $\cdot : \mathbb{R} \times \mathbb{R}^n \to \mathbb{R}^n$ defined as $\cdot(\alpha,(a_1,\dots,a_n)) = (\alpha a_1,\dots,\alpha a_n)$.  Typically, we just write $\alpha(a_1,\dots,a_n)$ instead of $\cdot(\alpha,(a_1,\dots,a_n))$.


<div class="academic-env env-example">
<span class="env-label">Example 2.2</span>

Let $k = 3$ and $v=(1,2,3,4)$.  Then $kv = 3(1,2,3,4) = (3,6,9,12)$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.4</span>

Show that 

- $\forall v\in \mathbb{R}^n$ $1\cdot v = v$
- $\forall v\in \mathbb{R}^n$ $v + (-1)\cdot v = 0$
- $\forall$ $x,y\in \mathbb{R}$ and $v\in \mathbb{R}^n$, $(xy)\cdot v = x\cdot (y\cdot v)$
- $\forall x\in \mathbb{R}$ and $v, w\in \mathbb{R}^n$, $x\cdot[v+w] = x\cdot v +x\cdot w$
- $\forall$ $x,y\in \mathbb{R}$ and $v\in \mathbb{R}^n$, $(x+y)\cdot v = x\cdot v + y\cdot v$


</div>


### Inner Product You may have studied this as the dot product.  This is the function $\langle \ , \ \rangle:\mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}$ defined as $\langle (v_1,\dots v_n),(w_1,\dots,w_n) \rangle = v_1w_1 + v_2w_2 + \dots + v_nw_n$.  


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.5</span>

Show that

- $\forall v,w\in \mathbb{R}^n$, $\langle v,w \rangle = \langle w,v \rangle$
- $\forall u,v,w\in \mathbb{R}^n$, $\langle u,v+w \rangle = \langle u,v \rangle + \langle u,w \rangle$
- $\forall x\in \mathbb{R}$ and $\forall v,w\in \mathbb{R}^n$, $\langle xu,w \rangle = x\langle v,w \rangle = \langle v,xw \rangle$
- $\forall v\in \mathbb{R}^n$, $\langle v,v \rangle \geq 0$ and the equality holds **if and only if (iff)** $v = 0$


</div>


### Norm is the function $\Vert \ \Vert:\mathbb{R}^2 \to \mathbb{R}$ defined as $\Vert (v_1,\dots,v_n) \Vert = \langle (v_1,\dots,v_n),(v_1,\dots,v_n) \rangle^{\frac{1}{2}} = \sqrt{v_1^2 + \dots + v_n^2}$.


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.6</span>

Find the norm of $(2,3,4)$.  Give an example of another element of $\mathbb{R}^3$ with the same norm.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.7</span>

Show that $\Vert x(a,b) \Vert = |x|\Vert (a,b)\Vert$.

</div>


### Euclidean distance is the function $d:\mathbb{R}^n\times \mathbb{R}^n\to \mathbb{R}$ defined as $d(v,w) = \Vert v-w\Vert = \sqrt{(v_1 - w_1)^2 + \dots + (v_n - w_n)^2}$.


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.8</span>

Find the distance between $(1,2,3)$ and $(1,1,1)$.

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.2 Span of $m$ vectors in $\mathbb{R}^n$</summary>




<div class="academic-env env-definition">
<span class="env-label">Definition 2.4</span>

Given $m$ vectors $v_1,\dots, v_m \in \mathbb{R}^n$ and $\alpha_1,\dots,\alpha_n \in \mathbb{R}$ an expression of the form $\alpha_1 v_1 + \dots \alpha_n v_n$ is called a linear combination of the vectors $v_i$.  Span of $m$ vectors is the set of all linear combinations - more precisely, 
$$
\begin{align*}
        Span(v_1,\dots, v_m) = \{\alpha_1 v_1 + \dots \alpha_n v_m \ | \ \alpha_1,\dots,\alpha_m \in \mathbb{R}\}
    \end{align*}
$$

</div>


\begin{mdframed}[backgroundcolor=green!5, frametitle={GeoGebra Exercises}] 


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.9</span>

Consider the element $(1,2,3)\in \mathbb{R}^3$.  The $\text{Span}((1,2,3)) = \{x(1,2,3) \ | \ x\in \mathbb{R}\} = \{(x,2x,3x) \ | \ x\in \mathbb{R}\}$.  GeoGebra allows us to plot things in 3D.  To demonstrate this, I have created a \href{https://www.geogebra.org/3d/nwjk2dt4}{GeoGebra file} that plots $\text{Span}((1,2,3))$. Use GeoGebra to plot the span of other vectors in a similar manner.  Convince yourself that if $v\neq 0$, then $\text{Span}(v)$ looks like a line.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.10</span>


In Exercise **1.12**, we saw how we can use the Sequence function to construct the span of two vectors.  Use this idea in the GeoGebra 3D calculator (introduced in the previous exercise) to plot the span of $2$-vectors in $\mathbb{R}^3$.  Repeat the exercise with two pairs of Linearly dependent vectors and two pairs of linearly independent vectors.  What do you observe?  How does the span look when the vectors are linearly independent?

</div>

\end{mdframed}


<div class="academic-env env-example">
<span class="env-label">Example 2.3</span>

Let $v_1 = (1,0,0)$, $v_2 = (0,1,0)$.  Then, 
$$
\begin{align*}
        \text{Span}(v_1,v_2) &= \{x(1,0,0) + y(0,1,0) \ | \ x,y\in \mathbb{R}\} & \framebox(125,10){}\\
        &= \{(x,0,0) + (0,y,0) \ | \ x,y\in \mathbb{R}\} & \framebox(125,10){}\\
        &= \{(x,y,0) \ | \ x,y\in \mathbb{R}\} & \framebox(125,10){}
    \end{align*}
$$
Thus, the $\text{Span}(v_1,v_2)$ is what is called the $xy$ plane.  Similarly, $\text{Span}((1,0,0),(0,0,1))$ would be the $xz$ plane and $\text{Span}((0,1,0),(0,0,1))$ would be the $yz$ plane.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.4</span>

Let $v_1 = (1,0,0)$, $v_2 = (0,1,0)$, $v_3 = (0,0,1)$.  Then, 
$$
\begin{align*}
        \text{Span}(v_1,v_2,v_3) &= \{x(1,0,0) + y(0,1,0) + z(0,0,1) \ | \ x,y,z\in \mathbb{R}\} & \framebox(125,10){}\\
        &= \{(x,0,0) + (0,y,0) + (0,0,z) \ | \ x,y,z\in \mathbb{R}\} & \framebox(125,10){}\\
        &= \{(x,y,z) \ | \ x,y,z\in \mathbb{R}\} & \framebox(125,10){}\\
        &= \mathbb{R}^3
    \end{align*}
$$

</div>


Thus, three vectors can span $\mathbb{R}^3$.  Can two vectors span $\mathbb{R}^3$?  Can a single vector span $\mathbb{R}^3$?  In Chapter 1, we defined span only for two vectors.  As part of one of the proofs in Chapter 1, we argued that $\forall v\in \mathbb{R}^2, \text{Span(v)} \neq \mathbb{R}^2$ - although we did not state it as explicitly.  Which theorem am I referring to?  Use the arguments given there to 


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.11</span>

Prove that $\forall v\in \mathbb{R}^2$, $\text{Span(v)} \neq \mathbb{R}^2$.

</div>


More generally, prove that 


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.12</span>

Let $n > 1$. Prove that $\forall v\in \mathbb{R}^n$, $\text{Span(v)} \neq \mathbb{R}^n$.

</div>


So, a single vector cannot span $\mathbb{R}^3$. Can two vectors span $\mathbb{R}^3$?  The intuition we built in Exercise **2.10** suggests two vectors cannot span $\mathbb{R}^3$.  


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.13</span>

Prove that if $w = \alpha v$, then $\text{Span}(v,w) = \text{Span}(v)$

</div>


Thus, if there exists an $\alpha\in \mathbb{R}$ such that $w = \alpha v$ or there exists an $\alpha$ such that $v = \alpha w$, then $\text{Span}(v,w)\neq \mathbb{R}^2$.  Moreover,


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.14</span>

Show that there exists an $\alpha\in \mathbb{R}$ such that $w = \alpha v$ or there exists an $\alpha$ such that $v = \alpha w$ iff $(v_2w_3 - v_3w_2, v_3w_1 - v_1w_3, v_1w_2 - v_2w_1) = (0,0,0)$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.2</span>

Given any $v,w\in \mathbb{R}^3$, $\text{Span}(v,w)\neq \mathbb{R}^3$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Consider the vector $v\times w = (v_2w_3 - v_3w_2, v_3w_1 - v_1w_3, v_1w_2 - v_2w_1)$<span class="footnote-trigger" title="The vector $(v_2w_3 - v_3w_2, v_3w_1 - v_1w_3, v_1w_2 - v_2w_1)$ is called the cross product of $v$ and $w$.  Some of you might have studied the cross product in school."><sup>[*]</sup></span>.  If $v\times w = 0$, then by the discussion earlier, $\text{Span}(v,w)\neq \mathbb{R}^3$.  Thus, we may assume that $v\times w\neq 0$. (Why?  Which proof strategy am I using?)  As $v\times w \neq 0$, we may assume without-loss-of-generality that $v_1w_2 - v_2w_1 \neq 0$.  We will prove that if $v_1w_2 - v_2w_1 \neq 0$, then $v\times w$ does not belong to $\text{Span}(v,w)$ using a proof by contradiction.  

Assume $v\times w\in \text{Span}(v,w)$.  Then, there exists $\alpha,\beta\in \mathbb{R}$ such that $(v_2w_3 - v_3w_2, v_3w_1 - v_1w_3, v_1w_2 - v_2w_1) = \alpha v + \beta w = (\alpha v_1 + \beta w_1, \alpha v_2 + \beta w_2, \alpha v_3 + \beta w_3)$.  That is, 
$$
\begin{align*}
        \alpha v_1 + \beta w_1 &= v_2w_3 - v_3w_2\\
        \alpha v_2 + \beta w_2 &= v_3w_1 - v_1w_3\\
        \alpha v_3 + \beta w_3 &= v_1w_2 - v_2w_1
    \end{align*}
$$
The first two equations can be rewritten as the following matrix equation
$$
\begin{align*}
        \begin{bmatrix}v_1 & w_1\\v_2 & w_2\end{bmatrix} \begin{bmatrix}\alpha \\ \beta\end{bmatrix} = \begin{bmatrix}v_2w_3 - v_3w_2\\ v_3w_1 - v_1w_3\end{bmatrix}
    \end{align*}
$$
By our assumption $v_1w_2 - v_2w_1 \neq 0$, the matrix $\begin{bmatrix}v_1 & w_1\\v_2 & w_2\end{bmatrix}$ is invertible.  Thus, 
$$
\begin{align*}
        \begin{bmatrix}\alpha \\ \beta\end{bmatrix} &= \frac{1}{v_1w_2 - v_2w_1}\begin{bmatrix}w_2 & -w_1\\-v_2 & v_1\end{bmatrix}\begin{bmatrix}v_2w_3 - v_3w_2\\ v_3w_1 - v_1w_3\end{bmatrix}\\
        &= \frac{1}{v_1w_2 - v_2w_1}\begin{bmatrix} w_3(w_2v_2 + w_1v_1) - v_3(w_2^2 + w_1^2)\\ v_3(v_2w_2 + v_1w_1) - w_3(v_1^2 + v_2^2)\end{bmatrix}
    \end{align*}
$$
Substituting this value of $\alpha$ and $\beta$ in $\alpha v_3 + \beta w_3 = v_1w_2 - v_2w_1$, we get
$$
\begin{align*}
        (v_1w_2 - v_2w_1)^2 &= v_3w_3 (w_2v_2 + w_1v_1) - v_3^2 (w_2^2 + w_1^2) + v_3w_3(v_2w_2 + v_1w_1) - w_3^2(v_1^2 + v_2^2)\\
        &= -[(v_2w_3 - v_3w_2)^2 + (v_1w_3-v_3w_1)^2]
    \end{align*}
$$
However, $(v_1w_2 - v_2w_1)^2 \geq 0$ and $-[(v_2w_3 - v_3w_2)^2 + (v_1w_3-v_3w_1)^2] \leq 0$.  So, the two can be equal iff $v_1w_2 - v_2w_1 = 0$.  But, we assumed $v_1w_2 - v_2w_1 \neq 0$.  Thus, we have arrived at a contradiction.  Therefore the assumption $v\times w\in \text{Span}(v,w)$ must be wrong and $\text{Span}(v,w) \neq \mathbb{R}^3$.

</details>
</div>


We could have proved that if $v\times w\neq 0$, then $v\times w\not\in \text{Span}(v,w)$ in a slightly different way.  First,


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.15</span>

Prove that $\langle v,v\times w \rangle = 0 = \langle w, v\times w \rangle$.


</div>


Then, use the theorem,


<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.3</span>

Let $v\neq 0,w\neq 0\in \mathbb{R}^n$.  For all $0 \neq u\in \mathbb{R}^n$ if $\langle v,u \rangle = 0 = \langle w,u \rangle$, then $u\not\in \text{Span}(v,w)$.  


</div>


But, to prove the above theorem, we need a very famous and important result


<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.4 (Cauchy-Schwarz inequality)</span>

Let $v,w\in \mathbb{R}^n$.  Then, $\langle v,w \rangle \leq \Vert v\Vert \Vert w\Vert$.  Moreover, the equality holds iff $\exists \alpha \in \mathbb{R}$ such that $v = \alpha w$ or $\exists \alpha\in \mathbb{R}$ such that $w = \alpha v$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let us first assume that $\Vert v\Vert = 1 = \Vert w\Vert$.  Then,
$$
\begin{align*}
        0 &\leq \Vert v-w\Vert^2 & \framebox(125,10){}\\
        &= \langle v-w,v-w \rangle & \framebox(125,10){}\\ 
        &= \langle v,v\rangle + \langle w,w\rangle - \langle v,w \rangle -\langle w,v \rangle & \framebox(125,10){}\\
        &= \langle v,v\rangle + \langle w,w\rangle -2\langle v,w \rangle & \framebox(125,10){}\\
        &= 2-2\langle v,w \rangle & \framebox(125,10){}
    \end{align*}
$$
Thus, $\langle v,w \rangle \leq 1 = \Vert v\Vert \Vert w\Vert$.  Moreover, the equality holds iff $\Vert v-w\Vert = 0$, that is $v-w = 0$ or $v=w$.  

Now, let $v$, $w$ be two arbitrary vectors in $\mathbb{R}^n$.  Then consdider the vectors $v' = \frac{1}{\Vert v\Vert}v$ and $w' = \frac{1}{\Vert w\Vert}w$.  Then, by the previous observation, $\langle v',w'\rangle \leq \Vert v'\Vert^2 \Vert w'\Vert^2 = 1$.  But,
$$
\begin{align*}
        \langle v',w'\rangle &= \langle \frac{1}{\Vert  v\Vert}v,\frac{1}{\Vert  w\Vert}w\rangle \\
        &= \frac{1}{\Vert  v\Vert}\langle v,\frac{1}{\Vert  w\Vert}w\rangle\\
        &= \frac{1}{\Vert  v\Vert\Vert  w\Vert}\langle v,w\rangle\\
    \end{align*}
$$
Thus, 
$$
\begin{align*}
        \frac{1}{\Vert  v\Vert\Vert  w\Vert}\langle v,w\rangle \leq 1
    \end{align*}
$$
and hence we have the result.

</details>
</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Proof of Theorem **2.3**)</summary>

To prove the result, we first fix a non-zero vector $u\in \mathbb{R}^3$.  Then, assume that $\langle v,u \rangle = 0 = \langle w,u \rangle$.  We will now prove that $u\not\in \text{Span}(v,w)$ using a proof by contradiction.  

Assume, $u\in \text{Span}(v,w)$.  Then, there exists $\alpha,\beta$ such that $u = \alpha v + \beta w$.  But, $0 = \langle v,u \rangle = \langle v,\alpha v +\beta w \rangle = \alpha \langle v,v \rangle + \beta \langle v,w \rangle = \alpha \Vert v\Vert^2 + \beta \langle v,w \rangle$.  That is, $\alpha = -\beta \frac{\langle v,w\rangle}{\Vert v \Vert^2}$.  Similarly, $0 = \langle w,u \rangle = \langle w,\alpha v +\beta w \rangle = \alpha \langle w,v \rangle + \beta \langle w,w \rangle = \alpha \langle w,v \rangle + \beta \Vert w\Vert^2$.  That is, $\beta = -\alpha \frac{\langle v,w\rangle}{\Vert w\Vert^2} = -\left(-\beta \frac{\langle v,w\rangle}{\Vert v \Vert^2} \right)\frac{\langle v,w\rangle}{\Vert w\Vert^2} = \beta \frac{\langle v,w \rangle^2}{\Vert v\Vert^2 \Vert w\Vert^2}$.  In a very similar fashion one can prove that $\alpha = \alpha \frac{\langle v,w \rangle^2}{\Vert v\Vert^2 \Vert w\Vert^2}$.  As $u\neq 0$, $(\alpha, \beta)\neq (0,0)$.  Thus, $\langle v,w\rangle^2 = \Vert v\Vert^2 \Vert w \Vert^2$. The famous Cauchy-Schwarz inequality tells us that this is possible iff $\exists \gamma \in \mathbb{R}$ such that $v = \gamma w$ or $\exists \gamma\in \mathbb{R}$ such that $w = \gamma v$.  Without loss of generality, let us assume that $w=\gamma v$.  Then, $u = \alpha v + \beta (\gamma v) = (\alpha + \beta\gamma)v$.  But $0 = \langle u,v\rangle = \langle (\alpha+\beta\gamma)v,v\rangle = (\alpha + \beta\gamma)\Vert v\Vert^2$.  As $v\neq 0$, $\Vert v\Vert \neq 0$.  Therefore, $\alpha + \beta\gamma = 0$ or equivalently, $u = (\alpha + \beta\gamma)v = 0v = 0$.  But, we assumed $u\neq 0$, so we have a contradiction.  Therefore, our assumption that $u\in \text{Span}(u,v)$ should be wrong.

</details>
</div>


OK, the span of two vectors $v,w\in \mathbb{R}^3$ is not equal to $\mathbb{R}^3$.  Then, what is it?


<div class="academic-env env-example">
<span class="env-label">Example 2.5</span>

If $w = \alpha v$, then
$$
\begin{align*}
        \text{Span(v,w)} &= \{xv + yw \ | \ x,y\in \mathbb{R}\} & \framebox(125,10){}\\
        &= \{xv + y(\alpha v)) \ | \ x,y\in \mathbb{R}\} & \framebox(125,10){}\\
        &= \{xv + (y\alpha) v \ | \ x,y\in \mathbb{R}\} & \framebox(125,10){}\\
        &= \{(x + y\alpha) v \ | \ x,y\in \mathbb{R}\} & \framebox(125,10){}\\
        &= \{zv \ | \ z\in \mathbb{R}\}
    \end{align*}
$$
The last equality is a bit more subtle than the rest.  We will prove $\{(x + y\alpha) v \ | \ x,y\in \mathbb{R}\} = \{zv \ | \ z\in \mathbb{R}\}$, by showing $\{(x + y\alpha) v \ | \ x,y\in \mathbb{R}\} \subset \{zv \ | \ z\in \mathbb{R}\}$ and $\{zv \ | \ z\in \mathbb{R}\} \subset \{(x + y\alpha) v \ | \ x,y\in \mathbb{R}\}$.  To see the first containment, note that as $x$, $y$, and $\alpha$ are real numbers, so is $x + y\alpha$.  Thus, $\{(x + y\alpha) v \ | \ x,y\in \mathbb{R}\} \subset \{zv \ | \ z\in \mathbb{R}\}$.  On the other hand, given any $z\in \mathbb{R}$, choose $(x,y,\alpha) = (z,0,\alpha)$ and $z = x + y\alpha$.  So, $zw\in \{(x + y\alpha) v \ | \ x,y\in \mathbb{R}\}$.  Thus, $\{zv \ | \ z\in \mathbb{R}\} \subset \{(x + y\alpha) v \ | \ x,y\in \mathbb{R}\}$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.6</span>

Let $v_1 = (1,0,0)$, $v_2 = (1,1,0)$.  Then, 
$$
\begin{align*}
        \text{Span}(v_1,v_2) &= \{\alpha(1,0,0) + \beta(0,1,0)\ | \ \alpha ,\beta \in \mathbb{R}\} & \framebox(125,10){}\\
        &= \{(\alpha,0,0) + (0,\beta,0) \ | \ \alpha, \beta \in \mathbb{R}\} & \framebox(125,10){}\\
        &= \{(\alpha,\beta,0) \ | \ \alpha,\beta\in \mathbb{R}\} & \framebox(125,10){}\\
        &= \{(x,y,z)\in \mathbb{R}^3 \ | \ z = 0 \} & \framebox(125,10){}\\
        &= \{(x,y,z)\in \mathbb{R}^3 \ | \ \langle (x,y,z),(0,0,1)\rangle = 0 \} & \framebox(125,10){}
    \end{align*}
$$

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.7</span>

Let $v_1 = (2,1,0)$, $v_2 = (3,0,1)$.  Then,
$$
\begin{align*}
        \text{Span}(v_1,v_2) &= \{\alpha(2,1,0) + \beta(3,0,1)\ | \ \alpha ,\beta \in \mathbb{R}\} & \framebox(125,10){}\\
        &= \{(2\alpha+3\beta,\alpha,\beta) \ | \ \alpha,\beta\in \mathbb{R}\} & \framebox(125,10){}\\
        &= \{(x,y,z)\in \mathbb{R}^3 \ | \ x = 2y + 3z \} & \framebox(125,10){}\\
        &= \{(x,y,z)\in \mathbb{R}^3 \ | \ \langle (x,y,z), (1,-2,-3)\rangle = 0 \} & \framebox(125,10){}
    \end{align*}
$$

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.8</span>

Let $v_1 = (7,2,1)$, $v_2 = (0,1,0)$.  Then,
$$
\begin{align*}
        \text{Span}(v_1,v_2) &= \{\alpha(7,2,1) + \beta(0,1,0)\ | \ \alpha ,\beta \in \mathbb{R}\} & \framebox(125,10){}\\
        &= \{(7\alpha,2\alpha + \beta,\alpha) \ | \ \alpha,\beta\in \mathbb{R}\} & \framebox(125,10){}\\
        &= \{(x,y,z)\in \mathbb{R}^3 \ | \ z = 7x \} & \framebox(125,10){}\\
        &= \{(x,y,z)\in \mathbb{R}^3 \ | \ \langle (x,y,z), (-1,0,7)\rangle = 0 \} & \framebox(125,10){}
    \end{align*}
$$

</div>


In the previous three examples, note that $(1,0,0)\times (0,1,0) = (0,0,1)$, $(2,1,0)\times (3,0,1) = (1,-2,-3)$, and $(7,2,1)\times (0,1,0) = (-1,0,7)$.  Thus, all the three examples illustrate the following more general phenomenon.  

\begin{mdframed}[backgroundcolor=green!5, frametitle={GeoGebra Exercises}] 


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.16</span>

Use GeoGebra to plot $\text{Span}(v_1,v_2)$ and $v_1\times v_2$ for the following pairs for vectors.
\begin{multicols}{2}

- $v_1 = (1,0,0)$, $v_2 = (1,1,0)$
- $v_1 = (2,1,0)$, $v_2 = (3,0,1)$
- $v_1 = (7,2,1)$, $v_2 = (0,1,0)$
- $v_1 = (1,2,3)$, $v_2 = (4,5,6)$

\end{multicols}

</div>

\end{mdframed}


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.17</span>

Find the $\text{Span}(v_1,v_2)$ where $v_1 = (1,2,3)$, $v_2 = (4,5,6)$.  Express $\text{Span}(v_1,v_2)$ as $\{(x,y,z) \ | \ ax+by+cz = 0\}$.  Give rigorous arguments to justify your claims.

</div>


More precisely, we have the following theorem.  However, we will prove this theorem only later in this chapter after introducing more abstraction.  Try to prove the theorem using what you know now - this would help you appreciate the need for the abstraction.  

<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.5</span>

Given two vectors $v,w\in \mathbb{R}^3$ such that $v\times w\neq 0$, $\text{Span}(v,w) = \{u\in \mathbb{R}^3 \ | \ \langle u,v\times w \rangle = 0\}$. 


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.18</span>

Let two vectors $v,w\in \mathbb{R}^3$. Show that if $u\in \text{Span}(v,w)$, then $\langle u,v\times w\rangle = 0$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.19</span>

Let $v_1,v_2,v_3\in \mathbb{R}^n$ be such that $v_3 = \alpha_1 v_1 + \alpha_2 v_2$.  Show that $\text{Span}(v_1,v_2,v_3) = \text{Span}(v_1,v_2)$.

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.3 Subspace</summary>




<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.6</span>

For all vectors $v_1,\dots,v_m\in \mathbb{R}^n$, $\text{Span}(v_1,\dots,v_m)$ satisfies the following conditions.

- $0\in \text{Span}(v_1,\dots,v_m)$
- For all $u_1,u_2\in \text{Span}(v_1,\dots,v_m)$, $u_1 + u_2 \in \text{Span}(v_1,\dots,v_m)$
- For all $u\in \text{Span}(v_1,\dots,v_m)$, $\alpha u\in \text{Span}(v_1,\dots,v_m)$


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Note that $0 = 0v_1 + \dots + 0v_n \in \text{Span}(v_1,\dots,v_m)$.  Also, if $u_1\in \text{Span}(v_1,\dots,v_m)$, then there exits $\alpha_i \forall i\in \{1,\dots,m\}$ such that $u_1 = \alpha_1 v_1 + \dots +\alpha_m v_m$.  Similarly, if $u_2\in \text{Span}(v_1,\dots,v_m)$, then there exists $\beta_i \forall i\in \{1,\dots,m\}$ such that $u_2 = \beta_1 v_1 +\dots \beta_m v_m$.  Thus,
$$
\begin{align*}
        u_1 + u_2 &= \alpha_1 v_1 + \dots +\alpha_m v_m + \beta_1 v_1 +\dots \beta_m v_m\\
        &= (\alpha_1 + \beta_1)v_1 + \dots +(\alpha_m + \beta_m)v_m\\
        &\in \text{Span}(v_1,\dots,v_m)
    \end{align*}
$$

</details>
</div>


Similarly, one can prove that 


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.20</span>

Consider the system of equations
$$
\begin{align}
        \label{eqn: homoMeqnNunkn}
        a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_n &= 0\\ \nonumber
        a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_n &= 0\\ \nonumber
        .\\ \nonumber
        .\\ \nonumber
        .\\ \nonumber
        a_{m1} x_1 + a_{m2} x_2 + \dots + a_{mn} x_n &= 0\\ \nonumber
    \end{align}
$$
The set $S = \{x = (x_1,\dots, x_n)\ | \ (x_1,\dots,x_n) \text{ satisfy the system \ref{eqn: homoMeqnNunkn}} \}$ satisfies the following three conditions

- $0\in S$
- For all $u_1,u_2\in S$, $u_1 + u_2\in S$
- For all $u\in S$, $\alpha u\in S$


</div>


As subsets satisfing these three properties keep appearing, it is a good idea to name them.


<div class="academic-env env-definition">
<span class="env-label">Definition 2.5</span>

A subset $V$ of $\mathbb{R}^n$ satisfying 

- $0\in V$
- For all $v_1,v_2\in V$, $v_1 + v_2\in V$
- For all $v\in V$ and $\alpha\in \mathbb{R}$, $\alpha v\in V$


</div>


None of the three conditions above are redundant.  More precisely, there exists subsets that satisfy two of the above conditions, but not the third.  The following three examples illustrate  the various possibilities.


<div class="academic-env env-example">
<span class="env-label">Example 2.9</span>

Let $V = \emptyset \subset \mathbb{R}^2$.  Then, for all $v_1,v_2\in V$, $v_1 + v_2\in V$.  Also, for all $v\in V$ and $\alpha \in \mathbb{R}$, $\alpha v\in V$.  However, $V$ is not a subspace as $0\notin V$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.10</span>

Let $V = \mathbb{Z}\times \mathbb{Z} \subset \mathbb{R}^2$.  Then, $(0,0)\in \mathbb{Z}\times \mathbb{Z}$.  Also, if $v_1,v_2\in \mathbb{Z}\times \mathbb{Z}$, then $v_1 + v_2\in \mathbb{Z}\times \mathbb{Z}$, as sum of two integers is an integer.  However, $ \pi(1,1) \not\in \mathbb{Z}\times \mathbb{Z}$ and thus, $V$ is not a subspace.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.11</span>

Let $V = \{(x,y)\ | \ x=0\} \cup \{(x,y) \ | \ y = 0\}$.  Then, $(0,0)\in V$.  Let $(x,y)\in V$.  Then either $x=0$ or $y=0$.  If $x=0$, then $\alpha(x,y) = (\alpha x,\alpha y) = (0,\alpha y) \in V$.  If $y=0$, then $\alpha(x,y) = (\alpha x,\alpha y) = (\alpha x,0) \in V$.  However, although $(1,0)\in V$ and $(0,1)\in V$, $(1,1) = (1,0) + (0,1)$ does not belong to $V$.  Thus, $V$ is not a subspace.

</div>


The notion of a subspace allows us to give an alternate characterisation for $\text{Span}(v_1,\dots,v_n)$.  We already saw that $\text{Span}(v_1,\dots,v_n)$.  We will now argue that $\text{Span}(v_1,\dots,v_n)$ is the ``smallest" subspace containing $v_1,\dots,v_n$.  But, to talk about smallest, we should be able to compare two subspaces - there should be an order.  When we are talking about subsets, the most natural order is given by the $\subseteq$ relation.  We say $A$ is ``smaller" (to be precise we mean smaller or equal) than $B$ if $A\subseteq B$.  Thus, we may state our claim more precisely, as follows:


<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.7</span>

Let $v_1,\dots,v_m\in \mathbb{R}^n$.  Let $U$ be a subspace of $\mathbb{R}^n$ such that $v_i\in U, \ \forall i\in \{1,\dots,m\}$.  Then $V:= \text{Span}(v_1,\dots,v_m)\subseteq U$. 


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We will prove $V\subseteq U$ by taking an arbitrary element in $V$ and showing that it belongs to $U$.  Fix an arbitrary element of $V$ or more precisely fix $(\alpha_1,\dots,\alpha_m)$ and consider the element $v = \alpha_1 v_1 + \dots + \alpha_m v_m$. We would like to show that $v\in U$.  To begin, as $v_i\in U$ and $U$ is a subspace, $\alpha_i v_i\in U$ for all $i\in \{1,\dots,m\}$.  As $\alpha_1 v_1$ and $\alpha_2 v_2$ belong to $U$ and $U$ is a subspace, $\alpha_1 v_1 + \alpha_2 v_2 \in U$.  Now suppose $\alpha_1 v_1 + \dots +\alpha_k v_k\in U$.  As $\alpha_1 v_1 + \dots +\alpha_k v_k\in U$, $\alpha_{k+1} v_{k+1}\in U$ and $U$ is a vector space, $\alpha_1 v_1 + \dots +\alpha_{k+1} v_{k+1}\in U$.  Thus, $v\in U$.  AS $v\in V$ was arbitrary, we have $V\subseteq U$.

</details>
</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.21</span>

For each subset given below, describe the smallest subspace of $\mathbb{R}^3$ that contains it.
\begin{multicols}{2}

- $\{(1,0,0)\}$
- $\{(\pi,0,0)\}$
- $\{(1,0,0), (0,1,0)\}$
- $\{(1,1,0) (1,-1,0)\}$
- $\{(1,1,0),(-1,-1,0)\}$
- $\{(1,1,0),(1,-1,0),(0,1,1)\}$

\end{multicols}

</div>


\begin{mdframed}[backgroundcolor=black!5, frametitle={Optional reading: $\text{Span}(S)$ where $S\subset \mathbb{R}^n$}] 

<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.8</span>

Let $\Lambda$ be some set.  Let $\mathcal{V} = \{V_{\lambda} \ | \ \lambda\in \Lambda\}$ be a set such that $V_{\lambda}$ is a subspace of $\mathbb{R}^n$ for all $\lambda$.  Then, the set $V := \bigcap\limits_{\lambda\in \Lambda}V_{\lambda}$ is a subspace of $\mathbb{R}^n$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $V_{\lambda}$ is a subspace, $0\in V\lambda$ for all $\lambda$.  Thus, $0\in V$.  Let $v_1,v_2\in V$.  Then, $v_1,v_2\in V_{\lambda}$ for all $\lambda$ and $V_{\lambda}$ is a subspace.  Thus, $v_1 + v+2 \in V_{\lambda}$ for all $\lambda$.  Thus, $v_1 + v_2 \in V$.  Let $v\in V$.  Then $v\in V_{\lambda}$ for all $\lambda$ and $V_{\lambda}$ is a subspace.  Thus, $\alpha v \in V_{\lambda}$ for all $\lambda$.  Therefore $\alpha v\in V$.

</details>
</div>


Given $S\subset \mathbb{R}^n$, let $\mathcal{V} = \{V \subset \mathbb{R}^n \ | \ V \text{ is a subspace and } S\subset V\}$ and $W = \bigcap\limits_{V\in \mathcal{V}} V$.  Then, $W$ is a subspace of $\mathbb{R}^n$, by the previous theorem.  Moreover, if $V$ is a subspace containing $S$, then $V\subset W$.  Thus, given any set $S$, we can find the smallest subspace containing it.  This fact and Theorem **2.7** motivates the following definition.  


<div class="academic-env env-definition">
<span class="env-label">Definition 2.6</span>

Let $S\subset \mathbb{R}^n$, then $\text{Span}(S)$ is defined to be the subspace $V$ of $\mathbb{R}^n$ satisfying the following two conditions.

- $S\subseteq V$
- If $U$ is a subspace of $\mathbb{R}^n$ such that $S\subseteq U$, then $V\subseteq U$.


</div>

Thus, it is preferable to write $\text{Span}(\{v_1,\dots,v_m\})$ instead of $\text{Span}(v_1,\dots, v_m)$.  


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.22</span>

Show that if $S\subset T$, then $\text{Span}(S)\subset \text{Span}(T)$.

</div>


\end{mdframed}



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.4 Functions and solving equations; associated matrices</summary>



Given system $\ref{eqn: gennonhom}$ or **2.2**, we can associate to the system a function $F:\mathbb{R}^n \to \mathbb{R}^m$ defined as
$$
\begin{align*}
    F(x_1,\dots,x_n) = \left(\sum\limits_{i=1}^n a_{1i} x_i, \dots, \sum\limits_{i=1}^n a_{mi} x_i\right)
\end{align*}
$$

The set of solutions of system $\ref{eqn: gennonhom}$ is the set $F^{-1}(\{(b_1,\dots,b_m)\})$ and the set of solutions of system **2.2** is the set $F^{-1}(\{0\})$.


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.23</span>

Let $F:\mathbb{R}^n \to \mathbb{R}^m$ be the function $F(x_1,\dots,x_n) = \left(\sum\limits_{i=1}^n a_{1i}x_i, \dots, \sum\limits_{i=1}^n a_{mi}x_i\right)$.  Then, show that 

- $F(v+w) = F(v) + F(w)$.
- $F(\alpha v) = \alpha F(v)$


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.24</span>

Let $F:\mathbb{R}^n \to \mathbb{R}^m$ be a function such that $F(v+w) = F(v) + F(w)$ and $F(\alpha v) = \alpha F(v)$.  Then, show that there exists $a_{ij}$ for all $i\in \{1,\dots,n\}$ and $j\in \{1,\dots, m\}$ such that $F(x_1,\dots,x_n) = \left(\sum\limits_{i=1}^n a_{1i}x_i, \dots, \sum\limits_{i=1}^n a_{mi}x_i\right)$.  **Hint:** Recall that if $F:\mathbb{R}^2 \to \mathbb{R}^2$, then $F(x,y) = F(x(1,0) + y(1,0)) = xF(1,0) + yF(0,1)$.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 2.7</span>

A function $F:\mathbb{R}^n \to \mathbb{R}^m$ is said to be linear, if 

- $F(v+w) = F(v) + F(w)$.
- $F(\alpha v) = \alpha F(v)$


</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 2.8</span>

Given a linear function $F:\mathbb{R}^n \to \mathbb{R}^m$ we call the set $\{(x_1,\dots,x_n) \ | \ F(x_1,\dots,x_n) = 0\}$ the kernel of $F$ or the null space of $F$.  Usually, we denote this set as $Ker(F)$ or $Null(F)$.  Similarly, the set $\{F(x_1,\dots,x_n) \ | \ (x_1,\dots,x_n)\in \mathbb{R}^n\}$ is the image of $F$ (also called the range of $F$) and is denoted as $Im(F)$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.25</span>

Given a linear function $F:\mathbb{R}^n \to \mathbb{R}^m$, show that $Ker(F)$ and $Im(F)$ are both subspaces.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.12</span>

Let $F:\mathbb{R}^2 \to \mathbb{R}^3$ be the function $F(x,y) = (x+3y,2x+2y,3x+y)$.  Then, 
$$
\begin{align*}
        Ker(F) &= \{(x,y)\in R^2 \ | \ F(x,y) = (0,0,0)\}\\
        &= \{(x,y)\in R^2 \ | \ (x+3y,2x+2y,3x+y) = (0,0,0)\}
    \end{align*}
$$
As $2x+2y = 0$, we have $y = -x$.  Substituting this value of $y$ in $x+3y=0$, we get $x - 3x = 0$ or $x=0$.  Substituting this value in $3x+y=0$, we get $y=0$. Thus, $(x,y)\in \{(x,y)\in R^2 \ | \ (x+3y,2x+2y,3x+y) = (0,0,0)\}$ implies that $(x,y) = (0,0)$.  That is, 
$$Ker(F) = \{(x,y)\in R^2 \ | \ (x+3y,2x+2y,3x+y) = (0,0,0)\} = \{(0,0)\}.$$
Now,
$$
\begin{align*}
        Im(F) &= \{F(x,y) | (x,y)\in\mathbb{R}^2\}\\
        &= \{(x+3y,2x+2y,3x+y) | (x,y)\in\mathbb{R}^2\}\\
        &= \left\{(a,b,c)\in \mathbb{R}^3 \ | \ b = \frac{a+c}{2}\right\}
    \end{align*}
$$

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.13</span>

Let $F:\mathbb{R}^3 \to \mathbb{R}^2$ be the function $F(x,y,z) = (x+y,z)$.  Then, 
$$
\begin{align*}
        Ker(F) &= \{(x,y,z)\in R^3 \ | \ F(x,y,z) = (0,0)\}\\
        &= \{(x,y,z)\in R^3 \ | \ (x+y,z) = (0,0)\}\\
        &= \{(x,-x,0) \ | \ x\in \mathbb{R}\}
    \end{align*}
$$
And,
$$
\begin{align*}
        Im(F) &= \{F(x,y,z) | (x,y,z)\in\mathbb{R}^3\} = \mathbb{R}^2
    \end{align*}
$$
To see that $Im(F) = \mathbb{R}^2$, we will show that an arbitrary element $(a,b)\in \mathbb{R}^2$ belongs to $Im(F)$.  More precisely, note that $F(a,0,b) = (a+0,b) = (a,b)$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.14</span>

Let $F:\mathbb{R}^2 \to \mathbb{R}^4$ be the function $F(x,y) = \left(\sqrt{2}x+y,3x+\frac{2}{3}y,\frac{x}{3},4y\right)$.  Then, 
$$
\begin{align*}
        Ker(F) &= \{(x,y)\in \mathbb{R}^2 \ | \ F(x,y) = (0,0,0,0)\}\\
        &= \left\{(x,y)\in \mathbb{R}^2 \ | \ \left(\sqrt{2}x+y,3x+\frac{2}{3}y,\frac{x}{3},4y\right) = (0,0,0,0)\right\}
    \end{align*}
$$
Thus, $(x,y)\in Ker(F)$ iff $\left(\sqrt{2}x+y,3x+\frac{2}{3}y,\frac{x}{3},4y\right) = (0,0,0,0)$.  But, if $\left(\sqrt{2}x+y,3x+\frac{2}{3}y,\frac{x}{3},4y\right) = (0,0,0,0)$, then $\frac{x}{3} = 0$ and $4y = 0$.  Thus, $x = 0 = y$.  Therefore, $(x,y)\in Ker(F)$ iff $(x,y) = (0,0)$.  That is,
$$Ker(F) = \{(0,0)\}.$$
And,
$$
\begin{align*}
        Im(F) &= \{F(x,y) | (x,y)\in\mathbb{R}^2\}\\
        &= \left\{\left(\sqrt{2}x+y,3x+\frac{2}{3}y,\frac{x}{3},4y\right) | (x,y)\in\mathbb{R}^2\right\}
    \end{align*}
$$

Thus, if $(a,b,c,d)\in Im(F)$, there exists, $(x,y)\in \mathbb{R}^2$ such that $a = \sqrt{2}x+y$, $b = 3x+\frac{2}{3}y$, $c=\frac{x}{3}$, and $d= 4y$.  Therefore, $3\sqrt{2}c + \frac{d}{4} = 3\sqrt{2}\frac{x}{3} + \frac{4y}{4} = \sqrt{2}x + y = a$.  Similarly, $9c + \frac{d}{6} = 9\frac{x}{3} + \frac{4y}{6} = 3x + \frac{2}{3}y = b$.  Thus, if $(a,b,c,d)\in Im(F)$, then if $(a,b,c,d)\in \left\{(a,b,c,d) \ | \ a = 3\sqrt{2}c + \frac{d}{4}, b = 9c + \frac{d}{6}\right\}$.  That is $Im(F)\subset \left\{(a,b,c,d) \ | \ a = 3\sqrt{2}c + \frac{d}{4}, b = 9c + \frac{d}{6}\right\}$.  

Now, let $(a,b,c,d)\in \left\{(a,b,c,d) \ | \ a = 3\sqrt{2}c + \frac{d}{4}, b = 9c + \frac{d}{6}\right\}$.  Then, choose $x = 3c$ and $y=\frac{d}{4}$.  Then, $a = 3\sqrt{2}c + \frac{d}{4} = 3\sqrt{2}\frac{x}{3} + y = 3\sqrt{2}x + y$ and $b = 9c + \frac{d}{6} = 9\frac{x}{3} + \frac{4y}{6} = 3x + \frac{2}{3}y$.  Thus, $(a,b,c,d) = \left(\sqrt{2}x+y,3x+\frac{2}{3}y,\frac{x}{3},4y\right)\in Im(F)$.  That is $\left\{(a,b,c,d) \ | \ a = 3\sqrt{2}c + \frac{d}{4}, b = 9c + \frac{d}{6}\right\}\subset Im(F)$.  Combining with the earlier observation $Im(F)\subset \left\{(a,b,c,d) \ | \ a = 3\sqrt{2}c + \frac{d}{4}, b = 9c + \frac{d}{6}\right\}$, we have 
$$Im(F)= (a,b,c,d)\in \left\{(a,b,c,d) \ | \ a = 3\sqrt{2}c + \frac{d}{4}, b = 9c + \frac{d}{6}\right\}$$

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.15</span>

Let $F:\mathbb{R}^4 \to \mathbb{R}^2$ be the function $F(a,b,c,d) = (2a+b+c,b,3c)$.  Then, 
$$
\begin{align*}
        Ker(F) &= \{(a,b,c,d)\in R^4 \ | \ F(a,b,c,d) = (0,0)\}\\
        &= \left\{(a,b,c,d)\in R^4 \ | \ (2a+b+c,b,3c) = (0,0,0)\right\}\\
        &= \{(0,0,0,d) \ | \ d\in \mathbb{R}\}
    \end{align*}
$$

And,
$$
\begin{align*}
        Im(F) &= \{F(a,b,c,d) | (a,b,c,d)\in\mathbb{R}^4\}\\
        &= \{(2a+b+c,b,3c) | (a,b,c,d)\in\mathbb{R}^4\}\\
        &= \mathbb{R}^3
    \end{align*}
$$
To see that $Im(F) = \mathbb{R}^3$, we will show that an arbitrary element $(x,y,z)\in \mathbb{R}^3$ belongs to $Im(F)$.  More precisely, note that
$$
\begin{align*}
        F\left(\frac{x}{2}-\frac{y}{2}-\frac{z}{6},y,\frac{z}{3},0\right) &= \left(2\left(\frac{x}{2}-\frac{y}{2}-\frac{z}{6}\right) + y +\frac{z}{3},y,3\frac{z}{3}\right)\\
        &= \left(x - y - \frac{z}{3} + y + \frac{z}{3},y,z\right)\\
        &= (x,y,z)
    \end{align*}
$$

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.26</span>

Find the $Ker(F)$ and $Im(F)$ for the following functions:

- $f:\mathbb{R}^2\to \mathbb{R}^3$ defined as $f(x,y) = (x,y,x-y)$.
- $f:\mathbb{R}^3 \to \mathbb{R}^3$ defined as $f(x,y,z) = (x+4y+13z,2x+5y+14z,3x+6y+15z)$.  
- $f:\mathbb{R}^3\to \mathbb{R}^2$ defined as $f(x,y,z) = (2x+3y,z)$.
- $f:\mathbb{R}^3\to \mathbb{R}^4$ defined as $f(x,y,z) = (x+y,y+z,x+z,x+y+z)$.
- $f:\mathbb{R}^2 \to \mathbb{R}^3$ defined as $f(x,y) = (x+3y, 2x+5y, 7x+9y)$.
- $f:\mathbb{R}^4 \to \mathbb{R}^6$ defined as $f(x,y,z,w) = (x+y,x+z,x+w,y+z,y+w,z+w)$. 


</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 2.9</span>

Let $M_m^n(\mathbb{R}) = \left\{\begin{bmatrix}
a_{11} & a_{12} \dots & a_{1n}\\
a_{21} & a_{22} \dots & a_{2n}\\
. & . & . \\
. & . & . \\
. & . & . \\
a_{m1} & \dots & a_{mn} 
\end{bmatrix} \ : \ a_{ij}\in \mathbb{R} \forall i\in{1,\dots m} \text{ and } j\in \{1,\dots,n\} \right\}$ be the set of $m\times n$ matrices.

</div>


\begin{mdframed}[backgroundcolor=black!5, frametitle={Optional reading}] 


<div class="academic-env env-xca">
<span class="env-label">Exercise 2.27</span>

Show that $\Phi_n:\mathbb{R}^n \to M_n^1(\mathbb{R})$ defined as $F(x_1,\dots,x_n) = \begin{bmatrix}x_1\\ . \\ . \\ . \\ x_n\end{bmatrix}$ is a bijection.

</div>


As there is a canonical bijection between $\mathbb{R}^n$ and $M_n^1(\mathbb{R})$, we may often treat them as the same.  Thus, for instance, we can talk about inner product on $M_n^1(\mathbb{R})$.

As before, this identification between $\mathbb{R}^n$ and $M_n^1(\mathbb{R})$ (and similarly $\mathbb{R}^m$ and $M_m^1(\mathbb{R})$) allows us to think of $F$ as a function from $M_n^1(\mathbb{R})$ to $M_m^1(\mathbb{R})$.  More precisely, given $F:\mathbb{R}^n \to \mathbb{R}^m$, we can define $\overline{F}:= \Phi_m \circ F \circ \Phi_n^{-1}: M_n^1(\mathbb{R}) \to M_m^1(\mathbb{R})$.  As we saw before, matrix multiplication is defined to ensure that 

- $\overline{F}\left(\begin{bmatrix}x_1\\ x_2 \\ . \\ . \\ . \\x_n\end{bmatrix}\right) = \begin{bmatrix}
a_{11} & a_{12} \dots & a_{1n}\\
a_{21} & a_{22} \dots & a_{2n}\\
. & . & . \\
. & . & . \\
. & . & . \\
a_{m1} & \dots & a_{mn} 
\end{bmatrix}\begin{bmatrix}x_1\\ x_2 \\ . \\ . \\ . \\x_n\end{bmatrix}$ 
- If $F:\mathbb{R}^n \to \mathbb{R}^m$ and $G:\mathbb{R}^m \to \mathbb{R}^k$ are such that 
$$\overline{F}\left(\begin{bmatrix}x_1\\ x_2 \\ . \\ . \\ . \\x_n\end{bmatrix}\right) = \begin{bmatrix}
    a_{11} & a_{12} \dots & a_{1n}\\
    a_{21} & a_{22} \dots & a_{2n}\\
    . & . & . \\
    . & . & . \\
    . & . & . \\
    a_{m1} & \dots & a_{mn} 
\end{bmatrix}\begin{bmatrix}x_1\\ x_2 \\ . \\ . \\ . \\x_n\end{bmatrix}$$ and
$$\overline{G}\left(\begin{bmatrix}x_1\\ x_2 \\ . \\ . \\ . \\x_m\end{bmatrix}\right) = \begin{bmatrix}
    b_{11} & b_{12} \dots & b_{1m}\\
    b_{21} & b_{22} \dots & b_{2m}\\
    . & . & . \\
    . & . & . \\
    . & . & . \\
    b_{k1} & \dots & b_{km} 
\end{bmatrix}\begin{bmatrix}x_1\\ x_2 \\ . \\ . \\ . \\x_m\end{bmatrix}$$
then,
$$\overline{G\circ F}\left(\begin{bmatrix}x_1\\ x_2 \\ . \\ . \\ . \\x_n\end{bmatrix}\right) = \left(\begin{bmatrix}
    b_{11} & b_{12} \dots & b_{1m}\\
    b_{21} & b_{22} \dots & b_{2m}\\
    . & . & . \\
    . & . & . \\
    . & . & . \\
    b_{k1} & \dots & b_{km} 
\end{bmatrix}\begin{bmatrix}
    a_{11} & a_{12} \dots & a_{1n}\\
    a_{21} & a_{22} \dots & a_{2n}\\
    . & . & . \\
    . & . & . \\
    . & . & . \\
    a_{m1} & \dots & a_{mn} 
\end{bmatrix}\right)\begin{bmatrix}x_1\\ x_2 \\ . \\ . \\ . \\x_n\end{bmatrix}$$

To each function $F:\mathbb{R}^n \to \mathbb{R}^m$ of the form $F(x_1,\dots,x_n) = \left(\sum\limits_{i=1}^n a_{1i} x_i, \dots, \sum\limits_{i=1}^n a_{mi} x_i\right)$, we can associate an $m\times n$ matrix 
$$\begin{bmatrix}
    a_{11} & a_{12} \dots & a_{1n}\\
    a_{21} & a_{22} \dots & a_{2n}\\
    . & . & . \\
    . & . & . \\
    . & . & . \\
    a_{m1} & \dots & a_{mn} 
\end{bmatrix}$$

these two conditions would force the usual definition of matrix multiplication

\end{mdframed}


<div class="academic-env env-definition">
<span class="env-label">Definition 2.10</span>

Let $A = \begin{bmatrix}
a_{11} & a_{12} \dots & a_{1n}\\
a_{21} & a_{22} \dots & a_{2n}\\
. & . & . \\
. & . & . \\
. & . & . \\
a_{m1} & \dots & a_{mn} 
\end{bmatrix}$ and $B = \begin{bmatrix}
b_{11} & b_{12} \dots & b_{1m}\\
b_{21} & b_{22} \dots & b_{2m}\\
. & . & . \\
. & . & . \\
. & . & . \\
b_{k1} & \dots & b_{km} 
\end{bmatrix}$. Then, we define the product $BA$ as the matrix whose $il$-th entry is equal to $\sum\limits_{i=1}^n b_{ij}a_{jl}$. If $B_1\dots B_k$ are the rows of $B$ and $A^1,\dots,A^n$ are the columns of $A$, then 
$BA = \begin{bmatrix}
\langle B_1, A^1\rangle \dots & \langle B_1,A^n\rangle\\
. & .\\
. & . \\
. & . \\
\langle B_k,A^1\rangle \dots & \langle B_k,A^n\rangle
\end{bmatrix}$<span class="footnote-trigger" title="This notation is inspired from Introduction to Linear Algebra, Serge Lang"><sup>[*]</sup></span>.

</div>


Once again, let $F:\mathbb{R}^n \to \mathbb{R}^m$ be a linear function.  Then, there exists $a_{ij}$ such that $F(x_1,\dots,x_n) = \left(\sum\limits_{i=1}^n a_{1i} x_i, \dots, \sum\limits_{i=1}^n a_{mi} x_i\right)$.  Then, 
$$
\begin{align*}
    Im(F) &= \{F(x_1,\dots,x_n) \ | \ (x_1,\dots,x_n)\in \mathbb{R}^n\}\\
    &= \left\{\left(\sum\limits_{i=1}^n a_{1i} x_i, \dots, \sum\limits_{i=1}^n a_{mi} x_i\right) \ | \ (x_1,\dots,x_n)\in \mathbb{R}^n\right\}\\
    &= \left\{\sum\limits_{i=1}^n x_i\left(a_{1i}, \dots, a_{mi}\right) \ | \ (x_1,\dots,x_n)\in \mathbb{R}^n\right\}\\
    &= \left\{\sum\limits_{i=1}^n x_iA^i \ | \ (x_1,\dots,x_n)\in \mathbb{R}^n\right\}\\
\end{align*}
$$
Thus, the image of $F$ is the span of the columns of the corresponding matrix!  Therefore, the system **2.1** has a solution for a given $(b_1,\dots,b_n)$ iff $(b_1,\dots,b_n)\in \text{Span}(A^1,\dots,A^n)$.  Also, $F$ is surjective iff $\mathbb{R}^m = \text{Span}(A^1,\dots,A^n)$ 


<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.9</span>

Let $F:\mathbb{R}^n \to \mathbb{R}^m$ be a linear function.  Then, $F$ is injective iff $Ker(F) = \{0\}$.

</div>


\begin{mdframed}[backgroundcolor=blue!10, frametitle={Proof Strategy}]
A statement of the form ``if $p$ then $q$" is logically equivalent to the statement ``if $\neg q$, then $\neg p$".  The latter is called the **contrapositive** of the former.  Often it would be easier to prove the contrapositive.  Once again, the easiest way to prove the equivalence is using a truth table.

<div class="text-center my-6">
\begin{tabular}{ |c|c|c|c|c|c| } 
\hline
$p$ & $q$ & $p \implies q$ & $\neg q$ & $\neg p$ & $\neg q \implies \neg q$ \\ 
\hline
T & T & T & F & F & T\\ 
T & F & F & T & F & F\\ 
F & T & T & F & T & T\\ 
F & F & T & T & T & T\\ 
\hline
\end{tabular}
</div>

\end{mdframed}


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Instead of proving ``if $F$ is injective, then $Ker(F) = 0$", we will prove its contrapositive.  More precisely, we will prove that if $Ker(F)\neq \{0\}$, then $F$ is not injective.  This however is really easy.  Assume $Ker(F)\neq \{0\}$, then there exists $0\neq v\in Ker(F)$.  But, then $F(v) = 0 = F(0)$, but $v\neq 0$.  Thus, $F$ is not injective. 

Now we will prove ``If $Ker(F) = \{0\}$, then $F$ is injective".  So, we will assume $Ker(F) = \{0\}$ and prove $F$ is injective.  In other words, we would assume $F(x_1,\dots,x_n) = F(y_1,\dots,y_n)$ and prove that $(x_1,\dots,x_n) = (y_1,\dots,y_n)$.  Notice that as $F$ is linear, there exists constants $a_{ij}$ such that $F(x_1,\dots,x_n) = \left(\sum\limits_{i=1}^n a_{1i} x_i, \dots, \sum\limits_{i=1}^n a_{mi} x_i\right)$.  Thus,
$$
\begin{align*}
        0 &= F(x_1,\dots,x_n) - F(y_1,\dots,y_n)\\
        &= \left(\sum\limits_{i=1}^n a_{1i} x_i, \dots, \sum\limits_{i=1}^n a_{mi} x_i\right) - \left(\sum\limits_{i=1}^n a_{1i} y_i, \dots, \sum\limits_{i=1}^n a_{mi} y_i\right)\\
        &= \left(\sum\limits_{i=1}^n a_{1i} (x_i-y_i), \dots, \sum\limits_{i=1}^n a_{mi} (x_i-y_i)\right)\\
        &= F(x_1-y_1,\dots,x_n-y_n)
    \end{align*}
$$
Thus, $(x_1-y_1,\dots,x_n-y_n)\in Ker(F)$.  Hence $(x_1-y_1,\dots,x_n-y_n) = 0$ that is $(x_1,\dots,x_n) = (y_1,\dots,y_n)$.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.10</span>

Let $F:\mathbb{R}^n \to \mathbb{R}^m$ be a linear function.  Let $A$ be the corresponding matrix and $A^1,\dots,A^n$ be the columns of the matrix.  Then, $F$ is injective iff $x_1A_1 + \dots + x_n A_n = 0$ implies that $(x_1,\dots,x_n) = 0$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Assume $F$ is injective. Notice that Then $F(x_1,\dots,x_n) = x_1A_1 + \dots + x_n A_m$.  Thus, $x_1A_1 + \dots + x_n A_m$ implies that $F(x_1,\dots,x_n) = 0$.  As, $F$ is injective and $F(0)=0$, $(x_1,\dots,x_n) = 0$.  

Now, assume $x_1A_1 + \dots + x_n A_n = 0$ implies that $(x_1,\dots,x_n) = 0$.  Thus, if $(x_1,\dots,x_n)\in Ker(F)$, then $0 = F(x_1,\dots,x_n) = x_1A_1 + \dots + x_n A_m$.  Thus, $(x_1,\dots,x_n) = 0$.  So, $Ker(F) = \{0\}$ and hence $F$ is injective.

</details>
</div>


The above theorem motivates the next concept central in linear algebra.



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.5 Linear Independence</summary>




<div class="academic-env env-definition">
<span class="env-label">Definition 2.11</span>

Let $v_1,\dots, v_k\in \mathbb{R}^n$.  We say $(v_1,\dots,v_k)$ is linearly independent if $\forall (\alpha_1,\alpha_2,\dots,\alpha_k)\in \mathbb{R}^k$, $\alpha_1 v_1 + \dots + \alpha_k v_k = 0 \implies (\alpha_1,\dots,\alpha_k) = (0,\dots,0)$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.16</span>

The vectors $(1,0,0)$, $(0,1,0)$, and $(0,0,1)$ are linearly independent.  To check linear independence, fix $3$ arbitrary real numbers $\alpha_1$, $\alpha_2$, and $\alpha_3$ and equate $(0,0,0) = \alpha_1(1,0,0) + \alpha_2 (0,1,0) + \alpha_3(0,0,1) = (\alpha_1,\alpha_2,\alpha_3)$.  Thus, the only solution is $(\alpha_1,\alpha_2,\alpha_3) = (0,0,0)$ and hence the vectors are linearly independent.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.17</span>

The vectors $(1,-1,0)$, $(1,1,0)$, and $(1,1,1)$ are linearly independent.  To check linear independence, fix $3$ arbitrary real numbers $\alpha_1$, $\alpha_2$, and $\alpha_3$ and equate $(0,0,0) = \alpha_1(1,-1,0) + \alpha_2 (1,1,0) + \alpha_3(1,1,1) = (\alpha_1 + \alpha_2 + \alpha_3,-\alpha_1 + \alpha_2 + \alpha_3,\alpha_3)$.  Equating the $z$-coordinates, we get $\alpha_3=0$.  Substituting this value of $\alpha_3$, we get two equations $\alpha_1 + \alpha_2 = 0$ and $-\alpha_1 + \alpha_2 = 0$.  That is $\alpha_1 + \alpha_2 = -\alpha_1 + \alpha_2$, that is $\alpha_1 = -\alpha_1$.  Thus, $\alpha_1 = 0$.  Substituting this value of $\alpha_1$ in either of the equations, we get $\alpha_3 = 0$.  Thus, the only solution is $(\alpha_1,\alpha_2,\alpha_3) = (0,0,0)$ and hence the vectors are linearly independent.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.18</span>

The vectors $(1,-1,1)$, $(1,1,1)$, and $(2,0,2)$ are not linearly independent.  The easiest way to prove the claim is to just observe that $(1).(1,-1,1)+(1)(1,1,1)+(-1).(2,0,2) = (1+1-2,(-1)+1+0,1+1-2) = (0,0,0)$.  Thus, there exists a non-zero $(\alpha_1,\alpha_2,\alpha_3)\in \mathbb{R}^3$ (namely $(1,1,-1)$) such that $\alpha_1 v_1 + \alpha_2 v_2 + \alpha_3 v_3 = 0$.  

We can also solve it in a systematic way which would be more useful in general.  Fix $3$ arbitrary real numbers $\alpha_1$, $\alpha_2$, and $\alpha_3$ and equate $(0,0,0) = \alpha_1(1,-1,1) + \alpha_2 (1,1,1) + \alpha_3(2,0,2) = (\alpha_1 + \alpha_2 + 2\alpha_3,-\alpha_1 + \alpha_2, \alpha_1 + \alpha_2 + 2\alpha_3)$.  Thus, we have just two equations $-\alpha_1 + \alpha_2 = 0$ and $\alpha_1 + \alpha_2 + 2\alpha_3 = 0$.  The first equation implies that $\alpha_1 = \alpha_2$.  Substituting this in the second equation, we get $2\alpha_1 + 2\alpha_3 = 0$ or $\alpha_3 = -\alpha_1$.  Thus, any triple of the form $(x,x,-x)$  is a solution to the system of equations.  Of course this can be verified by checking $x(1,-1,1) + x(1,1,1) + (-x)(2,0,2) = (0,0,0)$.  The earlier solution was the special case when $x=1$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.19</span>

The vectors $(1,2,3)$, $(4,5,6)$, and $(13,14,15)$ are not linearly independent.  To check linear independence, fix $3$ arbitrary real numbers $\alpha_1$, $\alpha_2$, and $\alpha_3$ and equate $(0,0,0) = \alpha_1(1,2,3) + \alpha_2 (4,5,6) + \alpha_3(13,14,15) = (\alpha_1 + 4\alpha_2 + 13\alpha_3,2\alpha_1 + 5\alpha_2 + 14\alpha_3,3\alpha_1 + 6\alpha_2 + 15\alpha_3)$. Thus, we have the system of linear equations.
$$
\begin{align*}
        \alpha_1 + 4\alpha_2 + 13\alpha_3 &= 0\\
        2\alpha_1 + 5\alpha_2 + 14\alpha_3 &= 0\\
        3\alpha_1 + 6\alpha_2 + 15\alpha_3 &= 0
    \end{align*}
$$
Notice that $(\alpha_1,\alpha_2,\alpha_3)$ satisfies $\alpha_1 + 4\alpha_2 + 13\alpha_3 = 0$ iff it satisfies $2\alpha_1 + 8\alpha_2 + 26\alpha_3 = 0$.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 2.12</span>

Let $v_1,\dots, v_k\in \mathbb{R}^n$.  We say $(v_1,\dots,v_k)$ is linearly dependent if they are not linearly independent.  In other words, we say $(v_1,\dots,v_k)$ is linearly dependent if  $\exists (\alpha_1,\alpha_2,\dots,\alpha_k)\in \mathbb{R}^k$, such that $(\alpha_1,\dots,\alpha_k) \neq (0,\dots,0)$ but $\alpha_1 v_1 + \dots + \alpha_k v_k = 0$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.28</span>

Check (using the definition) if the following collection of vectors in $\mathbb{R}^2$ are linearly independent or dependent
\begin{multicols}{2}

- $(2,2)$
- $(1,1),(1,-1)$
- $(1,2),(2,1)$
- $(1,2),(3,4),(5,6)$

\end{multicols}

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.11</span>

Given any three vectors $v_1,v_2,v_3\in \mathbb{R}^2$, $(v_1,v_2,v_3)$ is linearly dependent. 


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

If $(v_1,v_2)$ is linearly dependent, then there exists $(\alpha_1,\alpha_2)\neq (0,0)$ such that $\alpha_1 v_1 + \alpha_2 v_2 = 0$.  Thus, $\alpha_1 v_1 + \alpha_2 v_2 + 0.v_3 = 0$ and $(\alpha_1,\alpha_2,0)\neq (0,0,0)$.  Therefore $(v_1,v_2,v_3)$ is linearly dependent.  If $(v_1,v_2)$ is linearly independent, then by Theorem **1.15**, $\text{Span}(v_1,v_2) = \mathbb{R}^2$.  Thus, there exists $\alpha_1,\alpha_2\in \mathbb{R}$ such that $v_3 = \alpha_1 v_1 + \alpha_2 v_2$.  Thus, $\alpha_1 v_1 + \alpha_2 v_2 + (-1)v_3=0$ and thus $(v_1,v_2,v_3)$ is linearly dependent.

</details>
</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.29</span>

Check (using the definition) if the following collection of vectors in $\mathbb{R}^3$ are linearly independent or dependent
\begin{multicols}{2}

- $(1,0,1),(1,1,0),(1,1,0)$
- $(1,1,1),(1,1,-1),(-1,1,1)$
- $(1,0,0),(1,2,3),(5,6,9)$
- $(1,1,1),(1,2,1),(3,1,1)$
- $(1,1,1),(1,2,1),(1,3,1)$
- $(1,2,3),(2,1,3)$

\end{multicols}

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.12</span>

If $(v_1,v_2,\dots,v_k)$ is linearly independent, then any subcollection $(v_{i_1},v_{i_2},\dots,v_{i_m})$ (where $1\leq i_1\leq i_2\leq \dots \leq i_m \leq k$) is also linearly independent.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Proof (by contradiction))</summary>

Assume $(v_{i_1},v_{i_2},\dots,v_{i_m})$ is linearly dependent, that is, $\exists (a_{i_1},\dots,a_{i_m})\neq 0$ such that $a_{i_1}v_{i_1} + \dots + a_{i_m}v_{i_m} = 0$.  Define $a_j = 0$ if $j\not\in \{i_1,i_2,\dots,i_m\}$.  Then $(a_1,\dots,a_n)\neq 0$ but,
$$a_1v_1 + \dots a_k v_k = a_{i_1}v_{i_1} + \dots + a_{i_m}v_{i_m} = 0.$$
Thus, $(v_1,\dots,v_k)$ is linearly dependent.  But, this is a contradiction.  So, our assumption that $(v_{i_1},v_{i_2},\dots,v_{i_m})$ is linearly dependent should be incorrect.

</details>
</div>


Combining the above result with Theorem **2.11**, we get

\begin{corollary}
Let $v_1,\dots,v_k\in \mathbb{R}^2$ and $k > 2$.  Then, $(v_1,v_2,\dots,v_k)$ is linearly dependent.
\label{cor:k>2vinR2LI}
\end{corollary}


<div class="academic-env env-lemma">
<span class="env-label">Lemma 2.1</span>

If $v\in \text{Span}(v_1,\dots,v_k)$, then $(v,v_1,\dots,v_k)$ is linearly dependent.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $v\in \text{Span}(v_1,\dots,v_k)$, there exists $(\alpha_1,\dots,\alpha_k)\in \mathbb{R}^k$ such that $v = \alpha_1 v_1 + \dots + \alpha_k v_k$.  Therefore, $(-1)v + \alpha_1 v_1 + \dots + \alpha_k v_k = 0$ and therefore $(v,v_1,\dots,v_k)$ is linearly dependent.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.13</span>

Let $V$ be a subspace of $\mathbb{R}^n$.  Let $v_i\in V$ for all $i\in \{1,\dots,k\}$ and let $w_j\in V$ for all $j\in \{1,\dots, l\}$.  If $(v_1,\dots,v_k)$ are linearly independent and $\text{Span}(w_1,\dots,w_l) = V$, then $k\leq l$.<span class="footnote-trigger" title="The statement of this theorem and its proof is from \cite{Axler"><sup>[*]</sup></span>.  The proof is however significantly elaborated.}


</div>


This proof is very involved.  So, we would first give the key ideas of the proof without getting into the details.  Hopefully, keeping this idea in mind would help you appreciate the proof better.


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Proof Sketch)</summary>

We start with the list $(w_1,\dots,w_l)$ and adjoin the vector $v_k$ to it to obtain the list $(v_k,w_1,\dots,w_l)$.  We show $(v_k,w_1,\dots,w_l)$ is linearly dependent and therefore we may without loss of generality assume $\text{Span}(w_1,\dots,w_l) = \text{Span}(v_k,w_2,\dots,w_l)$.  Thus, we replace the list $(w_1,\dots,w_l)$ with $(v_k,w_2,\dots,w_l)$.  We repeat this process - at every stage, we add a $v$ and drop a $w$.  If we run out of $w$'s before we run out of $v$'s then a subcollection of $v$'s  will span $V$.  This would contradict the fact that $(v_1,\dots,v_k)$ is linearly independent.  Thus, there should be at least as many $w$'s as there are $v$'s.

</details>
</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $\text{Span}(w_1,\dots,w_l) = V$ and $v_k\in V$, by Lemma **2.1** we know that $(v_k,w_1,\dots,w_l)$ is linearly dependent.  Thus, there exists $(a_k,b_1,\dots,b_l) \neq 0$ such that $a_k v_k + b_1 w_1 + \dots + b_l w_l = 0$.  Notice if $(b_1,\dots, b_l) = 0$, then $a_k\neq 0$ but $0 = a_k v_k + b_1 w_1 + \dots + b_l w_l = a_k v_k$.  Which implies that $v_k$ is the $0$ vector.  But then $0v_1 + \dots + 0v_{k-1} + 1v_k = 0$.  This contradicts our assumption that $(v_1,\dots,v_k)$ is linearly independent.  So, $(b_1,\dots, b_l) \neq 0$.  If $l = 1$, then $V = \text{Span}(w_1)$ and $b_1\neq 0$.  Thus, $w_1 = -\frac{a_k}{b_1}v_k$.  Hence $\text{Span}(v_k) = \text{Span}(w_1) = V$.  As $(v_1,\dots,v_k)$ is linearly independent, this would imply that $k = 1$.  Else, $v_1 \in \text{Span}(v_k)$, which means $v_1 = \alpha_k v_k$.  Then, $(-1)v_1 + 0v_2 + \dots + 0v_{k-1} + \alpha_k v_k = 0$ and $(v_1,\dots,v_k)$ is linearly dependent - a contradiction.  Thus, if $l=1$, then $k=1$ and we have $k\leq l$.  So, we may assume $l> 1$.  If $k = 1$, then $k < l$.  Thus, we may assume that $k>1$.  Without loss of generality (Notice that span does not depend on the order of the vectors.  Thus, if needed we can renumber $w_1,\dots,w_l$) we may assume that $b_1\neq 0$.  Thus, 
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


\begin{corollary}
If $(v_1,\dots,v_k)$ is a linearly independent list of vectors in $\mathbb{R}^n$, then $k\leq n$.
\label{cor:RnLIset<n}
\end{corollary}


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Note that $\text{Span}(e_1,\dots,e_n) = \mathbb{R}^n$.  Thus, $k\leq n$.

</details>
</div>


\begin{corollary}
If $\text{Span}(v_1,\dots,v_k) = \mathbb{R}^n$, then $k\geq n$.
\label{cor:RnSpanset>n}
\end{corollary}


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Note that $(e_1,\dots,e_n)$ is linearly independent.  Thus, $k\geq n$.

</details>
</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.6 Basis and Dimension</summary>




<div class="academic-env env-definition">
<span class="env-label">Definition 2.13</span>

Let $V$ be a subspace of $\mathbb{R}^n$, then a list of vectors $(v_1,\dots,v_k)$ is called a basis if 

- $\text{Span}(v_1,\dots,v_k) = V$
- $(v_1,\dots,v_k)$ is linearly independent.


</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.20</span>

The list $((1,0),(0,1))$ is a basis of $\mathbb{R}^2$.  The list $((1,1),(1,-1))$ is also a basis of $\mathbb{R}^2$.  The list $((1,0),(0,1),(1,1))$ is not a basis as it is not linearly independent.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.21</span>

Let $e_i$ be the vector in $\mathbb{R}^n$ whose $i$-th entry is $1$ and all other entries are $0$.  Then $(e_1,\dots,e_n)$ is a basis for $\mathbb{R}^n$.  Notice that we will often denote $(1,0)\in \mathbb{R}^2$ and $(1,0,0)\in \mathbb{R}^3$ by $e_1$.  In most situations this will not lead to any confusion instead it will aid in clarity.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.22</span>

Let $V = \text{Span}((1,2,3),(4,5,6),(13,14,15))$.  We will start by checking if the list $((1,2,3),(4,5,6),(13,14,15))$ is linearly independent.  Assume $\alpha (1,2,3) + \beta (4,5,6) +\gamma (13,14,15) = (0,0,0)$.  That is,
$$
\begin{align*}
        \alpha +4\beta + 13\gamma &= 0\\
        2\alpha + 5\beta + 14\gamma &= 0\\
        3\alpha + 6\beta + 15\gamma &= 0
    \end{align*}
$$
As $\alpha +4\beta + 13\gamma = 0$, $2\alpha +8\beta + 26\gamma = 0$.  Thus, $0 = (2\alpha +8\beta + 26\gamma) - (2\alpha + 5\beta + 14\gamma) = 3\beta + 12\gamma$.  That is, $\beta = -4\gamma$.  Substituting this value of $\beta$ in the equation $3\alpha + 6\beta + 15\gamma = 0$, we get $0 = 3\alpha + 6 ((-4)\gamma ) + 15\gamma = 3\alpha - 9\gamma$.  That is, $\alpha = 3\gamma$.  Taking $\gamma = 1$, we can check that $3(1,2,3) + (-4)(4,5,6) + (13,14,15) = (0,0,0)$.  In other words, $(13,14,15) = (-3)(1,2,3) + 4(4,5,6)$.  Thus, $(13,14,15)\in \text{Span}((1,2,3),(4,5,6))$.  Therefore, 
$$\text{Span}((1,2,3),(4,5,6)) = \text{Span}((1,2,3),(4,5,6),(13,14,15)) = V.$$
Now, let us check if $((1,2,3),(4,5,6))$ is linearly independent.  Assume $\alpha (1,2,3) + \beta (4,5,6) = (0,0,0)$.  That is
$$
\begin{align*}
        \alpha + 4\beta &= 0\\
        2\alpha + 5\beta &= 0\\
        3\alpha + 6\beta &= 0
    \end{align*}
$$
As $\alpha + 4\beta = 0$, $2\alpha + 8\beta = 0$.   Thus, $0 = (2\alpha + 8\beta) - 2\alpha + 5\beta = 3\beta$.  Therefore $\beta = 0$ and hence $\alpha = 0$.  That is, $((1,2,3),(4,5,6))$ is linearly independent.  Thus, $((1,2,3),(4,5,6))$ is a basis for $V$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.23</span>

Let $V = \text{Span}((1,2,3),(4,5,6),(13,14,13))$.  We will start by checking if the list $((1,2,3),(4,5,6),(13,14,13))$ is linearly independent.  Assume $\alpha (1,2,3) + \beta (4,5,6) +\gamma (13,14,13) = (0,0,0)$.  That is,
$$
\begin{align*}
        \alpha +4\beta + 13\gamma &= 0\\
        2\alpha + 5\beta + 14\gamma &= 0\\
        3\alpha + 6\beta + 13\gamma &= 0
    \end{align*}
$$
Thus, $0 = (3\alpha +6\beta + 13\gamma) - (\alpha + 4\beta + 13\gamma) = 2\alpha + 2\beta$.  That is, $\beta = -\alpha$.  Substituting this value of $\beta$ in $2\alpha + 5\beta + 14\gamma = 0$, we get $0 = 2\alpha - 5\alpha + 14\gamma = (-3)\alpha + 14\gamma$.  That is $\gamma = \frac{3}{14}\alpha$.  Substituting these values of $\beta$ and $\gamma$ in $\alpha +4\beta + 13\gamma = 0$, we get $0 = \alpha - 4\alpha + \frac{39}{14}\alpha = -\frac{3}{14}\alpha$.  Thus, $\alpha = 0$ and hence $(\alpha,\beta,\gamma) = \left(\alpha,-\alpha,\frac{3}{14}\alpha\right)= (0,0,0)$.  Therefore, $((1,2,3),(4,5,6),(13,14,13))$ is a basis of $V$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.24</span>

Let $V = \{(x,y,z)\in \mathbb{R}^3 \ | 2x+3y = 0\}$.  Then,
$$
\begin{align*}
        V &= \left\{\left(x,-\frac{2}{3}x,z\right) | (x,z)\in \mathbb{R}^2\right\}\\
        &= \left\{x\left(1,-\frac{2}{3},0\right) + z(0,0,1) | (x,z)\in \mathbb{R}^2\right\}\\
        &= \text{Span}\left(\left(1,-\frac{2}{3},0\right),(0,0,1)\right)
    \end{align*}
$$
It is easy to see that $\left(\left(1,-\frac{2}{3},0\right),(0,0,1)\right)$ is linearly independent as $\alpha \left(1,-\frac{2}{3},0\right) + \beta(0,0,1) = 0$ clearly implies $(\alpha,\beta) = (0,0)$.  Thus, $\left(\left(1,-\frac{2}{3},0\right),(0,0,1)\right)$ is a basis for $V$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.14</span>

If $(v_1,\dots,v_k)$ and $(w_1,\dots,w_l)$ are both basis of a subspace $V$ of $\mathbb{R}^n$, then $k=l$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $(v_1,\dots,v_k)$ is a basis, $(v_1,\dots,v_k)$ is linearly independent.  And, as $(w_1,\dots,w_l)$ is a basis, $\text{Span}(w_1,\dots,w_l) = V$.  Thus, by Theorem **2.13**, $k\leq l$.  However, as $(v_1,\dots,v_k)$ is a basis, $\text{Span}(v_1,\dots,v_k) = V$.  And, as $(w_1,\dots,w_l)$ is a basis, $(w_1,\dots,w_l)$ is linearly independent.  Thus, by Theorem **2.13**, $l\leq k$.  Hence $k=l$.

</details>
</div>


Thus, any two basis of a subspace $V\subset \mathbb{R}^n$ has the same cardinality.  But, can we find a basis for any subspace of $\mathbb{R}^n$?


<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.15</span>

Given any subspace $V \neq \{0\}$ of $\mathbb{R}^n$, we can find a basis for $V$.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $V\neq \{0\}$, there exists at least one non-zero vector $v_1\in V$.  If $\text{Span}(v_1) = V$, then $v_1$ is a basis for $V$.  If not, let $v_2\in V\setminus \text{Span}(v_1)$ be an arbitrary element.  Then $(v_1,v_2)$ is linearly independent.  If $\text{Span}(v_1,v_2) = V$, then $(v_1,v_2)$ is a basis for $V$ if not let $v_3\in V\setminus \text{Span}(v_1,v_2)$ be an arbitrary element.  Then $(v_1,v_2,v_3)$ is linearly independent.  If $\text{Span}(v_1,v_2,v_3) = V$, then $(v_1,v_2,v_3)$ is a basis for $V$ if not let $v_4\in V\setminus \text{Span}(v_1,v_2,v_3)$ be an arbitrary element.  Then $(v_1,v_2,v_3,v_4)$ is linearly independent.  We can keep repeating this process.  If $(v_1,\dots,v_k)$ is linearly independent and $\text{Span}(v_1,\dots,v_k) \neq V$, then we can take an arbitrary vector $v_{k+1}\in V\setminus \text{Span}(v_1,\dots,v_k)$.  But, thus process has to stop as otherwise we will obtain a list $(v_1,\dots,v_{n+1})$ that is linearly independent contradicting Corollary **??**.

</details>
</div>


Hidden in the above proof is the following useful fact


<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.16</span>

Let $V$ be a subspace of $\mathbb{R}^n$ and let $(v_1,\dots,v_l)$ be a linearly independent list of vectors in $V$.  Then, there exists additional vectors $v_{l+1},\dots,v_k$ such that $(v_1,\dots,v_k)$ is a basis of $V$.  


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.30</span>

Prove the above theorem.

</div>


Similarly, we have


<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.17</span>

Let $V$ be a subspace of $\mathbb{R}^n$ and let $\text{Span}(v_1,\dots,v_l) = V$.  Then, there exists a subcollection $(v_{i_1},\dots,v_{i_k})$ where $1\leq v_{i_1}<\dots < v_{i_k} \leq v_l$ such that $(v_{i_1},\dots,v_{i_k})$ is a basis of $V$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $m$ be the smallest natural number such that $v_m \neq 0$.  Then, $\text{Span}(v_m,\dots,v_l) = \text{Span}(v_1,\dots,v_l) = V$.  Thus, we can throw away $v_1,\dots,v_{m-1}$ and renumber the vectors.  In other words, we may assume without loss of generality that $v_1 \neq 0$.  Thus, start with the list $\mathcal{B} = (v_1)$.  If $v_2\not\in \mathcal{B}$, then add $v_2$ to $\mathcal{B}$ (by convention we add to the right, that is, $\mathcal{B} = (v_1,v_2)$).  Else, leave $\mathcal{B}$ as it is.   If $v_3\not\in \mathcal{B}$, then add $v_3$ to $\mathcal{B}$.  Else, leave $\mathcal{B}$ as it is.  Repeat these steps $n$ times and we have the required list.

</details>
</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 2.14</span>

Let $V$ be a subspace $\mathbb{R}^n$.  If $V= \{0\}$, we say the dimension of $V$ is $0$.  If $V\neq \{0\}$, then the dimension of $V$ is the cardinality of any of its basis.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.25</span>

As $(e_1,\dots,e_n)$ is a basis for $\mathbb{R}^n$, the dimension of $\mathbb{R}^n$ is $n$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.26</span>

Let $V = \text{Span}((1,2,3),(4,5,6),(13,14,15))$.  As $((1,2,3),(4,5,6))$ is a basis for $V$, dimension of $V$ is $2$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.27</span>

Let $V = \text{Span}((1,2,3),(4,5,6),(13,14,13))$.  As, $((1,2,3),(4,5,6),(13,14,13))$ is a basis of $V$, dimension of $V$ is $3$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.28</span>

Let $V = \{(x,y,z)\in \mathbb{R}^3 \ | 2x+3y = 0\}$.  As. $\left(\left(1,-\frac{2}{3},0\right),(0,0,1)\right)$ is a basis for $V$, dimension of $V$ is $2$

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.31</span>

In the following questions, find the dimension of the nullspace/kernel and range/image (by explicitly finding a $(v_1,\dots,v_k)$ and showing that $(v_1,\dots,v_k)$ are linearly independent and $\text{Span}(v_1,\dots,v_k) = V$.).  Check that the sum of the dimensions of the nullspace and the range add up to the dimension of the domain.  
[i)]
- $f:\mathbb{R}^2\to \mathbb{R}^3$ defined as $f(x,y) = (x,y,x-y)$.
- $f:\mathbb{R}^3 \to \mathbb{R}^3$ defined as $f(x,y,z) = (x+4y+13z,2x+5y+14z,3x+6y+15z)$.  
- $f:\mathbb{R}^3\to \mathbb{R}^2$ defined as $f(x,y,z) = (2x+3y,z)$.
- $f:\mathbb{R}^3\to \mathbb{R}^4$ defined as $f(x,y,z) = (x+y,y+z,x+z,x+y+z)$.


</div>


We will now show that the observation in the above exercise was no coincidence.


<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.18</span>

Let $F:\mathbb{R}^n \to \mathbb{R}^m$ be a linear function.  Then $dim(Ker(F)) + dim(Im(F)) = n$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We know that $Ker(F)$ is a subspace of $\mathbb{R}^n$.  Thus, by Theorem **2.15**. $Ker(F)$ has some basis $(v_1,\dots,v_k)$.  Thus, $(v_1,\dots,v_k)$ is linearly independent.  Therefore, by Theorem **2.16**, we can extend $(v_1,\dots,v_k)$ to a list $(v_1,\dots,v_n)$ which form a basis of $\mathbb{R}^n$.  Let $F(v_{k+1}) = w_{k+1}$, $F(v_{k+2}) = w_{k+2},\dots$ $F(v_n) = w_n$.  As $(v_1,\dots,v_n)$ is a basis of $\mathbb{R}^n$, given any vector $v\in \mathbb{R}^n$ there exists $(\alpha_1,\dots,\alpha_n)\in \mathbb{R}^n$ such that $v = \alpha_1 v_1 + \dots + \alpha_n v_n$.  As $F$ is linear,
$$F(v) = \alpha_1 F(v_1) + \dots + \alpha_n F(v_n) = \alpha_1 0 + \dots \alpha_k 0 + \alpha_{k+1} w_{k+1} + \alpha_n w_n = \alpha_{k+1} w_{k+1} + \alpha_n w_n.$$
As $v$ was arbitrary, this implies that $Im(F) = \text{Span}(w_{k+1},\dots,w_n)$.  Moreover, if $\alpha_{k+1} w_{k+1} + \dots + \alpha_n w_n = 0$, then, $F(\alpha_{k+1} v_{k+1} + \dots + \alpha_n v_n) = \alpha_{k+1} w_{k+1} + \alpha_n w_n = 0$.  That is $\alpha_{k+1}v_{k+1} + \dots + \alpha_n v_n \in Ker(F)$.  As $(v_1,\dots,v_k)$ is a basis of $Ker(F)$, there exists $(\alpha_1,\dots,\alpha_k)\in \mathbb{R}^k$ such that $\alpha_1 v_1 + \dots + \alpha_k v_k = \alpha_{k+1}v_{k+1} + \dots + \alpha_n v_n$.  In other words, $\alpha_1 v_1 + \dots + \alpha_k v_k + (-\alpha_{k+1})v_{k+1} + \dots + (-\alpha_n) v_n = 0$.  As $(v_1,\dots,v_n)$ is linearly independent, this would imply that $\alpha_i = 0$ for all $i \in \{1,\dots,n\}$.  Thus, in particular $(\alpha_{k+1},\dots,\alpha_n) = 0$.  Hence, $(w_{k+1},\dots,w_n)$ is linearly independent.  Therefore, $(w_{k+1},\dots,w_n)$ is a basis for $Im(F)$.  Thus, $dim(Ker(F)) + dim(Im(F)) = k + (n-k) = n$.

</details>
</div>



</details>