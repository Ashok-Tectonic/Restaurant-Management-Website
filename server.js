const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ashok@2005',
    database: 'db'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

// Endpoint to book a table
app.post('/api/book', (req, res) => {
    const { name, date, time, people } = req.body;
    const sql = 'INSERT INTO bookings (name, date, time, number_of_people) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, date, time, people], (err, result) => {
        if (err) {
            return res.status(500).send('Error saving booking');
        }
        res.send('Booking created successfully!');
    });
});

// Endpoint to place an order
app.post('/api/order', (req, res) => {
    const { orderName, item, quantity } = req.body;
    const sql = 'INSERT INTO orders (customer_name, item, quantity) VALUES (?, ?, ?)';
    db.query(sql, [orderName, item, quantity], (err, result) => {
        if (err) {
            return res.status(500).send('Error placing order');
        }
        res.send('Order placed successfully!');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
