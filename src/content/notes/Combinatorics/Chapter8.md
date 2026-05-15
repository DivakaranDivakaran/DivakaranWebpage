# Recurrence relations

In this lecture, we will look at four problems.  Each of these problems are interesting but hard.  However, they become manageable if you break it down to smaller problems or more technically apply recursion.  The overall moral of today's story is that recursion is a powerful tool in solving combinatorial problems.  



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">8.1 Tower of Hanoi</summary>



The now famous puzzle of Tower of Hanoi was first Edouard Lucas.  This puzzle involves three pegs and some disks (with holed out centres).  Initially all the disks are stacked in decreasing sizes one on top of the other on one of the pegs.  The aim is to move the disks to transfer all the disks onto another peg following the rules below:


- You can move only one disk at a time.
- You cannot place a larger disk atop a smaller disk.




<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_8828180dbbb5d52c5b311b7035f741fd.png" alt="Figure" class="max-w-full h-auto" /></div>



Lucas claims that the puzzle was inspired by a Hindu myth.  According to this myth, when the world was created, Brahma placed 64 golden disks on the first pegs.  He tasked priests to move these 64 golden disks to the third peg.  These priests have been sincerely doing their tasks day and night.  When they complete this transfer, the world will end.

The number of disks in the model is $8$, while the number of disks in the myth is $64$.  In general, one may assume that there are $n$ disks.  We are interested in finding an optimal solution to the problem of transferring these $n$ disks following the rules.  My presentation of the topic is heavily inspired by the excellent book \cite{Graham-Kuth-Patashnik}



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_125ad3776e4a075df663aef448caddec.png" alt="Figure" class="max-w-full h-auto" /></div>



When you encounter such questions, it is best to first start with smaller numbers.  A solution when there are just $3$ disks is provided in Figure **??**.  This particular solution already reveals a key trick. We first moved the first two disks (in increasing size) to peg B.  This was achieved by step $3$.  Then moved the last disk to peg C. After which the two disks on peg B were moved on to peg $C$.  This idea can be used to obtain an algorithm for the general case.  Let $T_k$ represents the number of steps required to solve the puzzle when there are $k$ disks.  

- We transfer $n-1$ disks to peg B.  This can be done in $T_{n-1}$ steps.
- Move the last disk to peg C.  Of course, just one step.
- Move the $n-1$ disks from peg B to peg C.  This can again be done in $T_{n-1}$ steps.

Thus, we can certainly move all $n$ disks to peg $C$ in atmost $2T_{n-1} + 1$.  But, how do we know is this is the optimal solution?  Notice that if we want to move the largest disk to peg C, then you should have first moved all the other $n-1$ disks on to peg $B$.  If there are some disks on peg A, then you cannot lift the largest disk.  If there are some disks on peg C, then you cannot place the largest disk on peg C.  Thus, we could not have done any better and this is the optimal strategy.  Thus, the number of moves required satisfy the recurrence relation
$$
\begin{align*}
T_n = 2T_{n-1} + 1 & \text{ and } T_0 = 0
\end{align*}
$$

Thus, we can guess the formula as follows,

$$
\begin{align*}
T_n &= 2T_{n-1} + 1\\
&= 2(2 T_{n-2} + 1) + 1 = 4T_{n-2} + 3\\
&= 4(2T_{n-3} + 1) + 3 = 8T_{n-3} + 7\\
&.\\
&.\\
&.\\
&= 2^{n-1}T_{1} + 2^{n-1} -1\\
&= 2^n - 1
\end{align*}
$$

Or we can prove the formula more rigorously using induction.  

<div class="academic-env env-theorem">
<span class="env-label">Theorem 8.1</span>

$\forall n, T_{n} = 2^n - 1$

</div>


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Proof (by induction))</summary>

Notice that $P(n):= T_{n} = 2^n - 1$.  The base case is easy to check $2^0 - 1 = 0$.  Now assume $P(k)$, that is, $T_k = 2^k-1$.  Thus, 
$$
\begin{align*}
T_{k+1} = 2T_{k} + 1 = 2.(2^k - 1) + 1 = 2^{k+1} - 2 + 1 = 2^{k+1} - 1. 
\end{align*}
$$
Thus, $P(k+1)$ is true.  Hence, by the principle of mathematical induction, $P(n)$ is true for all $n$.  That is, $T_n = 2^n - 1$.

</details>
</div>

As $2^{64}$ is an enormous number even if the priests transfer a disk every second and work non-stop, the world is not going to end any time soon.  



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">8.2 Josephus problem</summary>


The next problem we are about to discuss is called the Josephus problem and is again inspired from children's games.  When you play hide-and-seek you often decide the `it' (the person who seeks) with the help of a rhyme like - inky pinky ponky, father had a donkey, donkey died, father cried, inky pinky ponky.  If the rhyme ends on a person, that person is safe and we repeat the process.  The last person standing is the `it'.  The role of the song in this process is limited to determining a step size, say $k$.  The $k$-th person is eliminated when the song ends and the process continues.  The Josephyus problem asks: Suppose we have $n$ people standing in a circle and for simplicity, let us just call them $1,2,\dots,n$.  Further suppose we have chosen a song of length $k$.  Assuming we clock counter clockwise, who will be chosen as the `it'.

