# Intermediate counting techniques



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">7.1 Binomial theorem</summary>




<div class="academic-env env-theorem">
<span class="env-label">Theorem 7.1</span>

For every pair of real numbers $x,y$ and every natural number $n$, 
$$(x+y)^n = \sum_{k=0}^n \binom{n}{k}x^ky^{n-k}.$$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We will use a proof by induction.  As I had mentioned in a proof earlier, induction is used to prove statements of the form $\forall n, P(n)$.  Here, $$P(n):= \forall (x,y)\in \mathbb{R}^2, (x+y)^n = \sum_{k=0}^n \binom{n}{k}x^ky^{n-k}.$$
We will first prove $P(0)$.  Let $(x,y) \in \mathbb{R}^2$ be arbitrary. Clearly, $(x+y)^0 = 1$, and $\binom{0}{0} = 1$ (there is a $0$ element subset for the $0$ element set).  Thus,  
$$(x+y)^0 = 1 = \binom{0}{0}x^0y^0 = \sum_{k=0}^0\binom{0}{0}x^0y^0.$$
As, $(x,y)\in \mathbb{R}^2$ was arbitrary, the statement is true for all $(x,y)\in \mathbb{R}^2$. Hence, $P(0)$ is true.  Now assume $P(n)$ is true.  That is,
$$\forall (x,y)\in \mathbb{R}^2, (x+y)^n = \sum_{k=0}^n \binom{n}{k}x^ky^{n-k}.$$
We will now prove the statement $P(n+1)$.  Let $(x,y)\in \mathbb{R}^2$ be arbitrary.  Notice that 
$$
\begin{align*}
        (x+y)^{n+1} &= (x+y)(x+y)^n \\ 
        &= (x+y)\sum_{k=0}^n \binom{n}{k}x^ky^{n-k}& \text{by the Induction hypothesis}\\
        &= x\sum_{k=0}^n \binom{n}{k}x^ky^{n-k} + y\sum_{k=0}^n \binom{n}{k}x^ky^{n-k} & \text{by distributivity}\\
        &= \sum_{k=0}^n \binom{n}{k}x^{k+1}y^{n-k} + \sum_{k=0}^n \binom{n}{k}x^ky^{n-k+1}& \text{by distributivity}\\
    \end{align*}
$$

We would like the index of the summation represent the power of $x$, so we would replace $k$ by $k-1$ in $\sum_{k=0}^n \binom{n}{k}x^{k+1}y^{n-k}$ and obtain 
$$\sum_{k=1}^{n+1} \binom{n}{k-1}x^ky^{n-k+1} = \binom{n}{n}x^{n+1}y^0 + \sum_{n=1}^{k} \binom{n}{k-1}x^ky^{n-k+1} = \binom{n+1}{n+1}x^{n+1}y^0 + \sum_{n=1}^{k} \binom{n}{k-1}x^ky^{n-k+1} .$$  We also have 
$$\sum_{k=0}^n \binom{n}{k}x^ky^{n-k+1} = \binom{n}{0}x^0y^{n+1} + \sum_{k=1}^n \binom{n}{k}x^ky^{n-k+1} = \binom{n+1}{0}x^0y^{n+1} + \sum_{k=1}^n \binom{n}{k}x^ky^{n-k+1}.$$  
Thus, 
$$
\begin{align*}
        (x+y)^{n+1} &= \binom{n+1}{0} x^0y^{n+1} + \left(\sum_{k=1}^n \left[\binom{n}{k-1} + \binom{n}{k}\right] x^ky^{n-k+1}\right) + \binom{n+1}{n+1}x^{n+1}y^0 \\
         &= \binom{n+1}{0} x^0y^{n+1} + \left(\sum_{k=1}^n \binom{n+1}{k}x^ky^{n+1-k}\right) + \binom{n+1}{n+1}x^{n+1}y^0\\
         &= \sum_{k=0}^{n+1} \binom{n+1}{k}x^ky^{n+1-k}
    \end{align*}
$$

</details>
</div>


\begin{corollary}
$\sum_{k=0}^n \binom{n}{k} = 2^n$
\end{corollary}


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Substituting $x=1$ and $y=1$ in the binomial theorem gives us
$$2^n = (1 + 1)^n = \sum_{k=1}^n\binom{n}{k}1^k1^{n-k} = \sum_{k=1}^n\binom{n}{k}.$$

</details>
</div>


