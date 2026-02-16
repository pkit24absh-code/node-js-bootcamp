import { neon } from '@neondatabase/serverless';

import { drizzle } from 'drizzle-orm/neon-http';

import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.DATABASE_URL);

const sql = neon(process.env.DATABASE_URL);
const db = drizzle({ client: sql });

const result = await db.execute('select 1');
