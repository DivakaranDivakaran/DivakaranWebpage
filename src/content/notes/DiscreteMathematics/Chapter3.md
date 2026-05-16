# Functions and lists



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">3.1 Defining functions</summary>



\subsection*{Conditionals and guards}
We can use conditionals as we can in other programming languages.

```haskell
    jump1.n = if n < 5 then 3 else 5
```
But, you may also write the same function in a way that is closer to how we write in mathematics.  
```haskell
    jump2.n | n < 5 = 3     --1st guard
            | otherwise = 5 --2nd guard
```
We say, the above definition uses **guards**.  Another example of a function with guards is a function that assigns a grade given a score.
```haskell
    grade.n | n < 40    =  "U"
            | n < 50    =  "E"
            | n < 60    =  "D"
            | n < 70    =  "C"
            | n < 80    =  "B"
            | n < 90    =  "A"
            | n < 95    =  "A-"
            | otherwise =  "O"
```

\subsection*{Partial or non-strict functions}
Recall that \verb|[Char]| is a list whose entries are of type \verb|Char|, just like \verb|[Int]| is a list of integers.  You can see that the function \verb|grade2| defined below works and has the type \verb|Int -> [Char]| as you would expect.
```haskell
    grade2.n | n < 40  =  "U"
             | n < 50  =  "E"
             | n < 60  =  "D"
             | n < 70  =  "C"
             | n < 80  =  "B"
             | n < 90  =  "A"
             | n < 95  =  "A-"
             | n < 101 =  "O"
```
```
    ? grade2.95
    O
    ? grade2.92
    A-
    grade2 : Int -> [Char]
    ? grade2.105

    Program error: {grade2.105}
```
However, it is not defined at values greater than $101$ and gofer indeed throws an error when we try to evaluate the function at $105$.  This is quite useful in many situations, especially when we want a conditional definition of functions.  



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">3.2 List comprehension</summary>



Lists are extremely important in Gofer and almost play the role of sets in mathematics.  Of course, they differ from sets in two important ways:

- lists can have multiple copies of the same element 
- two lists having identical elements in differing order would be considered different.


```
    ? [1,2,3,4,2,3,4]
    [1, 2, 3, 4, 2, 3, 4] : [Int]
    ? [1,2,3,4] == [1,3,2,4]
    False : Bool
```

It is of course unreasonable and impracitical to construct lists by actually listing all the elements.  Thus, we have several techniques to build new lists.  The simplest method is using \verb|...|.  If $m,n\in \mathbb{Z}, \ m \leq n$ \verb|[m...n]| is the list containing all integers from $m$ to $n$, including $m$ and $n$.  If $m > n$, then \verb|[m...n]| is the empty list.  

```
    ? [1...10]
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] : [Int]
    ? [5...10]
    [5, 6, 7, 8, 9, 10] : [Int]
    ? [-5...10]
    [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] : [Int]
    ? [2...2]
    [2] : [Int]
    ? [7...3]
    [] : [Int]
```

The same idea can also be used to construct arithmetic sequences.  If $l,m,n\in \mathbb{Z}$, then $\verb|[l,m...n]|$ is the list of elements arithmetic sequence with first time $l$, common ration $m-l$ and less than or equal to $n$.  In other words, $l,l + (m-l),l+2(m-l),\dots$

```
    ? [1,3...25]
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25] : [Int]
    ? [1,3...26]
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25] : [Int]
```

Another important way by which you can construct lists in gofer is by defining it as you would define sets in the *set-builder form*.  The following functions are some examples.

```haskell
    -- the list of all values of x^2 where x comes from the list [1...n]
    squares.n = [x^2| x <- [1...n]]

    -- the list of all values of x where x comes from the list [1...n] 
    -- and x is an even number
    evenNum.n = [x| x <- [1...n], even.x]

    -- the list of all values of (x,y) where x and y come from the 
    -- list [1..n] and y = x+1
    line1.n = [(x,y)|x <- [1...n], y <- [1...n], y==x+1]

    -- the list of modulus of (x,y) where (x,y) belongs to line1.n
    sizeline1.n = [x^2 + y^2| (x,y) <- line1.n]

    -- the list of all values of d where d comes from the list [1...n] 
    -- and the remainder when you divide n by d is zero
    divisors.n = [d| d <- [1...n], n `mod` d == 0]

    -- greatest divisor of a that divides b
    mygcd.a.b = maximum.[d| d <- divisors.a, b `mod` d == 0]
```

