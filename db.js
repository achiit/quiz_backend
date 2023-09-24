const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12648758',
    password: 'Buh8lZhpuX',
    database: 'sql12648758',
    port: 3306
});
pool.getConnection((err, connection) => {
    if (err) {
       console.error('Error connecting to the database:', err.message);
    } else {
       console.log('Connected to the database successfully!');
       connection.release();
    }
 });
 
 module.exports = pool.promise();