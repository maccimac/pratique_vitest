import { expect, test } from 'vitest'
import { mount } from "@vue/test-utils"
import ExampleHello from "../src/ExampleHello.vue"

// @vitest-environment happy-dom
test('sanity check', ()=>{
    expect(ExampleHello).toBeDefined();

    const wrapper = mount(ExampleHello);
    expect(wrapper.text()).toBe('Hello !');
})


test('component with props', ()=>{
    expect(ExampleHello).toBeDefined();
    const wrapper = mount(ExampleHello, {
        props: {
            name: 'Vitest'
        }
    });
    expect(wrapper.text()).toBe('Hello Vitest!');
})