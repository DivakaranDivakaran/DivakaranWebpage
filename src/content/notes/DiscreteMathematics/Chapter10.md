# Linear recurrence relations

Last class we saw how to solve a homogeneous degree two linear recurrence relation when it has real eigenvalues.  Let us start today's class by going through an example of a recurrence relation which has repeated eigen values.


<div class="academic-env env-example">
<span class="env-label">Example 10.1</span>

Solve the recurrence relation $a_n = 2a_{n-1} - a_{n-2}$, $a_0 = 1$ $a_1 = 2$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

Notice that the recurrence relation can be expressed using the matrix equation
$$\begin{bmatrix}
a_{n}\\
a_{n-1}
\end{bmatrix} = \begin{bmatrix}
2 & -1\\
1 & 0
\end{bmatrix}\begin{bmatrix}
a_{n-1}\\
a_{n-2}
\end{bmatrix}.$$
It is easy to see that the characteristic polynomial of the matrix $\begin{bmatrix}
2 & -1\\
1 & 0
\end{bmatrix}$ is $\lambda^2 - 2\lambda + 1 = (\lambda - 1)^2$. Thus, $1$ is a repeated eigenvalue.  We can check that 
$$\begin{bmatrix}
2 & -1\\
1 & 0
\end{bmatrix}\begin{bmatrix}
1\\
1
\end{bmatrix} = \begin{bmatrix}
1\\
1
\end{bmatrix}.$$
As we saw earlier, we cannot find another linearly independednt eigenvector, so we look for a generalised eigenvector.  More precisely, we want 
$$
\begin{align*}
\left(\begin{bmatrix}
2 & -1\\
1 & 0
\end{bmatrix}- \begin{bmatrix}
1 & 0\\
0 & 1
\end{bmatrix}\right) \begin{bmatrix}
x\\
y
\end{bmatrix} = \begin{bmatrix}
1\\
1
\end{bmatrix}
&\iff \begin{bmatrix}
1 & -1\\
1 & -1
\end{bmatrix}\begin{bmatrix}
x\\
y
\end{bmatrix} = \begin{bmatrix}
1\\
1
\end{bmatrix}\\
&\iff x = y+1.
\end{align*}
$$
Thus, $(2,1)$ is a generalised eigenvector.  And,
$$
\begin{align*}
\begin{bmatrix}
1 & 2\\
1 & 1
\end{bmatrix}^{-1}\begin{bmatrix}
2 & -1\\
1 & 0
\end{bmatrix}\begin{bmatrix}
1 & 2\\
1 & 1
\end{bmatrix} = \begin{bmatrix}
-1 & 2\\
1 & -1
\end{bmatrix}\begin{bmatrix}
2 & -1\\
1 & 0
\end{bmatrix}\begin{bmatrix}
1 & 2\\
1 & 1
\end{bmatrix} = \begin{bmatrix}
-1 & 2\\
1 & -1
\end{bmatrix}\begin{bmatrix}
1 & 3\\
1 & 2
\end{bmatrix} = \begin{bmatrix}
1 & 1\\
0 & 1
\end{bmatrix}
\end{align*}
$$
Thus, we can prove using induction that 
$$
\begin{align*}
\begin{bmatrix}
a_{n}\\
a_{n-1}
\end{bmatrix} &= \begin{bmatrix}
1 & 2\\
1 & 1
\end{bmatrix}\begin{bmatrix}
1 & 1\\
0 & 1
\end{bmatrix}^{n-1}\begin{bmatrix}
-1 & 2\\
1 & -1
\end{bmatrix}\begin{bmatrix}
a_{1}\\
a_{0}
\end{bmatrix} = \begin{bmatrix}
1 & 2\\
1 & 1
\end{bmatrix}\begin{bmatrix}
1 & n\\
0 & 1
\end{bmatrix}\begin{bmatrix}
-1 & 2\\
1 & -1
\end{bmatrix}\begin{bmatrix}
2\\
1
\end{bmatrix} = \begin{bmatrix}
1 & 2\\
1 & 1
\end{bmatrix}\begin{bmatrix}
1 & n-1\\
0 & 1
\end{bmatrix}\begin{bmatrix}
0\\
1
\end{bmatrix}\\
&= \begin{bmatrix}
1 & 2\\
1 & 1
\end{bmatrix}\begin{bmatrix}
n-1\\
1
\end{bmatrix} = \begin{bmatrix}
n-1 + 2\\
n-1 + 1
\end{bmatrix} = \begin{bmatrix}
n + 1\\
(n-1) + 1
\end{bmatrix} 
\end{align*}
$$
That is, $a_n = n+1$.

