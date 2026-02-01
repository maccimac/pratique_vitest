import {test, expect, vi} from 'vitest'
import {getPostBody} from '../src/network'

/**
 * Simple stubGlobal
 */
vi.stubGlobal('fetch', async () => {
    return {
        json: async()=>({
            body: 'foo'
        })
    }
})

test('should fetch (stub)', async () => {
    const result = await getPostBody(1);
    expect(result).toMatchInlineSnapshot('"foo"')
})

