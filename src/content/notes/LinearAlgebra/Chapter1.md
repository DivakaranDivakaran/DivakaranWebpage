# Solving two equations in two unknowns

In school, you would have encountered questions of the form: Solve
$$
\begin{align*}
    x + 2y &= 0\\
    2x + y &= 3.
\end{align*}
$$
You might not have realised, but the question is a little ambiguous.  It was implicit that you need to find a tuple $(x,y)$ that satisfies both equations.  Not a tuple $(x,y,z)$ or $(x,y,z,w)$.  If I had instead asked you to solve
$$
\begin{align*}
    x + 2y &= 0\\
    2x + y &= 3\\
    x + z &= 0
\end{align*}
$$
you would have assumed you need to find a triple $(x,y,z)$.  In other words, the context informs you what you are looking for.  However, this can be at times confusing.  In this course, we would try to avoid such ambiguities as much as possible.  Don't hesitate to point out if/when I turn sloppy.  And, I promise, I would hold high expectations from you.  Thus, I would rephrase the earlier question as: Find all $(x,y)$ such that $x,y\in \mathbb{R}$ and 
$$
\begin{align*}
    x + 2y &= 0\\
    2x + y &= 3.
\end{align*}
$$


<div class="academic-env env-definition">
<span class="env-label">Definition 1.1</span>

The collection of all tuples $(x,y)$ where $x$ and $y$ are real numbers - $\{(x,y) | x,y\in \mathbb{R}\}$ - is called the Cartesian plane and is denoted as $\mathbb{R}^2$

</div>


Thus, the question is asking us to find the set $\{(x,y)\in \mathbb{R}^2| x + 2y = 0 \text{ and } 2x + y = 3\}$ or equivalently the set $\{(x,y)\in \mathbb{R}^2| x + 2y = 0\} \cap \{(x,y)\in \mathbb{R}^2| 2x + y = 3\}$.  You may recall from school or you can check using GeoGebra that the set $\{(x,y)\in \mathbb{R}^2| x + 2y = 0\}$ and $\{(x,y)\in \mathbb{R}^2| 2x + y = 3\}$ represent lines.  In Appendix **??** we define lines to be sets of this form, but intuition would be sufficient in the course.  Thus, **we were looking for the intersection of two lines!**



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">1.1 Solving equations amount to finding the intersection of lines</summary>



More generally, the set of all $(x,y)\in \mathbb{R}^2$ such that 
$$
\begin{align}
    \label{sysLE}
    ax + by &= e \\
    cx + dy &= f \nonumber
\end{align}
$$

represents the intersection of two lines.  The act of finding all points in the set is called solving the system of equations **1.1**.  Notice that an equation $px+qy = r$ is really silly when both $p$ and $q$ are $0$.  The set $\{(x,y) \ | \ 0 = r\}$ is $\emptyset$ when $r \neq 0$ and is $\mathbb{R}^2$ when $r=0$.  Thus, in the discussion that follows, we would assume that the linear equations in our system are not of this form.  More precisely,

\begin{mdframed}[backgroundcolor=red!15, frametitle={Assumption}]
Given a system of linear equations **1.1**, we assume 
$$[(a\neq 0) \lor (b\neq 0)] \land [(c\neq 0) \lor (d\neq 0)]$$
\end{mdframed}

We will explore how to solve such a system of equations.  Note that if $(x,y)\in \mathbb{R}^2$ satisfy the system of equations **1.1**, then it should also satisfy the system  

$$
\begin{align}
    adx + bdy &= de \label{sysLE2} \\
    bcx + bdy &= bf \nonumber
\end{align}
$$
In other words, a tuple $(x,y)\in \mathbb{R}^2$ satisfies the system **1.1** only if $x$ should satisfy the equation
$$
\begin{align}
    \label{sysLE3}
    (ad-bc)x = de-bf
\end{align}
$$

**Case 1: $ad-bc \neq 0$ -** If $ad-bc\neq 0$, then a tuple $(x,y)$ satisfies the system **1.1** only if $x$ satisfies Equation **1.3**.  But, $x$ satisfies Equation **1.3** only if $x = \frac{de-bf}{ad-bc}$.  Substituting the value back in the system of equations **1.1** we get
$$
\begin{align}
    \left[ a\left(\frac{de-bf}{ad-bc}\right) + by = e \right] \equiv \left[y = \frac{ade-bce-ade+abf}{abd-b^2c} =\frac{abf-bce}{abd-b^2c} = \frac{af-ce}{ad-bc}\right]\\
    \left[c\left(\frac{de-bf}{ad-bc}\right) + dy = f \right] \equiv \left[y = \frac{adf - bcf -cde + bcf}{ad^2 - bcd}= \frac{adf-cde}{ad^2-bcd} = \frac{af-ce}{ad-bc}\right] \nonumber
\end{align}
$$
Thus, the set of solutions of the system of equations **1.1** is
$$
\begin{align*}
    \left\{ \left(\frac{de-bf}{ad-bc}, \frac{af-ce}{ad-bc}\right)\right\}
\end{align*}
$$


<div class="academic-env env-example">
<span class="env-label">Example 1.1</span>

Find all $(x,y)\in \mathbb{R}^2$ such that 
$$
\begin{align*}
        x + 2y &= 0\\
        2x + y &= 3.
    \end{align*}
$$



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_258cd02d1e1a33985c2a1f4c8bbc8e40.png" alt="Figure" class="max-w-full h-auto" /></div>


As $ad - bc = 1 - 4 = -3 \neq 0$, the set of solutions is $\left\{ \left(\frac{de-bf}{ad-bc}, \frac{af-ce}{ad-bc}\right)\right\} = \{\left(\frac{0-6}{-3}, \frac{3-0}{-3}\right)\} = \{\left(2, -1\right)\}$.  Figure **1.1** shows the GeoGebra solution.  Note that it agrees with what we have obtained.

</div>



**Case 2: $ad-bc = 0$ and $de-bf\neq 0$ -** If the system **1.1** has a solution, then there should be an $x$ that satisfies Equation **1.3**.  But, when $ad-bc = 0$ and $de-bf\neq 0$, Equation **1.3** takes the following form
$$
\begin{align*}
    0 = de-bf 
\end{align*}
$$
and clearly it has no solution.  Thus, there are no solutions for the system **1.1**.  Geometrically, this is a case when the two lines are parallel. 


<div class="academic-env env-example">
<span class="env-label">Example 1.2</span>

Find all $(x,y)\in \mathbb{R}^2$ such that 
$$
\begin{align*}
        x + 2y &= 0\\
        x + 2y &= 3.
    \end{align*}
$$
As $ad - bc = 2 - 2 = 0$ and $de-bf = 0 - 6 = -6 \neq 0$, there are no solutions.  Figure **1.2** shows the GeoGebra solution.  Note that it agrees with what we have obtained.


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_9b7399edadb287710fe4ed068220768c.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>


**Case 3: $ad-bc = 0$, $de-bf=0$ -**  If $d\neq 0$ and $b = 0$, then we have $ad = bc = 0$.  As, $d\neq 0$, this implies $a=0$.  But, we assumed $a$ and $b$ are not simultaneously $0$.  Similarly, if $b\neq 0$ and $d=0$, then we have $bc = ad = 0$.  As, $b\neq 0$, this implies $c=0$.  BUt, we assumed $c$ and $d$ are not simultaneously $0$.  Thus, there are only two subcases:

**Case 3a: $ad-bc = 0$, $de-bf=0$, $d\neq 0$ and $b\neq 0$ -** Then, $a = \frac{bc}{d}$. We may rewrite Equation **1.1** as 
$$
\begin{align*}
    \left[\left(\frac{bc}{d}\right)x + by = e\right] \equiv \left[bcx + bdy = de = bf\right] \equiv \left[cx + dy = f \right]\\
    cx + dy = f 
\end{align*}
$$
Thus, ``in-effect" we have only one equation - $cx+dy = f$ - in this case.  We know that the set of all $(x,y)$ satisfying the equation forms a line.  This is a case when the two lines coincide.


<div class="academic-env env-example">
<span class="env-label">Example 1.3</span>

Find all $(x,y)\in \mathbb{R}^2$ such that 
$$
\begin{align*}
        x + 2y &= 3\\
        2x + 4y &= 6.
    \end{align*}
$$
Note that $ad-bc = 4-4 = 0$, $de-bf = 12-12 = 0$, $d=4\neq0$, and $b=2\neq 0$.  Both equations in the system represent the same line.

</div>


**Case 3b: $b=0=d$ -** We may rewrite Equation **1.1** as 
$$
\begin{align*}
    ax &= e \\
    cx &= f.
\end{align*}
$$
Note that 
$$
\begin{align*}
    \{(x,y) \ | \ ax = e\} = \left\{\left(\frac{e}{a},y\right)\ | \ y\in \mathbb{R}\right\}.
\end{align*}
$$   
Similarly, 
$$
\begin{align*}
    \{(x,y) \ | \ cx = f\} = \left\{\left(\frac{f}{c},y\right)\ | \ y\in \mathbb{R}\right\}.
\end{align*}
$$  
Thus,
$$
\begin{align*}
    \{(x,y) \ | \ ax = e\} \cap \{(x,y) \ | \ cx = f\} = \begin{cases}
    \left\{\left(\frac{f}{c},y\right)\ | \ y\in \mathbb{R}\right\} & \text{if $c\neq 0$, $a\neq 0$, and $\frac{e}{a} = \frac{f}{c}$}\\
    \emptyset & \text{otherwise}
    \end{cases}.
\end{align*}
$$  


<div class="academic-env env-example">
<span class="env-label">Example 1.4</span>

Find all $(x,y)\in \mathbb{R}^2$ such that 
$$
\begin{align*}
        2x = 4\\
        x = 3
    \end{align*}
$$
As $c\neq 0$, $a\neq 0$, and $\frac{e}{a}\neq \frac{f}{c}$ this system does not have a solution.  Figure **1.4** shows the GeoGebra solution.  Note that it agrees with what we have obtained.



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_641cb2e0cccac410dbf70f00590658ec.png" alt="Figure" class="max-w-full h-auto" /></div>



</div>



<div class="academic-env env-example">
<span class="env-label">Example 1.5</span>

Find all $(x,y)\in \mathbb{R}^2$ such that 
$$
\begin{align*}
        2x = 4\\
        x = 2
    \end{align*}
$$
As $c\neq 0$, $a\neq 0$, and $\frac{e}{a} = \frac{f}{c}$ the set of solutions is $\{(2,y) \ | \ y\in \mathbb{R}\}$.

</div>





<div class="academic-env env-remark">
<span class="env-label">Remark 1.1</span>

