# Introduction



<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">1.1 What is Discrete Mathematics?</summary>



Discrete mathematics is not a very well-defined term.  It was originally started as a computer science course (in the 1980s) and was a potpourri of all the mathematics a computer science student would require.  These topics included the study of objects like natural numbers, lists, trees, and graphs.  The English word discrete means *individually separate and distinct*. As the idea of *next* natural number and *previous* natural number is clear, the set of natural numbers can be called discrete.  Notice that we do not have a notion of *next* rational number.

In my view, a unifying theme is the use of recursion/induction.  Natural numbers, lists, and trees are *recursively defined*.  Don't worry, you are not expected to appreciate the previous line, as this appreciation is one of the key goals of this course.   I don't want to talk much about induction/recursion at the moment, as I believe that the best way to understand induction or recursion is as a consequence of the structure of the object under study.  The structure of natural numbers, lists, trees, etc allow us to define a form of induction (called **structural induction**)<span class="footnote-trigger" title="Recall, that the theorems of calculus are a consequence of the topological structure of the set of real numbers.  For instance, a continuous function from the set of rational numbers to the set of rational numbers may not satisfy the intermediate value problem."><sup>[*]</sup></span>.

Although I don't want to tell much about induction or recursion right now, let me quickly discuss two examples of recursive definitions.  The first and perhaps the most famous example of a recursive sequence is the Fibonacci sequence.  It is defined using the recursive relation 
$$
\begin{align*}
F(0) = 0\text{, } F(1)= 1 \text{, and } F(n) = F(n-1) + F(n-2)
\end{align*}
$$

This is the general structure of recursion. We define the value of a function (in this case, on natural numbers) at a point by expressing it in terms of the value at *previous* points.  I can give another example, which is a bit more personal.  Some of you may know that my name is Divakaran Divakaran because my father's name (and my grandfather's name) is also Divakaran.  To understand how this happened, you need to know some rules of naming that we follow:

- The first son gets the name of his father's father.
- The second son gets the name of his mother's father.
- The third son gets the name of his father.

Now that you know these rules<span class="footnote-trigger" title="Similar rules apply for women as well.  The first daughter gets the name of her father's mother.  The second daughter gets the name of her mother's mother.  The third daughter gets the name of her mother."><sup>[*]</sup></span>.  Can you guess what could have happened?  Yes, my father is his father's third son!  Thus, he got his father's name, and I got my father's father's name.  In fact, my first son, his first son, etc will also continue to be Divakaran.  

If I also tell you that my great grandfather's name is Chithrabhanu<span class="footnote-trigger" title="Notice that Divakaran and Chithrabhanu are both names of the Sun"><sup>[*]</sup></span> and that my grandfather is my great grandfather's first son, then you know my grandfather's grandfather is Divakaran, his name father was Chithrabhanu, his father is Divakaran, his father is Chithrabhanu, and so on<span class="footnote-trigger" title="People are often immediately concerned that there would be a lot of confusion due to many people sharing the same name.  This was traditionally not a problem, as primogeniture (only the first son and his lineage will belong to the family) was strictly followed."><sup>[*]</sup></span>.  

Notice that the rules define a *map* from my family tree to the collection of strings, namely, individuals in my family tree are assigned names.  However, we would not typically call this a function as values are not defined for all elements of the domain.  For instance, the rule does not tell the name of my second son!  But, such *partial functions* are extremely useful, and we will keep using them in this course.

Coming back from the personal example, we will study a precisely defined structure called *tree* (as in family tree) and see that define recursive functions on these trees.  We can also prove theorems about trees using induction. In summary, the course is about:

- Recursively defined structures
- Inductive proofs




</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">1.2 Why use (functional) programming?</summary>


You have probably heard the quote
\begin{displayquote}
You have really understood something only if you can explain it to your grandmother
\end{displayquote}
This quote is often attributed to Einstein, but unclear if he said it.  Here, grandmother is a placeholder for someone who has not had the opportunity to learn it so far.  The word layman or the phrase ``the first person you meet on the streets" is also sometimes used.  Unfortunately, this is not very practical.  Richard Feynman is considered one of the greatest teachers, and he credits his father for sparking his interest in science.  He, too, believed that being able to explain in simple terms is a sign of true understanding.  I remember reading that he was, however, unable to explain his work to his father, which made him sad.  

