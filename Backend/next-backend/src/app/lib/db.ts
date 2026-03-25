import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  port: 3307,
  user: 'root',        // XAMPP default username
  password: '',        // XAMPP default password (empty)
  database: 'task_manager',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