Notice that the solution exists and is unique only when $ad-bc\neq 0$.  Thus, the number $ad-bc$ is important and we will encounter it and its relatives throughout the course.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.1</span>

Consider the system 
$$
\begin{align*}
        x + ay &= b\\
        2x + 10y &= 4
    \end{align*}
$$
Give a value of $a$ for which the system has a unique solution.  Does the value of $b$ matter?  Explain your answer.  Give a value of $(a,b)$ for which the system has no solution.  Give a value of $(a,b)$ for which the system has infinitely many values.

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">1.2 Cartesian plane or $\mathbb{R}^2$</summary>

Let us now recall the various structures on $\mathbb{R}^2$ you have encountered in school.  


<div class="academic-env env-definition">
<span class="env-label">Definition 1.2</span>

For two points $(a,b)$ and $(c,d)$ in $\mathbb{R}^2$, we say $(a,b) = (c,d)$ if $a=c$ and $b=d$.

</div>


\subsection*{Addition} Given two elements on $\mathbb{R}^2$, say $(a,b)$ and $(c,d)$, we can add these elements to form an element $(a+c,b+d)$.  This defines a function $+:\mathbb{R}^2\times \mathbb{R}^2 \to \mathbb{R}^2$ defined as $+((a,b),(c,d)) = (a+c,b+d)$.  We will typically write $(a,b) + (c,d)$ instead of $+((a,b),(c,d))$ -  as you have been doing for addition of numbers.  This is called **infix notation**.


<div class="academic-env env-example">
<span class="env-label">Example 1.6</span>

Let $v = (1,2)$ and $w= (3,4)$.  Then $v+w = (1,2) + (3,4) = (1+3,2+4) = (4,6)$.

</div>


\begin{mdframed}[backgroundcolor=red!15, frametitle={Note on notation}]
Observe, I am using a single letter $v$ to represent the element $(1,2)$.  Later in the book, I will probably write $w = (1,2,3)$.   You need to keep track of the ``type"! As $v,w\in \mathbb{R}^2$, the $+$ sign denotes addition on $\mathbb{R}^2$.  But, if $x=1$ and $y=2$, then the $+$ sign in $x+y$ would denote addition in $\mathbb{R}$.  Most importantly, the expression $x + v$ makes no sense as $x$ and $v$ are objects of different types.  Your programming experience would come in handy as there too you had to always keep track of the types.  

Elements of $\mathbb{R}^2$ are called vectors - and we will use the language often.  This the reason we use $v$ and neighbouring letters of the alphabet for elements in $\mathbb{R}^2$.  
\end{mdframed}


<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.1 (Existence of additive identity)</span>

There exists an element $(x,y)$ in $\mathbb{R}^2$ such that $\forall (a,b)\in \mathbb{R}^2$, $(a,b) + (x,y) = (a,b) = (x,y) + (a,b)$.

</div>


\begin{mdframed}[backgroundcolor=blue!10, frametitle={Proof Strategy}]
In the proof below we will use two strategies that help us prove statements with quantifiers.  There are two quantifiers you would encounter, namely the existential quantifies (there exists/$\exists$) and the universal quantifier (for all/ $\forall$).  

A statement with an existential quantifier can be proved by giving one example.  Note that the statement of the above theorem is an existential statement.  We prove the statement by giving one example.  That is, we show that $(0,0)$ is the required element.  In other words, we show: $\forall (a,b)\in \mathbb{R}^2$, $(a,b) + (0,0) = (a,b) = (0,0) + (a,b)$. 

The statement $\forall (a,b)\in \mathbb{R}^2$, $(a,b) + (0,0) = (a,b) = (0,0) + (a,b)$ is a statement with a universal quantifier.  To prove something is a true for all elements, we show it is true for an **arbitrary but fixed element**.  This is also why mathematicians often use the terms ``for all", ``for any", ``for each", ``given any" etc interchangeably.  All of these terms are denoted by the symbol $\forall$.   

Fix an arbitrary element $(a,b)\in \mathbb{R}^2$, then we need to prove $(a,b) + (0,0) = (a,b) = (0,0) + (a,b)$.  The statement $(a,b) + (0,0) = (a,b) = (0,0) + (a,b)$ is actually a compound sentence.  It is a short hand for $(a,b) + (0,0) = (a,b)$ and $(a,b) = (0,0) + (a,b)$.  Thus, we need to prove both the statements $(a,b) + (0,0) = (a,b)$ and $(a,b) = (0,0) + (a,b)$.  But, they are both easy to prove.
$$
\begin{align*}
        (a,b) + (0,0) &= (a+0,b+0) & \text{(definition of addition on $\mathbb{R}^2$)}\\
        &= (a,b) & \text{($0$ is the additive identity in $\mathbb{R}$)}
    \end{align*}
$$ 
Similarly,
$$
\begin{align*}
        (0,0) + (a,b) &= (0+a,0+b) & \framebox(125,10){}\\
        &= (a,b) & \framebox(125,10){}
    \end{align*}
$$
\end{mdframed}


<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.2</span>

Addition on $\mathbb{R}^2$ is commutative.  More precisely, $\forall (a,b),(c,d)\in \mathbb{R}^2$, $(a,b) + (c,d) = (c,d) + (a,b)$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Fix an arbitrary pair $(a,b)$ and $(c,d)$ in $\mathbb{R}^2$.  We will show that $(a,b) + (c,d) = (c,d) + (a,b)$.  As the elements were arbitrary, this would prove the universal statement.  
$$
\begin{align*}
        (a,b) + (c,d) &= (a+c,b+d)  & \framebox(175,10){}\\
        &= (c+a,b+d) & \text{(from commutativity of addition on $\mathbb{R}$)}
    \end{align*}
$$

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.3</span>

Addition on $\mathbb{R}^2$ is associative.  More precisely, $\forall (a,b),(c,d),(e,f)\in\mathbb{R}^2$, $(a,b) + ((c,d) + (e,f)) = ((a,b) + (c,d)) + (e,f)$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Fix arbitrary elements $(a,b),(c,d),(e,f)\in \mathbb{R}^2$.  We will show that $(a,b) + ((c,d) + (e,f)) = ((a,b) + (c,d)) + (e,f)$.  As the elements were arbitrary, this would prove the universal statement.  
$$
\begin{align*}
        (a,b) + ((c,d) + (e,f)) &= (a,b) + (c+e,d+f) & \framebox(150,10){}\\
        &= (a + (c+e), b + (d + f)) & \framebox(150,10){}\\
        &= ((a+c) + e, (b+d) + f) & \text{(associativity of addition in $\mathbb{R}$)}\\
        &= (a+c,b+d) + (e,f) & \framebox(150,10){}\\
        &= ((a,b) + (c,d)) + (e,f) & \framebox(150,10){}
    \end{align*}
$$

</details>
</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.2</span>

Show that given any element $(a,b)$, $(a,b) + (-a,-b) = (0,0) = (-a,-b) + (a,b)$.  The element $(-a,-b)$ is called the additive inverse of $(a,b)$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.3</span>

Plot $(1,2)$ and $(-1,-2)$ in GeoGebra.  Similarly plot $(3,4)$ and $(-3,-4)$ in GeoGebra.

</div>


This allows us to define subtraction on $\mathbb{R}^2$.  Given two elements $(a,b)$ and $(c,d)$ we define $(a,b)-(c,d) = (a,b)+(-c,-d)$.  


<div class="academic-env env-example">
<span class="env-label">Example 1.7</span>

Let $v = (1,2)$ and $w=(3,4)$.  Then, $v-w = (1,2)-(3,4) = (-2,-2)$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.4</span>

Let $v=(5,3)$ and $w=(2,7)$.  Then find $v-w$.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 1.3 (Euclidean Distance)</span>

The Euclidean distance is a function $d:\mathbb{R}^2 \times \mathbb{R}^2 \to \mathbb{R}$ defined as $d((x_1,x_2),(y_1,y_2)) = \sqrt{(x_1-y_1)^2 + (x_2-y_2)^2}$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 1.8</span>

Let $v = (1,2)$ and $w=(3,4)$.  Then $d(v,w) = d((1,2),(3,4)) = \sqrt{(1-3)^2 + (2-4)^2} = \sqrt{8} = 2\sqrt{2}$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.4</span>

Given any two points $A = (a_1,a_2)$ and $B = (b_1,b_2)$, the points $O = (0,0)$, $A = (a_1,a_2)$, $B = (b_1,b_2)$, and $C = (a_1+b_1,a_2+b_2)$ form vertices of a parallelogram.  This allows us to geometrically understand addition on $\mathbb{R}^2$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We would use the following lemma to complete our proof

<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.1</span>

Given any quadrilateral, if its opposite sides are equal, then it is a paralellogram.

</div>

\begin{proof}


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_82b9d81e9d6c7cf4bfa5574a4b7c730d.png" alt="Figure" class="max-w-full h-auto" /></div>


Let $ABCD$ be an arbitrary quadrilateral such that $|AB| = |CD|$ and $|AD| = |BC|$.  Then, $\triangle ABC \cong \triangle CDA$ by $SSS$ criterion.  Therefore $\angle ACD = \angle CAB$ and $\angle CAD = \angle ACB$.  Hence, by the converse of the alternate angle theorem, we get that $DC$ is parallel to $AB$ and $AD$ is parallel to $BC$.  Hence, the quadrilateral $ABCD$ is a parallelogram.

</details>
</div>


We will use the above Lemma to show that $OACB$ is a paralellogram.  Note that 
$$|OA| = d(O,A) = \sqrt{a_1^2 + a_2^2} = \sqrt{((a_1 + b_1)-b_1)^2 - ((a_2 + b_2) - b_2)^2} = d(C,B) = |BC|.$$
Similarly,
$$|OB| = d(O, B) = \sqrt{b_1^2 + b_2^2} = \sqrt{((a_1 + b_1) - a_1)^2 - ((a_2+b_2) - a_2)^2} = d(C,A) = |AC|.$$
\end{proof}

### Scalar Multiplication Given a real number $\alpha$ and an element $(a,b)$ in $\mathbb{R}^2$, the point $(\alpha a, \alpha b)$ lies on the line joining $(0,0)$ and $(a,b)$.  Thus, we view this ``multiplication" as scaling.  This defines a function $\cdot : \mathbb{R} \times \mathbb{R}^2 \to \mathbb{R}^2$.


<div class="academic-env env-example">
<span class="env-label">Example 1.9</span>

Let $k = 3$ and $v=(1,2)$.  Then $kv = 3(1,2) = (3,6)$.

</div>


