
const express=require("express");

const app=express();

require('dotenv').config();

app.set('view engine','ejs');
app.use(
    express.urlencoded({ extended: true })
);
app.use(express.json());

const subscriberRoutes=require("./server/routes/subscribers.js");
app.use("/subscriber",subscriberRoutes);

app.listen(3000,() => {
    console.log("server started at port 3000");
})
