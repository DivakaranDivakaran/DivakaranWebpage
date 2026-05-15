# Complex plane



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">1.1 Introduction</summary>




Most of you are already familiar with complex numbers defined as numbers of the form $a + ib$, where $a$ and $b$ are real numbers.  Sums like this are called formal sums - we do not know how to add $a$ and $i b$ so we just call the symbol $a + i b$ the sum of these two numbers.  The same idea is used while defining polynomials.  The comparison with polynomials also suggests how we can add or multiply two complex numbers. 
$$(a+i b) + (c + i d) = (a+c) + i (b+d)$$
and
$$(a+i b)(c +i d) = ac + i (ad+bc) + i^2 bd = (ac - bd) + i (ad + bc).$$
Addition and multiplication so defined satisfy some nice properties making it a field.


<div class="academic-env env-definition">
<span class="env-label">Definition 1.1 (Field)</span>

A triple $(F,+,.)$ where $+:F\times F\to F$ and $.:F\times F\to F$ is called a field if $+$ and $.$ satisfy the following conditions


- Addition is associative:  for all $f_1,f_2,f_3 \in F$, $f_1 + (f_2 + f_3) = (f_1 + f_2) + f_3$.
- Addition is commutative: for all $f_1,f_2 \in F$,
$f_1 + f_2 = f_2 + f_1$
- Existence of additive identity: there exists an element, denoted by $0$, such that for all $f\in F$, $f+0 = f = 0+f$.
- Existence of additive inverse: for every $f\in F$, there exists an element $-f$ such that $f + (-f) = 0 = (-f) + f$.
- Multiplication is associative: for all $f_1,f_2,f_3 \in F$, $f_1 . (f_2 . f_3) = (f_1 . f_2) . f_3$.
- Multiplication is commutative: for all $f_1,f_2\in F$, $f_1.f_2 = f_2.f_1$.
- Existence of multiplicative identity: there exists an element denoted by $1$ such that for every $f\in F$, $f.1 = f = 1.f$.
- Existence of multiplicative inverse: For every $f\in F$, there exists an element $\frac{1}{f}$ such that $f.\left(\frac{1}{f}\right) = 1 = \left(\frac{1}{f}\right).f$
- Multiplication distributes over addition: for all $f_1,f_2,f_3\in F$, $f_1(f_2 + f_3) = f_1f_2 + f_1f_3$.


</div>


Recall that addition and multiplication of real numbers also satisfied these nice properties.  The same is also true for the set of complex numbers $\mathbb{C} = \{a + i b | a,b\in \mathbb{R}\}$ under the addition and multiplication defined above.  The proof is generally a mixture of the analogous result for real numbers combined with some computation.  In what follows, let $z_k = (a_k + ib_k)$.  Then, (justify each step)


<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.1</span>

Complex addition is associative.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

$$
\begin{align*}
    (a_1+i b_1) + ((a_2 + i b_2)+(a_3+ib_3)) &= (a_1+ib_1) + ((a_2+a_3)+i(b_2 + b_3)) \\
    &= (a_1 + (a_2 + a_3)) + i(b_1 + (b_2 + b_3))\\
    &= ((a_1 + a_2) + a_3) + i((b_1 + b_2) + b_3) \\
    &= ((a_1 + a_2) + i(b_1 + b_2)) + (a_3 + ib_3) \\
    &= ((a_1 + ib_1) + (a_2 + ib_2)) + (a_3 + ib_3) 
\end{align*}
$$

</details>
</div>




<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.2</span>

Complex addition is commutative

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

$$
\begin{align*}
    (a_1+i b_1) + (a_2 + i b_2) &= (a_1+a_2) + i (b_1+b_2) \\
    &= (a_2+a_1) + i(b_2+b_1) \\
    &= (a_2 + i b_2) + (a+i b) 
\end{align*}
$$

</details>
</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.3</span>

The element $0+i0$ is the unique additive identity

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

First of all notice that $(a+ib) + (0+i0) = (a+0) + i(b+0) = a+ib = (0+a) + i(0 + b) = (0+i0) + (a+ib)$.  Thus, $0+i0$ is an additive identity.  Moreover, if $c+id$ is an additive identity, then $(a+ib)+(c+id) = (a+c) + i(b+d) = a+ib$.  Thus, $a+c = a$ and $b+d = b$ which implies that $c=0$ and $d=0$.

</details>
</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.4</span>

Given any element $a+ib$, the element $(-a) + i(-b)$ is its unique additive inverse.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

To begin with note that $(a+ib) + ((-a) + i(-b)) = (a+(-a)) + i(b+(-b)) = 0 + i0$.  Moreover, if $(a+ib) + (c+id) = (a+c) + i(b+d) = 0 + i0$, then $a+c = 0$ and $b+d = 0$.  Thus, $c=-a$ and $d = -b$, giving us uniqueness.

</details>
</div>




<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.5</span>

Multiplication is associative

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

$$
\begin{align*}
        (a_1 +ib_1)&((a_2+ib_2)(a_3+ib_3)) = (a_1 + ib_1)((a_2 a_3 - b_2 b_3) +i(a_2 b_3 + b_2 a_3))\\
        &= (a_1 (a_2 a_3 - b_2 b_3) - b_1 (a_2 b_3 + b_2 a_3)) + i(a_1 (a_2 b_3 + b_2 a_3) + b_1 (a_2 a_3 - b_2 b_3))\\
        &= (a_1 a_2 a_3 - a_1 b_2 b_3 - b_1 a_2 b_3 - b_1 b_2 a_3) + i(a_1 a_2 b_3 + a_1 b_2 a_3 + b_1 a_2 a_3 - b_1 b_2 b_3)\\
        &= ((a_1 a_2 - b_1 b_2 )a_3 - (a_1 b_2 + b_1 a_2 )b_3 ) + i((a_1 a_2 - b_1 b_2 )b_3 + (a_1 b_2 + b_1 a_2)a_3)\\
        &= ((a_1 a_2 -b_1 b_2) + i(a_1 b_2 + b_1 a_2))(a_3+ib_3)\\
        &= ((a_1 + ib_1 )(a_2 + ib_2 ))(a_3 + ib_3 ).
    \end{align*}
$$

</details>
</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.6</span>

Multiplication is commutative

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

$$
\begin{align*}
        (a+ib)(c+id) = (ac-bd) + i(ad+bc) = (ca - db) + i(da+cb) = (c+id)(a+ib)
    \end{align*}
$$

</details>
</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.7</span>

The element $1+i0$ is the unique multiplicative identity

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Firstly, $(a+ib)(1+i0) = (a.1-b.0)+ i(a.0+b.1) = a + ib = (1.a - 0.b) + i(0.a +1.b) = (1+0i)(a+ib)$.  Thus, $1+i0$ is a multiplicative identity.  Moreover, if for every $a+ib\in \mathbb{C}$ $(a+ib)(c+id) = (ac-bd) + i(ad+bc) = a+ib$, then $ac-bd = a$ and $ad+bc = b$.  Choosing $a=1$ and $b=0$, we get $1.c - 0.d = 1$, that is $c=1$.   Similarly choosing $a=0$ and $b = 1$, we get  $0.c - 1.d = 0$, that is $d=0$.

</details>
</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.8</span>

Given an element $a+ib \neq 0+i0$, the element $\left(\frac{a}{a^2 + b^2}\right) +i\left(\frac{-b}{a^2 + b^2}\right)$ is its unique inverse.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Note that $(a+ib)\left(\left(\frac{a}{a^2 + b^2}\right) +i\left(\frac{-b}{a^2 + b^2}\right)\right) = \left(\frac{a^2}{a^2+b^2} -\frac{-b^2}{a^2 + b^2}\right) + i\left(\frac{-ab}{a^2+b^2} + \frac{ab}{a^2+b^2}\right) = 1+i0$.  Thus, $\left(\frac{a}{a^2 + b^2}\right) +i\left(\frac{-b}{a^2 + b^2}\right)$ is an inverse.  Moreover, if $1+i0 = (a+ib)(c+id) = (ac-bd) + i(ad+bc)$, then $ac-bd = 1$ and $ad+bc = 0$.  Multiplying the second equation by $b$, we get $0 = abd + b^2c$.  But, from the first equation, $bd = ac-1$.  Thus, $a(ac-1) + b^2c = 0$.  That is, $a^2 c + b^2 c = a$.  As $a+ib \neq 0+i0$, $a^2 + b^2 \neq 0$.  Thus, $c = \frac{a}{a^2 + b^2}$.  Substituting the value of $c$ in the equation $ad+bc = 0$, we get $ad + b\frac{a}{a^2+b^2} = 0$, which can be simplified to obtain $d = \frac{-b}{a^2 + b^2}$.

</details>
</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.9</span>

Complex multiplication distributes over addition

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

$$
\begin{align*}
        (a_1+ib_1)((a_2 +ib_2) &+ (a_3 + ib_3)) = (a_1 + ib_1)((a_2 + a_3) +i(b_2 + b_3))\\
        &= (a_1(a_2+a_3) - b_1(b_2 + b_3)) + i(a_1(b_2 + b_3) + b_1(a_2 + a_3))\\
        &= (a_1 a_2 + a_1 a_3 - b_1b_2 - b_1 b_3) + i(a_1b_2 + a_1 b_3 + b_1 a_2 + b_1 a_3)\\
        &= ((a_1 a_2 - b_1b_2) + i (a_1 b_2 + b_1 a_2)) + ((a_1 a_3 - b_1 b_3) + i(a_1b_3 + b_1 a_3))\\
        &= ((a_1 + ib_1)(a_2 + ib_2)) + ((a_1 + ib_1)(a_3 + ib_3)).
    \end{align*}
$$

</details>
</div>


Putting together all the above lemmas, we have


<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.1</span>

The triple $(\mathbb{C},+,.)$ is a field.

</div>


The relation with complex numbers and polynomials is actually a lot deeper - it is a good idea to construct complex numbers as $\mathbb{R}[x]/\langle x^2 + 1\rangle$.  The two definition end up being equivalent.  Although important, understanding this equivalence is not indispensable, so you may skip it in your first reading.



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">1.2 Complex numbers as a field of fractions</summary>


