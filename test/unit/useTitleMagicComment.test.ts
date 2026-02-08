import { expect, test } from 'vitest'
import { useTitle } from "../../src/useTitle"

/**
 * 5.22 Magic Comment !!
 * The comment below adds happy-dom on this file.
 * Now we don't need to add it on vitest config
 * https://vitest.dev/config/environment.html
 *
 * https://vitest.dev/api/advanced/test-project.html#matchestestglob
 */

// @vitest-environment happy-dom

test('useTitle should work', ()=>{
    document.title = 'Foo'
    const title = useTitle();
    expect(title.value).toBe('Foo');
    title.value = 'Bar'
    expect(document.title).toBe('Bar')
})