# Holomorphic functions

Last chapter gave us a thorough understanding of the various structures that can be equipped on $\mathbb{C}$.  Analysis, however, is the study of functions, so we should have a rich class of functions $f:\mathbb{C} \to \mathbb{C}$ at our disposal.  Interestingly, they are already at your disposal.  



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.1 Two Recipes</summary>



Broadly there are two strategies to come up with functions $f:\mathbb{C}\to \mathbb{C}$ or from $f:D\to \mathbb{C}$ where $D$ is a subset of $\mathbb{C}$.  Historically, the word function was almost synonymous to an algebraic expression - sometimes also called a formula.  The more abstract definitions of functions (think of the Dirichlet or Thomae functions) are a more recent phenomenon - meaning only a couple of centuries old.  Thus, polynomials - expressions of the form $a_n z^n + a_{n-1}z^{n-1}+\dots + a_1 z + a_0$ - can be treated as functions.  However, the algebraic expressions, our ancestors used were not always as simple.  They also dealt with more complicated expressions which will be the content of our next chapter.  Polynomials and their cousins use the structure of $\mathbb{C}$ to construct functions. 

There is an easier way to construct functions $f:\mathbb{C} \to \mathbb{C}$.  Notice that given a function $F:\mathbb{R}^2 \to \mathbb{R}^2$, it corresponds canonically to a function $f:\mathbb{C} \to \mathbb{C}$.  More precisely, if $\pi_1:\mathbb{R}^2 \to \mathbb{R}$ is the function $\pi_1(x,y) = x$ and $\pi_2:\mathbb{R}^2 \to \mathbb{R}$ is the function $\pi_2(x,y) = y$, 
$$f(x+iy) = \pi_1(F(x,y)) + i \pi_2(F(x,y)).$$
Similarly, given a function $f:\mathbb{C} \to \mathbb{C}$, it corresponds canonically to a function $F:\mathbb{R}^2 \to \mathbb{R}^2$.  More precisely,
$$F(x,y) = (Re(f(x+i y)),Im(f(x+i y))).$$
Thus, the identification of $\mathbb{R}^2$ and $\mathbb{C}$ create an identification of the set of functions $F:\mathbb{R}^2 \to \mathbb{R}^2$ - $\mathcal{F}(\mathbb{R}^2,\mathbb{R}^2)$ - and the set of functions $f:\mathbb{C} \to \mathbb{C}$ - $\mathcal{F}(\mathbb{C},\mathbb{C})$.  Moreover, recall that a sequence $z_n = x_n + iy_n$ converges to $z = (x,y)$ iff $(x_n,y_n)$ converges to $(x,y)$.  Thus, 


<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.1</span>

A function $F:\mathbb{R}^2 \to \mathbb{R}^2$ is continuous iff the corresponding function $f:\mathbb{C} \to \mathbb{C}$ is continuous.

</div>

\[ \begin{tikzcd}
\mathbb{R}^2 \arrow{r}{F} \arrow[<->]{d}{} & \mathbb{R}^2 \arrow[<->]{d}{} \\%
\mathbb{C} \arrow{r}{f}& \mathbb{C}
\end{tikzcd}
\]

The one-one correspondence between the $\mathcal{F}(\mathbb{R}^2,\mathbb{R}^2)$ and $\mathcal{F}(\mathbb{C},\mathbb{C})$ gives us plenty of examples of functions $F:\mathbb{C}\to \mathbb{C}$.  Moreover, the above theorem helps us understand the continuity of functions $F:\mathbb{C}\to \mathbb{C}$.  


<div class="academic-env env-lemma">
<span class="env-label">Lemma 2.1</span>

If $z = x +i y$, then the real part and imaginary part of $z^n$ are polynomials in $x$ and $y$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Proof by Induction)</summary>

The base case is pretty obvious.  Assume that $z^k = p(x,y) + i q(x,y)$.  Then $z^{k+1} = z^k.z = (p(x,y)+i q(x,y))(x+i y) = xp(x,y)-yq(x,y) + i (yp(x,y)+xq(x,y))$.  From the expression, it is clear that the real and imaginary parts of $z^{k+1}$ are also polynomials.  Thus, by induction, we have the result.

</details>
</div>


From the above lemma, the following result is straightforward


<div class="academic-env env-lemma">
<span class="env-label">Lemma 2.2</span>

If $f:\mathbb{C}\to \mathbb{C}$ is a polynomial, then the corresponding function $F:\mathbb{R}^2\to \mathbb{R}^2$ is both continuous and differentiable.

</div>


Thus, given a non-differentiable function $F:\mathbb{R}^2 \to \mathbb{R}^2$, the corresponding function cannot be a polynomial.  This observation can be used to construct examples of functions that are not polynomials.


<div class="academic-env env-example">
<span class="env-label">Example 2.1</span>

The function $f:\mathbb{C} \to \mathbb{C}$ defined as $f(x + i y) = |x| + i |y|$ is not differentiable and hence cannot be a polynomial.

</div>


Unfortunately, even if we restrict our attention to continuous and differentiable functions $f:\mathbb{R}^2\to \mathbb{R}^2$, the corresponding functions $F:\mathbb{C}\to \mathbb{C}$ need not be a polynomial.  And this follows from another regularity of polynomials.  The fundamental theorem of algebra (which we will hopefully prove in this course) implies that 


<div class="academic-env env-lemma">
<span class="env-label">Lemma 2.3</span>

If $f:\mathbb{C}\to \mathbb{C}$ is a polynomial, then $f^{-1}(0)$ is a finite set.

</div>


This allows us to construct several examples of functions that are continuous and differentiable but not polynomials.


<div class="academic-env env-example">
<span class="env-label">Example 2.2</span>

Let $f:\mathbb{C} \to \mathbb{C}$ be the function $f(z) = \sin(x) + i \cos(y)$.  Then, the zero set is a countable set and hence $f$ is not a polynomial.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.3</span>

