import { createSingleLinkedList, SingleLinkedList } from '../../linked_list/single_linked_list'
import { expect } from 'chai';

const PRINT_DEBUG_LOG = process.env.PRINT_DEBUG_LOG ? process.env.PRINT_DEBUG_LOG.toLowerCase() === 'true' : false

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
        if (PRINT_DEBUG_LOG) { testIntList.printList() }

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

    it("Integer list insert at head and append should work correctly", () => {
        expect(testIntList).not.equals(undefined)
        expect(testIntList.size()).to.equals(4)
        expect(testIntList.getHead()).equals(1)
        expect(testIntList.getTail()).equals(4)
        expect(testIntList.getListString()).to.equals(`(4 elements): 1 --> 2 --> 3 --> 4`)
        if (PRINT_DEBUG_LOG) { testIntList.printList() }

        expect(testIntList.insertAtHead(0))
        expect(testIntList.getHead()).equals(0)
        expect(testIntList.getTail()).equals(4)
        expect(testIntList.size()).to.equals(5)

        expect(testIntList.insertAtHead(-1))
        expect(testIntList.getHead()).equals(-1)
        expect(testIntList.getTail()).equals(4)
        expect(testIntList.size()).to.equals(6)
        expect(testIntList.getListString()).to.equals(`(6 elements): -1 --> 0 --> 1 --> 2 --> 3 --> 4`)
        if (PRINT_DEBUG_LOG) { testIntList.printList() }

        expect(testIntList.append(5))
        expect(testIntList.getHead()).equals(-1)
        expect(testIntList.getTail()).equals(5)
        expect(testIntList.append(6))
        expect(testIntList.getHead()).equals(-1)
        expect(testIntList.getTail()).equals(6)
        expect(testIntList.getListString()).to.equals(`(8 elements): -1 --> 0 --> 1 --> 2 --> 3 --> 4 --> 5 --> 6`)
        if (PRINT_DEBUG_LOG) { testIntList.printList() }
    })

    it("Integer list pop head should work correctly", () => {
        expect(testIntList).not.equals(undefined)
        expect(testIntList.size()).to.equals(4)
        expect(testIntList.getListString()).to.equals(`(4 elements): 1 --> 2 --> 3 --> 4`)
        if (PRINT_DEBUG_LOG) { testIntList.printList() }

        expect(testIntList.popHead()).equals(1)
        expect(testIntList.getHead()).equals(2)
        expect(testIntList.getTail()).equals(4)
        expect(testIntList.size()).to.equals(3)
        expect(testIntList.getListString()).to.equals(`(3 elements): 2 --> 3 --> 4`)
        if (PRINT_DEBUG_LOG) { testIntList.printList() }

        expect(testIntList.popHead()).equals(2)
        expect(testIntList.getHead()).equals(3)
        expect(testIntList.getTail()).equals(4)
        expect(testIntList.size()).to.equals(2)
        expect(testIntList.getListString()).to.equals(`(2 elements): 3 --> 4`)
        if (PRINT_DEBUG_LOG) { testIntList.printList() }

        expect(testIntList.popHead()).equals(3)
        expect(testIntList.getHead()).equals(4)
        expect(testIntList.getTail()).equals(4)
        expect(testIntList.size()).to.equals(1)
        expect(testIntList.getListString()).to.equals(`(1 elements): 4`)
        if (PRINT_DEBUG_LOG) { testIntList.printList() }

        expect(testIntList.popHead()).equals(4)
        expect(testIntList.getHead()).equals(undefined)
        expect(testIntList.getTail()).equals(undefined)
        expect(testIntList.size()).to.equals(0)
        expect(testIntList.getListString()).to.equals(`empty list`)
        if (PRINT_DEBUG_LOG) { testIntList.printList() }
    })

    it("Integer list pop tail should work correctly", () => {
        expect(testIntList).not.equals(undefined)
        expect(testIntList.size()).to.equals(4)
        expect(testIntList.getListString()).to.equals(`(4 elements): 1 --> 2 --> 3 --> 4`)
        if (PRINT_DEBUG_LOG) { testIntList.printList() }

        expect(testIntList.popTail()).equals(4)
        expect(testIntList.getHead()).equals(1)
        expect(testIntList.getTail()).equals(3)
        expect(testIntList.size()).to.equals(3)
        expect(testIntList.getListString()).to.equals(`(3 elements): 1 --> 2 --> 3`)
        if (PRINT_DEBUG_LOG) { testIntList.printList() }

        expect(testIntList.popTail()).equals(3)
        expect(testIntList.getHead()).equals(1)
        expect(testIntList.getTail()).equals(2)
        expect(testIntList.size()).to.equals(2)
        expect(testIntList.getListString()).to.equals(`(2 elements): 1 --> 2`)
        if (PRINT_DEBUG_LOG) { testIntList.printList() }

        expect(testIntList.popTail()).equals(2)
        expect(testIntList.getHead()).equals(1)
        expect(testIntList.getTail()).equals(1)
        expect(testIntList.size()).to.equals(1)
        expect(testIntList.getListString()).to.equals(`(1 elements): 1`)
        if (PRINT_DEBUG_LOG) { testIntList.printList() }

        expect(testIntList.popTail()).equals(1)
        expect(testIntList.getHead()).equals(undefined)
        expect(testIntList.getTail()).equals(undefined)
        expect(testIntList.size()).to.equals(0)
        expect(testIntList.getListString()).to.equals(`empty list`)
        if (PRINT_DEBUG_LOG) { testIntList.printList() }
    })

    it("Integer list contain should work correctly", () => {
        expect(testIntList).not.equals(undefined)
        expect(testIntList.size()).to.equals(4)
        expect(testIntList.getListString()).to.equals(`(4 elements): 1 --> 2 --> 3 --> 4`)
        if (PRINT_DEBUG_LOG) { testIntList.printList() }

        expect(testIntList.contain(0)).to.equals(false)
        expect(testIntList.contain(1)).to.equals(true)
        expect(testIntList.contain(2)).to.equals(true)
        expect(testIntList.contain(3)).to.equals(true)
        expect(testIntList.contain(4)).to.equals(true)
        expect(testIntList.contain(5)).to.equals(false)
    })
})