\begin{mdframed}[backgroundcolor=green!5, frametitle={GeoGebra Exercise}]
I have created a \href{https://www.geogebra.org/m/ngtzm3aa}{GeoGebra file} where I use the function Sequence(Expression, Variable, Start Value, End Value, Increment) to plot $a(1,2)$ as $a$ varies from $-5$ to $5$ with an increment of $\frac{1}{N}$.  The value of $N$ is determined by a slider.  


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.5</span>

In this exercise, you will play with the shared GeoGebra code to build intuition about scalar multiplication and learn GeoGebra.  

- Modify the GeoGebra code to plot all scalar multiples of three other vectors of your choice.  What do you observe?   
- Use the Sequence command to plot the graph of $y=x^2$.


</div>

\end{mdframed}


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.6</span>

Show that 

- $\forall (a,b)\in \mathbb{R}^2$ $1\cdot (a,b) = (a,b)$
- $\forall (a,b)\in \mathbb{R}^2$ $(a,b) + (-1)\cdot (a,b) = (0,0)$
- $\forall$ $x,y\in \mathbb{R}$ and $(a,b)\in \mathbb{R}^2$, $(xy)\cdot (a,b) = x\cdot (y\cdot (a,b))$
- $\forall x\in \mathbb{R}$ and $(a,b), (c,d)\in \mathbb{R}^2$, $x\cdot[(a,b)+(c,d)] = x\cdot(a,b)+x\cdot(c,d)$
- $\forall$ $x,y\in \mathbb{R}$ and $(a,b)\in \mathbb{R}^2$, $(x+y)\cdot (a,b) = x\cdot(a,b) + y\cdot(a,b)$


</div>

### Inner Product You may have studied this as the dot product.  This is a function $\langle \ , \ \rangle:\mathbb{R}^2 \times \mathbb{R}^2 \to \mathbb{R}$ defined as $\langle (a,b),(c,d) \rangle = ac+bd$.  


<div class="academic-env env-example">
<span class="env-label">Example 1.10</span>

Let $v = (1,2)$ and $w=(3,4)$.  Then $\langle v,w \rangle = \langle (1,2),(3,4) \rangle = 1.3 + 2.4 = 3+8 = 11$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.7</span>

Show that

- $\forall (a,b),(c,d)\in \mathbb{R}^2$, $\langle (a,b),(c,d) \rangle = \langle (c,d),(a,b) \rangle$
- $\forall (a,b),(c_1,d_1),(c_2,d_2)\in \mathbb{R}^2$, $\langle (a,b),(c_1,d_1)+(c_2,d_2) \rangle = \langle (a,b),(c_1,d_1) \rangle + \langle (a,b),(c_2,d_2) \rangle$
- $\forall x\in \mathbb{R}$ and $\forall (a,b),(c,d)\in \mathbb{R}^2$, $\langle x(a,b),(c,d) \rangle = x\langle (a,b),(c,d) \rangle = \langle (a,b),x(c,d) \rangle$
- $\forall (a,b)\in \mathbb{R}^2$, $\langle (a,b),(a,b) \rangle \geq 0$ and the equality holds **if and only if (iff)** $(a,b) = (0,0)$


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.8</span>

Find the following inner products:
\begin{multicols}{2}

- $\langle (1,2), (3,4) \rangle$
- $\langle (4,8), (-5,3) \rangle$
- $\langle (1,0), (0,1) \rangle$
- $\langle (1,0), (1,0) \rangle$
- $\langle (1,1), (1,-1)\rangle$
- $\langle (\sqrt{2}, \pi), (\frac{1}{2}, 0) \rangle$

\end{multicols}

</div>


### Norm is a function $\Vert \ \Vert:\mathbb{R}^2 \to \mathbb{R}$ defined as $\Vert (a,b) \Vert = \langle (a,b),(a,b) \rangle^{\frac{1}{2}} = \sqrt{a^2 + b^2}$.


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.9</span>

Find the norm of $(2,3)$.  Give an example of another element of $\mathbb{R}^2$ with the same norm.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.10</span>

Show that $\Vert x(a,b) \Vert = |x|\Vert (a,b)\Vert$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.5</span>

For all pairs of points $(a,b)$ and $(c,d)$ in $\mathbb{R}^2$
$$d((a,b),(c,d)) = \sqrt{(a-c)^2 + (b-d)^2} = \Vert (a-c,b-d)\Vert =  \Vert (a,b) - (c,d) \Vert.$$

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.11</span>

Find the norm of the following vectors
\begin{multicols}{2}

- $(1,0)$
- $(0,1)$
- $(1,1)$
- $(\sqrt{2},\sqrt{3})$
- $(\pi,0)$
- $(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}})$

\end{multicols}

</div>


### Polar coordinates
Given any point $(x,y)\in \mathbb{R}^2$, note that $\frac{x}{\sqrt{x^2 + y^2}}$ and $\frac{y}{\sqrt{x^2 + y^2}}$ are two numbers such that 
\begin{multicols}{2}

- $\left\vert \frac{x}{\sqrt{x^2 + y^2}} \right\vert \leq 1 \geq \left\vert \frac{y}{\sqrt{x^2 + y^2}} \right\vert $
- $\left(\frac{x}{\sqrt{x^2 + y^2}}\right)^2 + \left(\frac{y}{\sqrt{x^2 + y^2}}\right)^2 = 1$

\end{multicols}
Thus, you can find a $\theta$ such that $\cos(\theta) = \frac{x}{\sqrt{x^2 + y^2}}$ and $\sin(\theta) = \frac{y}{\sqrt{x^2 + y^2}}$.  Moreover, it is easy to see that $\theta$ is the angle the line joining origin and $(x,y)$ makes with the $x$-axis.   So, if $r = \sqrt{x^2 + y^2}$, then $(x,y) = r(\cos(\theta),\sin(\theta))$.  This representation is called the polar representation.  



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">1.3 Linear combinations, span, and solutions to system of linear equations</summary>


We already had a through discussion on the solutions of a system of linear equations.  In this section, we would take a different perspective which would often come handy.  Notice that $(x,y)\in \mathbb{R}^2$ satisfy the system 
$$
\begin{align*}
    ax + by &= e \\
    cx + dy &= f 
\end{align*}
$$
iff 
$$
\begin{align*}
    x(a,c) + y(b,d) = (e,f).
\end{align*}
$$


<div class="academic-env env-definition">
<span class="env-label">Definition 1.4</span>

Given two elements $(v_1,v_2)$ and $(w_1,w_2)$, in $\mathbb{R}^2$, an expression of the form $\alpha (v_1,v_2) + \beta (w_1,w_2)$ is called a linear combination of the $(v_1,v_2)$ and $(w_1,w_2)$.  The collection of all such linear combinations is called the span of $(v_1,v_2)$ and $(w_1,w_2)$.
$$
\begin{align*}
        \text{Span}((v_1,v_2),(w_1,w_2)) = \{\alpha (v_1,v_2) + \beta (w_1,w_2) \ | \alpha,\beta \in \mathbb{R}\}.
    \end{align*}
$$

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.6</span>

The system **1.1** has a solution iff $(e,f)\in \text{Span}((a,c),(b,d))$.

</div>


We saw in the previous section that if $ad-bc \neq 0$, then $\forall (e,f)\in \mathbb{R}^2$, the system $\ref{sysLE}$ has a solution.  In other words, 


<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.7</span>

Let $(a,c),(b,d)\in \mathbb{R}^2$.  If $ad-bc \neq 0$, then $\text{Span}((a,c),(b,d)) = \mathbb{R}^2$. 


</div>


\begin{mdframed}[backgroundcolor=green!5, frametitle={GeoGebra Exercise}]
I have created a \href{https://www.geogebra.org/m/j6dwvvdf}{GeoGebra file}  that plots $aA + bB$.  The possible values of $a$ and $b$ are determined by the two sliders $c$ and $N$.  Play with it and build an intuition on the span of the two vectors.  


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.12</span>


In this exercise, you will play with the shared GeoGebra code to build intuition about scalar multiplication and learn GeoGebra.  

- For a fixed value of $c$ and $N$, what values can $a$ take?  Describe it in terms of $c$ and $N$.  Let $c=2$ and $N = 1$, what are all the values that $(a,b)$ can take?
- Modify the GeoGebra code try out the span of other pairs of vectors - try it out for atleast two pairs of linearly dependent vectors and two pairs of linearly independent vectors.   


</div>

\end{mdframed}


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.13</span>

Find the span of the following pairs of vectors:
\begin{multicols}{2}

- $(2,3),(0,0)$
- $(2,3),(4,6)$
- $(1,0),(0,1)$
- $(1,1),(1,-1)$

\end{multicols}

</div>





<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.8</span>

For all $(a,c),(b,d)\in \mathbb{R}^2$, $ad-bc = 0$ iff there exists $(0,0) \neq (\alpha,\beta)\in \mathbb{R}^2$ such that $\alpha (a,c) + \beta (b,d) = (0,0))$.

</div>


\begin{mdframed}[backgroundcolor=blue!10, frametitle={Proof Strategy}]
A statement of the form ``$p$ if and only if (iff) $q$" is a compound statement.  It is a short hand for 

- If $p$, then $q$.
- If $q$, then $p$.

Remember to prove both implications when you encounter an iff.  To prove ``If $p$, then $q$" we assume $p$ and prove $q$.  
\end{mdframed}


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Assume $ad-bc = 0$.  Then, $d(a,c) + (-c)(b,d) = (ad-bc,cd-cd) = (0,0)$.  Thus, there exists $(\alpha,\beta) = (d,-c)$ such that $\alpha (a,c) + \beta (b,d) = 0$.  $(d,-c)\neq (0,0)$ as we have assumed $(c,d)\neq (0,0)$.  

Assume there exists $(0,0) \neq (\alpha,\beta)\in \mathbb{R}^2$ such that $\alpha (a,c) + \beta (b,d) = (0,0)$.  If $\alpha \neq 0$, then $(a,c) = \frac{-\beta}{\alpha} (b,d) = \left(\frac{-\beta}{\alpha}b,\frac{-\beta}{\alpha}d\right)$.  If $(a,c) = \left(\frac{-\beta}{\alpha}b,\frac{-\beta}{\alpha}d\right)$, then $ad-bc = \left(\frac{-\beta}{\alpha}b\right)d - b\left(\frac{-\beta}{\alpha}d\right) = 0$.  On the other hand, if $\beta \neq 0$, then $(b,d) = \frac{-\alpha}{\beta} (a,c) = \left(\frac{-\alpha}{\beta}a,\frac{-\alpha}{\beta}c\right)$.  If $(a,c) = \left(\frac{-\beta}{\alpha}b,\frac{-\beta}{\alpha}d\right)$, then $ad-bc = \left(\frac{-\beta}{\alpha}b\right)d-b\left(\frac{-\beta}{\alpha}d\right) = 0$.  If $(b,d) = \left(\frac{-\alpha}{\beta}a,\frac{-\alpha}{\beta}c\right)$, then $ad-bc = a\left(\frac{-\alpha}{\beta}c\right) - \left(\frac{-\alpha}{\beta}a\right)c = 0$.