</details>
</div>


Now, we will discuss how to solve a non-homogeneous degree two recurrence relations.



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">10.1 Non-homogeneous degree two recurrence relation</summary>


Recall that given a non-homogeneous system of linear equations 
$$
\begin{align}
\begin{split}
2x + 3y &= 4\\
5x + y  &= 1
\end{split}
\label{eqn:nonhomo1}
\end{align}
$$
we look at the associated homogeneous system of linear equations, namely 
$$
\begin{align}
\begin{split}
2x + 3y &= 0\\
5x + y  &= 0
\end{split}
\label{eqn:homo1}
\end{align}
$$
If you know the general solution of the homogeneous system **10.2** and a particular solution of the non-homogeneous system **10.1**, you can find all solutions of the non-homogeneous system **10.1**.  More precisely, if $(x_0,y_0)$ is a solution of the non-homogeneous system **10.1**, then
$$\{(x,y) :  2x+3y = 4, 5x+y = 1\} = \{(x_0,y_0) + (x,y) :  2x+3y = 0, 5x+y = 0\}.$$

Similarly,


<div class="academic-env env-theorem">
<span class="env-label">Theorem 10.1</span>

If $<\alpha_n>$ is a solution of a degree $k$ non-homogeneous recurrence relation
$$a_n = c_1 a_{n-1} + \dots + c_k a_{n-k} + F(n)$$
Then 
$$\{<x_n> : x_n = c_1 x_{n-1} + \dots + c_k x_{n-k} + F(n)\} = \{<y_n + \alpha_n> : y_n = c_1 y_{n-1} + \dots + c_k y_{n-k}\}.$$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We will prove the result by showing that each of the sets above is a subset of the other.  Take a sequence $<x_n>$ such that $x_n = c_1 x_{n-1} + \dots + c_k x_{n-k} + F(n)$.  Then, notice that 
$$
\begin{align*}
y_n &:= x_n - \alpha_n = c_1 x_{n-1} + \dots + c_k x_{n-k} + F(n) - c_1 \alpha_{n-1} - \dots - c_k \alpha_{n-k} + F(n)\\
&= c_1 (x_{n-1} - \alpha_{n-1}) + \dots + c_k (x_k - \alpha_k)\\
&= c_1 y_{n-1} + \dots + c_k y_{n-k}.
\end{align*}
$$
Thus, $<x_n> = <y_n + \alpha_n>$ for some $<y_n>$ such that $y_n = c_1 y_{n-1} + \dots + c_k y_{n-k}$.

Now take a $<y_n>$ such that $y_n = c_1 y_{n-1} + \dots + c_k y_{n-k}$.  Then 
$$
\begin{align*}
x_n &:= y_n + \alpha_n = c_1 y_{n-1} + \dots + c_k y_{n-k} + c_1 a_{n-1} + \dots + c_k a_{n-k} + F(n)\\
&= c_1 (y_{n-1} + \alpha_n) + \dots c_k (y_{n-k} + \alpha_{n-k}) + F(n)\\
&= c_1 x_{n-1} + \dots + c_k x_{n-k} + F(n)
\end{align*}
$$
Hence, $<x_n>$ is a solution to the recurrence relation $x_n = c_1 x_{n-1} + \dots + c_k x_{n-k} + F(n)$.

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 10.2</span>

Solve the recurrence relation $a_k = a_{k-1} + a_{k-2} + 2^k$.

</div>


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

We already saw that the recurrence relations $a_k = a_{k-1} + a_{k-2}$ characteristic polynomial $\lambda^2 - \lambda - 1$ and thus the eigenvalues are $\lambda_1 = \frac{1+\sqrt{5}}{2}$ and $\lambda_2 = \frac{1+\sqrt{5}}{2}$.  Hence, the general solution of this recurrence relation is $a_n = \frac{a_1 - a_0\lambda_2}{\lambda_1 - \lambda_2}\lambda_1^n + \frac{a_0\lambda_1 - a_1}{\lambda_1 - \lambda_2}\lambda_2^n.$.  We will ignore the specific form (we will soon see why) of the coefficients of $\lambda_i^n$ and say that the general solution is of the form $\alpha\lambda_1^n + \beta\lambda_2^n$.    