\begin{corollary}
$\sum_{k=0}^n (-1)^k\binom{n}{k} = 0$
\end{corollary}


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Substituting $x=-1$ and $y=1$ in the binomial theorem gives us
$$0 = 0^n = (-1 + 1)^n = \sum_{k=1}^n\binom{n}{k}(-1)^k1^{n-k} = \sum_{k=1}^n (-1)^k\binom{n}{k}.$$

</details>
</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">7.2 Combinatorial proofs</summary>




<div class="academic-env env-theorem">
<span class="env-label">Theorem 7.2</span>

$\binom{n}{k} = \binom{n}{n-k}$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $\mathcal{A}$ be the set of all $k$ subsets of $I_n$ and let $\mathcal{B}$ be the set of all $n-k$ sunsets of $I_n$.  Then, there is a bijection $\varphi:\mathcal{A} \to \mathcal{B}$ defined as $\varphi(A) = I_n \setminus A$.  Thus, the number of $k$ subsets of $I_n$, $\binom{n}{k}$, is equal to the number of $n-k$ subsets of $I_n$, $\binom{n}{n-k}$.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 7.3</span>

$\sum_{k=0}^n \binom{n}{k} = 2^n$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

A subset of $I_n$ can have $0$ elements, $1$ element, $2$ elements,... or $n$ elements.  The number of $0$ element subsets is given by $\binom{n}{0}$, the number of $1$ element subsets is given by $\binom{n}{1}$,..., number of $n$ element subsets is given by $\binom{n}{n}$.  Thus, the total number of subsets is equal to $\sum_{k=0}^n \binom{n}{k}$.  But, we proved earlier that the total number of subsets of $I_n$ is $2^n$.  Thus, the two quantities have to be equal, that is, $\sum_{k=0}^n \binom{n}{k} = 2^n$.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 7.4</span>

$k\binom{n}{k} = n\binom{n-1}{k-1}$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Suppose we have a group of $n$ people.  We can choose a subgroup of $k$ people in $\binom{n}{k}$ ways.  Once a subgroup is chosen, a leader can be chosen from among these $k$ people in $k$ ways.  Thus, using the multiplication principle, there are $k\binom{n}{k}$ ways to choose a $k$ element subgroup with a leader.  Another approach to the same problem would be to first choose a leader from the $n$ people.  This can be done in $n$ ways.  Once the leader is chosen, the remaining people can be chosen in $\binom{n-1}{k-1}$ ways.  Thus, the total number of ways of choosing a $k$ element subgroup with a leader is equal to $n\binom{n-1}{k-1}$.  Thus,
$k\binom{n}{k} = n\binom{n-1}{k-1}$.

</details>
</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">7.3 Stars and Bars</summary>




<div class="academic-env env-example">
<span class="env-label">Example 7.1</span>

You have $7$ cookies to give to $4$ kids.  How many ways can you do this?  You may assume that the cookies are all identical, so only the number of cookies given to kids matter.  You may also assume that it is OK to give $0$ cookies to a kid.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

If $x_i$ denotes the number of cookies the $i$-th kid receives, then each solution corresponds to a tuple $(x_1,x_2,x_3,x_4)$ such that $x_1 + x_2 + x_3 + x_4 = 7$.   For this particular problem, we can even use brute force and list all possible solutions. But, if we would like to solve more complicated problems, it would help to notice that there is a bijective correspondence between solutions of this problem and a string of $7$ stars and $3$ bars.  For instance the solution $(1,2,3,1)$ correspond to $*|**|***|*$ and the solution $(0,4,0,3)$ correspond to $|****||***$.  The number of distinct strings of stars and bars is determined by the positions of the bars (or equivalently the positions of the stars).  Among a total of $10$ positions, we need to pick $3$ positions and this can be done in $\binom{10}{3}$.

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 7.2</span>

How many natural number solutions to $x_1 + x_2 + x_3 + x_4 = 25$ are there for which $x_1 \geq 1$, $x_2 \geq 2$, $x_3 \geq 3$, and $x_4 \geq 4$?

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

Let us use the analogy from previous problem.  AS $x_1 \geq 1$, $x_2 \geq 2$, $x_3 \geq 3$, and $x_4 \geq 4$, we can first distribute $1$, $2$, $3$, and $4$ cookies to kids $1$, $2$, $3$, and $4$ respectively.  In other words, $\{(x_1,x_2,x_3,x_4) : x_1 + x_2 + x_3 + x_4 = 25, x_1 \geq 1, x_2 \geq 2, x_3 \geq 3, x_4 \geq 4 \} = \{(x_1,x_2,x_3,x_4) + (1,2,3,4) : x_1 + x_2 + x_3 + x_4 = 15\}$.  And from the same argument as before, $|\{(x_1,x_2,x_3,x_4) + (1,2,3,4) : x_1 + x_2 + x_3 + x_4 = 15\}| = \binom{18}{3}$

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 7.3</span>

