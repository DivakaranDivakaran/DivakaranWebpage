# Line Integrals and Cauchy's theorem

Let $U$ be an open set in $\mathbb{C}$ and $f:U\to \mathbb{C}$ be a (continuous) function.  We define the integral of $f$ along a differentiable curve $\gamma:[a,b]\to \mathbb{C}$ to be 
$$\int_{\gamma}f = \int_a^b f(\gamma(t))\gamma'(t)dt.$$
If we assume $f$ is ``reasonably nice" then the integral on the right hand side in the above equation is well defined.  In analysis, you might have studied that the continuity of $f$ is a sufficient condition.  


<div class="academic-env env-example">
<span class="env-label">Example 4.1</span>

Let $f:\mathbb{C}\to \mathbb{C}$ be the function $f(z) = z$ and let $\gamma:[0,1]\to \mathbb{C}$ be the function $\gamma(t) = t + it$.  Then, $\gamma'(t) = 1+i$ and 
$$\int_{\gamma} f = \int_0^1 (t+it)(1+i) = \int_0^1 0 dt + i\int_0^1 2t dt = 2i.$$

</div>



<div class="academic-env env-definition">
<span class="env-label">Definition 4.1</span>

We say a curve $\gamma:[a,b]\to \mathbb{C}$ is a reparametrisation of a curve $\beta:[c,d]\to \mathbb{C}$ if there exists a differentiable function $\varphi:[a,b]\to [c,d]$ such that $\gamma(t) = \beta(\varphi(t))$.

</div>



<div class="academic-env env-example">
<span class="env-label">Example 4.2</span>

The curve $\gamma:[0,1]\to \mathbb{C}$ defined as $\gamma(t) = t+it$ is a reparametrisation of the curve $\beta:[0,2]\to \mathbb{C}$ defined as $\beta(t) = \frac{t}{2} + i\frac{t}{2}$.  Define $\varphi:[0,1]\to [0,2]$ as $\varphi(t) = 2t$ and $\gamma(t) = \beta(\varphi(t))$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.1</span>

The integral of a function is independent of the parametrisation.  More precisely, if $\gamma:[a,b]\to \mathbb{C}$ is a reparametrisation of $\beta:[c,d]\to \mathbb{C}$ and $f:U\to \mathbb{C}$ is a function, then 
$$\int_{\gamma}f = \int_{\beta}f.$$

</div>



<div class="academic-env env-proof">
<details>
<summary class="env-label cursor-pointer list-none text-stone-500 hover:text-stone-800 transition-colors">Proof</summary>

Using Chain Rule, we see that 
$$
\begin{align*}
\int_{\gamma}f &= \int_a^b f(\gamma(t))\gamma'(t)dt =\int_a^b f(\beta(\varphi(t)))\beta\circ\varphi'(t)dt =\int_c^d f(\beta(s))\beta'(s)ds = \int_{\beta} f
\end{align*}
$$

</details>
</div>


We can easily generalise the definition to piece-wise differentiable curves. Let $U$ be an open set in $\mathbb{C}$ and $f:U\to \mathbb{C}$ be a continuous function.  Let $\gamma:[a,b]\to \mathbb{C}$ be a piece-wise differentiable curve.  That is there exists $a = a_0 < a_1 < \dots <a_n = b$ be such that $\gamma_i = \gamma|_{[a_i,a_i+1]}$ is differentiable.  Then
$$\int_{\gamma}f = \sum_{i=0}^{n-1}\left(\int_{\gamma_i}f\right) = \sum_{i=0}^{n-1} \left(\int_{a_i}^{a_{i+1}} f(\gamma(t))\gamma'(t)dt\right).$$


<div class="academic-env env-definition">
<span class="env-label">Definition 4.2</span>

A function $g:U\to \mathbb{C}$ is a called a primitive or anti-derivative of the function $f:U\to \mathbb{C}$ if $g'(z) = f(z)$ for all $z\in U$.

</div>



<div class="academic-env env-theorem">
<span class="env-label">Theorem 4.2</span>

Let $f:U\to \mathbb{C}$ be a continuous function such that $f$ h

</div>








</details>