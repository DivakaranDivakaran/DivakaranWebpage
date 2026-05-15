# Degree two linear homogeneous recurrence relations

Last lecture, we saw that several combinatorial problems give rise to recurrence relations.  Thus, being able to solve recurrence relation is very important.  An important class of recurrence relations are linear homogeneous recurrence relation.


<div class="academic-env env-definition">
<span class="env-label">Definition 9.1</span>

A recurrence relation of the form $a_n = b_1 a_{n-1} + b_2 a_{n-2} + \dots + b_k a_{n-k}$ is called a linear homogeneous recurrence relation.  If $b_k$ is not zero, then we say the degree of this recurrence relation is $k$.

</div>


Solving a degree one linear homogeneous recurrence relation is quite easy.  We can observe that
$$a_n = b a_{n-1} = b (b a_{n-2}) = b^2a_{n-2} = \dots = b^na_{n-n} = b^na_0.$$

Once we have the right intuition, we can state the following theorem and prove it using mathematical induction.  


<div class="academic-env env-theorem">
<span class="env-label">Theorem 9.1</span>

If $<a_n>$ is a sequence that satisfies the recurrence relation $a_n = ba_{n-1}$, then $a_n = b^na_0$ for all $n$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Proof by induction)</summary>

Left as an exercise.

</details>
</div>


As degree one turned out to be really easy, let us try a degree $2$ linear homogeneous equation.



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">9.1 Degree two linear recurrence relations</summary>


Let $<a_n>$ be a recurrence relation satisfying the recurrence relation $a_n = ba_{n-1} + ca_{n-2}$.  The most important observation we would like to make is that this recurrence relation can be expressed as 
$$\begin{bmatrix}
a_{n}\\
a_{n-1}
\end{bmatrix} = \begin{bmatrix}
b & c\\
1 & 0
\end{bmatrix}\begin{bmatrix}
a_{n-1}\\
a_{n-2}
\end{bmatrix} $$
One of the important lessons from Linear Algebra is that, matrix multiplication correspond to linear maps - the natural generalization of functions of the form $f(x) = bx$.  Thus, we should guess that 


<div class="academic-env env-theorem">
<span class="env-label">Theorem 9.2</span>

Let $<a_n>$ be a recurrence relation satisfying the recurrence relation $a_n = ba_{n-1} + ca_{n-2}$.  Then,
$$\begin{bmatrix}
a_{n}\\
a_{n-1}
\end{bmatrix} = \begin{bmatrix}
b & c\\
1 & 0
\end{bmatrix}^{n-1}\begin{bmatrix}
a_{1}\\
a_{0}
\end{bmatrix} $$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Proof by induction)</summary>

We define $P(n)$ to be the statement
$$\begin{bmatrix}
a_{n}\\
a_{n-1}
\end{bmatrix} = \begin{bmatrix}
b & c\\
1 & 0
\end{bmatrix}^{n-1}\begin{bmatrix}
a_{1}\\
a_{0}
\end{bmatrix} $$
Then, the base case $P(1)$ is easy to see.  Assume $P(k)$, that is, 
$$\begin{bmatrix}
a_{k}\\
a_{k-1}
\end{bmatrix} = \begin{bmatrix}
b & c\\
1 & 0
\end{bmatrix}^{k-1}\begin{bmatrix}
a_{1}\\
a_{0}
\end{bmatrix} $$
Then, 
$$\begin{bmatrix}
a_{k+1}\\
a_{k}
\end{bmatrix} = \begin{bmatrix}
b & c\\
1 & 0
\end{bmatrix}\begin{bmatrix}
a_{k}\\
a_{k-1}
\end{bmatrix} = \begin{bmatrix}
b & c\\
1 & 0
\end{bmatrix}\begin{bmatrix}
b & c\\
1 & 0
\end{bmatrix}^{k-1}\begin{bmatrix}
a_{1}\\
a_{0}
\end{bmatrix} = \begin{bmatrix}
b & c\\
1 & 0
\end{bmatrix}^{(k+1)-1}\begin{bmatrix}
a_{1}\\
a_{0}
\end{bmatrix} $$

</details>
</div>


