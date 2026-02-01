import { test, expect, vi} from "vitest";
import { loadConfig } from "../src/fs";

/**
 * Mock has to be on top level because it will replace actual module on run time
 */
vi.mock("fs",

    // async (importOriginal)=>{
    // const actual = await importOriginal as any
    // const actual = await importOriginal as import("fs")
async()=>{
    const actual = vi.importActual("fs")
    return {
        ...actual,
        existsSync(){
          return true;
        },
        readFileSync(){
            return `{ "name" : "mocked" }`
        },

    }
});
test('with fs', async ()=>{
    const result = await loadConfig();
    expect(result).toEqual({
        name: 'mocked'
    })
})