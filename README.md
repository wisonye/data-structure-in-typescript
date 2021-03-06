# Data structure implementation in `TypeScript`

## What is `Abstract Data Type (ADT)`

An `Abstract Data Type (ADT)` is an abstraction of a data structure which provides the only interface to which data structure must adhere to.

The interface doesn't give any specific details about how something should be implemented or in what programming language.

For example:

| **Abstraction** (ADT) | **Implementation** (DS)
|-------------------|--------------------
| List | Dynamic list </br> LinkedList
| Queue | LinkedList based Queue </br> Array based Queue </br> Stack based Queue
| Map | TreeMap</br> HashMap


## Complexity Analysis

- How much `time` does this algorithm need to finish?
- How much `spcace` does this algorithm need for the computation?

That's what `Big-O` notation for:

`n` - The size of the input.
Complexity ordered in form smallest to largest:

| Complexity | Notation
|-------------: | --------------
| Constant Time| **O(1)**
| Logarithmic Time| **O(log(n))**
| Linear Time| **O(n)**
| Linearithmic Time| **O(nlog(n))**
| Quadric Time| **O(n²)**
| Cubic Time| **O(n³)**
| Exponential Time| **O(bⁿ) b > 1**
| Factorial Time| **O(n!)**

</br>

## The common data structure and use case

### `LinkedList` 

- Concept:

    A `LinkedList` is a sequential list of nodes that hold data which point to other nodes also containing data.

    **Head** --> Node ---> Node --> **Tail**

    - `Head`: the first node in the list.
    - `Tail`: the last node in the list.
    - `Pointer`: Reference point to another node.
    - `Node`: An object containing data and pointer(s).

    </br>

    - `SingleLinkedList`: Each node only hold the reference to the next node.
    - `DoubleLinkedList`: Each node holds the reference to the next node and the previous node at the same time.
    
    </br>

- use cases:

    - Used in many `List`, `Queue` and `Stack` implementation.
    - Great for creating circular lists.
    - Used in separated chaining, which is present certain `hasttable` implementations to deal with hashing collisions.
    - Often used in implementation of adjacency list for graphs.

    </br>

- Props and cons:

    | |Props | Cons
    |-----: | ---- | -------
    | **SingleLinkedList** | _Use less memory_</br>_Simpler implementation_ | _Cannot easily access previous element_
    | **DoubleLinkedList** |_Can easily access backwards_ | _Takes 2X memory_

</br>

- Complexity

    | |SingleLinkedList | DoubleLinkedList
    |-----: | ---- | -------
    | **Search** | **O(n)** | **O(n)**
    | **Insert at head** |**O(1)** | **O(1)**
    | **Insert at tail** |**O(1)** | **O(1)**
    | **Remove at head** |**O(1)** | **O(1)**
    | **Remove at tail** |**O(n)** | **O(1)**
    | **Remove in middle** |**O(n)** | **O(n)**

- Sample:

    - [single_linked_list.ts](https://github.com/wisonye/data-structure-in-typescript/tree/master/src/single_linked_list.ts)

        Run that test with the following command:

        ```bash
        # Live coding for `single_linked_list.ts`
        npm run single-linked-list-dev

        # Unit test
        npm run test

        # Create single_linked_list instance
        #   ✓ Should create valid 'SingleLinkedList' instance

        # Test integer list
        #   ✓ Should create valid Integer 'SingleLinkedList' instance with the correct size
        #   ✓ Integer list pop head should work correctly
        #   ✓ Integer list pop tail should work correctly
        #   ✓ Integer list contain should work correctly

        # Test Person list
        #   ✓ Should create valid Person 'SingleLinkedList' instance with the correct size
        #   ✓ Person list pop head should work correctly
        #   ✓ Person list pop tail should work correctly

        # 8 passing (9ms)
        ```

</br>

<hr>

### `Stack`

- Concept:

    A `Stack` is a one-ended linear data structure which models a real-world stack by having two primary operations:

    ```
    Push (on top)  Pop (from top)
       ↘            ↗
         ↘        ↗
       ------------- 
      | *********** |
       ------------- 
    ```


    - `Push`: add the element to the end of the stack.
    - `Pop`: remove the last element from the stack.

    </br>

    It's a `Last-in-first-out (LIFO)` model.

- use cases:

    - Undo mechanism
    - Compiler syntax checking and parsing for the matching symbols
    - Model a pile of books and plates
    - Used behind the scenes to support recursion by keeping track of previous function call
    - Do a `Depth First Search (DFS)` on a graph

- Complexity

    | Complexity | Notation
    |----------: | --------
    | Pushing | **O(1)**
    | Poping | **O(1)**
    | Peeking | **O(1)**
    | Searching | **O(n)**
    | Size | **O(1)**


