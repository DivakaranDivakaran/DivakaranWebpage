# Generating Functions

Suppose you are going to choose a snack of between zero and three apples, between zero and three mangoes, and between zero and three bananas.  Further suppose that you can take a total of $3$ fruits.  In how many ways can you do this?  To represent the options succinctly, we will write the option of taking 2 mangoes and one banana as $M^2B$, the option of taking one apple one mango and one banana as $AMB$.  Notice that we are using a multiplicative notation to represent *and*.  We will also use an additive notation to represent *or*.  So, to represent we may choose 2 mangoes and a banana or one apple, one mango and one banana we will write $M^2B + AMB$.  The fact that we are only interested in the number of each fruit taken will be a consequence of usual properties like commutativity and associativity.  For instance, $AMB = ABM$.  Hence, the collection of all options can be represented as

$$A^3 + A^2B + A^2M + ABM + AB^2 + AM^2 + B^2M + B M^2 + B^3 + M^3$$

We further notice that this is the collection of all degree 3 terms in 

$$(1+A+A^2+A^3)(1+B+B^2+B^3)(1+M+M^2+M^3)$$

If we were not interested in the actual choices, but were only interested in the number of choices, then we are looking at the coefficient of $x^3$ in 

$$(1+x+x^2+x^3)(1+x+x^3+x^3)(1+x+x^2+x^3).$$

In case you have forgotten, let me remind you that 

$$\left(\sum_{i=0}^ma_ix^i\right)\left(\sum_{j=0}^n b_ix^i\right) = \sum_{k=0}^{m+n}\left(\sum_{i+j=k}a_ib_j\right)x^k.$$

Thus, polynomials give you a clean way to represent combinatorial problems.  The same approach could have been used to solve ``You have $7$ cookies to give to $4$ kids.  In how many ways can you do this?" which we had solved using stars and bars earlier.  The answer to the question would be the coefficient of $x^7$ in $(1+x+x^2+x^3+x^4+x^5+x^6+x^7)^4$.


<div class="academic-env env-example">
<span class="env-label">Example 11.1</span>

We are going to choose a subset of the set $I_n = \{1, 2, . . . , n\}$. Suppose we use $x_1$ to represent choosing $1$ to be in our subset and we use $1$ to represent not choosing $1$.  Similalry, we for each $i$ between $1$ and $n$, we use $x_i$ to represent choosing $i$ to be in our subset and $1$ to represent not choosing $i$.  Then, polynomial associated to choosing all possible subsets is give by 
$$\Pi_{i=1}^n (1+x_i).$$
Once again, if we are not interested in the explicit choice but only in the number of possibilities, we can replace each $x_i$ by $x$.  The number of $k$ element subsets is give by the coefficient of $x^k$ in $(1+x)^k$.  But, we know that the number of $k$ element subsets of $I_n$ is $\binom{n}{k}$.  Thus,
$$(1+x)^k = \sum_{i=0}^n \binom{n}{k}x^i$$
and we have obtained a proof of (a special case of) the binomial theorem.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 11.2</span>

Suppose an apple costs $20$ rupees, a banana costs $10$ rupees, and a mango costs $25$ rupees. Can you construct a polynomial in which the coefficient of $x^n$ is the number of ways to choose a selection of fruit that costs $n$ rupees?

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

