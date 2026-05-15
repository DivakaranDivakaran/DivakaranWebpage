# Types and Type constructors

As discussed in last class, we will use Gofer as a tool for mathematical reasoning.  Gofer is short for ``good for equational reasoning".  In Gofer, your primary primary job is to construct functions to solve a problem.  The computer will act as an evaluator or translator.  The user (you) write all function on a file with a .gs extension, where .gs is short for gofer script.  Definitions, as you would define mathematical functions, are expressed as equations between expressions.  During a session (in the terminal), expressions are submitted for evaluation; these expressions can contain references to the functions defined in the script.



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.1 Type Checking</summary>



Let us try an example.  Note that function evaluation is denoted as \verb|f.x| in gofer instead of the familiar $f(x)$.

\begin{lstlisting}[language=Haskell]
double.x = 2*x
\end{lstlisting}

With this single line, we have defined the function double that takes a number and returns its double. 

\begin{verbatim}
? double.3
6 : Int
\end{verbatim}

Notice that the interpreter not only evaluates the function double at $3$, but also tells us that the answer is an integer. In other words, you should read \verb|6:Int| as $6$ is of type \verb|Int|.  We can also ask for the type of an object as follows:

\begin{verbatim}
? :t 4
4 : Int
? :t 4.5
4.5 : Float 
? :t True
True : Bool
? :t False
False : Bool
:t "hello world"
"hello world" : String
\end{verbatim} 

Notice that we have many of the familiar types from Python, like \verb|Int|, \verb|Float|, and \verb|Bool|.  Also, the syntax to construct a list is quite similar to the syntax in Python.  

\begin{verbatim}
? :t [1,2,3,4]
[1,2,3,4] : [Int]
? :t [1.0,1.5,2.5,3.5]
[1.0,1.5,2.5,3.5] : [Float]
? :t ['a','b','c']
['a','b','c'] : [Char]
\end{verbatim}

Also, notice that a string is just a list of characters in PUGOFER.  But, an *alias* called string is created.  

\begin{verbatim}
? :t "hello"
"hello" : String
? :t ['h','e','l','l','o']
['h','e','l','l','o'] : [Char]
? "hello" == ['h','e','l','l','o']
True : Bool
\end{verbatim}

However, notice that in PUGOFER, all the elements of a list has to be of the same type.  A list of elements of type \verb|Type| has the type \verb|[Type]|.  For example, list of integers have type \verb|[Int]|, list of floats have type \verb|[Float]|, list of characters have type \verb|[Char]|, and so on.

\begin{verbatim}
? :t [1.0,1.5,2.5,3]

ERROR: Type error in list
*** expression     : [1.0,1.5,2.5,3]
*** term           : 3
*** type           : Int
*** does not match : Float
\end{verbatim}