Let $f:\mathbb{C} \to \mathbb{C}$ be the function $f(z) = x$.  Then, the zero set is an uncountable set and hence $F$ is not a polynomial.

</div>


The previous example can be generalised to 


<div class="academic-env env-example">
<span class="env-label">Example 2.4</span>

Let $f:R\to \mathbb{R}$ be any differentiable function with at least one zero.  And let $F:\mathbb{C}\to \mathbb{C}$ be the function $F(x+i y) = f(x)$.  Then the zero set is an uncountable set and hence $F$ is not a polynomial

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.2 Cauchy-Riemann equations</summary>



Anyways, you will probably agree that polynomials are too nice, and therefore we should not stick to just polynomials.  But, I claim, differentiable functions $f:\mathbb{R}^2\to \mathbb{R}^2$ is also not the right class of functions.  To understand this claim, let us recall that the derivative of a function $f$ at a point $a$ is a linear approximation of $f$ near the point $a$.  However, the notion of linearity is dependent on the underlying field.  And I hope you would agree with me that you should probably look for linearity when $\mathbb{C}$ is treated as a vector space over $\mathbb{C}$ - else it is pretty much the same as $\mathbb{R}^2$.  

Then, the functions $F:\mathbb{C} \to \mathbb{C}$ defined as $f(z) = \overline{z}$ corresponds to the function $f:\mathbb{R}^2 \to \mathbb{R}^2$ defined as $f(x,y) = (x,-y)$.  The derivative of this function at any point is the matrix $$\begin{bmatrix}
1 & 0\\
0 & -1
\end{bmatrix}.$$
The function defined by the above matrix namely $f(x,y) = (x,-y)$ is a linear function from $\mathbb{R}^2 \to \mathbb{R}^2$, but the corresponding function $f:\mathbb{C} \to \mathbb{C}$ defined as $f(z) = \overline{z}$ is not a linear map, as $f(i . i) = f(-1) = -1 \neq +1 = i . (-i) = i f(i)$.  In fact, 


<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.2</span>

Every linear map from $\mathbb{C}$ to $\mathbb{C}$ when viewed as a function from $\mathbb{R}^2$ to $\mathbb{R}^2$ is given by a matrix 
$$\begin{bmatrix}
a & -b\\
b & a
\end{bmatrix}.$$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Recall that if $L:\mathbb{C} \to \mathbb{C}$ is linear, then $L(z) = L(z.1) = z.L(1) = L(1).z$.  So, if we denote, $L(1)$ by $a+ib$, then $L(z) = (a+ib)z$.  But, we saw earlier that this correspond to the linear map $$\begin{bmatrix}
a & -b\\
b & a
\end{bmatrix}.$$

</details>
</div>


Thus, given a function $f:\mathbb{R}^2 \to \mathbb{R}^2$ defined as $f(x,y) = (u(x,y),v(x,y))$, its derivative given by the matrix
$$\begin{bmatrix}
\frac{\partial u}{\partial x} & \frac{\partial u}{\partial y}\\
\frac{\partial v}{\partial x} & \frac{\partial v}{\partial y}
\end{bmatrix}.$$
is $\mathbb{C}$-linear iff 
$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \text{ and } \frac{\partial u}{\partial y} = - \frac{\partial v}{\partial x}.$$
The above equations are famously known as the Cauchy-Riemann equations. 

I encourage you to take some polynomials and verify that they satisfy Cauchy-Riemann equations.  In fact, it can be proved that every polynomial satisfies the Cauchy-Riemann equations.  However, in these notes, we will not do so.  We would rather obtain this fact as a consequence of the results in the next section.  You are of course encouraged to prove it.  It is very difficult to find function $f:\mathbb{C} \to \mathbb{C}$ that are not polynomials but satisfy Cauchy-Riemann equations.  Next chapter we will explore such functions.  But, we can already discuss examples on subsets of $\mathbb{C}$. 


<div class="academic-env env-example">
<span class="env-label">Example 2.5</span>

Consider the function, $f:\mathbb{C} \setminus \{0\} \to \mathbb{C}$ defined as $f(z) = \frac{1}{z}$.  Then, $f(x+iy) = \frac{x}{x^2 + y^2} + i \frac{-y}{x^2 + y^2}$.  Clearly, the function is differentiable when treated as a function $F:\mathbb{R}^2 \to \mathbb{R}^2$.  Moreover,
$$\frac{\partial u}{\partial x} = \frac{y^2 - x^2}{(x^2 + y^2)} = \frac{\partial v}{\partial y}$$
and
$$\frac{\partial u}{\partial y} = \frac{-2xy}{(x^2+y^2)^2} = -\frac{\partial v}{\partial x}$$

</div>


More generally, 


<div class="academic-env env-example">
<span class="env-label">Example 2.6</span>

Let $p(z)$ and $q(z)$ be two polynomials and $Z(q)$ be the zero set of $q$.  Then the function $f:\mathbb{C} \setminus Z(q)\to \mathbb{C}$ defined as $f(z) = \frac{p(z)}{q(z)}$ satisfies the Cauchy-Riemann equations.  The proof of this fact is again a consequence of the results in the next section.

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.3 Holomorphicity</summary>



Recall that the major difficulty while moving from differentiation of functions $f:\mathbb{R} \to \mathbb{R}$ to differentiation of functions $f:\mathbb{R}^2 \to \mathbb{R}^2$ was the lack of multiplication/division in $\mathbb{R}^2$.  However, this is not the case when it comes to $\mathbb{C}$.  Thus, we could bypass the route through $\mathbb{R}^2$ and directly define differentiation of functions $f:\mathbb{C} \to \mathbb{C}$ verbatim the same as that for functions $f:\mathbb{R} \to \mathbb{R}$.  More precisely, we can say a function $f:\mathbb{C} \to \mathbb{C}$ is differentiable at a point $z_0$ if the limit
$$\lim_{h\to 0} \frac{f(z_0 + h) - f(z_0)}{h}$$
exists.  Moreover, the limit is called the derivative of the function at $z_0$ and will be denoted as $f'(z_0)$.  Notice however that we are implicity assuming that $f(z_0 + h)$ is defined for all $h$, because otherwise the term inside the limit will not make sense.  However, as we are taking the limit as $h$ tends to $0$ it is enough that $f(z_0+h)$ makes sense for all small values of $h$.  In other words, the domain of the function should be open.  From now on we will assume the domain of our function is open even when we do not state it explicitly.  With this clarity, let us define