How many natural number soltuions are there to $x_1 + x_2 + x_3 = 12$ such that $x_i \leq 5$ for all $i$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

As before, there are $\binom{14}{2}$ natural number solutions to the equation $x_1 + x_2 + x_3 = 12$.  However, this includes solutions where some of the $x_i$ are greater than $5$.  Let $A_i = \{(x_1,x_2,x_3) : x_1 + x_2 + x_3 = 12, x_i > 5\}$.  Then the set of solutions that violate the conditions $x_i \leq 5$ for all $i$ is given by $A_1 \cup A_2 \cup A_3$.  It is easy to check that $A_1 \cap A_2 = \{(6,6,0)\}$, $A_2 \cap A_3 = \{(0,6,6)\}$, $A_1 \cap A_3 = \{(6,0,0)\}$, and $A_1 \cap A_2 \cap A_3 = \{\}$.  In $A_1$ as we want $x_1 > 6$, we can first replace $y_1 = x_1 + 6$ and we have 
$$|\{(x_1,x_2,x_3) : x_1 + x_2 + x_3 = 12, x_1 > 5\}| = \{(y_1,x_2,x_3) : y_1 + x_2 + x_3 = 6\}| = \binom{8}{2}.$$
Similarly, $|A_2| = |A_3| = \binom{8}{2}$.  Thus, from the PIE, we have:
$$
\begin{align*}
        |A_1 \cup A_2 \cup A_3| &= |A_1| + |A_2| + |A_3| - |A_1 \cap A_2| - |A_2 \cap A_3| - |A_1 \cap A_3| + |A_1 \cap A_2 \cap A_3|\\
        &= \binom{8}{2} + \binom{8}{2} + \binom{8}{2} - 1 - 1 - 1 + 0\\
        &= 81.
    \end{align*}
$$

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 7.4</span>

How many natural number solutions are there for $x_1 + x_2 + x_3 \leq 12$?

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

Let $y = 12 - x_1 - x_2 - x_3$.  Then, $y$ is a natural number and we have an equation $x_1 + x_2 + x_3 + y = 12$.  Notice that there is a bijection $\varphi \{(x_1,x_2,x_3,y)\in \mathbb{N}^4:x_1 + x_2 + x_3 + y =12\} \to \{(x_1,x_2,x_3) \in \mathbb{N}^3 : x_1 + x_2 + x_3 \leq 12\}$ defined by $\varphi(x_1,x_2,x_3,y) = (x_1,x_2,x_3)$.  Thus, they both have the same cardinality.  Using stars and bars as before, we get that the cardinality of $\{(x_1,x_2,x_3,y)\in \mathbb{N}^4:x_1 + x_2 + x_3 + y =12\}$ is equal to $\binom{15}{3}$

</details>
</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">7.4 Exercises</summary>




- In how many ways can $25$ identical donuts be distributed to four police ofﬁcers so that each ofﬁcer gets at least three but no more than seven donuts?
- How many solutions does the equation $x_1 + x_2 + x_3 = 11$ have, where $x_1,x_2,x_3$ are non negative integers?
- How many solutions does the equation $x_1 + x_2 + x_3 = 20$ have, where $4\leq x_1,x_2,x_3 \leq 8$ are non negative integers?
- An *anagram* of a word is just a rearrangement of its letters.  How many anagrams are there of “anagram”?
- Find the number of strictly increasing functions from $I_n = \{1,\dots,n\}$ to $I_m = \{1,\dots,m\}$
- A coin (with sides Head and Tail) is tossed n times and the outcome noted each time. We get a sequence of length n of Heads and Tails.  How many sequences are there with $k$ Heads?
- A professor writes 40 discrete mathematics true/false questions. Of the statements in these questions, 17 are true. If the questions can be positioned in any order, how many different answer keys are possible?
- There are six runners in the 100-yard dash. How many ways are there for three medals to be awarded if ties are possible? (The runner or runners who ﬁnish with the fastest time receive gold medals, the runner or runners who ﬁnish with exactly one runner ahead receive silver medals, and the runner or runners who ﬁnish with exactly two runners ahead receive bronze medals.)



</details>