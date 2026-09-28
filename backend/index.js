const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const EmailRoutes = require("./routes/EmailRoutes");

dotenv.config({path:'./.env'});
console.log("SMTP_HOST:", process.env.SMTP_HOST);
console.log("SMTP_PORT:", process.env.SMTP_PORT);
console.log("SMTP_USER:", process.env.SMTP_USER);


const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/email", EmailRoutes);

app.get('/' , (req , res)=>{
    res.send('API IS RUNNINIG')
})

// MongoDB Connection
mongoose.connect(process.env.MongoDb_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Server Start
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