<div class="academic-env env-definition">
<span class="env-label">Definition 2.1</span>

Let $U$ be an open set.  A function $f:U \to \mathbb{C}$ is said to be complex-differentiable at a point $z_0\in U$ if
$$\lim_{h\to 0}\frac{f(z_0 + h) - f(z_0)}{h}$$
exist.  Moreover, when the function is complex-differentiable at $z_0$, the above limit is called the derivative of $f$ at $z_0$ and is represented as $f'(z_0)$.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 2.2</span>

Let $U$ be an open set.  A function $f:U \to \mathbb{C}$ is said to be complex-differentiable on $U$ iff $f$ is complex-differentiable at all points in $U$.

</div>


Unless there is a chance for confusion, we are going to use differentiable to mean complex-differentiable whenever we talk about a function $f:\mathbb{C}\to \mathbb{C}$.  


<div class="academic-env env-example">
<span class="env-label">Example 2.7</span>

The function $f:\mathbb{C} \to \mathbb{C}$ defined as $f(z) = c$ for some complex number $c$ is differentiable and its derivative is $0$ everywhere.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.8</span>

The function $f:\mathbb{C} \to \mathbb{C}$ defined as $f(z) = z^n$ is differentiable and its derivative $f'(z) = nz^{n-1}$.  
$$
\begin{align*}
        \lim_{h\to 0}\frac{1}{h}\left[(z+h)^n - z^n\right] &= \lim_{h\to 0} \frac{1}{h} \left[ \left(\sum_{k=0}^{n} {n\choose k} z^k h^{n-k}\right) - z^n \right] \\
        &= \lim_{h\to 0} \frac{1}{h} \left(\sum_{k=0}^{n-1} {n\choose k} z^k h^{n-k}\right)  \\
        &= \lim_{h\to 0} \left(\sum_{k=0}^{n-1} \frac{1}{h} {n\choose k} z^k h^{n-k}\right)  \\
        &= \sum_{k=0}^{n-1} \left( \lim_{h\to 0} \frac{1}{h} {n\choose k} z^k h^{n-k}\right)\\
        &= \sum_{k=0}^{n-1}\left( \lim_{h\to 0} {n\choose k} z^k h^{n-k-1}\right)\\
    \end{align*}
$$

Now, 
$$\lim_{h\to 0} {n\choose k} z^k h^{n-k-1}$$
is non-zero iff $n-k-1 = 0$ iff $k = n-1$ and then ${n\choose k} = n$.  Thus, we have the desired result.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.9</span>

The function $f(z) = \overline{z}$ is not differentiable.
$$
\begin{align*}
        \lim_{h\to 0} \frac{\overline{z+h} - \overline{z}}{h} = \lim_{h\to 0} \frac{\overline{h}}{h}
    \end{align*}
$$
If $h_n = i/n$ then $\overline{h_n}/h_n$ tends to $-1$.  On the other hand, if $h = 1/n$, then $\overline{h_n}/h_n$ tends to $1$.  Thus, the above limit cannot exist.

</div>



Now, we can prove several theorems analogous to the results we have proved in real analysis.


<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.3</span>

If $f$ and $g$ are differentiable at a point $z$, then $f+g$ is also differentiable at $z$ and $(f+g)'(z) = f'(z) + g'(z)$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As,
$$\lim_{h\to 0}\frac{f(z+h) - f(z)}{h} \text{ and } \lim_{h\to 0}\frac{g(z+h) - g(z)}{h}$$
exists, by the algebra of limits we know 
$$
\begin{align*}
        f'(z) + g'(z) &= \lim_{h\to 0}\frac{f(z+h) - f(z)}{h} + \lim_{h\to 0}\frac{g(z+h) - g(z)}{h}\\
        &= \lim_{h\to 0}\frac{f(z+h) - f(z) + g(z+h) - g(z)}{h}\\
        &= \lim_{h\to 0}\frac{f(z+h) + g(z+h) - f(z) - g(z)}{h}\\
        &= \lim_{h\to 0}\frac{f+g(z+h) -f+g(z)}{h}\\
        &= (f+g)'(z)
    \end{align*}
$$

</details>
</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.1</span>

Show that if $f$ is differentiable at $z$, then $cf$ is also differentiable at $z$ and $(cf)'(z) = cf'(z)$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.4</span>

If $f$ and $g$ are differentiable at a point $z$, then $fg$ is also differentiable at $z$ and $(fg)'(z) = f'(z)g(z) + f(z)g'(z)$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Notice that,
$$
\begin{align*}
        \frac{fg(z+h) - fg(z)}{h} &= \frac{f(z+h)g(z+h) - f(z)g(z)}{h}\\
        &= \frac{f(z+h)g(z+h) - f(z+h)g(z) + f(z+h)g(z) - f(z)g(z)}{h}\\
        &= \frac{f(z+h)g(z+h) - f(z+h)g(z)}{h} + \frac{f(z+h)g(z) - f(z)g(z)}{h}\\
        &= f(z+h)\frac{g(z+h) - g(z)}{h} + \frac{f(z+h) - f(z)}{h}g(z)
    \end{align*}
$$
Now, algebra of limits will fetch us the result.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.5</span>

If $g$ is differentiable at a point $z$ and $g(z)\neq 0$, then $1/g$ is differentiable at $z$ and $(1/g)'(z) = -g'(z)/g(z)^2$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Notice that,
$$
\begin{align*}
        \frac{\frac{1}{g}(z+h) - \frac{1}{g}(z)}{h} &= \frac{\frac{1}{g(z+h)}- \frac{1}{g(z)}}{h}\\
        &= \frac{g(z) - g(z+h)}{hg(z+h)g(z)}\\
        &= \frac{g(z) - g(z+h)}{h} . \frac{1}{g(z+h)g(z)}
    \end{align*}
