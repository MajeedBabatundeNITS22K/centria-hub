import { swagger } from '@elysiajs/swagger'
import { Elysia, t } from 'elysia'

const appElysia = new Elysia({ prefix: '/api' })
  .use(swagger())
  .get('/', () => 'hello Next')
  .post('/', ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
  })

type ElysiaApp = typeof appElysia

export { appElysia, type ElysiaApp }
