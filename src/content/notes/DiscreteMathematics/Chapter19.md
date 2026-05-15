# Some applications



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">19.1 Binary Search Trees</summary>


Checking if a particular element belongs to a list takes non-trivial effort, you need to go through all the elements.  However, if the list is sorted, we can do it a lot faster.  We can use the following algorithm and it is a lot faster.  Notice that this is analogous to how we find a word in the dictionary.

\begin{lstlisting}[language=Haskell]
-- the function works only if the input is a sorted list
binsearch.[].a  = False
binsearch.[x].a | x == a    = True
| otherwise = False
binsearch.xs.a  | a < xs!!(length.xs / 2)  = binsearch.(take.(length.xs /2).xs).a
| otherwise                = binsearch.(drop.(length.xs /2).xs).a
\end{lstlisting}

There are several algorithms to sort a list.  The inbuilt sorting algorithm in pustd.pre is the insertion sort.

\begin{lstlisting}[language=Haskell]
-- insets x into the correct position
insert           : Ord.a => a -> [a] -> [a]
insert.x.[]	     = [x]
insert.x.(y::ys)
| x <= y	 = x::y::ys
| otherwise = y::insert.x.ys

sort             : Ord.a => [a] -> [a]
sort 	           = foldr.insert.[] 
\end{lstlisting}

We can always store sorted lists to make retrieval easier.  We may also store it in the form of a binary tree which would make the retrieval process more evident.  Thus, we create a type

\begin{lstlisting}[language=Haskell]
ctype BSTree.a where
ET: BSTree.a
Nd: a -> BSTree.a -> BSTree.a -> BSTree.a 
\end{lstlisting}

Further, we can write an algorithm that constructs a tree from a list as follows
\begin{lstlisting}[language=Haskell]
bstinsert.a.ET = Nd.a.ET.ET 
bstinsert.a1.(Nd.a2.t1.t2) | a1 < a2   = Nd.a2.(bstinsert.a1.t1).t2 
| a1 > a2   = Nd.a2.t1.(bstinsert.a1.t2) 
| otherwise = Nd.a2.t1.t2

bst.[] = ET
bst.xs = bstinsert.(last.xs).(bst.(init.xs))
\end{lstlisting}
This is a faithful translation of the algorithm in Kenneth Rosen and it can be tested.

\begin{verbatim}
? bst.["Mathematics","Physics","Geography","Zoology","Meteorology","Geology",
"Psychology","Chemistry"]
Nd."Mathematics".
(Nd."Geography".
(Nd."Chemistry".ET.ET).
(Nd."Geology".ET.ET)).
(Nd."Physics".
(Nd."Meteorology".ET.ET).
(Nd."Zoology".
(Nd."Psychology".ET.ET).
ET)) : BSTree.[Char]
\end{verbatim}

However, the tree and its depth depends on the order in which elements are listed in the list.  For example,
\begin{verbatim}
? depth.(bst.["Mathematics","Physics","Geography","Zoology","Meteorology","Geology",
"Psychology","Chemistry"])
4 : Int
? depth.(bst.(sort.["Mathematics","Physics","Geography","Zoology","Meteorology","Geology",
"Psychology","Chemistry"]))
8 : Int
\end{verbatim}

In general, the more sorted the list, the larger the depth will be.  To decrease the depth, at each level, we should choose the median element.  Thus, it might be better to use the following algorithm instead.

\begin{lstlisting}[language=Haskell]
-- here we are assuming the list xs is sorted, if not sort it first
bst.[] = ET
bst.xs = Nd.(xs!!(length.xs /2)).(bst.(take.(length.xs /2).xs)).(bst.(drop.((length.xs /2) + 1).xs))
\end{lstlisting}

Whichever way we construct our binary search tree, we can do further operations like merging two trees or deleting an element from tree as follows:

\begin{lstlisting}[language=Haskell]
split.(Nd.a.t1.t2)      | t2 == ET = (a,t1)
| otherwise = (y, Nd.a.t1.t)
where (y,t) = split.t2

join.t1.t2              | t1 == ET = t2 
| otherwise = Nd.x.t.t2
where (x,t) = split.t1 

delete.a.ET = ET 
delete.a1.(Nd.a2.t1.t2) | a1 < a2 = Nd.a2.(delete.a1.t1).t2 
| a1 > a2 = Nd.a2.t1.(delete.a1.t2)
| otherwise = join.t1.t2
\end{lstlisting}




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">19.2 Prefix code</summary>


