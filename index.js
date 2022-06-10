const express = require("express");
const cors = require("cors");
const home = require("./Routes/Home");
const database = require("./Routes/Database");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(cors());
app.use(express.json());
app.use("/", home);
app.use("/data", database);

app.listen(port, () => {
  console.log(`Server Started! Running on port ${port}`);
});
