# ctypes and structural induction

We have already that using type constructors, we can construct new types from existing types in PUGOFER.  But, in addition, we can form completely new types.  The easiest example is when there are only finitely many elements in the type.  

\begin{lstlisting}[language=Haskell]
ctype Boolean where 
F: Boolean
T: Boolean
\end{lstlisting}
Here we have used \verb|Boolean| as \verb|Bool| is already defined.  Similarly, \verb|False| or \verb|True| are already defined, so we chose to use \verb|F| and $\verb|T|$.  Another example would be

\begin{lstlisting}[language=Haskell]
ctype PrimCol where 
Red: PrimCol
Green: PrimCol
Blue: PrimCol
\end{lstlisting}

These are certainly not the interesting examples though.  The most interesting examples are those that are defined recursively.  Properties of these recursively defined structures will be proved using generalised notion of induction called structural induction.  The simplest example is ofcourse the set of natural numbers.



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">12.1 Natural numbers</summary>



We can define the set of natural numbers as

\begin{lstlisting}[language=Haskell]
ctype Nat where
Z    : Nat
Succ : Nat -> Nat
\end{lstlisting}
The above code tells you that \verb|Z| is a natural number and the function \verb|Succ| gives you a method for constructing new natural numbers.  For example, we can defined familiar numbers like one, two, three, etc as follows:
\begin{lstlisting}[language=Haskell]
one = Succ.Z
two = Succ.(Succ.Z)
three = Succ.(Succ.(Succ.Z))
four = Succ.three
five = Succ.four
six = Succ.five
seven = Succ.six
eight = Succ.seven
nine = Succ.eight
\end{lstlisting}

The recursive structure also allows us to define functions using pattern matching.  The most useful function would a function to convert natural numbers to the familiar integers.  And another function that does the reverse conversion.

\begin{lstlisting}[language=Haskell]
convert: Nat -> Int
convert.Z = 0
convert.(Succ.n) = convert.n + 1

convertb: Int -> Nat
convertb.x = if x < 0 then undefined else if x == 0 then Z else Succ.(convertb.(x-1))
\end{lstlisting}

You can verify that all is well by doing some sanity checks

\begin{verbatim}
? convert.five
5 : Int
? convert.(convertb.5)
5 : Int
? convert.(convertb.7)
7 : Int
? convert.(convertb.21)
21 : Int
\end{verbatim}

We can also define familiar addition and multiplication recursively 
\begin{lstlisting}[language=Haskell]
add: Nat -> Nat ->  Nat
add.Z.n = n
add.(Succ.n).Z = Succ.n
add.(Succ.n).(Succ.m) = Succ.(add.n.(Succ.m))

multiply: Nat -> Nat -> Nat
multiply.Z.n = Z
multiply.(Succ.n).Z = Z
multiply.(Succ.n).(Succ.m) = add.(add.m.n).(Succ.(multiply.n.m))
-- the intuition here is that (m+1)(n+1) = mn + 1 + m + n
\end{lstlisting}

We can check that the operations are working correctly using the numbers we have defined

\begin{verbatim}
? add.five.three
Succ.(Succ.(Succ.(Succ.(Succ.(Succ.(Succ.(Succ.Z))))))) : Nat
? multiply.two.three
Succ.(Succ.(Succ.(Succ.(Succ.(Succ.Z))))) : Nat
\end{verbatim}

But, then we have to count the number of \verb|Succ| to verify if the answer is correct.  An easier way would be to use the \verb|convert| and \verb|convertb| functions.

\begin{verbatim}
? convert.(add.(convertb.5).(convertb.3))
8 : Int
? convert.(multiply.(convertb.2).(convertb.3))
6 : Int
\end{verbatim}



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">12.2 Integers</summary>


Integers can also be defined recursively, but it is a bit difficult to do it in gofer.  We can define the set of integers using three constructors.

\begin{lstlisting}[language=Haskell]
ctype Integers where
Zero : Integers
S    : Integers -> Integers
P    : Integers -> Integers
\end{lstlisting}

The above constructors with the added property \verb|S| $\circ$ \verb|P| = \verb|Identity| completely defines the type of integers.  As we cannot talk about function equality in PUGOFER, this is difficult to do in PUGOFER.  It is possible to do this more powerful tools like Lean.  

Once we have defined integers in this manner, we can define addition on integers analogous to how we defined them for natural numbers. 

\begin{lstlisting}[language=Haskell]
add: Integers -> Integers -> Integers
add.Zero.n = n
add.(S.n).Zero   = S.n
add.(P.n).Zero = P.n
add.(S.n).(S.m) = S.(add.n.(S.m))
add.(S.n).(P.m) = add.n.m
add.(P.n).(S.m) = add.n.m
add.(P.n).(P.m) = P.add.n.(P.m)    
\end{lstlisting}

The recursive structure allows us to use proofs by *structural induction*.  Let us look at one example.


<div class="academic-env env-theorem">
<span class="env-label">Theorem 12.1</span>

For every integer $n$, there exists another integer $m$ such that $n + m = 0$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

The proof idea is that an arbitrary integer $n$ is either \verb|Zero| or \verb|S.k| for some integer $k$ or \verb|P.k| for some integer $k$.  Thus, it is enough to prove that 

- \verb|Zero| has an additive inverse 
- If $k$ has an additive inverse, then \verb|S.k| has an additive inverse 
- If $k$ has an additive inverse, then \verb|P.k| has an additive inverse

