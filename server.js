const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

.then(()=>{

  console.log("data base connected");
})
.catch( (err) => {
  console.error(`Error connecting to the database. \n${err}`);
})

const usersRouter = require("./routes/users");
app.use("/", usersRouter);

app.listen(port, () => {
  console.log("Server is ruunig on port 5000");
});