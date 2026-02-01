import { test, expect, beforeEach, vi } from "vitest";

function warnLater(message){
    setImmediate(()=>{
        console.log(message);
    }, 2_000)
}

beforeEach(()=>{
    vi.useFakeTimers()
})

test('warnLater', async ()=>{
    const logSpy = vi.spyOn(console, 'log');

    /**
     * General promise to wait before moving to next
     */
    // await new Promise(resolve => setTimeout(resolve, 2_000));

    warnLater('2 sec');
    /**
     * 1. Test that spy is not immediately logged
     * 2. Resolve a promise after 2 seconds
     * 3. THEN check if log is
     */
    expect(logSpy).to.not.toBeCalled();
    /**
     * - Use promise when the is no `vi.useFakeTimers()`
     * - Use `vi.advanceTimerByTime` if we are using take timer
     *
     */
    // vi.advanceTimersByTime(2_000)
    vi.advanceTimersToNextTimer()
    // await new Promise(resolve => setTimeout(resolve, 2_000));
    expect(logSpy).toBeCalled();
})

/**
 * Use vi.fakeTimer to make more efficient
 */