It is easy to see that $\verb|Zero|$ has an additive inverse as $\verb|add.Zero.Zero = Zero|$.  Now, assume $k$ has an additive inverse which we denote as \verb|addInv.k|.  That is, \verb|add.k.(addInv.k) = Zero|  Then,
\begin{verbatim}
add.(S.k).(P.(addInv.k)) = add.k.(addInv.k) = Zero
add.(P.k).(S.(addInv.k)) = add.k.(addInv.k) = Zero\end{verbatim}
We have proved that \verb|S.k| and \verb|P.k| has additive inverses and hence the proof is complete.

</details>
</div>


The observations in the proof above allow you to define additive inverse recursively as follows.  
\begin{lstlisting}[language=Haskell]
addInv: Integers -> Integers
addInv.Zero  = Zero
addInv.(S.n) = P.(addInv.n) -- -(n+1) = -n - 1
addInv.(P.n) = S.(addInv.n) -- -(n-1) = -n + 1  
\end{lstlisting}

Which allows us to define subtraction and multiplication

\begin{lstlisting}[language=Haskell]
subtract: Integers -> Integers -> Integers
subtract.n.m = add.n.(addInv.m)

multiply: Integers -> Integers -> Integers
multiply.Zero.n      = Z
multiply.(S.n).Zero  = Zero
multiply.(P.n).Zero  = Zero
multiply.(S.n).(S.m) = add.(add.m.n).(S.(multiply.n.m))
multiply.(S.n).(P.m) = add.(P.m).(multiply.(n.(P.m)))    -- (m+1)(n-1) = m(n-1) + n-1
multiply.(P.n).(S.m) = subtract.(multiply.n.(S.m)).(S.m) -- (n-1)(m+1) = n(m+1) - (m+1)
multiply.(P.n).(P.m) = subtract.(multiply.n.(P.m)).(P.m) -- (n-1)(m-1) = n(m-1) - (m-1)
\end{lstlisting}



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">12.3 Propositional logic</summary>



Propositional logic is also defined recursively.  A well formed formula in propositional logic has the following constructors:

- There are atomic statements often represented as $p_1,p_2,...$ (these play a role similar to the role of zero in the definition of natural numbers or integers)
- There are constructor functions

- $\land$\verb|:Prop -> Prop -> Prop|
- $\lor$\verb|:Prop -> Prop -> Prop|
- $\implies$\verb|:Prop -> Prop -> Prop|
- $\neg$\verb|:Prop -> Prop|



This recursive structure is used in parsing the meaning or truth of sentences in propositional logic.  Since most of you have not had a proper course in logic, we won't go much into the details of this.



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">12.4 Arithmetic expressions</summary>


Arithmetic expressions are also defined recursively, by the following rules.

- If \verb|x:|$\mathbb{R}$ then \verb|x:ArExp|  
- If \verb|x:ArExp| and \verb|y:ArExp|, then so is \verb|x+y:ArExp| 
- If \verb|x:ArExp| and \verb|y:ArExp|, then so is \verb|x-y:ArExp| 
- If \verb|x:ArExp| and \verb|y:ArExp|, then so is \verb|x*y:ArExp| 
- If \verb|x:ArExp| and \verb|y:ArExp|, then so is \verb|x/y:ArExp| 


Let us define two functions for counting the number of operation symbols and the number of numbers in an arithmetic expression

\begin{verbatim}
countNum: ArExp -> Int
countNum.x = 1
countNum.(x+y) = countNum.x + countNum.y
countNum.(x-y) = countNum.x + countNum.y
countNum.(x*y) = countNum.x + countNum.y
countNum.(x/y) = countNum.x + countNum.y

countOps: ArExp -> Int
countOps.x = 0
countOps.(x+y) = 1 + countOps.x + countOps.y
countOps.(x-y) = 1 + countOps.x + countOps.y
countOps.(x*y) = 1 + countOps.x + countOps.y
countOps.(x/y) = 1 + countOps.x + countOps.y
\end{verbatim}

Then, using structural induction, we can prove

<div class="academic-env env-theorem">
<span class="env-label">Theorem 12.2</span>

\verb|countNum.Exp = 1 + countOPs.Exp|

</div>


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

The base case is easy to see.  When the arithmetic expression is a number, there is $1$ number and $0$ operations.  Now, we need to show that the property is preserved under each of the constructor functions.  As the proof is analogous for all four operations, we will use \verb|#| to represent an arbitrary operation and prove the claim.  We assume that \verb|countNum.e1 = 1 + countOps.e1| and \verb|countNum.e2 = 1 + countOps.e2|
\begin{verbatim}
countNum.(e1#e2) = countNum.e1 + countNum.e2
= 1 + countOps.e1 + 1 + countOps.e2
= 1 + countOps.(e1#e2)
\end{verbatim}

</details>
</div>





</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">12.5 Exercises</summary>



- Define a type \verb|mod5| to represent $\mathbb{Z}/5\mathbb{Z}$.  Define addition and multiplication correctly. 
- Define the function \verb|lessThan : Nat -> Nat -> Bool| that should return true if and only if the first number is less than the second.  
- Define the function \verb|lessThan : Nat -> Nat -> Bool| that should return true if and only if the first number is less than the second.  
- Define exponentiation as a function from \verb|Nat| to \verb|Nat|.
- Define a recursive type \verb|twoDimVS| (two dimensional vector space over $\mathbb{Z}/5\mathbb{Z}$) as 
\begin{lstlisting}[language=Haskell]
ctype twoDimVS where
v       : twoDimVS
w       : twoDimVS
linComb : mod5 -> mod5 -> twoDimVs -- for a,b:mod5, we have av + bw 
\end{lstlisting}
Define vector addition and scalar multiplication.  Show that under your definition of vector addition and scalar multiplication, it forms a vector space over \verb|mod5|.




</details>