```
    ? squares.10
    [1, 4, 9, 16, 25, 36, 49, 64, 81, 100] : [Int]
    ? evenNum.20
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] : [Int]
    ? line1.8
    [(1,2), (2,3), (3,4), (4,5), (5,6), (6,7), (7,8)] : [(Int,Int)]
    ? sizeline1.8
    [5, 13, 25, 41, 61, 85, 113] : [Int]
    ? divisors.27
    [1, 3, 9, 27] : [Int]
    ? mygcd.15. 21
    3 : Int
```

All the above definitions of lists have an *expression* before the $|$ and some *qualifiers* that follow it.   There are two types of qualifiers.  There are *generators* that say that the variable is an element of a list like \verb|x <- [1...n]| and \verb|(x,y) <- line1.n|.  Then, there are boolean-valued expressions like \verb|even.x|, \verb|y==x+1|, \verb|n `mod` d == 0|, and \verb|b `mod` d == 0|.  List comprehension appeal a lot to me as it makes it possible to define primes in the most natural way.

```haskell
    -- we say a number n is prime iff its divisors are precisely 1 and n
    prime.n = (divisors.n == [1,n])
```




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">3.3 Basic functions on lists</summary>



Standard functions to find the length of a list, find the first element, find the last element, etc are defined in pusimple.pre.  

```
    ? length.[1,2,3,4,5]
    5 : Int
    ? reverse.[1,2,3,4,5]
    [5, 4, 3, 2, 1] : [Int]
    ? head.[1,2,3,4]
    1 : Int
    ? tail.[1,2,3,4]
    [2, 3, 4] : [Int]
    ? init.[1,2,3,4]
    [1, 2, 3] : [Int]
    ? last.[1,2,3,4]
    4 : Int
```

To understand how these functions are defined in pusimple, we need to understand how lists are defined.  Lists are defined using two basic ideas:

- \verb|[]| is a list
- if \verb|x:a| and \verb|xs:[a]|, then \verb|x::xs:[a]|.

Thus, the list \verb|[1,2,3,4]| is just a convenient expression of \verb|1::2::3::4::[]|.  Note that \verb|::| associates to the right.  That is \verb|1::2::3::4::[]| is same as \verb|1::(2::(3::(4::[])))|.

```
    ? 1::2::3::4::[]
    [1, 2, 3, 4] : [Int]
```

Most functions on lists are specified by splitting it into two cases: the list is empty and the list has atleast one element (in other words it has the form \verb|x::xs| where \verb|xs| is a list).  This form of function definition is called *pattern matching*. Below is a simple function I have defined to illustrate the structure.  The function determines if a given list is empty or not.  

```haskell
    empty.[] = True 
    empty.(x::xs) = False
```

Unfortunately, many of the functions defined in pusimple are partial functions.  For instance, let us look at the function that returns the first (or zeroeth) element of a list.  

```haskell
    head: [a] -> a
    head.(x::_) = x
```

The function does not tell us what to do if the list is empty.  As expected, it throws an error when we try to evaluate the head of the empty list.

```
    ? head.[]
    Program error: {head.[]}
    ? head.[1,2,3,4]
    1 : Int
    ? head.[True,False]
    True : Bool
```

Tails is also defined in a similar fashion and will give an error if the input is the empty set.

```haskell
    tail : [a] -> [a]
    tail.(_::xs) = xs
```

A thing of interest in this definition is the \verb|_| sign.  It can appear only on the left side of function definitions and is used if that parameter is irrelevant.  The above definition is equivalent to the following definition. 

```haskell
    tail : [a] -> [a]
    tail.(x::xs) = xs
```

```
    ? tail.[]
    Program error: {tail.[]}
    ? tail.[1,2,3,4]
    [2, 3, 4] : [Int]
    ? tail.[True,False]
    [False] : [Bool]
```

The definition of the other functions are a bit more involved.  Last, init, and (++) use recursion.

```haskell
    last         : [a] -> a
    last.[x]     = x
    last.(_::xs) = last.xs
```

Notice that in the definition there is some ambiguity.  The list \verb|[x]| is of the form \verb|x::[]|.  So, you may wonder if \verb|last.[x] = x| or \verb|last.[x] = last.[]|.  Of course, \verb|last.[]| is not defined.  But even if it was, we ``recognise patterns" in the order they appear.  Thus, the pattern \verb|_::xs| would be used only if \verb|xs| is a non-empty list! 

```
    ? last.[3]
    3 : Int
    ? last.[3,4,5]
    5 : Int
    ? last.[]
    Program error: {last.[]}
```

Let us try to understand this function by following the step-by-step computation of \verb|last.[1,2,3,4,5]|.

