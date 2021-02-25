/*
 * @Author: Hyman Choi
 * @Date: 2021-02-04 22:06:02
 * @LastEditTime: 2021-02-25 22:25:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/routes/index.js
 */
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