Thus, solving a recurrence relation is equivalent to finding powers of a matrix.  In general, it is hard to find powers of a matrix, but if the matrix is diagonalisable, then it is a lot simpler.  Recall that a matrix $A$ is called diagonalisable if there exist an invertible matrix $B$ such that $B^{-1}AB = D$.  Geometrically, there is a basis with respect to which the matrix of this linear transformation is linear.  The columns of the matrix $B$ are the elements of this basis. 


<div class="academic-env env-theorem">
<span class="env-label">Theorem 9.3</span>

If $A = BDB^{-1}$, then $A^n = BD^nB^{-1}$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Proof by induction)</summary>

Left as an exercise

</details>
</div>


Keeping this idea in mind, let us solve one of the most popular degree two linear homogeneous recurrence relations - the Fibonacci sequence.



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">9.2 Fibonacci Sequence</summary>



The Fibonacci sequence is a big part of popular culture and is defined using the recurrencre relation $a_n = a_{n-2} + a_{n-1}$ and initial condition $a_0 = 0$ an $a_1=1$.  To solve this recurrence relation, as seen earlier, we note
$$
\begin{align*}
\begin{bmatrix}
a_{n}\\
a_{n-1}
\end{bmatrix} = \begin{bmatrix}
1 & 1\\
1 & 0
\end{bmatrix}^{n-1} \begin{bmatrix}
a_{1}\\
a_{0}
\end{bmatrix} \end{align*}
$$