$$
Now, algebra of limits will fetch us the result.

</details>
</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.2</span>

Show that if $f$ and $g$ are differentiable at $z$ and $g(z)\neq 0$, then $f/g$ is differentiable and
$$\left(\frac{f}{g}\right)'(z) = \frac{f'(z)g(z) - f(z)g'(z)}{g(z)^2}.$$

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.6</span>

If $f$ is differentiable at $z$ and $g$ is differentiable at $f(z) = w$. then $g\circ f$ is differentiable at $z$ and $(g\circ f)'(z) = g'(f(z))f'(z)$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Notice,
$$
\begin{align*}
        \frac{g\circ f(z+h) - g\circ f(z)}{h} &= \frac{g(f(z+h)) - g(f(z))}{h}\\
        &= \frac{g(f(z+h)) - g(f(z))}{h} . \frac{f(z+h)-f(z)}{f(z+h)-f(z)}\\
        &= \frac{g(f(z+h)) - g(f(z))}{f(z+h)-f(z)} . \frac{f(z+h)-f(z)}{h}\\
    \end{align*}
$$
Now, algebra of limits will fetch us the result.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.7</span>

Let $U$ be an open set and $f:U\to \mathbb{C}$ a function that is complex-differentiable at $z_0$.  Then, $f$ is continuous at the point $z_0$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $f$ is differentiable at $z_0$, the following limit exists
$$\lim_{h\to 0}\frac{f(z_0+h) - f(z_0)}{h}.$$
We also know that $$\lim_{h\to 0} h = 0.$$ 
Thus, by algebra of limits
$$\lim_{h=0} f(z_0 + h) - f(z_0) = \lim{h\to 0}\frac{f(z_0+h) - f(z_0)}{h} \lim_{h\to 0} h = f'(z_0).0 = 0.$$

</details>
</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.4 Holomorphicity and Cauchy-Riemann equations</summary>



Throughout the rest of this chapter, let $U$ be an open subset of $\mathbb{C}$ - by abuse of notion, we will also consider this a subset of $\mathbb{R}^2$.  


<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.8</span>

If $f:U\to \mathbb{C}$ is complex-differentiable function, then $f$ satisfies the Cauchy-Riemann equations.  That is, if $f(x+i y) = u(x,y) + i v(x,y)$ where $u,v:\mathbb{R}^2 \to \mathbb{R}$, then 
$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \text{ and } \frac{\partial u}{\partial y} = - \frac{\partial v}{\partial x}.$$


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

The basic idea is to compare the limit as $h$ tends to $0$ along the real and imaginary axes.  First, we will approach $0$ along the real axis, that is, assume that $h = h + i 0$, then
$$
\begin{align*}
        \frac{f(z+h) - f(z)}{h} &= \frac{u(x+h,y) + i v(x+h,y) - u(x,y) - i v(x,y)}{h}\\
        &= \frac{u(x+h,y) - u(x,y)}{h} + i . \frac{v(x+h,y) - v(x,y)}{h}
    \end{align*}
$$

Now, we approach $0$ along the imaginary axis, that is, take $h = 0 + i h$,
$$
\begin{align*}
        \frac{f(z+h) - f(z)}{i h} &= \frac{u(x,y+h) + i v(x,y+h) - u(x,y) - i v(x,y)}{i h}\\
        &= \frac{u(x,y+h) - u(x,y)}{i h} + i . \frac{v(x,y+h) - v(x,y)}{i h}\\
        &= \frac{v(x,y+h) - v(x,y)}{h} - i . \frac{u(x,y+h) - u(x,y)}{h}
    \end{align*}
$$
As $f$ is differentiable, the limit as $h$ tends to $0$ in each of the above situations would be equal to $f'(z)$.  Thus, 
$$\frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = f'(z) = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}.$$

</details>
</div>


Or alternatively,


<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.9</span>

