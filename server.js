const express = require('express');

const app = express();

// Middlewares
app.use(express.static('public'));
app.use(express.static('node_modules'));

// PORT
const SERVER_PORT = process.env.PORT || 3001;
app.listen(SERVER_PORT, () => console.log(`Server up and running on port ${SERVER_PORT}...`));
