import { setupServer, SetupServerApi } from 'msw/node'
import { handlers } from './msw_handlers'
import {http, HttpResponse} from 'msw'

/**
 * MSW
 * https://www.npmjs.com/package/msw
 * https://www.youtube.com/watch?v=HcQCqboatZk
 *
 */

const URL_TO_ROUTE_WE_HANDLE_1: string = 'https://jsonplaceholder.typicode.com/posts/:id';

export const handlers = [
    http.get(URL_TO_ROUTE_WE_HANDLE_1, ({request}) => {
        return HttpResponse.json({
            body: 'Mocked',
        })
    }),
]

export const server: SetupServerApi = setupServer(...handlers)