Let $U$ be an open set and $f:U\to \mathbb{C}$ be a function.  We can write $f$ as $F(x+i y) = u(x,y) + i v(x,y)$ where $u,v:\mathbb{R}^2 \to \mathbb{R}$.  Define $F:\mathbb{R}^2 \to \mathbb{R}^2$ as $F(x,y) = (u(x,y),v(x,y))$.  If $f$ is complex differentiable at $z_0 = x_0 + i y_0$ then $F:\mathbb{R}^2 \to \mathbb{R}^2$ is differentiable at $(x_0,y_0)$ and satisfies the Cauchy-Riemann equations.  More precisely, if $f'(z_0) = a + i b$, then $$DF_{(x_0,y_0)} = \begin{bmatrix}
        a & -b\\
        b & a
    \end{bmatrix}.$$    


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Assume $f$ is differentiable at $z_0$.  Then,
$$
\begin{align*}
       f'(z_0) = \lim_{h\to 0}\frac{f(z_0+h) - f(z_0)}{h} &\implies \lim_{h\to 0} \frac{f(z_0+h) - f(z_0) - hf'(z_0)}{h}=0\\
       &\implies \lim_{h\to 0} \left\Vert \frac{f(z_0+h) - f(z_0) - hf'(z_0)}{h} \right\Vert = 0\\
        &\implies \lim_{h\to 0} \frac{\left\Vert f(z_0+h) - f(z_0) - hf'(z_0)\right\Vert}{\left\Vert h\right\Vert} = 0\\
        &\implies \lim_{h\to 0} \frac{\left\Vert f(z+h) - f(z_0) - (h_1 + i h_2)(a+i b)\right\Vert}{\left\Vert h\right\Vert} = 0\\
        &\implies \lim_{h\to 0} \frac{\left\Vert f(z+h) - f(z_0) - (h_1 a - h_2b) +i (h_1b + h_2a) \right\Vert}{\left\Vert h\right\Vert} = 0\\
        &\implies \lim_{h\to (0,0)} \frac{\left\Vert F((x_0,y_0) + (h_1,h_2)) - F(x,y) - \begin{bmatrix}
        a & -b\\
        b & a
    \end{bmatrix} \begin{bmatrix}
        h_1\\
        h_2
    \end{bmatrix}\right\Vert}{\Vert h\Vert} = 0
    \end{align*}
$$
This implies that $F$ is differentiable at $(x_0,y_0)$ with the derivative $$DF_{(x_0,y_0)} = \begin{bmatrix}
        a & -b\\
        b & a
    \end{bmatrix}.$$

</details>
</div>




<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.10</span>

Let $U$ be an open set and $f:U\to \mathbb{C}$ be a function.  We can write $f$ as $f(x+i y) = u(x,y) + i v(x,y)$ where $u,v:\mathbb{R}^2 \to \mathbb{R}$.  Define $F:\mathbb{R}^2 \to \mathbb{R}^2$ as $F(x,y) = (u(x,y),v(x,y))$.  If $F$ is differentiable at $(x_0, y_0)$ and satisfies the Cauchy-Riemann equations, then $f$ is complex differentiable at $z_0 = x_0+i y_0$.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $F$ satisfies the Cauchy-Reimann equations at $(x_0,y_0)$, the derivative at $(x_0,y_0)$ will be of the form 
$$DF_{(x_0,y_0)} = \begin{bmatrix}
        a & -b\\
        b & a
    \end{bmatrix}.$$  
We will prove that $f$ is differentiable at $z_0$ and has the derivative $f'(z_0) = a+ i b$. As, $F$ is differentiable,  
$$
\begin{align*}
        \lim_{h\to (0,0)} \frac{\left\Vert F((x_0,y_0) + (h_1,h_2)) - F(x,y) - \begin{bmatrix}
        a & -b\\
        b & a
    \end{bmatrix} \begin{bmatrix}
        h_1\\
        h_2
    \end{bmatrix}\right\Vert}{\Vert h\Vert} = 0 
    \end{align*}
$$
But, this is possible iff,
$$
\begin{align*}
        \lim_{h\to 0} \frac{\left\Vert f(z_0 +h) - f(z_0) - (h_1 a - h_2b) +i (h_1b + h_2a) \right\Vert}{\left\Vert h\right\Vert} = 0 &\implies \lim_{h\to 0} \frac{\left\Vert f(z_0+h) - f(z_0) - h(a+i b) \right\Vert}{\left\Vert h\right\Vert} = 0\\
        &\implies \lim_{h\to 0} \left\Vert\frac{f(z_0+h) - f(z_0) - h(a+i b)}{h}\right\Vert = 0\\
        &\implies \lim_{h\to 0} \frac{f(z_0+h) - f(z_0) - h(a+i b)}{h} = 0\\
        &\implies \lim_{h\to 0} \frac{f(z_0+h) - f(z_0)}{h} = (a+i b)
    \end{align*}
$$
Which implies can happen only if $f$ is differentiable at $z_0$ and the derivative $f'(z_0) = a+i b$.

</details>
</div>



<div class="academic-env env-remark">
<span class="env-label">Remark 2.1</span>

The proofs of Theorem **2.9** and Theorem **2.10** illustrate the relation between the complex derivative and the total derivative of the corresponding function.  On the other hand, Theorem **2.8** helps us understand that if the partial derivatives are continuous, then so is $f'$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 2.10</span>

The function $f(z) = \begin{cases} 0 & \text{ if } z=0\\ e^{-1/z^4} & \text{otherwise} \end{cases}$ obeys the Cauchy-Riemann equations everywhere, but is not continuous at $0$ and hence not complex-differentiable at $0$.

</div>



<div class="academic-env env-remark">
<span class="env-label">Remark 2.2</span>

The \href{https://en.wikipedia.org/wiki/Looman–Menchoff_theorem}{Looman Menchoff theorem} states that the only deviation from complex differentiablity is of the type described above, namely, where the function fails to be continuaous.  More precisely, If $f:U\to \mathbb{C}$ is continuous and satisfies the Cauchy-Riemann equations, then it is necessarily complex differentiable on $U$.  However, the proof of that theorem is beyond the scope of this course.

</div>


In practice, it is difficult to check whether $F:U\subset \mathbb{R}^2 \to \mathbb{R}^2$ is differentiable or $f:U\subset \mathbb{C} \to \mathbb{C}$ is complex differentiable.  On the other hand, finding partial derivatives is easy.  However, as seen in the example above, existence of partial derivatives does not guarantee continuity, let alone differentiability.  However, 


<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.11</span>

Let $F:U\to \mathbb{R}^2$ be such that the partial derivatives of $F$ exists everywhere on $U$ and is continuous.  Then, $F$ is differentiable on $U$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

If we write $F(x,y) = (u(x,y),v(x,y))$, then the function $F$ is differentiable on $U$ iff $u:U\to \mathbb{R}$ and $v:U\to \mathbb{R}$ are both differentiable.  We will prove that $u$ is differentiable and leave the other proof as an exercise.  The main idea in the proof is a clever use of the mean value theorem.  Also as the partial derivatives are continuous, we can choose some $\delta$ such that if $|x'| < \delta$ and $y'<\delta$ then, 
$$
\begin{align}
        \left\Vert \frac{\partial u}{\partial x} (x+x',y+y') - \frac{\partial u}{\partial x}(x,y) \right\Vert  < \frac{\varepsilon}{2}
        \label{bounds1}
    \end{align}
$$
and
$$
\begin{align}
        \left\Vert\frac{\partial u}{\partial y} (x+x',y+y') - \frac{\partial u}{\partial y}(x,y) \right\Vert < \frac{\varepsilon}{2}.
        \label{bounds2}
    \end{align}
$$
Choose $h_i$ such that $\vert h_i \vert < \delta$.  Then, observe that,
$$
\begin{align*}
        u(x+h_1, y+h_2) - u(x,y) &= u(x+h_1,y+h_2) - u(x,y+h_2) + u(x,y+h_2) - u(x,y)\\
    \end{align*}
$$
Applying mean value theorem to the continuously differentiable functions

- $f_1:[0,1]\to \mathbb{R}$ defined as $f_1(h) = u(x+\lambda h_1,y+h_2)$
- $f_2:[0,1]\to \mathbb{R}$ defined as $f_2(h) = u(x+h_1,y+\lambda h_2)$

we can find numbers $\lambda_i \in [0,1]$ such that 
$$u(x+h_1,y+h_2) - u(x,y+h_2) = h_1\frac{\partial u}{\partial x} (x+\lambda_1h_1,y+h_2)$$
and 
$$u(x,y+h_2) - u(x,y) = h_2 \frac{\partial u}{\partial y} (x+h_1,y+\lambda_2 h_2).$$
That is, 
$$
\begin{align*}
        u(x+h_1, y+h_2) - u(x,y) &= u(x+h_1,y+h+2) - u(x,y+h_2) + u(x,y+h_2) - u(x,y)\\
        &= h_1\frac{\partial u}{\partial x} (x+\lambda_1h_1,y+h_2) + h_2 \frac{\partial u}{\partial y} (x+h_1,y+\lambda_2 h_2)\\
    \end{align*}
$$
Thus, the expression
$$\left\Vert u(x+h_1, y+h_2) - u(x,y) - \left(\frac{\partial u}{\partial x}(x,y),\frac{\partial u}{\partial y}(x,y)\right)\cdot(h_1,h_2)\right\Vert$$
can be simplified as 
$$\left\Vert h_1\left[\frac{\partial u}{\partial x} (x+\lambda_1h_1,y+h_2) - \frac{\partial u}{\partial x}(x,y) \right] + h_2 \left[\frac{\partial u}{\partial y} (x+h_1,y+\lambda_2 h_2) - \frac{\partial u}{\partial y}(x,y) \right]\right\Vert.$$
By, triangle inequality, the above expression evaluates to a value less than or equal to
$$\left\vert h_1\right\vert \left\Vert \frac{\partial u}{\partial x} (x+\lambda_1h_1,y+h_2) - \frac{\partial u}{\partial x}(x,y) \right\Vert + \left\vert h_2\right\vert \left\Vert\frac{\partial u}{\partial y} (x+h_1,y+\lambda_2 h_2) - \frac{\partial u}{\partial y}(x,y) \right\Vert.$$
From Equation **2.1** and Equation **2.2**, the above value is less than or equalt to 
$$
\begin{align*}
        \frac{\varepsilon}{2}\vert h_1\vert + \frac{\varepsilon}{2}\vert h_2\vert &\leq \frac{\varepsilon}{2}\Vert(h_1,h_2)\Vert + \frac{\varepsilon}{2}\Vert(h_1,h_2)\Vert \leq \Vert h\Vert \varepsilon  
    \end{align*}
$$ 
Thus, if $\Vert h \Vert<\delta$, then $\vert h_i\vert<\delta$ and hence
$$\left\Vert u(x+h_1, y+h_2) - u(x,y) - \left(\frac{\partial u}{\partial x}(x,y),\frac{\partial u}{\partial y}(x,y)\right)\cdot(h_1,h_2)\right\Vert\leq \Vert h\Vert \varepsilon.$$
Thus, 
$$ \frac{\left\Vert u(x+h_1, y+h_2) - u(x,y) - \left(\frac{\partial u}{\partial x}(x,y),\frac{\partial u}{\partial y}(x,y)\right)\cdot(h_1,h_2)\right\Vert}{\Vert h\Vert}\leq \varepsilon.$$

</details>
</div>


From the proof of Theorem **2.8** it is clear that if the partial derivatives are continuous, so is $f'$.  Thus, from now on, we will assume that our function is continuously differentiable on its domain. 



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.5 Domains</summary>



We will now try to prove the analogue of another important theorem.  Recall that if we have a function $f:(a,b)\to \mathbb{R}$ such that $f'(x) = 0$ for all $x\in (a,b)$, then $f$ is a constant.  We would like to know for what open subsets $U$ of $\mathbb{C}$ do we have an analogous result for functions $f: U\to \mathbb{C}$.  Of course, openness is not enough, as illustrated by the function $f:(0,1)\cup (2,3)\to \mathbb{R}$ defined as $f(x) = 0$ if $x\in (0,1)$ and $f(x) = 1$ if $x\in (2,3)$.  Clearly, the issue in the above example is that the domain is ``broken" or not connected.  This notion can be made precise.  


<div class="academic-env env-definition">
<span class="env-label">Definition 2.3</span>

We say $P\subset \mathbb{C}$ is path-connected, if given any two points $p$ and $q$ there exists a continuous curve $\gamma:[a,b]\to \mathbb{C}$ such that $\gamma([a,b])\subset P$ and $\gamma(a) = p$ and $\gamma(b) =q$.

</div>


Although in the definition we are only assuming that any two points can be connected using a continuous curve, actually we can do much better.  We can show that we can connect any two points in an open path-connected set with a piecewise smooth curve.


<div class="academic-env env-definition">
<span class="env-label">Definition 2.4</span>

A continuous curve $\gamma:[a,b]\to \mathbb{R}^2$ is said to be piecewise smooth if there exists $a=t_0<t_1<\dots<t_n = b$ such that $\gamma|_[t_i,t_{i+1}]$ is smooth.

</div>


We can in fact also prove that we can smoothen the finitely many corners and show that any two points in an open path-connected set can be connected by smooth curves.  But, that is a bit too technical for our course.  To prove even the weaker result, we need a bit of machinery which will be introduced now.  


<div class="academic-env env-definition">
<span class="env-label">Definition 2.5</span>

Let $D\subset \mathbb{R}^n$ and $X\subset D$.  We say $X$ is an open subset of $D$ if given any $x\in X$, there exists an $\varepsilon$ such that $B(x,\varepsilon)\cap D\subset X$.  A subset $X$ is said to be a closed subset of $D$ if its complement is an open subset of $D$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.3</span>

Show that the only subsets of $[a,b]$ that are both open and closed are the $\emptyset$ and $[a,b]$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.4</span>

Show that the only subsets of $[0,1]\cup [2,3]$ that are both open and closed are $\emptyset$, $[0,1]$, $[2,3]$, and $[0,1]\cup [2,3]$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.12</span>

Let $P$ be a path-connected space.  Then, the only subsets of $P$ that are both open and closed are $\emptyset$ and $P$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We will use proof by contradiction.  Assume there is a proper non-empty subset $X$ of $P$ that is both a closed and open subset of $P$.  Then its complement $Y = P\setminus X$ is also proper, non-empty, both open and closed.  Consider a curve $\gamma:[a,b]\to P$ that connects a point $x\in X$ and a point $y\in Y$.  As $X$ is a non-empty open set, $A:= \gamma^{-1}(X)$ is a non-empty open subset of $[a,b]$ (the $\varepsilon$-$\delta$ definition implies that the inverse image of open sets under a continuous function is open).  Similarly, as $Y$ is a non-empty open set $B:=\gamma^{-1}(Y)$ is a non-empty open subset of $[a,b]$.  But, $[a,b] = \gamma^{-1}(P) = \gamma^{-1}(X)\cup \gamma^{-1}(Y) = A \cup B$.  As $X$ and $Y$ are disjoint, their inverses $A$ and $B$ also must be disjoint.  Thus, $B = [a,b]\setminus A$ and as $B$ is an open subset of $[a,b]$ $A$ is a closed subset of $[a,b]$.  Which makes $A$ non-empty, proper subset of $[a,b]$ that is both an open and closed subset of $[a,b]$ contradicting what you proved in an earlier exercise.

</details>
</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 2.5</span>

Let $P$ be some subset of $\mathbb{R}^2$.  Let $\sim$ be defined as $x\sim y$ if there is a piecewise smooth curve connecting $x$ and $y$.  Show that $\sim$ is an equivalence relation.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.13</span>

Let $D\subset \mathbb{R}^2$ be open and path-conneceted.  Fix an arbitrary point $p\in D$ and define $X:= \{q\in D : q\sim p\}$.  Then, $X=D$.  Intuitively, this should be read as any two points in a domain set can be connected by a piecewise smooth curve.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We will show that $X$ is both an open and closed subset of $P$ and hence $X = D$.  Let $x\in X$, then notice that there is some $\varepsilon$ such that $B(x,\varepsilon)\subset D$.  Clearly, every point in $B(x,\varepsilon)$ can be connected to $x$ by a straight line.  That is if $y\in B(x,\varepsilon)$, then $y\sim x$.  But, we know $x\sim p$.  Therefore, by transitivity of $\sim$, $y\sim p$ and hence $y\in X$.  Thus, $B(x,\varepsilon)\subset X$ and as $x\in X$ was arbitrary $X$ is open.  We will now show that $Y =D\setminus X$ is also open.  Let $y\in Y$ be arbitrary.  As $D$ is open, there exists an $\varepsilon$ such that $B(y,\varepsilon)\subset D$.  As before if $z\in B(y,\varepsilon)$, then $y\sim z$.  If $z\sim p$, then transitivity of $\sim$ implies $y\sim p$, thus, $z\not\sim p$.  Which means $Y$ is open and hence $X$ is both open and closed.  Therefore $X = \emptyset$ or $X = D$.  $X\neq \emptyset$ as $p\in X$.  Hence proved.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.14</span>

Let $D$ be open and path-connected and $f:D\to \mathbb{C}$ be differentiable on $D$.  If $f$ is differentiable and $f'(z) = 0$ for all $z\in D$, then $f$ is a constant.  


</div>



<div class="academic-env env-remark">
<span class="env-label">Remark 2.3</span>

The proof of this theorem is an application of the following theorem you might have learnt in multi-variable calculus to the two functions $u$ and $v$ where $f = u+\iota v$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.15</span>

Let $D$ be an open path-connected subset of $\mathbb{R}^2$.  Let $f:D\to \mathbb{R}$ be a continuously differentiable function such that $\nabla f = 0$ on $D$  Then, $f$ is a constant.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We will use proof by contradiction.  Assume, the function $f$ is not constant.  Thus, there would at least exist two points $(x_0,y_0)$ and $(x_1,y_1)$ in $D$ such that $f(x_0,y_0)\neq f(x_1,y_1)$.  As $D$ is open and path-connected, we can connect the two points using a piecewise smooth curve $\gamma:[0,1]\to \mathbb{R}^2$.  More precisely, $\gamma(0) = (x_0,y_0)$, $\gamma(1) = (x_1,y_1)$, and $\gamma([0,1])\subset D$.  The function $\phi = f\circ \gamma$ is differentiable on each of the intervals $[t_i,t_{i+1}]$ and by chain rule its derivative is identically $0$ in the interval.  Thus, we know that $\phi$ is a constant on the interval $[t_i,t_{i+1}]$ from the familiar result in the one-variable case.  Thus, $f(x_0,y_0) = \phi(t_0) = \phi(t_1) = \dots = \phi(t_n) = f(x_1,y_1)$.  Which contradicts our assumption that $f(x_0,y_0)\neq f(x_1,y_1)$.

</details>
</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Proof of Theorem **2.14**)</summary>

Let $f = u+\iota v$. If $f'(z) = 0$, then $$\frac{\partial u}{\partial x} = 0 = \frac{\partial u}{\partial y} \text{ and } \frac{\partial v}{\partial x} = 0 = \frac{\partial v}{\partial y}.$$
Thus, applying the previous theorem to $u$ and $v$, we know $u$ and $v$ are constant.  Thus, $f$ is also constant.

</details>
</div>


As we want like to conclude the function is constant if its derivative is $0$, we will assume that the domains of our functions are both open and path-connected.  Thus, being not creative at all, we define

<div class="academic-env env-definition">
<span class="env-label">Definition 2.6</span>

We say $D\subset \mathbb{C}$ is called a domain if it is both open and connected.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 2.16</span>

Let $D$ be a domain and $f:D\to \mathbb{C}$ be differentiable.  If $f$ is real valued, then $f$ is constant.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $f = u+\iota v$.  We see $v$ is identically zero.  From the Cauchy-Riemann equations, we have
$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} = 0 \text{ and } \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial y} = 0.$$
Thus, $u$ is a constant.