To solve this problem, we need to diagonalise the matrix.  To this end, we first find the eigenvalues of this matrix.  The eigenvalues of a matrix can be found by finding the roots of the equation $\det(A-\lambda I) = 0$.  That is,
$$\det\left(\begin{bmatrix}
1 & 1\\
1 & 0
\end{bmatrix} - \begin{bmatrix}
\lambda & 0\\
0 & \lambda
\end{bmatrix}\right) = \begin{bmatrix}
1-\lambda & 1\\
1 & -\lambda
\end{bmatrix} = \lambda^2 - \lambda - 1.$$
The roots of this polynomial are 
$$\lambda = \frac{1 \pm \sqrt{5}}{2}.$$
You should recall that $\frac{1 + \sqrt{5}}{2}$ is the famous golden ratio - a beautiful connection between Fibonacci sequence and the golden ratio.  We will now find the eigenvectors corresponding to these eigenvalues.
$$
\begin{bmatrix}
1 & 1\\
1 & 0
\end{bmatrix}\begin{bmatrix}
x\\
y
\end{bmatrix} = \begin{bmatrix}
\frac{1+\sqrt{5}}{2}x \\
\frac{1+\sqrt{5}}{2}y
\end{bmatrix}
$$
That is $x = \frac{1+\sqrt{5}}{2}y$.  Thus, an eigenvector corresponding to $\frac{1+\sqrt{5}}{2}$ is $(\frac{1+\sqrt{5}}{2},1)$.  Similarly, you can show that an eigenvector corresponding to $\frac{1-\sqrt{5}}{2}$ is $(\frac{1-\sqrt{5}}{2},1)$.  Thus, (you should verify by computing),
$$\begin{bmatrix}
1 & 1\\
1 & 0
\end{bmatrix} = \begin{bmatrix}
\frac{1+\sqrt{5}}{2} & \frac{1-\sqrt{5}}{2}\\
1 & 1
\end{bmatrix}\begin{bmatrix}
\frac{1+\sqrt{5}}{2} & 0\\
0 & \frac{1-\sqrt{5}}{2}
\end{bmatrix}\begin{bmatrix}
\frac{1+\sqrt{5}}{2} & \frac{1-\sqrt{5}}{2}\\
1 & 1
\end{bmatrix}^{-1}$$
Hence, 
$$
\begin{align*}
\begin{bmatrix}
1 & 1\\
1 & 0
\end{bmatrix}^{n-1} &= \begin{bmatrix}
\frac{1+\sqrt{5}}{2} & \frac{1-\sqrt{5}}{2}\\
1 & 1
\end{bmatrix}\begin{bmatrix}
\frac{1+\sqrt{5}}{2} & 0\\
0 & \frac{1-\sqrt{5}}{2}
\end{bmatrix}^{n-1}\begin{bmatrix}
\frac{1+\sqrt{5}}{2} & \frac{1-\sqrt{5}}{2}\\
1 & 1
\end{bmatrix}^{-1}\\
&= \begin{bmatrix}
\frac{1+\sqrt{5}}{2} & \frac{1-\sqrt{5}}{2}\\
1 & 1
\end{bmatrix}\begin{bmatrix}
\left(\frac{1+\sqrt{5}}{2}\right)^{n-1} & 0\\
0 & \left(\frac{1-\sqrt{5}}{2}\right)^{n-1}
\end{bmatrix}\begin{bmatrix}
\frac{1}{\sqrt{5}} & \frac{\sqrt{5}-1}{2\sqrt{5}}\\
\frac{-1}{\sqrt{5}} & \frac{1+\sqrt{5}}{2\sqrt{5}}
\end{bmatrix}\\
&= \begin{bmatrix}
\frac{1+\sqrt{5}}{2} & \frac{1-\sqrt{5}}{2}\\
1 & 1
\end{bmatrix}\begin{bmatrix}
\frac{1}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^{n-1} & \left(\frac{1+\sqrt{5}}{2}\right)^{n-2}\left[\frac{(\sqrt{5} + 1)(\sqrt{5}-1)}{2}\right]\\
\frac{-1}{\sqrt{5}}\left(\frac{1-\sqrt{5}}{2}\right)^{n-1} & \left(\frac{1-\sqrt{5}}{2}\right)^{n-2}\left[\frac{(\sqrt{5} + 1)(1-\sqrt{5})}{2}\right]
\end{bmatrix}\\
&= \begin{bmatrix}
\frac{1+\sqrt{5}}{2} & \frac{1-\sqrt{5}}{2}\\
1 & 1
\end{bmatrix}\begin{bmatrix}
\frac{1}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^{n-1} & 2\left(\frac{1+\sqrt{5}}{2}\right)^{n-2}\\
\frac{-1}{\sqrt{5}}\left(\frac{1-\sqrt{5}}{2}\right)^{n-1} & -2\left(\frac{1-\sqrt{5}}{2}\right)^{n-2}
\end{bmatrix}\\
&= \begin{bmatrix}
\frac{1}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^{n} - \frac{1}{\sqrt{5}}\left(\frac{1-\sqrt{5}}{2}\right)^{n} & 2\left(\frac{1+\sqrt{5}}{2}\right)^{n-1} - 2 \left(\frac{1-\sqrt{5}}{2}\right)^{n-1}\\
\frac{1}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^{n-1} - \frac{1}{\sqrt{5}}\left(\frac{1-\sqrt{5}}{2}\right)^{n-1} & 2\left(\frac{1+\sqrt{5}}{2}\right)^{n-2} - 2 \left(\frac{1-\sqrt{5}}{2}\right)^{n-2}
\end{bmatrix}
\end{align*}
$$ 
Substituting this value in the earlier matrix equation, we have 
$$
\begin{align*}
\begin{bmatrix}
a_{n}\\
a_{n-1}
\end{bmatrix} &= \begin{bmatrix}
\frac{1}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^{n} - \frac{1}{\sqrt{5}}\left(\frac{1-\sqrt{5}}{2}\right)^{n} & 2\left(\frac{1+\sqrt{5}}{2}\right)^{n-1} - 2 \left(\frac{1-\sqrt{5}}{2}\right)^{n-1}\\
\frac{1}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^{n-1} - \frac{1}{\sqrt{5}}\left(\frac{1-\sqrt{5}}{2}\right)^{n-1} & 2\left(\frac{1+\sqrt{5}}{2}\right)^{n-2} - 2 \left(\frac{1-\sqrt{5}}{2}\right)^{n-2}
\end{bmatrix} \begin{bmatrix}
1\\
0
\end{bmatrix}\\ &= \begin{bmatrix}
\frac{1}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^{n} - \frac{1}{\sqrt{5}}\left(\frac{1-\sqrt{5}}{2}\right)^{n}\\
\frac{1}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^{n-1} - \frac{1}{\sqrt{5}}\left(\frac{1-\sqrt{5}}{2}\right)^{n-1}
\end{bmatrix} \end{align*}
$$
Therefore, 
$$a_n = \frac{1}{\sqrt{5}}\left(\frac{1+\sqrt5}{2}\right)^n - \frac{1}{\sqrt{5}}\left(\frac{1-\sqrt5}{2}\right)^n$$



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">9.3 Recurrence with distinct eigenvalues</summary>


