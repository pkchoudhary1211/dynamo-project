var docClient = require("../../../utility/config");
var TABLES = require("../../../utility/tables");
var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/list", function (req, res, next) {
  const { email } = req.query;
  var params = {
    TableName: TABLES.User,
  };
  let expressionAttributeNames = {};
  let expressionAttributeValues = {};

  // if email filter
  if (email) {
    expressionAttributeNames = { "#email": "email" };
    expressionAttributeValues = {
      ":email": email,
    };
  }
  
  // if is there any filter applied
  if (Object.keys(expressionAttributeValues).length > 0) {
    params = {
      ...params,
      FilterExpression: "begins_with(#email ,:email)",
      ExpressionAttributeNames: { ...expressionAttributeNames },
      ExpressionAttributeValues: { ...expressionAttributeValues },
    };
  }
  //loading data
  docClient.scan(params, function (err, data) {
    if (err) {
      console.log("error", err);
      res.json({ error: "Something went Wrong!" });
    } else {
      res.json(data.Items ? data.Items : []);
    }
  });
});

module.exports = router;
