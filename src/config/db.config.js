const dotenv = require("dotenv");

dotenv.config();
const url = `mongodb+srv://${process.env.E_USERNAME}:${process.env.E_PASSWORD}@${process.env.E_CLUSTER}.tlcopwh.mongodb.net/${process.env.E_DBNAME}?retryWrites=true&w=majority`;

module.exports = {
  url,
};