Pretty much everything we did to find a closed form expression can be used to solve any degree two homogeneos recurrence relation whose characteristic polynomial has to distinct roots.  Notice that given a degree two homogeneos recurrence relation. $a_n = ba_{n-1} + ca_{n-2}$, the characteristic polynomial of the associated matrix $\begin{bmatrix}
b & c\\
1 & 0
\end{bmatrix}$ is $\lambda^2 - b\lambda - c$ and the eigenvalues are $\lambda = \frac{b\pm\sqrt{b^2+4c}}{2}$. Thus, there will be two distinct eigenvalues iff $b^2 + 4c > 0$. Let us assume this is the case and let the two eigenvalues be $\lambda_1$ and $\lambda_2$. You can check that the corresponding eigenvectors are $(\lambda_1,1)$ and $(\lambda_2,1)$ through the following computation.
$$\begin{bmatrix}
b & c\\
1 & 0
\end{bmatrix}\begin{bmatrix}
\lambda_i\\
1
\end{bmatrix} = \begin{bmatrix}
b\lambda_i + c\\
\lambda_i
\end{bmatrix} = \begin{bmatrix}
\lambda_i^2\\
\lambda_i
\end{bmatrix} = \lambda_i\begin{bmatrix}
\lambda_i\\
1
\end{bmatrix}.$$

Thus,
$$\begin{bmatrix}
b & c\\
1 & 0
\end{bmatrix} = \frac{1}{\lambda_1 - \lambda_2}\begin{bmatrix}
\lambda_1 & \lambda_2\\
1 & 1
\end{bmatrix} \begin{bmatrix}
\lambda_1 & 0\\
0 & \lambda_2
\end{bmatrix} \begin{bmatrix}
1 & -\lambda_2\\
-1 & \lambda_1
\end{bmatrix} $$
Hence,
$$
\begin{align*}
\begin{bmatrix}
b & c\\
1 & 0
\end{bmatrix}^{n-1} &= \frac{1}{\lambda_1 - \lambda_2}\begin{bmatrix}
\lambda_1 & \lambda_2\\
1 & 1
\end{bmatrix} \begin{bmatrix}
\lambda_1^{n-1} & 0\\
0 & \lambda_2^{n-1}
\end{bmatrix} \begin{bmatrix}
1 & -\lambda_2\\
-1 & \lambda_1
\end{bmatrix}\\
&= \frac{1}{\lambda_1 - \lambda_2}\begin{bmatrix}
\lambda_1 & \lambda_2\\
1 & 1
\end{bmatrix} \begin{bmatrix}
\lambda_1^{n-1} & -\lambda_2\lambda_1^{n-1}\\
-\lambda_2^{n-1} & \lambda_1\lambda_2^{n-1}
\end{bmatrix}\\
&= \frac{1}{\lambda_1 - \lambda_2}\begin{bmatrix}
\lambda_1^{n} - \lambda_2^{n} & \lambda_1\lambda_2^{n} -\lambda_2\lambda_1^n\\
\lambda_1^{n-1} - \lambda_2^{n-1} & \lambda_1\lambda_2^{n-1} - \lambda_2\lambda_1^{n-1}
\end{bmatrix}
\end{align*}
$$
Substituting this value in the matrix equation, we have
$$a_n = \frac{a_1}{\lambda_1 - \lambda_2}(\lambda_1^n - \lambda_2^n) + \frac{a_0}{\lambda_1 - \lambda_2}(\lambda_1\lambda_2^n - \lambda_2\lambda_1^n) = \frac{a_1 - a_0\lambda_2}{\lambda_1 - \lambda_2}\lambda_1^n + \frac{a_0\lambda_1 - a_1}{\lambda_1 - \lambda_2}\lambda_2^n.$$



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">9.4 Recurrence with repeated eigenvalues</summary>


