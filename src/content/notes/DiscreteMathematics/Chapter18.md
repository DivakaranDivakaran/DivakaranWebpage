# Trees are recursively defined structures

Graphs are complicated structures and hence graph algorithms can become extremely complex.  Trees on the other hand have a recursively defined structure and hence it is often a lot easier to define algorithms on trees.  


<div class="academic-env env-definition">
<span class="env-label">Definition 18.1</span>

A tree with a designated vertex is called a rooted tree.  More formally, given a tree $T = (V,E)$ and a vertex $v\in V$, the tuple $(T,v)$ is a rooted tree.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 18.1</span>

For example, if you choose 2 as the root for the tree from Example **17.5**, then we get the following tree.  


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_630e392a99f07cf9fb15ec24b7ef288b.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>


Note that rooted trees are recursively defined structures.  Given a root and $n$ rooted trees, we can construct another rooted tree.  In the above example, 2 is the root and it is connected to the three rooted trees.  The third of these three trees, just contains a root 3.  



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_38289a9f2ddd4a281759027681e741cf.png" alt="Figure" class="max-w-full h-auto" /></div>



Taking inspiration from family tree, we call 4, 7, and 3 children of 2.  Similarly, we call 2 the parent of 4,7, and 3.  We will often say that 5 and 6 are siblings, 1 and 6 are cousins etc.  Moreover, we are often interested in some *family planning*.  


<div class="academic-env env-definition">
<span class="env-label">Definition 18.2</span>

A vertex of a rooted tree that does not have any children are called leafs.  If every tree that is not the root or a leaf has exactly $m$ children, then we call the tree an $m$-ary tree.  If $m=2$, we call the tree a binary tree.

</div>




<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">18.1 Trees in PUGOFER</summary>



We can define the binary tree as a ctype in PUGOFER as follows:
```haskell
    ctype BinTree.a where
        -- for each element of type a, we have a binary tree containing just the element
        Leaf   : a -> BinTree.a 
        -- given an element of type a and two trees, we can combine them to form a new tree
        Branch : a -> BinTree.a -> BinTree.a -> BinTree.a
```


<div class="academic-env env-example">
<span class="env-label">Example 18.2</span>

Just like the inputs of a list can be any type, we can create trees containging any type.  

```
        ? :t Leaf.3
        Leaf.3 : BinTree.Int
        ? :t Branch.4.(Branch.3.(Leaf.2).(Leaf.3)).(Leaf.2)
        Branch.4.(Branch.3.(Leaf.2).(Leaf.3)).(Leaf.2) : BinTree.Int

        ? :t Leaf.True
        Leaf.True : BinTree.Bool
        ? :t Leaf."Hello"
        Leaf."Hello" : BinTree.[Char]
```

</div>


Very similar to how we defined Nat earlier and how lists are defined in gofer.  Lists are defined in PUGOfer as
```haskell
    ctype List.a where
        emptylist : List.a
        append    : a -> List.a
```
Ofcourse, PUGOFER has introduced some *synctactic sugar*  - the empty list is denoted as \verb|[]| and append is denoted as \verb|::|.  Thus, even when we write a list \verb|[1,2,3,4]|, it is internally the same as \verb|1::(2::(3::(4::[])))| and you can check that in PUGOFER.
```
    ? 1::(2::(3::(4::[])))
    [1, 2, 3, 4] : [Int]
```

As trees have a recursive structure, we can define functions on trees analogous to how we had defined functions on lists.  For example, we can create a function that counts the number of leaves as follows.

```haskell
    -- counts the number of leaves
    numleaves                       : BinTree.a -> Int
    numleaves.(Leaf.a)              = 1 
    numleaves.(Branch.a.t1.t2)      = numleaves.t1 + numleaves.t2

    -- counts how many generations exist in the tree.  We call it depth because we have  
    -- been representing root at the top.  a more biologically accurate term would have 
    -- been height.
    depth                           : BinTree.a -> Int
    depth.(Leaf.a)                  = 0
    depth.(Branch.a.t1.t2)          = 1 + maximum.[depth.t1,depth.t2]
```

Recall that a large proportion of functions we written using the extremely useful functions map and fold.  We can define analogues map and fold as follows.

