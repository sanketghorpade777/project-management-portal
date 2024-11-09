const express = require('express');
const app = express();

require('dotenv').config();
const cors = require('cors');
const port = 5000 || process.env.PORT;
const bodyparser  = require('body-parser');


const connectDB = require('./config/db');
connectDB();

app.use(cors());
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
// app.use(express.json());
const routes = require('./Routes/authRoutes');

app.post('/api/login',routes);
app.post('/api/admin/add-emp',routes);

// const authRoutes = require('./Routes/authRoutes');
// app.use('/api/auth', authRoutes);


// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

app.listen(port,() => {
   console.log(`Listening on Port ${port}`)
})
