---
title: Hello World!
date: "2021-12-13T22:12:03.284Z"
description: "Ever used a new language and started with a 'Hello World!' output? Find out its origin and a couple uses for it."
---

Known by 100% of all software engineers and coders, "Hello World!" is typically what is implemented to show the first sign of life after successfully implementing or installing a new computer program.

So in the spirit of this being my first blog post, it is only natural to start with "Hello World!"

## History ##

The first version of "Hello World!" was coined in Brian Kernigham’s 1972 book, _A Tutorial Introduction to the Language B_. In this book, the phrase "hi!" is output, because a character constant is limited to 4 ASCII characters. This phrase was later written in [C](https://www.cprogramming.com/) and lengthened to the full "Hello World!" in 1974 by a [Bell Labs](https://www.belllabs.com/) internal memo. After being formally published in the 1978 book _The C Programming Language_, programmers from all over have used it to confirm that their source code, compiler (or JVM, etc.), and configuration are all correct. 

## Implementation ##

"Hello World!" can be output with any programming language, which means that implementations of "Hello World!" can vary greatly. The differences for prevalent programming languages can vary in length and complexity. Take the _Assembly_ example below:

```bash 
    global _main
    extern  _GetStdHandle@4
    extern  _WriteFile@20
    extern  _ExitProcess@4

    section .text
_main:
    ; DWORD  bytes;    
    mov     ebp, esp
    sub     esp, 4

    ; hStdOut = GetstdHandle( STD_OUTPUT_HANDLE)
    push    -11
    call    _GetStdHandle@4
    mov     ebx, eax    

    ; WriteFile( hstdOut, message, length(message), &bytes, 0);
    push    0
    lea     eax, [ebp-4]
    push    eax
    push    (message_end - message)
    push    message
    push    ebx
    call    _WriteFile@20

    ; ExitProcess(0)
    push    0
    call    _ExitProcess@4

    ; never here
    hlt
message:
    db      'Hello, World', 10
message_end:
```


Considered a very low level programming language (meaning being closer to being written in 1's and 0's), these 17 lines of Assembly code can be compiled on a Windows machine to output "Hello World!".

On the opposite side of the spectrum, JavaScript is a modern programming language with a lot of modern functionality, such as console logging. This allows someone to output "Hello World!" with just a single line:

```js
console.log("Hello World");
```

This makes modern development and implementation of simple outputs such as "Hello World!" a much simpler task. 

With the perks of modern life, however, come people that just like to watch the world burn, hence the birth of a breed of programming languages that are intentionally made to be difficult. Take [Brainf***](https://en.wikipedia.org/wiki/Brainfuck) , for example. The following is an implementation of "Hello World!":

```brainfuck  
--<-<<+[
    +[
        <+>--->->->-<<<
    ]>
]
<<--.<++++++.<<-..<<.<+.>>.>>.<<<.+++.>>.>>-.<<<+.
```

Although Brainf*** is not a widely used programming language (and definitely not a serious one), it shows that even when people are just messing around, "Hello World!" is still as prevalent as ever. Those simple words could be the start of a new and exciting use of a programming language OR the start of many hours of frustration and combing through StackOverflow.


## Conclusion ##

In the end, "Hello World!" is a very prevalent and relevant tradition in the world of programming, and it does not seem to be going anywhere anytime soon. This is proof that even in this technological age, where everything changes almost all the time, there are still traditions from before the age of floppy disks.
