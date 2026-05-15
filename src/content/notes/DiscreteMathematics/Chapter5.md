# Basic counting principles
\label{ch:5}
What is a number?  Not a very straight-forward question, I believe.  But, as we all know, numbers have two function - quantification and denoting position/order.  The former correspond to cardinal numbers and the latter to ordinal numbers.  Famous mathematician John von Neumann and Ernst Zermello had independently discovered ways to define \href{https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers}{natural numbers using set theory}.  This however, is not part of this course and would not be discussed.  

The idea of cardinal numbers is that it is the abstraction of that which is common between three sheep and three men.  Digging a bit deeper, we say a collection of sheep and collection of men, have same *number*, if I can distribute all sheep among the men such that all men have exactly one sheep.  In mathematics, we consider only well-defined collections, called sets.  The existence of a bijection, is an equivalence relation on any collection of sets - including the collection of all sets<span class="footnote-trigger" title="The collection of all sets, unfortunately, is not a set - Russel's paradox is a famous paradox that warned mathematicians and informed that we have to be more careful in our definition of sets."><sup>[*]</sup></span>.  Equivalence class under this equivalence relation can be considered (cardinal) *numbers*<span class="footnote-trigger" title="Note that we didn't assume that our sets are finite."><sup>[*]</sup></span>.  .

It is clear to us that there is a surjection from a set to any of its non-empty subset, and an injection from a subset to its superset.  We can define relations:

- $\sim_i$ as $A \sim_i B$ iff there exists an injection $f: A \to B$.
- $\sim_s$ as $A \sim_s B$ iff there exists a surjection $f: A \to B$. 


It is easy to see that the above relations are reflexive and transitive.  It was initially believed that

- if $A \sim_i B$ then $A$ has lesser number of elements than $B$
- if $A \sim_s B$ then $A$ has greater number of elements than $B$

This intuition comes from our experience with *finite* sets.  However, the function $f: \mathbb{N} \to \{2n : n\in \mathbb{N}\}$ defined as $f(n) = 2n$ is injective.  And the function $g: \{2n : n\in \mathbb{N}\} \to \mathbb{N}$ defined as $g(n) = 2n + 1$ is surjective.  Thus, our intuition does not work for *infinite* sets.  In fact, this *violation* can be considered the defining property of infinite sets.


<div class="academic-env env-definition">
<span class="env-label">Definition 5.1</span>

A set $A$ is called **finite** if there does not exist an injection from $A$ to any of its proper subsets.  A set that is not finite is called an **infinite** set.

</div>



<div class="academic-env env-remark">
<span class="env-label">Remark 5.1</span>

Suppose there exists $B \subsetneq A$ and an injection $f: A \to B$.  We can restrict the codomain to $\text{Range}(f)$ and make $f$ a bijection.  Note that, $f^{-1}: \text{Range}(f) \to A$ is a surjection.  Thus, if there is an injection from $A$ to a proper subset, there is a surjection from a proper subset of $A$ to $A$.

Similarly, suppose there exists $B\subsetneq A$ and a surjection $f:B \to A$.  Let $B'$ be a subset of $B$ that contains exactly one representative from each $f^{-1}(\{a\})$.  Then $f|_{B'}: B' \to A$ is a bijection and $f_{B'}^{-1}: A \to B'$ is an injection.  Thus, if there is a surjection from a proper subset of $A$ to $A$, then there is an injection from $A$ to a proper subset.  

Hence, we could have equivalently defined: a set $A$ is called **finite** if there does not exist a surjection from a proper subset of $A$ to A.

</div>




<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">5.1 Pigeon-hole Principle</summary>



Let us now restrict our attention to finite sets.  The most important examples of finite sets would be $I_n = \{k\in \mathbb{N} : k \leq n\}$.  As $I_k \subsetneq I_{k+1}$


<div class="academic-env env-theorem">
<span class="env-label">Theorem 5.1 (Pigeonhole Principle)</span>

There exists no injection from $I_{k+1} \to I_{k}$.  More generally, if $m > n$, then there exists no injection from $I_m \to I_n$.

</div>



<div class="academic-env env-remark">
<span class="env-label">Remark 5.2</span>