</details>
</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 1.5</span>

We say $v,w\in \mathbb{R}^2$ are linearly dependent if $\exists (\alpha,\beta) \in \mathbb{R}^2$ such that $(\alpha,\beta)\neq (0,0)$ and $\alpha v + \beta w = 0$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.9</span>

Two vectors $(a,c)$ and $(b,d)$ are linearly dependent if and only if (iff) $ad-bc = 0$

</div>


We say two vectors $v,w$ are linearly independent if they are not linearly dependent.  More precisely, 


<div class="academic-env env-definition">
<span class="env-label">Definition 1.6</span>

We say $v,w \in \mathbb{R}^2$ are linearly independent if $\forall (\alpha,\beta) \in \mathbb{R}^2$, $\alpha v + \beta w \neq 0$ or $(\alpha,\beta) = (0,0)$.  Equivalently, we say two vectors $v$ and $w$ are linearly independent if $\forall (\alpha,\beta) \in \mathbb{R}^2$, $\alpha v + \beta w = 0 \implies (\alpha,\beta) = (0,0)$.

</div>


\begin{mdframed}[backgroundcolor=blue!10, frametitle={Logic refresher}]
The equivalence of the two different definitions given above is due to the logical equivalence of $p \implies q$ (which, by the way, is another way of saying ``if $p$ then $q$") and $(\neg p) \lor q$.  The equivalence can be checked with the help of a truth table.  

<div class="text-center my-6">
\begin{tabular}{ |c|c|c|c|c| } 
\hline
$p$ & $q$ & $\neg p$ & $p\implies q$ & $(\neg p) \lor q$ \\ 
\hline
T & T & F & T & T\\ 
T &  F & F & F & F\\ 
F &  T & T & T & T\\ 
F &  F & T & T & T\\ 
\hline
\end{tabular}
</div>

\end{mdframed}


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.14</span>

Check if the following pairs of vectors are linearly independent or linearly dependent.  Give rigorous arguments to justify your claims.  
\begin{multicols}{2}

- $(2,3),(0,0)$
- $(2,3),(4,6)$
- $(1,0),(0,1)$
- $(1,1),(1,-1)$

\end{multicols}

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.10</span>

Two vectors $(a,c)$ and $(b,d)$ are linearly independent if and only if (iff) $ad-bc \neq 0$.

</div>


Thus, we may rewrite Theorem **1.7** as 


<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.11</span>

For all $v,w\in \mathbb{R}^2$, if $v,w$ are linearly independent then $\text{Span}(v,w)= \mathbb{R}^2$.

</div>


It is now natural to ask, what happens when $v,w$ are linearly dependent.  We will answer the question after giving a geometric characterisation of dependence.  


<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.12</span>

There exists $(\alpha,\beta)\in \mathbb{R}^2$ such that $(\alpha,\beta)\neq (0,0)$ and $\alpha v + \beta w = (0,0)$<span class="footnote-trigger" title="We will often write $(0,0)$ as $0$.  This makes sense as $(0,0)$ is the additive identity"><sup>[*]</sup></span> iff ($\exists$ (there exists) $\gamma\in \mathbb{R}$ such that $v = \gamma w$ or $\exists \gamma \in \mathbb{R}$ such that $w = \gamma v$).

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Assume, there exists $(\alpha,\beta)\neq (0,0)$ such that $\alpha v + \beta w = (0,0)$. If $\alpha \neq 0$, then $v = \frac{\beta}{\alpha}w$.  On the other hand, if $\beta \neq 0$, $w = \frac{\alpha}{\beta}v$.  Thus, either $v = -\frac{\beta}{\alpha}w$ or $w = -\frac{\alpha}{\beta}v$.

\begin{mdframed}[backgroundcolor=blue!10, frametitle={Proof Strategy}]
The backward implication is a statement of the form $ (p \lor q) \implies r$.  We often prove statements of this form by using an equivalent form $(p \implies r) \land (q\implies r)$.  Their equivalence can be seen through the following truth table.  


<div class="text-center my-6">
\begin{tabular}{ |c|c|c|c|c| } 
\hline
$p$ & $q$ & $r$ & $p\lor q$ & $(p\lor q) \implies r$ \\ 
\hline
T & T & T & T & T\\
T & T & F & T & F\\
T & F & T & T & T\\
T & F & F & T & F\\
F & T & T & T & T\\
F & T & F & T & F\\
F & F & T & F & T\\
F & F & F & F & T\\
\hline
\end{tabular}
</div>



<div class="text-center my-6">
\begin{tabular}{ |c|c|c|c|c|c| } 
\hline
$p$ & $q$ & $r$ & $p\implies r$ & $q\implies r$ &  $(p \implies r) \land (q\implies r)$\\ 
\hline
T & T & T & T & T & T\\
T & T & F & F & F & F\\
T & F & T & T & T & T\\
T & F & F & F & T & F\\
F & T & T & T & T & T\\
F & T & F & T & F & F\\
F & F & T & T & T & T\\
F & F & F & T & T & T\\
\hline
\end{tabular}
</div>


Similarly, we can prove that $(p\land q) \implies r$ is logically equivalent to $(p \implies r) \lor (q\implies r)$. 


<div class="text-center my-6">
\begin{tabular}{ |c|c|c|c|c| } 
\hline
$p$ & $q$ & $r$ & $p\land q$ & $(p\land q) \implies r$ \\ 
\hline
T & T & T & T & T\\
T & T & F & T & F\\
T & F & T & F & T\\
T & F & F & F & T\\
F & T & T & F & T\\
F & T & F & F & T\\
F & F & T & F & T\\
F & F & F & F & T\\
\hline
\end{tabular}
</div>



<div class="text-center my-6">
\begin{tabular}{ |c|c|c|c|c|c| } 
\hline
$p$ & $q$ & $r$ & $p\implies r$ & $q\implies r$ &  $(p \implies r) \lor (q\implies r)$\\ 
\hline
T & T & T & T & T & T\\
T & T & F & F & F & F\\
T & F & T & T & T & T\\
T & F & F & F & T & T\\
F & T & T & T & T & T\\
F & T & F & T & F & T\\
F & F & T & T & T & T\\
F & F & F & T & T & T\\
\hline
\end{tabular}
</div>


\end{mdframed}

Now, assume $\exists$ (there exists) $\gamma\in \mathbb{R}$ such that $v = \gamma w$ or $\exists \gamma \in \mathbb{R}$ such that $w = \gamma v$.  If $\exists$ (there exists) $\gamma\in \mathbb{R}$ such that $v = \gamma w$, then it we may write $v + (-\gamma)w = 0$.  Thus, there exists $(\alpha,\beta)$ (namely $(\alpha, \beta) = (1, -\gamma)$) such that $(\alpha,\beta) \neq (0,0)$ and $\alpha v + \beta w = 0$.   Similarly, if $\exists \gamma \in \mathbb{R}$ such that $w = \gamma v$, then we have $(\alpha, \beta) = (\gamma,-1)$.

</details>
</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.13</span>

For all $v,w\in \mathbb{R}^2$, if $\exists$ (there exists) $\gamma\in \mathbb{R}$ such that $v = \gamma w$, then $\text{Span}(v,w)\neq \mathbb{R}^2$.

</div>


\begin{mdframed}[backgroundcolor=red!15, frametitle={Russel's generalised conditional}]
The above statement has the form: $\forall v,w\in \mathbb{R}^2$, if $p(v,w)$ then $q(v,w)$.  In the context of mathematics conditional sentences (a sentence like ``if $p(v,w)$ then $q(v,w)$") are implicitly assumed to be ``universally quantified".  Thus, it is common practice in mathematical writings to drop the ``for all" at the beginning of the statement of the theorem.   
\end{mdframed}


<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

$$
\begin{align*}
        \text{Span}(v,w) &= \{\alpha v + \beta w| \alpha, \beta \in \mathbb{R}\}& \framebox(150,10){}\\
        &= \{\alpha \gamma w + \beta w | \alpha, \beta \in \mathbb{R}\}& \framebox(150,10){}\\
        &= \{(\alpha\gamma + \beta)w | \alpha,\beta \in \mathbb{R}\}& \framebox(150,10){}\\
        &= \{k w | k\in \mathbb{R}\}
    \end{align*}
$$
The last equality is a bit trickier than the rest, so I would elaborate the argument involved.  We need to show that $\{(\alpha\gamma + \beta)w | \alpha,\beta \in \mathbb{R}\} = \{k w | k\in \mathbb{R}\}$

\begin{mdframed}[backgroundcolor=blue!10, frametitle={Proof Strategy}]
Given two sets $A$ and $B$, we show $A=B$ by showing $A\subseteq B$ and $B\subseteq A$.  We show $A\subseteq B$ by showing an arbitrary element of $A$ belongs to $B$.  
\end{mdframed}

Take an arbitrary element in $\{(\alpha\gamma + \beta)w | \alpha,\beta \in \mathbb{R}\}$, say $(\alpha\gamma + \beta)w$.  As $\alpha, \beta, \gamma\in \mathbb{R}$, $\alpha\gamma + \beta$ is also a real number, say $k$.  Thus, $(\alpha\gamma + \beta)w = kw \in \{k w | k\in \mathbb{R}\}$.  Thus, $\{(\alpha\gamma + \beta)w | \alpha,\beta \in \mathbb{R}\} \subseteq \{k w | k\in \mathbb{R}\}$.  Take an arbitrary element in $\{kw | k\in \mathbb{R}\}$ - say $kw$.  Then, $kw = (0\gamma + k)w \in \{(\alpha\gamma + \beta)w | \alpha,\beta \in \mathbb{R}\}$ as $0,k\in \mathbb{R}$. Thus, $\{k w | k\in \mathbb{R}\} \subseteq \{(\alpha\gamma + \beta)w | \alpha,\beta \in \mathbb{R}\}$. Hence,  
$$\text{Span}(v,w) = \{(\alpha\gamma + \beta)w | \alpha,\beta \in \mathbb{R}\} = \{k w | k\in \mathbb{R}\}.$$

Let $w = (w_1,w_2)$.  If $(w_1,w_2 + 1)\in \{k w | k\in \mathbb{R}\}$, then $(w_1,w_2 + 1) = k(w_1,w_2)$.  That is, $w_1 = k w_1$ and $w_2 = kw_2 - 1$.  If $w_1 = kw_1$, then $w_1 = 0$ or $k=1$.  Note that $k=1 \implies w_2 = w_2 - 1 \implies 1=0$.  Thus, $k \neq 1$.  Thus, $w_1 = 0$, that is $\{k w | k\in \mathbb{R}\} \subseteq \{(0,y) | y\in \mathbb{R}\}$.  Therefore $\{k w | k\in \mathbb{R}\}$ is a strict subset of $\mathbb{R}^2$.  If $(w_1,w_2 + 1)\not\in \{k w | k\in \mathbb{R}\}$, then again $\{k w | k\in \mathbb{R}\}$ is a strict subset of $\mathbb{R}^2$.

</details>
</div>


Similarly, we can prove


<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.14</span>

If $\exists \gamma \in \mathbb{R}$ such that $w = \gamma v$, then $\text{Span}(v,w)\neq \mathbb{R}^2$.

</div>


Thus, we can concisely express our findings as follows:


<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.15</span>

For all $v,w\in \mathbb{R}^2$, $\text{Span}(v,w) = \mathbb{R}^2$ iff $v,w$ are linearly independent. 


</div>


We have proved that $(a,c),(b,d)$ are linearly independent iff $\text{Span}((a,c),(b,d)) = \mathbb{R}^2$ iff $\forall (e,f)$ the system **1.1** has a solution.  However, the independence of $(a,c),(b,d)$ (and thus the fact $\text{Span}((a,c),(b,d)) = \mathbb{R}^2$) not just assure the existence of a solution, it assures us that the solution is unique.  


<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.16</span>

For all $(a,c),(b,d)\in \mathbb{R}^2$ if $(a,c),(b,d)$ are linearly independent then the solution to system **1.1** is unique.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Fix arbitrary elements $(a,c)$ and $(b,d)$.  We need to prove ``if $(a,c),(b,d)$ are linearly independent then the solution to system **1.1** is unique".  Let $(x_1,y_1)$ and $(x_2,y_2)$ be two solutions to system **1.1**.  We will prove uniqueness by showing $(x_1,y_1) =(x_2,y_2)$ (any two arbitrary solutions are forced to be equal).  As $(x_1,y_1)$ is a solution, we have $x_1(a,c) + y_1(b,d) = (e,f)$.  As $(x_2,y_2)$ is a solution, we have $x_2(a,c) + y_2(b,d) = (e,f)$. By the following computation (justify every step)\\
\framebox(\textwidth,100){}


we get,
$$
\begin{align*}
        (x_1-x_2)(a,c) + (y_1-y_2)(b,d) = (0,0) 
    \end{align*}
$$
As $(a,c)$ and $(b,d)$ are linearly independent, this would mean that $x_1-x_2=0$ and $y_1-y_2 = 0$.  That is, $x_1 = x_2$ and $y_1 = y_2$ or $(x_1,y_1)= (x_2,y_2)$.

</details>
</div>


Recall from the first section that if $ad-bc = 0$, then **1.1** has a solution iff $\{(x,y) \ | \ ax + by = e\} = \{(x,y) \ | \ cx + dy = f\}$.  Moreover, the set of solutions $\{(x,y) \ | ax+by = e \text{ and } cx+dy = f\} = \{(x,y) \ | \ ax + by = e\}$ or $\{(x,y) \ | ax+by = e \text{ and } cx+dy = f\} = \emptyset$.  Let us revisit this idea using what we studied in this section.

Given a system **1.1**, we can consider the related system 
$$
\begin{align}   
    \label{sysLEhomo}
    ax + by = 0\\
    cx + dy = 0 \nonumber
\end{align}
$$
A system of linear equations where all the constant terms are zero is called a homogeneous system of linear equations.  Notice that a homogeneous system of linear equations will always have a solution, namely $(0,0)$.  If $(a,c),(b,d)$ are linearly independent, then $(0,0)$ is the unique solution.


<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.17</span>

If $(a,c),(b,d)$ are linearly dependent, then there exists $(u_1,u_2)\in \mathbb{R}^2$ such that the set of solutions of system **1.4** is equal to $\{k(u_1,u_2) \ | \ k\in \mathbb{R}\}$.  


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

If $(a,c),(b,d)$ are linearly dependent, then $\exists \alpha\in \mathbb{R}$ such that $(a,c) = \alpha (b,d)$ or $\exists \alpha \in \mathbb{R}$ such that $(b,d) = \alpha (a,c)$.

\begin{mdframed}[backgroundcolor=blue!10, frametitle={Proof Strategy}]
The proof of the two cases

- $\exists \alpha\in \mathbb{R}$ such that $(a,c) = \alpha (b,d)$
- $\exists \alpha \in \mathbb{R}$ such that $(b,d) = \alpha (a,c)$

would be analogous.  If one understands the proof in one case, one should be able to prove the other case on their own.  In such cases, we may assume that we are in one of the choices - and our choice would not have any impact.  Thus, we would say, that ``we may choose without loss of generality (WLOG)".  
\end{mdframed}

Let us assume without loss of generality that $\exists \alpha\in \mathbb{R}$ such that $(a,c) = \alpha (b,d)$.  That is $a = \alpha b$ and $c = \alpha d$.  Thus, the system **1.4** takes the form 
$$
\begin{align}   
    \alpha b x + by = 0\\
    \alpha d x + dy = 0 \nonumber
\end{align}
$$
Note that, $b=0$ implies $a=0$ - but we assumed $a$ and $b$ are not simultaneously $0$.  Thus,  That is, $y = -\alpha x$.  In other words, the set of solutions of system **1.4** is the set $\{k(1,-\alpha) \ | \ k \in \mathbb{R}\}$.  In other words, $(u_1,u_2) = (1,-\alpha)$.  

\begin{mdframed}[backgroundcolor=black!5, frametitle={Better safe than sorry}]
To convince yourself that the other case is analogous, start with the assumption $\exists \alpha\in \mathbb{R}$ such that $(b,d) = \alpha (a,c)$. Thus, the system **1.4** takes the form\\
\framebox(\textwidth,40){}
In other words, the set of solutions of system **1.4** is the set $\{k(-\alpha,1) \ | \ k \in \mathbb{R}\}$.  That is $(u_1,u_2) = (-\alpha,1)$.
\end{mdframed}

</details>
</div>



Now, let $(e,f)\in \mathbb{R}^2$ be such that system **1.1** has a solution. As a solution for system **1.1** exists, $\exists (v_1,v_2)\in \mathbb{R}^2$ such that $v_1(a,c) + v_2(b,d) = (e,f)$.  Let $(w_1,w_2)$ be an arbitrary solution of system **1.1**.  Then, from the following computation\\
\framebox(\textwidth,100){}

we have $(w_1-v_1,w_2-v_2)$ is a solution of system **1.4**.  Thus, $(w_1-v_1,w_2-v_2)\in \{k(u_1,u_2) \ | \ k \in \mathbb{R}\}$.  That is, $\exists k\in \mathbb{R}$ such that $(w_1,w_2) = (v_1,v_2) + k(u_1,u_2)$.  Therefore, the set of solutions of system **1.1** (in this case) is equal to $\{(v_1,v_2) + k(u_1,u_2)\ | \ k\in \mathbb{R}\}$.  


<div class="academic-env env-remark">
<span class="env-label">Remark 1.2</span>

The two different ways of finding the set of solutions correspond the the two different definitions ($L_{p,q,r}$ and $\Lambda_{a,b,c,d}$) respectively discussed in Appendix **??**.

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">1.4 Functions and solving equations</summary>



Given $a,b,c,d\in \mathbb{R}$, we can define a function $F:\mathbb{R}^2 \to \mathbb{R}^2$ defined as $F((x,y)) = (ax+by,cx+dy)$. Note that the system **1.1** has a solution iff $(e,f)\in \text{Image}(F)$.  Thus, 


<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.18</span>

The function $F:\mathbb{R}^2 \to \mathbb{R}^2$ defined as $F((x,y)) = (ax+by,cx+dy)$ is surjective iff $\forall (e,f)\in \mathbb{R}^2$, the system **1.1** has a solution iff $\text{Span}(v,w) = \mathbb{R}^2$.


</div>


\begin{mdframed}[backgroundcolor=red!15, frametitle={Abuse of notation}]
The input for a function $F:\mathbb{R}^2\to \mathbb{R}^2$ are elements of $\mathbb{R}^2$.  Thus, the correct way to evaluate $F$ at a point $(x,y)$ is to write $F((x,y))$.  However, you might have seen people write $F(x,y)$.  This is convenient and does not usually lead to confusion.  Thus, we will also generally represent $F((x,y))$ as $F(x,y)$.  Such practices are called abuse of notation - when you encounter more examples you will get a better sense of what they are.  
\end{mdframed}


<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.19</span>

The function $F:\mathbb{R}^2 \to \mathbb{R}^2$ defined as $F(x,y) = (ax+by,cx+dy)$ is injective iff $(a,c)$ and $(b,d)$ are linearly independent.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Assume $F$ is injective.  Note that $F(0,0) = (0,0)$.  As $F$ is injective, if $F(x,y) = (0,0) = F(0,0)$, then $(x,y) = (0,0)$.  But, $F(x,y) = (ax+by,cx+dy) = x(a,c) + y(b,d)$.  That is if $x(a,c) + y(b,d) = 0$, then $(x,y) = (0,0)$.  In other words, $(a,c)$ and $(b,d)$ are linearly independent.

Assume $(a,c)$ and $(b,d)$ are linearly independent.  That is if $x(a,c) + y(b,d) = 0$, then $(x,y) = (0,0)$. But, $F(x,y) = (ax+by,cx+dy) = x(a,c) + y(b,d)$.  Thus, if $F(x,y) = (0,0)$ then $(x,y) = (0,0)$.  Now let $v=(v_1,v_2)$ and $w=(w_1,w_2)$ be arbitrary elements such that $F(v_1,v_2) = F(w_1,w_2)$,  Then
$$
\begin{align*}
        0 &= F(v_1,v_2) - F(w_1,w_2)\\
        &= (av_1 + bv_2,cv_1 + dv_2) - (aw_1+bw_2,cw_1+dw_2) & \framebox(150,10){}\\
        &= ((av_1 + bv_2) - (aw_1 + bw_2),(cv_1 + dv_2) - (cw_1 + dw_2)) & \framebox(150,10){}\\
        &= (a(v_1 - w_1) + b(v_2 - w_2),c(v_1 - w_1) + d(v_2 - w_2)) & \framebox(150,10){}\\
        &= F(v_1 - w_1,v_2-w_2) & \framebox(150,10){}
    \end{align*}
$$
Thus, $(v_1-w_1,v_2-w_2) = (0,0)$.  That is, $v_1 = w_1$ and $v_2=w_2$.  Therefore, $(v_1,v_2) = (w_1,w_2)$.  But, as $v$ and $w$ were arbitrary, $F$ is an injection.

</details>
</div>


Theorem **1.18** tells us that $F$ is surjective iff $\text{Span}((a,c),(b,d)) = \mathbb{R}^2$ and Theorem **1.19** tells us that $F$ is injective iff $(a,c)$ and $(b,d)$ are linearly independent.  However, Theorem $\ref{thm:spaniffLI2}$ tells us that $\text{Span}((a,c),(b,d)) = \mathbb{R}^2$ iff $(a,c)$ and $(b,d)$ are linearly independent.  Therefore, we have


<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.20</span>

For all $a,b,c,d\in \mathbb{R}$, the function $F:\mathbb{R}^2 \to \mathbb{R}^2$ defined as $F(x,y) = (ax+by,cx+dy)$ is injective iff it is surjective.  Moreover, $F$ is injective, surjective, and bijective iff $ad-bc\neq 0$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.15</span>

Show that $F$ is injective iff $\{(x,y)\ | F(x,y) = (0,0)\} = \{(0,0)\}$.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 1.7</span>

Given a function $F:\mathbb{R}^2 \to \mathbb{R}^2$ of the form $F(x,y) = (ax+by,cx+dy)$, the set $\{(x,y)\ | F(x,y) = (0,0)\} = \{(0,0)\}$ is called the kernel or null space of $F$.  Note that $(0,0)\in \text{Ker}(F)$ and the function is injective iff $(0,0)= \text{Ker}(F)$

</div>





</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">1.5 Matrices and solving equations</summary>



An array (generally of numbers) arranged into rows and columns is called a matrix.  If the array has $n$ rows and $m$ columns, then we say that the matrix is an $n\times m$ matrix.  For example, $\begin{bmatrix}a & b\\ c & d\end{bmatrix}$ is a $2\times 2$ matrix, $\begin{bmatrix} x\\y\end{bmatrix}$ is a $2\times 1$ matrix, and $\begin{bmatrix}x & y\end{bmatrix}$ is a $1\times 2$ matrix. 


<div class="academic-env env-definition">
<span class="env-label">Definition 1.8</span>

Let
$$
\begin{align*}
        M_2(\mathbb{R}) = \left\{\begin{bmatrix} a & b\\ c & d \end{bmatrix} \ | a,b,c,d\in \mathbb{R}\right\}
    \end{align*}
$$

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 1.9</span>

Let 
$$
\begin{align*}
        M_2^1(\mathbb{R}) = \left\{\begin{bmatrix}x\\y\end{bmatrix} \ | \ x,y \in \mathbb{R}\right\}
    \end{align*}
$$

</div>


The set of solutions **1.1** is the set $\{(x,y)\in \mathbb{R}^2 | ax+by = e \text{ and } cx + dy = f\}$.  There is a natural bijection from $f: \mathbb{R}^2 \to M_2^1(\mathbb{R})$, namely the function $f(x,y) = \begin{bmatrix}x\\y\end{bmatrix}$.


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.16</span>

Show that $f$ is a bijection.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.21</span>

Let $A = \begin{bmatrix}a&b\\c&d\end{bmatrix}$ and $v_0 = \begin{bmatrix}e\\f \end{bmatrix}$.  Further, let
$$
\begin{align*}
        V = \{(x,y)\in \mathbb{R}^2 | ax+by = e \text{ and } cx + dy = f\}
    \end{align*}
$$
and 
$$
\begin{align*}
        W = \{v\in M_2^1(\mathbb{R}) \ | \ Av = v_0\}.  
    \end{align*}
$$
Then, $f(V) = W$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

$$
\begin{align*}
        f(V) &= \{f(v) \ | \ v\in V\} & \framebox(140,10){}\\
        &= \{f(x,y) \ | \ (x,y)\in \mathbb{R}^2 \text{ and } (ax+by = e \text{ and } cx + dy = f)\} & \framebox(140,10){}\\
        &= \left\{\begin{bmatrix}x\\y\end{bmatrix} \ | \ (x,y)\in \mathbb{R}^2 \text{ and } (ax+by = e \text{ and } cx + dy = f) \right\} & \framebox(140,10){} \\
        &= \left\{\begin{bmatrix}x\\y\end{bmatrix} \in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix}a&b\\c&d\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}e\\f \end{bmatrix}  \right\} & \framebox(140,10){}\\
        &= \left\{ v\in M_2^1(\mathbb{R}) \ | \ Av = v_0 \right\} & \framebox(140,10){}\\
        &= W.
    \end{align*}
$$

</details>
</div>


This is the reason why the system **1.1** is often expressed as 
$$
\begin{align}
    \label{eqn:matrixform}
    \begin{bmatrix}a & b\\ c & d\end{bmatrix} \begin{bmatrix} x\\y\end{bmatrix} = \begin{bmatrix} e \\ f\end{bmatrix}
\end{align}
$$
This representation gives a first clue on how to define multiplication of $2$ matrices.  We would want 
$$
\begin{align*}
    \begin{bmatrix}a & b\\ c & d\end{bmatrix} \begin{bmatrix} x\\y\end{bmatrix} = \begin{bmatrix} ax+by \\ cx+dy\end{bmatrix}
\end{align*}
$$
Thus, you can think of the multiplication $\begin{bmatrix}a & b\\ c & d\end{bmatrix} \begin{bmatrix} x\\y\end{bmatrix}$ as the action of the function $F$ on $(x,y)$.  If there is yet another matrix $\begin{bmatrix}a' & b'\\ c' & d'\end{bmatrix}$, then it corresponds to the function $F':\mathbb{R}^2 \to \mathbb{R}^2$ defined as $F'(x,y) = (a'x+b'y,c'x+d'y)$.   The action of $F'$ on $F(x,y)$ should thus correspond to $\begin{bmatrix}a' & b'\\ c' & d'\end{bmatrix} \left(\begin{bmatrix}a & b\\ c & d\end{bmatrix}\begin{bmatrix} x\\y\end{bmatrix}\right)$.  But, if have a ``sensible definition of multiplication, we should have
$$
\begin{align*}
    \left(\begin{bmatrix}a' & b'\\ c' & d'\end{bmatrix}\begin{bmatrix}a & b\\ c & d\end{bmatrix} \right) \begin{bmatrix} x\\y \end{bmatrix} &=  \begin{bmatrix}a' & b'\\ c' & d'\end{bmatrix}\left(\begin{bmatrix}a & b\\ c & d\end{bmatrix}\begin{bmatrix} x\\y\end{bmatrix}\right)\\
    &= \begin{bmatrix}a' & b'\\ c' & d'\end{bmatrix} \begin{bmatrix} ax+by\\cx+dy\end{bmatrix}\\
    &= \begin{bmatrix} a'(ax+by) + b'(cx+dy)\\ c'(ax+by) + d'(cx+dy)\end{bmatrix}\\
    &= \begin{bmatrix} x(a'a + b'c) + y(a'b+b'd)\\ x(c'a+d'c) + y(c'b+d'd)\end{bmatrix}\\
    &= \begin{bmatrix} (a'a + b'c) & (a'b+b'd)\\(c'a+d'c) & (c'b+d'd) \end{bmatrix} \begin{bmatrix} x\\y \end{bmatrix}.
\end{align*}
$$

This allows us to arrive at the definition of matrix multiplication you would have encountered in school.   
$$
\begin{align*}
    \begin{bmatrix}a' & b'\\ c' & d'\end{bmatrix}\begin{bmatrix}a & b\\ c & d\end{bmatrix} = \begin{bmatrix} (a'a + b'c) & (a'b+b'd)\\(c'a+d'c) & (c'b+d'd) \end{bmatrix}
\end{align*}
$$


<div class="academic-env env-definition">
<span class="env-label">Definition 1.10</span>

We can define two operations on this set. Addition $+: M_2(\mathbb{R}) \times M_2(\mathbb{R}) \to M_2(\mathbb{R})$  defined as 
$$
\begin{align*}
        \begin{bmatrix} a & b\\ c & d \end{bmatrix} + \begin{bmatrix} a' & b'\\ c' & d' \end{bmatrix} = \begin{bmatrix} a + a' & b + b'\\ c + c' & d + d' \end{bmatrix}
    \end{align*}
$$
and multiplication $\times:M_2(\mathbb{R}) \to M_2(\mathbb{R})$ defined as 
$$
\begin{align*}
    \begin{bmatrix}a' & b'\\ c' & d'\end{bmatrix}\begin{bmatrix}a & b\\ c & d\end{bmatrix} = \begin{bmatrix} (a'a + b'c) & (a'b+b'd)\\(c'a+d'c) & (c'b+d'd) \end{bmatrix}
\end{align*}
$$

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.17</span>

Show that 

- for all $A,B,C \in M_2(\mathbb{R})$, $A+(B+C) = (A+B) +C$ (Addition is associative)
- for all $A,B \in M_2(\mathbb{R})$, $A+B = B+A$ (Addition is commutative)
- there exists a matrix $X$ $\left(\text{namely } 0 = \begin{bmatrix}0 & 0\\0 & 0\end{bmatrix}\right)$ such that $\forall A\in M_2(\mathbb{R})$, $A + X = A = X+A$ (Existence of additive identity)
- for all $A\in M_2(\mathbb{R})$, there exits a $B\in M_2(\mathbb{R})$ such that $A+B = 0 = B+A$.  (Existence of additive inverse)
- for all $A,B,C \in M_2(\mathbb{R})$, $A(BC) = (AB)C$ (Multiplication is associative)
- there exists a matrix $X$ $\left(\text{namely } I = \begin{bmatrix} 1 & 0 \\ 0 & 1\end{bmatrix}\right)$ such that $\forall A\in M_2(\mathbb{R})$, $AI = A = IA$ (Existence of multiplicative identity)  
- for all $A,B \in M_2(\mathbb{R})$, $A(B+C) = AB + AC$.  Similarly, for all $A,B \in M_2(\mathbb{R})$, $(A+B)C = AC + BC$ (Multiplication distributes over addition)


</div>



<div class="academic-env env-example">
<span class="env-label">Example 1.11 (Matrix multiplication is not commutative)</span>

Let $A = \begin{bmatrix} 1& 2\\ 3& 4\end{bmatrix}$ and $B = \begin{bmatrix} -1& 0\\ 0& 1\end{bmatrix}$.  Then, 
$$
\begin{align*}
        \begin{bmatrix} 1& 2\\ 3& 4\end{bmatrix}\begin{bmatrix} -1& 0\\ 0& 1\end{bmatrix} = \begin{bmatrix} 1.(-1) + 2.0 & 1.0 + 2.1\\ 3.(-1) + 4.0 & 3.0 + 4.1\end{bmatrix} = \begin{bmatrix} -1& 2\\ -3& 4\end{bmatrix}
    \end{align*}
$$
but,
$$
\begin{align*}
        \begin{bmatrix} -1& 0\\ 0& 1\end{bmatrix}\begin{bmatrix} 1& 2\\ 3& 4\end{bmatrix} = \begin{bmatrix} (-1).1 + 0.3 & (-1).2 + 0.4\\ 0.1 + 1.3 & 0.2 + 1.4\end{bmatrix} = \begin{bmatrix} -1& -2\\ 3& 4\end{bmatrix}
    \end{align*}
$$
Therefore, 
$$
\begin{align*}
        \begin{bmatrix} 1& 2\\ 3& 4\end{bmatrix}\begin{bmatrix} -1& 0\\ 0& 1\end{bmatrix} \neq \begin{bmatrix} -1& 0\\ 0& 1\end{bmatrix}\begin{bmatrix} 1& 2\\ 3& 4\end{bmatrix} 
    \end{align*}
$$

</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.2</span>

Let $A = \begin{bmatrix} a & b\\c & d\end{bmatrix}$.  If $\exists B \in M_2(\mathbb{R})$ such that $AB=I=BA$, then $\forall \begin{bmatrix}x \\y \end{bmatrix} \neq \begin{bmatrix}0 \\0 \end{bmatrix}$, $\begin{bmatrix} a & b\\c & d\end{bmatrix}\begin{bmatrix}x \\y \end{bmatrix} \neq 0$.

</div>


\begin{mdframed}[backgroundcolor=blue!10, frametitle={Proof Strategy}]
A statement ``$p$" is logically equivalent to the statement ``$\neg p \implies F$.  Intuitively, if the assumption that the statement is false leads to something absurd, then the statement has to be true.  This principle is called **reductio ad absurdum** (reduction to absurdity) in Latin and **proof by contradiction** more commonly.  Once again, the easiest way to prove the equivalence is using a truth table.

<div class="text-center my-6">
\begin{tabular}{ |c|c|c| } 
\hline
$p$ & $\neg p$ & $\neg p \implies F$ \\ 
\hline
T & F & T\\ 
T & F & T\\ 
F & T & T\\ 
F & T & T\\ 
\hline
\end{tabular}
</div>

\end{mdframed}



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Assume $\exists B \in M_2(\mathbb{R})$ such that $AB=I=BA$.  We need to show that $\forall \begin{bmatrix}x \\y \end{bmatrix} \neq \begin{bmatrix}0 \\0 \end{bmatrix}$, $\begin{bmatrix} a & b\\c & d\end{bmatrix}\begin{bmatrix}x \\y \end{bmatrix} \neq 0$.  We would intead assume it is false.  That is, $\exists \begin{bmatrix}x \\y \end{bmatrix}\neq \begin{bmatrix}0 \\0 \end{bmatrix}$ such that $\begin{bmatrix} a & b\\c & d\end{bmatrix}\begin{bmatrix}x \\y \end{bmatrix} = \begin{bmatrix} 0\\ 0\end{bmatrix}$   .  Then,
$$
\begin{align*}
        \begin{bmatrix}x \\y \end{bmatrix} &= (BA)\begin{bmatrix}x \\y \end{bmatrix} =
         B\left(A\begin{bmatrix}x \\y \end{bmatrix}\right)= B\begin{bmatrix}0 \\0 \end{bmatrix} =\begin{bmatrix}0 \\0 \end{bmatrix}
    \end{align*}
$$

</details>
</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.18</span>

Justify each equality in the last line of the previous lemma.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 1.12 (A matrix need not have a multiplicative inverse)</span>

The matrix $\begin{bmatrix} 1 & 0\\1 & 0\end{bmatrix}$ does not have a multiplicative inverse as $\begin{bmatrix} 1 & 0\\1 & 0\end{bmatrix}\begin{bmatrix} x \\y\end{bmatrix} = \begin{bmatrix} 0 \\0\end{bmatrix}$.

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">1.6 Elementary matrices</summary>


The three $2\times 2$ matrices $\begin{bmatrix}1&1\\0&1\end{bmatrix}, \begin{bmatrix}1&0\\1&1\end{bmatrix}, \begin{bmatrix}0& 1\\1&0\end{bmatrix}$ are called elementary matrices.  They obtain a special status due their role in finding the solution of system **1.1**.  To begin by showing that all these three matrices are invertible.  The following exercise descibe their inverses.  


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.19</span>

Show that 

- $$
\begin{align*}
                \begin{bmatrix}1&1\\0&1\end{bmatrix} \begin{bmatrix}1&-1\\0&1\end{bmatrix} = \begin{bmatrix}1&0\\0&1\end{bmatrix} = \begin{bmatrix}1&-1\\0&1\end{bmatrix} \begin{bmatrix}1&1\\0&1\end{bmatrix}.
            \end{align*}
$$
- $$
\begin{align*}
                \begin{bmatrix}1&0\\1&1\end{bmatrix} \begin{bmatrix}1&0\\-1&1\end{bmatrix} = \begin{bmatrix}1&0\\0&1\end{bmatrix} = \begin{bmatrix}1&0\\-1&1\end{bmatrix} \begin{bmatrix}1&0\\1&1\end{bmatrix}.
            \end{align*}
$$
- $$
\begin{align*}
                \begin{bmatrix}0&1\\1&0\end{bmatrix} \begin{bmatrix}0&1\\1&0\end{bmatrix} = \begin{bmatrix}1&0\\0&1\end{bmatrix}
            \end{align*}
$$


</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 1.11</span>

The set of all invertible $2\times 2$ matrices is denoted as $GL_2(\mathbb{R})$
$$
\begin{align*}
        GL_2(R) = \left\{A\in M_2(\mathbb{R}) \ | \ \exists B\in M_2(\mathbb{R}) \text{ such that } AB = I = BA\right\}.
    \end{align*}
$$

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.22</span>

For all $A\in M_2(\mathbb{R})$, $\forall B\in GL_2(\mathbb{R})$, and $\forall v_0\in M_2^1(\mathbb{R})$, 
$$\left\{v\in M_2^1(\mathbb{R}) \ | \ Av = v_0\right\} = \left\{v\in M_2^1(\mathbb{R}) \ | \ (BA)v = Bv_0\right\}.$$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Fix an arbitrary $A\in M_2(\mathbb{R})$, $B\in GL_2(\mathbb{R})$, and $v_0\in M_2^1(\mathbb{R})$.  We will show that for this choice, $\left\{v\in M_2^1(\mathbb{R}) \ | \ Av = v_0\right\} = \left\{v\in M_2^1(\mathbb{R}) \ | \ (BA)v = Bv_0\right\}$.  As the choice was arbitrary, the more general result is proved.  Further, we will prove $\left\{v\in M_2^1(\mathbb{R}) \ | \ Av = v_0\right\} = \left\{v\in M_2^1(\mathbb{R}) \ | \ (BA)v = Bv_0\right\}$ by showing $\left\{v\in M_2^1(\mathbb{R}) \ | \ Av = v_0\right\} \subseteq \left\{v\in M_2^1(\mathbb{R}) \ | \ (BA)v = Bv_0\right\}$ and $\left\{v\in M_2^1(\mathbb{R}) \ | \ (BA)v = Bv_0\right\} \subseteq \left\{v\in M_2^1(\mathbb{R}) \ | \ Av = v_0\right\} $.

Let $v\in \left\{v\in M_2^1(\mathbb{R}) \ | \ Av = v_0\right\}$ be arbitrary.  Then $Av = v_0$.  Multiplying on the left by $B$ on both sides, we get $B(Av) = Bv_0$.  But, $B(Av) = (BA)v$.  Therefore $v\in \left\{v\in M_2^1(\mathbb{R}) \ | \ (BA)v = Bv_0\right\}$.  As $v\in \left\{v\in M_2^1(\mathbb{R}) \ | \ Av = v_0\right\}$ was arbitrary, we have 
$$\left\{v\in M_2^1(\mathbb{R}) \ | \ Av = v_0\right\} \subseteq \left\{v\in M_2^1(\mathbb{R}) \ | \ (BA)v = Bv_0\right\}.$$

Let $v\in \left\{v\in M_2^1(\mathbb{R}) \ | \ BAv = Bv_0\right\}$ be arbitrary.  Then $(BA)v = Bv_0$.  But, $B$ is invertible.  So, there exists $C\in M_2(\mathbb{R})$ such that $CB = I = C$.  Multiplying both sides of the equation $BAv = Bv_0$ by $C$, we get $C((BA)v) = C(Bv_0)$.  But,
$$
\begin{align*}
        C((BA)v) &= (C(BA))v & \framebox(150,10){}\\
        &= ((CB)A))v & \framebox(150,10){}\\
        &= (IA)v & \framebox(150,10){}\\
        &= Av & \framebox(150,10){}
    \end{align*}
$$
and 
$$
\begin{align*}
        C(Bv_0) &= (CB)v_0 & \framebox(150,10){}\\
        &= Iv_0 & \framebox(150,10){}\\
        &= v_0 & \framebox(150,10){}
    \end{align*}
$$

Thus, $Av= v_0$ or in other words $v\in \left\{v\in M_2^1(\mathbb{R}) \ | \ Av = v_0\right\}$.  As $v\in \left\{v\in M_2^1(\mathbb{R}) \ | \ BAv = Bv_0\right\}$ was arbitrary, we have 
$$\left\{v\in M_2^1(\mathbb{R}) \ | \ (BA)v = Bv_0\right\} \subseteq \left\{v\in M_2^1(\mathbb{R}) \ | \ Av = v_0\right\}.$$

</details>
</div>


Notice that 

$$
\begin{align*}              
    \begin{bmatrix}1&1\\0&1\end{bmatrix} \begin{bmatrix}a&b\\c&d\end{bmatrix} = \begin{bmatrix}a+c&b+d\\c&d\end{bmatrix} 
\end{align*}
$$
and
$$
\begin{align*}
        \begin{bmatrix}1&1\\0&1\end{bmatrix}\begin{bmatrix}e\\f\end{bmatrix} = \begin{bmatrix}e+f\\f\end{bmatrix}
\end{align*}
$$
As $\begin{bmatrix}1&1\\0&1\end{bmatrix}$ is invertible, the previous theorem implies that 
$$
\begin{align*}
    \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix}a&b\\c&d\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}e\\f\end{bmatrix}\right\} = \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix}a+c & b+d \\c & d\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}e+f \\f\end{bmatrix}\right\}