Let us first say we have $50$ rupees.  Then, we can buy $5$ bananas or $2$ mangoes or $2$ apples and a banana or $1$ apple and $3$ bananas. As a banana costs rupees $10$ we may represent buying a banana by $x^{10}$ and similarly, we may represent buying an apple and mango by $x^{20}$ and $x^{25}$ respectively.  And the number of ways of buying apples, bananas, and mangoes is given by the coefficient of $50$ in $(1+x^{20} + x^{40})(1+x^{10}+x^{20}+x^{30}+x^{40}+x^{50})(1+x^{25}+x^{50})$.  Now suppose we have $100$ rupees.  Then, the maximum number of apples you can buy is $5$, the maximum number of bananas you can buy is $10$, and the maximum number of mangoes you can buy is $4$.  And we can say that the Number of ways in which you can spend $100$ rupees is the coefficient of $x^{100}$ in $(1+x^{20} + x^{40} + x^{60} + x^{80} + x^{100})(1 + x^{10} + x^{20} + \dots + x^{100})(1+x^{25} + x^{50} + x^{75} + x^{100})$.  Notice that as $n$ increases we need to consider higher and higher degree polynomials.  Thus, a trick is to consider an infinite series instead of a polynomial.  More precisely, for any $n$, the number of ways of spending $n$ rupees by buying apples, bananas, and mangoes is the coefficient of $n$ in
$$\left(\sum_{i=0}^{\infty}x^{10i}\right)\left(\sum_{i=0}^{\infty}x^{20i}\right)\left(\sum_{i=0}^{\infty}x^{25i}\right)$$

</details>
</div>




<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">11.1 Formal Power Series</summary>




<div class="academic-env env-definition">
<span class="env-label">Definition 11.1</span>

A formal power series is an expression of the form $\sum_{n=0}^{\infty}a_n z^n$.  When it does not lead to any ambiguity, we might also write it as $\sum a_n z^n$.

</div>


Let us look at some important examples of power series:


- $\sum z^n$
- $e(z) = \sum \frac{z^n}{n!}$
- $\sin(z) = \sum \frac{(-1)^n}{(2n+1)!}z^{2n+1}$
- $\cos(z) = \sum \frac{(-1)^n}{(2n!)}z^{2n}$
- Let $\alpha$ be a non-zero complex number.  Define the binomial coefficients $$ \binom{\alpha}{n} = \frac{\alpha(\alpha-1)(\alpha-2)\dots(\alpha-n+1)}{n!}$$
and the binomial series $$B_{\alpha}(z) = \sum_{n=0}^{\infty}\binom{\alpha}{n}z^n.$$
Note that, by convention $\binom{\alpha}{n} = 1$.




<div class="academic-env env-remark">
<span class="env-label">Remark 11.1</span>

Of course, we do not associate any meaning or treat the above as functions as of now.  We are giving names only because they remind us of the familiar power series expansion for $\sin$, $\cos$ etc.

</div>



Given two power series $\sum_{n=0}^{\infty} a_n z^n$ and $\sum_{n=0}^{\infty} b_n z^n$, we can add the two as follows:
$$\sum_{n=0}^{\infty} a_n z^n + \sum_{n=0}^{\infty} b_n z^n = \sum_{n=0}^{\infty} (a_n + b_n)z^n.$$

We can also multiply the two power series $\sum_{n=0}^{\infty} a_n z^n$ and $\sum_{n=0}^{\infty} b_n z^n$ as follows
$$\left(\sum_{n=0}^{\infty} a_n z^n\right) \times \left(\sum_{n=0}^{\infty} b_n z^n \right) = \sum_{n=0}^{\infty} \left(\sum_{k=0}^n a_k b_{n-k}\right)z^n.$$

Given a power series $\sum a^n z^n$ and a complex number $\alpha$, we can define the scalar multiplication by $alpha$ as $\alpha.(\sum a^n z^n) = \sum \alpha.a_n z^n$.  This scalar multiplication along with addition defined earlier gives the collection of power series a vector space structure.  Moreover, multiplication behaves well with the vector space structure and makes it an algebra.


<div class="academic-env env-definition">
<span class="env-label">Definition 11.2 (Units)</span>

Elements in a ring that have a multiplicative inverse are called unit.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 11.1</span>

The only units in the ring of polynomials are constant polynomials

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

The easiest way to prove it is by using the degree of a polynomial, we will denote degree of a polynomial $p$ Given two polynomials $p$ and $q$, note that $\deg(pq) = \deg(p)+\deg(q)$.  If $p$ is a non-constant polynomial, then $\deg(p) \geq 1$.  Thus, given any polynomial $q$, $\deg(pq)\geq 1$ and therefore $pq$ cannot be equal to $1$.

