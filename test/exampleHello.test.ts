import { expect, test } from 'vitest'
import { mount } from "@vue/test-utils"
import Example from "../src/Example.vue"

// @vitest-environment happy-dom
test('sanity check', ()=>{
    expect(Example).toBeDefined();
})