Now, let us consider the case when $b^2+4c=0$.  In this case, the matrix cannot be diagonalisable.  Assume it was diagonalisable.  Then, you will be able to find an invertible matrix $B$ for which
$$\begin{bmatrix}
b & -\frac{b^2}{4}\\
1 & 0 
\end{bmatrix} = B\begin{bmatrix}
\frac{b}{2} & 0\\
0 & \frac{b}{2} 
\end{bmatrix}B^{-1} = \begin{bmatrix}
\frac{b}{2} & 0\\
0 & \frac{b}{2} 
\end{bmatrix}$$
But, that makes no sense.  So, our assumption has to be wrong - it is not diagonalisable.  However, it is still too early to lose hope.  Although, we cannot diagonalise this matrix, we can convert it into a reasonably good form.  First notice that the eigenvalue corresponding to the eigenvalue $\lambda = \frac{b}{2}$ is $(\lambda,1)$.  Now we consider another vector $v$ for which 
$$\left(\begin{bmatrix}
2\lambda & -\lambda^2\\
1 & 0 
\end{bmatrix} - \lambda I\right)v = \begin{bmatrix}
\lambda\\
1 
\end{bmatrix}.$$  
An example of such a vector is $(\lambda + 1,1)$ as shown by the following computation:
$$
\begin{align*}
\left(\begin{bmatrix}
2\lambda & -\lambda^2\\
1 & 0 
\end{bmatrix} - \lambda I\right)\begin{bmatrix}
\lambda + 1\\
1 
\end{bmatrix}= \begin{bmatrix}
\lambda & -\lambda^2\\
1 & -\lambda 
\end{bmatrix}\begin{bmatrix}
\lambda + 1\\
1 
\end{bmatrix} = \begin{bmatrix}
\lambda\\
1
\end{bmatrix}
\end{align*}
$$
To see why $\lambda^2 + 2\lambda = \lambda$, we will substitute the value of $\lambda$.  We have, $\lambda^2 + 2\lambda = \frac{b^2}{4} + b$ Notice that, for this vector $v$, 
$$\left(\begin{bmatrix}
2\lambda & -\lambda^2\\
1 & 0 
\end{bmatrix} - \lambda I\right)^2v = \left(\begin{bmatrix}
2\lambda & -\lambda^2\\
1 & 0 
\end{bmatrix} - \lambda I\right)\begin{bmatrix}
\lambda\\
1 
\end{bmatrix} = \begin{bmatrix}
0\\
0 
\end{bmatrix}$$ 
This is an example of a generalised eigenvector.  More generally,

<div class="academic-env env-definition">
<span class="env-label">Definition 9.2</span>

Given an eigenvalue $\lambda$, the vectors $v$ for which $(A-\lambda I)^kv=0$ are called generalised eigenvector.

</div>

The two vectors $(\lambda,1)$ and $(\lambda +1, 1)$ form a basis and the matrix has a nice form with respect to this basis.  More precisely,
$$
\begin{align*}
\begin{bmatrix}
\lambda & \lambda + 1\\
1 & 1 
\end{bmatrix}^{-1} \begin{bmatrix}
2\lambda & -\lambda^2\\
1 & 0 
\end{bmatrix} \begin{bmatrix}
\lambda & \lambda + 1\\
1 & 1 
\end{bmatrix} = \begin{bmatrix}
-1 & \lambda + 1\\
1 & -\lambda 
\end{bmatrix}\begin{bmatrix}
\lambda^2 & \lambda^2 + 2\lambda\\
\lambda & \lambda + 1 
\end{bmatrix} = \begin{bmatrix}
\lambda & 1\\
0 & \lambda
\end{bmatrix}
\end{align*}
$$
Therefore, 
$$
\begin{align*}
\begin{bmatrix}
2\lambda & -\lambda^2\\
1 & 0 
\end{bmatrix}^{n-1} &=\begin{bmatrix}
\lambda & \lambda + 1\\
1 & 1 
\end{bmatrix} \begin{bmatrix}
\lambda & 1\\
0 & \lambda 
\end{bmatrix}^{n-1} \begin{bmatrix}
\lambda & \lambda + 1\\
1 & 1 
\end{bmatrix}^{-1} =\begin{bmatrix}
\lambda & \lambda + 1\\
1 & 1 
\end{bmatrix} \begin{bmatrix}
\lambda^{n-1} & (n-1)\lambda^{n-2}\\
0 & \lambda^{n-1} 
\end{bmatrix} \begin{bmatrix}
-1 & \lambda + 1\\
1 & -\lambda 
\end{bmatrix}\\
&= \begin{bmatrix}
\lambda & \lambda + 1\\
1 & 1 
\end{bmatrix} \begin{bmatrix}
(n-1)\lambda^{n-2} - \lambda^{n-1} & \lambda^n + \lambda^{n-1} -(n-1)\lambda^{n-1}\\
\lambda^{n-1} & -\lambda^{n} 
\end{bmatrix} \\
&= \begin{bmatrix}
n\lambda^{n-1} & \lambda^n - \lambda n\lambda^{n-1}\\
(n-1)\lambda^{n-2}  & \lambda^{n-1} - \lambda (n-1)\lambda^{n-2} 
\end{bmatrix}
\end{align*}
$$
Substituting this value in the matrix equation, we have
$$a_n = a_0 \lambda^n + \left(a_1 - a_0\lambda\right)n\lambda^{n-1}.$$



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">9.5 Exercises</summary>




