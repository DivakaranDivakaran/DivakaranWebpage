# Higher order functions

One of the advantages of functional programming language is that functions are *first class objects*.  Although it is not so easy to fully comprehend the depth of the earlier statement, one of the consequences is that functions can be inputs to another function.  In this section, we will look at some of these examples.



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">4.1 Simple examples encountered earlier</summary>



We have encountered two examples earlier, namely, \verb|apply| and \verb|compose|.  Recall they were defined as follows:

```haskell
    apply.f.x = f.x
    compose.g.f.x = g.(f.x)
```

We can check the types of these functions using PUGOFER.  As we can evaluate \verb|f| at the value \verb|x|, the type of \verb|x| is the domain of \verb|f|.  So, if \verb|x| has type \verb|a|, then \verb|f| has type \verb|a -> b| and we can see that \verb|f: a -> b|.  And, as \verb|g| can act on \verb|f.x|, \verb|g| has type \verb|b -> c|.  Clearly, both functions apply and compose are taking functions as inputs.   

```
    ? :t apply
    apply : (a -> b) -> a -> b
    ? :t compose
    compose : (a -> b) -> (c -> a) -> c -> b
```

The preludes pusimple.pre and pustd.pre use several extremely useful higher order functions to process lists.  We will now explore these examples.  



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">4.2 Map</summary>



The first example is the map function that takes a function and applies it on each element of a list.    

```haskell
    map           : (a -> b) -> [a] -> [b]
    map.f.[]      = []
    map.f.(x::xs) = f.x :: map.f.xs
```

```
    ? map.divisors.[1...10]
    [[1], [1, 2], [1, 3], [1, 2, 4], [1, 5], [1, 2, 3, 6], [1, 7],
    [1, 2, 4, 8], [1, 3, 9], [1, 2, 5, 10]] : [[Int]]
    ? map.(\x -> x^2).[1...10]
    [1, 4, 9, 16, 25, 36, 49, 64, 81, 100] : [Int]
```

Notice the wierd second input \verb|\x -> x^2|.  This is an example of what is called a **lambda expression**.  It can be used when you do not want to name a function. \verb|\x -> x^2| is the function that takes $x$ to $x^2$.  This really comes in handy in many situations.  



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">4.3 Filter</summary>


Another example of a higher order function is filter.  It takes as input a predicate (a boolean valued function) and a list and returns all values in the list that satisfies the property. 

```haskell
    filter           : (a -> Bool) -> [a] -> [a]
    filter._.[]	= []
    filter.p.(x::xs) | p.x	      = x :: xs'
                     | otherwise  = xs'
                            where xs' = filter.p.xs
```

Notice that \verb|filter.even.[1...n] = [x| $|$ \verb|x <- [1...n], even.x]|.  An advantage of using filter is that we can apply it partially to get interesting functions from lists to lists.  

```
    ? filter.even.[1...25]
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24] : [Int]
    ? [x| x<- [1...25], even.x]
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24] : [Int]
    ? filter.even
    filter.even : [Int] -> [Int]
```

The function filter uses a key word \verb|where| that behaves as you would expect it to behave.  We can use it when we do not want to type something again and again.  Notice that the following definition has the same results. 

```haskell
    myfilter           : (a -> Bool) -> [a] -> [a]
    myfilter._.[]      = []
    myfilter.p.(x::xs) | p.x	   = x :: myfilter.p.xs
                       | otherwise = myfilter.p.xs
```

```
    ? myfilter.even.[1...25]
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24] : [Int]
```



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">4.4 Scan and Fold</summary>



Then we have a class of much more complicated class of inter-related functions \verb|scanl|, \verb|foldl|, \verb|foldl1|, \verb|foldl'|, \verb|scanr|, \verb|foldr|, etc.  The function \verb|scanl| takes as input a function \verb|f: a -> b -> a|, an element \verb|q:a|, and a list \verb|[x1,x2,...]:[b]| and returns a list of type \verb|[a]|, namely, \verb|[ q, f.q.x1, f.(f.q.x1).x2, f.(f.(f.q.x1).x2).x3, ...]|.  The function \verb|foldl| does something similar, but it just returns the final result.

```
    ? scanl.(*).2.[1,2,3]
    [2, 2, 4, 12] : [Int]
    ? foldl.(*).2.[1,2,3]
    12 : Int
    ? scanl.(*).2.[2,2,2]
    [2, 4, 8, 16] : [Int]
    ? foldl.(*).2.[2,2,2]
    16 : Int
```

