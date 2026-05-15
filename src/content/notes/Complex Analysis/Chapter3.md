# Power series

Recall we had discussed that polynomials form a very small class of functions and thus we need to enlarge our class of functions.  Note that a polynomial $3x^2 + 5x + 2$ can at once be thought of as an expression with no meaning or as a function defined for all real or complex values.  If we instead look at an expression $\frac{x}{(x-1)(x-2)}$, it can be evaluated only when $x\neq 1$ and $x\neq 2$.  So, the expression represents a function, but we have to restrict its domain.  As a series is a much more complicated expression, finding the domain of the corresponding function requires some effort.  So, we will first treat the series only as formal expression - with no meaning attached to the expression.  After proving some properties of formal power series, we will look at a natural domain where we can treat it as a function.



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">3.1 Formal Power Series</summary>




<div class="academic-env env-definition">
<span class="env-label">Definition 3.1</span>

A formal power series is an expression of the form $\sum_{n=0}^{\infty}a_n z^n$.  When it does not lead to any ambiguity, we might also write it as $\sum a_n z^n$.

</div>


Let us look at some important examples of power series:


- $\sum z^n$
- $e(z) = \sum \frac{z^n}{n!}$
- $\sin(z) = \sum \frac{(-1)^n}{(2n+1)!}z^{2n+1}$
- $\cos(z) = \sum \frac{(-1)^n}{(2n!)}z^{2n}$
- Let $\alpha$ be a non-zero complex number.  Define the binomial coefficients $$ {\alpha \choose n} = \frac{\alpha(\alpha-1)(\alpha-2)\dots(\alpha-n+1)}{n!}$$
and the binomial series $$B_{\alpha}(z) = \sum_{n=0}^{\infty}{\alpha \choose n}z^n.$$
Note that, by convention ${\alpha \choose 0} = 1$.




<div class="academic-env env-remark">
<span class="env-label">Remark 3.1</span>

Of course, we do not associate any meaning or treat the above as functions as of now.  We are giving names only because they remind us of the familiar power series expansion for $\sin$, $\cos$ etc.

</div>



Given two power series $\sum_{n=0}^{\infty} a_n z^n$ and $\sum_{n=0}^{\infty} b_n z^n$, we can add the two as follows:
$$\sum_{n=0}^{\infty} a_n z^n + \sum_{n=0}^{\infty} b_n z^n = \sum_{n=0}^{\infty} (a_n + b_n)z^n.$$


<div class="academic-env env-xca">
<span class="env-label">Exercise 3.1</span>

Prove that the collection of all power series form an abelian group under addition.  More precisely, show that addition is associative, commutative, has an additive identity, every element has an additive inverse.

Hint: The power series $\sum_{n=0}^{\infty} 0.z^n$ is the additive identity and the inverse of $\sum_{n=0}^{\infty}a_n z^n$ is the power series $\sum_{n=0}^{\infty} (-a_n)z^n$.

</div>


We can also multiply the two power series $\sum_{n=0}^{\infty} a_n z^n$ and $\sum_{n=0}^{\infty} b_n z^n$ as follows
$$\left(\sum_{n=0}^{\infty} a_n z^n\right) \times \left(\sum_{n=0}^{\infty} b_n z^n \right) = \sum_{n=0}^{\infty} \left(\sum_{k=0}^n a_k b_{n-k}\right)z^n.$$


<div class="academic-env env-xca">
<span class="env-label">Exercise 3.2</span>

Prove that The collection of all power series form a ring under addition and multiplication.  More precisely, show that multiplication is associative, has a multiplicative identity, and distributes over addition.

Hint: The power series $1 + \sum_{n=1}^{\infty}0.z^n$ is the multiplicative identity.

</div>


Given a power series $\sum a^n z^n$ and a complex number $\alpha$, we can define the scalar multiplication by $alpha$ as $\alpha.(\sum a^n z^n) = \sum \alpha.a_n z^n$.  This scalar multiplication along with addition defined earlier gives the collection of power series a vector space structure.  Moreover, multiplication behaves well with the vector space structure and makes it an algebra.


<div class="academic-env env-xca">
<span class="env-label">Exercise 3.3</span>

Show that the collection of power series equipped with the addition, multiplication, and scalar multiplication defined above forms an algebra.  More precisely, show that multiplication is a bilinear operation, that is,

- $(f+g)h = fh + gh$
- $h(f+g) = hf + hg$
- $(\alpha.f)(\beta.g) = (\alpha\beta).fg$


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.4</span>

Show that the ring (algebra) of polynomials form a sub-ring (sub-algebra) of the ring (algebra) of power series.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 3.2 (Units)</span>

Elements in a ring that have a multiplicative inverse are called unit.

</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 3.1</span>

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


<div class="academic-env env-lemma">
<span class="env-label">Lemma 3.2</span>

Any power series $f = \sum a_n z^n$ such that $a_0 = 1$ has a multiplicative inverse.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

The basic idea behind the proof is the observation that
$$(1-z)\sum z^n = 1 + (1 - 1)z + (1-1)z^2 + ... = 1.$$
Notice we may write $f(z) = 1 - h(z)$ where $h(z) = -\sum_{n=1}^{\infty}a_n z^n$.  After the earlier observation, it is natural to guess that the inverse of $f$ should be $\phi(z) = 1 + h(z) + h(z)^2 + \dots$ if it makes sense.  More precisely, the coefficient of $z^n$ should be a finite quantity.  Notice that as $ord(h) \geq 1$, $ord(h^{n+1}) > n$.  Thus, the coefficient of $z^n$ in $f$ is the same as the coefficient of $z^n$ in $1+ h(z)+\dots + h(z)^n$.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.1</span>

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


<div class="academic-env env-definition">
<span class="env-label">Definition 3.3</span>

Given a power series $f = \sum a_n z^n$, the smallest $n$ such that $a_n\neq 0$ is called the order of the power series.  We may denote the order of $f$ as $ord(f)$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.5</span>

Let $f$ and $g$ be two power series.  Show that $ord(fg) = ord(f) + ord(g)$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.6</span>

Let $f$ be a power series. Show that if $ord(f) > 0$, then $f$ does not have a multiplicative inverse.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.1</span>

Let $f(z) = z^2 + 3$.  Then,
$$
\begin{align*}
\frac{1}{f(z)} &= \frac{1}{3}\frac{1}{1 - (-z^2)}\\
&= \frac{1}{3}\left(1 + (-z^2) + (-z^2)^2 + (-z^2)^3 + \dots\right)\\
&= \frac{1}{3}\left(1 - z^2 + z^4 - z^6 +\dots\right).
\end{align*}
$$

</div>




<div class="academic-env env-example">
<span class="env-label">Example 3.2</span>

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
<span class="env-label">Example 3.3</span>

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


However, this is not a power series as there is a negative power of $z$.  Allowing finitely many negative powers is useful and such expressions are well studied.  But, let us not spend much time on it now.  



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">3.2 Convergence of a series of real numbers</summary>



Last section, we discussed formal expressions called power series and studied some of its properties.  Of course, the motivation was to eventually treat them as functions on suitable domains.  To this end, we are interested in the question: For what values of $z$ does the series of complex numbers $\sum a_n z^n$ make sense?  Before we begin the study of series of complex numbers, let us make sure we are comfortable with the basics of series of real numbers.   

A series $\sum_{n=0}^{\infty}x_n$ is an infinite sum.  Let us first look at an example known as the alternating series.  This is the series $\sum (-1)^n$.  Notice that the following two groupings give rise to two different answers.  
$$(1 + (-1)) + (1 + (-1)) + (1 + (-1)) + \dots = 0 + 0 + 0 + \dots = 0$$
while 
$$1 + ((-1)+1) + ((-1)+1) + ((-1)+1) + \dots = 1 + 0 + 0 + 0 + \dots = 1.$$
Thus, unless we make sense of an infinite sum in a more sophisticated manner, we cannot expect associativity to follow for infinite sums.  And the definition of a sum of a series you are familiar with is already good enough.  


<div class="academic-env env-definition">
<span class="env-label">Definition 3.4</span>

Given a series of real number $\sum_{n=0}^{\infty}x_n$, we say the series converge, if the sequence of partial sums $s_k = \sum_{n=0}^k x_n$ converge as $k$ tends to infinity.  And the limit is called the sum of the series.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.7</span>

Show that the partial sums for the alternating sequence $s_n$ is $1$ when $n$ is odd and $0$ when $n$ is even.  Hence, the series does not converge.

</div>


Thus, we have excluded the problematic example and hopefully infinite sum would be associative whenever the series converge.  And this is indeed the case.  


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.2</span>

If $\sum a_n$ is a convergent series of real numbers, then the sum does not depend on how you group the numbers.  More precisely, if $0 = i_0 < i_1 < i_2 < \dots$ be an increasing sequence of natural numbers, then $$\sum_{k=1}^{\infty} \left(\sum_{i = i_{k-1}}^{i_k - 1} a_n\right)$$ converge and 
$$\sum_{k=1}^{\infty} \left(\sum_{i = i_{k-1}}^{i_k - 1} a_n\right) = \sum_{n=0}^{\infty} a_n.$$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $s_j$ be the partial sums of $\sum a_n$ and $S_j$ be the partial sums of $$\sum_{k=1}^{\infty} \left(\sum_{i = i_{k-1}}^{i_k - 1} a_n\right).$$  Then, note that
$$S_j = \sum_{k=1}^{j} \left(\sum_{i = i_{k-1}}^{i_k - 1} a_n\right) = s_{i_j - 1}.$$
Thus, the sequence $S_j$ is a subsequence of the sequence $s_j$.  Therefore $S_j$ converge and has the same limit as $s_j$.

</details>
</div>


Thus, as long as the series converges, they behave not so differently from finite sums.  Hence, we will study infinite sums only when the series converge.  Another important example of series is the geometric series.  


<div class="academic-env env-example">
<span class="env-label">Example 3.4 (Geometric series)</span>

The geometric series is a series of the form $\sum x^n$.  Then the sequence of partial sum $s_n = \sum_{i=0}^n x^i$.  Notice that 
$s_n - xs_n = 1 + x + \dots x^n - (x + x^2 + \dots +x^{n+1}) = 1-x^{n+1}$. It is easy to see that the series does not converge when $x=1$ as then $s_n = n$.  So, assume $x\neq 1$.  Thus, $$s_n = \frac{1-x^{n+1}}{1-x}.$$
From the properties of limits, it is clear that $s_n$ converges iff $x^{n+1}$ converges.  $x^{n+1}$ converges iff $x\in (-1,1]$.  But, we have already assumed that $x\neq 1$, thus $s_n$ converges iff $x\in (-1,1)$.

</div>


In the above example, we noticed that the series converges only when the $n-th$ summand converges.  And this is something we should expect.  If the modulus of the summands are bounded below, then we should expect the sum to blow up.  This intuition is captured in the following theorem.  


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.3</span>

If $\sum x_n$ converges then $x_n$ converges to $0$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We know the series $\sum x_n$ converges iff the sequence of partial sums $s_n$ converge.  But, notice that $x_n = s_n - s_{n-1}$.  As $s_n$ and $s_{n-1}$ converge, so does their difference $x_n$.  Moreover, $\lim x_n = \lim s_n - \lim s_{n-1} = \sum x_n - \sum x_n = 0$.

</details>
</div>


The converse of this theorem is however not true as demonstrated by the following example.  Intuitively, this says, it is not enough that $x_n$ converge to $0$, but it should converge fast enough.


<div class="academic-env env-example">
<span class="env-label">Example 3.5 (Harmonic series)</span>

The harmonic series is the series of the form $\sum_{n=1}^{\infty} \frac{1}{n}$.  Notice that as the summands are all positive, the sequence of partial sums form and increasing sequence.  Hence, the sequence of partial sums converge iff it is bounded.  We will show that as $s_n$ is not bounded above the series is divergent that means not convergent.  

First observe that, as $\frac{1}{3} > \frac{1}{4}$, $\frac{1}{3} + \frac{1}{4} > \frac{1}{4} + \frac{1}{4} = \frac{1}{2}$.  Similarly, $\frac{1}{5} + \frac{1}{6} + \frac{1}{7} + \frac{1}{8} > \frac{1}{8} + \frac{1}{8} + \frac{1}{8} + \frac{1}{8} = \frac{1}{2}$.  And this process can be repeated. So, in some sense we can get infinitely many halves if we proceed and because we can find infinitely many halves the sum of them cannot be bounded.  That's the basic idea but we will just make it a little more precise. 

We will prove using mathematical induction that $s_{2^n} > 1 + \frac{n}{2}$.  This is obvious for $n=1$ as $s_2 = 1 + \frac{1}{2}$.  Asssume it is true for $k$, that is, assume that $s_{2^k} > 1 + \frac{k}{2}$.  Then,
$$s_{2^{k+1}} = s_{2^k} + \frac{1}{2^{k}+1} + \dots + \frac{1}{2^{k+1}} > 1 + \frac{k}{2} +  \frac{1}{2^{k+1}} + \dots + \frac{1}{2^{k+1}}= 1 + \frac{k}{2} +  \frac{1}{2} = 1+ \frac{k+1}{2}.$$  
Hence we have the claim by the principle of mathematical induction.  Thus, we clearly see that the sequence of partial sums is not bounded and hence does not converge.

</div>


This implies that


<div class="academic-env env-example">
<span class="env-label">Example 3.6 (Harmonic [[[MATHBLOCK267)</span>

]] series, $0 < p\leq 1$]
The series $\sum_{n=1}^{\infty}\frac{1}{n^p}$ diverges for $0<p \leq 1$.  Notice that as $p < 1$, $n^p < n$.  This implies $\frac{1}{n^p} > \frac{1}{n}$.  Thus the sequence of partial sums of $\sum_{n=1}^{\infty}\frac{1}{n^p}$ is bounded below by the sequence of partial sums of $\sum_{n=1}^{\infty}\frac{1}{n}$.  Hence, the sequence of partial sums certainly cannot be bounded above.  Hence they do not converge.

</div>


The idea we have used in the above example is an illustration of a more general principle stated in the theorem below.


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.4 (Comparison theorem)</span>

Let $\sum a_n$ and $\sum b_n$ be two series such that $0 < a_n < b_n$ for all $n$. Then, if $\sum b_n$ converges, so does $\sum a_n$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Notice that as $a_n$ and $b_n$ are positive, the partial sums of $\sum a_n$ (say $s_n$) and partial sums of $b_n$ (say $t_n$) are both increasing.  Thus, the sequence of partial sums converge iff they are bounded above.  Further, clearly, $s_n \leq t_n$.  Thus, if $t_n$ is bounded above, so is $s_n$.

