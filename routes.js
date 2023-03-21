const router = require("express").Router();

const multer = require("multer");
const upload = multer({ dest: "/uploads" });

router.get("/", (req, res) => {
  const { page, total } = req.query;
  res.send({
    status: "Succesfully",
    message: "Wellcome to Express JS Tutorial",
    page,
    total,
  });
});

router.get("/product/:id", (req, res) => {
  res.json({
    id: req.params.id,
  });
});

router.post("/product/", (req, res) => {
  const { name, price, stock, status } = req.body;
  console.log(req.file);
  res.json({
    name,
    price,
    stock,
    status,
  });
});

router.get("/:category/:tag", (req, res) => {
  const { category, tag } = req.params;
  res.json({ category, tag });
});

// upload single profile
// app.post("/cover", upload.single("image"), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// });

// upload all profile
// app.post("/profile", upload.array("avatar"), function (req, res, next) {});

module.exports = router;
