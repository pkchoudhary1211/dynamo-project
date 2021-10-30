var docClient = require("../../../utility/config");
var TABLES = require("../../../utility/tables");

/* get user list */
async function getUsers(query) {
  const { email } = query;
  var query = {
    TableName: TABLES.User,
  };
  let expressionAttributeNames = {};
  let expressionAttributeValues = {};

  /* If email filter */
  if (email) {
    expressionAttributeNames = { "#email": "email" };
    expressionAttributeValues = {
      ":email": email,
    };
  }
  // if is there any filter applied
  if (Object.keys(expressionAttributeValues).length > 0) {
    query = {
      ...query,
      FilterExpression: "begins_with(#email ,:email)",
      ExpressionAttributeNames: { ...expressionAttributeNames },
      ExpressionAttributeValues: { ...expressionAttributeValues },
    };
  }
  const result = await docClient.scan(query).promise();
  return result;
}
module.exports = {
  getUsers: getUsers,
};