</details>
</div>



<div class="academic-env env-remark">
<span class="env-label">Remark 3.2</span>

Under same hypothesis, if $\sum a_n$ diverges, we may thus conclude $\sum b_n$ diverges.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.7 (Harmonic [[[MATHBLOCK293)</span>

]] series]
The harmonic $2$ series is the series of the form $\sum_{n=1}^{\infty}\frac{1}{n^2}$.  Once again, the summands are all positive and hence the sequence of partial sums is monotonically increasing.  Thus, the sequence of partial sums converge iff it is bounded above.  We will prove that the sequence of partial sums is indeed bounded in this case.  

Notice that $\frac{1}{2^2} + \frac{1}{3^2} < \frac{1}{2^2} + \frac{1}{2^2} = \frac{1}{2}$.  Similarly, $\frac{1}{4^2} + \frac{1}{5^2} + \frac{1}{6^2} + \frac{1}{7^2} < \frac{1}{4^2} + \frac{1}{4^2} + \frac{1}{4^2} + \frac{1}{4^2} = \frac{1}{4}$.  More generally, you can prove using induction (and this time I leave it as an exercise) that $s_{2^{n+1} - 1} < 1 + \frac{1}{2} + \dots \frac{1}{2^n}$.  Now, the left hand side is bounded above by the sum of the geometric series where $x=\frac{1}{2}$.

</div>


More generally (using very similar argument) one can prove that 


<div class="academic-env env-xca">
<span class="env-label">Exercise 3.8 (Harmonic [[[MATHBLOCK300)</span>

]] series. $p>1$]
Show that the series $\sum_{n=1}^{\infty}\frac{1}{n^p}$ converge for all $p > 1$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.8 (Alternating harmonic series)</span>

The alternating harmonic series is the series $\sum_{n=1}^{\infty}\frac{(-1)^n}{n}$.  

As $$s_{2n} - s_{2(n-1)} = \frac{1}{2n-1} - \frac{1}{2n} \geq 0$$ **the subsequence $s_{2n}$ is monotonically increasing**.  Similarly, $$s_{2n+1}-s_{2(n-1)+1} = \frac{1}{2n+1} - \frac{1}{2n} \leq 0$$
and thus **the subsequence $s_{2n+1}$ is monotonically decreasing**.  Further, notice that $s_2 \geq 0$ and $s_{2n}$ is increasing implies that $s_{2n}\geq 0$ for all $n$.  Similarly, $s_1 \leq 1$ and $s_{2n+1}$ is decreasing implies that $2_{2n+1}\leq 1$ for all $n$.  Finally, notice that $0\leq s_{2n} \leq s_{2n+1} \leq 1$.  Thus, $s_{2n}$ is monotonically increasing and bounded above, hence $s_{2n}$ converges.  Similarly, $s_{2n+1}$ is monotonically decreasing and bounded below, hence $s_{2n+1}$ converges.  Moreover,
$$\lim_{n\to \infty} \left(s_{2n+1} - s_{2n}\right) = \lim_{n\to \infty}\frac{1}{2n+1} = 0.$$
Thus, **$s_{2n+1}$ and $s_{2n}$ converge to the same limit**.  Moreover, as $s_{2n}$ and $s_{2n+1}$  are bounded between $0$ and $1$, $s_n$ is a bounded sequence.  Recall that a bounded sequence diverges (does not converge) iff there exists two subsequences that converge to different limits.  But, we will prove that any convergent subsequence of $s_n$ has to converge to the limit of $s_{2n}$ and $s_{2n+1}$, hence $s_n$ cannot have two subsequences that converge to different limits and that will complete our proof.

Let $s_{n_k}$ be a convergent subsequence of $s_n$.  Then there will either exist infinitely many $k$ for which $n_k$ is even or infinitely many $k$ for which $n_k$ is odd.  If there exists infinitely many $k$ for which $n_k$ is odd, a subsequence of $s_{n_k}$ (the subsequence of all odd $n_k$) that is a subsequence of $s_{2n+1}$ - call this subsequence $s_{n_{k_j}}$.  We know that if a sequence converge, then all its subsequence will converge to the same limit.  Thus,
$$\lim_{n\to \infty}s_{2n} =\lim_{n\to \infty}s_{2n+1} = \lim_{j\to \infty}s_{n_{k_j}} = \lim_{k\to \infty} s_{n_k}.$$
Similarly, if there exists infinitely many $k$ for which $n_k$ is even, a subsequence of $s_{n_k}$ (the subsequence of all even $n_k$) that is a subsequence of $s_{2n}$ - call this subsequence $s_{n_{k_j}}$.  We know that if a sequence converge, then all its subsequence will converge to the same limit.  Thus,
$$\lim_{n\to \infty}s_{2n+1} =\lim_{n\to \infty}s_{2n} = \lim_{j\to \infty}s_{n_{k_j}} = \lim_{k\to \infty} s_{n_k}.$$

</div>


Now that we have some examples of convergent series, we can construct more by using the comparison theorem or by taking sum or product of known series.  


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.5</span>

Given two series of real numbers $A = \sum a_n$ and $B = \sum b_n$ that converge, the sum $A + B$ also converge.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $s_n$ and $t_n$ be the partial sums of $A$ and $B$ respectively.  Further, let $S_n$ be the partial sum of $A+B$.  Then notice that $S_n = s_n + t_n$.  Thus, by properties of limits, we can conclude that $\lim S_n$ exists and $\lim S_n = \lim s_n + \lim t_n$.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.6</span>

Given two series of real numbers $A = \sum a_n$ and $B = \sum b_n$ that converge, the product $AB$ defined as $$AB = \sum_{i=0}^\infty \left(\sum_{k=0}^i a_k b_{i-k}\right)$$ also converge.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $s_n$ and $t_n$ be the partial sums of $A$ and $B$ respectively.  Further, let $P_n$ be the partial sum of $AB$.  Note that 
$$s_nt_n = \left(\sum_{i=0}^n a_n\right)\left(\sum_{i=0}^n b_n\right) = \sum_{i=0}^n \left(\sum_{k=0}^i a_k b_{i-k}\right) = P_n.$$
Thus, by properties of limits, we can conclude that $\lim P_n$ exists and $\lim P_n = \left(\lim s_n\right)\left(\lim t_n\right)$.

</details>
</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.9</span>

Show that $\sum_{n=1}^{\infty} \frac{(-1)^n}{n^2}$ converge.

</div>


Although $\sum \frac{(-1)^n}{n}$ and $\sum \frac{(-1)^n}{n^2}$ both converge, we know that $\sum \frac{1}{n}$ diverge while $\sum \frac{1}{n^2}$ converge.  So, in some sense, the convergence of $\frac{1}{n^2}$ is stronger.  This stronger form of convergence is the theme of our next lecture.



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">3.3 Convergence vs Absolute convergence</summary>



As mentioned in last class, we will discuss a stronger form of convergence called absolute convergence today.  


<div class="academic-env env-definition">
<span class="env-label">Definition 3.5 (Absolutely convergent series)</span>

Given a series of real numbers $\sum_{n=0}^{\infty}x_n$, we say the series converge absolutely, if the series $\sum_{n=0}^{\infty} |x_n|$ converges.

</div>


We claimed that this is a stronger version of convergence, so it is natural to ask if every series that converges absolutely necessarily converge.  And the answer is of course, yes.


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.7</span>

If the series $\sum x_n$ converge absolutely, then $\sum x_n$ converges.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $s_n$ be the sequence of partial sums of $\sum x_n$ and $t_n$ be the sequence of partial sums of $\sum |x_n|$.  As $t_n$ converges, we know $t_n$ is cauchy.  We will prove $s_n$ converges by proving $s_n$ is cauchy.  Assume $n>m$, then note that,
$$|s_n - s_m| = |x_{m+1} + x_{m+2}+\dots x_n| \leq |x_{m+1}| +\dots |x_n| = t_n - t_m = |t_n - t_m|.$$
Thus, if we choose $N$ large enough such that $|t_n - t_m|<\varepsilon$ for all $n,m >N$, then $|s_n - s_m|<\varepsilon$ for all $n,m >N$.  Thus, $s_n$ is cauchy.

</details>
</div>


As illustrated by the alternating harmonic series, there exists convergent series that are not necessarily absolutely convergent.  


<div class="academic-env env-definition">
<span class="env-label">Definition 3.6 (Conditionally convergent series)</span>

If a series $\sum a_n$ converges but does not converge absolutely, then we say the series is conditionally convergent.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.10</span>

Show that if $x_n \geq 0$, then $\sum x_n$ is convergent iff $\sum x_n$ is absolutely convergent.


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.11</span>

Show that if $x_n \leq 0$, then $\sum x_n$ is convergent iff $\sum x_n$ is absolutely convergent.


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.12</span>

Show that if $A = \sum a_n$ and $B = \sum b_n$ converge absolutely, then so does $A+B = \sum (a_n + b_n)$.


</div>


in the previous lecture we saw how to construct a new series from an existing series and this was done by grouping.  Now we will see another process
this is called as rearrangement.  


<div class="academic-env env-definition">
<span class="env-label">Definition 3.7 (Rearrangement of a series)</span>

A series $\sum y_n$ is called a rearrangement of a series $\sum x_n$ if there exists a bijection $f:\mathbb{N} \to \mathbb{N}$ such that $y_k = x_{f(k)}$ for all $k$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.8</span>

Let $\sum x_n$ be an absolutely convergent series, then every rearrangement $\sum y_n$ of $\sum x_n$ converge to the same value.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $s_n$ be the partial sums of $\sum x_n$, let $t_n$ be the partial sums of $\sum y_n$, and $s = \sum x_n$.  Then given any $\varepsilon > 0$, there exists $N(\varepsilon)\in \mathbb{N}$ such that $|s_n -s|<\varepsilon$ for all $n\geq N$.  

Notice that if $j = f^{-1}(i)$, then $y_j = x_i$.  Thus, to ensure that $\{x_1, x_2, \dots, x_{N(\varepsilon)}\} \subset \{y_1,y_2,\dots,y_{M(\varepsilon)}\}$ define $M(\varepsilon) = \max\{ f^{-1}(i)|0\leq i\leq N(\varepsilon)\}$.  Thus, if $m > M(\varepsilon)$ and $n > N(\varepsilon)$, then $$|t_m - s_n| \leq \left|\sum_{k=N(\varepsilon)+1}^{\infty} x_n\right| = |s - s_n| < \varepsilon.$$ 
Further, 
$$|t_m - x| \leq |t_m - s_n| + |s_n -s| < 2\varepsilon.$$
As $\varepsilon$ was arbitrary, $t_m$ converge to $s$, that is, has the same limit as $s_n$.

</details>
</div>


So, we proved that if a series is is absolutely convergent then any rearrangement converges and has the same value.  Now, the question is, what happens if the series was conditionally convergent? In this case we will show
that we can find a rearrangement such that it will converge to any value you
want more precisely if you give me a value I will construct a rearrangement
such that the rearranged sequence will converge to the value you had given.  


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.9</span>

If series $\sum x_n$ is conditionally convergent, then given any real number s we can find a rearrangement $\sum y_n$ of $\sum x_n$ such that $\sum y_n = s$.


</div>


Let me give a brief sketch of the proof before actually jumping into the proof
of the theorem.  First we form two new series  - we collect all the positive terms $x_n$ and all the negative terms $x_n$.  We will then show that the series of positive terms and series of negative terms both will have to diverge.  Given this fact, 

- Choose just enough positive terms (in order - and not chosen earlier) from the positive series such that the sum of these numbers and what we have already (in the beginning we have $0$) is greater than the chosen value.  
- Choose just enough number of terms from the negative series (in order - and not chosen earlier) such that the sum of these numbers and what we have already is greater than the chosen value.


Repeat the above two steps one-after-the-other again and again each time adding just enough numbers from the positive series to make it greater than the chosen value  and then choosing just enough numbers from the negative series to make it slightly less than the chosen value.  So at each stage we the sum overshoots and undershoots the chosen value.  But, as $x_n$ converges to $0$, the amount by which it under shoots or overshoots keeps decreasing.  Hence it will eventually converge it to the chosen mark this is the idea of the proof.  


<div class="academic-env env-lemma">
<span class="env-label">Lemma 3.3</span>

Let $x_n$ be a conditionally convergent series.  Define two sequences $$x_n^+ = \begin{cases}x_n & \text{if } x_n > 0\\ 0 & \text{otherwise} \end{cases}$$
and 
$$x_n^- = \begin{cases}x_n & \text{if } x_n < 0\\ 0 & \text{otherwise} \end{cases}$$
and notice that $x_n = x_n^+ + x_n^-$.  Then, $\sum x_n^+$ and $\sum x_n^-$ both diverge.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We will prove this claim by a proof by exhaustion.  That is we consider all $4$ cases and show that the only possibility is that both $x_n^+$ and $x_n^-$ are divergent.

*Case 1 - $x_n^+$ and $x_n^-$ converge:*  Then, by Exercise **3.10** and Exercise **3.11**, we can conclude that both $x_n^+$ and $x_n^-$ converge absolutely.  Thus, by Exercise **3.12** $\sum x_n$ converges absolutely, which is a contradiction.  

*Case 2 - $x_n^+$ is divergent, but $x_n^-$ is convergent:*  Let $s_n^+$ be the sequence of partial sums of $\sum x_n$ and $s_n^-$ be the sequence of partial sums for $\sum x_n^-$.  As $\sum x_n^-$ is convergent, $s_n^-$ is bounded below by some value, say $-M$, that is $s_n^- \geq -M$.  On the other hand, as $s_n^+$ is a sequence of non-negative terms, it is divergent iff it is not bounded.  Thus, given any number $A$, there exists a number $N(A)$ such that $s_n^+ \geq A + M$ for all $n \geq N(A)$.  Thus, $s_n = s_n^+ + s_n^- \geq A + M + (-M) = A$ for all $n>N(A)$.  As $A$ was arbitrary, this implies that $s_n$ diverges (as it is not bounded), which is a contradiction.  

*Case 3 - $x_n^+$ is convergent, but $x_n^-$ is divergent:*  The proof that this case is also not possible is analogous to the proof in Case 2, hence left as an exercise.  

*Case 4 - $x_n^+$ and $x_n^-$ are divergent:* As this is the only case left, we have proved our claim.

</details>
</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Proof of Theorem **3.9**)</summary>

