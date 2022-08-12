const express = require("express");
const router = express.Router();
const coursesHandler = require("./handler/courses");

router.get("/", coursesHandler.getAll);
router.get("/:id", coursesHandler.getDetail);
router.post("/", coursesHandler.create);
router.put("/:id", coursesHandler.update);
router.delete("/:id", coursesHandler.destroy);

module.exports = router;