On the collection of finite sets, $\sim_i$ and $\sim_s$ can thus be thought of as an order, like $\leq$ and $\geq$.

More generally, relations $\sim_i$ and $\sim_s$ between sets induce a well defined relation between cardinal classes.  The famous Shroeder-Berstein theorem tell you that the induced relation is antisymmetric.  Intuitively, they behave like $\leq$ and $\geq$, as we had hoped it would.  Thus, these relations form a **partial order**, that is, they satisfy the following properties.     

- **Reflexivity:** For every element $x$, $x\sim x$.
- **Antisymmetry:** If $x \sim y$ and $y \sim x$, then $x = y$.
- **Transitivity:** If $x \sim y$ and $y \sim z$, then $x \sim z$.

Note that $\leq$ and $\geq$ are examples of partial order.

</div>


Pigeon hole principle can be used to solve several interesting problems.


<div class="academic-env env-example">
<span class="env-label">Example 5.1</span>

% from \cite{Rosen}
How many numbers must be selected from the set $\{1, 2, 3, 4, 5, 6\}$ to guarantee that at least one pair of these numbers add up to 7?

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

Notice that $1 + 6 = 7$, $2 + 5 = 7$, and $3 + 4 = 7$.  Let $A_1 = \{1,6\}$, $A_2 = \{2,5\}$, and $A_3 = \{3,4\}$.  By the Pigeon hole principle, if we take a subset of $\{1,2,3,4,5,6\}$ containing $4$ elements, $2$ of these will belong to the same $A_i$.  Hence, there will be a pair with sum $7$.

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 5.2</span>

%\cite{Bogart}
Let $p$ be a prime not equal to $2$ or $5$.  Show that there exists an $n\in \mathbb{N}$ such that $p^k$ has $01$ as the last two digits for some $k \leq n$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

Notice that the last two digits of $p^k$ will be $01$ iff the remainder when you divide $p^k$ with $100$ is $1$.  That is, $p^k \equiv 1 \text{ mod } 100$.  Further notice that $p^k \text{ mod } 100$ can take only values $\{1,\dots,99\}$.  Thus, if $n > 99$, then $p^k \equiv p^l \text{ mod } 100$ for some values $k,l < n$.  Assuming $k>l$, we have $p^{k-l} \equiv 1 \text{ mod } 100$.

</details>
</div>



<div class="academic-env env-remark">
<span class="env-label">Remark 5.3</span>