```haskell
    mapbintree                      : (a -> b) -> BinTree.a -> BinTree.b 
    mapbintree.f.(Leaf.a)           = Leaf.(f.a)
    mapbintree.f.(Branch.a.t1.t2)   = Branch.(f.a).(mapbintree.f.t1).(mapbintree.f.t2)

    foldbintree                        : (a -> a -> a) -> a -> BinTree.a -> a
    foldbintree.f.a1.(Leaf.a2)         = f.a1.a2
    foldbintree.f.a1.(Branch.a2.t1.t2) = foldbintree.f.(f(foldbintree.f.a1.t1).a2).t2
```

These functions can be then used to define other functions, like

```haskell
    sumbintreeint                   : BinTree.Int -> Int
    sumbintreeint.t1                = foldbintree.(+).0.t1
```

You can check that the function is behaving as expected 

```
    ? sumbintreeint.(Branch.4.(Branch.3.(Leaf.2).(Leaf.3)).(Leaf.2))
    14 : Int
```



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">18.2 Tree Traversal</summary>


To process the data stored as a tree, we often want to extract the elements of a tree in sequence.  This process is called tree traversal.  It is natural to list the members of the left subtree before the members of the right subtree - since our language reads from left to right.  But, it is not clear whether we should list the root before the elements of the left tree, in-between the members of the left and right subtree, or after the members of the right subtree.  These three give rise to the following three functions.

```haskell
    pretraversal                  : BinTree.a -> [a]
    pretraversal.(Leaf.a)         = [a]
    pretraversal.(Branch.a.t1.t2) = [a] ++ pretraversal.t1 ++ pretraversal.t2 

    intraversal                  : BinTree.a -> [a]
    intraversal.(Leaf.a)         = [a]
    intraversal.(Branch.a.t1.t2) = intraversal.t1 ++ [a] ++ intraversal.t2

    posttraversal                  : BinTree.a -> [a]
    posttraversal.(Leaf.a)         = [a]
    posttraversal.(Branch.a.t1.t2) = posttraversal.t1 ++ posttraversal.t2 ++ [a]
```

```
    ? pretraversal.(Branch.4.(Branch.3.(Leaf.2).(Leaf.3)).(Leaf.2))
    [4, 3, 2, 3, 2] : [Int]
    ? intraversal.(Branch.4.(Branch.3.(Leaf.2).(Leaf.3)).(Leaf.2))
    [2, 3, 3, 4, 2] : [Int]
    ? posttraversal.(Branch.4.(Branch.3.(Leaf.2).(Leaf.3)).(Leaf.2))
    [2, 3, 3, 2, 4] : [Int]
```



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">18.3 Trees with different labels on leaves and nodes</summary>


Sometimes, we may want to use different labels on leaves and nodes.  In that case, we can do a small fix and define the following
```haskell
    ctype LBTree.a.b where
    Lf: a -> LBTree.a.b
    Br: b -> LBTree.a.b -> LBTree.a.b -> LBTree.a.b 
```
Some other time, we may want labels only on leaves, then we can define the tree as follows
```haskell
    ctype LeafTree.a where
    Lf: a -> LeafTree.a.b
    Br: LeafTree.a -> LeafTree.a -> LeafTree.a
```
Finally, there will also be situations, where we want the labels only on the nodes, then we can define the tree as follows
```haskell
    ctype NodeTree.a where
    Lf: NodeTree.a
    Br: a -> NodeTree.a -> NodeTree.a -> NodeTree.a 
```



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">18.4 Exercises</summary>


[1.]
- The rooted Fibonacci trees $T_n$ are deﬁned recursively in the 
following way. $T_1$ and $T_2$ are both the rooted tree consisting of a 
single vertex, and for $n = 3, 4, \dots$ the rooted tree $T_n$ is 
constructed from a root with $T_{n-1}$ as its left subtree and 
$T_{n-2}$  as its right subtree.

- Draw the ﬁrst seven rooted Fibonacci trees.
- How many vertices, leaves, and internal vertices does the rooted Fibonacci tree $T_n$ have, where $n$ is a positive integer? What is its height?

- Prove that the number of leaves in a binary tree is always one more than the number of internal nodes (nodes that are not leaves).
- State and prove a relationship between number of subtrees of t and size t, if subtrees of a binary tree t is defined as 
```
        subtrees.(Leaf.z)       = [Leaf.z]
        subtrees.(Branch.t1.t2) = subtrees.t1 ++ subtrees.t2 ++ [Branch.t1.t2]
    
```
- Define analogues of map and fold for the alternate versions of trees we defined.
- Define a function labels, that lists all the labels in a \verb|LeafTree|.  
- Define a function labels, that lists all the labels in a \verb|NodeTree|.  




</details>