PUGOFER and some other languages are very strict about types and does not allow mixing of types (for example, a list containing integers and floats), to prevent errors.  You can read more about \href{https://en.wikipedia.org/wiki/Type_safety}{type safety} and its advantages (and disadvantages) here.   Although the types are rigid, it allows us to construct new types like list of list of integers \verb|[[Int]]|, or list of list of list of integers \verb|[[[Int]]]|.

\begin{verbatim}
? :t [True, False]
[True,False] : [Bool]
? :t [[1],[1,2],[1,2,3]]
[[1],[1,2],[1,2,3]] : [[Int]]
? [[[1],[2]],[[1],[1,2],[1,2,3]]]
[[[1], [2]], [[1], [1, 2], [1, 2, 3]]] : [[[Int]]]
\end{verbatim}




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.2 Type constructors</summary>


Recall, we defined a function double earlier, as follows

\begin{lstlisting}[language=Haskell]
double.x = 2*x
\end{lstlisting}

If we try to use this function double to evaluate the double of $2.5$, then we get an error.

\begin{verbatim}
? double.2.5

ERROR: Type error in application    
*** expression     : double.2.5
*** term           : 2.5
*** type           : Float
*** does not match : Int
\end{verbatim}

You get an error because the computer is expecting an integer as input for the function double, but you have provided a float.  How do we understand what input is the computer expecting?  This we can understand by checking the type of double, using the familiar command \verb|:t|.    

\begin{verbatim}
? :t double
double : Int -> Int
\end{verbatim}

When we want to say $f$ is a function from $A$ to $B$, we have been writing $f:A\to B$.  And, \verb|double: Int -> Int|  means that \verb|double| is a function from \verb|Int| to \verb|Int|.  But, here it is a bit deeper.  Given two types \verb|a| and \verb|b|, \verb|a -> b| is a new type.  In other words, \verb|->| is a type constructor.  You may consider it similar to how we construct a new set $A\times B$ from two sets $A$ and $B$. 

We have already encountered another type constructor, namely \verb|[]|.  Given a type, \verb|Type|, it constructs the new type \verb|[Type]|.  For example, from \verb|Int|, we can construct \verb|[Int]| and from it we can construct \verb|[[Int]]| and so on.  

One question remains.  How did the computer figure the type of the function \verb|double|?  We can answer it through a slightly different definition of the ``same" function.

\begin{lstlisting}[language=Haskell]
double2.x = (2.0)*x
\end{lstlisting}

\begin{verbatim}
? :t double2
double2 : Float -> Float
\end{verbatim}

The presence of an integer or float in the definition tells the computer the type of the function.  This is doable because gofer does not allow us to multiply an integer and a float.

\begin{verbatim}
? 2*2.0

ERROR: Type error in application
*** expression     : 2 * 2.0
*** term           : 2
*** type           : Int
*** does not match : Float
\end{verbatim}

We could have defined \verb|double| in yet another way.  This new definition would work for both integers and floats! Note the type of \verb|double3|.
\begin{lstlisting}[language=Haskell]
double3.x = x+x
\end{lstlisting}
\begin{verbatim}
? double3.2
4 : Int
? double3.2.0
4.0 : Float
? :t double3
double3 : Num.a => a -> a
\end{verbatim}

The function \verb|double3| can act on integers and floats because of its special type.  The definition implies that we should be able to add, so it should be some sort of a number.  You should read \verb|Num.a => | as ``if type \verb|a| is a type of numbers, then".  Sometimes, even such restrictions wont be there.  For example, the identity function can be defined on any type.  I have used \verb|myid| instead of \verb|id| as \verb|id| is already defined in the prelude - so there would be a conflict.  We say that these functions have **polymorphic type**.
\begin{lstlisting}[language=Haskell]
myid.x = x 
\end{lstlisting}
\begin{verbatim}
? :t myid
myid : a -> a
\end{verbatim}

We may specify the type of the function, to avoid the interpreter to choose a more general type.
\begin{lstlisting}[language=Haskell]
double4: Int -> Int
double4.x = x+x
\end{lstlisting}
\begin{verbatim}
? :t double4
double4 : Int -> Int   
\end{verbatim}



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.3 Infix vs prefix notation</summary>


Recall that addition $+$ of integers is a function $+:\mathbb{Z} \times \mathbb{Z} \to \mathbb{Z}$.  So, ideally, we should denote the sum of two numbers $a$ and $b$ as $+(a,b)$.  However, we typically denote it as $a+b$.  The former is called prefix<span class="footnote-trigger" title="as the function symbol precedes the arguments"><sup>[*]</sup></span> notation while that latter is called infix<span class="footnote-trigger" title="as the function symbol comes in between the arguments"><sup>[*]</sup></span> notation.  Prefix notation has the advantage of clarity without any parenthesis.  For example, the notation \verb|+ a / b r| has the unambiguous meaning $a + (b/r)$ as $(a+b)/r$ will be written as \verb|/ + a b r|.  However, infix notation is convenient when the operator is associative.  As $(a+b)+c = a+(b+c)$, we can write $a+b+c$ without any ambiguity.  This convenience is lost in prefix notation \cite{Dgkstra}.  Addition and multiplication can be used in gofer in the prefix form as follows.
\begin{verbatim}
? (+).2 .3 
5 : Int
? (*).4 .5
20 : Int
\end{verbatim}
Notice the space between \verb|2| and \verb|.| in \verb|(+).2 .3|.  This space is essential as otherwise the interpreter would think that we are talking about the number $2.3$
\begin{verbatim}
? (+).2.3
primPlusFloat.2.3 : Float -> Float
\end{verbatim}
The interpreter is telling that the expression \verb|(+).2.3| is of the type \verb|Float -> Float|.  



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.4 Currying</summary>


We discussed earlier that $+:\mathbb{Z} \times \mathbb{Z} \to \mathbb{Z}$.  To begin with, instead of the Cartesian product, we use tuples (somewhat similar to other programming languages, like Python).  So, \verb|(2,3)| is of type \verb|(Int,Int)|.  In other words, this is the equivalent of Cartesian product in gofer.  
\begin{verbatim}
? (2,3)
(2,3) : (Int,Int)
? (2,3,True)
(2,3,True) : (Int,Int,Bool)
\end{verbatim}

Therefore, in PUGOFER, \verb|(+)| should be of type \verb|(Int,Int)->Int|.  If you use pusimple.pre, you would get 
\begin{verbatim}
? :t (+)
(+) : Int -> Int -> Int
\end{verbatim}
That is, \verb|(+)| has the type \verb|Int -> Int -> Int|, not \verb|(Int,Int) -> Int|.  Note that, \verb|Int -> Int -> Int| is equivalent to \verb|Int -> (Int -> Int)|.  The type constructor \verb|->| associates to the right.  Another example of an operation which associates to the right is exponentiation.  When we write \verb|2^3^5|, we mean \verb|2^(3^5)| and not \verb|(2^3)^5|.  This is so clear by the way in which we usually write exponentiation in mathematics - $2^{3^5}$ versus $(2^3)^5$.  
\begin{verbatim}
? 2^3^2
512 : Int
? (2^3)^2
64 : Int
? 2^(3^2)
512 : Int
\end{verbatim}

Coming back, in PUGOFER binary operations on \verb|Int| has type \verb|Int -> Int -> Int|.  This makes sense because there is a natural bijection from \verb|(a,b) -> c| and \verb|a -> b -> c|.  Let $f$ be an arbitrary function of the type \verb|(a,b) -> c|.  We would like to map this to a function \verb|f'| of type \verb|a -> b -> c|.  As \verb|f| was arbitrary, this would define a function from \verb|(a,b) -> c| to \verb|a -> b -> c|.  To define a function \verb|f'| of type \verb|a -> b -> c|, we need to define \verb|f'.a0| for an arbitrary element of \verb|a|.  We know \verb|f'.a0| is of the type \verb|b -> a|.  Thus, we need to describe how the function \verb|f'.a0| acts on an arbitrary element \verb|b0:b|.  In other words, we should specify \verb|(f'.a0).b0|.  It is natural to define \verb|(f'.a0).b0 = f.(a0,b0)|.  The parenthesis in \verb|(f'.a0).b0| is actually redundant and I added it only for extra clarity.  From now on, we would just write \verb|f'.a0.b0|.  This function is of great importance in functional programming and is called currying.  You can find it defined in the prelude as 
\begin{lstlisting}[language=Haskell]
curry : ((a,b) -> c) -> a -> b -> c
curry.f.a.b	= f.(a,b)
\end{lstlisting}
This map is invertible.  In other words, given a map \verb|f':a -> b -> c|, we can construct a map \verb|f: (a,b) -> c| by defining the value of \verb|f| at an arbitrary point \verb|(a0,b0)|.  We may define \verb|f.(a0,b0) = f'.a0.b0|.  You can find it defined in the prelude as 
\begin{lstlisting}[language=Haskell]
uncurry : (a -> b -> c) -> (a,b) -> c
uncurry.f.(a,b)	= f.a.b
\end{lstlisting}
Consider the two functions 
\begin{lstlisting}[language=Haskell]
f: Int -> Int -> Int
f.x.y = y+x