```
    last.[1,2,3,4,5] = last.(1::[2,3,4,5])     -- as [1,2,3,4,5] = 1::[2,3,4,5]
                     = last.[2,3,4,5]          -- as last.(_::xs) = last.xs
                     = last.(2::[3,4,5])       -- as [2,3,4,5] = 2::[3,4,5]
                     = last.[3,4,5]            -- as last.(_::xs) = last.xs
                     = last.(3::[4,5])         -- as [3,4,5] = 3::[4,5]
                     = last.[4,5]              -- as last.(_::xs) = last.xs
                     = last.(4::[5])           -- as [4,5] = 4::[5]
                     = last.[5]                -- as last.(_::xs) = last.xs     
                     = 5.                      -- as last.[x] = x         
```

The definitions of init, (++), and (!!) are similar.  The best way to learn how these functions work is by playing with it using gofer.

```haskell
    
    init          : [a] -> [a]        -- returns the list containing all 
    init.[x]      = []                -- elements except the last element
    init.(x::xs)  = x :: init.xs

    (++)          : [a] -> [a] -> [a] -- append lists.  Associative with
    []     ++ ys  = ys                -- left and right identity [].
    (x::xs) ++ ys = x::(xs++ys)

    (!!)            : [a] -> Int -> a -- xs!!n selects the nth element of
    (x::_)  !! 0    = x               -- the list xs (first element xs!!0)
    (_::xs) !! (n+1)= xs !! n         -- for any n < length xs.
```

```
    ? [1,2,3,4] ++ [1,2,3,4]
    [1, 2, 3, 4, 1, 2, 3, 4] : [Int]
    ? [True,False] ++ [False,True]
    [True, False, False, True] : [Bool]
    ? init.[1,2,3,4]
    [1, 2, 3] : [Int]
    ? [1,2,3,4]!!2
    3 : Int
```




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">3.4 Exercises</summary>




- Define a function \verb|sumsqrs| which takes three numbers and returns the sum of the squares of the larger two.
- Define a function \verb|vowel| that takes a character and returns true if it is a vowel and false otherwise.
- Define a function \verb|nextlet| which takes a letter of the alphabet and returns the letter coming immediately after it. Assume that letter A follows Z.
- Define a function \verb|namify| that takes a string and capitalises the first character.
- Construct a function, analyze, which takes three positive numbers \verb|a, b, c| in non-decreasing order, representing the lengths of the sides of a possible triangle. The function analyze is to return one of the numbers 0, 1, 2 or 3 depending on whether:

\item[0.] the sides do not form a proper triangle;
\item[1.] they form an equilateral triangle; 
\item[2.] an isosceles triangle;
\item[3.] a scalene triangle.

- Show the step-by-step computation of \verb|init.[1,2,3,4,5]|
- Work out the values of the following list comprehensions; then check your results by evaluating them with the computer:

- \verb|[x |$|$ \verb|x <- [1,2,3], False]|
- \verb|[not.(x && y) | $|$ \verb| x <- [False, True], y <- [False, True]]|
- \verb|[x| $||$ \verb|y| $|$ \verb|x <- [False, True], y <- [False, True], x /= y]|

- Which of the following equations are true and which are false?
\begin{multicols}{2}

- \verb|[[]] ++ xs = xs|
- \verb|[[]] ++ xs = [xs]|
- \verb|[[]] ++ xs = [[ ], xs]|
- \verb|[[]] ++ [xs] = [[],xs]|
- \verb|[xs] ++ [] = [xs]|
- \verb|[xs]++[xs] = [xs,xs]| 

\end{multicols}
- Define a function for counting the number of negative numbers in a list.
- Define a function \verb|intpairs| so that (\verb|intpairs.n|) is a list of all distinct pairs of integers $1 \leq x,y \leq n$.
- Define $x^n$ using list comprehension.
- Define a function \verb|(-*-):[Int] -> [Int] -> [Int]| where \verb|xs-*-ys| is a list where given any element \verb|y <- ys|, the first appearance of \verb|y| in \verb|xs| is removed.
- Consider a function \verb|safetail :: [a] -> [a]| that behaves in the same way as tail except that it maps the empty list to itself rather than producing an error. Using \verb|tail| and the function \verb|null :: [a] -> Bool| that decides if a list is empty or not, define \verb|safetail| using:

- a conditional expression;
- guarded equations;
- pattern matching.

- In a version of the game Mastermind, one player thinks of an n-digit number, while the other player repeatedly tries to guess it. After each guess, player 1 scores the guess by stating the number of bulls and cows. A bull is a correct digit in the correct place. A cow is a digit appearing in the secret number, but not in the correct place. No digit is scored more than once. For example, if the secret code is \verb|2113|, then:
```
        1234 scores 03
        1111 scores 20
        1212 scores 12
    
```
Using \verb|(-*-)|, construct a function score which takes a code and a guess and returns the number of bulls and cows.





</details>