Let $\mathbb{R}[x]$ be the set of all polynomials with real coefficients.  Then one can check (as above) that addition and multiplication of polynomials satisfy all properties except the existence of multiplicative inverse.  Such a triple is called a commutative \href{https://en.wikipedia.org/wiki/Ring_(mathematics)}{ring}.  The adjective commutative specifies that multiplication is also commutative.  Thus, $(\mathbb{R}[x]+,.)$ forms a commutative ring usually called the ring of polynomials.  Moreover, This ring behaves pretty much similarly to the ring of integers.  More precisely, there are special polynomials called irreducible polynomials and every polynomial can be represented uniquely as a product of these irreducible polynomials - up to reordering and multiplication by real numbers.  A polynomial is said to be irreducible if it cannot be written as the product of two lower-degree polynomials.  


<div class="academic-env env-example">
<span class="env-label">Example 1.1</span>

The polynomial $x^2 + 3x + 2$ is reducible because $x^2 + 3x + 2 = (x+2)(x+1)$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 1.2</span>

The polynomial $x^2 + 1$ is irreducible as it cannot be written as the product of two lower-degree polynomials.  If we need to write $x^2 + 1$ as a product of two polynomials, both polynomials have to be linear.  But if $x^2 + 1 = (ax+b)(cx+d)$ (where $a\neq 0 \neq d$), then $x = -b/a$ or $x = -d/c$ us a root of the polynomial $x^2 + 1$, but we know the polynomial has no real root.

</div>


### $\mathbb{R}[x]/\langle x^2 + 1 \rangle$ is a commutative ring
Given a commutative ring $(R,+,.)$ and a subset $I$, we are interested in constructing the quotient $R/I$.  The elements of $R/I$ are of course the cosets $r + I = \{r+ i|i\in I\}$.  Thus, $r+I = s+I$ iff $r-s\in I$.  Given, this quotient, it is natural to define the operations $+$ and $.$ on $R/I$ as:
$$(r+I)+(s+I) = (r+s) + I$$
and
$$(r+I).(s+I) = r.s + I.$$
But, there is no guarantee this definition is well-defined - that is the answer might depend on the representative you choose.  However, the definition will be well-defined (you can remove this dependence) if $I$ satisfies two conditions:

- $(I,+)$ forms a subgroup of $(R,+)$.
- $\forall r\in R$, $\forall i\in I$, $r.i\in I$.

Subsets that satisfy the above conditions are called ideals.  Let us verify that if $I$ satisfy the above conditions, then the definition of $+$ and $.$ for $R/I$ are indeed well defined.  Let $r+I = r'+I$ and $s+I = s'+I$, is $(r+I)+(s+I) = (r'+I)+(s'+I)$, that is $r-r'\in I$ and $s-s'\in I$.  To verify the definitions are well-defined, we need to check $(r+I)+(s+I) = (r'+I) + (s'+I)$ and $(r+I).(s+I)=(r'+I).(s'+I)$.  In other words, we need to show $(r+s)-(r'+s')\in I$ and $r.s-r'.s' \in I$.  Notice that $(r+s)-(r'+s') = (r-r')+(s-s')$ and both $r-r'$ and $s-s'$ are elements of $I$.  As $(I,+)$ is a group, it is closed under addition and hence, $(r+s)-(r'+s')\in I$.  On the other hand, $r.s-r'.s' = r.s - r'.s + r'.s + r'.s' = s(r-r') + r(s-s')$.  Now, $s\in R$ and $r-r'\in I$ so $s(r-r')\in I$.  Similarly, $r\in R$ and $s-s' \in I$ so $r(s-s')\in I$.  And finally by closure under addition, this implies $r.s-r'.s'\in I$.



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.1</span>

If $R$ is a commutative ring, show that $R/I$ is also a commutative ring.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.2</span>

Show that $\mathbb{R}[x]$ is a commutative ring.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.3</span>

Show that $\langle x^2 + 1 \rangle = \{p(x)| x^2 + 1 \text{ divides } p(x)\}$ is an ideal.

</div>


Thus, by the previous exercises, $\mathbb{R}[x]/\langle x^2 + 1 \rangle$ is a commutative ring. 

### $\mathbb{R}[x]/\langle x^2 + 1 \rangle$ is an integral domain
Let $p(x) + \langle x^2 + 1 \rangle$ and $q(x) + \langle x^2 + 1 \rangle$ be two elements of the commutative ring $\mathbb{R}[x]/\langle x^2 + 1 \rangle$.  Then $(p(x)+\langle x^2 + 1 \rangle)(q(x)+\langle x^2 + 1 \rangle) = 0 + \langle x^2 + 1 \rangle$ iff $p(x)q(x)\in \langle x^2 + 1 \rangle$.  And, $p(x)q(x)\in \langle x^2 + 1 \rangle$ iff $x^2+1$ divides $p(x)q(x)$. 


<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.2</span>

$x^2+1$ divides $p(x)q(x)$ iff $x^2+1$ divides $p(x)$ or $q(x)$. 


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Assume $x^2+1$ does not divide $p(x)$.  Then, using Euclidean algorithm, you can find two polynomials $r(x)$ and $s(x)$ such that $r(x)(x^2+1)+s(x)p(x) = 1$.  Thus, by multiplying with $q(x)$ on both sides, $r(x)(x^2+1)q(x) + s(x)p(x)q(x) = q(x)$.  $x^2+1$ divides $p(x)q(x)$ so divides both the terms on the left.  Hence $x^2+1$ divides $q(x)$.

</details>
</div>


### $\mathbb{R}[x]/\langle x^2 + 1 \rangle$ is a $2$-dimensional vector space over $\mathbb{R}$

<div class="academic-env env-xca">
<span class="env-label">Exercise 1.4</span>

Show that $(\mathbb{R}[x]/\langle x^2 + 1 \rangle,+)$ along with the scalar multiplication $\forall \alpha\in \mathbb{R}$, $\alpha(s+I) = \alpha.s + I$ forms a vector space over $\mathbb{R}$.

</div>


Notice that $x^2 + I = -1 + I$ as $x^2 + 1\in I$.  Similarly, $x^3 + I = -x + I$ as $x^3+x = x(x^2+1)\in I$.  And, $x^4 + I = 1 + I$ as $x^4 - 1 = (x^2-1)(x^2+1)\in I$.  


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.5</span>

Show that 

- $x^n + I = 1 + I$ if $n = 4k$ for some natural number $k$
- $x^n + I = x + I$ if $n = 4k + 1$ for some natural number $k$
- $x^n + I = -1 + I$ if $n = 4k + 2$ for some natural number $k$
- $x^n + I = -x + I$ if $n = 4k + 1$ for some natural number $k$


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.6</span>

Show that $1$ and $x$ form a basis for the vector space $\mathbb{R}[x]/\langle x^2 + 1 \rangle$.

</div>


### $\mathbb{R}[x]/\langle x^2 + 1 \rangle$ is a field

As multiplication is distributive, given $z \in \mathbb{R}[x]/\langle x^2 + 1 \rangle$ the map $L_z:\mathbb{R}[x]/\langle x^2 + 1 \rangle \to \mathbb{R}[x]/\langle x^2 + 1 \rangle$ defined as $L_z(w)=zw$ is a linear map.  And Theorem **1.2** tells us that this map is injective.  Rank-Nullity theorem tells us that therefore the map should be surjective.  That is, there exists some $w$ such that $L_z(w) = 1$ or $zw=1$.  Hence, $z$ has a multiplicative inverse. 


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.7</span>

Show that the map $\varphi: \mathbb{R}[x]/\langle x^2 + 1 \rangle \to \mathbb{C}$ defined as $\varphi(a + xb) = a+ib$ is a field-isomorphism.  More precisely, show that $\varphi$ is a bijection and $\varphi((a+xb)(c+xd)) = \varphi(a+xb)\varphi(c+xd)$

</div>






</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">1.3 Complex plane as a vector space</summary>