Thus, people began to qualify the statement further.  The person to whom you are explaining should be interested, have some prerequisites, aptitude, and be willing to work hard, etc.  With the advent of computers, these devices seem to match most of the properties of this ideal student - a computer is an always motivated individual who is not at all lazy, does not need to sleep, has infinite time, etc.  So, we may say 
\begin{displayquote}
You have really understood something only if you can explain it to a computer<span class="footnote-trigger" title="I heard from a friend that Thurston said this, but he couldn't find a source."><sup>[*]</sup></span>
\end{displayquote}
So, in other words, one of the purposes of writing something in a form that can be understood by a computer is to clarify your own thought process to yourself.  So the first reason for using computer is to ensure that you have understood things.  

More importantly, a famous result known as the \href{https://en.wikipedia.org/wiki/Curry–Howard_correspondence}{Curry-Howard isomorphism} allows us to think of programs as proofs.  Although I cannot go very deep, let me talk a little about it.  Recall from your experience with Python that most objects have an associated type - integers, floats, booleans, strings, lists, etc.  A proposition is a statement that has an unambiguous truth value.  Each proposition can be thought of as a type.  The elements of this type are the proofs of this proposition.  Thus, a proposition is true iff it is non-empty.  Thus, proving a proposition is the same as producing an element of that type.  This is the idea behind modern automated theorem provers/checkers.  The most famous at the moment is \href{https://lean-lang.org}{Lean}, developed by Microsoft originally to verify programs.  But, as programs and proofs are not so different from each other, it can help us check proofs.  If you want a friendly introduction, try playing the \href{https://adam.math.hhu.de/#/g/leanprover-community/nng4}{Natural Number game}.  

We won't be discussing theorem provers/Lean in this course.  But, Lean is also a functional programming at heart, and I will take small detours to share some of the interesting ideas in this field as and when possible.  Imperative languages like C or Python prioritise iteration while functional programming prioritises recursion.  As recursion is central to our course, we will use a functional programming language.  The industry standard functional programming language is \href{https://www.haskell.org}{Haskell}.  We will use a light version of Haskell called GOFER, which has some pedagogic advantages.  GOFER is an acronym for good for equational reasons.  More precisely, we will use a slight modification of GOFER implemented by Rustom Modi, called PUGOFER.  It is called PUGOFER, as he was using it to teach when at Pune University.  He has justified the changes in his \href{http://www.the-magus.in/Publications/notation.pdf}{Notes on Notation}.



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">1.3 Setting up PUGOFER on your computer</summary>



I will now guide you through the PUGOFER setup on your computer, assuming you have a Windows computer.  If you are using a mac, most of the steps are similar, but if something does not work, reach out to me.  The installation guide for Linux uses can be found \href{https://github.com/pugofer/pug/blob/main/INSTALL.org}{here}.

A word of caution: please avoid spaces in your user name and folder names.  If there are spaces, it can lead to errors and cause significant trouble.  For example, although Divakaran D would be a better choice as a user name, it is better to use DivakaranD or just Divakaran.



**Step 1:** Download \href{https://code.visualstudio.com/docs/setup/windows}{VSCode} and install it in your computer.

**Step 2:**  Open VSCode.  The highlighted icon in a black ribbon on the left side of Figure **??** allows you to search for extensions for VSCode.  Click on that and search for pugofer.  You should be able to see the extension Pug (PUGofer) developed by Saurabh Kapoor.  Install this extension by clicking the install button.  Once you have installed the extension, you can close the window for the Pug Extension.



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_c1adf2acb89ccc696dfd93d9241a6074.png" alt="Figure" class="max-w-full h-auto" /></div>



**Step 3:** Click \verb|File > Open Folder|.

**Step 4:** Navigate to where you would like to save all your files.  In my computer, I have created a folder called \verb|C:\Users\DivakaranD\pugofer| for this purpose.   This is called the *path* to the folder.  Whenever you see \verb|<path>| or \verb|C:\Users\DivakaranD\pugofer|, replace it with the path to the folder on your computer.  

Open this folder.



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_8be0edec07d86e4b2fc75126e8117740.png" alt="Figure" class="max-w-full h-auto" /></div>



**Step 5:** Create a new file by clicking the highlighted icon in Figure **??** and give it the name Lecture1.gs



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_16cc028dee8be89be14ef2ea28cb9e5a.png" alt="Figure" class="max-w-full h-auto" /></div>



**Step 6:** We can define the function $f$ specified by $f(x) = x + 1$, in PUGOFER by 

\begin{lstlisting}[language=Haskell]
f.x = x + 1
\end{lstlisting}

Add this definition to the file and save it.  You can also use the shortcut \verb|Ctrl+S| to save quickly. 

**Step 7:** Press the *play* button highlighted in Figure **??** to run the currently open file, which is Lecture1.gs in this case.  



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_9371432eca9c8c063d689cab0d77cf33.png" alt="Figure" class="max-w-full h-auto" /></div>



If you could follow all these steps, then you have successfully set up PUGOFER on your computer.  You have also written your first functional program.  Congratulations!  Note, however, that this program was quite different from the usual \verb|print("Hello World")|.  Also, note that the definition of a function resembles the way we define functions in mathematics.  Most importantly, the sign \verb|=| is used for assignment in iterative programming languages like Python, but here we are using it for equality as we do in mathematics.     

Further notice that in Figure **??**, the VSCode window has three parts: Explorer, Editor (where you have defined the function $f$), and the Terminal.  The terminal can now be used as a computer, as shown in Figure **??**.  Notice that the interpreter not only evaluates the sum, product, difference, and power, but also tells us that the answer is an integer. In other words, you should read \verb|6:Int| as $6$ is of type \verb|Int|



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_47548439ecf111897a5f77335a860eb5.png" alt="Figure" class="max-w-full h-auto" /></div>



Sharing screenshots every time is quite cumbersome, so I will provide the code as 
\begin{lstlisting}[language=Haskell]
f.x = x + 1
\end{lstlisting}
and then also provide the computations in the terminal as
\begin{verbatim}
? 2+4
6 : Int
? f.3
4 : Int
\end{verbatim}



</details>
<details class="section-details mt-8">
<summary class="list-none cursor-pointer text-2xl font-bold text-primary-red border-b-2 border-primary-red/20 pb-1 mb-4 hover:border-primary-red/50 transition-colors">1.4 The task ahead</summary>



In PUGOFER, your primary job is to construct functions to solve a problem.  The computer will act as an evaluator or translator.  The user (you) writes all functions on a file with a .gs extension (Lecture1 in this case), where .gs is short for gofer script.  Definitions, as you would define mathematical functions, are expressed as equations between expressions.  During a session (in the terminal), expressions are submitted for evaluation; these expressions can contain references to the functions defined in the script.

Today, we will not worry too much about it, though.  Today's task is to just play around.  However, I want you to notice that if you try to add an integer to a float or two floats, you get an error.  The error tells you that there is a mismatch of type - namely \verb|+| is defined for integers and not for floats.    

\begin{verbatim}
? 2 + 2.5

ERROR: Type error in application
*** expression     : 2 + 2.5
*** term           : 2.5
*** type           : Float
*** does not match : Int

? 2.5 + 3.5

ERROR: Type error in application
*** expression     : 2.5 + 3.5
*** term           : 3.5
*** type           : Float
*** does not match : Int
\end{verbatim}

This problem can be partially solved if we use pug-standard instead of pug-simple. To change from pug-simple to pug-standard, click on the {} pug-simple in the bottom right corner as shown in Figure **??**.  Then search for pug-standard and select it.  



<div class="flex justify-center my-8 bg-white p-4 rounded-lg shadow-sm border border-stone-100"><img src="/images/tikz/figure_8b3cacd67cb33b25b1a03dd61699e073.png" alt="Figure" class="max-w-full h-auto" /></div>



If you press the run button again, you will be using pug-standard instead of pug-simple.  Now you will be able to add floats.  You can also shift back to pug-simple in the same fashion.  If you use pug-standard, the terminal should behave as follows:

\begin{verbatim}
? 2.5 + 3.5
6.0 : Float
? 2.5 + 3

ERROR: Type error in application
*** expression     : 2.5 + 3
*** term           : 2.5
*** type           : Float
*** does not match : Int
\end{verbatim}

We can now add two Floats, but we still can't add an Int and a Float.  Play around with these two newly acquired toys (as much as you can), and then we will dive deeper in our next class.  



</details>