var AWS = require("aws-sdk");
const DATABASE_CONFIG = require("./const");

// aws data base config
let awsConfig = DATABASE_CONFIG.DATABASE_CONFIG;
AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = docClient;