The next step is to find a particular solution of $a_k = a_{k-1} + a_{k-2} + 2^k$.  As, the homogeneous part is of the form $2^k$, we try $a_k = C2^k$.  If this has to satisfy the recurrence relation, then
$$
\begin{align*}
C.2^k = C2^{k-1} + C.2^{k-2} + 2^k \iff 4C = 2C + C + 4 \iff C = 4.
\end{align*}
$$
Thus, the general solution of the non-homogeneous recurrence relation<span class="footnote-trigger" title="Note that when $n=0$, $\frac{a_1 - a_0\lambda_2}{\lambda_1 - \lambda_2}\lambda_1^n + \frac{a_0\lambda_1 - a_1}{\lambda_1 - \lambda_2}\lambda_2^n + 4. 2^k = a_0 + 4$.  Thus, $a_0$ will not represent the first term of sequence.  This is why we decided to ignore the specific form."><sup>[*]</sup></span> is 
$$a_k = \alpha\lambda_1^n + \beta\lambda_2^n + 4.2^k.$$
In particular, if we take $\alpha = 0 = \beta$, then we recover the earlier particular solution $4.2^k$.  If $a_0 = 4$ and $a_1 = 12$, then 
$$
\begin{align*}
\alpha + \beta + 4 = 4 \iff \beta = -\alpha
\end{align*}
$$
and 
$$
\begin{align*}
\alpha\frac{1+\sqrt{5}}{2} + \beta\frac{1-\sqrt{5}}{2} + 4.2 = 12 \iff \alpha \left(\frac{1+\sqrt{5}}{2} - \frac{1-\sqrt{5}}{2}\right) = 4 \iff \alpha = \frac{4}{\sqrt{5}}
\end{align*}
$$
Hence,
$$a_k = \frac{4}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^k - \frac{4}{\sqrt{5}}\left(\frac{1-\sqrt{5}}{2}\right)^k + 4.2^k$$

</details>
</div>


However, we were a bit lucky earlier. Namely, both the eigenvalues were not equal to $2$.  Let us now see what happens if one of the eigenvalues was equal to $2$.

<div class="academic-env env-example">
<span class="env-label">Example 10.3</span>

Solve the recurrence relation $a_k = 3a_{k-1} - 2a_{k-2} + 2^k$.

</div>


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

The characteristic polynomial is $\lambda^2 - 3\lambda + 2 = (\lambda -1) (\lambda - 2)$.  Thus, the eigenvalues are $1$ and $2$ and the general solution of the homogeneous recurrence relation is $\alpha 1^n + \beta 2^n$.  As the solution to homogeneous part already contains a $\beta 2^n$, motivated by solution when we have repeated eigenvalues, we guess that $a_k = Ck2^k$ is a particular solution to the non-homogeneous recurrence relation.  Thus,
$$
\begin{align*}
Ck2^k = -3C(k-1)2^{k-1} + 2C(k-2)2^{k-2} + 2^k &\iff Ck2^k = 3C(k-1)2^{k-1} - C(k-2)2^{k-1} + 2^k\\
&\iff 2Ck = 3C(k-1) - C(k-2) + 2\\
&\iff 2Ck = 2Ck - C + 2\\
&\iff C = 2
\end{align*}
$$
That is the general solution of the non-homogeneous recurrence relation is 
$$a_k = \alpha + \beta 2^k + 2k2^k$$
If $a_0 = 3$ and $a_1 = 8$, we get 
$$
\begin{align*}
\alpha + \beta = 3\\
\alpha + 2\beta + 4 =8
\end{align*}
$$
It is easy to see that $\alpha = 2$ and $\beta = 1$.  Thus, $a_k = 2 + 2^k + 2k2^k$.

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 10.4</span>

Solve the recurrence relation $a_k = 4a_{k-1} - 4a_{k-2} + 2^k$.

</div>


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

The characteristic polynomial is $\lambda^2 - 4\lambda + 4$ and hence $2$ is a repeated root.  Hence the general solution of the homogeneous recurrence relation has the form $a_k = \alpha 2^k + \beta k 2^k$.  As $2^k$ and $k2^k$ are already part of the solution of the homogeneous part, we should try $Ck^2 2^k$ as a particular solution of the non-homogeneous recurrence relation.  Thus,
$$
\begin{align*}
Ck^22^k = 4C(k-1)^22^{k-1} - 4C(k-2)^22^{k-2} + 2^k &\iff Ck^2 = 2Ck^2 - 4Ck + 2C - Ck^2 + 4Ck - 4C + 1\\
&\iff 2C = 1 
\end{align*}
$$
Thus, the general solution of the non-homogeneous recurrence relation has the form
$$a_k = \alpha2^k + \beta k 2^k + \frac{1}{2}k^22^k.$$

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 10.5</span>

