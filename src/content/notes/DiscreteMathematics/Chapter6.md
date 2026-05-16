# Multiplication principle, permutations and combinations



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">6.1 Multiplication Principle</summary>


Last lecture, we saw that we can treat numbers as the equivalence class of sets under bijection.  The union of disjoint sets would then correspond to addition of numbers; addition was defined to ensure this property.  Similarly, cartesian product of sets would then correspond to multiplication; multiplication was defined to ensure this property.  Thus, we have


<div class="academic-env env-theorem">
<span class="env-label">Theorem 6.1</span>

$|A\times B| = |A||B|$

</div>


More generally, 


<div class="academic-env env-theorem">
<span class="env-label">Theorem 6.2</span>

$|A_1 \times A_2 \times \dots \times A_n| = |A_1| |A_2| \dots |A_n|$.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

You can prove this using induction and is very similar to the proof of Theorem **5.3** from Lecture **??**.

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 6.1</span>

If $A$ has $n$ elements, how many subsets will it have?

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

A subset of $A$ is completely determined if we know whether then $i$-th element is in then subset or not.  The presence of an element can be marked by $1$ and the absence can be marked by $0$.  Thus, there is a bijective correspondence between subsets of $A$ and $\{0,1\}^n$

Let us make sure we understand the above statement using an examples.  Let $A = \{1,2,3\}$.  Then, the mapping between subsets of $A$ and strings of length $3$ is as follows:
$$
\begin{align*}
        \{\} &\mapsto (0,0,0) &\text{As all entries are zeroes, $1$, $2$, and $3$ are absent}\\
        \{1\} &\mapsto (1,0,0) &\text{As only the first entry is non-zero, it contains only $1$}\\
        \{2\} &\mapsto (0,1,0) &\text{As only the second entry is non-zero, it contains only $2$}\\
        \{3\} &\mapsto (0,0,1) &\text{As only the third entry is non-zero, it contains only $3$}\\
        \{2,3\} &\mapsto (0,1,1) &\text{As only the first entry is zero, only $1$ is absent}\\
        \{1,3\} &\mapsto (1,0,1) &\text{As only the second entry is zero, only $2$ is absent}\\
        \{1,2\} &\mapsto (1,1,0) &\text{As only the third entry is zero, only $3$ is absent}\\
        \{1,2,3\} &\mapsto (1,1,1) & \text{As all entries are one, $1$, $2$, and $3$ are present}
    \end{align*}
$$

Thus, the number of subsets of an $n$ element set is equal to the cardinality of $\{0,1\}^n$.  By Theorem **6.2**, $|\{0,1\}^n| = |\{0,1\}|^n = 2^n$.

Hence, from now on, we will represent the collection of all subsets of $A$ as $2^A$.

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 6.2</span>

The number $735000$ factors as $2^3 \times 3 \times 5^4 \times 7^2$. How many divisors does it have? Explain your answer using the multiplicative principle.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof (Solution)</summary>

Every factor of $735000$ would be of the form $2^a3^b5^c7^d$ where $(a,b,c,d)\in \{0,1,2,3\}\times \{0,1\}\times \{0,1,2,3,4\} \times \{0,1,2\}$.  Thus, the number of factors is equal to $4.2.5.3 = 120$.

</details>
</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">6.2 Permutations</summary>



The word permutations are used to stand for two related concepts.  Often by permutations we mean bijections of a set.  Given a set $A$ of cardinality $n$, the number of permutations of $A$ can be computed using the multiplication principle.  Without loss of generality, we may assume that $A = \{1,\dots,n\}$.  

Let us denote the set $\{1,\dots,n\}$ with the notation $I_n$.  $f(1)$ has $n$ options.  As $f$ is injective, $f(2)$ can take any value except $f(1)$.  So, it has $n-1$ options.  As $f$ is injective, $f(3)$ can take any value excpet $f(1),f(2)$.  So, it has $(n-2)$ options.  And so on.  In general $f(i)$ has $n-i+1$.  Using the multiplication principle one can conclude that the total number would be $n(n-1)(n-2)\dots1 = n!$.  

\begin{mdframed}[backgroundcolor=green!5, frametitle={Formal approach}]
You might have heard teachers say that mathematical induction is the way to make the ``so on" or ``$\dots$" precise.  So, we will give a more formal proof, which you may skip if formalism does not attract you.  

