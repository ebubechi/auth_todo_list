const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "ebube007",
  port: 5432,
  database: "authtodolist"
});

module.exports = pool;
