import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const {
  NODE_ENV,
  DATABASE,
  USER,
  HOST,
  DATABASE_PORT,
  POSTGRES_TEST_DB,
  PASSWORD,
  DATABASE_URL,
} = process.env;

let client: Pool;
if (NODE_ENV === 'production') {
  const connectionString = DATABASE_URL;
  client = new Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else if (NODE_ENV === 'development') {
  client = new Pool({
    host: HOST,
    user: USER,
    database: DATABASE,
    password: PASSWORD,
    port: parseInt(DATABASE_PORT as string, 10),
  });
} else {
  client = new Pool({
    host: HOST,
    user: USER,
    database: POSTGRES_TEST_DB,
    password: PASSWORD,
    port: parseInt(DATABASE_PORT as string, 10),
  });
}

// Listen for server connections
export default {
  client,
  DATABASE,
  USER,
  HOST,
  DATABASE_PORT,
  POSTGRES_TEST_DB,
  PASSWORD,
};