</details>
</div>





\begin{xcb}{Exercises}

- Which of the following functions $f:\mathbb{C} \to \mathbb{C}$ are complex differentiable.  Which of them are differentiable when treated as a function from from $\mathbb{R}^2$ to $\mathbb{R}^2$?  Which of them are induced by a polynomial in $z$? Justify your claims.
\begin{multicols}{2}
[(i)]
- $f(z) = \vert z\vert$
- $f(z) = (x^2 + y^2) - i(2xy)$
- $f(x+iy) = (x^3 - 3xy^2) + i(3x^2y-y^3)$
- $f(x+iy) = 2xy - i(x^2-y^2)$

\end{multicols}

- Without appealing to their holomorphicity, show directly that every polynomial satisfies Cauchy-Riemann equations.  

- Show that the function $f(x+\iota y) = \sqrt{\vert xy\vert}$
satisfies the Cauchy Riemann equations at $z=0$, but is not differentiable at $0$.

**Remark: ** This does not contradict the Looman Menchoff theorem as although the partial derivatives are defined at $0$, you cannot find a neigbourhod of $0$ where the partial derivatives are well-defined!

- Show that $F:C\to \mathbb{C}$ is a complex-linear map iff the corresponding map $f:\mathbb{R}^2 \to \mathbb{R}^2$ satisfies the following properties:

