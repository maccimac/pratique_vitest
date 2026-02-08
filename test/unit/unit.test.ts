import { expect, test } from 'vitest'
import { useTitle } from "../../src/useTitle"

/**
 * 5.23 This file does not need dom
 */
test('this is a simple test, does not need DOM', ()=>{
    expect(1+1).toBe(2)
})

test ('make sure DOM is not available', ()=>{
    expect(typeof document).toBe('undefined')
})