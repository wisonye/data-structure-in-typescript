import { createSingleLinkedList, SingleLinkedList } from '../../linked_list/single_linked_list'
import { expect } from 'chai';

const PRINT_DEBUG_LOG = process.env.PRINT_DEBUG_LOG ? process.env.PRINT_DEBUG_LOG.toLowerCase() === 'true' : false

describe("Person linked list test", () => {
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

    it("Insert at head and append should work correctly", () => {
        expect(testPersonList).not.equals(undefined)
        expect(testPersonList.size()).to.equals(3)
        expect(testPersonList.getListString()).to.equals(`(3 elements): {"name":"Andy Chen","age":43} --> {"name":"Amy Lai","age":28} --> {"name":"Dollice Chai","age":25}`)
        if (PRINT_DEBUG_LOG) { testPersonList.printList() }

        expect(testPersonList.insertAtHead({ name: `Rob A` }))
        if (PRINT_DEBUG_LOG) { testPersonList.printList() }
        expect(compareFn(testPersonList.getHead() as Person, { name: `Rob A` })).to.equals(true)
        expect(compareFn(testPersonList.getTail() as Person, { name: "Dollice Chai", age: 25 })).to.equals(true)
        expect(testPersonList.size()).to.equals(4)

        expect(testPersonList.insertAtHead({ name: `Roy B` }))
        if (PRINT_DEBUG_LOG) { testPersonList.printList() }
        expect(compareFn(testPersonList.getHead() as Person, { name: `Roy B` })).to.equals(true)
        expect(compareFn(testPersonList.getTail() as Person, { name: "Dollice Chai", age: 25 })).to.equals(true)
        expect(testPersonList.size()).to.equals(5)
        expect(testPersonList.getListString()).to.equals(`(5 elements): {"name":"Roy B"} --> {"name":"Rob A"} --> {"name":"Andy Chen","age":43} --> {"name":"Amy Lai","age":28} --> {"name":"Dollice Chai","age":25}`)
        if (PRINT_DEBUG_LOG) { testPersonList.printList() }
    })

    it("Pop head should work correctly", () => {
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

    it("Pop tail should work correctly", () => {
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

    it("containss should work correctly", () => {
        expect(testPersonList).not.equals(undefined)
        expect(testPersonList.size()).to.equals(3)
        expect(testPersonList.getListString()).to.equals(`(3 elements): {"name":"Andy Chen","age":43} --> {"name":"Amy Lai","age":28} --> {"name":"Dollice Chai","age":25}`)
        if (PRINT_DEBUG_LOG) { testPersonList.printList() }

        expect(testPersonList.contains({ name: "AAA" }, compareFn)).to.equals(false)
        expect(testPersonList.contains({ name: `Amy Lai`, age: 28 }, compareFn)).to.equals(true)
        expect(testPersonList.contains({ name: `Andy Chen`, age: 43 }, compareFn)).to.equals(true)
        expect(testPersonList.contains({ name: `Dollice Chai`, age: 25 }, compareFn)).to.equals(true)
    })
})