Theorems by \href{https://en.wikipedia.org/wiki/Euler%27s_theorem}{Euler} and \href{https://en.wikipedia.org/wiki/Carmichael_function#Carmichael's_theorems}{Carmichael} give better upper bounds for $n$.

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">5.2 Addition Principle</summary>



We saw earlier that we can treat numbers as the equivalence class of sets under bijection.  The union of disjoint sets would then correspond to addition of numbers; addition was defined to ensure this property.  Thus,


<div class="academic-env env-theorem">
<span class="env-label">Theorem 5.2 (Addition Principle)</span>

Given two sets $A$ and $B$ are disjoint sets, then $|A \cup B| = |A| + |B|$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 5.3</span>

We usually write numbers in decimal form (or base $10$), meaning numbers are composed using 10 diﬀerent “digits” $\{ 0, 1, . . . , 9 \}$. Sometimes though it is useful to write numbers in hexadecimal or base 16. Now there are $16$ distinct digits that can be used to form numbers: $\{0, 1, . . . , 9, A, B, C, D, E, F\}$. So for example, a $3$ digit hexadecimal number might be $2B8$.  How many $2$-digit hexadecimals are there in which the ﬁrst digit is E or F? Explain your answer in terms of the additive principle.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

Let $N_E$ denote the set of $2$-digit hexadecimals are there in which the ﬁrst digit is E and let $N_F$ denote the set of $2$-digit hexadecimals are there in which the ﬁrst digit is F.  Clearly, $|N_E| = 16 = |N_F|$.  Moreover, $N_E \cap N_F = \emptyset$. Thus, the required number is $|N_E \cup N_F| = |N_E| + |N_F| = 16 + 16 = 32$.

</details>
</div>


We can generalise the addition principle to the union of $n$ sets


<div class="academic-env env-theorem">
<span class="env-label">Theorem 5.3</span>

Given $n$ pairwise disjoint sets $A_1,A_2,\dots, A_n$, $|A_1 \cup A_2 \cup \dots \cup A_n| = |A_1| + \dots + |A_n|$.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We will use a proof by induction.  Let $P(n)$ be the statement: Given $n$ pairwise disjoint sets $A_1,A_2,\dots, A_n$, $|A_1 \cup A_2 \cup \dots \cup A_n| = |A_1| + \dots + |A_n|$.  Clearly, $P(1)$ is true.  Assume $P(k)$ is true, that is, given $k$ pairwise disjoint sets $A_1,A_2,\dots, A_k$, $|A_1 \cup A_2 \cup \dots \cup A_k| = |A_1| + \dots + |A_k|$.  We need to prove $P(k+1)$.  That is given, $k+1$ pairwise disjoint sets, $A_1,A_2,\dots, A_{k+1}$, $|A_1 \cup A_2 \cup \dots \cup A_{k+1}| = |A_1| + \dots + |A_{k+1}|$.  

Notice that if $A_1,A_2,\dots, A_{k-1}, A_k, A_{k+1}$ are pairwise disjoint, then $A_1,\dots, A_{k-1},(A_k \cup A_{k+1})$ are pairwise disjoint.  Thus, by the induction hypothesis<span class="footnote-trigger" title="Note that we are using the fact that $A_i$ are arbitrary sets.  Thus, we can take the $k$-th set to be $A_k \cup A_{k+1}$."><sup>[*]</sup></span>, $|A_1 \cup \dots \cup A_{k-1} \cup (A_k \cup A_{k+1})| = |A_1| + \dots + |A_{k-1}| + |A_k \cup A_{k+1}|$.  Morevoer, the addition principle says that $|A_k \cup A_{k+1}| = |A_k| + |A_{k+1}|$.  Hence, $|A_1 \cup \dots \cup A_{k+1}| = |A_1| + \dots + |A_{k+1}|$.

</details>
</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">5.3 Principle of Inclusion Exclusion</summary>




<div class="academic-env env-theorem">
<span class="env-label">Theorem 5.4</span>

$|A \cup B| = |A| + |B| - |A\cap B| $

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Notice that $A = (A\setminus B) \cup (A\cap B)$<span class="footnote-trigger" title="When I make such claims, please make sure that you can prove it.  To prove $A = (A\setminus B) \cup (A\cap B)$, show that $A \subset (A\setminus B) \cup (A\cap B)$ and $(A\setminus B) \cup (A\cap B)\subset A$.  Let $x\in A$.  Then there are two possibilities, $x\in B$ or $x\notin B$. If $x\in B$, then $x\in A\cap B$, else $x\in A\setminus B$.  Thus, $x\in A\setminus B$ or $x\in A\cap B$.  To see the latter, observe $A\setminus B \subset A$ and $A\cap B \subset A$."><sup>[*]</sup></span>.  Moreover, $(A\setminus B)$ and $A\cap B$ are disjoint.  Thus, by the addition principle, $|A| = |A\setminus B| + |A\cap B|$.  Similarly, $|B| = |B\setminus A| + |A\cap B|$.   $AUB = (A\setminus B) \cup (A\cap B) \cup (B\setminus A)$.

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 5.4</span>

Suppose that in your class of $30$ people, $17$ like cricket and $14$ like football (it is possible to like both). What can you say about the number of people who dislike both? What is the connection between this number and the number of people who like at least one of the two games? What additional information would give you the exact numbers? Suppose $C$ is the set of people in your class who like cricket and $F$ is the set of people in your class who like football. Express your findings above in terms of these sets.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

Let $P$ be the set of people in the class.  Notice that $P = (C \cup F) \cup (C\cup F)^c$.  Thus, $|P| = |C\cup F| + |(C\cup F)^c| = |C| + |F| - |C\cap F| + |(C\cup F)^c|$.  Substituting the value of $|P|$, $|C|$, and $|F|$ ($30$, $17$, and $14$ respectively), we get $30 = 17 + 14 - |C\cap F| + |(C\cup F)^c|$.  That is, $|(C\cup F)^c| = |C\cap F| - 1$.  Thus, the number of people who dislike both cricket and football is one less than the number of people who like both cricket and football.  If we know the the number of people who like both cricket and football, we would be able to give the exact numbers.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 5.5</span>

$|A \cup B \cup C| = |A| + |B| + |C| - |A\cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

$$
\begin{align*}
        |A \cup (B \cup C)| &= |A| + |B\cup C| - |A\cap (B\cup C|) & \text{by PIE}\\
        &= |A| + |B| + |C| - |B\cap C| - |A\cap (B\cup C|) & \text{by PIE}\\
        &= |A| + |B| + |C| - |B\cap C| - |(A\cap B) \cup (A\cap C)|) & \text{as $\cap$ distributes over $\cup$}\\
        &= |A| + |B| + |C| - |B\cap C| - \left(|A\cap B| + |A\cap C| - |(A\cap B)\cap (A\cap C)|\right) & \text{by PIE}\\
        &= |A| + |B| + |C| - |B\cap C| - |A\cap B| - |A\cap C| + |A\cap B \cap C)|
    \end{align*}