- Show that 
$$\begin{bmatrix}
\lambda & 1\\
0 & \lambda
\end{bmatrix}^n = \begin{bmatrix}
\lambda^n & n\lambda^{n-1}\\
0 & \lambda^n
\end{bmatrix}$$
- Solve these recurrence relations (without appealing to the general result) so that they also satisfy the initial conditions:

- $a_{n+1} = 2a_n$, $a_0 = 2$
- $a_{n+1} = (a_n)^2$, $a_0 = 1$
- $a_{n+1} = (a_n)^2$, $a_0 = 2$
- $a_{n+2}= 2a_{n}$, $a_0= 0$, $a_1= 4$
- $a_{n+2} = 6a_{n+1} + 4 a_{n}$, $a_0 = 1$, $a_1 = 1$
- $a_{n+2} = 5a_{n+1} - 4a_n$, $a_0 = 2$, $a_1 = 5$
%- $a_{n} = 2a_{n-1}+ 5a_{n-2}- 6a_{n-3}$, $a_0 = 7$, $a_1 = -4$, $a_2 = 8$.
%- $a_{n} = 7a_{n-1} -16a_{n-2} + 12a_{n-3}$, $a_0 = 7$, $a_1 = -4$, $a_2 = 8$.

- In how many ways can a $2 \times n$ rectangular checkerboard be tiled using $1 \times 2$ and $2 \times 2$ pieces?
- Prove this identity relating the Fibonacci numbers and the binomial coefﬁcients:
$f_{n+1} = \binom{n}{0} + \binom{n - 1}{1} + \dots + \binom{n - k}{k}$ 
where $n$ is a positive integer and $k = \lfloor n/2 \rfloor$. 
[Hint: Let $a_n = \binom{n}{0} + \binom{n - 1}{1} + \dots + \binom{n - k}{k}$. 
Show that the sequence $a_n$ satisﬁes the same recurrence relation and initial conditions satisﬁed by the sequence of Fibonacci numbers.]
- A partition of a positive integer $n$ is a way to write $n$ as a sum of positive integers where the order of terms in the sum does not matter. For instance, $7 = 3 + 2 + 1 + 1$ is a partition of $7$. Let $P_m$ equal the number of different partitions of $m$, and let $P_{m,n}$ be the number of different ways to express m as the sum of positive integers not exceeding n.

- Show that $P_{m,m}= P_m$
- Show that the following recursive definition for $P_{m,n}$ is correct:
$$P_{m,n} = \begin{cases}
1 & \text{ if $m = 1$}\\
1 & \text{ if $n = 1$}\\
P_{m,m} & \text{ if $m< n$}\\
1 + P_{m,m-1} & \text{ if $m=n>1$}\\
P_{m,n-1} + P_{m-n,n} & \text{ if $m>n>1$}
\end{cases}$$
- Find the number of partitions of 5 and of 6 using this recursive definition.
- Implement this function in gofer



\begingroup
\let\clearpage\relax
\bibliographystyle{amsalpha}
\begin{thebibliography}{A}

\bibitem[Matoušek]{Matoušek} Matoušek, Jiří. *Thirty-three miniatures: Mathematical and Algorithmic applications of Linear Algebra*. Vol. 53. American Mathematical Soc., 2010.

\bibitem[Babai-Frankl]{Babai-Frankl} Laszlo Babai, Peter Frankl . *Linear Algerba methods in Combinatorics*. \url{https://dn710000.ca.archive.org/0/items/linear-algebra-book-collection/BaFrNew.pdf}. 

\end{thebibliography}
\endgroup


</details>