import { createSingleLinkedList } from '../../linked_list/single_linked_list'
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

        if (PRINT_DEBUG_LOG) { testList.printList() }
    })
})

