import { SingleLinkedList, createSingleLinkedList } from "../linked_list/single_linked_list";

type Option<T> = T | undefined

/**
 *
 */
export interface LinkedListStack<T> {
    size: () => number
    pop: () => Option<T>
    peek: () => Option<T>
    push: (data: T) => void
    contains: (dataToCheck: T, compareFn?: (data1: T, data2: T) => boolean) => boolean
    isEmpty: () => boolean
    printStack: () => void
    getStackString: () => string
}

/**
 *
 */
export const createLinkedListStack = <T>(): LinkedListStack<T> => {

    // private attributes in closure snapshot, not allowed to access
    // from outside world
    let innerList: SingleLinkedList<T> = createSingleLinkedList<T>();

    // The stack instance to return
    const stack: LinkedListStack<T> = {
        size: (): number => innerList.size(),

        pop: (): Option<T> => innerList.popTail(),

        peek: (): Option<T> => innerList.peekTail(),

        push: (data: T) => innerList.append(data),

        contains: (dataToCheck: T, compareFn?: (data1: T, data2: T) => boolean): boolean => {
            return innerList.contains(dataToCheck, compareFn)
        },

        isEmpty: (): boolean => innerList.size() <= 0,

        printStack: () => innerList.printList(),

        getStackString: (): string => innerList.getListString()
    }

    return stack;
}