g: (Int,Int) -> Int
g.(x,y) = y+x
\end{lstlisting}
Notice that \verb|curry.g = f| and \verb|uncurry.f = g|.  We can check this is indeed the case (to some extent), as follows
\begin{verbatim}
? :t curry.g
curry.g : Int -> Int -> Int
? curry.g.2 .3
5 : Int
? f.2 .3
5 : Int
\end{verbatim}
You can similarly check for other pairs of values and you will always see that \verb|f.a.b = g.(a,b)|.  However, we cannot really use gofer to check equality of these functions as it would have to fo infinite checks.

Currying is quite useful as we can produce new functions by the partial application of existing functions.
\begin{verbatim}
? :t f.2
f.2 : Int -> Int
? :t f.3
f.3 : Int -> Int
\end{verbatim}


<div class="academic-env env-remark">
<span class="env-label">Remark 2.1</span>

If you use pustd.pre, you will get 
\begin{verbatim}
? :t (+)
(+) : Num.a => a -> a -> a
\end{verbatim}
Notice that \verb|(+)| has a polymorphic type where $a$ is a type of numbers.

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.5 Operators and Section</summary>


Most special characters are reserved for infix operators and thus cannot be part of function names.  You can define an infix operator as 
\begin{lstlisting}[language=Haskell]
(&&) : Bool -> Bool -> Bool
False && x	= False
True  && x      = x