</details>
</div>


This proof technique is really central to a lot of mathematics and will also allow us answer the analogous question for the ring of formal power series.  What are the units in the ring of power series.  One may be tempted to think the answer would still be the same.  However, we already know that
$$(1-z)\sum z^n = 1 + (1 - 1)z + (1-1)z^2 + ... = 1.$$
And thus, the power series $1-z$ and $\sum z^n$ are both units.  In fact, this idea can be used to prove an even more general result.  


<div class="academic-env env-definition">
<span class="env-label">Definition 11.3</span>

Given a power series $f = \sum a_n z^n$, the smallest $n$ such that $a_n\neq 0$ is called the order of the power series.  We may denote the order of $f$ as $ord(f)$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 11.2</span>

Any power series $f = \sum a_n z^n$ such that $a_0 = 1$ has a multiplicative inverse.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

The basic idea behind the proof is the observation that
$$(1-z)\sum z^n = 1 + (1 - 1)z + (1-1)z^2 + ... = 1.$$
Notice we may write $f(z) = 1 - h(z)$ where $h(z) = -\sum_{n=1}^{\infty}a_n z^n$.  After the earlier observation, it is natural to guess that the inverse of $f$ should be $\phi(z) = 1 + h(z) + h(z)^2 + \dots$ if it makes sense.  More precisely, the coefficient of $z^n$ should be a finite quantity.  Notice that the $ord(h) \geq 1$, $ord(h^{n+1}) > n$.  Thus, the coefficient of $z^n$ in $f\varphi$ is the same as the coefficient of $z^n$ in $(1-h(z))(1+ h(z)+\dots + h(z)^n) = 1 - h(z)^{n+1}$.  That is, the coefficient of $z^n$ is $0$.  As $n$ was arbitrary, we have $f\varphi = 1$.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 11.3</span>

Let $f$ be a power series.  If $ord(f) = 0$, then $f$ has a multiplicative inverse.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $f = \sum b^n z^n$ and we are given $b_0\neq 0$.  Thus, consider the power series $g = \frac{1}{b_0}f = \frac{1}{b_0}\sum b_n z^n = \sum \frac{b_n}{b_0} z^n$.  By previous lemma $g$ has a multiplicative inverse, which we will denote as $\frac{1}{g}$.  Then $b_0.(\frac{1}{g})$ is the inverse of $f$, by the bilinearity of multiplication
$$f.\frac{b_0}{g} = \left(\frac{1}{b_0}.g\right)\left(b_0.\frac{1}{g}\right) = \left(\frac{1}{b_0}b_0\right).\left(g.\frac{1}{g}\right) = 1.$$

</details>
</div>


The idea of introducing an invariant comes handy when we try to prove the converse: If $f$ has a multiplicative inverse, then $orf(f) = 0$.


<div class="academic-env env-example">
<span class="env-label">Example 11.3</span>

Let $f(z) = z^2 + 3$.  Then,
$$
\begin{align*}
         \frac{1}{f(z)} &= \frac{1}{3}\frac{1}{1 - \left(-\frac{z^2}{3}\right)}\\
         &= \frac{1}{3}\left(1 + \left(-\frac{z^2}{3}\right) + \left(-\frac{z^2}{3}\right)^2 + \left(-\frac{z^2}{3}\right)^3 + \dots\right)\\
         &= \frac{1}{3}\left(1 - \frac{z^2}{3} + \frac{z^4}{9} - \frac{z^6}{27} +\dots\right).
     \end{align*}
$$

</div>




<div class="academic-env env-example">
<span class="env-label">Example 11.4</span>

