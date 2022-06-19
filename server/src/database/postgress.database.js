import pkg from "pg";

const pool = new pkg.Pool({
    user: "postgres",
    password: "1290384756",
    "host": "localhost",
    "port": 5432,
    database: "perntodo"
});

export default pool;