- the matrix $M_f$ of $f$ has positive determinant.
- $f(1,0)$ is orthogonal to $f(0,1)$
- $\Vert f(1,0)\Vert = \Vert f(0,1)\Vert$


- Show that a linear map $f:\mathbb{R}^2 \to \mathbb{R}^2$ preserve inner product, that is $\langle f(v),f(w)\rangle = \langle v,w\rangle$, iff

- $f(1,0)$ is orthogonal to $f(0,1)$
- $\Vert f(1,0)\Vert = \Vert f(0,1)\Vert$


- Let $D$ be an open subset of $\mathbb{R}^2$ and $f:D \to \mathbb{R}^2$ be a differentiable map  that satisfies the Cauchy-Riemann equations.  Then, given any two curves $\alpha:[0,1]\to D$ and $\beta:[0,1]\to D$, $\langle \alpha'(t),\beta'(t)\rangle = \langle (f\circ \alpha)'(t),(f\circ \beta)'(t)\rangle$.  Intuitively it is saying that the map ``preserves angles".  **Such maps are called conformal maps and was the main focus of Riemann.**  

- Show that every rational function $f(z) = \frac{p(z)}{q(z)}$ is holomorphic on $\mathbb{C} \setminus Z(q)$ where $Z(q)$ represents the zero set of $q$.  Thus, $f$ satisfies the Cauchy-Riemann equations and is a conformal map on $\mathbb{C} \setminus Z(q)$.  