Every field is a \href{https://en.wikipedia.org/wiki/Vector_space}{vector space} over itself.  Thus, $\mathbb{C}$ is certainly a vector space over itself.  Thus, the more interesting observation is that it forms a vector space over $\mathbb{R}$.  Given any real number $\alpha$, you can define the scalar multiplication of a complex number $a+i b$ by the scalar $\alpha$ as $(\alpha a) + i(\alpha b)$.  $(\mathbb{C} ,+)$ along with the above scalar multiplication turns $\mathbb{C}$ to  a vector space over $\mathbb{R}$.  It can further be noticed that $1$ and $i$ span this vector space.  As every element $a+i b$ can be expressed as the linear combination $a.1 + bi$.  These two vectors are also linearly independent - $a.1 + i b = 0$ means $a+i b$.  Once again, using our analogy with polynomials this is possible iff $a = 0 = b$.

As any two $2$ dimensional vector space are isomorphic, $\mathbb{C}$ is isomorphic to $\mathbb{R}^2$ as a vector space.   The linear map $L:\mathbb{C} \to \mathbb{R}^2$ defined as $L(a + i b) = (a,b)$ is a canonical isomorphism.  This isomorphism allows us to define multiplication on $\mathbb{R}^2$.  Namely, $(a,b).(c,d) = (ac-bd,ad+bc)$.  


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.8</span>

Show that $\mathbb{R}^2$ with usual vector addition and the above product is a field.

</div>


However, this is not the only isomorphism one can construct between $\mathbb{C}$ and $\mathbb{R}^2$ - there are infinitely many isomorphisms.  Consider the linear map $M:\mathbb{C} \to \mathbb{R}^2$ defined as $M(a+i b) = (a,b/2)$.  Thus, the vector $(a,b)$ stand for the complex number $a+i (2b)$ and the vector $(c,d)$ stand for the vector $c+i (2d)$.  The product of these two complex numbers is the complex number $(ac-4bd)+i (2(ad+bc))$.  This complex number correspond to the vector $(ac-4bd,ad+bc)$.  Thus, we could have defined a product $(a,b)\times (c,d) = (ac-4bd,ad+bc)$.  Moreover, $(\mathbb{R}^2,+,\times)$ is a field.  Thus, we should realise that there is more than one way in which we can define multiplication on $\mathbb{R}^2$.  However, we need not worry too much - these different definitions are somewhat similar.  We will explore this story in more detail through exercises.  


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.9</span>

Show that $(\mathbb{R}^2,+,\times)$ is a field.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.10</span>

Show that $(\mathbb{R}^2,+,\times)$ is isomorphic to $(\mathbb{R}^2,+,.)$.  More precisly, show that there exists an invertible function $\varphi:\mathbb{R}^2 \to \mathbb{R}^2$ such that $\varphi(v+w) = \varphi(v) + \varphi(w)$ and $\varphi(v\times w) = \varphi(v).\varphi(w)$.
% Hint: $\varphi(a,b) = (a,2b)$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.11</span>

Give an example of another isomorphism from $\mathbb{C}$ to $\mathbb{R}^2$ that gives a third definition of multiplication on $\mathbb{R}^2$

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.12</span>

Give an example of an isomorphism from $\mathbb{C}$ to $\mathbb{R}^2$ we have not encountered so far but under this isomosphism you will again obtain the product $(a,b).(c,d)$.

</div>


The most natural isomorphism $L:\mathbb{C} \to \mathbb{R}$ defined as $L(a + i b) = (a,b)$ allows us to visualise complex numbers on the plane.  This visualisation is the familiar Argand plane description we learn in school.  As the elements on the $x$-axis represent real numbers, they will often be called the real axis.  Similarly, as the elements of the $y$-axis represent purely imaginary numbers, it will also be called the imaginary axis.    

Once we have this visualisation, we can make also make sense of the addition law geometrically.  Recall, that we defined the addition of vectors to be a coordinate-wise addition.  Thus, $(a,b)+(c,d) = (a+c,b+d)$.  Notice, that the four points $(0,0)$, $(a,b)$, $(c,d)$, and $(a+b,c+d)$ form a parallelogram.  Vector addition is often defined (or at least motivated) using this parallelogram.  


<div class="text-center my-6">


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/tikz_92ddd8b127ffef5cccbfe40f65ec8359.png" alt="TikZ Diagram" class="max-w-full h-auto" /></div>


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.13</span>

Interpret the subtraction of two complex numbers geometrically.

</div>


### Inner product

The plane $\mathbb{R}^2$ is a special vector space called an \href{https://en.wikipedia.org/wiki/Inner_product_space}{inner product space}.  An inner product on a vector space $V$ over $\mathbb{R}$ is a map $\langle \ , \ \rangle:V\times V \to \mathbb{R}$ such that 

- $\langle x,y \rangle = \langle y,x \rangle$ <span class="float-right font-bold text-stone-500">**(symmetric)**</span><span class="clear-both"></span>
- $\langle x+z,y \rangle = \langle x,y \rangle + \langle z,y \rangle$ <span class="float-right font-bold text-stone-500">**(bi-linear)**</span><span class="clear-both"></span>
- $\langle x,x \rangle \geq 0$ and $\langle x,x\rangle = 0$ iff $x=0$ <span class="float-right font-bold text-stone-500">**(positive definite)**</span><span class="clear-both"></span>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.14</span>

Show that the usual dot product on $\mathbb{R}^2$ is an inner product.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.15</span>

Show that $\langle , \rangle:\mathbb{R}^2\times \mathbb{R}^2 \to \mathbb{R}$ defined as
$$\langle (x_1,y_1),(x_2,y_2) \rangle = \begin{bmatrix} x_1 & y_1 \end{bmatrix}\begin{bmatrix} a & b\\ c & d \end{bmatrix} \begin{bmatrix} x_2\\ y_2 \end{bmatrix}$$

is an inner product iff 


- $b=c$, that is the matrix is symmetric.
- the determinant $ad - bc > 0$. 
- the trace $a + d > 0$.


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.16</span>

Show that if $\langle , \rangle:\mathbb{R}^2\times \mathbb{R}^2 \to \mathbb{R}$ is an inner product, then there exists a symmetric matrix a $\begin{bmatrix} a & b\\ b & d \end{bmatrix}$ with $ad - b^2 > 0$ and $a+d > 0$ such that 
$$\langle (x_1,y_1),(x_2,y_2) \rangle = \begin{bmatrix} x_1 & y_1 \end{bmatrix} \begin{bmatrix} a & b\\ c & d \end{bmatrix} \begin{bmatrix} x_2\\ y_2\end{bmatrix}$$

</div>


We can use the isomorphism $L:\mathbb{C} \to \mathbb{R}^2$ to transfer the dot product on $\mathbb{R}^2$ to an inner product on $\mathbb{C}$.  Namely, we can define $\langle a+i b,c+i d\rangle = ac+bd$. 


<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.10 (Cauchy-Schwarz inequality)</span>

Let $V$ be a vector space and let $\langle , \rangle$ be an innner product on $V$.  Then, 
$$\langle v,w\rangle \leq \Vert v\Vert \Vert w\Vert.$$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

%<span class="footnote-trigger" title="this proof is inspired from the proof in Topology of Metric Spaces by S Kumaresan"><sup>[*]</sup></span>
If $v$ or $w$ is the zero vector, then both sides are the equality would be zero.  So, we may assume that $v\neq 0\neq w$.  First consider the case $\Vert v\Vert = 1 = \Vert w\Vert$.  Then 
$$
\begin{align*}
        0 &\leq \Vert v-w \Vert^2 = \langle v-w,v-w\rangle \\
        &= \langle v,v-w\rangle - \langle w, v-w\rangle \\
        &= \langle v,v\rangle -\langle v,w \rangle - \langle w,v\rangle +\langle w,w \rangle \\
        &= \Vert v\Vert^2 - 2\langle v,w \rangle + \Vert w\Vert \\
        &= 2 - 2\langle v,w\rangle
    \end{align*}
$$
Thus, $\langle v,w\rangle \leq 1 = \Vert v \Vert \Vert w\Vert$. Now consider the more general case, where $\Vert v\Vert >0$ and $\Vert w \Vert >0$.  Then, take $v' = \frac{v}{\Vert v\Vert}$ and $w' = \frac{w}{\Vert w\Vert}$.  Thus, from the earlier case, we have
$$
\begin{align*}
        1 \geq \langle v',w'\rangle = \langle \frac{v}{\Vert v\Vert},\frac{w}{\Vert w\Vert}\rangle = \frac{1}{\Vert v\Vert \Vert w\Vert}\langle v,w\rangle.
    \end{align*}
$$
Therefore, $$\langle v,w\rangle \leq \Vert v\Vert \Vert w\Vert.$$

</details>
</div>


### Norm
As an inner product is positive definite it defines a \href{https://en.wikipedia.org/wiki/Norm_(mathematics)}{norm} on the vector space.  


<div class="academic-env env-definition">
<span class="env-label">Definition 1.2</span>

If $V$ is a vector space over $\mathbb{R}$, a norm on $V$ is a function $\Vert \ \Vert:V\to \mathbb{R}$ such that

- $\Vert v + w \Vert \leq \Vert v\Vert + \Vert w \Vert$ <span class="float-right font-bold text-stone-500">**(Triangle inequality)**</span><span class="clear-both"></span>
- $\Vert \alpha v \Vert = |\alpha| \Vert v\Vert$ <span class="float-right font-bold text-stone-500">**(Homogeneous)**</span><span class="clear-both"></span>
- $\Vert v\Vert = 0$ iff $v = 0$ <span class="float-right font-bold text-stone-500">**(Positive definite)**</span><span class="clear-both"></span>


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.17</span>

If $\Vert \ \Vert$ is a norm on the vector space $V$, show that $\Vert v \Vert \geq 0$ for all $v\in V$.

</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.11</span>

If $\langle \ , \rangle$ is an inner product on $V$, then $\Vert v \Vert := \langle v,v \rangle^{\frac{1}{2}}$ is a norm.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

**Triangle inequality: ** 
$$
\begin{align*}
        \Vert v+w \Vert^2 &= \langle v+w,v+w\rangle\\
        &= \Vert v\Vert^2 + 2\langle v,w\rangle +\Vert w\Vert^2\\
        &\leq \Vert v\Vert^2 + 2\Vert v\Vert \Vert w\Vert +\Vert w\Vert^2\\
        &= \left(\Vert v\Vert + \Vert w\Vert\right)^2
    \end{align*}
$$
Thus, by taking square root on both sides, we get the triangle inequality.  

**Homogeneity:** 
$$
\begin{align*}
        \Vert \alpha v\Vert^2 = \langle \alpha v,\alpha v\rangle = \alpha^2\langle v,v\rangle = \alpha^2\Vert v\Vert^2 
    \end{align*}
$$
Thus, by taking square root on both sides, we get the required equality.

**Positive definiteness:** follows directly from positive definiteness of inner product.

</details>
</div>


**Question:** Given an inner product, there is a canonical norm associated with it.  Is every norm induced by an inner product (in this manner)?  


This a hard question, but we already saw that we can characterise inner products on $\mathbb{R}^n$.  If we knew all the inner products, we may check if this is one among them or not.  The basic idea in this characterisation is that **bilinear maps are determined by their action on pairs of basis vectors**.  You are familiar with the idea that linear maps are determined by their action on basis vectors and this is analogous to that result.  


<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.12</span>

Every linear map $L:\mathbb{R} \to \mathbb{R}$ has the form $L(x) = \alpha x$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Notice that $L(x) = L(x.1) = x.L(1)$.  Thus, if we define $\alpha = L(1)$, then $L(x) = \alpha x$ for all $x$.

</details>
</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.13</span>

Every inner product $\langle \rangle:\mathbb{R}^2 \to \mathbb{R}^2$ has the form $\langle (x_1,y_2),(x_2,y_2)\rangle = \alpha x_1 x_2 + \beta (x_1 y_2 + x_2 y_1) + \gamma y_1 y_2$.


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $(x_1,y_1)$ and $(x_2,y_2)$ in $\mathbb{R}^2$ be fixed but arbitrary.  Then,
$$
\begin{align*}
        \langle (x_1,y_1),(x_2,y_2) \rangle &= \langle (x_1,0)+(0,y_1), (x_2,y_2)\rangle\\
        &= \langle (x_1,0), (x_2,y_2)\rangle + \langle(0,y_1), (x_2,y_2)\rangle\\
        &= \langle (x_1,0), (x_2,0) + (0,y_2)\rangle + \langle(0,y_1), (x_2,0) + (0,y_2)\rangle\\
        &= \langle (x_1,0), (x_2,0)\rangle + \langle (x_1,0), (0,y_2)\rangle + \langle(0,y_1), (x_2,0)\rangle + \langle(0,y_1),(0,y_2)\rangle\\
        &= x_1 x_2 \langle (1,0),(1,0) \rangle + x_1 y_2 \langle (1,0),(0,1) \rangle + y_1 x_2 \langle (0,1),(1,0)\rangle + y_1 y_2 \langle (0,1),(0,1) \rangle\\
        &= x_1 x_2 \langle (1,0),(1,0) \rangle + (x_1 y_2 + x_2 y_1) \langle (1,0),(0,1) \rangle + y_1 y_2 \langle (0,1),(0,1) \rangle.
    \end{align*}
$$
Define $\alpha = \langle (1,0),(1,0) \rangle$, $\beta = \langle (1,0),(0,1) \rangle$, and $\gamma = \langle (0,1),(0,1) \rangle$ to complete the proof.

</details>
</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.18</span>

Show that $\Vert \ \Vert_{\infty} : \mathbb{R}^2 \to \mathbb{R}$ defined as $\Vert (x,y)\Vert = \max(|x|,|y|)$ is a norm.

</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.14</span>

There does not exist any inner product $\langle , \rangle$ on $\mathbb{R}^2$ such that $\Vert v\Vert_{\infty}= \langle v,v \rangle^{\frac{1}{2}}$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

We will use proof by contradiction.  Assume there exists such an inner product $\langle , \rangle$.  Then, by Lemma **1.13**, we know $\Vert (x,y) \Vert_{\infty}^{2} = \langle (x,y),(x,y) \rangle = \alpha x^2 + 2\beta xy + \gamma y^2$ for some $\alpha$, $\beta$, and $\gamma$.  We will substitute various vectors to discover the values of $\alpha$, $\beta$, and $\gamma$.  We know $1 = \Vert (1,0) \Vert_{\infty}^2 = \alpha$ and $1 = \Vert (0,1) \Vert_{\infty}^2 = \gamma$.  Thus, $\Vert (x,y) \Vert_{\infty}^2 = \langle (x,y),(x,y) \rangle = x^2 + 2\beta xy + y^2$ for some $\beta$.  From $2 = \Vert (2,1) \Vert_{\infty}^2 = 4 + \beta + 1$, we get $\beta = -3$, but from $3 = \Vert (3,1)\Vert_{\infty}^2 = 9 + \beta + 1$, we get $\beta = -7$.  As it is impossible for $\beta$ to take two different values, our initial assumption should be wrong.

</details>
</div>


Thus, we have answered our question.  More precisely, we showed that there exists norms that are not induced by an inner product.  Please note that the proof technique is as important as the result itself.  In this proof, we characterised all inner products and showed one specific norm was not equal to the norm induced by any of the inner products.  There is another way to go about such proofs.  We can show that norms induced by inner products satisfy a property that the given norm does not have.  Let us explore this line of thought as well.  Given below is a property satisfied by norms induced by an inner product.    


<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.15</span>

(Parallelogram law)
If $\Vert v \Vert = \langle v,v \rangle^{\frac{1}{2}}$ for all $v\in V$, then $\Vert v + w \Vert^2 + \Vert v - w \Vert^2 = 2\Vert v \Vert^2 + 2\Vert w \Vert^2$.

</div>



<div class="academic-env env-remark">
<span class="env-label">Remark 1.1</span>

The lemma is called called parallelogram because $v+w$ and $v-w$ are the diagonals of the parallelogram that has $v$ and $w$ as adjacent sides.  Geometrically, the theorem says the sum of the squares of the lengths of the diagonals of a parallelogram is equal to the sum of squares of the lengths of its sides.  

<div class="text-center my-6">


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/tikz_5afc47d0de18a68dfca3839d31c54ffb.png" alt="TikZ Diagram" class="max-w-full h-auto" /></div>


</div>


</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Notice that for any $v,w$ 
$$
\begin{align*}
    \Vert v+w \Vert^2 &= \langle v+w, v+w \rangle\\
    &= \langle v, v+w \rangle + \langle w, v+w \rangle\\
    &= \langle v, v \rangle + \langle v, w \rangle  + \langle w, v \rangle + \langle w, w \rangle\\
    &= \Vert v\Vert^2 + 2 \langle v,w \rangle + \Vert w\Vert^2
\end{align*}
$$
Similarly, we can prove
$$
\begin{align*}
    \Vert v-w \Vert^2 = \Vert v\Vert^2 - 2\langle v,w \rangle +\Vert w \Vert^2
\end{align*}
$$
Adding the two, we get the required result $\Vert v + w \Vert^2 + \Vert v - w \Vert^2 = 2\Vert v \Vert^2 + 2\Vert w \Vert^2$.

</details>
</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.16</span>

The norm $\Vert \Vert_{\infty}$ does not satisfy the parallelogram law.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $v = (1,0)$ and $w = (0,1)$.  Then, $\Vert v \Vert_{\infty}^2 = \Vert (1,0) \Vert_{\infty}^2 = 1$, $\Vert w \Vert_{\infty}^2 = \Vert (0,1) \Vert_{\infty}^2 = 1$, $\Vert v+w \Vert_{\infty}^2 = \Vert (1,1) \Vert_{\infty}^2 = 1$, and $\Vert v-w \Vert_{\infty}^2 = \Vert (1,-1) \Vert_{\infty}^2 = 1$.  Clearly, $\Vert v+w \Vert_{\infty}^2 + \Vert v-w \Vert_{\infty}^2 = 2 \neq 4 = 2\Vert v \Vert_{\infty}^2 + 2\Vert v \Vert_{\infty}^2$.

</details>
</div>


In fact, we can construct an infinite family of norms that are not induced by any inner product.  But, I leave its proof as an exercise.  


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.19</span>

Show that $\Vert (x,y)\Vert_p = \sqrt[p]{|x|^p+|y|^p}$ is a norm on $\mathbb{R}^2$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.20</span>

Show that $\Vert \ \Vert_p$ satisfies parallelogram law iff $p=2$.

</div>




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">1.4 Topology of the complex plane</summary>



### Metric
A metric on a set $X$ is a function $d:X\times X \to \mathbb{R}_{\geq 0}$ such that

- $d(x,y) = 0$ iff $x=y$ <span class="float-right font-bold text-stone-500">**(Positivity)**</span><span class="clear-both"></span>
- $d(x,y) = d(y,x)$ <span class="float-right font-bold text-stone-500">**(Symmetry)**</span><span class="clear-both"></span>
- $d(x,y) \leq d(x,z) + d(z,y)$ for all $z\in X$ <span class="float-right font-bold text-stone-500">**(Triangle inequality)**</span><span class="clear-both"></span>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.17</span>

Let $V$ be a vector space and $\Vert \Vert$ a norm on $V$.  Then, $d(x,y) = \Vert x-y \Vert$ is a metric on $V$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Positive definiteness of norm implies that $0 = \Vert x-y \Vert = d(x,y)$ if and only if $x-y = 0$ or $x=y$.  Thus, $d(x,y) = 0$ iff $x=y$.  As norm is homogeneous $d(y,x) = \Vert y-x \Vert = \Vert (-1)(x-y)\Vert = \vert -1\vert \Vert x-y \Vert = \Vert x-y \Vert = d(x,y)$.  Finally, $d(x,z) = \Vert x-z \Vert = \Vert x-y+y-z \Vert \leq \Vert x-y \Vert +\Vert y-z\Vert = d(x,y) + d(y,z)$.

</details>
</div>


Thus, normed vector spaces form a rich class of examples of metric spaces.  In particular, $\mathbb{R}^2$ is a metric space.  We also saw there is an infinite family of norms on $\mathbb{R}^2$ and thus on $C$.  These norms give rise to an infinite family of metrics on $\mathbb{C}$ or $\mathbb{R}^2$   


<div class="academic-env env-definition">
<span class="env-label">Definition 1.3</span>

Define $d_p:\mathbb{C} \to \mathbb{R}$ to be the metric $d_p(z,w) = \Vert z-w \Vert_p$

</div>



<div class="academic-env env-remark">
<span class="env-label">Remark 1.2</span>

These norms and metrics can be generalised to $\mathbb{R}^n$ and thus each $\mathbb{R}^n$ is a metric space.  Much of the topology of $\mathbb{R}^2$ or $\mathbb{C}$ that will be discussed in this course can be generalised to $\mathbb{R}^n$.

</div>


As every norm induces a metric, it is natural to wonder if every metric is induced by a norm. The following example answers the question.


<div class="academic-env env-example">
<span class="env-label">Example 1.3 (Discrete metric)</span>

The function $d:\mathbb{C} \times \mathbb{C} \to \mathbb{R}$ defined as $d(x,y) = 0$ if $x=y$ and $d(x,y) = 1$ if $x\neq y$ is clearly positive and symmetric.  If $x\neq y$, then either $x\neq z$ or $z\neq y$.  So, $d(x,z) = 1$ or $d(z,y) = 1$.  Thus, $d(x,z) + d(z,y) \geq 1 = d(x,y)$.  On the other hand, if $x=y$, then $0 = d(x,y)\leq d(x,z)+d(z,y)$.  Hence, $d$ also satisfies the triangle inequality and is thus a metric.  If $d(x,y) = \Vert x-y\Vert$ for some norm $\Vert \Vert$, then $1 = d(2+i0,0+i0) = \Vert (2+i0)-(0+i0) \Vert = \Vert 2+i0\Vert = \Vert 2(1+i0)\Vert = 2\Vert 1+i0)\Vert = 2 \Vert (1+i0)-(0+i0)\Vert = 2d(1+i0,0_i0) = 2$, which is a contradiction.  Thus, this metric is not induced by a norm.

</div>


A metric enables us to define convergence of sequences and and open sets.  Thus, we can talk about the continuity of functions $f:\mathbb{C} \to \mathbb{C}$.  Such a structure is called a topology.  

### Open balls and open sets


<div class="academic-env env-definition">
<span class="env-label">Definition 1.4 (Open Ball)</span>

Given a metric $d$ on $X$, we define the open ball centred around $x$ of radius $r$ as $B_d(x,r) = \{y\in X : d(x,y)<r\}$.

</div>


Let us understand the definition using some examples.  We will primarily look at $d_p$ where $p=1,2,\infty$ and the discrete metric on $\mathbb{C}$.   



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_0e562418bfca19bb84dfda9603ab35f7.png" alt="Figure" class="max-w-full h-auto" /></div>




<div class="academic-env env-example">
<span class="env-label">Example 1.4</span>

Let the metric space be $(\mathbb{C},d_1)$.  Then, $d(x+iy,a+ib) = \Vert (x+iy) - (a+ib)\Vert_1 = \Vert (x-a)+i(y-b)\Vert_1 = \vert x-a\vert +\vert y-b \vert$.  Thus, $B(a+ib,r) = \{x+iy: \vert x-a\vert + \vert y-b\vert < r\}$.  Let us first understand the set $\{x+iy: \vert x-a\vert + \vert y-b\vert = r\}$.  Note that $$\vert x-a \vert + \vert y-b \vert = \begin{cases}
        x-a + y-b & \text{if $x>a$ and $y>b$}\\
        a-x + y-b & \text{if $x<a$ and $y>b$}\\
        x-a + b-y & \text{if $x>a$ and $y<b$}\\
        a-x + b-y & \text{if $x<a$ and $y<b$}
    \end{cases}.$$

Thus, the set $\{x+iy: \vert x-a\vert + \vert y-b\vert = r\}$ is the union of four sets
$$
\begin{align*}
        L_1 &= \{x+iy: x-a + y-b = r,x\geq a,y\geq b\}\\
        &= \{x+iy: y = -x+r+a+b,x\geq a,y\geq b\}\\
        &= \{x+iy: y=-x+r+a+b,a\leq x\leq r+a\}
    \end{align*}
$$
$$
\begin{align*}
        L_2 &= \{x+iy: a-x + y-b = r,x\leq a,y\geq b\}\\
        &= \{x+iy: y = x-a+b+r,x\leq a,y\geq b\}\\
        &= \{x+iy: y = x-a+b+r,a-r\leq x\leq a\}
    \end{align*}
$$
$$
\begin{align*}
        L_3 &= \{x+iy: x-a + b-y = r,x\geq a,y\leq b\}\\
        &= \{x+iy: y = x-a+b-r,x\geq a,y\leq b\}\\
        &= \{x+iy: y = x-a+b-r,a\leq x\leq a+r\}
    \end{align*}
$$
$$
\begin{align*}
        L_4 &= \{x+iy: a-x + b-y = r,x\leq a,y\leq b\}\\
        &= \{x+iy: y = -x + a + b -r,x\leq a,y\leq b\}\\
        &= \{x+iy: y = -x + a + b -r,a-r\leq x\leq a\}
    \end{align*}
$$

Thus, the sets $L_i$ are line segments.  Moreover, the endpoints of $L_1$ are $(a,r+b)$ and $(r+a,b)$.  The endpoints of $L_2$ are $(a-r,b)$ and $(a,r+b)$.  The endpoints of $L_3$ are $(a,b-r)$ and $(a+r,b)$.  The endpoints of $L_4$ are $(a-r,b)$ and $(a,b-r)$.  Thus, the union of the four sets is the quadrilateral with vertices $(a,r+b), (a+r,b), (a,b-r), (a-r,b)$.  Moreover, it can be seen that the quadrilateral is a rhombus as the length of each $L_i$ is $\sqrt{2}r$.  Thus, $B(a+ib,r) = \{x+iy: \vert x-a\vert + \vert y-b\vert < r\}$ is the interior of this rhombus.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 1.5</span>

Let the metric space be $(\mathbb{C},d_2)$.  Then, $d(x+iy,a+ib) = \Vert (x+iy) - (a+ib)\Vert_2 = \Vert (x-a)+i(y-b)\Vert_2 = \sqrt{(x-a)^2 + (y-b)^2} $.  Thus, $B(a+ib,r) = \{x+iy: \sqrt{(x-a)^2 + (y-b)^2} < r\} = \{x+iy: (x-a)^2 + (y-b)^2 < r^2\}$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 1.6</span>

Let the metric space be $(\mathbb{C},d_{\infty})$.  Then, $d(x+iy,a+ib) = \Vert (x+iy) - (a+ib)\Vert_1 = \Vert (x-a)+i(y-b)\Vert_1 = \max \{\vert x-a\vert , \vert y-b \vert\}$.  Thus, 
$$
\begin{align*}
        B(a+ib,r) &= \{x+iy: \max \{\vert x-a\vert , \vert y-b \vert\} < r\}\\
        &= \{x+iy: \vert x-a\vert <r,\vert y-b \vert < r\}\\
        &= \{x+iy: -r < x-a < r, -r < y-b < r\}\\
        &= \{x+iy: a-r < x < a+r, b-r < y < b+r\}
    \end{align*}
$$

</div>



<div class="academic-env env-example">
<span class="env-label">Example 1.7</span>

Let the metric space be $(\mathbb{C},d_{\infty})$ where $d:\mathbb{C} \times \mathbb{C} \to \mathbb{R}$ is defined as $d(x,y) = 0$ if $x=y$ and $d(x,y) = 1$ if $x\neq y$.  Then, if $0<r\leq 1$, then  $B(a+ib,r) = \{a+ib\}$ and if $r>1$, then $B(a+ib,r) = \mathbb{C}$.

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 1.5</span>

A set $U\subset X$ is said to be open in $(x,d)$ if for every $x\in U$, there exists an $\varepsilon>0$ such that $B(x,\varepsilon)\subset U$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 1.8</span>

Each open ball $B(x,r)\subset X$ is an open set.  To see this, notice that given any points $y\in B(x,r)$ let $\varepsilon < r-d(x,y)$.  Then if $z\in B(y,\varepsilon)$, then $d(x,z)\leq d(x,y) + d(y,z)\leq d(x,y) + r - d(x,y) = r$

</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.18</span>

Arbitrary union of open sets is open.  More precisely, if $\Lambda$ is any set and $U_{\lambda}$ is open for all $\lambda\in \Lambda$, then $\cup_{\lambda\in \Lambda} U_{\lambda}$ is also open.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Given any $x\in \cup_{\lambda\in \Lambda} U_{\lambda}$, $x\in U_{\lambda_0}$ for some $\lambda_0 \in \Lambda$.  As $U_{\lambda_0}$ is open, there exists some $\varepsilon>0$ such that $B(x,\varepsilon)\subset U_{\lambda_0}\subset \cup_{\lambda\in \Lambda} U_{\lambda}$, $x\in U_{\lambda_0}$.  As $x\in \cup_{\lambda\in \Lambda} U_{\lambda}$ was arbitrary, $\cup_{\lambda\in \Lambda} U_{\lambda}$ is open.

</details>
</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.19</span>

Finite intersections of open sets is open.  More precisely, if $U_1,U_2,\dots,U_n$ are open sets, then $\cap_{i=1}^n U_i$ is also an open set.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Let $x\in \cap_{i=1}^n U_i$.  Then $x\in U_i$ for all $i$.  As $U_i$ is open, there exists an $\varepsilon_i$ such that $B(x,\varepsilon_i)\subset U_i$.  Define $\varepsilon = \min \{\varepsilon_1,\varepsilon_2,\dots,\varepsilon_n\}$, then $B(x,\varepsilon)\subset B(x,\varepsilon_i)\subset U_i$.  Thus, $B(x,\varepsilon)\subset U_i$ for all $i$.  Thus, $B(x,\varepsilon)\subset \cap_{i=1}^n U_i$.

</details>
</div>



<div class="academic-env env-example">
<span class="env-label">Example 1.9</span>

Infinite intersections of open sets need not be open.  $(-\frac{1}{n},\frac{1}{n})$ is an open subset of $\mathbb{R}$, but $\cap_{i=1}^\infty (-\frac{1}{n},\frac{1}{n}) = \{0\}$ and $\{0\}$ is not an open set.

</div>


### Convergence of sequences


<div class="academic-env env-definition">
<span class="env-label">Definition 1.6</span>

Let $(X,d)$ be a metric space.  A sequence $x_n\in X$ is said to converge to a point $x\in X$ if $d(x_n,x)$ converges to $0$.

</div>



<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.20</span>

In the metric space $(\mathbb{C},d_2)$, a sequence $z_n = x_n + iy_n$ converges to a point $z = x+iy$ iff $x_n$ converges to $x$ and $y_n$ converges to $y$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Suppose $z_n$ converges to $z$.  Then $d_2(z_n,z) = \sqrt{(x_n-x)^2 + (y_n - y)^2}$ converges to zero.  But, $\vert x_n - x\vert = \sqrt{(x_n-x)^2} \leq \sqrt{(x_n-x)^2 + (y_n - y)^2}$.  Thus, $\vert x_n - x\vert$ converges to $0$.  Similarly, we can prove $\vert y_n - y\vert$ converges to $0$.  On the other hand, if $x_n$ converges to $x$ and $y_n$ converges to $y$, then $\vert x_n - x\vert$ and $\vert y_n - y\vert$ converges to zero.  Therefore, $d_2(z_n,z) = \sqrt{(x_n-x)^2 + (y_n - y)^2}$ converges to zero.

</details>
</div>


Convergence of sequences and open sets are both tools that allow us to define continuity.  Thus, it is only natural to expect that the two are related to each other.  This relationship is described by the following lemma.


<div class="academic-env env-lemma">
<span class="env-label">Lemma 1.21</span>

In a metric space $(X,d)$ a sequence $x_n$ converge to a point $x$ iff given any open set $U$ such that $x\in U$, there exists an $\varepsilon >0$ such that $B(x,\varepsilon)$ contains all but finitely many $x_n$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Suppose $x_n$ converges to $x$.  Consider any open set $U$ containing $x$.  Then, as $U$ is open, there exists an $\varepsilon>0$ such that $B(x,\varepsilon)\subset U$.  But, $d(x_n,x)$ converges to $0$.  Therefore, there exists $N$ such that $0\leq d(x_n,x) < \varepsilon$ for all $n\geq N$.  That is, all but finitely many elements $x_n$ belong to $B(x,\varepsilon)$ and thus belong to $U$.  

Suppose for every open set $U$ containing $x$, there exists an $\varepsilon > 0$ such that $B(x,\varepsilon)$ contains all but finitely many $x_n$.  Given any $\varepsilon>0$, choose $U = B(x,\varepsilon)$.  As $B(x,\varepsilon)$ is an open set containing $x$, all but finitely many $x_n$ will belong to $B(x,\varepsilon)$.  Thus, there exists an $N$ such that $x_n\in B(x,\varepsilon)$ for all $n\geq N$.  That is, $d(x_n,x)<\varepsilon$ for all $n\geq N$.  Hence, $x_n$ converges to $x$.

</details>
</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 1.7</span>

In a metric space $(X,d)$ a set $K$ is said to be closed if its complement is open.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 1.3</span>

A subset $K$ of a metric space $(X,d)$ is closed iff given any sequence $x_n$ such that $x_n\in K$ for all $n$ and $x_n$ converges to $x$, the limit point $x\in K$.

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Suppose $K$ is closed.  Consider any sequence $x_n$ such that $x_n\in K$ and $x_n$ converges to $x$.  We will use a proof by contradiction to prove that $x\in K$.  Assume $x\not\in K$.  The set $U:= K^C$ is open and contains $x$.  Thus, by previous result $x_n$ will belong to $U$ for all by finitely many $n$.  But we had taken a sequence $x_n$ such that $x_n\in K$ and thus we have a contradiction.  Therefore the assumption that $x\not\in K$ has to be wrong.  In other words, $x\in K$.

Assume that: given any sequence $x_n$ such that $x_n\in K$ and $x_n$ converges to $x$, the limit point $x\in K$.  We will prove that $K$ is closed by proving that $U:= K^C$ is open.  Once again, we will use a proof by contradiction.  Assume $U$ is not open.  Then there exists an element $x\in U$ such that $B(x,r)\not\subset U$ for any $r$.  Therefore $B(x,\frac{1}{n})\not\subset U$ for any $n$.  That is, for each $n$, we can find a point $x_n$ such that $x_n\in B(x,\frac{1}{n})$ but $x_n\not\in U$ or in other words $x_n\in K$.  But as $x_n\in B(x,\frac{1}{n})$, $d(x_n,x)<\frac{1}{n}$.  That is $x_n$ converges to $x$.  But, $x_n\in K$ and $x_n$ converges to $x$ therefore $x\in K$.  But we assumed this $x$ belongs to $U$ and hence does not belong to $K$ - that is, we have a contradiction.

</details>
</div>






</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">1.5 More geometry: Complex numbers as funcitons</summary>



Earlier, we saw a geometric view of complex addition, where we used the identification of complex numbers with $\mathbb{R}^2$.  We could also identify the set of complex numbers with some other sets to get interesting geometric ways of looking at complex numbers.  To appreciate this completely, you would need a deeper understanding of Euclidean geometry.  

Recall that we say two triangles are called congruent if you can move (using rotations, reflections and translation) one triangle onto the other.  Similarly, we say two triangles are similar if you can we can transform one triangle to another using rotations, reflections, translations, ** and dilations**.  These four types of maps, generate a class of functions called affine maps.  


<div class="academic-env env-definition">
<span class="env-label">Definition 1.8 (Affine map)</span>

A map $f:\mathbb{R}^2 \to \mathbb{R}^2$ of the form $f(a,b) = (ax+by+c,dx+ey+f)$ is called an affine map.

</div>


You may recall from school that the study of congruence and similarity formed a major part of the Euclidean geometry you learnt in school.  And, as mentioned earlier, two triangles are similar iff there is an affine map that takes one triangle to another.  It is a much deeper fact that every aspect of Euclidean geometry is the study of some property that is preserved under affine maps.  This observation led Felix Klein to characterise geometry as the study of properties that are preserved under some collection of maps.  And this led to other forms of geometry like \href{https://en.wikipedia.org/wiki/Spherical_geometry}{spherical} and \href{https://en.wikipedia.org/wiki/Hyperbolic_geometry}{hyperbolic} geometry.  

The aim of the digression was to convey the importance of studying affine maps.  We will denote the set of affine maps as $\mathcal{A}$ and we will identify the set of complex numbers with subsets of $\mathcal{A}$.  These identifications will provide some deeper insights into complex arithmetic.

### Addition as translation
Consider the map $\Phi:\mathbb{C} \to \mathcal{A}$ that takes the complex number $a+i b$ to the map $T_{a + i b}:\mathbb{R}^2 \to \mathbb{R}^2$ defined as $T_{a+i b}(x,y) = (x+a,y+b)$.

<div class="academic-env env-xca">
<span class="env-label">Exercise 1.21</span>

Verify that $T_{a+i b}\circ T_{c + i b} = T_{(a+i b) + (c+i d)}$<span class="footnote-trigger" title="In the language of group theory, $\Phi:(\mathbb{C},+)\to (\mathcal{A},\circ)$ is a homomorphism.  You may ignore this remark if you have not seen group theory earlier"><sup>[*]</sup></span>.

</div>

Recall that we had earlier used the identification between $\mathbb{R}^2$ and $\mathbb{C}$ to define a multiplication on $\mathbb{R}^2$.  Similarly, we could have used the identification between $\mathbb{C}$ and $\mathcal{A}$ to translate function composition to an operation on $\mathbb{C}$.  If we did, we would reinvent complex addition!    


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.22</span>

Show that $\Phi$ is injective.

</div>



### Multiplication as Amplitwist
Consider the map $\overline{\Psi}: \mathbb{C} \to \mathcal{A}$ that takes the complex number $a+ i b$ to the map $L_{a+i b}(x,y) = (ax-by,bx+ay)$.  I am not doing anything magical, I am just taking the product $(a,b).(x,y)$ defined earlier.  Notice that $L_{a+i b}$ is a linear map.  If you prefer thinking of linear maps as matrices, you could also consider the map $\Psi:\mathbb{C} \to GL_2(\mathbb{R})$ defined as 
$$\Psi(a+ib) = \begin{bmatrix} a & -b\\ b & a \end{bmatrix}.$$


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.23</span>

Verify that $L_{a+i b}\circ L_{c+ i d} = L_{(a+i b)(c+i d)}$<span class="footnote-trigger" title="That is, $\Psi$ and $\overline{\Psi}$ are homomorphisms"><sup>[*]</sup></span>.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.24</span>

Show that $\Psi$ is injective.

</div>


Further notice that the matrix 
$$\Psi(a+ib) = \begin{bmatrix} a & -b\\ b & a \end{bmatrix} = (a^2+b^2) \begin{bmatrix} \frac{a}{a^2+b^2} & \frac{-b}{a^2+b^2}\\ \frac{b}{a^2 + b^2} & \frac{a}{a^2+b^2} \end{bmatrix}.$$


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.25</span>

Show that 
$$\begin{bmatrix} \frac{a}{a^2+b^2} & \frac{-b}{a^2+b^2}\\ \frac{b}{a^2 + b^2} & \frac{a}{a^2+b^2} \end{bmatrix} \begin{bmatrix} \frac{a}{a^2+b^2} & \frac{-b}{a^2+b^2}\\ \frac{b}{a^2 + b^2} & \frac{a}{a^2+b^2} \end{bmatrix}^{T} = \begin{bmatrix} 1 & 0\\ 0 & 1 \end{bmatrix}$$

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 1.9</span>

A matrix $A$ is called orthogonal if $AA^T = I$.  The collection of all $2\times 2$ orthogonal matrices is denoted as $O(2)$.  Notice that as $1 = \det(AA^T) = \det(A)\det(A^T) = \det(A)^2$.  Thus, $\det(A) = \pm 1$.  The collection of all elements of $O(2)$ with determinant $1$ is denoted as $SO(2)$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.26</span>

Given $a+i b\in \mathbb{C}$ verify that $\Psi(z)\in SO(2)$ iff $a^2 + b^2 = 1$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.27</span>

Show that $A\in SO(2)$ iff there exits some $\theta \in [0,2\pi]$ such that 
$$A =  \begin{bmatrix} \cos(\theta) & -\sin(\theta)\\ \sin(\theta) & \cos(\theta) \end{bmatrix}$$

</div>

By comparison, we see $\cos(\theta) = \frac{a}{a^2+b^2}$ and $\sin(\theta) = \frac{b}{a^2+b^2}$.  That is, $\tan(\theta) = \frac{b}{a}$.  Hence $\theta$ is the angle $(a,b)$ makes with the $x$-axis.


<div class="academic-env env-definition">
<span class="env-label">Definition 1.10</span>

Given a complex number $a + i b$, define the modulus of $a + i b$, denoted as $\vert a+i b\vert$, to the the number $a^2+b^2$.  Given a non-zero complex number $a+i b$, define the argument of $a+i b$, denoted as $arg(a+i b)$, using the formula
$$ arg(a+i b) = \begin{cases} 
        \tan^{-1}(\frac{y}{x}) & \text{ if } y \geq 0 \text{ and } x\neq 0\\
        \pi + \tan^{-1}(\frac{y}{x}) & \text{ if } y < 0 \text{ and } x\neq 0\\
        \frac{\pi}{2} & \text{ if } y > 0 \text{ and } x = 0\\
        \frac{-\pi}{2} & \text{ if } y < 0 \text{ and } x = 0
    \end{cases}.$$

Geometrically, $|a+i b|$ is the length of the vector and $\arg(a+i b)$ is the angle it makes with $x$-axis.

</div>




<div class="text-center my-6">


<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/tikz_fb9799a40eaf2b727c657eada1554b6d.png" alt="TikZ Diagram" class="max-w-full h-auto" /></div>


</div>



Let $z = a+i b$, let $r = |a + i b|$, and $\theta = \arg(a+i b)$.  Then, 
$$
\begin{align*}
\Psi(z) &= r\begin{bmatrix} \cos(\theta) & -\sin(\theta)\\ \sin(\theta) & \cos(\theta) \end{bmatrix} = \begin{bmatrix} r & 0\\ 0 & r \end{bmatrix}\begin{bmatrix} \cos(\theta) & -\sin(\theta)\\ \sin(\theta) & \cos(\theta) \end{bmatrix}.
\end{align*}
$$

Thus, $\Psi(z)$ should be thought of as scaling (or amplification) by its modulus and rotating/twisting by its argument.  Thus, the operation will be called an amplitwist<span class="footnote-trigger" title="A terminology lifted from Visual complex analysis by Tristan Needham"><sup>[*]</sup></span>.  

Further notice that we can write
$$
\begin{align*}
\Psi(z) &= \begin{bmatrix} r & 0\\ 0 & r \end{bmatrix}\begin{bmatrix} \cos(\theta) & -\sin(\theta)\\ \sin(\theta) & \cos(\theta) \end{bmatrix}\\
&= \Psi(r)\Psi(\cos(\theta)+i \sin(\theta))\\
&= \Psi(r(\cos(\theta)+i \sin(\theta))).
\end{align*}
$$
As $\Psi$ is injective, this implies that $z = r(\cos(\theta)+i \sin(\theta))$.



Let $z_1 = a_1 + i b_1$ and $z_2 = a_2 +i b_2$.  Further let $|z_i| = r_i$ and $arg(z_i) = \theta_i$  Then $\Psi(z_1)\circ \Psi(z_2)$ is the linear map that scales by the product $r_1 r_2$ and be rotates by $\theta_1+\theta_2$.  More precisely, 
$$\Psi(z_1 z_2) = \Psi(z_1)\Psi(z_2) = r_1 r_2 \begin{bmatrix} \cos(\theta_1 + \theta_2) & -\sin(\theta_1 + \theta_2)\\ \sin(\theta_1 + \theta_2) & \cos(\theta_1 + \theta_2) \end{bmatrix}.$$

If you know the formula for $\cos(\theta_1 + \theta_2)$ and $\sin(\theta_1 + \theta_2)$, then you can also verify this algebraically by explicitly verifying
$$\begin{bmatrix} \cos(\theta_1) & -\sin(\theta_1)\\ \sin(\theta_1) & \cos(\theta_1) \end{bmatrix}\begin{bmatrix} \cos(\theta_2) & -\sin(\theta_2)\\ \sin(\theta_2) & \cos(\theta_2) \end{bmatrix}= \begin{bmatrix} \cos(\theta_1 + \theta_2) & -\sin(\theta_1 + \theta_2)\\ \sin(\theta_1 + \theta_2) & \cos(\theta_1 + \theta_2) \end{bmatrix}.$$
On the other hand, if the geometric reasoning makes sense to you, the above equation can be used to find the formula for $\cos(\theta_1 + \theta_2)$ and $\sin(\theta_1 + \theta_2)$.  In fact, pretty much all trigonometric formulae can be proved using complex numbers.  Check out Page 14 in Visual complex analysis by Tristan Needham for more details. 

More importantly, the injectivity of $\Psi$ tells us that $z_1 z_2 = r_1 r_2 (\cos(\theta_1 + \theta_2) + i \sin(\theta_1 + \theta_2))$.  That is, the product of two complex numbers is the complex number whose modulus is the product of the modulus of those two complex numbers and its argument is the sum of the arguments of the two complex numbers.  We will see more implications of this observation in the next class.   

Recall, that we defined geometry as set of properties that are preserved under some collection of maps.  And, we would identify two objects if there is a map in this collection that takes one to another.  Now we would want any identification to satisfy the following conditions:


- Each element should be identified with itself.  In other words, the collection should have a map that takes an element to itself.  Although, it is possible to attain this in an extremely complicated way, the property would surely be guaranteed if the identity map belongs to the collection.
- If $x$ is identified with $y$, then $y$ should be identified with $x$.  In other words, if there is a function $f$ that takes $x$ to $y$, there is another function that takes $y$ to $x$.  This would be guaranteed if every element of the collection is invertible and if $f$ belongs to the collection so does $f^{-1}$..
- If $x$ is identified with $y$ and $y$ is identified with $z$, then, $x$ is identified with $z$.  This would be guaranteed if given $f,g$ in the collection, $f\circ g$ belongs to the collection.  In other words, function composition is a binary operation on this collection of maps.    


And these considerations motivate the concept of a \href{https://en.wikipedia.org/wiki/Group_(mathematics)}{group} defined below. 


<div class="academic-env env-definition">
<span class="env-label">Definition 1.11</span>

(Group)
A group is a set $G$ equipped with a binary operation, that is, a function $+:G\times G\to G$ satisfying the following conditions:

- For all $x,y,z\in G$, $x+(y+z) = (x+y)+z$
- There exists a special element denoted by $0$ such that $x+0 = x = 0+x$.
- For every $x\in G$, there exists a $y$ in $G$ such that $x+y = 0 = y+x$.


</div>


In fact, the famous \href{https://en.wikipedia.org/wiki/Cayley%27s_theorem}{Cayley's theorem} tells us that this is a perfect way to think of groups as all groups are isomorphic to some collection of maps.  An isomorphism is a map between two groups $(G,+)$ and $(H,.)$ is a bijective function $\varphi:G\to H$ such that $\varphi(g_1+g_2) = \varphi(g_1).\varphi(g_2)$ (that is the algebraic structure is preserved).   


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.28</span>

Let $\mathcal{A}$ be the collection of affine maps.  Show that $(\mathcal{A},\circ)$ forms a group.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.29</span>

Show that $(O(2),.)$ and $(SO(2),.)$ (where $.$ represents matrix multiplication) form groups.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.30</span>

Define an operation $\overline{+}:[0,2\pi)\times [0,2\pi)\to [0,2\pi)$ as 
$$\overline{+}(a,b) = \begin{cases}
a + b \text{ if } a+b < 2\pi\\
a + b - 2\pi \text{ otherwise}
\end{cases}$$
Show that $([0,2\pi),\overline{+}$ is a group.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.31</span>

Show that $(SO(2),.)$ is isomorphic to $([0,2\pi),\overline{+})$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.32</span>

Let $\mathbb{R}_{>0} = \{x\in \mathbb{R} | x>0\}$.  Show that $(\mathbb{R}_{>0},\times)$ forms a group.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.33</span>

Show that $(\mathbb{R}_{0}\times [0,2\pi),*)$ where $*$ is the operation defined as $(r_1,\theta+1)*(r_2,\theta_2) = (r_1 r_2, \theta_1+\theta_2)$.  This is an example of a \href{https://en.wikipedia.org/wiki/Direct_product_of_groups}{direct product of groups} and is also represented as $(\mathbb{R}_{>0},\times)\times ([0,2\pi),\overline{+})$.

</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.34</span>

Show that $(\mathbb{C}\setminus \{0\},\times)$ is a group.

</div>


Let us now revisit what we learnt towards the end of last class.  We defined a map $\Psi: \mathbb{C} \to \mathcal{A}$ and saw that 
$$
\begin{align*}
\Psi(z) &= \begin{bmatrix} r & 0\\ 0 & r \end{bmatrix}\begin{bmatrix} \cos(\theta) & -\sin(\theta)\\ \sin(\theta) & \cos(\theta) \end{bmatrix}\\
&= \Psi(r)\Psi(\cos(\theta)+i \sin(\theta))\\
&= \Psi(r(\cos(\theta)+i \sin(\theta))).
\end{align*}
$$
And as $\Psi$ is injective, this implies that $z = r(\cos(\theta)+i \sin(\theta))$ where $r\in \mathbb{R}_{>0}$ and $\theta \in [0,2\pi)$.  


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.35</span>

Show that $F:(\mathbb{C}\setminus \{0\},\times)\to (\mathbb{R}_{>0},\times)\times ([0,2\pi),\overline{+})$ defined as $F(z) = (|z|,arg(z))$ is an isomorphism.

</div>


Notice that this matches with the \href{https://en.wikipedia.org/wiki/Polar_coordinate_system}{polar coordinate system} you might have studied on $\mathbb{R}^2$.  Addition had a simple representation in cartesian coordinates and multiplication now has a simple representation in polar coordinates.  

The vocabulary we have developed so far lets us summarize what we have studied so far in three lines:


- $\mathbb{C}$ and $\mathbb{R}^2$ are both vector spaces and $L:\mathbb{C} \to \mathbb{R}^2$ defined as $L(a+i b) = (a,b)$ is an isomorphism.  We can use this isomorphism to define a multiplication on $\mathbb{R}^2$.
- Let $\mathcal{T}$ be the collection of all translations of $\mathbb{R}^2$.  And let the map $\Phi:(\mathbb{C},+) \to (\mathcal{T},\circ)$ be the map that takes the complex number $a+i b$ to the map $T_{a + i b}:\mathbb{R}^2 \to \mathbb{R}^2$ defined as $T_{a+i b}(x,y) = (x+a,y+b)$.  Then, $\Phi$ is an isomorphism.
- $F:(\mathbb{C}\setminus \{0\},\times)\to (\mathbb{R}_{>0},\times)\times ([0,2\pi),\overline{+})$ defined as $F(z) = (|z|,arg(z))$ is an isomorphism.


### Conjugate
Let  $z = a+ i b$.  We say $a$ is the real part of $z$ and write $a = Re(z)$.  Similarly, we say $b$ is the imaginary part of $z$ and write $b = Im(z)$.  Also, note that addition and multiplication corresponded to affine maps.  But all these maps had a positive determinant (we call such a map  an orientation-preserving map).  On the other hand, any reflection has a negative determinant (that is, the map is orientation reversing).  So, it is clear that we cannot express reflections using addition and multiplication.  You have encountered a unary operation on the complex plane that corresponds to reflection with respect to $x$-axis, namely, conjugation.  


<div class="academic-env env-definition">
<span class="env-label">Definition 1.12</span>

Given a complex number $z = a + i b$, the complex conjugate of $a + i b$, denoted as $\overline{a+i b}$, is the complex number $a - i b$.

</div>


Clearly, conjugation is related to reflection as the map that sends $(a,b)$ to $(a,-b)$ corresponds to reflection about $x$-axis.  Furthermore, the following exercises explains how to reflect about any other line using reflection about $x$-axis, rotations, and translations.  


<div class="academic-env env-xca">
<span class="env-label">Exercise 1.36</span>

Construct the linear map that gives the image under the reflection of a line passing through the origin. Let the line $l$, pass through the origin and make angle $\theta$ to the positive $X$ axis.
We break this up into 3 steps and write the matrix corresponding to each linear transformation

- Step 1.  Find the matrix corresponding to the function that maps the line $l$ to $X$ axis. Remember that you have to have to rotate by angle $\theta$ clockwise.
- Step2. Now reflect along $X$ axis. Find the matrix such that a point gets reflected along $X$ axis. 
- Step 3: Now find the matrix that maps the $X$ axis back to the origin line $l$.
- Step 4: Compose these matrices to find the matrix corresponding to the function that reflect a point along line $l$.


</div>



<div class="academic-env env-xca">
<span class="env-label">Exercise 1.37</span>

Explain how to think of a function that reflects a point about a line $l$ that does not pass through the origin.

</div>


So, addition, multiplication and conjugation together capture translation, rotation, dilation and reflection.  Thus, all aspects of Euclidean geometry can be captured using these three operations.  Moreover, this allows us to view the inner product from the last class in another way!  Given two complex numbers $z = a+i b$ and $w = c+i d$.  Then $\overline{z}w = (ac+bd) + i(ad-bc)$.  Notice that $Re(\overline{z}w) = \langle z,w \rangle$.  And, if you have studied \href{https://en.wikipedia.org/wiki/Cross_product}{cross product} on $\mathbb{R}^2$, you will notice $|Im(\overline{z}w)| = \Vert (a,b)\times (c,d) \Vert$ and the sign captures whether this vector is pointing up or down.  Thus, all these ideas are captured by the operations of complex addition, multiplication and conjugation.  



\begin{mdframed}[backgroundcolor=blue!20, frametitle={Did you know?}]
Some natural numbers can be expressed as a sum of two squares.  Some simple examples are $2 = 1^2 + 1^2$, $25 = 3^2 + 4^2$, and $100 = 8^2 + 6^2$.  it is natural to ask the question:

**Question: **Given two natural numbers, both expressible as a sum of two squares, is the product also expressible as a sum of two squares?  In other words, is the collection of all  natural numbers that can be expressed as a sum of two squares closed under multiplication?

If one is not lazy, it is quite elementary to solve this question.  Notice that if $n = a^2 + b^2$ and $m = c^2 + d^2$, then it is quite easy to check that $nm = (a^2 + b^2)(c^2+d^2) = (ac-bd)^2 + (ad+bc)^2$.  But, this result can be appreciated much more if we observe that if $n$ (and similarly $m$) is the sum of two squares, then $n$ (and similarly $m$) is the modulus of a complex number (both real and imaginary parts being integers - such complex numbers are called Gaussian integers).  Let $n = |z|$ and $m = |w|$, then $nm = |z||w| = |zw|$.  In other words, $nm$ is the modulus of the complex number $zw$.  Hence, it is the sum of two squares, namely, the sum of the squares of the real and imaginary parts of the complex number.  Thus, complex numbers help us understand this result in a much deeper sense.  Now one may ask:

**Question: ** Is the collection of natural numbers that can be written as the sum of three squares closed under multiplication?  

The answer to this question turns out to be no.  To see this, observe that $3 = 1^2 + 1^2 + 1^2$ and $5 = 0^2 + 1^2 + 2^2$.  But, we claim $3\times 5 = 15$ cannot be written as the sum of three squares.  First of all notice that if $15 = a^2 + b^2 + c^2$, then $a,b,c \leq 3$ as $4^2 = 16 > 15$.  Moreover, notice that if one of the three ($a$,$b$, or $c$) is equal to $3$, then the sum of the other two squares would become $15 - 9 =6$.  But, this is not possible.  So, $a,b,c \leq 2$.  But, then $a^2 + b^2 + c^2 \leq 2^2 + 2^2 + 2^2 = 12 < 15$.  Thus, we cannot find such $a$,$b$, and $c$.

Recall that we can define a norm on $\mathbb{R}^3$ quite analogous to how we defined a norm on $\mathbb{R}^2$.  More precisely, we can define $|(x,y,z)| = x^2 + y^2 + z^2$.  Thus, if we could define a multiplication on $\mathbb{R}^3$ such that

- If $v,w\in \mathbb{N}^3 \subset \mathbb{R}^3$, then $vw \in \mathbb{N}^3\subset \mathbb{R}^3$
- $|vw| = |v||w|$  

then, the answer to the second question should have been yes, just like the answer to the first question.  Thus, it is clear that we cannot define a multiplication on $\mathbb{R}^3$ satisfying both conditions.  But, what if we drop the first condition?  One may ask:

**Question: ** Can one define a multiplication on $\mathbb{R}^3$ such that $|vw| = |v||w|$?

Honestly, I do not know the answer to this question.  I believe the answer is no, but do not know how to prove it.  We certainly need the multiplication to satisfy some nice properties - as the answer to the following questions in yes.  

**Question: ** Can we define a field structure on $\mathbb{R}^3$?

This is because $\mathbb{R}^3$ has the same cardinality as $\mathbb{R}$.  In other words, there is a bijection from $\mathbb{R}^3$ to $\mathbb{R}$.  This bijection can be used to construct an addition and multiplication on $\mathbb{R}^3$ and that would turn $\mathbb{R}^3$ into a field isomorphic to $\mathbb{R}$.  

The field structure on $\mathbb{R}^2$ (or $\mathbb{C}$) we constructed was somewhat special.  We treat numbers of the form $a + 0i$ (or equivalently $(a,0)$) are real numbers.  The scalar multiplication by the real number $a$ (when we treat $\mathbb{R}^2$ or $\mathbb{C}$ as a vector space) matches with multiplication (as in the field operation) by the ``real number" $(a,0)$.  Thus, the vector space structure and the field structure are mutually compatible.  When this happens we say it forms an algebra.  If we demand all properties except commutativity of multiplication, we obtain a division algebra.  The famous \href{https://en.wikipedia.org/wiki/Frobenius_theorem_(real_division_algebras)}{Frobenius theorem} states that up to isomorphism there are only three finite dimensional division algebras - $\mathbb{R}$, $\mathbb{C}$ and Quaternions.  And this theorem makes me believe that if the multiplication is ``nice enough", the answer to Question ``Can one define a multiplication on $\mathbb{R}^3$ such that $|vw| = |v||w|$?" should be no .  The existence of Quaternions also implies that the answer to the following question is yes.

**Question: **Is the collection of natural numbers that can be written as the sum of four squares closed under multiplication?  


And I encourage you to explore the most general question in this line

**Question: ** Is the collection of natural numbers that can be written as the sum of $n$ squares closed under multiplication?  

%**Hint:**  Although, the only real division algebras are $\mathbb{R}$, $\mathbb{C}$ and Quaternions, the answer is not no for all numbers greater than $4$.  It is yes for some and no for others.  


\end{mdframed}


\begin{xcb}{Exercises}

- Let $z = 2+3\iota$ and $w = 5-6\iota$. Compute 
\begin{multicols}{2}

- $z-w$
- $z \times w$  
- $\frac{1}{z}$
- $\frac{z}{w}$

\end{multicols}
- Check which of the properties of a field hold for addition and multiplication of natural numbers ($\mathbb{N}$), integers ($\mathbb{Z}$), and rational numbers ($\mathbb{Q}$).
- Let $\mathbb{Z}[x]$ denote polynomials with integer coefficients and $\mathbb{R}[x]$ denote polynomials with real coefficients.  Check which of the properties of a field hold for addition and multiplication of elements in $\mathbb{Z}[x]$ and $\mathbb{R}[x]$.  
- Show that $\mathbb{Z}/3\mathbb{Z}$ is a field.
- Show that $\mathbb{Z}/4\mathbb{Z}$ is not a field.
- Show that $\mathbb{Z}/n\mathbb{Z}$ is a field if and only if $n$ is prime.
- Express $5-6\iota$ in polar coordinates.
- Represent the following graphically and justify your answers

- $\{z\in \mathbb{C} : |z- \iota| = 1\}$ 
- $\{z\in \mathbb{C} : |z- \iota| = |z-1|\}$
- $\{z\in \mathbb{C} : |z- (1+\iota)| = |z|\}$
- $\{z\in \mathbb{C} : arg(z) = \frac{\pi}{4}\}$
- $\{z\in \mathbb{C} : arg(z-i) = arg(z-1)\}$

- Compute $\Vert 1+i2 \Vert_p$ for $p = 1,2,3,\infty$.
- Suppose $u,v\in \mathbb{R}^2$ are two vectors such that $\Vert u\Vert = 2$, $\Vert u+v \Vert = 3$, and $\Vert u - v\Vert = 1$.  Find $\Vert v\Vert$.  
- Give an example or prove the non-existence of a function $f: \mathbb{R}^2 \times \mathbb{R}^2 \to \mathbb{R}$ that is

- symmetric and bilinear but not positive definite
- bilinear and positive definite but not symmetric
- symmetric and positive definite but not bilinear

- Give an example or prove the non-existence of a function $f:\mathbb{R}^2 \to \mathbb{R}$ that

- is homogeneous and satisfies the triangle inequality but is not positive definite
- is positive definite and satisfies the triangle inequality but is not homogeneous
- is homogeneous and positive definite but does not satisfy the triangle inequality 

- Give an example or prove the non-existence of a function $f:\mathbb{R}^2\times \mathbb{R}^2 \to \mathbb{R}$ that

- is symmetric and satisfies the triangle inequality but is not positive
- is positive and satisfies the triangle inequality but is not symmetric
- is positive and symmetric but does not satisfy the triangle inequality 


- In class, we saw that given an inner product $\langle , \rangle$ on a vector space $V$, there is an associated norm.  But, not every norm is induced by an inner product in this manner.  Suppose we knew that $\Vert \Vert$ is induced by some inner product.  Can you discover this inner product?  More precisely, can you express $\langle u,v \rangle$ as some function of $\Vert u \Vert$, $\Vert v\Vert$ $\Vert u+v \Vert$, and $\Vert u-v \Vert$.

- Given an $r$, show that there exists an $s$ such that
\begin{multicols}{2}

- $B_{d_1}(x,s) \subset B_{d_2}(x,r)$
- $B_{d_2}(x,s) \subset B_{d_1}(x,r)$
- $B_{d_1}(x,s) \subset B_{d_{\infty}}(x,r)$
- $B_{d_{\infty}}(x,s) \subset B_{d_1}(x,r)$
- $B_{d_{\infty}}(x,s) \subset B_{d_2}(x,r)$
- $B_{d_2}(x,s) \subset B_{d_{\infty}}(x,r)$

\end{multicols}

- Use the previous exercise to show that, if $p,q\in \{1,2,\infty\}$, a set $U$ is open in $(\mathbb{C},d_p)$ iff $U$ is open in $(\mathbb{C},d_q)$.

- If $d(x_n,x)\to 0$ and $d(x_n,y)\to 0$, then show that $x=y$.  That is, the limit of a sequence is unique.

- Show that, in the metric space $(\mathbb{C},d_1)$, a sequence $z_n = x_n + iy_n$ converges to a point $z = x+iy$ iff $x_n$ converges to $x$ and $y_n$ converges to $y$.

- Show that, in the metric space $(\mathbb{C},d_{\infty})$, a sequence $z_n = x_n + iy_n$ converges to a point $z = x+iy$ iff $x_n$ converges to $x$ and $y_n$ converges to $y$.

- Show that in any metric space $(X,d)$ a sequence $x_n$ converges to a point $x$ iff for every open set $U$ in $X$, there exists an $N\in \mathbb{N}$ such that $x_n\in U$ for all $n\geq N$.  

- Use GeoGebra/Desmos to visualise the open balls in $(\mathbb{C},d_p)$ where $p = 3,4,5$.  

- Check the convergence of the following sequences:
\begin{multicols}{2}

- $i^n$
- $\frac{1}{n} + i\frac{-1}{n}$
- $\frac{1}{n} + i(-1)^n$
- $(1+i)^n$
- $\frac{1}{n} + i (-1)^n$
- $\frac{2^n}{n}$
- $z^n$ where $\vert z\vert <1$
- $z^n$ where $\vert z\vert >1$
- $z^n$ where $\vert z \vert = 1$, but $z\neq 1$

\end{multicols}

- Give an example of the following if they exist.  Else, explain why such an example does not exist.  

- A sequence $z_n$ such that $\vert z_n\vert$ converges, but $z_n$ does not.
- A sequence $z_n$ such that $z_n$ converges, but $\vert z_n\vert$ does not.
- A sequence $z_n$ such that $\vert z_n\vert < N$ for some $N\in \mathbb{N}$, but $z_n$ does not converge.
- A sequence $z_n$ such that $\vert z_n\vert < N$ for some $N\in \mathbb{N}$, but $z_n$ does not have any convergent subsequence.
- A metric $d:X\times X \to \mathbb{R}$ such that $d(x,y)$ takes exactly $3$ distinct values.  
- A metric on $\mathbb{C}$ where the open balls are ellipses but not circles.
- A metric on $\mathbb{C}$ where the open balls are rectangles but not squares.
- A metric on $\mathbb{C}$ where the open balls are parellelograms but not rectangles/squares.


- Show that arbitraty interstection of closed sets is closed.  Show that finite union of closed sets is closed.  

- Let $d_E:\mathbb{R} \times \mathbb{R} \to \mathbb{R}$ be the function $d_E(x,y) = \vert x-y\vert$.  Show that $d_E$ is a metric.

- Show that a subset $U$ of $(\mathbb{R},d_E)$ is open iff it is a **disjoint** union of open intervals. (Note that every open interval is an open ball)

- Consider the metric space $(\mathbb{R}^2,d_2)$.  Clearly $\mathbb{R}^2$ is an open subset.  Show that $\mathbb{R}^2$ cannot be written as a **disjoint** union of open balls.  What happens if we consider $(\mathbb{R}^2,d_{\infty})$ instead?

- Which of the following subsets of $\mathbb{C}$ are open? Which of the following subsets of $\mathbb{C}$ are closed? Prove your claims
\begin{multicols}{2}
[(i)]
- $\mathbb{C}$
- $\mathbb{N}$
- $\{x + i 0 : 0\leq x \leq 2\}$
- $\{z\in \mathbb{C}: 2 < \vert z\vert < 3\}$
- $\left\{x+ i\sin\left(\frac{1}{x}\right): x\in \mathbb{R}\right\}$
- $\{e^{in}:n\in \mathbb{N}\}$

\end{multicols}

- **(2 marks)** Find the real and imaginary parts of $\left(\frac{1}{\sqrt{2}}+i\frac{1}{\sqrt{2}}\right)^{100}$.
%from lang


- Is the collection of natural numbers that can be written as the sum of two cubes closed under multiplication?
%During class, I said I do not know the answer to this question.  However, the answer turned out to be really easy.  Notice that $2 = 1^3 + 1^3$ and $9 = 1^3 + 2^3$.  But, $18$ cannot be written as a sum of two cubes.  This is because $3^3 > 18$ and $2^3 + 2^3 < 18$.  Of course, the answer to the question will be different if we allow cubes of integers!  And I urge you to explore the possibilities.



\end{xcb}

</details>