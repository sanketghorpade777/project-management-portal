const express = require('express');
const app = express();

require('dotenv').config();
const cors = require('cors');
const port = 5000 || process.env.PORT;
const bodyparser  = require('body-parser');
const path = require('path');

const connectDB = require('./config/db');
connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}));
// app.use(bodyparser.urlencoded({extended:false}));
const routes = require('./Routes/authRoutes');

app.post('/login',routes);
app.post('/api/admin/add-emp',routes);

// const authRoutes = require('./Routes/authRoutes');
// app.use('/api/auth', authRoutes);

app.use(express.static(__dirname));
// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

app.listen(port,() => {
   console.log(`Listening on Port ${port}`)
})