- Show that $\mathbb{Q}$ is disconnected.  

- Let $X=\{(x,y):x^2 + y^2 \leq 1\}\cup \{(x,0):x\in [1,2]\}\cup \{(x,y):(x-3)^2 + y^2 \leq 1\}$.  Show that $X$ is path connected

- Let $f:(X,d)\to (Y,D)$ be a continuous function.  Prove that if $X$ is connected, then $f(X)$ is also connected.  Prove that if $X$ is path-connected, then $f(X)$ is also path-connected.  

- Show that if $U$ is an open connected subset of $\mathbb{C}$, then $U$ is path connected.

- Let $f:[a,b]\to \mathbb{R}$ be a function.  Show that if the graph of $f$ is connected then $f$ satisfies the intermediate value property.  

- Let $f:\mathbb{R} \to \mathbb{R}$ be the function 
$$f(x) = \begin{cases}
        \sin(\frac{1}{x}) & \text{if } x\neq 0\\
        0 & \text{otherwise}
    \end{cases}.$$
Show that the graph of $f$ is connected, but not path connected.  **This gives us an example of a connected space that is not path-connected.**

%**Hint 1: ** To prove the graph is not path-connected use a proof by contradiction.  Assume there exists a path $\gamma:[0,1]\to Graph(f)$ where $\gamma(t) = (\gamma_1(t),\gamma_2(t))$ connecting $(0,0)$ and $(a,sin(1/a))$ for some $a>0$.  Chose an $\delta > 0$ such that $\vert \gamma_2(t) \vert < \varepsilon$ is $t < \delta$.

%**Hint 2: ** To prove the graph is connected again use a proof by contradiction.  That is, let there be a non-empty proper subset of $Graph(f)$ that is both open and closed.  Without loss of generality, we may assume that $(0,0)\in U$ (Why?).  Show that if $(0,0)$ belongs to $U$, then there exists $a>0$ and $b<0$ such that $(a,\sin(\frac{1}{a}))$ and $(b,\sin(\frac{1}{b}))$ belong to $U$.  Use this to prove $U = Graph(f)$. 

- Let $D$ be a domain.  Show that if $f:D\to \mathbb{C}$ and $\overline{f}:D\to \mathbb{C}$ are both differentiable, then $f$ is a constant function.  

- Let $D$ be a domain.  Show that if $f:D\to \mathbb{C}$ is differentiable and $\vert f \vert$ is constant, then $f$ is a constant function.  

- Let $D$ be a domain and $f:D \to \mathbb{C}$ be continuously differentiable.  Use the inverse function theorem from multi-variable calculus to prove that given any point $z_0\in D$, there exists a neighbourhood $B(z_0,\varepsilon)$ such that $f|_{B(z_0,\varepsilon)}$ is invertible.






\end{xcb}



</details>