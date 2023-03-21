const express = require("express");

const app = express();
const router = require("./routes");
const log = require("./middlewares/logger");

// login
app.use(log);
// req data dari form urlencoded
app.use(express.urlencoded({ extended: true }));
// req data dari JSON
app.use(express.json());
// memanggil fungsi router
app.use(router);

app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "failed",
    message: "Resource" + req.originalUrl + "Not Found",
  });
});
app.listen(3000, () => console.log("Server: http://localhost:3000"));
