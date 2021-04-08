import { createSingleLinkedList, SingleLinkedList } from '../single_linked_list'
import { expect } from 'chai';

const PRINT_DEBUG_LOG = process.env.PRINT_DEBUG_LOG ? process.env.PRINT_DEBUG_LOG.toLowerCase() === 'true' : false

describe("Create single_linked_list instance", () => {
    it("Should create valid 'SingleLinkedList' instance", () => {
        const testList = createSingleLinkedList<string>();
        expect(testList).not.equals(undefined)
        expect(testList.size()).to.equals(0)
        expect(testList.getHead()).equals(undefined)
        expect(testList.getTail()).equals(undefined)
        expect(testList.popHead()).equals(undefined)
        expect(testList.contain(`Hello`)).equals(false)
        expect(testList.getListString()).to.equals(`empty list`)
    })
})


describe("Test integer list", () => {
    let testIntList: SingleLinkedList<number>

    beforeEach(() => {
        testIntList = createSingleLinkedList<number>();
        testIntList.append(1)
        testIntList.append(2)
        testIntList.append(3)
        testIntList.append(4)
    })

    it("Should create valid Integer 'SingleLinkedList' instance with the correct size", () => {
        expect(testIntList).not.equals(undefined)
        expect(testIntList.size()).to.equals(4)
        expect(testIntList.getListString()).to.equals(`(4 elements): 1 --> 2 --> 3 --> 4`)

        // head and tail
        expect(testIntList.getHead()).equals(1)
        expect(testIntList.getTail()).equals(4)

        // pop test
        expect(testIntList.popHead()).equals(1)
        expect(testIntList.size()).to.equals(3)
        expect(testIntList.popTail()).equals(4)
        expect(testIntList.size()).to.equals(2)
        expect(testIntList.contain(2)).equals(true)
    })

    it("Integer list pop head should work correctly", () => {
        expect(testIntList).not.equals(undefined)
        expect(testIntList.size()).to.equals(4)
        expect(testIntList.getListString()).to.equals(`(4 elements): 1 --> 2 --> 3 --> 4`)

        expect(testIntList.popHead()).equals(1)
        expect(testIntList.getHead()).equals(2)
        expect(testIntList.getTail()).equals(4)
        expect(testIntList.size()).to.equals(3)
        expect(testIntList.getListString()).to.equals(`(3 elements): 2 --> 3 --> 4`)

        expect(testIntList.popHead()).equals(2)
        expect(testIntList.getHead()).equals(3)
        expect(testIntList.getTail()).equals(4)
        expect(testIntList.size()).to.equals(2)
        expect(testIntList.getListString()).to.equals(`(2 elements): 3 --> 4`)

        expect(testIntList.popHead()).equals(3)
        expect(testIntList.getHead()).equals(4)
        expect(testIntList.getTail()).equals(4)
        expect(testIntList.size()).to.equals(1)
        expect(testIntList.getListString()).to.equals(`(1 elements): 4`)

        expect(testIntList.popHead()).equals(4)
        expect(testIntList.getHead()).equals(undefined)
        expect(testIntList.getTail()).equals(undefined)
        expect(testIntList.size()).to.equals(0)
        expect(testIntList.getListString()).to.equals(`empty list`)
    })

    it("Integer list pop tail should work correctly", () => {
        expect(testIntList).not.equals(undefined)
        expect(testIntList.size()).to.equals(4)
        expect(testIntList.getListString()).to.equals(`(4 elements): 1 --> 2 --> 3 --> 4`)

        expect(testIntList.popTail()).equals(4)
        expect(testIntList.getHead()).equals(1)
        expect(testIntList.getTail()).equals(3)
        expect(testIntList.size()).to.equals(3)
        expect(testIntList.getListString()).to.equals(`(3 elements): 1 --> 2 --> 3`)

        expect(testIntList.popTail()).equals(3)
        expect(testIntList.getHead()).equals(1)
        expect(testIntList.getTail()).equals(2)
        expect(testIntList.size()).to.equals(2)
        expect(testIntList.getListString()).to.equals(`(2 elements): 1 --> 2`)

        expect(testIntList.popTail()).equals(2)
        expect(testIntList.getHead()).equals(1)
        expect(testIntList.getTail()).equals(1)
        expect(testIntList.size()).to.equals(1)
        expect(testIntList.getListString()).to.equals(`(1 elements): 1`)

        expect(testIntList.popTail()).equals(1)
        expect(testIntList.getHead()).equals(undefined)
        expect(testIntList.getTail()).equals(undefined)
        expect(testIntList.size()).to.equals(0)
        expect(testIntList.getListString()).to.equals(`empty list`)
    })

    it("Integer list contain should work correctly", () => {
        expect(testIntList).not.equals(undefined)
        expect(testIntList.size()).to.equals(4)
        expect(testIntList.getListString()).to.equals(`(4 elements): 1 --> 2 --> 3 --> 4`)

        expect(testIntList.contain(0)).to.equals(false)
        expect(testIntList.contain(1)).to.equals(true)
        expect(testIntList.contain(2)).to.equals(true)
        expect(testIntList.contain(3)).to.equals(true)
        expect(testIntList.contain(4)).to.equals(true)
        expect(testIntList.contain(5)).to.equals(false)
    })
})


