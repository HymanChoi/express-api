/*
 * @Author: Hyman Choi
 * @Date: 2021-02-04 22:06:02
 * @LastEditTime: 2021-02-25 22:23:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/routes/users.js
 */
var express = require("express");
var router = express.Router();

/**
 * 查询所有用户
 */
router.get("/all", function (req, res, next) {
  res.json({
    code: 20000,
    message: "success",
    data: [
      { name: "Jack", age: 10 },
      { name: "Tim", age: 47 },
      { name: "Mark", age: 36 },
    ],
  });
});

/**
 * 查询单个用户
 */
router.get("/one", function (req, res, next) {
  const { name } = req.query;

  res.json({
    code: 20000,
    message: "success",
    data: { name: name, age: 10 },
  });
});

/**
 * 添加单个用户
 */
router.post("/add", function (req, res, next) {
  const { name, age } = req.body;

  res.json({
    code: 20000,
    message: "success",
    data: { name: name, age: age },
  });
});

/**
 * 更新单个用户
 */
router.put("/update", function (req, res, next) {
  const { name, age } = req.body;

  res.json({
    code: 20000,
    message: "success",
    data: { name: name, age: age },
  });
});

/**
 * 删除单个用户
 */
router.delete("/delete", function (req, res, next) {
  const { name } = req.query;

  res.json({
    code: 20000,
    message: "success",
    data: { name: name },
  });
});

module.exports = router;