Notice that, there is a bijection between $$\varphi: \{f:I_n \to I_n : f \text{ is a bijection, $f(n) = n$}\} \to \{f:I_n\to I_n : f \text{ is a bijection, $f(i) = n$}\}$$  
defined as
$$\varphi(f)(k) = \begin{cases}
    f(n) & \text{if $k = n$}\\
    f(i) & \text{if $k = i$}\\
    f(k) & \text{otherwise}
\end{cases}$$
Thus, $|\{f:I_n \to I_n : f \text{ is a bijection, $f(n) = n$}\}| = |\{f:I_n\to I_n : f \text{ is a bijection, $f(i) = n$}\}|$.  Moreover,
$$
\begin{align*}
    \{f:I_n \to I_n : \text{$f$ is a bijection}\} = \bigcup_{i=1}^n \{f:I_n\to I_n : f \text{ is a bijection, $f(i) = n$}\}
\end{align*}
$$
Therefore, by the generalised addition principle,
$$
\begin{align*}
    \text{Number of permutations of $I_n$} &= |\{f:I_n \to I_n : \text{$f$ is a bijection}\}|\\
    &= \left|\bigcup_{i=1}^n \{f:I_n\to I_n : f \text{ is a bijection, $f(i) = n$}\}\right|\\
    &=\sum_{i=1}^n \left|\{f:I_n\to I_n : f \text{ is a bijection, $f(i) = n$}\}\right|\\
    &= n.\left|\{f:I_n \to I_n : f \text{ is a bijection, $f(n) = n$}\right|\\
    &= n. \left|\{f:I_{n-1} \to I_{n-1} : f \text{ is a bijection}\right|\\
    &= n. (\text{Number of permutations of $I_{n-1}$})
\end{align*}
$$

It is also clear that $\text{Number of permutations of $I_{1}$} = 1$.  It is easy to see that $n!$ is a solution to this recurrence relations as $0! = 1$ and $n! = n(n-1)!$.
\end{mdframed}


In combinatorics, we are interested in a more general notion of permutations.  In school, you might have been introduced to the notion of $\Perm{n}{k}$ as the number of ways of filling $k$ ordered positions using $n$ symbols without repitition of symbols.  For simplicity, we might assume that the $k$ positions are numbers $\{1,\dots,k\}$ and the $n$ symbols are just $\{1,\dots,n\}$.  For each position, we need a symbol, so we are looking for functions from $\{1,\dots,k\}$ to $\{1,\dots,n\}$.  Given a function $f:\{1,\dots,k\}\to \{1,\dots,n\}$, $f(1)$ is the symbol at the first position, $f(2)$ is the symbol at the second positions, and so on.  Most generally, $f(i)$ is the symbol at the $i$-th position.  But, notice that we are not supposed to repeat symbols.  Hence, if $i\neq j$, then $f(i)\neq f(j)$.  That is, $f$ is an injections.  In other words,

$$\Perm{n}{k} = |\{f:\{1,\dots,k\}\to \{1,\dots,n\}: f \text{ is injective}\}|.$$


<div class="academic-env env-remark">
<span class="env-label">Remark 6.1</span>

When $n=k$, $f$ is injective iff $f$ is bijective.  Therefore, we can think of this as a generalisation of the earlier notion.

</div>


The logic we had used earlier is still useful.  We know that $f(1)$ has $n$ options, $f(2)$ has $(n-1)$ options,..., $f(i)$ has $n-i+1$ options,...,$f(k)$ has $n-k+1$ options.  Thus,
$$
\begin{align*}
    \Perm{n}{k} = n.(n-1)\dots(n-k+1) = \frac{n!}{(n-k)!}
\end{align*}
$$

\begin{mdframed}[backgroundcolor=green!5, frametitle={Formal approach}]
Notice that given an injective function $f:\{1,\dots,k\}\to \{1,\dots,n\}$, there are two possibilities.  Either $n\in \text{Range}(f)$ or $n\not\in \text{Range}(f)$.  First assume that $f(k) = n$.  The number of injective functions $f:\{1,\dots,k\}\to \{1,\dots,n\}$ with $f(k) = n$ is equal to the number of injective functions $f:\{1,\dots,(k-1)\}\to \{1,\dots,(n-1)\}$.  Thus, the number of injective functions $f:\{1,\dots,k\}\to \{1,\dots,n\}$ with $f(i) = n$ is also equal to the number of injective functions $f:\{1,\dots,(k-1)\}\to \{1,\dots,(n-1)\}$.  Thus, the total number of injective functions $f:\{1,\dots,k\}\to \{1,\dots,n\}$ with $n\in \text{Range}(f)$ is equal to $k$ times the number of injective functions $f:\{1,\dots,(k-1)\}\to \{1,\dots,(n-1)\}$.  If $n\not\in \text{Range}(f)$, then by restricting the codomain, we may consider it a function from $\{1,\dots,k\}$ to $\{1,\dots,(n-1)\}$.  Thus, the number injective functions $f:\{1,\dots,k\}\to \{1,\dots,n\}$ with $n\not\in \text{Range(f)}$ is equal to the number of injective functions $f:\{1,\dots,k\}\to \{1,\dots,(n-1)\}$.  Hence,
$$\Perm{n}{k} = k \Perm{n-1}{k-1} + \Perm{n-1}{k}.$$
We can verify that $\frac{n!}{(n-k)!}$ is a solution to this recurrence relation as shown below. 
$$
\begin{align*}
    k.\frac{(n-1)!}{([n-1]-[k-1])!} + \frac{(n-1)!}{([n-1]-k)!} &= \frac{k.(n-1)! + (n-1)!([n-1]-[k-1])}{([n-1]-[k-1])!}\\
    &= \frac{k.(n-1)! + (n-1)!(n-k)}{(n-k)!}\\
    &= \frac{n!}{(n-k)!}
\end{align*}
$$

The method of proof employed here is called combinatorial proof.  It is interesting and plays a very important role in this course.  There are two types of **combinatorial proof**.  In the first version, we count the number of elements in a set in two different ways.  As we are counting the same thing, these two values should be same, hence getting an equation/expression.  In the second version, we count the elements in two different sets having the same cardinality.  Once again, the two numbers should match, hence getting an equation/expression.
\end{mdframed}

The idea used above can do more than just compute the number of permutations, we can list all of them.  

```haskell
    functions                 : [a] -> [b] -> [[(a,b)]]
    functions.[].xs           = [[]]
    functions.(x::xs).[]      = []
    functions.xs.[y]          = [[(x,y) | x <- xs]]
    functions.(x::xs).(y::ys) = map.((x,y)::).(functions.xs.(y::ys)) ++ 
                                [(x,z)::as | z <- ys, as <- functions.xs.(y::ys)]
                              -- functions that map x to y ++ others
                            
    injective                 : [(a,b)] -> Bool
    injective.[]              = True
    injective.((x,y)::xys)    = (y `notElem` map.snd.xys) && injective.xys

    injectiveFunctions        : [a] -> [b] -> [[(a,b)]]
    injectiveFunctions.xs.ys    = filter.injective.(functions.xs.ys)

    permutations              : Int -> Int -> Int 
    permutations.k.n          = length.(injectiveFunctions.[1...k].[1...n]) 
```

If we didn't need the list of permutations, and were only interested in $\Perm{n}{k}$, then we can use the recurrence relation to define the function as follows.

```haskell
    p                         : Int -> Int -> Int
    n `p` 0                   = 1
    0 `p` (k+1)               = 0
    (n+1) `p` (k+1)           = (n+1) * n `p` k
```





</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">6.3 Combinations</summary>


Another application of the multiplication principle is finding the number of $k$ element subsets of an $n$ element set.  In school we learn this as $\Comb{n}{k}$ or $\binom{n}{k}$ (read as $n$ choose $k$). We will prove the familiar formula $\Comb{n}{k} = \frac{n!}{k!(n-k)!}$ using what we have learnt so far.  

Note that given an injection $f:I_k \to I_n$, we have a $k$ element subset of $I_n$, namely $\text{Range}(f)$.  However, notice that there would be multiple functions that correspond to the same subset.  More precisely, given any bijection $g:I_k \to I_k$, $\text{Range}(f\circ g) = \text{Range}(f)$.  Thus, there are precisely $k!$ functions (the number of bijections $g:I_k \to I_k$) that have the same range.  Hence,
$$\Comb{n}{k} = \frac{\Perm{n}{k}}{k!} = \frac{n!}{k!(n-k)!}.$$

Just like permutations, combinations satisfy a recurrence relation.  A $k$ element set might contain $n$ or not.  If a subset contain $n$, then it will have $k-1$ elements from $I_{n-1}$.  And if a subset does not contain $n$, then it will have $k$ elements from $I_n$.  Thus, 
$$\Comb{n}{k} = \Comb{n-1}{k-1} + \Comb{n-1}{k}.$$

The idea used above can do more than just compute the number of subsets, we can use it to generate all subsets.  Given below is a gofer code to do that. 

```haskell
    sub           : [a] -> Int -> [[a]]
    sub.xs.0      = [[]]
    sub.[].k      = []
    sub.(x::xs).k = sub.xs.k ++ map.(x::).(sub.xs.(k-1))
```

Or we could have used the same idea to list all sublists of a list and then choose those with length k.

```haskell
    subs             : [a] -> [[a]]
    subs.[]          = [[]]
    subs.(x::xs)     = subs.xs ++ map.(x::).(subs.xs)

    choose:          : Int -> Int -> [[Int]]
    choose.n.k       = [ys | ys <- subs.[1...n], length.ys == k]

    combinations     : Int -> Int -> Int
    combinations.n.k = length.(choose.n.k)
```

If we didn't need the list of subsets, and were only interested in $\Comb{n}{k}$, then we can use the recurrence relation to define the function as follows.

```haskell
    c                         : Int -> Int -> Int
    n `c` 0                   = 1
    0 `c` (k+1)               = 0
    (n+1) `c` (k+1)           = n `c` (k+1) + n `c` k
```




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">6.4 Exercises</summary>



[1.]
- We usually write numbers in decimal form (or base $10$), meaning numbers are composed using 10 diﬀerent “digits” $\{ 0, 1, . . . , 9 \}$. Sometimes though it is useful to write numbers in hexadecimal or base 16. Now there are $16$ distinct digits that can be used to form numbers: $\{0, 1, . . . , 9, A, B, C, D, E, F\}$. So for example, a $3$ digit hexadecimal number might be $2B8$.  How many $2$-digit hexadecimals are there in which the ﬁrst digit is E or F? Explain your answer using the multiplicative principle. Why do both the additive and multiplicative principles give you the same answer?
- Anyone who buys car from Electronic city RTO has a registration number KA 51 XX YYYY, where each $X$ is a letter of the English alphabet and each $Y$ is a number between $0$ to $9$.  What are the maximum number of distinct number plates that can have such a number plate?
- How many bit strings of length $10$ contain either ﬁve consecutive $0$s or ﬁve consecutive $1$s?
- Suppose that a password for a computer system must have at least $8$, but no more than $12$, characters, where each character in the password is a lowercase English letter, an uppercase English letter, a digit, or one of the six special characters \verb|*, >, <, !, + ,| and \verb| =|.

- How many different passwords are available for this computer system?
- How many of these passwords contain at least one occurrence of at least one of the six special characters?
- Using your answer to part (a), determine how long it takes a hacker to try every possible password, assuming that it takes one nanosecond for a hacker to check each possible password.

- A palindrome is a string whose reversal is identical to the string. How many bit strings of length n are palindromes?
- Let $A$ and $B$ be two finite sets and let $A \to B$ be the set all functions from $A$ to $B$.  Express the cardinality of $A \to B$ in terms of $A$ and $B$.   
- How many subsets of a 100 element set has more than 2 elements?
- Suppose that $p$ and $q$ are prime numbers and that $n = pq$. Use the principle of inclusion–exclusion to ﬁnd the number of positive integers not exceeding $n$ that are relatively prime to $n$.
- Every sequence of $n^2 + 1$ distinct real numbers contains a subsequence of length $n + 1$ that is either strictly increasing or strictly decreasing.
- Let $(x_i, y_i)$, $i = 1, 2, 3, 4, 5$, be a set of ﬁve distinct points with integer coordinates in $\mathbb{R}^2$. Show that the midpoint of the line joining at least one pair of these points has integer coordinates.
- Let $x$ be an irrational number. Show that for some positive integer $j$ not exceeding the positive integer $n$, the absolute value of the difference between $jx$ and the nearest integer to $jx$ is less than $1/n$.


</details>