Solve the recurrence relation $a_k = 5a_{k-1} - 6a_{k-2} + 4k + 2$.

</div>


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

The general solution of the corresponding homogeneous recurrence relation is $a_k = \alpha 2^k + \beta 3^k$.  Since $F(k)$ is a degree $1$ polynomial, we guess the particular solution will also be a degree $1$ polynomial.  That is $a_k = Ck + D$.  Thus,
$$
\begin{align*}
Ck + D = 5(C(k-1) +D) - 6(C(k-2)+D) + 4k + 2 \iff Ck + D = (-C+4)k + (7C- D + 2)  
\end{align*}
$$
Two polynomials are equal iff the coefficients of $x^n$ are equal for all $n$.  Thus, $-C + 4 = C$ or $C = 2$.  And,
$$
\begin{align*}
7C - D + 2 = D \iff 16 = 2D \iff D = 8.
\end{align*}
$$
Thus, the general solution has the form
$$
\begin{align*}
a_k = \alpha 2^k + \beta 3^k + 2k + 8
\end{align*}
$$

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 10.6</span>

Solve the recurrence relation $a_k = 4a_{k-1} - 4a_{k-2} + 2^k$.

</div>


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

The characteristic polynomial is $\lambda^2 - 4\lambda + 4$ and hence $2$ is a repeated root.  Hence the general solution of the homogeneous recurrence relation has the form $a_k = \alpha 2^k + \beta k 2^k$.  As $2^k$ and $k2^k$ are already part of the solution of the homogeneous part, we should try $Ck^2 2^k$ as a particular solution of the non-homogeneous recurrence relation.  Thus,
$$
\begin{align*}
Ck^22^k = 4C(k-1)^22^{k-1} - 4C(k-2)^22^{k-2} + 2^k &\iff Ck^2 = 2Ck^2 - 4Ck + 2C - Ck^2 + 4Ck - 4C + 1\\
&\iff 2C = 1 
\end{align*}
$$
Thus, the general solution of the non-homogeneous recurrence relation has the form
$$a_k = \alpha2^k + \beta k 2^k + \frac{1}{2}k^22^k.$$

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 10.7</span>

Solve the recurrence relation $a_k = 5a_{k-1} - 6a_{k-2} + k^2 + 4k + 2$.

</div>


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

The general solution of the corresponding homogeneous recurrence relation is $a_k = \alpha 2^k + \beta 3^k$.  Since $F(k)$ is a degree $2$ polynomial, we guess the particular solution will also be a degree $2$ polynomial.  That is $a_k = Ck^2 + Dk + E$.  Thus,
$$
\begin{align*}
& \ \ \ \ \ \ \ \ \ \ \ Ck^2 + Dk + E = 5(C(k-1)^2 +D(k-1) + E) - 6(C(k-2)^2+D(k-2) + E) + 4k + 2\\
&\iff Ck^2 + Dk + E  = (-C+1)k^2 + (14C- D + 4)k + (-19C + 7D - E + 2)  
\end{align*}
$$
Two polynomials are equal iff the coefficients of $x^n$ are equal for all $n$.  Thus, $-C + 1 = C$ or $C = \frac{1}{2}$.  And,
$$
\begin{align*}
14C - D + 4 = D \iff 11 = 2D \iff D = \frac{11}{2}.
\end{align*}
$$
Finally, 
$$
\begin{align*}
-19C + 7D - E + 2 = E \iff \frac{-19}{2} + \frac{77}{2} + 2 = 2E \iff 31 = 2E \iff E = \frac{31}{2}
\end{align*}
$$
Thus, the general solution has the form
$$
\begin{align*}
a_k = \alpha 2^k + \beta 3^k + \frac{1}{2}k^2 + \frac{11}{2}k + \frac{31}{2}
\end{align*}
$$

</details>
</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">10.2 Degree three recurrence relation</summary>



Just as in the case of degree two recurrence relations, we can solve degree three recurrence relations using linear algebra.  We will consider three examples -  when there are three distinct eigenvalues, an eigenvalue is repeated twice, an eigenvalue is repeated thrice.


<div class="academic-env env-example">
<span class="env-label">Example 10.8</span>