Recall that $\cos(z) = \sum \frac{(-1)^n}{2n!}z^{2n}$.  Thus, 
$$
\begin{align*}
        \frac{1}{\cos(z)} &= \frac{1}{1-\left(\frac{z^2}{2!} -\frac{z^4}{4!} + \dots\right)}\\
        &= 1 + \left(\frac{z^2}{2!} -\frac{z^4}{4!} + \dots\right) + \left(\frac{z^2}{2!} -\frac{z^4}{4!} + \dots\right)^2 + \dots\\
        &= 1 + \frac{z^2}{2!} + \left(\frac{1}{4}-\frac{1}{24}\right)z^4 + \text{higher order terms}
    \end{align*}
$$

</div>


This technique can sometime be used to find inverse of power series that do not have a non-zero constant term


<div class="academic-env env-example">
<span class="env-label">Example 11.5</span>

Recall that $\sin(z) = \sum \frac{(-1)^n}{(2n+1)!}z^{2n+1} = z(1-\frac{z^2}{3!} + \frac{z^4}{5!}-\dots)$.  Thus,
$$
\begin{align*}
        \frac{1}{\sin(z)} &= \frac{1}{z(1-\frac{z^2}{3!} + \frac{z^4}{5!}-\dots)}\\
        &= \frac{1}{z}\left(1 + \left(\frac{z^2}{3!}-\frac{z^4}{5!} + \dots \right) + \left(\frac{z^2}{3!}-\frac{z^4}{5!} + \dots \right)^2 + 
        dots \right)\\
        &= \frac{1}{z} + \frac{z}{3!} - \left(\left(\frac{1}{3!}\right)^2 - \frac{1}{5!}\right) z^3 + \text{higher order terms}.
    \end{align*}
$$

</div>


However, this is not a power series as there is a negative power of $z$.  Allowing finitely many negative powers is useful and such expressions are well studied.  But, we won't discuss it in this course.



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">11.2 Generating functions</summary>




<div class="academic-env env-definition">
<span class="env-label">Definition 11.4</span>

The generating function for the sequence $<a_n>$ is the formal power series $\sum_{i=0}^{\infty} a_i x^i$

</div>



<div class="academic-env env-example">
<span class="env-label">Example 11.6</span>

The generating function for the sequence $<a^n>$ is the series $$\sum_{i=0}^{\infty} a^ix^i= \frac{1}{1-ax}.$$
In particular, the generating function for the sequence $<1>$ is the series $$\sum_{i=0}^{\infty} x^i = \frac{1}{1-x}.$$

</div>



<div class="academic-env env-example">
<span class="env-label">Example 11.7</span>

The generating function for the sequence $<a_k>$ defined as 
$$a_k = \begin{cases}
        \binom{n}{k} & \text{ if } k \leq n\\
        0            & \text{otherwise}
    \end{cases}$$
is 
$$\sum_{i=0}^n\binom{n}{k}x^i = (1+x)^n$$

</div>



<div class="academic-env env-example">
<span class="env-label">Example 11.8</span>

The generating function for the sequence $\left<\frac{1}{n!}\right>$ si the series 
$$\sum_{i=0}^{\infty}\frac{x^k}{k!} = e^{x}.$$

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">11.3 Using generating functions to solve recurrence</summary>




<div class="academic-env env-example">
<span class="env-label">Example 11.9</span>

Solve the recurrence relation $a_n = 2a_{n-1} - a_{n-2}$, $a_0 = 1$ $a_1 = 2$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

The generating function $G(x) = \sum_{i=0}^{\infty}a_i x^i$.  Now consider the recurrence relation $a_i = 2a_{i-1} - a_{i-2}$.  Multiply both sides of this equation by $x^i$ and summing for all values of $i\geq 2$, we get
$$
\begin{align*}
        \sum_{i=2}^{\infty} a_ix^i &= \sum_{i=2}^{\infty} 2a_{i-1}x^i - \sum_{i=2}^{\infty} a_{i-2}x^i
    \end{align*}
$$
Further notice that 
$$
\begin{align*}
        \sum_{i=2}^{\infty} a_ix^i = G(x) - a_0 - a_1 x = G(x) - 1 - 2x
    \end{align*}
