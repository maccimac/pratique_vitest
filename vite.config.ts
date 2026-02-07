import { defineConfig } from "vitest/config"

export default defineConfig({
    test:{
        setupFiles: [
            'test/msw.setup.ts'
        ],
        /**
         * 5.22
         * Two options: js-dom and happy-dom
         * happy-dom is generally lighter and faster
         */
        environment: 'happy-dom'
    }
})