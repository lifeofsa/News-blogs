const { Sequelize } = require("sequelize");
// const Blog = require("../models/blogModel");
// const User = require("../models/userModel");

const sequelize = new Sequelize("blogsdb", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// Blog.sync({ force: true });
// User.sync({ force: true });
module.exports = sequelize;
// module.exports = sequelize;
