import {test, expect, vi, beforeAll, afterAll} from 'vitest'
import {getPostBody} from '../src/network'
import {server} from "./msw.setup";

beforeAll(async () => {
    server.listen()
})
afterAll(() => {
    server.close();
})

test('should fetch (msw)', async () => {
    const result = await getPostBody(1);
    expect(result).toMatchInlineSnapshot(`"Mocked"`)
})

