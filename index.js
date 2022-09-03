const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
port = 3000;
const router = require("./routes/users.routes");
app.use(express.json());
app.use("/api/", router);

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${process.env.PORT || port}`);
});
