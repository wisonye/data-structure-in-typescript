import { createSingleLinkedList, SingleLinkedList } from '../../linked_list/single_linked_list'
import { expect } from 'chai';

const PRINT_DEBUG_LOG = process.env.PRINT_DEBUG_LOG ? process.env.PRINT_DEBUG_LOG.toLowerCase() === 'true' : false

describe("String linked list test", () => {
    let testStringList: SingleLinkedList<string>

    beforeEach(() => {
        testStringList = createSingleLinkedList<string>();
        testStringList.append("TypeScript")
        testStringList.append("is")
        testStringList.append("Awesome!")
    })

    it("Should create valid String 'SingleLinkedList' instance with the correct size", () => {
        expect(testStringList).not.equals(undefined)
        expect(testStringList.size()).to.equals(3)
        expect(testStringList.getListString()).to.equals(`(3 elements): "TypeScript" --> "is" --> "Awesome!"`)
        if (PRINT_DEBUG_LOG) { testStringList.printList() }

        // head and tail
        expect(testStringList.getHead()).equals("TypeScript")
        expect(testStringList.getTail()).equals("Awesome!")

        // pop test
        expect(testStringList.popHead()).equals("TypeScript")
        expect(testStringList.size()).to.equals(2)
        expect(testStringList.popTail()).equals("Awesome!")
        expect(testStringList.size()).to.equals(1)
        expect(testStringList.contains("is")).equals(true)
    })

    it("Insert at head and append should work correctly", () => {
        expect(testStringList).not.equals(undefined)
        expect(testStringList.size()).to.equals(3)
        expect(testStringList.getHead()).equals("TypeScript")
        expect(testStringList.getTail()).equals("Awesome!")
        expect(testStringList.getListString()).to.equals(`(3 elements): "TypeScript" --> "is" --> "Awesome!"`)
        if (PRINT_DEBUG_LOG) { testStringList.printList() }

        expect(testStringList.insertAtHead("that: "))
        expect(testStringList.getHead()).equals("that: ")
        expect(testStringList.getTail()).equals("Awesome!")
        expect(testStringList.size()).to.equals(4)

        expect(testStringList.insertAtHead("I let you know"))
        expect(testStringList.getHead()).equals("I let you know")
        expect(testStringList.getTail()).equals("Awesome!")
        expect(testStringList.size()).to.equals(5)

        expect(testStringList.getListString()).to.equals(`(5 elements): "I let you know" --> "that: " --> "TypeScript" --> "is" --> "Awesome!"`)
        if (PRINT_DEBUG_LOG) { testStringList.printList() }

        expect(testStringList.append(":)"))
        expect(testStringList.getHead()).equals("I let you know")
        expect(testStringList.getTail()).equals(":)")
        expect(testStringList.size()).to.equals(6)
        expect(testStringList.getListString()).to.equals(`(6 elements): "I let you know" --> "that: " --> "TypeScript" --> "is" --> "Awesome!" --> ":)"`)
        if (PRINT_DEBUG_LOG) { testStringList.printList() }
    })

    it("Pop head should work correctly", () => {
        expect(testStringList).not.equals(undefined)
        expect(testStringList.size()).to.equals(3)
        expect(testStringList.getHead()).equals("TypeScript")
        expect(testStringList.getTail()).equals("Awesome!")
        expect(testStringList.getListString()).to.equals(`(3 elements): "TypeScript" --> "is" --> "Awesome!"`)
        if (PRINT_DEBUG_LOG) { testStringList.printList() }

        expect(testStringList.popHead()).equals("TypeScript")
        expect(testStringList.getHead()).equals("is")
        expect(testStringList.getTail()).equals("Awesome!")
        expect(testStringList.size()).to.equals(2)
        expect(testStringList.getListString()).to.equals(`(2 elements): "is" --> "Awesome!"`)
        if (PRINT_DEBUG_LOG) { testStringList.printList() }

        expect(testStringList.popHead()).equals("is")
        expect(testStringList.getHead()).equals("Awesome!")
        expect(testStringList.getTail()).equals("Awesome!")
        expect(testStringList.size()).to.equals(1)
        expect(testStringList.getListString()).to.equals(`(1 elements): "Awesome!"`)
        if (PRINT_DEBUG_LOG) { testStringList.printList() }

        expect(testStringList.popHead()).equals("Awesome!")
        expect(testStringList.getHead()).equals(undefined)
        expect(testStringList.getTail()).equals(undefined)
        expect(testStringList.size()).to.equals(0)
        expect(testStringList.getListString()).to.equals(`empty list`)
        if (PRINT_DEBUG_LOG) { testStringList.printList() }
    })

    it("Pop tail should work correctly", () => {
        expect(testStringList).not.equals(undefined)
        expect(testStringList.size()).to.equals(3)
        expect(testStringList.getHead()).equals("TypeScript")
        expect(testStringList.getTail()).equals("Awesome!")
        expect(testStringList.getListString()).to.equals(`(3 elements): "TypeScript" --> "is" --> "Awesome!"`)
        if (PRINT_DEBUG_LOG) { testStringList.printList() }

        expect(testStringList.popTail()).equals("Awesome!")
        expect(testStringList.getHead()).equals("TypeScript")
        expect(testStringList.getTail()).equals("is")
        expect(testStringList.size()).to.equals(2)
        expect(testStringList.getListString()).to.equals(`(2 elements): "TypeScript" --> "is"`)
        if (PRINT_DEBUG_LOG) { testStringList.printList() }

        expect(testStringList.popTail()).equals("is")
        expect(testStringList.getHead()).equals("TypeScript")
        expect(testStringList.getTail()).equals("TypeScript")
        expect(testStringList.size()).to.equals(1)
        expect(testStringList.contains("is")).to.equals(false)
        expect(testStringList.getListString()).to.equals(`(1 elements): "TypeScript"`)
        if (PRINT_DEBUG_LOG) { testStringList.printList() }

        expect(testStringList.popTail()).equals("TypeScript")
        expect(testStringList.getHead()).equals(undefined)
        expect(testStringList.getTail()).equals(undefined)
        expect(testStringList.size()).to.equals(0)
        expect(testStringList.getListString()).to.equals(`empty list`)
        if (PRINT_DEBUG_LOG) { testStringList.printList() }
    })
})