Let us denote the solution to the general Josephus problem by $J(n,k)$.  Interestingly, this simple looking problem has no closed form solution, in general.  However, for the special case when $n=2$, we can find a closed form solution.  Let us see how we can do that.  For simplicity, we will denote $J(n,2)$ with $f(n)$.  We will solve the problem by separately looking at cases when $n$ is even and when $n$ is odd.

Suppose $n$ is even.  That is $n = 2m$.  The players will be eliminated in the order $2,4,\dots$.  After $m$ rounds of singing, all the $m$ even numbers between $1$ and $n$ ($2,4,\dots,2m$) will be eliminated and we should start counting from $1$.  That is, only $m$ players remain and thus we may renumber the players as $1,2,\dots,m$.  But notice that the player who is standing in position $k$ now was earlier in position $2k-1$.  As before, we assume we know how to solve this smaller problem and say that the person numbered $f(m)$ will survives this process.  However, the original numbering of this person was $2f(m) - 1$.  Thus,
$$f(2m) = 2f(m) - 1.$$

Suppose $n$ is odd.  That is $n = 2m - 1$.  The players will be eliminated in the order $2,4,\dots$.  After $m$ rounds of singing, all the $m-1$ even numbers between $1$ and $n$ ($2,4,\dots,2m-2$) will be eliminated and then the player at position $1$ will be eliminated.  Thus, $m-1$ survivors are $3,5,\dots, 2m-1$.  We can renumber them to be $1,2,\dots,m-1$.  But notice that the player who is standing in position $k$ now was earlier in position $2k+1$.  As before, we assume we know how to solve this smaller problem and say that the person numbered $f(m-1)$ will survive this process.  However, the original numbering of this person was $2f(m-1) + 1$.  Thus,
$$f(2m-1) = 2f(m-1) + 1.$$


<div class="academic-env env-theorem">
<span class="env-label">Theorem 8.2</span>

$\forall n$, if $n = 2^m + l$ where $0\leq l < 2^m$ then $f(n) = 2l + 1$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We will prove this statement using strong induction on $n$. For $n=0$, we have $m=0$ and $l=0$.  Thus, to prove the base case, we need to prove that $f(1) = 2.0 + 1 = 1$.  If there is only one player, he survives.  

Now, assume that if $n \leq k$ and $n = 2^m + l$ where $0\leq l < 2^m$ then $f(n) = 2l + 1$.  We need to now prove that if $k+1 = 2^M + L$, then $f(k+) = 2L + 1$.   

First assume $k+1$ is even, which implies $L = 2q$.  Thus, $k+1 = 2^M + 2q = 2.(2^{M-1} + q)$.  Hence, 
$$
\begin{align*}
f(k+1) &= 2.f(2^{M-1} + q) - 1 & \text{ by the recurrence relation}\\
&= 2(2q + 1) - 1 & \text{ by Induction hypothesis}\\
&= 2.2q +1 \\
&= 2.L + 1\\
\end{align*}
$$
Now let $k+1$ be odd.  Then, $L = 2q-1$.  Thus, $k+1 = 2^M + 2q - 1 = 2.(2^{M-1} + q) - 1$.  Hence,
$$
\begin{align*}
f(k+1) &= 2.f(2^{M-1} + q - 1) + 1 & \text{ by the recurrence relation}\\
&= 2.(2(q-1) + 1) + 1 & \text{by Induction hypothesis}\\
&= 2.(2q - 1) + 1\\
&= 2L + 1
\end{align*}
$$
Thus, $P(k+1)$ is true and hence by the principle of mathematical induction, we have the result.

</details>
</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">8.3 Pizza cutting</summary>



With $n$ cuts using a pizza cutter what is the maximum number of pieces you can create?  Or mathematically, what is the maximum number of regions $R_n$ that can be formed by drawing $n$ lines on a plane?  We can easily check the values for small values of $n$, namely $R_0 = 1$, $R_1 = 2$, $R_3 = 4$, and $R_4 = 7$ as shown in the Figure **??** and Figure **??**.  



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_c993f59a641d4d7a0a59d80880f79305.png" alt="Figure" class="max-w-full h-auto" /></div>





<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_708e238bea494e44d7bf810d4458aa0b.png" alt="Figure" class="max-w-full h-auto" /></div>



Assume you have already drawn $k$ lines that divide the plane maximally.  If the $(k+1)$-th line intersets the existing lines at $l$ points, it creates $l+1$ new regions.  However, two lines can intersect at atmost one point.  Thus, $l\leq k$.  Hence if $R_n$ is the maximum number of regions formed by $n$ lines, 
$$R_{k+1} \leq R_k + (k+1).$$

We will now give an algorithm to construct a line that intersects each of the $k$ lines.  Choose a point $A$ not on these $k$ lines.  Only finitely many lines passing through $A$ will be parallel to one of the existing lines or will pass through the intersection of existing lines.  Thus, you can choose a line that is not parallel to any of the existing lines or passes through the intersection of existing lines.  Thus, this line will intersect all the $k$ lines and creates $(k+1)$ new regions.    Thus,
$$R_{k+1} \geq R_k + (k+1).$$
Combining the two inequalities, we have
$$R_{k+1} = R_k + (k+1).$$