Choose a $p$ such that
$$\sum_{n=0}^{p-1} x_n^+ \leq s < \sum_{n=0}^p x_n.$$
So, it is the first $p$ for which the sum becomes greater than $s$.  This already tells us how to defined the function for the first $p$ numbers.  More precisely, $f(0) = \min \{n \ | \ x_n \neq 0 \text{ and } 0\leq x_n \leq p\}$ (basically, we are discarding the zeroes).  Similarly, $f(1) = \min \{n \ | \ x_n \neq 0 \text{ and } f(0)< x_n \leq p\}$.  More generally, if $f(k)$ is defined, we can define $f(k+1) = \min \{n \ | \ x_n \neq 0 \text{ and } f(k)< x_n \leq p\}$.  Of course this is not an infinite process as we can find atmost the values of the first $p+1$ natural numbers.  But, it might end before $p+1$ as some of the numbers $x_n^+$ where $0\leq n \leq p$ may be zero. But, we still have the function defined till some stage.  Let us say, we have $f(0), \dots, f(m_1)$ has been defined.  Now we add just enough terms from the negative sequence to make the sum less that $s$.  More presisely, we choose a $q$ such that 
$$\sum_{k=0}^p x_n^+ + \sum_{k=0}^q x_n^- < s \leq \sum_{k=0}^p x_n^+ + \sum_{k=0}^{q-1} x_n^-.$$
Now, define $f(m_1 + 1) = \min \{ n \ | \ x_n^- \neq 0 \text{ and } 0\leq n \leq q$.  Similarly, $f(m_1 + 2) = \min \{ n \ | \ x_n^- \neq 0 \text{ and } f(m_1 + 1)< n \leq q \}$.  More generally, if we know $f(k)$, then we can define $f(k+1) = \min \{ n \ | \ x_n^- \neq 0 \text{ and } f(m_1 + k)< n \leq q \}$.  In this manner, we would be able to define $f(m_1+1),\dots,f(m_2)$ for some number $m_2$.  And we keep on doing this process - we overshoot and undershoot.  And we can step-by-step define the function $f:\mathbb{N} \to \mathbb{N}$.

As already mentioned, as $x_n$ converges to $0$, the amount by which it under shoots or overshoots keeps decreasing.  Hence it will eventually converge it to the chosen mark

</details>
</div>


Now that we have understood the necessary concepts in series of real numbers, we can quickly define analogous concepts for series of complex numbers.  As the proofs are very similar, they are left as exercises.


<div class="academic-env env-definition">
<span class="env-label">Definition 3.8</span>

Given a series of complex number $\sum_{n=0}^{\infty}z_n$, we say the series converge, if the sequence of partial sums $s_k = \sum_{n=0}^k z_n$ converge as $k$ tends to infinity.  And the limit is called the sum of the series.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.13</span>

Let $a_n\in \mathbb{R}$ and $b_n \in \mathbb{R}$.  Show that $\sum (a_n + \iota b_n)$ converge iff $\sum a_n$ and $\sum b_n$ converge.

</div>


Thus, given a complex number $z$, the series $\sum a_n z^n$ is a series of complex numbers and thus we can test its convergence.  In the case of sequence of real numbers, the easiest way to prove convergence is by comparison with one of the examples we have discussed.  However, as $\mathbb{C}$ does not have an order, we cannot compare two series.  One way to tackle this problem is to use the observation in the above exercise.  But, the real and imaginary parts of $z^n$ are not that easy to find, and thus the method is not as useful.  Yet another way to tackle the problem would be to notice that the absolute value of a complex number is a real number.  This, in addition with the observation that absolutely convergence is far more well-behaved suggests that we focus on absolute convergence.  We will later see an even more pressing reason to focus on absolute convergence.  Then comparison with the examples we have studied will work well.


<div class="academic-env env-definition">
<span class="env-label">Definition 3.9</span>

We say the series $\sum z_n$ converge absolutely, if the series $\sum |z_n|$ converge.

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">3.4 Radius of convergence</summary>



In the last section, we discussed two forms of convergence: conditional and absolute.  We further discussed that conditional convergence does not behave well under rearrangement and thus is trickier.  In addition, the absolute value of a complex number is a real number, so we can use techniques from real analysis to study the absolute convergence of a series of complex numbers.  For instance, we have the following theorem.


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.10 (Comparison Theorem)</span>

Assume $\sum_{n=1}^{\infty} x_n$ is a convergent series of positive real numbers and $\vert z_n \vert \leq x_n$ for all $n$.  Then, $\sum_{n=1}^{\infty} z_n$ converges absolutely.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As the series $\sum_{n=1}^{\infty} x_n$ converge, its value is some number, say $A$.  We know that the series of partial sums $t_m = \sum_{n=1}^{m}\vert z_n \vert$ is a monotonically increasing sequence.  Thus, to prove it is convergent, it is enough to show it is bounded above.  And, note that,
$$
\begin{align*}
t_m = \sum_{n=1}^{m}\vert z_n \vert \leq \sum_{n=1}^m x_n \leq \sum_{n=1}^{\infty} x_n = A.
\end{align*}
$$
Thus, the sequence of partial sums $t_m$ is bounded above by $A$ and hence convergent.

</details>
</div>


Recall that all this discussion on the convergence of a series of real/complex numbers was motivated by the desire to treat formal power series as functions.  Further recall that given a formal power series $f(z) = \sum_{n=1}^{\infty} a_n z^n$, we wanted to think of the series as a limit of the sequence of functions $f_m(z) = \sum_{n=1}^m a_n z^n$.  And the ``weakest" limit of a sequence of functions is the pointwise-limit.  Thus, we would like to define the function $f$ at a point $z_0$ if the sequence $f_m(z_0)$ converges.  Or on the other hand, the series $\sum_{n=1}^{\infty} a_n (z_0)^n$ converges.  


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.11</span>

If a power series $\sum a_n z^n$ converges for some $z_0$, then it converges absolutely for all $z$ such that $\vert z \vert < \vert z_0 \vert$.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As the series $\sum a_n (z_0)^n$ converges, its $n$-th term $a_n (z_0)^n$ converges to $0$ and hence $\vert a_n (z_0)^n \vert$ converge to $0$.  Thus, we can say that there exist some $A$ such that $\vert a_n (z_0)^n \vert < A$ for all $n$.  Now, 
$$\vert a_n z^n \vert = \vert a_n \vert \vert z \vert^n \leq \left(\frac{A}{\vert z_0\vert^n}\right)\vert z \vert^n = A \left\vert \frac{z_0}{z}\right\vert^n.$$
Let $r = \left\vert\frac{z_0}{z}\right\vert <1$.  Thus, the convergence of the geometric series (Lecture 11) and the comparison theorem implies that the series $\sum a_n z^n$ converges absolutely if $\vert z \vert < \vert z_0 \vert$.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.12</span>

Assume the power series $\sum a_n z^n$ does not converge absolutely for all $z$, that is, there exists some $z_0$ such that $\sum a_n (z_0)^n$ does not converge absolutely.  Then, there exists a positive real number $r$ such that $\sum a_n z^n$ converge absolutely if $\vert z\vert <r$ and does not converge absolutely if $\vert z\vert >r$.  


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Define $S:= \{x\in \mathbb{R}_{\geq 0} \ : \sum a_n x^n \text{ converge}\}$.  Notice that the set $S$ is non-empty as $0$ always belongs to $S$.  On the other hand, $S$ is bounded above by $\vert z_0 \vert$ (by Comparison theorem).  Thus, $S$ has a least upper bound, let this least upper bound be $r$.  As $r$ is the supremum of $S$, if you take $t = \vert z\vert >r$, then $\sum a_n t^n$ does not converge.  That is, the series $\sum a_n z^n$ does not converge absolutely.  On the other hand, if $t = \vert z \vert < r$, then $t$ is not an upper bound for $S$.  That means there exists an $s\in S$ such that $s > t$.  As $s\in S$, $\sum a_n s^n$ converge and hence by the comparison theorem $\sum a_n t^n$ converge.  That is, the series $\sum a_n z^n$ converge absolutely.

</details>
</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 3.10 (Radius of convergence)</span>

Let $\sum a_n z^n$ be a power series.  If the series converges absolutely for all $z$, then we will say the the radius of convergence is infinity.  Else, the unique $r$ given by Theorem **3.12** is called the radius of convergence.

</div>


In fact, Theorem **3.11** helps us make the implication of Theorem **3.12** a bit stronger.  


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.13</span>

Let $\sum a_n z^n$ be a power series and $r$ its radius of convergence.  If $\vert z_0\vert > r$, then $\sum a_n (z_0)^n$ does not converge (not even conditionally).

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let us use proof by contradiction.  Assume that $\sum a_n (z_0)^n$ converge.  Then, by Theorem **3.11**, $\sum a_n z^n$ will converge absolutely if $\vert z\vert < \vert z_0 \vert$.  As $\vert z_0 \vert >r$, there exists $z_1$ such that $r < \vert z_1 \vert < \vert z_0 \vert$.  Our assertion that $\sum a_n z^n$ will converge absolutely if $\vert z\vert < \vert z_0\vert$ implies that $\sum a_n (z_1)^n$ converge absolutely.  As $\vert z_1 \vert > r$, this contradicts the definition of radius of convergence.

</details>
</div>



<div class="academic-env env-remark">
<span class="env-label">Remark 3.3</span>

Thus, given a power series $\sum a_n z^n$ with radius of convergence $r$, $\sum a_n (z_0)^n$ can converge conditionally only if $\vert z_0 \vert = r$.  Hence, it makes even more sense to focus only on absolute convergence.

</div>




<div class="academic-env env-example">
<span class="env-label">Example 3.9</span>

Consider the power series $\sum z^n$.  We know that the series does not converge if $z = 1$.  Thus, the radius of convergence is less than or equal to $1$.  On the other hand, $\vert z\vert < 1$, then comparison with the geometric series tells us that $\sum a_n z^n$ is absolutely convergent.  Hence, $[0,1) \subset S = \{x\in \mathbb{R}_{\geq 0} \ : \ \sum a_n x^n \text{ converges} \}$.  Therefore, the radius of convergence is greater than or equal to $1$.  Hence, the radius of convergence should be equal to $1$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.10</span>

Consider the power series $\sum n^n z^n$.  Notice that if $\vert z\vert \neq 0$, then for large enough $n$, $n\vert z \vert > 1$ and hence the sequence $(n\vert z\vert)^n$ does not converge to $0$.  Thus, the series $\sum n^n z^n$ does not converge absolutely if $\vert z\vert >0$.  Therefore the radius of convergence is equal to $0$.

</div>


So, we would like to find the radius of convergence of any power series.  There is a nice expression for the radius of convergence of a power series, but it uses the notion of $\limsup$.  


<div class="academic-env env-definition">
<span class="env-label">Definition 3.11</span>

Let $(x_n)_{n=1}^{\infty}$ be a bounded sequence of real numbers.  As the sequence is bounded above, Bolzano-Weierstrass theorem says that there exist a convergent subsequence.  Thus,  the collection of sub-sequential limits $S$ is non-empty and bounded above by every upper bound of the sequence.  Thus, $S$ has a supremum.  Define,  
$$\limsup_{n\to \infty} x_n = \sup(S).$$

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.14</span>

Compute the $\limsup$ of the following sequences.

- $x_n = \frac{1}{n}$
- $x_n = (-1)^n$


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 3.15</span>

Consider a bounded sequence $x_n$.  Let $s = \sup \{x_n : n\in \mathbb{N}\}$.  Show that if $s\notin \{x_n : n\in \mathbb{N}\}$, then $s = \limsup x_n$.

</div>


First, we would like another characterisation of $\limsup$, which would prove more helpful. 


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.14</span>

Let $x_n$ be a bounded sequence.  Then $\lambda = \limsup (x_n)$ iff  given $\varepsilon>0$, there exists only finitely many $n$ such that $x_n \geq \lambda +\varepsilon$ and there exists infinitely many $n$ such that $x_n \geq \lambda - \varepsilon$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

First we will assume $\lambda = \limsup (x_n)$ and prove that given $\varepsilon>0$, there exists only finitely many $n$ such that $x_n \geq \lambda +\varepsilon$ and there exists infinitely many $n$ such that $x_n \geq \lambda - \varepsilon$.  

If there exists infinitely many $n$ such that $x_n \geq \lambda + \varepsilon$, then these elements form a subsequence $x_{n_k}$ such that $x_{n_k} \geq \lambda + \varepsilon$.  However, as $x_n$ is bounded, so is $x_{n_k}$.  Thus, by Bolzano-Wiestrass theorem, some subsequence of $x_{n_k}$ will converge.  As we could have started with this subsequence, we will continue to denote the subsequence as $x_{n_k}$.  As $x_{n_k} \geq \lambda + \varepsilon$, $\lim x_{n_k} \geq \lambda + \varepsilon$.  That is, there is a subsequential limit greater than $\lambda + \varepsilon$ which contradicts the assumption that $\lambda = \limsup (x_n)$.  

On the other hand, as $\lambda = \limsup (x_n)$, given $\varepsilon >0$, $\lambda - \frac{\varepsilon}{2}$ is not an upper bound for subsequential limits.  Thus, there exists some subsequence $x_{n_k}$ which converge to a value $x$ greater than $\lambda - \frac{\varepsilon}{2}$.  Further, as $x_{n_k}$ converges to $x$, there exists some $N$ such that $$\lambda - \varepsilon = \left(\lambda - \frac{\varepsilon}{2}\right) -\frac{\varepsilon}{2} < x-\frac{\varepsilon}{2} < x_{n_k} < x+ \frac{\varepsilon}{2}$$
for all $k\geq N$.  Thus, we have infinitely many $n$ ($x_{n_k}$ for $k\geq N$) such that $x_n \geq \lambda -\varepsilon$.  

Now, we will assume $\lambda$ is a number such that there exists only finitely many $n$ such that $x_n \geq \lambda +\varepsilon$ and there exists infinitely many $n$ such that $x_n \geq \lambda - \varepsilon$ and prove $\lambda = \limsup (x_n)$.  

Fix an $\varepsilon > 0$ arbitrarily.  As there are only finitely many $n$ such that $x_n \geq \lambda + \varepsilon$, all subsequential limits have to be less than or equal to $\lambda + \varepsilon$.  Hence, $\limsup (x_n) \leq \lambda + \varepsilon$.  As $\varepsilon > 0$ was arbitrary, this implies $\limsup (x_n) \leq \lambda$.

On the other hand, as there are infinitely many $n$ for which $x_n \geq \lambda - \varepsilon$, Bolzano-Wiestrass theorem implies (as discussed earlier) that there is a subsequential limit greater than or equal to $\lambda - \varepsilon$.  Hence, $\limsup (x_n) \geq \lambda - \varepsilon$.  As $\varepsilon > 0$ was arbitrary, this implies $\limsup (x_n) \geq \lambda$.

Combining the two inequalities we have $\lambda = \limsup (x_n)$.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.15</span>

Let $\sum a_n z^n$ be a power series and let $r$ be its radius of convergence.  Then $$\frac{1}{r} = \limsup |a_n|^{\frac{1}{n}}.$$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $t = \limsup |a_n|^{\frac{1}{n}}$ and $t \neq 0,\infty$.  Given $\varepsilon >0$, there exists only finitely many $n$ such that $|a_n|^{\frac{1}{n}} \geq t+\varepsilon$.  Thus, for all but finitely many $n$, we have $|a_n| \leq (t+\varepsilon)^n$.  Let $k$ be such that $\vert a_n\vert \leq (t+\varepsilon)^n$.  Thus, we have 
$$
\begin{align*}
\sum |a_n z^n| &\leq \sum_{n=0}^k \vert a_n z^n \vert + \sum_{n=k}^{\infty} \vert a_n z^n \vert\\
&\leq \sum_{n=0}^k \vert a_n\vert \vert z\vert^n + \sum_{n=k}^{\infty} ((t+\varepsilon)\vert z\vert)^n\\
&= \sum_{n=0}^k \left((t+\varepsilon) \vert z\vert\right)^n + \sum_{n=0}^k \left(\vert a_n \vert - (t+\varepsilon)^n\right) \vert z \vert^n + \sum_{n=k}^{\infty} \left((t+\varepsilon) \vert z\vert\right)^n\\
&= A + \sum_{n=0}^{\infty} (|z|(t+\varepsilon))^n
\end{align*}
$$
where $$A = \sum_{n=0}^k \left(\vert a_n \vert - (t+\varepsilon)^n\right) \vert z \vert^n.$$ As the series $\sum (|z|(t+\varepsilon))^n$ converge if $|z|(t+\varepsilon) < 1$, or in other words, $|z| < \frac{1}{t+\varepsilon}$.  Thus, $r\geq \frac{1}{t+\varepsilon}$ for all $\varepsilon>0$.  Thus, $r\geq \frac{1}{t}$.

Conversely, given $\varepsilon$, there exists infiniely many $n$ such that $|a_n|^{\frac{1}{n}}\geq t-\varepsilon$.  Hence, the series does not converge if $|z| = t-\varepsilon$.  Therefore, $r\leq \frac{1}{t-\varepsilon}$ for all $\varepsilon >0$.  Thus, $r\leq \frac{1}{t}$.

Combining the two inequalities, we have the required result.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.16</span>

Let $a_n$ be a sequence of positive numbers, and assume that 
$$\lim \frac{a_{n+1}}{a_n} = A \geq 0 \text{.  Then } \lim \left(a_n\right)^{\frac{1}{n}} = A.$$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Given $\varepsilon > 0$, there exists an $n_0$ such that $$A-\varepsilon \leq \frac{a_{n+1}}{a_n}\leq A + \varepsilon$$
if $n\geq n_0$.  Thus, $$A-\varepsilon \leq \frac{a_{n_0+1}}{a_{n_0}}\leq A + \varepsilon,$$
that is $a_{n_0}(A-\varepsilon)\leq a_{n_0+1} \leq a_{n_0}(A + \varepsilon)$.  Similarly, $$A-\varepsilon \leq \frac{a_{n_0+2}}{a_{n_0 + 1}}\leq A + \varepsilon,$$ that is $a_{n_0 + 1}(A-\varepsilon)\leq a_{n_0+2} \leq a_{n_0 + 1}(A + \varepsilon)$.  But, $a_{n_0 + 1}\geq a_{n_0}(A - \varepsilon)$ and $a_{n_0 + 1}\leq a_{n_0}(A + \varepsilon)$.  Thus, $a_{n_0}(A-\varepsilon)^2 \leq a_{n_0 + 2} \leq a_{n_0}(A + \varepsilon)^2$.  More generally, using induction, we can prove $a_{n_0}(A -\varepsilon)^k \leq a_{n_0 + k} \leq a_{n_0}(A + \varepsilon)^k$.  Thus, $a_{n_0}(A-\varepsilon)^{-n_0}(A-\varepsilon)^n \leq a_n \leq a_{n_0}(A+\varepsilon)^{-n_0}(A + \varepsilon)^n$. 
Define $C_1(\varepsilon) = a_{n_0}(A-\varepsilon)^{-n_0}$ and $C_2(\varepsilon) = a_{n_0}(A + \varepsilon)^{-n_0}$.  Then, we have, 
$$C_1(\varepsilon)(A - \varepsilon)^n \leq a_n \leq C_2(\varepsilon)(A + \varepsilon)^n.$$

*Case 1: $A > 0$*\\
Take $\varepsilon < A$.  Then, $(A-\varepsilon)$ is positive and hence we can take $n$-roots of $C_i(\varepsilon)$ and $A-\varepsilon$.  As $C_1(\varepsilon)^{\frac{1}{n}}$ and $C_2(\varepsilon)^{\frac{1}{n}}$ both tend to $1$ as $n$ tends to infinity, we get, 
$$A-\varepsilon \leq (a_n)^{\frac{1}{n}} \leq A + \varepsilon$$ for all $\varepsilon >0$.

*Case 2: $A = 0$*\\
As $a_n$ is positive and $A-\varepsilon < 0$, we can improve our inequalities to get
$$0 \leq a_n \leq C_2(\varepsilon)(A + \varepsilon)^n.$$
As $C_2(\varepsilon)^{\frac{1}{n}}$ tend to $1$ as $n$ tends to infinity, we get, 
$$ 0 \leq (a_n)^{\frac{1}{n}} \leq A + \varepsilon$$ for all $\varepsilon >0$.

Thus, in either case we have proved that $\left(a_n\right)^{\frac{1}{n}}$ converges to $A$.

</details>
</div>


We can use this observation to construct a series that converge absolutely for all $z\in \mathbb{C}$.  Notice that if $$\lim_{n\to\infty} \frac{\vert a_{n+1} \vert}{\vert a_n\vert} = 0$$ then the power series will converge for all $z\in \mathbb{C}$.  As we are choosing the series, we can ofcourse choose $a_n > 0$ for all $n$ and $a_0 = 1$.   And, the simplest example of a sequence that converge to $0$ is the obviously the sequence $\frac{1}{n}$.  Thus, if we want $\lim \left( a_{n+1}/a_n\right) = 0$, a natural option would be to set $a_{n+1}/a_n = 1/n$.  However, as the indices for power series start with $0$ instead of $1$, this leads to the problem of division by $0$.  Thus, we make a small modification and set $a_{n+1}/a_n = 1/(n+1)$.  That is, $a_{n+1} = a_n/(n+1)$.  Thus,
$$a_1 = \frac{a_0}{1} = 1$$
$$a_2 = \frac{a_1}{2} = \frac{1}{2}$$
$$a_3 = \frac{a_2}{3} = \frac{1}{3!}$$
$$a_4 = \frac{a_3}{4} = \frac{1}{4!}$$
and more generally, using induction, you may prove that
$$a_n = \frac{1}{n!}$$
This tells us that the power series 
$$\sum_{n=0}^{\infty}\frac{1}{n!}z^n$$
converge for all $z$.  But, recall that this is the familiar exponential series.  Of course we are interested in the exponential function because of its practical use (that it is ubiquitous in nature). The fact that a purely theoretical speculation gives the power series representation of THAT function seems magical.  This observation was made by my friend G.P Balakumar and I was completely mesmerised when I first heard it.  

The explicit formula for computing the radius of convergence also allows us to infer convergence of sum, product and quotient of two power series.  We will end this lecture discussing these properties.  


<div class="academic-env env-lemma">
<span class="env-label">Lemma 3.4</span>

Suppose $\sum a_n z^n$ has a radius of convergence greater than $0$.  Then given $0<s<r$, there exists $C >0$ such that $|a_n|s^n \leq C$ for all $n$.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $s < r$, we know $\sum |a_n|s^n$ converge absolutley.  Thus, $\lim |a_n|s^n$ converge to $0$ and hence is bounded.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.17</span>

If $f = \sum a_n z^n$ and $g = \sum b_n z^n$ are power series that converge absolutely on $D(0,r)$, the $f+g$ converge absolutely on $D(0,r)$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Applying Lemma **3.4** to the two series, we get $C_1$ such that $|a_n|s^n < C_1$ and $C_2$ such that $|b_n|s^n < C_2$.  Let $C$ be the maximum of $C_1$ and $C_2$.  Then $|a_n| < \frac{C}{s^n}$ and $|b_n| < \frac{C}{s^n}$.  Thus, $|a_n + b_n| \leq |a_n| + |b_n| < \frac{2C}{s^n}$.  As, $(2C)^{\frac{1}{n}}$ converge to $1$ as $n$ tend to infinity, we get $\limsup |a_n + b_n|^{\frac{1}{n}} < \frac{1}{s}$.  Hence the radius of convergence of $f+g$ is greater than or equal to $s$.  As $s<r$ was arbitrary, radius of convergence of $f+g$ is greater than or equal to $r$.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.18</span>

If $f = \sum a_n z^n$ and $g = b_n z^n$ are power series that converge absolutely on $D(0,r)$, the $fg = \sum_{n=0}^{\infty} \left(\sum_{k=0}^{\infty}a_kb_{n-k}\right)z^n = \sum c_n z^n$ converge absolutely on $D(0,r)$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Applying Lemma **3.4** to the two series, we get $C_1$ such that $|a_n|s^n < C_1$ and $C_2$ such that $|b_n|s^n < C_2$.  Let $C$ be the maximum of $C_1$ and $C_2$.  Then $|a_n| < \frac{C}{s^n}$ and $|b_n| < \frac{C}{s^n}$.  Thus, 
$$|c_n| \leq \sum_{k=0}^n |a_k||b_{n-k}| \leq \sum_{k=0}^{\infty} \frac{C}{s^k}\frac{C}{s^{n-k}} = \frac{C^2}{s^n}.$$  As, $(C^2)^{\frac{1}{n}}$ converge to $1$ as $n$ tend to infinity, we get $\limsup |c_n|^{\frac{1}{n}} < \frac{1}{s}$.  Hence the radius of convergence of $fg$ is greater than or equal to $s$.  As $s<r$ was arbitrary, radius of convergence of $fg$ is greater than or equal to $r$.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.19</span>

Suppose $f = \sum a_n z^n$ has non-zero constant term and non-zero radius of convergence, then $\frac{1}{f}$ has non-zero radius of convergence.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

If $a_0\neq 0$, then $g = a_0^{-1}f$ has a non-zero radius of convergence and the constant term is equal to $1$.  Notice that $\frac{1}{f} = a_0 \frac{1}{g}$.  Thus, it is enough to prove that $\frac{1}{g}$ has a non-zero raidus of convergence.  In other words, we may assume that the constant term is $1$.  

Thus, $f = 1 + a_1 z + a_2 z^2 + \dots = 1 - h(z)$.  Therefore $\frac{1}{f(z)} = 1 + h(z) + h(z)^2 + \dots$.  By Lemma **3.4** we know that $|a_n| \leq \frac{C}{s^n}$.  That is $|a_n| < \left(\frac{C^{\frac{1}{n}}}{s}\right)^n$.  Denote $A = \frac{C^{\frac{1}{n}}}{s}$ and we have $|a_n| < A^n$.  So, if $|z| < \frac{1}{2}$, then
$$\vert h(z)\vert\leq \left\vert \sum_{n=1}^{\infty} A^nz^n \right\vert = \left\vert \frac{Az}{1-Az}\right\vert.$$
Thus, the power series $1+h(z)+h(z)^2+\dots$ converge if
$$\left\vert \frac{Az}{1-Az}\right\vert < 1.$$
That is $\vert Az\vert < \vert 1-Az\vert$.  We know $\vert 1-Az\vert \geq \vert 1 - \vert Az\vert\vert$.  Thus, it is enough to ensure $\vert Az \vert < \vert 1 - \vert Az\vert\vert$.  In other words, $1-\vert Az \vert < -\vert Az\vert$ or $1-\vert Az \vert > \vert Az\vert$.  As the first inequality is impossible, it is enough to check for what values of $z$ is $1-\vert Az \vert > \vert Az\vert$.  And this happens precisely when $\vert z\vert < 1/(2A)$

</details>
</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">3.5 Point-wise convergence</summary>



We intuitively feel that given a formal power series $f = \sum a_n z^n$, the sequence of polynomials $f_k = \sum_{n=0}^k a_n z^n$ converge to the power series $f$.  To make this precise, we need a formal definition of convergence of a sequence of functions.  Convergence of a sequence of functions can be defined in multiple ways and we will start with the simplest definition.  


<div class="academic-env env-definition">
<span class="env-label">Definition 3.12</span>

We say $f_n:\mathbb{R} \to \mathbb{R}$ **converges  pointwise** to $f:\mathbb{R} \to\mathbb{R}$ if $f_n(x)$ converges to $f(x)$ for all $x\in \mathbb{C}$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.11</span>

Consider the function $f_n:\mathbb{R} \to \mathbb{R}$ defined as $f_n(x) = \left(1 - \frac{1}{n}\right)x$.  It is clear that for each $x$, the sequence $\left(1 - \frac{1}{n}\right)x$ converge to $x$.

</div>


More generally, 


<div class="academic-env env-example">
<span class="env-label">Example 3.12</span>

A sequence of polynomials $a_{k,n}z^k + a_{k-1,n}z^{k-1}+\dots a_{0,n}$ will converge pointwise to the polynomial $a_kz^k + a_{k-1}z^k-1 + \dots a_0$, if $a_{i,n}$ converge to $a_i$ for $0\leq i \leq k$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.13</span>

Let $f_n:\mathbb{R} \to \mathbb{R}$ be the function defined as
$$f_n(x) = \begin{cases}-1 & \text{if } x\leq \frac{-1}{n}\\ nx & \text{if } \vert x\vert <\frac{1}{n}\\ 1 & \text{if } x\geq \frac{+1}{n}\end{cases}.$$
Given any $x> 0$, you can find an $N$ large enough such that $x \geq \frac{1}{N}$.  Thus, $f_n(x) = 1$ for all $n\geq N$.  Thus, we know that $f_n(x)$ converge to $1$.  Similarly, if $f_n(x)<0$, then $f_n(x)$ converge to $-1$.  On the other hand, $f_n(0) = 0$ for all $n$.  Thus, $f_n(0)$ converge to the function $0$.  Thus, the sequence of functions $f_n$ converge to the function $f:\mathbb{R} \to \mathbb{R}$ defined as 
$$f(x) = \begin{cases}-1 & \text{if } x<0 \\ 0 & \text{if } x = 0\\ 1 & \text{if } x>0\end{cases}.$$
Notice that each $f_n$ is continuous, but the limit $f$ is not continuous.  We opt for stronger notions of convergence to ensure that the limit inherits certain nice properties.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.14</span>

Let $f_n:\mathbb{R} \to \mathbb{R}$ be the function defined as $f_n(x) = \frac{1}{n}\chi_{(0,n)}$.  If $x \leq 0$, the sequence $f_n(x)$ is the constant sequence containing just $0$.  On the other hand, if $x>0$, then eventually (once $x$ becomes less than $n$) it becomes the constant sequence $0$.  Thus, the whole sequence converges to $0$.  

Notice something interesting - $\int f_n = 1$ for all $n$, but $\int f = 0$.  Thus, this is an example of a sequence of functions such that $f_n \to f$ but $\int f_n \not\to \int f$.  Once again, if $f_n$ converges to $f$, we would like $\int f_n$ to converge to $\int f$.  After all, the Riemann integral of a function $f$ is obtained as a the limit of the integrals of a sequence of step functions $f_n$ that converge to $f$.   %converges pointwise and uniform, not on-average

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.15</span>

Let $f_n:\mathbb{R} \to \mathbb{R}$ be the function defined as $f_n(x) = \chi_{(n,n+1)}$.  Eventually (once $x$ becomes less than $n$) the sequence $f_n(x)$ becomes the constant sequence $0$.  Thus, the whole sequence converges to $0$. %converges pointwise, not uniform or on-average.


</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.16</span>

Let $f_n:\mathbb{R} \to \mathbb{R}$ be the function defined as $f_n(x) = n\chi_{[0,\frac{1}{n}]}$.  If $x < 0$, the sequence $f_n(x)$ is the constant sequence containing just $0$.  On the other hand, if $x>0$, then eventually (once $x$ becomes greater than $\frac{1}{n}$) it becomes the constant sequence $0$.  Thus, the whole sequence converges to $0$.  However, when $x=0$, the sequence $f_n(x) = n$ and therefore does not converge.  Therefore, the sequence $f_n(x)$ does not converge pointwise to any function $f$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.17</span>

Let $f_n:\mathbb{R} \to \mathbb{R}$ be the function defined as $$f_n(x) = \begin{cases} 0 & \text{if } x\leq 0\\ x^n & \text{if } x\in (0,1)\\ 1& \text{if } x\geq 1 \end{cases}.$$
If $x\not\in (0,1)$, then  the sequence $f_n(x)$ is a constant sequence. If $x\in (0,1)$, then the sequence is not constant, but we know it converges to $0$.  Thus, the limit is the function $f:\mathbb{R} \to \mathbb{R}$ defined as 
$$f(x) = \begin{cases}0 & \text{if } x<1\\ 1& \text{if } x\geq 1 \end{cases}.$$ 


</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.18</span>

Let $f_n:\mathbb{R}\to \mathbb{R}$ be the function defined as $$f_n(x) = \begin{cases} \frac{1}{nx} &\text{if } x>0\\ 0 &\text{otherwise} \end{cases}$$ and $f:\mathbb{R}\to \mathbb{R}$ be the function $f(x) = 0$.  If $x \leq 0$, the sequence $f_n(x)$ is the constant sequence containing just $0$.  On the other hand, if $x>0$, then $\frac{1}{x}$ is a positive number $c$ and $\frac{c}{n}$ converges to $0$.  Thus, $f_n$ converges to $f$ pointwise. 


</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.19</span>

Let $r_i$ be an enumeration of rational numbers.  Define $$f_n(x) = \begin{cases} 1 & \text{if } x = r_i \text{ for some } i<n\\0 &\text{otherwise}\end{cases}.$$
Notice that the sequence $f_n(x)$ converge to the Dirichlet function
$$f(x) = \begin{cases} 1 & \text{if } x \in \mathbb{Q}\\0 &\text{otherwise}\end{cases}.$$
Notice that each of the functions $f_n$ is discontinuous only at finitely many points, but the limit is discontinuous everywhere!


</div>


### Devil's staircase

Consider a recursively defined sequence of function, $f_0(x) = x$ and 
$$f_{n+1}(x) = \begin{cases}
\frac{f_n(3x)}{2} & \text{if } x\in [0,\frac{1}{3}]\\
\frac{1}{2 } & \text{if } x\in [\frac{1}{3},\frac{2}{3}]\\
\frac{f_n(3x-2) + 1}{2} & \text{if } x\in [\frac{2}{3},1]
\end{cases}.$$

Let $f:[0,1]\to \mathbb{R}$ be the function defined as follows.  If $a$ belongs to the Cantor set, that is $a$ is of the form $a = \sum_{n=1}^{\infty} \frac{2a_n}{3^n} \text{ for } a_n\in \{0,1\}$, then $f(a) = \sum_{n=1}^{\infty} \frac{a_n}{2^n}$.  If $a = \sum_{n=1}^{\infty} \frac{a_n}{3^n}$ does not belong the Cantor set.  Define $N = \min\{n\in \mathbb{N} : a_n = 1\}$ and $f(a) = \sum_{i=1}^{N-1} \frac{a_i}{2^{i+1}} + \frac{1}{2^{N}}$. 


<div class="academic-env env-lemma">
<span class="env-label">Lemma 3.5</span>

If $a$ belongs to the Cantor set, that is $a$ is of the form $a = \sum_{i=1}^{\infty} \frac{2a_i}{3^i} \text{ for } a_i\in \{0,1\}$, then, $$f_n\left(\sum_{i=1}^{\infty} \frac{2a_i}{3^i}\right) = \frac{f_0\left(\sum_{i=n+1}^{\infty} \frac{2a_i}{3^{i-n}}\right)}{2^n} + \sum_{i=1}^n \frac{a_i}{2^{i}}$$


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We will prove the claim using induction.  First notice that, $a\in [0,\frac{1}{3}]$ iff $a_1 = 0$.  Thus, if $a_1 = 0$, 
$$f_{m}(a) = \frac{f_{m-1}\left(3\times \sum_{i=1}^{\infty} \frac{2a_i}{3^i}\right)}{2} = \frac{f_{m-1}(2a_1 + \sum_{i=2}^{\infty} \frac{2a_i}{3^{i-1}})}{2} = \frac{f_{m-1}(\sum_{i=2}^{\infty} \frac{2a_i}{3^{i-1}})}{2}.$$
Similarly, $a\in [\frac{2}{3},1]$ iff $a_1 = 1$.  Thus, if $a_1 = 1$,
$$f_{m}(a) = \frac{f_{m-1}\left(3\times \sum_{i=1}^{\infty} \frac{2a_i}{3^i} - 2\right)}{2} + \frac{1}{2} = \frac{f_{m-1}(2a_1 - 2 + \sum_{i=2}^{\infty} \frac{2a_i}{3^{i-1}})}{2} +\frac{1}{2} = \frac{f_{m-1}(\sum_{i=2}^{\infty} \frac{2a_i}{3^{i-1}})}{2} + \frac{1}{2}.$$
Combining the two results, we have
$$f_{m}(a) = \frac{f_{m-1}(\sum_{i=2}^{\infty} \frac{2a_i}{3^{i-1}})}{2} + \frac{a_1}{2}. $$
Thus, by taking $m=0$, we have proved base case of the theorem, that is when $n=1$.  We will now assume the statement is true when $n=k$ and prove the statement for $n=k+1$.
$$
\begin{align*}
f_{k+1}(a) &= \frac{f_{k}\left(\sum_{i=2}^{\infty} \frac{2a_i}{3^{i-1}}\right)}{2} + \frac{a_1}{2}\\
&= \frac{\frac{f_0\left(\sum_{i=k+2}^{\infty} \frac{2a_i}{3^{i- k - 1}}\right)}{2^k} + \sum_{i=2}^{k+1} \frac{a_i}{2^{i}}}{2} + \frac{a_1}{2}\\
&= \frac{f_0\left(\sum_{i=k+2}^{\infty} \frac{2a_i}{3^{i-k-1}}\right)}{2^{k+1}} + \sum_{i=1}^{k+1} \frac{a_i}{2^{i}}
\end{align*}
$$

</details>
</div>


Notice that $\frac{a_i}{2^i} \leq \frac{1}{2^{i-1}}$ and $\sum \frac{1}{2^{i-1}}$ converges to $2$.  Thus, $\sum \frac{a_i}{2^i}$ converges as $n$ tends to zero.  Moroever, $\frac{f_0\left(\sum_{i=n+1}^{\infty} \frac{2a_i}{3^{i-n}}\right)}{2^n}$ converges to $0$ as $n$ tends to $\infty$.  Thus, we have


<div class="academic-env env-lemma">
<span class="env-label">Lemma 3.6</span>

If $a$ belongs to the Cantor set, that is $a$ is of the form $a = \sum_{i=1}^{\infty} \frac{2a_i}{3^i} \text{ for } a_i\in \{0,1\}$, then, $f_n\left(\sum_{i=1}^{\infty} \frac{2a_i}{3^i}\right)$ converges to $\sum_{i=1}^{\infty} \frac{a_i}{2^{i}}$.


</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 3.7</span>

If $a_1=1$, then $a = \sum_{i=1}^{\infty} \frac{a_i}{3^i} \in [\frac{1}{3},\frac{2}{3}]$.  Thus, $f_n(a) = \frac{1}{2}$ for all $n$.

</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 3.8</span>

Let $a = \sum_{i=1}^{\infty} \frac{a_i}{3^i}$ belong to the complement of the Cantor set.  Define $N = \min\{i\in \mathbb{N} : a_i = 1\}$.  Then, for $n > N$,
$$f_n(a) = \sum_{i=1}^{N-1} \frac{a_i}{2^{i+1}} + \frac{1}{2^{N}}.$$
As $f_n(a)$ is eventually constant, it converges to the same value.  


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $a_i \in \{0,2\}$ when $i<N$, using the same arguments as before, when $m < N$ 
$$f_{m+k}\left(\sum_{i=1}^{\infty} \frac{a_i}{3^i}\right) = \frac{f_k\left(\sum_{i=n+1}^{\infty} \frac{a_i}{3^{i-n}}\right)}{2^m} + \sum_{i=1}^m \frac{a_i}{2^{i+1}}.$$
Thus, given $n>N$, take $m = N-1$ and $k= n-N+1$.  Then, we have
$$f_{n}\left(\sum_{i=1}^{\infty} \frac{a_i}{3^i}\right) = \frac{f_{n-N+1}\left(\sum_{i=N}^{\infty} \frac{a_i}{3^{i-N+1}}\right)}{2^{N-1}} + \sum_{i=1}^{N-1} \frac{a_i}{2^{i+1}}.$$
But, by previous lemma $f_{n-N+1}\left(\sum_{i=N}^{\infty} \frac{a_i}{3^{i-N+1}}\right) = \frac{1}{2}$ for all $n>N$ and thus we have the result.

</details>
</div>


Combining Lemma **3.6** and Lemma **3.8** we have


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.20</span>

The sequence $f_n$ converges pointwise to $f$.

</div>


### Galloping rectangles function

Let $N = \lfloor{\log_2(n)}\rfloor$ and $k = n \mod(2^N)$.  Define 
$$f_n(x) = \begin{cases} 1 & \text{if } \frac{k}{2^N}\leq x \leq \frac{k+1}{2^N}\\0 &\text{otherwise}\end{cases}$$


<div class="academic-env env-remark">
<span class="env-label">Remark 3.4</span>

Recall we saw that every inner product induced a norm, but not all norms are induced by an inner product.  Every norm induces a metric, but not all metrics are induced by a norm.  We finally saw that every metric induces a topology.  So, it is natural to ask if every topology is induced by a metric.  

When talking about topology of the complex plane, I talked as if defining a notion of convergence is equivalent to defining openness.  However, this is not true and I was lightly cheating you.

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">3.6 Uniform convergence</summary>




<div class="academic-env env-definition">
<span class="env-label">Definition 3.13</span>

We say a sequence $f_n:\mathbb{R} \to \mathbb{R}$ **converges uniformly** (or $L^{\infty}$ convergence) to a function $f:\mathbb{R} \to \mathbb{R}$ iff $$\lim_{n\to \infty} \sup \{|f_n(x) - f(x)| : x\in \mathbb{R}\} = 0.$$

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.21</span>

Let $\sum a_n z^n$ be a power series and $r$ be its radius of convergence.  Let $f:D(0,r)\to \mathbb{C}$ be the function $f(z) = \sum a_n z^n$ and $f_m:D(0,r)\to \mathbb{C}$ be the function $f_m(z) = \sum_{n=1}^m a_n z^n$.  If $0 < \rho <r$ Then, the sequence of functions $f_m$ converge unifomrly to the function $f$ on the set $D(0,\rho)$.  That is, 
$$\lim_{m\to \infty} \sup\{\vert f(z) -f_m(z) \vert \ : \ z\in D(0,\rho)\} = 0.$$


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $\rho < r$, we know $\sum a_n \rho^n$ converge.  Thus, given any $\varepsilon$, there exists an $N$ such that $\sum_{n=N+1}^{\infty}<\varepsilon$.  Now notice that 
$$\vert f(z) - f_m(z) \vert = \left\vert \sum_{n=m+1}^{\infty} a_n z^n \right\vert \leq \sum_{n=m+1}^{\infty} \vert a_n \vert \vert z \vert^n \leq \sum_{n=m+1}^{\infty} \vert a_n \vert  \rho^n.$$
Thus, for all $z\in D(0,\rho)$, $\vert f(z) - f_m(z) \vert <\varepsilon$ if $m > N$.  that is, $$\lim_{m\to \infty} \sup\{\vert f(z) -f_m(z) \vert \ : \ z\in D(0,\rho)\} = 0.$$

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 3.20</span>

Consider the function $f_n:\mathbb{R} \to \mathbb{R}$ defined as $f_n(x) = \left(1 - \frac{1}{n}\right)x$.  Notice that $$\sup \{|f_n(x) - f(x)| : x\in \mathbb{R}\} = \sup \left\{\left\vert \frac{x}{n} \right\vert\right\} = \infty.$$
Thus, this sequence does not converge uniformly.  However, if $f_n:[a,b] \to \mathbb{R}$ defined as $f_n(x) = \left(1 - \frac{1}{n}\right)x$ converges uniformly as 
$$\sup \{|f_n(x) - f(x)| : x\in \mathbb{R}\} = \sup \left\{\left\vert \frac{x}{n} \right\vert\right\} = \max\{\vert a\vert,\vert b\vert\}.$$

</div>




<div class="academic-env env-example">
<span class="env-label">Example 3.21</span>

Let $f_n:\mathbb{R} \to \mathbb{R}$ be the function defined as
$$f_n(x) = \begin{cases}-1 & \text{if } x\leq \frac{-1}{n}\\ nx & \text{if } \vert x\vert <\frac{1}{n}\\ 1 & \text{if } x\geq \frac{+1}{n}\end{cases}.$$
Then,
$$
\begin{align*}
\sup \{|f_n(x) - f(x)| : x\in \mathbb{R}\} &\leq \sup \left\{\left\vert f_n(x) - f(x) \right\vert : x\in \left[-\frac{1}{n},\frac{1}{n}\right]\right\}\\
&= \left\{\left\vert nx - 0 \right\vert : x\in \left[-\frac{1}{n},\frac{1}{n}\right]\right\} = 1.
\end{align*}
$$

</div>


The convergence is non-uniform can also be concluded from a more general result on the continuity of the uniform limit of continuous functions.  


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.22</span>

Let $A\subset \mathbb{C}$ and let $f_m:A\to \mathbb{C}$ be a sequence of continuous function that converge uniformly to the function $f:A\to \mathbb{C}$.  Then, $f$ is also continuous.   


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $\alpha \in A$ be arbitrary.  We will prove $f$ is continuous at $\alpha$.  
In other words, we want to prove, given any $\varepsilon$, there exists a $\delta$ such that $\vert f(z) - f(\alpha)\vert < \varepsilon$ if $\vert z - \alpha \vert <\delta$.  
Notice that 
$$\vert f(z) - f(\alpha)\vert \leq \vert f(z) - f_m(z)\vert + \vert f_m(z) - \vert f_m(\alpha)\vert + \vert f_m(\alpha) - f(\alpha)\vert.$$
Further, $\vert f(z) - f_m(z)\vert$ and $\vert f_m(\alpha) - f(\alpha)\vert$ are both less than or equal to $\sup\{\vert f(z) -f_m(z) \vert \ : \ z\in A\}$.  As $\sup\{\vert f(z) -f_m(z) \vert \ : \ z\in A\}$ converges to $0$, we can find an $N$ such that $\sup\{\vert f(z) -f_m(z) \vert \ : \ z\in A\} < \frac{\varepsilon}{3}$ for all $m > N$.  Thus, $\vert f(z) - f_m(z)\vert < \frac{\varepsilon}{3}$ and $\vert f_m(\alpha) - f(\alpha)\vert < \frac{\varepsilon}{3}$ for all $m > N$.  Finally, as $f_m$ is continuous at $\alpha$, we can find a $\delta$ such that $\vert f_m(z) - f_m(\alpha)\vert < \frac{\varepsilon}{3}$.  Thus, if $\delta$ and $N$ are chosen as above, then $\vert f(z) - f(\alpha)\vert < \varepsilon$ as required.

</details>
</div>


Combining the previous two results, we obtain,


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.23</span>

Let $\sum a_n z^n$ be a power series and $r$ be its radius of convergence.  Let $f:D(0,r)\to \mathbb{C}$ be the function $f(z) = \sum a_n z^n$.  Then $f$ is continuous on $D(0,r)$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We will prove that if $z_0$ is an arbitrary point in $D(0,r)$ then $f$ is continuous at $z_0$.  As $z_0\in D(0,r)$, $\vert z_0 \vert < r$.  Choose a $\rho$ such that $\vert z_0 \vert <\rho < r$.  Then, by Theorem **3.21**, we know the functions $f_m:D(0,\rho) \to \mathbb{C}$ defined as $f_m(z) = \sum_{n=1}^m a_n z^n$ converge uniformly to $f$ on $D(0,\rho)$.  As each $f_m$ is continuous on $D(0,\rho)$, and $f_m$ converge uniformly to $f$ on $D(0,\rho)$, $f$ is continuous on $D(0,\rho)$ by Theorem **3.22**.  As $z_0 \in D(0,\rho)$, $f$ is continuous on $z_0$.  As $z_0\in D(0,r)$ was arbitrary, we have proved that $f$ is continuous on $D(0,r)$.

</details>
</div>




<div class="academic-env env-example">
<span class="env-label">Example 3.22</span>

Let $f_n:\mathbb{R} \to \mathbb{R}$ be the function defined as $f_n(x) = \frac{1}{n}\chi_{(0,n)}$.  If $x \leq 0$, the sequence $f_n(x)$ is the constant sequence containing just $0$.  Notice that 
$$\sup\{\vert f_n(x) - f(x)\vert : x\in \mathbb{R}\} \leq \frac{1}{n}.$$
Thus, the sequence $f_n$ converge uniformly to $f$.  However, as we saw earlier, $\int f_n$ does not converge to $\int f$.  Thus, even the uniform limit is not too nice!

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 3.14 (Uniformly Cauchy)</span>

A sequence of functions $f_n: X \to \mathbb{R}$ is said to be **uniformly Cauchy** if for every $\varepsilon > 0$, there exists an $N\in \mathbb{N}$ such that $\forall x\in X$ and $\forall n,m > N$,  $\vert f_n(x) - f_m(x)\vert < \varepsilon$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.24</span>

A sequence of functions $f_n:A\to \mathbb{R}$ is uniformly Cauchy iff $f_n:A\to \mathbb{R}$ is uniformly convergent to some function $f:A\to \mathbb{R}$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Suppose $f_n$ converges to $f$ uniformly.  Then given any $\varepsilon$, we can find an $N$ such that  
$$\sup\{\vert f(x) - f_n(x)\vert x\in A\} < \frac{\varepsilon}{2}$$
for all $n>N$.  Moreover, if $x\in A$, then 
$$\vert f(x) - f_n(x)\vert \leq \sup\{\vert f(x) - f_n(x)\vert x\in A\} < \frac{\varepsilon}{2}.$$
Thus, if $n,m > N$, then by triangle inequality,
$$
\begin{align*}
\vert f_n(x) - f_m(x)\vert &= \vert f_n(x) -f(x) + f(x) - f_m(x)\vert \\
&\leq \vert f_n(x) - f(x) \vert + \vert f(x) - f_m(x)\vert\\
&\leq \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
\end{align*}
$$
for all $x\in A$.  

Suppose $f_n$ is uniformly Cauchy.  Thus, in particular, the sequence $f_n(x)$ is Cauchy for all $x\in A$.  Thus, by completeness of $\mathbb{R}$, $f_n(x)$ converges to some real number.  Define a function $f:A\to \mathbb{R}$ where 
$$f(x) = \lim_{n\to \infty}f_n(x).$$   
We will show that $f_n$ converges to $f$ uniformly.  Given any $\varepsilon>0$, let $N$ be a number such that $\vert f_n(x) - f_m(x) \vert < \frac{\varepsilon}{2}$ for all $n,m>N$.  Given any $x$, let $m$ be large enough that $\vert f_m(x) -f(x)\vert <\frac{\varepsilon}{2}$.  Then,
$$
\begin{align*}
\vert f_n(x) - f(x)\vert &= \vert f_n(x) - f_m(x) + f_m(x) - f(x)\vert\\
&\leq \vert f_n(x) - f_m(x)\vert + \vert f_m(x) -f(x)\vert\\
&\leq \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.
\end{align*}
$$
Thus, if $n > N$, then $\vert f_n(x) - f(x)\vert < \varepsilon$ for all $x\in A$.  Thus, $\sup\{\vert f(x) - f_n(x)\vert x\in A\} < \varepsilon$ for all $n>N$.

</details>
</div>


### Devil's staircase


<div class="academic-env env-lemma">
<span class="env-label">Lemma 3.9</span>

$$sup\{\vert f_{n+1}(x) - f_n(x) \vert : x\in [0,1] \}\leq \frac{1}{2}sup\{\vert f_{n}(x) - f_{n-1}(x) \vert : x\in [0,1] \}.$$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We will prove this using induction.  

**Base case - $n = 1$: ** 
We will first observe that 
$\sup\left\{\vert f_1(x) - f_0(x)\vert : x\in \left[0,1\right]\right\} = \frac{1}{6}$, by considering three cases.  
$$
\begin{align*}
\sup\left\{\vert f_1(x) - f_0(x)\vert : x\in \left[0,\frac{1}{3}\right]\right\} &= \sup\left\{\left \vert \frac{3x}{2} - x\right\vert : x\in \left[0,\frac{1}{3}\right]\right\}\\
&= \sup\left\{\left\vert \frac{x}{2}\right\vert : x\in \left[0,\frac{1}{3}\right]\right\} = \frac{1}{6}
\end{align*}
$$

$$
\begin{align*}
\sup\left\{\vert f_1(x) - f_0(x)\vert : x\in \left[\frac{1}{3},\frac{2}{3}\right]\right\} &= \sup\left\{\left \vert \frac{1}{2} - x\right\vert : x\in \left[\frac{1}{3},\frac{2}{3}\right]\right\} = \frac{1}{6}
\end{align*}
$$

$$
\begin{align*}
\sup\left\{\vert f_1(x) - f_0(x)\vert : x\in \left[\frac{2}{3},1\right]\right\} &= \sup\left\{\left \vert \frac{3x-1}{2} - x\right\vert : x\in \left[\frac{2}{3},1\right]\right\}\\
&= \sup\left\{\left \vert \frac{x - 1}{2} \right\vert : x\in \left[\frac{2}{3},1\right]\right\} = \frac{1}{6}
\end{align*}
$$

Now, we will use a similar analysis to show that $\sup\left\{\vert f_2(x) - f_1(x)\vert : x\in \left[0,1\right]\right\} = \frac{1}{12}$ which would complete the proof of the base case.  

$$
\begin{align*}
\sup\left\{\vert f_2(x) - f_1(x)\vert : x\in \left[0,\frac{1}{9}\right]\right\} &= \sup\left\{\left \vert \frac{f_1(3x)}{2} - \frac{3x}{2}\right\vert : x\in \left[0,\frac{1}{9}\right]\right\}\\
&= \sup\left\{\left \vert \frac{9x}{4} - \frac{3x}{2}\right\vert : x\in \left[0,\frac{1}{9}\right]\right\}\\
&= \sup\left\{\left\vert \frac{3x}{4}\right\vert : x\in \left[0,\frac{1}{9}\right]\right\} = \frac{1}{12}
\end{align*}
$$

$$
\begin{align*}
\sup\left\{\vert f_2(x) - f_1(x)\vert : x\in \left[\frac{1}{9},\frac{2}{9} \right]\right\} &= \sup\left\{\left \vert \frac{f_1(3x)}{2} - \frac{3x}{2}\right\vert : x\in \left[\frac{1}{9},\frac{2}{9}\right]\right\}\\
&= \sup\left\{\left \vert \frac{1}{4} - \frac{3x}{2}\right\vert : x\in \left[\frac{1}{9},\frac{2}{9}\right]\right\} = \frac{1}{12}.
\end{align*}
$$

$$
\begin{align*}
\sup\left\{\vert f_2(x) - f_1(x)\vert : x\in \left[\frac{2}{9},\frac{3}{9}\right]\right\} &= \sup\left\{\left \vert \frac{f_1(3x)}{2} - \frac{3x}{2}\right\vert : x\in \left[\frac{2}{9},\frac{3}{9}\right]\right\}\\
&= \sup\left\{\left \vert \frac{9x-1}{4} - \frac{6x}{4}\right\vert : x\in \left[\frac{2}{9},\frac{3}{9}\right]\right\}\\
&= \sup\left\{\left\vert \frac{3x-1}{4}\right\vert : x\in \left[\frac{2}{9},\frac{3}{9}\right]\right\} = \frac{1}{12}
\end{align*}
$$

$$
\begin{align*}
\sup\left\{\vert f_2(x) - f_1(x)\vert : x\in \left[\frac{1}{3},\frac{2}{3} \right]\right\} = \sup\left\{\left\vert \frac{1}{2} - \frac{1}{2}\right\vert : x\in \left[\frac{1}{3},\frac{2}{3} \right]\right\} = 0.
\end{align*}
$$

$$
\begin{align*}
\sup\left\{\vert f_2(x) - f_1(x)\vert : x\in \left[\frac{6}{9},\frac{7}{9}\right]\right\} &= \sup\left\{\left \vert \frac{f_1(3x-2) + 1}{2} - \frac{f_0(3x-2) + 1}{2}\right\vert : x\in \left[\frac{6}{9},\frac{7}{9}\right]\right\}\\
&= \sup\left\{\left \vert \frac{\frac{f_0(9x-6)}{2} + 1}{2} - \frac{3x-1}{2}\right\vert : x\in \left[\frac{6}{9},\frac{7}{9}\right]\right\}\\
&= \sup\left\{\left \vert \frac{9x-6 + 2 - 6x + 2}{4}\right\vert : x\in \left[\frac{6}{9},\frac{7}{9}\right]\right\}\\
&= \sup\left\{\left\vert \frac{3x - 2}{4}\right\vert : x\in \left[\frac{6}{9},\frac{7}{9}\right]\right\} = \frac{1}{12}
\end{align*}
$$

$$
\begin{align*}
\sup\left\{\vert f_2(x) - f_1(x)\vert : x\in \left[\frac{7}{9},\frac{8}{9}\right]\right\} &= \sup\left\{\left \vert \frac{f_1(3x-2) + 1}{2} - \frac{3x-2 + 1}{2}\right\vert : x\in \left[\frac{7}{9},\frac{8}{9}\right]\right\}\\
&= \sup\left\{\left \vert \frac{3}{4} - \frac{3x-1}{2}\right\vert : x\in \left[\frac{7}{9},\frac{8}{9}\right]\right\}\\
&= \sup\left\{\left \vert \frac{5 - 6x}{4}\right\vert : x\in \left[\frac{7}{9},\frac{8}{9}\right]\right\}= \frac{1}{12}
\end{align*}
$$

$$
\begin{align*}
\sup\left\{\vert f_2(x) - f_1(x)\vert : x\in \left[\frac{8}{9},\frac{9}{9}\right]\right\} &= \sup\left\{\left \vert \frac{f_1(3x-2) + 1}{2} - \frac{3x-2 + 1}{2}\right\vert : x\in \left[\frac{8}{9},\frac{9}{9}\right]\right\}\\
&= \sup\left\{\left \vert \frac{\frac{3(3x-2) - 2 + 1}{2} + 1}{2} - \frac{3x-1}{2}\right\vert : x\in \left[\frac{8}{9},\frac{9}{9}\right]\right\}\\
&= \sup\left\{\left \vert \frac{3x-3}{4}\right\vert : x\in \left[\frac{8}{9},\frac{9}{9}\right]\right\}= \frac{1}{12}
\end{align*}
$$



**Induction hypothesis: **  If $[a,b] = [0,\frac{1}{3}] \text{ or } [\frac{1}{3},\frac{2}{3}] \text{ or } [\frac{2}{3},1]$, then 
$$sup\{\vert f_{k+1}(x) - f_k(x) \vert : x\in [a,b] \}\leq \frac{1}{2}sup\{\vert f_{k}(x) - f_{k-1}(x) \vert : x\in [a,b] \}.$$

**Induction Step: **  

$$
\begin{align*}
sup\left\{\left\vert f_{k+1}(x) - f_k(x) \right\vert : x\in \left[0,\frac{1}{3}\right]\right\} &= sup\left\{\left\vert \frac{f_{k}(3x)}{2} - \frac{f_{k-1}(3x)}{2} \right\vert : x\in \left[0,\frac{1}{3}\right]\right\}\\
&= \frac{1}{2} sup\left\{\left\vert f_{k}(3x) - f_{k-1}(3x) \right\vert : x\in \left[0,\frac{1}{3}\right]\right\}\\
&\leq \frac{1}{4} sup\left\{\left\vert f_{k-1}(3x) - f_{k-2}(3x) \right\vert : x\in \left[0,\frac{1}{3}\right]\right\}\\
&= \frac{1}{2}sup\left\{\left\vert f_{k}(x) - f_{k-1}(x) \right\vert : x\in \left[a,b\right] \right\}
\end{align*}
$$

</details>
</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 3.10</span>

$$sup\{\vert f_{n+1}(x) - f_n(x) \vert : x\in [0,1] \} \leq \frac{1}{2^{n+1}}$$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Again we use a proof by induction.  The previous lemma gives us the base case.  Assume that the result is true for $n$, that is $sup\{\vert f_{n}(x) - f_{n-1}(x) \vert : x\in [0,1] \} \leq \frac{1}{2^n}$.  Combining the previous lemma and the induction hypothesis, we have
$$
\begin{align*}
sup\{\vert f_{n+1}(x) - f_n(x) \vert : x\in [0,1] \}\leq \frac{1}{2}sup\{\vert f_{n}(x) - f_{n-1}(x) \vert : x\in [0,1] \}\leq \frac{1}{2^{n+1}}
\end{align*}
$$

</details>
</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 3.11</span>

The sequence $f_n$ is uniformly cauchy and hence uniformly convergent.
%idea copied from 
%@MISC {1026354,
%TITLE = {Cantor Function (Abbott&#39;s Definition)},
%AUTHOR = {aram (https://math.stackexchange.com/users/77407/aram)},
%HOWPUBLISHED = {Mathematics Stack Exchange},
%NOTE = {URL:https://math.stackexchange.com/q/1026354 (version: 2014-11-18)},
%EPRINT = {https://math.stackexchange.com/q/1026354},
%URL = {https://math.stackexchange.com/q/1026354}
%}

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $\varepsilon$.  As the series $\sum \frac{1}{2^k}$ converges, there exists an $N$ such that if $n,m>N$ (we may assume without loss of generality that $n>m$), then $\sum_{k=m}^n \frac{1}{2^k} < \varepsilon$.  Thus, 
$$
\begin{align*}
\vert f_n(x) - f_m(x)\vert &\leq \vert f_n(x) - f_{n-1}(x)\vert + \dots + \vert f_{m+1}(x) - f_m(x)\vert\\
&\leq \frac{1}{2^n} + \dots + \frac{1}{2^m} < \varepsilon.
\end{align*}
$$
As $x$ was arbitrary, we have our result.

</details>
</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">3.7 Analytic functions</summary>



Earlier, we saw that a power series defines a continuous function on its disk of convergence.  It is natural to ask, if the functions corresponding to two power series agree on some neighbourhood of $0$, are the two power series necessarily the same?  First, we will state the question in a slightly more precise manner.  Let $\sum a_n z^n$ and $\sum b_n z^n$ be two convergent power series such that their radius of convergence is greater than $r$ and $\sum a_n z^n = \sum b_n z^n$ for all $z$ with $\vert z\vert <r$, then is $a_n = b_n$ for all $n\in \mathbb{N}$?  Subtracting one from the other, we get a power series $\sum c_n z^n = \sum (a_n - b_n)z^n = 0$ for all $\vert z\vert < r$.  Thus, the earlier question is equivalent to the question.  If $\sum c_n z^n$ is a convergent series with radius of convergence greater than $r$ and let $\sum c_n z^n = 0$ for all $z$ such that $\vert z\vert <r$, then is $c_n = 0$ for all $n\in \mathbb{N}$?  The following theorem answers the question in the affirmative by telling us that a lot more can be guaranteed - if the function is zero at the origin (that is $a_0 = 0$) but the coefficients are not identically zero, you can find some neighbourhood of $0$ with no additional zero in it.   


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.25</span>

Let $f(z) = \sum a_n z^n$ be a non-zero power series with a non-zero radius of convergence.  If $f(0) = 0$, then there exists $s>0$ such that $f(z)\neq 0$ if $0 < |z|<s$.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

As $f(0) = 0$, we can conclude that $a_0 = 0$.  Let $m$ be the smallest value for which $a_m\neq 0$.  As $a_m \neq 0$, we have,
$$f(z) = \lim_{k\to \infty} \sum_{n=m}^{m+k} a_n z^n = \lim_{k\to \infty} \left( a_m z^m \sum_{n=0}^{k} \frac{a_{m+n}}{a_m}z^{n} \right).$$
For $0 < \vert z\vert < r$, 
$$\lim_{k\to \infty} \left( a_m z^m \sum_{n=0}^{k} \frac{a_{m+n}}{a_m}z^{n} \right) \text{ and } \lim_{k\to \infty} \left(\frac{1}{a_m z^m}\right)$$ exist.  Thus, by the property of limits, it must be that 
$$g(z) = \sum_{n=0}^{\infty} \frac{a_{m+n}}{a_m}z^{n}.$$
converges.  Thus, the radius of convergence of $g$ is greater than or equal to $r$ and $f(z) = a_m z^m g(z)$ when $\vert z\vert < r$.  Further, for $n\geq 1$ define $b_n = \frac{a_{m+n}}{a_m}$ and $h(z) = \sum_{n=1}^{\infty} b_n z^n$.  Then, $f(z) = a_m z^m g(z) = a_m z^m (1+h(z))$ when $\vert z\vert < r$.  It is clear that $\sum_{n=1}^{\infty} b_n$ has a radius of convergence greater than or equal to $r$, just like $g$.  Thus, $h$ is continuous on $B(0,r)$ and $h(0) = 0$.  Thus, there exists some $s>0$ such that $\vert h(z)\vert < \frac{1}{2}$ for all $z\in B(0,s)$.  That is, $|1+h(z)| \geq \frac{1}{2}$ for all $z \in B(0,s)$.  Moreover, $a_m z^m \neq 0$ if $z\neq 0$.  Thus, $f(z) \neq 0$ for all $0 < \vert z \vert < s$.

</details>
</div>


This theorem will come in handy in several situations.  To give one example, the theorem allows us to prove 


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.26</span>

For every complex number $z$, $\cos^2(z) + \sin^2(z) = 1$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Follows from the above theorem and the fact that $\cos^2(x)+\sin^2(x) = 1$ for all real numbers $x$.

</details>
</div>


Let us now get back to the main theme of our course - the two recipes.  Recall Recipe 1, used the identification of $\mathbb{C}$ with $\mathbb{R}^2$ to construct functions from $\mathbb{C}$ to $\mathbb{C}$.  And Recipe 2 used the structure in $\mathbb{C}$ to construct functions.  Initially, we used the algebraic structure on $\mathbb{C}$ to construct polynomials (and rational functions).  However, as this is a very restrictive class of functions, our idea was to use the topological structure of $\mathbb{C}$ to take limits of polynomials and enlarge the class of functions.  This, led us to the study of formal power series and their convergence.  We now know that distinct power series give rise to distinct continuous functions on their disks of convergence.  However, it is still a bit unsatisfactory as their domains are somewhat restricted.  Moreover, why should origin be given any special treatment - all points are created equal!  Thus, we define, 


<div class="academic-env env-definition">
<span class="env-label">Definition 3.15 (Analytic function)</span>

Let $U$ be an open subset of $\mathbb{C}$.  We say a function $f:U \to \mathbb{C}$ is analytic at a point $z_0$ if there exists a power series $\sum a_n (z-z_0)^n$ with a non-zero radius of convergence $r$ and there exists some $0<d<r$ such that $f(z) = \sum a_n (z-z_0)^n$ for all $z$ such that $|z-z_0| < d$.

</div>


Moreover, by an analogue of Theorem **3.25** for power series at arbitrary points (which can be proved similarly, but with a bit more effort), we can see that this representation is in some sense unique.

We would now like to see some examples of analytic functions.  Of course, the most obvious example should be a power series in its disk of convergence.  Thankfully, the following theorem tells us that they are indeed analytic.  


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.27</span>

Suppose $f(z) = \sum a_n z^n$ be a power series whose radius of convergence is $r$.  Then $f$ is analytic on $D(0,r)$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

To prove this theorem, we will pick an arbitrary point $z_0$ and show that there is a power series expansion $\sum b_n (z-z_0)^n$ that converges in some neighbourhood of $z_0$ and $\sum a_n z^n = \sum b_n (z-z_0)^n$.  Notice,
$$
\begin{align*}
\sum a_n z^n &= \sum a_n (z_0 + (z-z_0))^n\\
&= \sum_{n=0}^{\infty} a_n \sum_{k = 0}^n {n \choose k}z_0^{n-k}(z-z_0)^k\\
&= \sum_{k=0}^{\infty} \left[ \sum_{n=k}^{\infty} a_n {n\choose k}z_0^{n-k}\right] (z-z_0)^k
\end{align*}
$$

The last equality follows because the series is absolutely convergent and in an absolutely convergent series, rearrangement of terms do not affect the convergence of the series or its limit.   From the above rearrangement, it is clear that
$$b_k = \sum_{n=k}^{\infty} a_n {n\choose k}z_0^{n-k}.$$
Moreover, $\sum b_k (z-z_0)^k$ converges wherever $\sum a_n z^n$ converges.  Notice that the $B(z_0, s = r-\vert z_0\vert) \subset B(0,r)$ and so, the radius of convergence of $\sum b_k (z-z_0)^k$ should be greater than or equal to $s$.

</details>
</div>


We can also prove the following theorems about analytic function, from their counterparts for power series.  We are not going to prove these theorems as their proofs are similar to the proofs we have encountered earlier.  


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.28</span>

If $f$ and $g$ are analytic at $z_0$, $f+g$ is also analytic at $z_0$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.29</span>

If $f$ and $g$ are analytic at $z_0$, $fg$ is also analytic at $z_0$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.30</span>

If $f$ and $g$ are analytic at $z_0$ and $g(z_0)\neq 0$, then $f/g$ is also analytic at $z_0$.

</div>


Going back to the two recipes, are the class of functions generated by the two recipes one and  
the same now.  Recall that we had restricted our attention to differentiable functions from $\mathbb{R}^2$ to $\mathbb{R}^2$ in our Recipe 1.  We have seen that functions defined by a power series are continuous functions.  Thus, the same would be true of analytic functions as continuity is a local property.   We can also show that analytic functions are differentiable.


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.31</span>

Let $f(z) = \sum a_n z^n$ be a power series with radius of convergence $r>0$.  Then, the series $\sum na_n z^{n-1}$ has the same radius of convergence. And, the function $f:B(0,r) \to \mathbb{C}$ defined as $f(z) = \sum a_n z^n$ is differentiable on $B(0,r)$ and the derivative is given by the power series $\sum na_n z^{n-1}$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We know that the radius of convergence of the series $\sum na_n z^{n-1}$ is given by the formula 
$$\limsup_{n\to \infty} \frac{1}{\vert na_n\vert^{\frac{1}{n}}}.$$
Given two sequences $x_n$, $y_n$ if 
$$\lim_{n\to \infty}x_n > 0,$$
then we can show that $$\limsup_{n\to \infty} x_ny_n = \lim_{n\to \infty} x_n \limsup_{n\to \infty} y_n.$$
As 
$$\lim_{n\to 0} n^{\frac{1}{n}} = 1 > 0$$
we have 
$$\limsup_{n\to \infty} \frac{1}{\vert na_n\vert^{\frac{1}{n}}} = \left(\lim_{n\to \infty} \frac{1}{n^{\frac{1}{n}}}\right) \left(\limsup_{n\to \infty} \frac{1}{\vert a_n\vert^{\frac{1}{n}}}\right) = \limsup_{n\to \infty} \frac{1}{\vert a_n\vert^{\frac{1}{n}}}.$$
We can further use the binomial theorem to show that $\sum na_n z^{n-1}$ is the derivative of $\sum a_n z^n$.  However, I leave that as an exercise.

</details>
</div>


Thus, all analytic functions are holomorphic.  Are all holomorphic functions analytic?  The following example might suggest that the answer should be no.


<div class="academic-env env-example">
<span class="env-label">Example 3.23</span>

The function $$f(x) = \begin{cases}
x^n \sin(\frac{1}{x}) & \text{if } x\neq 0\\
0 & \text{otherwise}
\end{cases}$$
is differentiable $n-1$ times but not $n$ times!

</div>


However, contrary to our expectation, every holomorphic function is analytic and understanding that would occupy a major part of the rest of the course.  For now, we will focus on analytic functions, and prove various results about analytic functions. 


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.32 (Inverse function theorem)</span>

Let $f(z) = a_1 z + \sum_{n=2}^{\infty} a_n z^n$ with $a_1 \neq 0$.  Then, there exists a unique power series $g(z) = \sum_{n=1}^{\infty} b_n z^n$ such that $f(g(z)) = z = g(f(z))$.  Moreover, if $f$ is a convergent power series, then so is $g$.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We can find this formal power series by assuming it has the form $\sum_{n=1}^{\infty}b_n z^n$ and comparing the coefficients of $z^n$ on the two sides of $f(g(z)) = z$.  For example, by comparing the coefficients of $z$ we immediately see that $a_1 b_1 =1$ or $b_1 = \frac{1}{a_1}$.  Similarly, comparing the coefficients of $z^2$, we see $a_1b_2 - a_2 b_1^2 = 0$. Thus, $b_2 = \frac{a_2b_1^2}{a_1}$.  Similarly, comparing the cubic terms of $f(g(z))$, we see that $a_1b_3 - 2a_2b_1b_2 + a_3 b_1^3 = 0$.  Thus, 
$$b_3 = \frac{2a_2b_1b_2 - a_3 b_1^3}{a_1}.$$
**Similarly, find $b_4$, and $b_5$** and convince yourself that you can similarly find all $b_n$.  Or more precisely, you can use induction to prove that 
$$b_n = \frac{1}{a_1}P_n(a_2,\dots,a_n,b_1,\dots,b_{n-1})$$
where $P_n$ is a polynomial with positive integer coefficients.  Moreover, as $a_1b_1 = 1$, $b_1$ is not equal to $0$.  Thus, there exists a power series $h$ such that $g(h(z)) = z$.  Thus,
$$g(f(z)) = g(f(g(h(z)))) = g(f\circ g (h(z))) = g(h(z)) = z.$$
Thus, $g(f(z)) = z = f(g(z))$.  That is a formal inverse exists and is unique. 

Now, we will prove that the radius of convergence of $g$ is non-zero.  To simplify notation, we first prove that we may assume $a_1 = 1$.  As $a_1 \neq 0$, you can consider the function $F(z) = \frac{f(z)}{a_1}$.  If $h(z) = \frac{z}{a}$, then $F(z) = h\circ f(z)$.  Thus, the inverse of $F$ denoted by $G$ is the function $G(z) = g(a_1 z)$.  Thus, $G(z) = \sum b_n (a_1 z)^n = \sum b_n (a_1)^n z^n$.  Thus, if $r_G$ is the radius of convergence of $G$ and $r_g$ is the radius of convergence of $g$, then
$$
\begin{align*}
r_G &= \frac{1}{\limsup_{n\to \infty} \vert a_1^n b_n\vert^{\frac{1}{n}}} = \frac{1}{\limsup_{n\to \infty} \vert a_1 \vert \vert b_n\vert^{\frac{1}{n}}}\\
&= \frac{1}{\vert a_1 \vert}\frac{1}{\limsup_{n\to \infty} \vert b_n\vert^{\frac{1}{n}}} = \frac{r_g}{\vert a_1 \vert}
\end{align*}
$$
Thus, $G$ is convergent in some disk iff $g$ is convergent in some disk.  Hence, it is enough to prove the case when $a_1 = 1$.

Let $$F(z) = z - \sum_{n=2}^{\infty}A_n z^n$$
be a power series such that $A_n\in \mathbb{R}$, $A_n \geq 0$, $\vert a_n\vert \leq A_n$ for all $n$.  Let $G(z) = \sum_{n=1}^{\infty}B_n$ be the formal inverse of $F$.  Then $B_1 = 1$ and 

$$B_n = P_n(A_2,\dots A_n,B_1,\dots B_{n-1})$$
where $P_n$ is the same polynomial as before (note that $a_1$ is assumed to be $1$).  Thus, we can recursively prove that $\vert b_n\vert \leq B_n$.  Thus, it suffices to find a nice $F$ such that its formal inverse $G$ has a positive radius of convergence.

As $f$ is a convergent power series, $\limsup_{n\to \infty} \vert a_n\vert^{\frac{1}{n}} = \frac{1}{r} \neq \infty$.  Thus, if $K>\frac{1}{r}$ then there exists $N$ such that $\vert a_n\vert^{\frac{1}{n}} < K$ for all $n>N$.  In other words, $\vert a_n\vert < K^n$ for all $n>N$.  Now choose $A > \max{a_1,\vert a_2\vert^{\frac{1}{2}},\dots, \vert a_N\vert^{\frac{1}{N}},K}$.  Then, $\vert a_n\vert A^n$ for all $n$.  Finally, define
$$F(z) = z - \sum_{n=2}^{\infty} A^n z^n = z - \frac{A^2z^2}{1-Az}.$$

As $F(G(z)) = z$, we get
$$G(z) - \frac{A^2 G(z)^2}{1-AG(z)} = z.$$
That is,
$$(A^2 + A)G(z)^2 - (1+Az)G(z) + z = 0.$$
Thus,
$$G(z) = \frac{1+Az - \sqrt{(1+Az)^2 - 4z(A^2+A)}}{2(A^2+A)} = \frac{1+Az - \sqrt{(1+Az)^2\left[1 - \frac{4z(A^2+A)}{(1+Az)^2}\right]}}{2(A^2+A)}.$$
We can now use Exercise **??** to find $\sqrt{(1+Az)^2\left[1 - \frac{4z(A^2+A)}{(1+Az)^2}\right]}$ which is a convergent power series.  Moreover, $\frac{1}{2(A^2+A)}$ is also a convergent power series.  Thus, by algebra of power series, we know that $G$ is a convergent power series.

</details>
</div>



<div class="academic-env env-remark">
<span class="env-label">Remark 3.5</span>

Notice that $a_1 = f'(z)$.  Thus, the theorem is analogous to the inverse function theorem you learnt in Real analysis.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 3.16 (Open map)</span>

A function $f:U\to \mathbb{C}$ is called an open map, if given any open subset $V$ of $U$, its image $f(U)$ is also open.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.33 (Open mapping theorem)</span>

Let $f$ be analytic on an open set $U$ and assume that given $z\in U$, there exists a neighbourhood $B(z,\varepsilon)$ such that $f$ is not constant on $B(z,\varepsilon)$.  Then, $f$ is an open map.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $f(z) = \sum a_n z^n$ be a power series and let $m$ be the smallest natural number such that $a_m\neq 0$.  Then just as in Theorem **3.25**, we can prove that $f(z) = a_m z^m(1 + h(z))$.  In Exercise **??**, you will prove that you can take the m-th root of $1+h(z)$ to get an analytic function $1+h_1(z)$.  Thus, if $f_1(z) = az(1+h_1(z))$ then $f(z) = f_1(z)^m$.  Notice that the function $z\to z^m$ takes a disk around $0$ to a disk around $0$.  Thus, if we can show that given an open set $U$ containing $0$, $f_1(U)$ contains a disk around $0$, then $f(U)$ will also contain a disk around $0$.  However, as $f_1$ satisfies the hypothesis of Theorem **3.32**, we have the result.  Applying this trick to the power series expansion of $f$ at all points gives the more general result.

</details>
</div>


The open mapping theorem also helps us prove another important theorem called the local maximum modulus principle.  


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.34</span>

Let $f$ be analytic on a open set $U$.  Let $z_0\in U$ be such that $\vert f(z_0)\vert \geq \vert f(z)\vert$ for all $z\in U$.  Then, there exists some open subset $D$ of $U$ such that $f$ is constant on $D$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let the power series expansion of $f$ at $z_0$ be $\sum a_n (z-z_0)^n$.  We will prove this
theorem using a proof by contradiction.  Assume $f$ is not the constant $a_0 = f(z_0)$, 
then by the open mapping theorem, there exists a neighbourhood $B(z_0,\varepsilon)$ such 
that $f(B(z_0,\varepsilon))$ is an open set.  And therefore, there exists some $\delta$ 
such that the ball $B(f(z_0),\delta) \subset f(U)$.  But, the ball $B(f(z_0),\delta)$ has 
elements whose modulus is greater than $f(z_0)$.  This contradicts the assumption that 
$\vert f(z_0)\vert \geq \vert f(z)\vert$ for all $z\in U$.

</details>
</div>


And the local maximum modulus principle allows us to prove the fundamental theorem of algebra.


<div class="academic-env env-theorem">
<span class="env-label">Theorem 3.35</span>

If $f(z) = a_0 + a_1z + \dots + a_n z^n$ be a polynomial with $n>0$ and $a_n\neq 0$, then there exists some complex number $z_0$ such that $f(z_0) = 0$.

</div>


Recall from high-school algebra that if $z_0$ is a zero of a polynomial, then $z-z_0$ divides the polynomial.  By recursively applying the result on the quotient, we have the famous fundamental theorem of algebra.


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Once again we will use a proof by contradiction.  Assume the polynomial has no zeroes.  Then the function $1/f$ is analytic on $\mathbb{C}$.  Notice, $$\lim_{\vert z\vert \to \infty} \frac{a_n z^n}{a_0 + a_1z + \dots + a_n z^n} = 1.$$
That is the polynomial $f(z)$ behaves like $a_nz^n$ for large values of $\vert z\vert$.  And it is clear that as $\vert z\vert$ goes to $\infty$,  $1/(a_nz^n)$ converge to $0$.  Therefore.  $1/f(z)$ should also converge to $0$.  Let $z_0$ be some complex number such that $f(z_0)\neq 0$.  Choose a positive real number $R$ such that $\vert z_0 \vert < R$ and if $\vert z \vert \geq R$, then
$$\frac{1}{\vert f(z)\vert}<\frac{1}{\vert f(z_0)\vert}.$$
As $1/f$ is a continuous function (as it is analytic) on the $\overline{B(0,R)}$ (the ball with its boundary points), it has a maximum at some point in $\overline{B(0,R)}$, say $z_1$.  As $\frac{1}{\vert f(z)\vert}<\frac{1}{\vert f(z_0)\vert}$ for all $\vert z\vert \geq R$, the point $z_1$ cannot lie on the boundary.  By, the local maximum modulus principle, we conclude there is a neighbourhood $B(z_1,\delta)$ where $1/f$ is constant.  This would imply that $f$ is also constant in $B(z_1,\delta)$, which is impossible.

</details>
</div>


\begin{xcb}{Exercises}

- Find the first 3 terms in the power series expansion of $\frac{z^2}{z+2}$.  
- Use the power series for $\sin(z)$ and the power series for $\frac{1}{\cos(z)}$ above to find the first $3$ terms in the power series of $\tan(z)$.
- Show that if $\sum z_n$ converge, then $z_n$ converge to $0$.
- Given two series of complex numbers $A = \sum a_n$ and $B = \sum b_n$ that converge, show that the sum $A + B$ also converge.
- Given two series of complex numbers $A = \sum a_n$ and $B = \sum b_n$ that converge, show that the product $AB$ defined as $$AB = \sum_{i=0}^\infty \left(\sum_{k=0}^i a_k b_{i-k}\right)$$ also converge.
- Find the terms of order less than or equal to $3$ in the following:

\begin{multicols}{2}
- $\frac{1}{1+z+z^2}$
- $\frac{1}{\cos(z)}$
- $\frac{\sin(z)}{\cos(z)}$
- $\frac{z}{(z-1)^2}$
\end{multicols} 

- Give an example of 

- a power series whose radius of convergence is equal to $2$.
- a power series whose radius of convergence is equal to $\alpha$ where $\alpha$ is a real number.
- a power series whose radius of convergence is $1$ and such that the corresponding function is continuous on the closed unit disc. [This question is from Complex Analysis by Serge Lang]\\
*Hint: Use $\sum z^n/n^p$ for a suitable $p$.  If you struggle for a choice of $p$, check Lang's book* ;)
- two power series $\sum a_n z^n$ and $\sum b_n z^n$ such that the product has a radius of convergence greater than the radius of convergence of one of the two power series.  

- Determine the radius of convergence of the following power series:
\begin{multicols}{2}

- $\sum \alpha^n z^n$
- $\sum n^n z^n$
- $\sum \frac{1}{n!}z^n$
- $\sum \frac{\left(n!\right)^3}{3n!}$

\end{multicols}
- Show that the sequence $f_n$ from Example **3.15**, Example **3.17**, Example **3.18**, and Example **3.19** do not converge uniformly.  

- Let $\mathcal{B}$ be the set of bounded function. Then, show that the function $d_{\max}:\mathcal{B}\times \mathcal{B} \to \mathbb{R}$ defined as $d_{\max}(f,g) = \sup \{|f(x)-g(x)|: x\in \mathbb{R}\}$  is a metric on $\mathcal{B}$. 

- Define $X$ to be the collection of all functions $f:\mathbb{R} \to \mathbb{R}$ such that $\int_{-\infty}^{\infty}|f(x)|dx < \infty$ and $\sim$ to be the relation $f\sim g$ if $\int \vert f-g\vert = 0$.  

- Show that $\sim$ is an equivalence relation.
- Let $\mathcal{L}^1$ be $X/\sim$.  Show that $d_{avg}(f,g) = \int_{-\infty}^{\infty}|f(x) - g(x)|dx$ is a metric on $\mathcal{L}^1$


- Finding the $q^{th}$ root using binomial series:
\label{exercise:find qth root}

- Show that the radius of convergence of the binomial series is equal to $1$ if $\alpha$ is not equal to an integer greater than or equal to $0$.
- By multiplying the two power series, deduce the relation $B_n(z)B_m(z) = \sum_{r=0}^{\infty}C_r(n,m)z^r$ where $C_r(n,m) = \sum_{j=0}^r {n\choose j}{m \choose r-j}$.  
- Recall $B_n(z) = (1+z)^n$ if $n$ is a natural number.  Use it to prove $B_n(z)B_m(z) = B_{n+m}(z)$.
- Deduce that $C_r(n,m) = {n+m \choose m}$ when $m$ and $n$ are positive integers.  But, $C_r(n,m)$ and ${n+m \choose m}$ are polynomials in $n$ and $m$ and they agree on infinitely many values of $m$ and $n$ implies they have to be equal for all complex values of $n$ and $m$.
- Deduce that $\left(B_{\frac{1}{q}}(z)\right)^q = (1+z)$ for all integers $q$.  In other words, you should think of $B_{\frac{1}{q}}(z)$ as $(1+z)^{\frac{1}{q}}$.  


- Show that the sequence of function $f_n(x) = \sqrt{x^2+\frac{1}{n}}$ converge uniformly to $f(x) = \vert x\vert$.  Further show that $f_n$ is differentiable on $\mathbb{R}$ but $f$ is not differentiable at $0$.  Thus, uniform limit of differentiable functions need not be differentiable.


<div class="academic-env env-remark">
<span class="env-label">Remark 3.6</span>

Recall that we proved the continuity of a power series on its disk of convergence(and thus of analytic functions) using the observation that uniform limits of continuous functions are continuous.  The above example suggests we cannot use a similar argument for the proof of differentiability of a power series in its disk of convergence.

</div>


\end{xcb}

</details>