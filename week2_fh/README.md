# Lektion 2 - 27/09/2022

## Scopes
- without
    - x = ...
    - mutable, global scope
    - **DO NOT USE**
- var
    - var x = ...
    - mutable, "hoisted" scope
    - **DO NOT USE**
- let
    - let x = ...
    - mutable, local scope
- const
    - const x = ...
    - immutable, local scope
    - **use as default** -> Change when needed

<br>

---

## IIFE - Immediately Invoked Function Expression
### Standard notation
`````js
    function foo(){
        let x = 0;
        document.writeln(String(x));
    }
    foo();
`````
### IIFE notation
`````js
    (function foo() {
        let x = 0;
        document.writeln(String(x));
    })()
`````

### IIFE notation inkl. Fat Arrow notation
`````js
    (() => {
        let x = 0;
        document.writeln(String(x));
    })()
`````
---
<br>

## Lambda Calculus
`````js
    const id = x => x;
    λ x . x
`````
### Alpha Translation | Rename Parameter
`````js
    const id = x => x
    const id = y => y
`````

### Beta Reduction | Apply Argument
1.  Reduction of a function
2.  Equivalent refactoring
3.  Insert "id" for "f"
4.  Insert "1" for "x"
`````js
    (f => x => f(x))(id)(1)
    (     x => id (x))  (1)
    (          id (1))
    (x => x (1))
    1
`````
### Eta Reduction | Cancel Parameter
-   If rightmost Parameter equals last Parameter it can be cancled

`````
    x => y => plus(x)(y)
    x =>      plus(x)
              plus
`````