You will be aware that in computer everything is stored as a strings of zeroes and ones.  As there are 26 letters of the alphabet, if we want to express each number uniquely, you need bit strings of length $5$ as $2^4 < 26 < 32 = 2^5$.  If we map the alphabets in order to the binary representation of the numbers $0$-$25$, the representation of cat would be $00010 00001 01011$.  Can we come up with a representation that uses fewer bits ($0$ or $1$)?

If we are allowed to use bit strings of varying lengths, then it would be smart to use shorter strings for letters that are more frequently used (like a or e) and longer strings for the less frequently letters (like x).  However, note that there should not be any ambiguity.  For example, if we represent c,a,t,i, and f by $1$, $0$, $110$, $101$, $10$, then the string $10110$ can be written as ``cat" or ``if".  


<div class="academic-env env-definition">
<span class="env-label">Definition 19.1</span>

A representation of symbols using bit strings is called a prefix code if the representation of one string is not the initial segment of any other symbol.

</div>


Notice that the representation discussed earlier is not a prefix code.  The code for c, namely $1$, is the initial segment of the code for t ($110$), i ($101$), and f ($10$).  


<div class="academic-env env-theorem">
<span class="env-label">Theorem 19.1</span>

A sting of symbols expressed using prefix code can be decoded uniquely.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We prove this using strong induction on the number of symbols used.  If the bit string represents a single symbol, then it can be decoded uniquely: if $a_0\dots a_k$ is the code for a symbol, then $a_0\dots a_i$ is not the prefix code of a symbol if $i\neq k$.  

Assume that the if the message has $m$ symbols, it can be decoded uniquely.  

Now consider a bit string that represents a string of $m+1$ symbols, say $a_0a_1\dots a_n$.  As before, the first symbol in this sequence of symbols can be uniquely identified - say $a_0\dots a_k$.  Now, the string $a_{k+1}\dots a_n$ is a string representing $m$ symbols.  Thus, by the induction hypothesis, we can decode that uniquely.

</details>
</div>


Of course, the condition of prefix condition is a sufficient condition.  For example, you can show that a postfix code can also be decoded uniquely.


<div class="academic-env env-definition">
<span class="env-label">Definition 19.2</span>

A representation of symbols using bit strings is called a postfix code if the representation of one string is not the final segment of any other symbol.

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">19.3 Huffman coding trees</summary>


Huffman coding tree provides a way to construct a prefix code if we have the frequency of each of the symbols used.  These frequency is represented as natural numbers, called weights.  The Huffman coding tree is a binary tree whose 

- Leafs are labeled using the symbols we want to encode and its weight
- Non-leaf nodes are marked by the combined weight of all its leaves


\begin{lstlisting}[language=Haskell]
ctype HTree where
Lf: Char -> Int -> HTree
Br: Int -> HTree -> HTree -> HTree
\end{lstlisting}

