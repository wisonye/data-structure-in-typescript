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
    append: (data: T) => void
    contain: (dataToCheck: T, compareFn?: (data1: T, data2: T) => boolean) => boolean
    printList: () => void
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
         * Append to the end
         */
        append: (data: T): void => {
            const newTailNode: Node<T> = { data, next: undefined }

            if (!head) {
                head = newTailNode
            } else {
                let currentNode = head
                while (currentNode.next) { currentNode = currentNode.next }
                currentNode.next = newTailNode

                // Keep updating the `tail` (pointer)
                tail = newTailNode
            }

            // Remember to increase the size as well
            size++
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
}

const testPopFrontOnIntList = () => {
    const testList = createIntTestList()

    let popValue = testList.popHead()
    console.log(`popValue: `, popValue)
    testList.printList()
    popValue = testList.popHead()
    console.log(`popValue: `, popValue)
    testList.printList()
    popValue = testList.popHead()
    console.log(`popValue: `, popValue)
    testList.printList()
    popValue = testList.popHead()
    console.log(`popValue: `, popValue)
    testList.printList()
    popValue = testList.popHead()
    console.log(`popValue: `, popValue)
    testList.printList()
}

const testContainOnIntList = () => {
    const testList = createIntTestList()
    console.log(`testIntList contain 0: ${testList.contain(0)}`)
    console.log(`testIntList contain 1: ${testList.contain(1)}`)
    console.log(`testIntList contain 2: ${testList.contain(2)}`)
    console.log(`testIntList contain 3: ${testList.contain(3)}`)
    console.log(`testIntList contain 4: ${testList.contain(4)}`)
    console.log(`testIntList contain 5: ${testList.contain(5)}`)
}

interface Person {
    name: string
    age?: number
}

const createPersonTestList = () => {
    const testList = createSingleLinkedList<Person>()

    testList.append({ name: `Wison Ye`, age: 43 })
    testList.append({ name: `Fion Li`, age: 28 })
    testList.append({ name: `Mike Ye`, age: 11 })
    return testList
}

const testPersonList = () => {
    const personList = createPersonTestList()
    personList.printList()
    console.log(`personList head: ${JSON.stringify(personList.getHead())}`)
    console.log(`personList tail: ${JSON.stringify(personList.getTail())}`)
}

const testPopFrontOnPersonList = () => {
    const personList = createPersonTestList()

    console.log(`\n[ testPopFrontOnPersonList ]\n`)
    personList.printList()
    let popPerson = personList.popHead()
    console.log(`popPerson: `, popPerson)
    personList.printList()
    popPerson = personList.popHead()
    console.log(`popPerson: `, popPerson)
    personList.printList()
    popPerson = personList.popHead()
    console.log(`popPerson: `, popPerson)
    personList.printList()
    popPerson = personList.popHead()
    console.log(`popPerson: `, popPerson)
    personList.printList()
}

const testPopEndOnPersonList = () => {
    const personList = createPersonTestList()

    console.log(`\n[ testPopEndOnPersonList ]\n`)
    personList.printList()
    let popPerson = personList.popTail()
    console.log(`popPerson: `, popPerson)
    personList.printList()
    popPerson = personList.popTail()
    console.log(`popPerson: `, popPerson)
    personList.printList()
    popPerson = personList.popTail()
    console.log(`popPerson: `, popPerson)
    personList.printList()
    popPerson = personList.popTail()
    console.log(`popPerson: `, popPerson)
    personList.printList()
}

const testContainOnPersonList = () => {
    const testList = createPersonTestList()

    const compareFn = <T extends Person>(data1: T, data2: T): boolean => {
        return Boolean(
            data1.name.trim().toLowerCase() === data2.name.trim().toLowerCase() &&
            data1.age === data2.age
        )
    }

    console.log(`testIntList contain {name: \`Wison Ye\`}: ${testList.contain({ name: `Wison Ye` }, compareFn)}`)
    console.log(`testIntList contain {name: \`Wison YE\`, age: 80}: ${testList.contain({ name: `Wison YE`, age: 80 }, compareFn)}`)
    console.log(`testIntList contain {name: \`Wison Ye\`, age: 43}: ${testList.contain({ name: `Wison Ye`, age: 43 }, compareFn)}`)
    console.log(`testIntList contain {name: \`mike ye\`, age: 8}: ${testList.contain({ name: `mike ye`, age: 8 }, compareFn)}`)
    console.log(`testIntList contain {name: \`mike ye\`, age: 11}: ${testList.contain({ name: `mike ye`, age: 11 }, compareFn)}`)
    console.log(`testIntList contain {name: \`Noboday\`}: ${testList.contain({ name: `Noboday` }, compareFn)}`)
}

testIntList()
testContainOnIntList()
// testPopFrontOnIntList()

console.log(`\n>>>>>>>>>>>>>>\n`)

testPersonList()
// testPopFrontOnPersonList()
// testPopEndOnPersonList()
testContainOnPersonList()