The definition of \verb|scanl| defined in pusimple is as follows:
```haskell
    scanl            : (a -> b -> a) -> a -> [b] -> [a]
    scanl.f.q.xs     = q :: (case xs of
                              []   -> []
                              x::xs -> scanl.f.(f.q.x).xs)
```

The key word case is dividing into two subcases - when xs is the empty list and when it is not.  We could have also defined the function as follows.
```haskell
    myscanl              : (a -> b -> a) -> a -> [b] -> [a]
    myscanl.f.q.[]       = q :: []
    myscanl.f.q.(x::xs)  = q :: myscanl.f.(f.q.x).xs
```

```
    ? myscanl.(*).2.[2,2,2]
    [2, 4, 8, 16] : [Int]
```

The definition of foldl is very similar.
```haskell
    foldl             : (a -> b -> a) -> a -> [b] -> a
    foldl.f.z.[]	  = z
    foldl.f.z.(x::xs) = foldl.f.(f.z.x).xs
```

Let \verb|(*): Int -> Int| be multiplication.  Let us evaluate \verb|foldl.(*).1.[1,2,3,4]| as the computer would.
```
    foldl.(*).1.[1,2,3,4] = foldl.(*).1.(1::(2::(3::(4::[]))))
                          = foldl.(*).((*).1.1).(2::(3::(4::[])))
                          = foldl.(*).(1).(2::(3::(4::[])))
                          = foldl.(*).((*).1.2).(3::(4::[]))
                          = foldl.(*).2.(3::(4::[]))
                          = foldl.(*).((*).2.3).(4::[])
                          = foldl.(*).6.(4::[])
                          = foldl.(*).((*).6.4).[]
                          = foldl.(*).24.[]
                          = 24                       
```

The definition of \verb|foldl'| is pretty much the same, except for the use of \verb|strict|.  This is asking gofer to not do lazy evaluation.  The details of it is irrelevant for us at the moment and for now, you may ignore the *strictness*.

```haskell
    foldl'              : (a -> b -> a) -> a -> [b] -> a
    foldl'.f.a.[]	    = a
    foldl'.f.a.(x::xs)	= strict.(foldl'.f).(f.a.x).xs
```

Many functions on lists are defined using these functions.

```haskell
    sum, product   : [Int] -> Int
    sum            = foldl'.(+).0
    product        = foldl'.(*).1
    
    sums, products : [Int] -> [Int]
    sums           = scanl.(+).0
    products       = scanl.(*).1
```

```
    ? sum.[1,4,2,7,6,3,8]
    31 : Int
    ? sums.[1,4,2,7,6,3,8]
    [0, 1, 5, 7, 14, 20, 23, 31] : [Int]
    ? product.[1,4,2,7,6,3,8]
    8064 : Int
    ? products.[1,4,2,7,6,3,8]
    [1, 1, 4, 8, 56, 336, 1008, 8064] : [Int]
```



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">4.5 Exercises</summary>




- Expand the following application: \verb|foldl.max.0.[1,5,3]|
- Find the type of the following:
\begin{multicols}{2} 

- \verb|([1]::)|
- \verb|foldl.(+)|
- \verb|[[x]| $|$ \verb| x<- [1,2,3,4]]|
- \verb|map.square.[1,2,3]|
- \verb|foldl.(&&).True|

\end{multicols}
- Evaluate

- \verb|map.(1::).[[1],[],[1,2,3],[4,5]]|
- \verb|map.(1::).[[2,3],[4,5],[6,7]]|
- \verb|foldl.(-).20.[1,2,3,4]|
- \verb|foldl.(++).[].[[1],[2],[3],[5]]|
- \verb|foldl.(++).[].[[i]| $|$ \verb|i <- [1,2,3,4]]|
- \verb|foldl.(*).3.[1,2,3,4]|
- \verb|foldl.|$(||)$\verb|.False.[True,False,True,False]|
- \verb|foldl.|$(||)$\verb|.True.[True,False,True,False]|
- \verb|map.((*).2).[1,2,3,4]|
- \verb|map.((+).1).[1,2,3,4,5]|
- \verb|map.((|$||$\verb|).True).[True,False,True,False,True]|
- \verb|map.((&&).True).[True,False,True,False,True]|

- Write a function that takes a list of integers and replaces all the $1$ in it by $0$. for example \verb|f.[1,2,3,4] = [0,2,3,4]| and \verb|f.[2,2,2] = [2,2,2]|.
- Write a function that takes a list and returns the number of times 1 occurs in the list.
- Write a function that takes a list, say $[a1,...,an]$ and returns $a1 - a2 + a3 - a4 .... an$.  For example, \verb|f.[1,2,3] = 1-2+3 = 2|.
- Write a function that takes a list of integers and replaces every negative number by 0





</details>