Suppose we are given a sequence of symbols and their weights, for example
\begin{verbatim}
wss = [(`A',11), (`E',17), (`G',8), (`R',9),(`T',13)]
\end{verbatim}
We first sort them using their weights.  A variation of the insertion sort can be written as follows
\begin{lstlisting}[language=Haskell]
insertbywt.(a,m).[]            = [(a,m)] 
insertbywt.(a,m).((b,n)::wss)  | m <=n = (a,m) :: ((b,n)::wss)
| m > n = (b,n) :: (insertbywt.(a,m).wss)

sortbywt.[(a,m)]               =  [(a,m)]
sortbywt.((a,m)::((b,n)::wss)) | m < n = insertbywt.(a,m).(sortbywt.((b,n)::wss))
| n < m = insertbywt.(b,n).(sortbywt.((a,m)::wss))
\end{lstlisting}
When we sort wss, we get \verb|[(`G',8),(`R',9),(`A',11),(`T',13),(`E',17)]|.  Next we will combine \verb|(`G',8)| and $\verb|(`R',9)|$ to obtain a tree \verb|Br.17.(`G',8).(`R',9)|.  As the weight of this combined tree is greater than the weight of \verb|(`A',11)| and \verb|(`T',13)|, we want it to be placed accordingly.  This can be done as follows:

\begin{lstlisting}[language=Haskell]
wt.(Lf.x.w)              = w
wt.(Br.w.t1.t2)          = w

winsertht.u.[]           = [u]
winsertht.u.(p::ps)      = if wt.u <= wt.p then u::(p::ps) else p::winsertht.u.ps 

combineht.(t1::(t2::ts)) = winsertht.(Br.(wt.t1 + wt.t2).t1.t2).ts
\end{lstlisting}

We need to now keep repeating this process until the list contains a single element

\begin{lstlisting}[language=Haskell]
single.[]                           = False
single.(x::xs)                      = if xs == [] then True else False 

buildht.wss = (until.single.combineht.(map (uncurry.Lf).wss))!!0
\end{lstlisting}

\begin{verbatim}
? buildht.wss
Br.58.(Br.24.(Lf.'A'.11).(Lf.'T'.13)).(Br.34.(Br.17.(Lf.'G'.8).(Lf.'R'.9)).(Lf.'E'.17)) : HTree
\end{verbatim}

Actually, we do not want the weights anymore, so we can remove them to get a cleaner picture.  But, for that, we need to first create the appropriate type.
\begin{lstlisting}[language=Haskell]
ctype BinTree.a where
Leaf   : a -> BinTree.a
Branch : BinTree.a -> BinTree.a -> BinTree.a

unlabel.(Lf.x.w)                    = Leaf.x
unlabel.(Br.w.t1.t2)                = Branch.(unlabel.t1).(unlabel.t2)

superbuild                          = buildht;unlabel  
\end{lstlisting}

\begin{verbatim}
? superbuild.wss
Branch.(Branch.(Leaf.'A').(Leaf.'T')).(Branch.(Branch.(Leaf.'G').(Leaf.'R')).(Leaf.'E')) 
: BinTree.Char
\end{verbatim}

Once we have constructed the binary tree, we can encode each symbol based on their path from the root to the symbol.  A left turn would be denoted by $0$ and a right turn will be denoted by $1$.

\begin{lstlisting}[language=Haskell]
ctype Step where
Left  : Step
Right : Step

type Path = [Step]

member.(Leaf.a).x        = (x == a)
member.(Branch.t1.t2).x  = (member.t1.x) || (member.t2.x)

codex.(Leaf.a).x         = if x == a then [] else undefined
codex.(Branch.t1.t2).x   = if member.t1.x then Left::(codex.t1.x) 
else Right::(codex.t2.x)
\end{lstlisting}

\begin{verbatim}
? codex.(superbuild.wss).'G'
[Right, Left, Left] : [Step]

? codex.(superbuild.wss).'A'
[Left, Left] : [Step]
\end{verbatim}

We can also decode as follows
\begin{lstlisting}[language=Haskell]
traces.t.(Leaf.a).[]                = [a]
traces.t.(Leaf.a).(p::ps)           = [a] ++ traces.t.t.(p::ps) 
traces.t.(Branch.t1.t2).(Left::ps)  = traces.t.t1.ps
traces.t.(Branch.t1.t2).(Right::ps) = traces.t.t2.ps

decodexs.t.ps                       = traces.t.t.ps
\end{lstlisting}

\begin{verbatim}
? decodexs.(superbuild.wss).[Right,Left,Left,Left,Left,Left,Right,Right,Right]
GATE
\end{verbatim}








</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">19.4 Exercises</summary>


[1.]
- Which of these codes are preﬁx codes?

- a: 11, e: 00, t: 10, s: 01
- a: 0, e: 1, t: 01, s: 001
- a: 101, e: 11, t: 001, s: 011, n: 010
- a: 010, e: 11, t: 011, s: 1011, n: 1001, i: 10101

- Construct the binary tree with preﬁx codes representing these coding schemes.

- a: 11, e: 0, t: 101, s: 100
- a: 1, e: 01, t: 001, s: 0001, n: 00001
- a: 1010, e: 0, t: 11, s: 1011, n: 1001, i: 10001

- Given the coding scheme a: 001, b: 0001, e: 1, r: 0000, s: 0100, t: 011, x: 01010, ﬁnd the word represented by
\begin{multicols}{4}

- 01110100011
- 0001110000
- 0100101010
- 01100101010

\end{multicols}
- Prove that a postfix code is uniquely decodable.
- Explain why a Huffman code has the prefix property
- Construct a code which does not satisfy the prefix property, but which nevertheless is such that every text can be uniquely decoded.


</details>