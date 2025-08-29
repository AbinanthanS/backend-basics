const express = require('express');
const db = require('./db');
const app = express();
const userRoutes = require("./routes/users");

app.use(express.json());
//User routes
app.use("/api/users", userRoutes)

const port = 3000;
app.listen(port, () => {
    console.log(`server coonected to ${port}`);
})