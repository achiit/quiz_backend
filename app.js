const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin/adminRoutes');
const userRoutes = require('./routes/user/userRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/admin', adminRoutes);
app.use('/user', userRoutes); 
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the quiz app API' });
});
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
