import { BrowserHistoryStack, createBrowserHistoryStack } from '../../stack/browser_history_stack'
import { expect } from 'chai';

const PRINT_DEBUG_LOG = process.env.PRINT_DEBUG_LOG ? process.env.PRINT_DEBUG_LOG.toLowerCase() === 'true' : false

describe("Browser history stack test", () => {
    let testBrowserHistoryStack: BrowserHistoryStack<string>

    beforeEach(() => {
        testBrowserHistoryStack = createBrowserHistoryStack<string>();
        testBrowserHistoryStack.push("https://www.google.com")
        testBrowserHistoryStack.push("https://www.facebook.com")
        testBrowserHistoryStack.push("https://www.microsoft.com")
    })

    it("Should create valid 'BrowserHistoryStack' instance with the correct size", () => {
        expect(testBrowserHistoryStack).not.equals(undefined)
        expect(testBrowserHistoryStack.size()).to.equals(3)
        expect(testBrowserHistoryStack.getStackString()).to.equals(`(3 elements): \"https://www.google.com\" --> \"https://www.facebook.com\" --> \"https://www.microsoft.com\"`)
        if (PRINT_DEBUG_LOG) { testBrowserHistoryStack.printStack() }

        // peek test
        expect(testBrowserHistoryStack.peek()).equals("https://www.microsoft.com")
        expect(testBrowserHistoryStack.size()).to.equals(3)
        expect(testBrowserHistoryStack.getStackString()).to.equals(`(3 elements): \"https://www.google.com\" --> \"https://www.facebook.com\" --> \"https://www.microsoft.com\"`)

        // pop test
        expect(testBrowserHistoryStack.pop()).equals("https://www.microsoft.com")
        expect(testBrowserHistoryStack.size()).to.equals(2)
        expect(testBrowserHistoryStack.getStackString()).to.equals(`(2 elements): \"https://www.google.com\" --> \"https://www.facebook.com\"`)

        expect(testBrowserHistoryStack.contains("https://www.google.com")).equals(true)
        expect(testBrowserHistoryStack.contains("https://www.facebook.com")).equals(true)
        expect(testBrowserHistoryStack.contains("https://www.microsoft.com")).equals(false)
    })

    it("Push should work correctly", () => {
        expect(testBrowserHistoryStack.push("https://www.github.com"))
        expect(testBrowserHistoryStack.size()).to.equals(4)
        expect(testBrowserHistoryStack.contains("https://www.google.com")).equals(true)
        expect(testBrowserHistoryStack.contains("https://www.facebook.com")).equals(true)
        expect(testBrowserHistoryStack.contains("https://www.microsoft.com")).equals(true)
        expect(testBrowserHistoryStack.contains("https://www.github.com")).equals(true)
        expect(testBrowserHistoryStack.getStackString()).to.equals(`(4 elements): \"https://www.google.com\" --> \"https://www.facebook.com\" --> \"https://www.microsoft.com\" --> \"https://www.github.com\"`)
        if (PRINT_DEBUG_LOG) { testBrowserHistoryStack.printStack() }

        expect(testBrowserHistoryStack.push("https://www.baidu.com"))
        expect(testBrowserHistoryStack.size()).to.equals(5)
        expect(testBrowserHistoryStack.contains("https://www.google.com")).equals(true)
        expect(testBrowserHistoryStack.contains("https://www.facebook.com")).equals(true)
        expect(testBrowserHistoryStack.contains("https://www.microsoft.com")).equals(true)
        expect(testBrowserHistoryStack.contains("https://www.github.com")).equals(true)
        expect(testBrowserHistoryStack.contains("https://www.baidu.com")).equals(true)
        expect(testBrowserHistoryStack.getStackString()).to.equals(`(5 elements): \"https://www.google.com\" --> \"https://www.facebook.com\" --> \"https://www.microsoft.com\" --> \"https://www.github.com\" --> \"https://www.baidu.com\"`)
        if (PRINT_DEBUG_LOG) { testBrowserHistoryStack.printStack() }
    })

    it("Pop should work correctly", () => {
        expect(testBrowserHistoryStack.pop()).equals("https://www.microsoft.com")
        expect(testBrowserHistoryStack.size()).to.equals(2)
        expect(testBrowserHistoryStack.contains("https://www.google.com")).equals(true)
        expect(testBrowserHistoryStack.contains("https://www.facebook.com")).equals(true)
        expect(testBrowserHistoryStack.contains("https://www.microsoft.com")).equals(false)
        expect(testBrowserHistoryStack.getStackString()).to.equals(`(2 elements): \"https://www.google.com\" --> \"https://www.facebook.com\"`)
        if (PRINT_DEBUG_LOG) { testBrowserHistoryStack.printStack() }

        expect(testBrowserHistoryStack.pop()).equals("https://www.facebook.com")
        expect(testBrowserHistoryStack.size()).to.equals(1)
        expect(testBrowserHistoryStack.contains("https://www.google.com")).equals(true)
        expect(testBrowserHistoryStack.contains("https://www.facebook.com")).equals(false)
        expect(testBrowserHistoryStack.contains("https://www.microsoft.com")).equals(false)
        expect(testBrowserHistoryStack.getStackString()).to.equals(`(1 elements): \"https://www.google.com\"`)
        if (PRINT_DEBUG_LOG) { testBrowserHistoryStack.printStack() }

        expect(testBrowserHistoryStack.pop()).equals("https://www.google.com")
        expect(testBrowserHistoryStack.size()).to.equals(0)
        expect(testBrowserHistoryStack.contains("https://www.google.com")).equals(false)
        expect(testBrowserHistoryStack.contains("https://www.facebook.com")).equals(false)
        expect(testBrowserHistoryStack.contains("https://www.microsoft.com")).equals(false)
        expect(testBrowserHistoryStack.getStackString()).to.equals(`empty list`)
        if (PRINT_DEBUG_LOG) { testBrowserHistoryStack.printStack() }
    })

})