\end{align*}
$$
The effect of multiplication by $\begin{bmatrix}1&1\\0&1\end{bmatrix}$ is that of ``row addition".  Multiplication by $\begin{bmatrix}1&0\\1&1\end{bmatrix}$ has a very similar impact.  More precisely, 
$$
\begin{align*}              
    \begin{bmatrix}1&0\\1&1\end{bmatrix} \begin{bmatrix}a&b\\c&d\end{bmatrix} = \begin{bmatrix}a&b\\c+a & b+d\end{bmatrix} 
\end{align*}
$$
and
$$
\begin{align*}
        \begin{bmatrix}1&0\\1&1\end{bmatrix}\begin{bmatrix}e\\f\end{bmatrix} = \begin{bmatrix}e\\f+e\end{bmatrix}
\end{align*}
$$
Once again, as $\begin{bmatrix}1&0\\1&1\end{bmatrix}$ is invertible, we have
$$
\begin{align*}
    \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix}a&b\\c&d\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}e\\f\end{bmatrix}\right\} = \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix}a & b \\c+a & d+b\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}e \\f+e\end{bmatrix}\right\}
\end{align*}
$$

Multiplication by $\begin{bmatrix}0& 1\\1&0\end{bmatrix}$ on the other hand has the effect of swapping the rows.  More precisely,  
$$
\begin{align*}              
    \begin{bmatrix}0&1\\1&0\end{bmatrix} \begin{bmatrix}a&b\\c&d\end{bmatrix} = \begin{bmatrix}c&d\\a & b\end{bmatrix}