$$
$$
\begin{align*}
        \sum_{i=2}^{\infty} 2a_{i-1}x^i = 2x\sum_{i=2}^{\infty} a_{i-1}x^{i-1} = 2x\sum_{i=1}^{\infty} a_ix^i = 2x(G(x) -a_0) = 2x(G(x) - 1)
    \end{align*}
$$
and
$$
\begin{align*}
        - \sum_{i=2}^{\infty} a_{i-2}x^i = - x^2\sum_{i=2}^{\infty} a_{i-2}x^{i-2} = - x^2 \sum_{i=0}^{\infty}a_{i}x^i = x^2 G(x)
    \end{align*}
$$
Thus, we have
$$
\begin{align*}
        G(x) - 1 - 2x = 2x(G(x) - 1) - x^2 G(x) &\iff G(x) (1-2x+x^2) = 1 \iff G(x) = \frac{1}{(1-x)^2}
    \end{align*}
$$
We would now like to write $\frac{1}{(1-x)^2}$ as a power series. Notice that we already know the power series for $\frac{1}{1-x}$ and 
$$\frac{1}{(1-x)^2} = \frac{d}{dx}\left(\frac{1}{1-x}\right) = \frac{d}{dx}\left(\sum_{i=0}^{\infty}x^i\right) = \sum_{i=1}^{\infty}ix^{i-1} = \sum_{i=0}^{\infty}(i+1)x^{i}.$$
Thus, $a_n = n+1$.

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 11.10</span>

Solve the recurrence relation $a_k = 3a_{k-1} - 2a_{k-2} + 2^k$, $a_0 = 1$, $a_1 = 5$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

If $G(x)$ is the generating function for $a_n$, then following the same steps as before, we will get
$$
\begin{align*}
        G(x) - a_0 - a_1x = 3x(G(x) - a_0) - 2x^2G(x) + \sum_{i=2}^{\infty} 2^nx^n = 3x(G(x) - a_0) - 2x^2G(x) + \frac{4x^2}{1 - 2x} 
    \end{align*}
$$
We can simplify this to get
$$
\begin{align*}
        G(x)(1-3x + 2x^2) = a_0 + (a_1 - 3a_0)x + \frac{4x^2}{1 - 2x} = 1 + 2x + \frac{4x^2}{1 - 2x} = \frac{1 - 4x^2 + 4x^2}{1-2x} = \frac{1}{1-2x}
    \end{align*}
$$
Thus, 
$$
\begin{align*}
        G(x) = \frac{1}{(1-x)(1-2x)^2}
    \end{align*}
$$
We need to now find the power series corresponding to $\frac{1}{(1-x)(1-2x)^2}$.  This can be done using partial fractions.  More precisely, we can write
$$
\begin{align*}
        \frac{1}{(1-x)(1-2x)^2} &= \frac{1}{1-x} + \frac{-2}{1-2x} + \frac{2}{(1-2x)^2}\\
        &= \sum_{i=0}^{\infty} x^i -2 \sum_{i=0}^{\infty}2^{i}x^i + 2\sum_{i=0}^{\infty}(i+1)2^ix^i\\
        &= \sum_{i=0}^{\infty} (1 + i2^{i+1}) x^i
    \end{align*}
$$
Thus, $a_n = 1 + n2^{n+1}$.

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 11.11</span>

Solve the recurrence relation $a_n = 9a_{n-1} - 26a_{n-2} + 24a_{n-3}$, $a_0 = 2$, $a_1 = 4$, $a_2 = 2$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

If $G(x)$ is the generating function for $a_n$, then following similar steps as before (the only difference is that we will sum from $i=3$ onwards), we will get
$$
\begin{align*}
        G(x) - a_0 - a_1 x - a_2 x^2 = 9x(G(x) - a_0 - a_1 x) - 26x^2 (G(x) - a_0) + 24x^3 G(x)
    \end{align*}
