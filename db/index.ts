import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

const sql = neon(process.env.DBURL!)

const db = drizzle({ client: sql, logger: true, casing: 'snake_case' })

export { db }
