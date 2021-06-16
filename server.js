
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const crudRoutes = require("./routes/crudroute")
dotenv.config();

// middleware
app.use(express.json({extended: true}))
app.use(express.urlencoded({ extended : true}))
app.use(cors());

app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})



app.use('/app',crudRoutes);
app.use((req,res,next)=>{
    res.send(`<h1>please go to here ...  <a href="http://localhost:5000/app">home :)</a> </h1>`)
    next();
})


// connect to mongodb

mongoose.connect(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true, useFindAndModify: false } , (err)=>{
    if(err) {console.log("DB not connected")}
    console.log("DB connected...")
});


// server running on ...
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server connected on ....${PORT}`)
})