\end{align*}
$$
and
$$
\begin{align*}
        \begin{bmatrix}0&1\\1&0\end{bmatrix}\begin{bmatrix}e\\f\end{bmatrix} = \begin{bmatrix}f\\e\end{bmatrix}
\end{align*}
$$
Once again, as $\begin{bmatrix}0&1\\1&0\end{bmatrix}$ is invertible, we have
$$
\begin{align*}
    \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix}a&b\\c&d\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}e\\f\end{bmatrix}\right\} = \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix}c & d \\a & b\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}f \\e\end{bmatrix}\right\}
\end{align*}
$$


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.20</span>

Use the fact that $\begin{bmatrix}1 & -1\\0&1\end{bmatrix}$ is invertible to show that
$$
\begin{align}
        \label{eqn: rowoperation1}
        \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix}a&b\\c&d\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}e\\f\end{bmatrix}\right\} = \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix}a-c & b-d \\c & d\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}e-f \\f\end{bmatrix}\right\}
    \end{align}
$$

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.21</span>

Use the fact that $\begin{bmatrix}1 & 0\\-1 & 1\end{bmatrix}$ is invertible to show that
$$
\begin{align}
        \label{eqn: rowoperation2}
        \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix}a&b\\c&d\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}e\\f\end{bmatrix}\right\} = \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix}a & b \\c - a & d - b\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}e \\f - e\end{bmatrix}\right\}
    \end{align}
