import { test, expect, vi} from "vitest";

function getCurrentTime(){
    return new Date().toTimeString().slice(0, 5)
}

/**
 * 10.16 Mock time, then reset
 */
test('time', ()=>{
    vi.setSystemTime(new Date('2026-01-01 10:10'))
    expect(getCurrentTime()).toBe('10:10')
    vi.useRealTimers();
})