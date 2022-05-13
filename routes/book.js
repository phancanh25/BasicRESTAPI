const express = require("express");
const bookController = require("../controllers/bookController");
const router = express.Router();

router.post("/", bookController.addABook);
router.get("/", bookController.getAllBook);

router.get("/:id", bookController.getABook);
router.put("/:id", bookController.updateBook);

module.exports = router;
