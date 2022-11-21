const express = require('express');

const peopleRouter = require("./routes/people");


const app = express();

app.use(express.json());

app.use("/api/people/",peopleRouter)


app.listen(5000,() => {
    console.log("express totourial");
})