Solve the recurrence relation $a_n = 9a_{n-1} - 26a_{n-2} + 24a_{n-3}$, $a_0 = 2$, $a_1 = 4$, $a_2 = 2$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

We can represent the recurrence relation using the matrix equation
$$\begin{bmatrix}
a_{n}\\
a_{n-1}\\
a_{n-2}
\end{bmatrix} = \begin{bmatrix}
9 & -26 & 24\\
1 & 0 & 0\\
0 & 1 & 0
\end{bmatrix}\begin{bmatrix}
a_{n-1}\\
a_{n-2}\\
a_{n-3}
\end{bmatrix}$$
As before, we can show that 
$$\begin{bmatrix}
a_{n}\\
a_{n-1}\\
a_{n-2}
\end{bmatrix} = \begin{bmatrix}
9 & -26 & 24\\
1 & 0 & 0\\
0 & 1 & 0
\end{bmatrix}^{n-2}\begin{bmatrix}
a_{2}\\
a_{1}\\
a_{0}
\end{bmatrix}$$
Thus, the aim is to compute the $(n-2)$th power of the matrix efficiently.  To this end, we try to diagonalise the matrix.  You can check that the characteristic polynomial of the matrix is $\lambda^3 - 9\lambda^2 + 26\lambda - 24 = (\lambda - 2)(\lambda - 3)(\lambda - 4)$.  Thus, there are three distinct eigenvalues $2,3,4$.  You can further check that $(4,2,1)$, $(9,3,1)$, and $(16,4,1)$ are eigenvectors corresponding to the eigenvalues $2$, $3$, and $4$ respectively.  Thus, 
$$
\begin{align*}
\begin{bmatrix}
9 & -26 & 24\\
1 & 0 & 0\\
0 & 1 & 0
\end{bmatrix} = \begin{bmatrix}
4 & 9 & 16\\
2 & 3 & 4\\
1 & 1 & 1
\end{bmatrix}\begin{bmatrix}
2 & 0 & 0\\
0 & 3 & 0\\
0 & 0 & 4
\end{bmatrix}\begin{bmatrix}
4 & 9 & 16\\
2 & 3 & 4\\
1 & 1 & 1
\end{bmatrix}^{-1}
\end{align*}
$$
Hence,
$$
\begin{align*}
\begin{bmatrix}
9 & -26 & 24\\
1 & 0 & 0\\
0 & 1 & 0
\end{bmatrix}^{n-2}\begin{bmatrix}
a_{2}\\
a_{1}\\
a_{0}
\end{bmatrix} &= \begin{bmatrix}
4 & 9 & 16\\
2 & 3 & 4\\
1 & 1 & 1
\end{bmatrix}\begin{bmatrix}
2 & 0 & 0\\
0 & 3 & 0\\
0 & 0 & 4
\end{bmatrix}^{n-2}\begin{bmatrix}
4 & 9 & 16\\
2 & 3 & 4\\
1 & 1 & 1
\end{bmatrix}^{-1}\begin{bmatrix}
a_{2}\\
a_{1}\\
a_{0}
\end{bmatrix}\\
&= \begin{bmatrix}
4 & 9 & 16\\
2 & 3 & 4\\
1 & 1 & 1
\end{bmatrix}\begin{bmatrix}
2^{n-2} & 0 & 0\\
0 & 3^{n-2} & 0\\
0 & 0 & 4^{n-2}
\end{bmatrix}\begin{bmatrix}
\frac{1}{2} & \frac{-7}{2} & 6\\
-1 & 6 & -8\\
\frac{1}{2} & \frac{-5}{2} & 3
\end{bmatrix}\begin{bmatrix}
2\\
4\\
2
\end{bmatrix}\\
&= \begin{bmatrix}
4 & 9 & 16\\
2 & 3 & 4\\
1 & 1 & 1
\end{bmatrix}\begin{bmatrix}
2^{n-2} & 0 & 0\\
0 & 3^{n-2} & 0\\
0 & 0 & 4^{n-2}
\end{bmatrix}\begin{bmatrix}
-1\\
6\\
-3
\end{bmatrix}\\
&= \begin{bmatrix}
4 & 9 & 16\\
2 & 3 & 4\\
1 & 1 & 1
\end{bmatrix}\begin{bmatrix}
-2^{n-2}\\
6.3^{n-2}\\
-3.4^{n-2}
\end{bmatrix}\\
&= \begin{bmatrix}
-2^{n} + 6.3^n -3.4^n\\
-2^{n-1} + 6.3^{n-1} -3.4^{n-1}\\
-2^{n-2} + 6.3^{n-2} -3.4^{n-2}
\end{bmatrix}
\end{align*}
$$
Thus, $a_n = -2^{n} + 6.3^n -3.4^n$.

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 10.9</span>