describe("Test Person list", () => {
    interface Person {
        name: string
        age?: number
    }

    let testPersonList: SingleLinkedList<Person>

    const compareFn = <T extends Person>(data1: T, data2: T): boolean => {
        return Boolean(
            data1.name.trim().toLowerCase() === data2.name.trim().toLowerCase() &&
            data1.age === data2.age
        )
    }

    beforeEach(() => {
        testPersonList = createSingleLinkedList<Person>();

        testPersonList.append({ name: `Andy Chen`, age: 43 })
        testPersonList.append({ name: `Amy Lai`, age: 28 })
        testPersonList.append({ name: `Dollice Chai`, age: 25 })
    })

    it("Should create valid Person 'SingleLinkedList' instance with the correct size", () => {
        expect(testPersonList).not.equals(undefined)
        expect(testPersonList.size()).to.equals(3)
        expect(testPersonList.getListString()).to.equals(`(3 elements): {"name":"Andy Chen","age":43} --> {"name":"Amy Lai","age":28} --> {"name":"Dollice Chai","age":25}`)
        if (PRINT_DEBUG_LOG) { testPersonList.printList() }

        // head and tail
        expect(compareFn(testPersonList.getHead() as Person, { name: `Andy Chen`, age: 43 })).to.equals(true)
        expect(compareFn(testPersonList.getTail() as Person, { name: `Dollice Chai`, age: 25 })).to.equals(true)
    })

    it("Person list pop head should work correctly", () => {
        expect(testPersonList).not.equals(undefined)
        expect(testPersonList.size()).to.equals(3)
        expect(testPersonList.getListString()).to.equals(`(3 elements): {"name":"Andy Chen","age":43} --> {"name":"Amy Lai","age":28} --> {"name":"Dollice Chai","age":25}`)
        if (PRINT_DEBUG_LOG) { testPersonList.printList() }

        expect(compareFn(testPersonList.popHead() as Person, { name: `Andy Chen`, age: 43 })).to.equals(true)
        expect(compareFn(testPersonList.getHead() as Person, { name: `Amy Lai`, age: 28 })).to.equals(true)
        expect(compareFn(testPersonList.getTail() as Person, { name: `Dollice Chai`, age: 25 })).to.equals(true)
        expect(testPersonList.size()).to.equals(2)
        expect(testPersonList.getListString()).to.equals(`(2 elements): {"name":"Amy Lai","age":28} --> {"name":"Dollice Chai","age":25}`)
        if (PRINT_DEBUG_LOG) { testPersonList.printList() }

        expect(compareFn(testPersonList.popHead() as Person, { name: `Amy Lai`, age: 28 })).to.equals(true)
        expect(compareFn(testPersonList.getHead() as Person, { name: `Dollice Chai`, age: 25 })).to.equals(true)
        expect(compareFn(testPersonList.getTail() as Person, { name: `Dollice Chai`, age: 25 })).to.equals(true)
        expect(testPersonList.size()).to.equals(1)
        expect(testPersonList.getListString()).to.equals(`(1 elements): {"name":"Dollice Chai","age":25}`)
        if (PRINT_DEBUG_LOG) { testPersonList.printList() }

        expect(compareFn(testPersonList.popHead() as Person, { name: `Dollice Chai`, age: 25 })).to.equals(true)
        expect(testPersonList.getHead()).to.equals(undefined)
        expect(testPersonList.getTail()).to.equals(undefined)
        expect(testPersonList.size()).to.equals(0)
        expect(testPersonList.getListString()).to.equals(`empty list`)
        if (PRINT_DEBUG_LOG) { testPersonList.printList() }
    })

    it("Person list pop tail should work correctly", () => {
        expect(testPersonList).not.equals(undefined)
        expect(testPersonList.size()).to.equals(3)
        expect(testPersonList.getListString()).to.equals(`(3 elements): {"name":"Andy Chen","age":43} --> {"name":"Amy Lai","age":28} --> {"name":"Dollice Chai","age":25}`)
        if (PRINT_DEBUG_LOG) { testPersonList.printList() }

        expect(compareFn(testPersonList.popTail() as Person, { name: `Dollice Chai`, age: 25 })).to.equals(true)
        expect(compareFn(testPersonList.getHead() as Person, { name: `Andy Chen`, age: 43 })).to.equals(true)
        expect(compareFn(testPersonList.getTail() as Person, { name: `Amy Lai`, age: 28 })).to.equals(true)
        expect(testPersonList.size()).to.equals(2)
        expect(testPersonList.getListString()).to.equals(`(2 elements): {"name":"Andy Chen","age":43} --> {"name":"Amy Lai","age":28}`)
        if (PRINT_DEBUG_LOG) { testPersonList.printList() }

        expect(compareFn(testPersonList.popTail() as Person, { name: `Amy Lai`, age: 28 })).to.equals(true)
        expect(compareFn(testPersonList.getHead() as Person, { name: `Andy Chen`, age: 43 })).to.equals(true)
        expect(compareFn(testPersonList.getTail() as Person, { name: `Andy Chen`, age: 43 })).to.equals(true)
        expect(testPersonList.size()).to.equals(1)
        expect(testPersonList.getListString()).to.equals(`(1 elements): {"name":"Andy Chen","age":43}`)
        if (PRINT_DEBUG_LOG) { testPersonList.printList() }

        expect(compareFn(testPersonList.popTail() as Person, { name: `Andy Chen`, age: 43 })).to.equals(true)
        expect(testPersonList.getHead()).to.equals(undefined)
        expect(testPersonList.getTail()).to.equals(undefined)
        expect(testPersonList.size()).to.equals(0)
        expect(testPersonList.getListString()).to.equals(`empty list`)
        if (PRINT_DEBUG_LOG) { testPersonList.printList() }
    })
})