$$
Taking all terms containing $G(x)$ to LHS and all other terms to RHS, we get
$$
\begin{align*}
        G(x)(1 - 9x + 26x^2 - 24x^3) = a_0 + (a_1 - 9a_0)x + (a_2 - 9a_1 + 26a_0) = 2 -14x + 18x^2
    \end{align*}
$$
Notice that $1 - 9x + 26x^2 - 24x^3 = (1-2x)(1-3x)(1-4x)$ and
$$
\begin{align*}
        G(x) = \frac{2 -14x + 18x^2}{1 - 9x + 26x^2 - 24x^3} = \frac{-1}{1-2x} + \frac{6}{1-3x} + \frac{-3}{1-4x} = \sum_{i=0}^{\infty} (-2^i + 6.3^i - 3.4^i) x^i.
    \end{align*}
$$
That is,
$a_n = -2^n + 6.3^n - 3.4^n$

</details>
</div>






</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">11.4 Exercises</summary>




- Prove that The collection of all power series form a ring under addition and multiplication.  More precisely, show that multiplication is associative, has a multiplicative identity, and distributes over addition.

Hint: The power series $1 + \sum_{n=1}^{\infty}0.z^n$ is the multiplicative identity.
- Show that the collection of power series equipped with the addition, multiplication, and scalar multiplication defined above forms an algebra.  More precisely, show that multiplication is a bilinear operation, that is,

- $(f+g)h = fh + gh$
- $h(f+g) = hf + hg$
- $(\alpha.f)(\beta.g) = (\alpha\beta).fg$

- Show that the ring (algebra) of polynomials form a sub-ring (sub-algebra) of the ring (algebra) of power series.
- Let $f$ and $g$ be two power series.  Show that $ord(fg) = ord(f) + ord(g)$. 
- Let $f$ be a power series. Show that if $ord(f) > 0$, then $f$ does not have a multiplicative inverse.
- In how many ways can $25$ identical donuts be distributed to four police ofﬁcers so that each ofﬁcer gets at least three but no more than seven donuts?
- Use generating functions to ﬁnd the number of ways to select $14$ balls from a jar containing $100$ red balls, $100$ blue balls, and $100$ green balls so that no fewer than $3$ and no more than $10$ blue balls are selected. Assume that the order in which the balls are drawn does not matter.
- Use generating functions to ﬁnd an explicit formula for the Fibonacci numbers.
- Use generating functions to solve the recurrence relation $a_k = 5a_{k-1} - 6a_{k-2}$ with initial conditions $a_0 = 6$ and $a_1 = 30$.
- Use generating function to solve the recurrence relation $a_k = a_{k-1} + 2a_{k-2} + 2^k$ with initial conditions $a_0 = 4$ and $a_1 = 12$.
- Use generating functions to solver the recurrence relation $a_k = 4a_{k-1} - 4a_{k-2} + k^2$ with initial conditions $a_0 = 2$ and $a_1 = 5$. 
- Use generating functions to prove Pascal’s identity: $\binom{n}{r} = \binom{n - 1}{r} + \binom{n - 1}{r - 1}$ when $n$ and $r$ are positive integers with $r < n$. [Hint: Use the identity $(1 + x)^n = (1 + x)^{n-1} + x(1 + x)^{n-1}$.]
- Use generating functions to prove Vandermonde’s identity: $\binom{m + n}{r} = \sum_{k=0}^r \binom{m}{r-k}\binom{n}{k}$, whenever $m$, $n$, and $r$ are nonnegative integers with $r$ not exceeding either $m$ or $n$. [Hint: Look at the coefﬁcient of $x^r$ in both sides of $(1 + x)^{m + n} = (1 + x)^m (1 + x)^n$ .]
- Show that the coefﬁcient $p(n)$ of $x^n$ in the formal power series expansion of $1/((1-x)(1-x^2 )(1-x^3)\dots)$ equals the number of partitions of $n$.


</details>