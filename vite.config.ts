import {defineConfig} from "vitest/config"
import Vue from "@vitejs/plugin-vue"
export default defineConfig({
    plugins: [
        Vue()
    ],
    test: {
        setupFiles: [
            'test/msw.setup.ts'
        ],
        /**
         * 5.22
         * Two options: js-dom and happy-dom
         * happy-dom is generally lighter and faster
         *
         * 5.21
         * If it here, it will be global. Not every test need this, however
         */
        // environment: 'happy-dom'
        /**
         * This is deprecated
         */
        environmentMatchGlobs: [
            ['test/dom/**', 'happy-dom']
        ]
        /**
         * https://vitest.dev/guide/projects.html
         */
        // projects: [
        //     {
        //         // add "extends: true" to inherit the options from the root config
        //         extends: true,
        //         test: {
        //             include: ['test/dom/*.test.{ts,js}'],
        //             name: 'happy-dom',
        //             environment: 'happy-dom'
        //         },
        //     },
        //     {
        //         extends: true,
        //         test: {
        //             include: ['test/unit/*.test.{ts, js}'],
        //             name: {
        //                 label: 'node',
        //                 color: 'green'
        //             },
        //             environment: 'node'
        //         }
        //     }
        //
        // ]
    },
})