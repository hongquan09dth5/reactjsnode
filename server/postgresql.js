const Pool = require("pg").Pool;
let ssl = { rejectUnauthorized: false };

const connectionString = process.env.POSTGRESQL_URL;

const pool = new Pool({
  connectionString,
  ssl: ssl,
});

module.exports = pool;
