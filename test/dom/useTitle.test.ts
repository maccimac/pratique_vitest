import { expect, test } from 'vitest'
import { useTitle } from "../../src/useTitle"


/**
 * This file needs a dom to pass.
 * See vite.config
 */

/**
 * 5.23 (Deprecated) environmentMatchGLobx
 * "environmentMatchGlobs config option. Use projects instead."
 * https://vitest.dev/guide/projects.html
 */


test('useTitle should work', ()=>{
    document.title = 'Foo'
    const title = useTitle();
    expect(title.value).toBe('Foo');
    title.value = 'Bar'
    expect(document.title).toBe('Bar')
})