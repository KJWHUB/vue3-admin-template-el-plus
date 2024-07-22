import { handlers as authHandlers } from './auth'
import { handlers as productsHandlers } from './products'
import { handlers as usersHandlers } from './users'

export const handlers = [...usersHandlers, ...authHandlers, ...productsHandlers]