We can observe a closed form formula for $R_n$ by using this recurrence relation. Namely,
$$
\begin{align*}
R_n = R_{n-1} + n = R_{n-2} + (n-1) + (n-2) = ... = R_0 + 1 + 2 + \dots n = 1 + \frac{n(n+1)}{2}.
\end{align*}
$$

Of course, the above argument should not be considered a proof.  But, this gives us a guess.  To give a rigorous proof, we should use induction.


<div class="academic-env env-theorem">
<span class="env-label">Theorem 8.3</span>

For all $n\in \mathbb{N}\setminus \{0\}$, $R_n = 1 + \frac{n(n+1)}{2}$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Proof by induction)</summary>

Left as an Exercise

</details>
</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">8.4 Multiplication problem</summary>


Given $n$ matrices $A_1,A_2,\dots,A_n$, in how many ways can we compute the product $A_1\times A_2 \times \dots \times A_n$.  Recall that matrix multiplication is associative, but not commutative.  Thus, $(A_1\times A_2)\times A_3$ and $A_1\times (A_2\times A_3)$ give the same result.  However, $(A_2\times A_1)\times A_3$ need not give the same result.  And when we write $A_1\times A_2\times A_3$ we mean the value $(A_1\times A_2)\times A_3 = A_1\times (A_2\times A_3)$.  If there are four matrices, we can multiply them in five different ways as follows:
$$
\begin{align*}
A_1\times (A_2\times (A_3\times A_4)) &= A_1\times ((A_2\times A_3)\times A_4) = (A_1\times A_2)\times (A_3\times A_4)\\
&= (A_1\times (A_2\times A_3))\times A_4 =((A_1\times A_2)\times A_3)\times A_4.
\end{align*}
$$

These two examples are enough to observe a general pattern.  Notice that there is one $\times$ that is outside all paranthesis and we will focus on it.  This $\times$ can appear after $A_k$ where $1\leq k < n$.  On the left we have a product of $k$ terms and on the right we have a product of $n-k$ terms.  Let us denote the number of ways we can multiply $i$ matrices in order by $C_i$.  Then, the total number of products in which the $\times$ appears after $A_k$ is given by $C_kC_{n-k}$.  Further, $k$ can be any number in $\{1,2,\dots,n-1\}$.  Thus, we have the recurrence relation,
$$C_n = \sum_{k=1}^{n-1} C_kC_{n-k}.$$
It is also easy to see that $C_1 = 1$ and $C_2 = 1$.  



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">8.5 Exercises</summary>




- Let $I(n,k)$ be the number of injective functions from $I_n = \{1,2,\dots,n\}$ to $I_k = \{1,2,\dots,k\}$. Find a recurrence relation satisfied by $I(n,k)$ and prove your claim **rigorously**. 
- Write a function \verb|removeDuplicates| in gofer that takes a list and removes all of its duplicate elements.
- Write a function in gofer that takes a sequence of positive integers, and returns the longest increasing subsequence of the sequence.  Write a function in gofer that takes a sequence of positive integers, and returns the longest decreasing subsequence of the sequence.
- Write a function in gofer that takes a number $C$ and returns all solutions $(x_1,\dots,x_n)$ of the equation $x_1 + x_2 + \dots + x_n= C$.
- Describe a recursive algorithm for multiplying two nonnegative integers $x$ and $y$ based on the fact that $xy = (2x)(y/2)$ when $y$ is even and $xy$ = $(2x) \lfloor y/2\rfloor + x $ when $y$ is odd, together with the initial condition $xy = 0$ when $y=0$.  Implement it in gofer.  
- The Josephus problem $J(n,2)$ determines the survivor if every second person is killed.  If $I(n)$ determines the number of the penultimate survivor, find a recurrence relation for $I(n)$.
- We draw $n$ mutually intersecting circles in the plane so that each one crosses each other one exactly twice and no three intersect in the same point. (As examples, think of Venn diagrams with two or three mutually intersecting sets.) Find a recurrence for the number $r_n$ of regions into which the plane is divided by $n$ circles.  Find the number of regions with $n$ circles. For what values of $n$ can you draw a Venn diagram showing all the possible intersections of $n$ sets using circles to represent each of the sets?
- Consider a variation of tower of Hanoi where you cannot move directly between the first peg and the third.  Each move from the first or third peg has to be to the second peg.  Find a shortest sequence of moves under this condition.  Explain clearly why you cannot do better than what you have suggested.  Use these observations to set up a recurrence relation for the number of steps $T_n$.


\begingroup
\let\clearpage\relax
\bibliographystyle{amsalpha}
\begin{thebibliography}{A}

\bibitem[Graham-Kuth-Patashnik]{Graham-Kuth-Patashnik} Ronald L. Graham, Donald E. Knuth, Oren Patashnik . *Concrete Mathematics*. Addison-Wesley Publishing Company, 1989. 

\end{thebibliography}
\endgroup

</details>