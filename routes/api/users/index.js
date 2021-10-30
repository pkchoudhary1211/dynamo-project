// var docClient = require("../../../utility/config");
var TABLES = require("../../../utility/tables");
var express = require("express");
var router = express.Router();
var UserModule = require("./users");

router.get("/", function (req, res, next) {
  res.json({ status: "ok" });
});

/* GET users listing. */
router.get("/list", async function (req, res, next) {
  const query = req.query;
  UserModule.getUsers(query)
    .then((response) => {
      if (response) {
        res.json(response.Items ? response.Items : []);
      }
    })
    .catch((err) => {
      console.log("error",err)
      res.json({ error: "something went wrong" });
    });
});

module.exports = router;
