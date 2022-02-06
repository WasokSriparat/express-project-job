require('dotenv').config({ path: './config.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 4002;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//ดึงค่า config ใน db.js มาใช้ใน app
require("./db")(app);

// Routing Table
app.get("/",(req, res)=>{
    res.send("Hello from index");
});

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});