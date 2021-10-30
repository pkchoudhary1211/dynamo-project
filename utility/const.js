require('dotenv').config();
module.exports = DATABASE_INFO = {
  //all tables name 
  TABLES: {
    User: "users",
  },
  //db config
  DATABASE_CONFIG: {
    region: process.env.REGION,
    endpoint: process.env.END_POINT,
    accessKeyId: process.env.AWS_ACCESS_KEY_ENV,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
};
