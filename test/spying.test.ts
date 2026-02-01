import { test, expect, vi} from "vitest";
import { greeting } from "../src/index2";
/**
 * 4.12. Mocking vs Spying
 * Spying -> Monitor function, DOES NOT CHANGE ORIGINIAL BEHAVIOUR
 * Mocking -> Replace function for testing
 *  ex: requesting
 *
 * `vi` -> Short for vitest
 */


test('greeting', ()=>{
    const spy = vi.spyOn(console, 'log');

    /**
     * There' no return value, because we were using console.log not return.
     * This will always pass
     */
    expect(greeting('World')).toBe(undefined);
    expect(greeting('Anthony')).toBe(undefined);

    /**
     * Spying
     */
    greeting('World');
    greeting('Max');
    expect(spy).toBeCalledWith('Hello, World')
    /**
     * Called 4x because of the expect greeting above
     */
    expect(spy).toBeCalledTimes(4)

    /**
     * https://vitest.dev/api/mock.html#mock-calls
     */
    // console.log(spy.mock.calls)
    expect(spy.mock.calls[3][0]).toBe('Hello, Max');
    expect(spy).toMatchInlineSnapshot(`
      [MockFunction log] {
        "calls": [
          [
            "Hello, World",
          ],
          [
            "Hello, Anthony",
          ],
          [
            "Hello, World",
          ],
          [
            "Hello, Max",
          ],
        ],
        "results": [
          {
            "type": "return",
            "value": undefined,
          },
          {
            "type": "return",
            "value": undefined,
          },
          {
            "type": "return",
            "value": undefined,
          },
          {
            "type": "return",
            "value": undefined,
          },
        ],
      }
    `);


    /**
     * 4.14 Resetting
     */

    spy.mockReset();
    greeting('Josh');
    expect(spy).toBeCalledTimes(1);
    console.log(spy.mock.calls);
    expect(spy.mock.calls[0][0]).toBe('Hello, Josh');

    /**
     * 4.14 Snapshot x Spying
     */
    expect(spy).toMatchSnapshot();


})