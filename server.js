const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 5000;


//middleware

app.use(cors());
app.use(express.json());


if(process.env.NODE_ENV === "production"){
  // server static folder
  app.use(express.static(path.join(__dirname, "client/build")));
}
//routes

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));


app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