$$

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.22</span>

For all $\lambda\in \mathbb{R}$ such that $\lambda\neq 0$, show that $\begin{bmatrix}\lambda & 0\\0 & 1\end{bmatrix}$ and $\begin{bmatrix}1 & 0\\0 & \lambda\end{bmatrix}$ are invertible.  Thus, show that 
$$
\begin{align}
        \label{eqn: scaling matrix1}
        \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix}a&b\\c&d\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}e\\f\end{bmatrix}\right\} = \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix}\lambda a & \lambda b \\c & d\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}\lambda e \\f\end{bmatrix}\right\}
    \end{align}
$$
and
$$
\begin{align}
        \label{eqn: scaling matrix2}
        \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix}a&b\\c&d\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}e\\f\end{bmatrix}\right\} = \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix} a & b \\\lambda c & \lambda d\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}e \\\lambda f\end{bmatrix}\right\}
    \end{align}
$$

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">1.7 Gaussian elimination and Matrix multiplication</summary>



The ideas in the last section is implicitly used in the method taught in school.  Recall that if you are asked to find a solution to 
$$
\begin{align*}
    x + 2y = 0\\
    2x + y = 3
\end{align*}
$$
You use the fact that the set of solutions of this system is same as the set of solutions of the system
$$
\begin{align*}
    x + 2y = 0\\
    x + \frac{1}{2} y = \frac{3}{2}
