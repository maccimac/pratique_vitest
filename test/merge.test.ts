import {test, expect} from 'vitest'
import {deepMerge} from '../src'

/**
 * TEST POSITIVE:
 */
test('shallow merge', () => {
    const merged = deepMerge(
        {
            name: 'Anthony'
        },
        {
            github: 'antfu'
        }
    )

    // expect(merged).toEqual({
    //     name: 'Anthony',
    //     github: 'antfu'
    // })
    /**
     * 2.7. You can find snapshots in dir __snapshots__
     * URL: https://vitest.dev/guide/snapshot
     */
    expect(merged).toMatchSnapshot()
})

test('shallow merge with overlaps', () => {
    const merged = deepMerge(
        {
            name: 'Anthony',
            github: 'unknown'
        },
        {
            github: 'antfu',
            twitter: 'antfu7'
        }
    )

    // expect(merged).toEqual({
    //     name: 'Anthony',
    //     github: 'antfu',
    //     twitter: 'antfu7'
    // })

    expect(merged).toMatchSnapshot()
})


test('shallow merge with arrays', () => {
    const merged = deepMerge(
        ['vue', 'react'],
        ['svelte', 'solid']
    )

    expect(merged).toEqual([
        'vue', 'react', 'svelte', 'solid'
    ])
})

test('deep merge with overlaps', () => {
    const merged = deepMerge(
        {
            name: 'Anthonys',
            accounts: {
                github: 'unknown'
            },
            languages: ['javascript', 'typescript']
        },
        {
            accounts: {
                twitter: 'antfu7'
            },
            languages: ['ts', 'vue']
        }
    )
    /**
     * 3.11 Stores snapshot inside test file
     *  * https://vitest.dev/guide/snapshot.html#inline-snapshots
     *  Use for shorter results
     */

    expect(merged).toMatchInlineSnapshot(`
      {
        "accounts": {
          "github": "unknown",
          "twitter": "antfu7",
        },
        "languages": [
          "javascript",
          "typescript",
          "ts",
          "vue",
        ],
        "name": "Anthonys",
      }
    `)

    /**
     * 3.10 Update snapshot on config
     *  * Option 1:
     *      - press `h` to see options
     *      - press `u` to update snapshot
     *  * Option 2:
     *      - `npx vitest -u` always updates when it sees misalignment
     *
     * Make sure to commit changes on git
     */
    // expect(merged).toMatchSnapshot();

    // expect(merged).toEqual({
    //     name: 'Anthony',
    //     accounts: {
    //         github: 'unknown',
    //         twitter: 'antfu7'
    //     }
    // })
})

test('throws errors on merging two different types', () => {
    expect(() => deepMerge(
        ['foo', 'bar'],
        {foo: 'bar'}
    )).toThrowError('Can not merge two differnet types')
})

/**
 * TEST NEGATIVE:
 * - `fails`  = expects entire thing to fail
 */
test.fails('throws err', () => {
    /**
     * Option 1: Works with `.fails`
     */
    // const merged = deepMerge(
    //     ['foo', 'bar'],
    //     {foo: 'bar'}
    // );

    /**
     * Option 2: use `expect` and `ThrowError`
     */
    expect(() => deepMerge(
            ['foo', 'bar'],
            {foo: 'bar'}
    )).toThrowError(
        /**
         * explain what error to expect
         */
        'Can not merge two different types'
    )

    }
)
