import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'blog_user',
    password: 'password4',
    database: 'blog_db'
})

export default pool;