Solve the recurrence relation $a_n = 7a_{n-1} - 16a_{n-2} + 12a_{n-3}$, $a_0 = 2$, $a_1 = 4$, $a_2 = 2$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

We can represent the recurrence relation using the matrix equation
$$\begin{bmatrix}
a_{n}\\
a_{n-1}\\
a_{n-2}
\end{bmatrix} = \begin{bmatrix}
7 & -16 & 12\\
1 & 0 & 0\\
0 & 1 & 0
\end{bmatrix}\begin{bmatrix}
a_{n-1}\\
a_{n-2}\\
a_{n-3}
\end{bmatrix}$$
As before, we can show that 
$$\begin{bmatrix}
a_{n}\\
a_{n-1}\\
a_{n-2}
\end{bmatrix} = \begin{bmatrix}
7 & -16 & 12\\
1 & 0 & 0\\
0 & 1 & 0
\end{bmatrix}^{n-2}\begin{bmatrix}
a_{2}\\
a_{1}\\
a_{0}
\end{bmatrix}$$
Thus, the aim is to compute the $(n-2)$th power of the matrix efficiently.  To this end, we try to convert the matrix into a convenient form.  You can check that the characteristic polynomial of the matrix is $\lambda^3 - 7\lambda^2 + 16\lambda - 12 = (\lambda - 2)^2(\lambda - 3)$.  Thus, there is only one distinct eigenvalue $2$.  You can further check that $(4,2,1)$ is an eigenvectors corresponding to the eigenvalues $2$.  We will also find two generalised eigenvector corresponding to the eigenvalue $2$, as it is a repeated eigenvalue.  First we find a vector $(x,y,z)$ such that
$$\left(\begin{bmatrix}
7 & -16 & 12\\
1 & 0 & 0\\
0 & 1 & 0
\end{bmatrix} - \begin{bmatrix}
2 & 0 & 0\\
0 & 2 & 0\\
0 & 0 & 2
\end{bmatrix}\right)\begin{bmatrix}
x\\
y\\
z
\end{bmatrix} = \begin{bmatrix}
4\\
2\\
1
\end{bmatrix}$$
You can check that $(4,1,0)$ is a solution.  Thus, you can do a change of basis with respect to the basis $(4,2,1)$, $(4,1,0)$, and $(9,3,1)$.  You can check that 
$$
\begin{align*}
\begin{bmatrix}
2 & 1 & 0\\
0 & 2 & 0\\
0 & 0 & 3
\end{bmatrix}= \begin{bmatrix}
4 & 4 & 9 \\
2 & 1 & 3 \\
1 & 0 & 1 
\end{bmatrix}^{-1}\begin{bmatrix}
7 & -16 & 12\\
1 & 0 & 0\\
0 & 1 & 0
\end{bmatrix}\begin{bmatrix}
4 & 4 & 9 \\
2 & 1 & 3 \\
1 & 0 & 1 
\end{bmatrix}
\end{align*}
$$
Hence,
$$
\begin{align*}
\begin{bmatrix}
7 & -16 & 12\\
1 & 0 & 0\\
0 & 1 & 0
\end{bmatrix}^{n-2}\begin{bmatrix}
a_{2}\\
a_{1}\\
a_{0}
\end{bmatrix} &= \begin{bmatrix}
4 & 4 & 9 \\
2 & 1 & 3 \\
1 & 0 & 1 
\end{bmatrix}\begin{bmatrix}
2 & 1 & 0\\
0 & 2 & 0\\
0 & 0 & 3
\end{bmatrix}^{n-2}\begin{bmatrix}
4 & 4 & 9 \\
2 & 1 & 3 \\
1 & 0 & 1 
\end{bmatrix}^{-1}\begin{bmatrix}
a_{2}\\
a_{1}\\
a_{0}
\end{bmatrix}\\
&= \begin{bmatrix}
4 & 4 & 9 \\
2 & 1 & 3 \\
1 & 0 & 1 
\end{bmatrix}\begin{bmatrix}
2^{n-2} & (n-2)2^{n-3} & 0\\
0 & 2^{n-2} & 0\\
0 & 0 & 3^{n-2}
\end{bmatrix}\begin{bmatrix}
-1 & 4 & -3\\
-1 & 5 & -6\\
1 & -4 & 4
\end{bmatrix}\begin{bmatrix}
2\\
4\\
2
\end{bmatrix}\\
&= \begin{bmatrix}
4 & 4 & 9 \\
2 & 1 & 3 \\
1 & 0 & 1 
\end{bmatrix}\begin{bmatrix}
2^{n-2} & (n-2)2^{n-3} & 0\\
0 & 2^{n-2} & 0\\
0 & 0 & 3^{n-2}
\end{bmatrix}\begin{bmatrix}
8\\
6\\
-6
\end{bmatrix}\\
&= \begin{bmatrix}
4 & 4 & 9 \\
2 & 1 & 3 \\
1 & 0 & 1 
\end{bmatrix}\begin{bmatrix}
8.2^{n-2} + 6(n-2)2^{n-3}\\
6.2^{n-2}\\
-6.3^{n-2}
\end{bmatrix}\\
&= \begin{bmatrix}
(8+3n).2^{n} - 6.3^n\\
(8+3(n-1).2^{n-1} - 6.3^{n-1}\\
(8+3(n-2)).2^{n-2} - 6.3^{n-2}
\end{bmatrix}
\end{align*}
$$
Thus, $a_n = (8+3n).2^{n} - 6.3^n$.

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 10.10</span>

Solve the recurrence relation $a_n = 6a_{n-1} - 12a_{n-2} + 8a_{n-3}$, $a_0 = 2$, $a_1 = 4$, $a_2 = 2$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

We can represent the recurrence relation using the matrix equation
$$\begin{bmatrix}
a_{n}\\
a_{n-1}\\
a_{n-2}
\end{bmatrix} = \begin{bmatrix}
6 & -12 & 8\\
1 & 0 & 0\\
0 & 1 & 0
\end{bmatrix}\begin{bmatrix}
a_{n-1}\\
a_{n-2}\\
a_{n-3}
\end{bmatrix}$$
As before, we can show that 
$$\begin{bmatrix}
a_{n}\\
a_{n-1}\\
a_{n-2}
\end{bmatrix} = \begin{bmatrix}
6 & -12 & 8\\
1 & 0 & 0\\
0 & 1 & 0
\end{bmatrix}^{n-2}\begin{bmatrix}
a_{2}\\
a_{1}\\
a_{0}
\end{bmatrix}$$
Thus, the aim is to compute the $(n-2)$th power of the matrix efficiently.  To this end, we try to convert the matrix into a convenient form.  You can check that the characteristic polynomial of the matrix is $\lambda^3 - 6\lambda^2 + 12\lambda - 8 = (\lambda - 2)^3$.  Thus, there is only one distinct eigenvalues $2$.  You can further check that $(4,2,1)$ is an eigenvector corresponding to the eigenvalues $2$.  We will also find a generalised eigenvector corresponding to the eigenvalue $2$, as it is a repeated eigenvalue.  In other words, we want a vector $(x,y,z)$ such that
$$\left(\begin{bmatrix}
6 & -12 & 8\\
1 & 0 & 0\\
0 & 1 & 0
\end{bmatrix} - \begin{bmatrix}
2 & 0 & 0\\
0 & 2 & 0\\
0 & 0 & 2
\end{bmatrix}\right)\begin{bmatrix}
x\\
y\\
z
\end{bmatrix} = \begin{bmatrix}
4\\
2\\
1
\end{bmatrix}$$
You can check that $(4,1,0)$ is a solution.  Now, we find another vector $(x,y,z)$ such that
$$\left(\begin{bmatrix}
6 & -12 & 8\\
1 & 0 & 0\\
0 & 1 & 0
\end{bmatrix} - \begin{bmatrix}
2 & 0 & 0\\
0 & 2 & 0\\
0 & 0 & 2
\end{bmatrix}\right)\begin{bmatrix}
x\\
y\\
z
\end{bmatrix} = \begin{bmatrix}
4\\
1\\
0
\end{bmatrix}$$
You can check that $(1,0,0)$ is a solution.  Thus, you can do a change of basis with respect to the basis $(4,2,1)$, $(4,1,0)$, and $(1,0,0)$.  You can check that 
$$
\begin{align*}
\begin{bmatrix}
2 & 1 & 0\\
0 & 2 & 1\\
0 & 0 & 2
\end{bmatrix}= \begin{bmatrix}
4 & 4 & 1 \\
2 & 1 & 0 \\
1 & 0 & 0 
\end{bmatrix}^{-1}\begin{bmatrix}
6 & -12 & 8\\
1 & 0 & 0\\
0 & 1 & 0
\end{bmatrix}\begin{bmatrix}
4 & 4 & 1 \\
2 & 1 & 0 \\
1 & 0 & 0 
\end{bmatrix}
\end{align*}
$$
Hence,
$$
\begin{align*}
\begin{bmatrix}
6 & -12 & 8\\
1 & 0 & 0\\
0 & 1 & 0
\end{bmatrix}^{n-2}\begin{bmatrix}
a_{2}\\
a_{1}\\
a_{0}
\end{bmatrix} &= \begin{bmatrix}
4 & 4 & 1 \\
2 & 1 & 0 \\
1 & 0 & 0 
\end{bmatrix}\begin{bmatrix}
2 & 1 & 0\\
0 & 2 & 1\\
0 & 0 & 2
\end{bmatrix}^{n-2}\begin{bmatrix}
4 & 4 & 1 \\
2 & 1 & 0 \\
1 & 0 & 0 
\end{bmatrix}^{-1}\begin{bmatrix}
a_{2}\\
a_{1}\\
a_{0}
\end{bmatrix}\\
&= \begin{bmatrix}
4 & 4 & 1 \\
2 & 1 & 0 \\
1 & 0 & 0 
\end{bmatrix}\begin{bmatrix}
2^{n-2} & (n-2)2^{n-3} & \frac{(n-2)(n-3)}{2}2^{n-4}\\
0 & 2^{n-2} & (n-2)2^{n-3}\\
0 & 0 & 2^{n-2}
\end{bmatrix}\begin{bmatrix}
0 & 0 & 1\\
0 & 1 & -2\\
1 & -4 & 4
\end{bmatrix}\begin{bmatrix}
2\\
4\\
2
\end{bmatrix}\\
&= \begin{bmatrix}
4 & 4 & 1 \\
2 & 1 & 0 \\
1 & 0 & 0 
\end{bmatrix}\begin{bmatrix}
2^{n-2} & (n-2)2^{n-3} & \frac{(n-2)(n-3)}{2}2^{n-4}\\
0 & 2^{n-2} & (n-2)2^{n-3}\\
0 & 0 & 2^{n-2}
\end{bmatrix}\begin{bmatrix}
2\\
0\\
-6
\end{bmatrix}\\
&= \begin{bmatrix}
4 & 4 & 1 \\
2 & 1 & 0 \\
1 & 0 & 0 
\end{bmatrix}\begin{bmatrix}
2^{n-1} - 3(n-2)(n-3)2^{n-4}\\
-3(n-2).2^{n-2}\\
-3.2^{n-1}
\end{bmatrix}\\
&= \begin{bmatrix}
(2+\frac{3}{4}n - \frac{3}{4}n^2).2^{n}\\
\left(2+\frac{3}{4}(n-1) - \frac{3}{4}(n-1)^2\right).2^{n-1}\\
\left((2+\frac{3}{4}(n-2) - \frac{3}{4}(n-2)^2\right).2^{n-2}
\end{bmatrix}
\end{align*}
$$
Thus, $a_n = (2+\frac{3}{4}n - \frac{3}{4}n^2).2^{n}$.

</details>
</div>





</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">10.3 Exercises</summary>



- Solve these recurrence relations so that they also satisfy the initial conditions:

- $a_n = 4a_{n-1} - 4a_{n-2} + 4n + 2$, $a_0 = 18$, $a_1 = 24$
- $a_n = 5a_{n-1} + 6a_{n-2} + 3^n$, $a_0 = 1$, $a_1 = 1$
- $a_k = 3a_{k-1} - 2a_{k-2} + 3n^2 + 5n + 2$, $a_0 = 0$, $a_1 = 1$
- $a_{n} = 2a_{n-1}+ 5a_{n-2}- 6a_{n-3}$, $a_0 = 7$, $a_1 = -4$, $a_2 = 8$.
- $a_{n} = 7a_{n-1} -16a_{n-2} + 12a_{n-3}$, $a_0 = 7$, $a_1 = -4$, $a_2 = 8$.

- Let $A_n$ be the $n\times n$ matrix with $2$s on its main diagonal, $1$s in all positions next to a diagonal element, and $0$s everywhere else. Find a recurrence relation for $d_n$ , the determinant of $A_n$ . Solve this recurrence relation to find a formula for $d_n$. %from rosen


</details>