$$

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 5.5</span>

For how many $n \in \{1, 2, . . . , 500\}$ is n a multiple of one or more of $5$, $6$, or $7$?

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

Let $A_n$ denote the multiples of $n$ in the set $\{1,2,\dots, 500\}$.  Then, we are asked to find $|A_5 \cup A_6 \cup A_7|$.  By the previous theorem, we have
$$
\begin{align*}
        |A_5 \cup A_6 \cup A_7| &= |A_5| + |A_6| + |A_7| - |A_5 \cap A_6| - |A_6 \cap A_7| - |A_5 \cap A_7| + |A_5 \cap A_6 \cap A_7|\\
        &= 100 + 83 + 71 - |A_5 \cap A_6| - |A_6 \cap A_7| - |A_5 \cap A_7| + |A_5 \cap A_6 \cap A_7| & \text{as $|A_n| = 500//n$}\\
        &= 254 - |A_{30}| - |A_{42}| - |A_{35}| + |A_{210}| & \text{as $A_m \cap A_n = A_{\text{lcm}(m,n)}$}\\
        &= 254 - 16 - 11 - 14 + 2 & \text{as $|A_n| = 500//n$}\\
        &= 215.
    \end{align*}
$$

</details>
</div>







</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">5.4 Exercises</summary>


[1.]
- How many numbers must be selected from the set $\{1, 3, 5, 7, 9, 11, 13, 15 \}$ to guarantee that at least one pair of these numbers add up to $16$? %\cite{Rosen}
- Show that whenever $25$ girls and $25$ boys are seated around a circular table there is always a person both of whose neighbors are boys. %\cite{Rosen}
- Show that among any $n+1$ positive integers not exceeding $2n$ there must be an integer that divides on of the other integers.
- A group of college students were asked about their TV watching habits. Of those surveyed, 28 students watch The Walking Dead, 19 watch The Blacklist, and 24 watch Game of Thrones. Additionally, 16 watch The Walking Dead and The Blacklist, 14 watch The Walking Dead and Game of Thrones, and 10 watch The Blacklist and Game of Thrones. There are 8 students who watch all three shows. How many students surveyed watched at least one of the shows?
- For how many three digit numbers ($100$ to $999$) is the sum of the digits even? (For example, $343$ has an even sum of digits: $3 + 4 + 3 = 10$ which is even.)



\begingroup
\let\clearpage\relax
\bibliographystyle{amsalpha}
\begin{thebibliography}{A}

\bibitem[Rosen]{Rosen} Kenneth H Rosen. *Discrete Mathematics and applications*. McGraw-Hill, 1999. 

\bibitem[Levin]{Levin} Oscar Levin. *Discrete mathematics: An open introduction*. CRC Press, 2025.

\bibitem[Bogart]{Bogart} Kenneth P. Bogart. *Combinatorics through guided discovery*. Kenneth P. Bogart, 2004.

\end{thebibliography}
\endgroup


</details>