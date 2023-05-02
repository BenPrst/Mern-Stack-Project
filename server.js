const express = require("express");
// const userRoutes = require("./routes/user.routes");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const app = express();
const postsRoutes = require("./routes/postsController");
const bodyParser = require("body-parser");

//routes
app.use(bodyParser.json());
app.use("/posts", postsRoutes);

//Server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