\end{align*}
$$
In other words, you are saying (using Equation **1.9**)
$$
\begin{align*}
    \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix}1&2\\2&1\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}0\\3\end{bmatrix}\right\} = \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix} 1 & 2 \\1 & \frac{1}{2}\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix} 0 \\ \frac{3}{2}\end{bmatrix}\right\}
\end{align*}
$$
Now we say, that the set of solutions of this new system is same as the set of solutions of (we are subtracting the first equation from the second)
$$
\begin{align*}
    x + 2y = 0\\
    0x + \frac{-3}{2}y = \frac{3}{2}
\end{align*}
$$
In other words, we are using Equation **1.6** to conclude
$$
\begin{align*}
    \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix} 1 & 2 \\1 & \frac{1}{2}\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix} 0 \\ \frac{3}{2}\end{bmatrix}\right\} = \left\{\begin{bmatrix}x\\y\end{bmatrix}\in M_2^1(\mathbb{R}) \ | \ \begin{bmatrix} 1 & 2 \\0 & \frac{-3}{2}\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix} 0 \\ \frac{3}{2}\end{bmatrix}\right\}
\end{align*}
$$
Now, it is easy to find the value of $y$ and that is then used to find the value of $x$ (this process is called back-substitution).  There are two key ideas here

- A matrix whose entries below the diagonal are zero is called an upper triangular matrix.  If a system is described by an upper triangular matrix, then it is easy to solve the system. 
- We could find a matrix $M$, namely $M = \begin{bmatrix} 1 & 0 \\-1 & 1\end{bmatrix}\begin{bmatrix} 1 & 0 \\0 & \frac{1}{2}\end{bmatrix} = \begin{bmatrix} 1 & 0 \\-1 & \frac{1}{2}\end{bmatrix}$ such that $M\begin{bmatrix}1&2\\2&1\end{bmatrix} = \begin{bmatrix} 1 & 2 \\0 & \frac{-3}{2}\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix}$ an upper triangular matrix.  This is a general idea - given any matrix $A$, you can find a matrix $M$ such that $MA$ is upper triangular.  




This example is a special case of a technique called Gaussian elimination.  The basic idea is that if the matrix is upper (or lower) triangular, then it is easy to solve the corresponding system of linear equations.  Thus, it would be great if given any matrix $A$ we can find an **invertible** (invertibility is essential to ensure the set of solutions remain same) matrix $B$ and an upper triangular matrix $U$ such that $BA = U$.  Although that is too much to ask for, we have something close enough.


<div class="academic-env env-definition">
<span class="env-label">Definition 1.12</span>

A matrix $\begin{bmatrix}a&b\\c&d\end{bmatrix}$ is called upper triangular if $c = 0$ and is called lower triangular if $a = 0$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.23</span>

For all $A\in M_2(\mathbb{R})$, there exists **an invertible** matrix $B$ such that $BA$ is upper triangular or there exists **an invertible** matrix $B$ such that $BA$ is lower triangular.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Fix an arbitrary matrix $\begin{bmatrix}a&b\\c&d\end{bmatrix} = A \in M_2(\mathbb{R})$.  If $a = 0$, then $A$ is a lower triangular matrix to begin with.  Thus, we can take $B$ to be the identity matrix.  If $c=0$, then $A$ is an upper triangular matrix to begin with.  Thus, we can take $B$ to be the identity matrix again.  If $a\neq 0 \neq c$, then $\begin{bmatrix}1&0\\ -\frac{c}{a} & 1\end{bmatrix}$ is invertible and $\begin{bmatrix}1&0\\ -\frac{c}{a} & 1\end{bmatrix}\begin{bmatrix}a&b\\c&d\end{bmatrix} = \begin{bmatrix}a&b\\0 & \frac{ad-bc}{a}\end{bmatrix}$.  Thus, we have found a matrix $B = \begin{bmatrix}1&0\\ -\frac{c}{a} & 1\end{bmatrix}$ such that $BA = \begin{bmatrix}a&b\\0 & \frac{ad-bc}{a}\end{bmatrix}$ is upper triangular.

</details>
</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.23</span>

Explain why the above ``proof" is a proof.  **Hint:  Go through the proof strategy in pages 11-12.**

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.24</span>

Prove that if $a\neq 0 \neq c$, then $\begin{bmatrix}1&0\\ -\frac{c}{a} & 1\end{bmatrix}$ is invertible and  $\begin{bmatrix}1&0\\ -\frac{c}{a} & 1\end{bmatrix}\begin{bmatrix}a&b\\c&d\end{bmatrix} = \begin{bmatrix}a&b\\0 & \frac{ad-bc}{a}\end{bmatrix}$

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.25</span>

For the following matrices $A$, find a matrix $B$ such that $BA$ is either upper triangular or lower triangular.
\begin{multicols}{4}

- $\begin{bmatrix}1&2\\3 & 4\end{bmatrix}$
- $\begin{bmatrix}1&0\\3 & 4\end{bmatrix}$
- $\begin{bmatrix}1&2\\3 & 0\end{bmatrix}$
- $\begin{bmatrix}1&2\\2 & 4\end{bmatrix}$

\end{multicols}

</div>


\begin{xcb}{Exercises}

- Find all $(x,y)\in \mathbb{R}^2$ such that 

- - Let $(a,b),(c,d)$ belong to $\mathbb{R}^2$.  If $\langle (a,b), (c,d)\rangle = 0$ and $\Vert (c,d) \Vert = \Vert (a,b) \Vert$, then show that $(c,d) = (-b,a)$.  
- Show that 

- $\begin{bmatrix}a & b \\c & d\end{bmatrix}\begin{bmatrix}1 & 1 \\0 & 1\end{bmatrix} = \begin{bmatrix}a & a+b \\c & c+d\end{bmatrix}$
- $\begin{bmatrix}a & b \\c & d\end{bmatrix}\begin{bmatrix}1 & 0 \\1 & 1\end{bmatrix} = \begin{bmatrix}a+b & b \\c+d & d\end{bmatrix}$
- $\begin{bmatrix}a & b \\c & d\end{bmatrix}\begin{bmatrix}0 & 1 \\1 & 0\end{bmatrix} = \begin{bmatrix}b & a \\d & c\end{bmatrix}$

Thus, multiplication on the right by elementary matrices correspond to column operations.  


\end{xcb}








</details>