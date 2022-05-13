const express = require("express");
const bookController = require("../controllers/bookController");
const router = express.Router();

router.post("/", bookController.addABook);

module.exports = router;
