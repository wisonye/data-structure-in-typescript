/**
 * The `Node` to contain data of `T` and a pointer to
 * the next `Node`
 */
type Node<T> = {
    data: T
    next?: Node<T>
}

type Option<T> = T | undefined
type OptionNode<T> = Node<T> | undefined

/**
 *
 */
export interface SingleLinkedList<T> {
    size: () => number
    getHead: () => Option<T>
    getTail: () => Option<T>
    popHead: () => Option<T>
    popTail: () => Option<T>
    insertAtHead: (data: T) => void
    append: (data: T) => void
    contain: (dataToCheck: T, compareFn?: (data1: T, data2: T) => boolean) => boolean
    printList: () => void
    getListString: () => string
}


/**
 * Create a `SingleLinkedList` instance which to hold a bunch of data
 * with the type of `T`
 */
export const createSingleLinkedList = <T>(): SingleLinkedList<T> => {

    // private attributes in closure snapshot, not allowed to access
    // from outside world
    let size: number = 0
    let head: OptionNode<T> = undefined
    let tail: OptionNode<T> = undefined

    // The list instance to return
    const list: SingleLinkedList<T> = {
        size: (): number => size,

        /**
         * Get the head value
         */
        getHead: (): Option<T> => {
            return head ? head.data : undefined
        },

        /**
         * Get the tail value
         */
        getTail: (): Option<T> => {
            return tail ? tail.data : undefined
        },

        /**
         * popup the `head`
         */
        popHead: (): Option<T> => {
            if (!head) { return undefined; }

            const popValue = head.data
            head = head.next
            size--;

            if (size <= 0) { tail = undefined }
            return popValue;
        },

        /**
         * popup the `tail`
         */
        popTail: (): Option<T> => {
            if (!tail) { return undefined; }

            // Get the `previous of tail` node
            let prevTail = head
            while (prevTail && prevTail.next != tail) { prevTail = prevTail.next }

            const popValue = tail.data

            // Update the `previous of tail` node's `next` to `undefined` to cut
            // the original tail
            if (prevTail) {
                prevTail.next = undefined
                tail = prevTail
            }
            else {
                // if `previous of tail` node is `undefined`, that means empty list
                head = undefined
                tail = undefined
            }

            size--;
            return popValue
        },

        /**
         * Insert at `head`
         */
        insertAtHead: (data: T) => {
            const newTailNode: Node<T> = { data, next: undefined }

            if (!head) {
                head = newTailNode
                tail = newTailNode
            } else {
                newTailNode.next = head
                head = newTailNode
            }
            size++
        },

        /**
         * Append to the end
         */
        append: (data: T) => {
            const newTailNode: Node<T> = { data, next: undefined }

            if (!tail) { head = newTailNode }
            else { tail.next = newTailNode }

            tail = newTailNode
            size++;
        },

        /**
         * Check whether contains the `dataToCheck` or not.
         *
         * If `compareFn` not provided, then just compare the data with `===`
         * operator.
         */
        contain: (dataToCheck: T, compareFn?: (data1: T, data2: T) => boolean): boolean => {
            if (!head) { return false }

            let currentNode: Option<Node<T>> = head
            let isEqual = false

            while (!isEqual) {
                if (!currentNode) { break; }

                isEqual = compareFn ? compareFn(currentNode.data, dataToCheck) : Boolean(currentNode.data === dataToCheck)
                // console.log(`currentNode.data: ${currentNode.data}, dataToCheck: ${dataToCheck}, isEqual: ${isEqual}`)
                if (isEqual) { return true }

                currentNode = currentNode.next
            }

            return false
        },

        /**
         * Walk through the list and print it out
         */
        printList: (): void => {
            let currentNode = head
            if (!currentNode) {
                console.log(`'SingleLinkedList' is empty.`)
                return;
            }

            const listContent: Array<string> = []

            while (currentNode) {
                listContent.push(JSON.stringify(currentNode.data))
                currentNode = currentNode.next
            }

            // Join all node with ` --> `
            console.log(`'SingleLinkedList' (${size} elements):\n\t`, listContent.join(` --> `))

            // Join all node with the newline
            // console.log(`'SingleLinkedList' (${size} elements):\n\t`, listContent.join(`,\n\t `))
        },

        /**
         * Walk through the list and return the entire content string
         */
        getListString: (): string => {
            let currentNode = head
            if (!currentNode) {
                return `empty list`
            }

            const listContent: Array<string> = []

            while (currentNode) {
                listContent.push(JSON.stringify(currentNode.data))
                currentNode = currentNode.next
            }

            // Join all node with ` --> `
            return `(${size} elements): ${listContent.join(` --> `)}`
        }
    }

    return list
}

/**
 * Dev test
 */
const createIntTestList = () => {
    const testList = createSingleLinkedList<number>();
    testList.append(1)
    testList.append(2)
    testList.append(3)
    testList.append(4)
    return testList
}

const testIntList = () => {
    const testList = createIntTestList()

    testList.printList()
    console.log(`testList head: ${JSON.stringify(testList.getHead())}`)
    console.log(`testList tail: ${JSON.stringify(testList.getTail())}`)

    testList.insertAtHead(0)
    testList.insertAtHead(-1)
    testList.append(5)
    testList.append(6)

    testList.printList()
    console.log(`testList head: ${JSON.stringify(testList.getHead())}`)
    console.log(`testList tail: ${JSON.stringify(testList.getTail())}`)
}

// testIntLis= t()