(||) : Bool -> Bool -> Bool
False || x      = x
True  || x      = True
\end{lstlisting}
A bracketed operation is called a **section**. These can then be used in both infix and prefix forms
\begin{verbatim}
? (&&).True.False
False : Bool
? True && False
False : Bool
? (||).True.False
True : Bool
? True || False
True : Bool
\end{verbatim}
The function \verb|(+)| is another example, but it is so basic that it is built-in functions of gofer and not the prelude.  But, these can be used to quickly define new functions.  For instance, \verb|(*2)| is the 'doubling' function.  As we are substituting a value on the right side of the infix operator, we would call this a **right section**. Another example is \verb|(+1)| which is the successor function.
\begin{verbatim}
? (*2).3
6 : Int
? (+1).2
3 : Int
\end{verbatim}
Similarly, we can substitute a value on the left side of the infix operator to obtain a **left section**.  For instance, we can consider \verb|(3-)| which is the function $f(x) = 3-x$.  
\begin{verbatim}
? (3-).2
1 : Int
\end{verbatim}
There is an exception to these, namely, \verb|(-1)| or \verb|(-2)| are not right sections, but they are just numbers.  \verb|(-2).3| will give you an error.  But, \verb|(+2).3| is valid and gives the value \verb|5|.  
\begin{verbatim}
? (-2).3
ERROR: Type error in application
*** expression     : -2.3
*** term           : -2
*** type           : Int
*** does not match : a -> b  

? (+2).3
5 : Int
\end{verbatim}



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.6 Precedence</summary>



To avoid the unnecessary use of parenthesis, we come up with certain conventions.  You already saw one example of this.  The assumption that \verb|->| associates to the allows us to drop the parenthesis in \verb|a -> (b -> c)| and just \verb|a -> b -> c|.  You have also seen the same idea in school.  You know that when you write \verb|2+3.4|, you need to multiply first.  Therefore \verb|2+3.4 = 14|.  If you want to first add, then you should put an explicit parenthesis.  The collection of such rules in school had the acronym, BODMAS.  In gofer, this is done using the operator precedence table.

\begin{lstlisting}[language=Haskell]
-- Operator precedence table: -----------------------------------------------
infixl 9 !!
infixr 9 ;
infixr 8 ^
infixl 7 *
infix  7 /, `div`, `quot`, `rem`, `mod`
infixl 6 +, -
infix  5 \\
infixr 5 ++, ::
infix  4 ==, /=, <, <=, >=, >
infix  4 `elem`, `notElem`
infixr 3 &&
infixr 2 ||
\end{lstlisting}

The higher the number, the more importance it has.  For example, \verb|*| has precedence $7$, while \verb|+| has precedence $6$.  Thus, when you see \verb|2+3.4 = 14|, you should first evaluate \verb|*| and then evaluate \verb|+|.  It is natural to be curious as to what happens when there are two operators of the same precedence in an expression.  For example, \verb|*| and \verb|/|.

\begin{verbatim}
? (2*6)/4
3 : Int
? 2*(6/4)
2 : Int
? 2*3/4

ERROR: Ambiguous use of operator "*" with "/"
\end{verbatim}

As you can see in the above experiment, in such situations, it is mandatory to put parenthesis - otherwise you get an error.  



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">2.7 Exercises</summary>



- Give examples of functions with the following types:

- \verb|(Int -> Int) -> Int|
- \verb|Int -> (Int -> Int)|
- \verb|(Int -> Int) -> (Int -> Int)|

- Suggest possible types for the following functions:
\begin{multicols}{3}

- \verb|one.x = 1|
- \verb|apply.f.x = f.x|
- \verb|compose.g.f.x = g.(f.x)|


\end{multicols}
- What function is \verb|(+(-x))|?
Find the types \verb|fn1| and \verb|fn2| defined as below:

- \verb|fn1.x = length.(x++[[True]])|
%\vspace{3cm}
- \verb|fn2.f.x = f.(2.0*x) + 1|
%\vspace{3cm}

- For what values of $x$ do the following functions return True?
\begin{multicols}{2}

- \verb|(==9).((2+).x)|
- \verb|(3>)·((`mod`2).x)|

\end{multicols}
- For each of the following expressions, say whether or not it is wellformed. If the expression is well-formed, then give its value; otherwise, say whether the error is a syntax-error, type-error, or some other kind:
\begin{multicols}{3}

- \verb|(3 == --3) && True|
- \verb|1 && 1 == 2|
- \verb|False == (1 < 3)|

\end{multicols}


\begingroup
\let\clearpage\relax
\bibliographystyle{amsalpha}
\begin{thebibliography}{A}

\bibitem[Dgkstra]{Dgkstra} Edsger W Dgkstra. *Notational conveniences I adopted and why*. 

\bibitem[Bird-Wadler]{Bird-Wadler} Richard Bird, Philip Wadler. *Introduction to Functional Programming*. SERIES, CAR HOARE, Prentice Hall International Series in Computer Science.  

\bibitem[O'Donnell-Hall-Page]{O'Donnell-Hall-Page} John 0'Donnell, Cordelia Hall, Rex Page. *Discrete Mathematics Using a Computer*. Springer Science and Business Media, 2007.

\end{thebibliography}
\endgroup


</details>