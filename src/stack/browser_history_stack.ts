import { LinkedListStack, createLinkedListStack } from './linked_list_stack'

type Option<T> = T | undefined

/**
 *
 */
export interface BrowserHistoryStack<T> {
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
export const createBrowserHistoryStack = <T>(): BrowserHistoryStack<T> => {

    // private attributes in closure snapshot, not allowed to access
    // from outside world
    let innerStack: LinkedListStack<T> = createLinkedListStack<T>();

    // The stack instance to return
    const stack: BrowserHistoryStack<T> = {
        size: (): number => innerStack.size(),

        pop: (): Option<T> => innerStack.pop(),

        peek: (): Option<T> => innerStack.peek(),

        push: (data: T) => innerStack.push(data),

        contains: (dataToCheck: T, compareFn?: (data1: T, data2: T) => boolean): boolean => {
            return innerStack.contains(dataToCheck, compareFn)
        },

        isEmpty: (): boolean => innerStack.isEmpty(),

        printStack: () => innerStack.printStack(),

        getStackString: (): string => innerStack.getStackString()
    }

    return stack;
}
