const mongoose = require("mongoose");

function DbConnection() {
  const DB_URL = process.env.MONGO_URL;

  mongoose.connect(DB_URL);

  const db = mongoose.connection;

  db.on("error", console.error.bind("Connection error"));
  db.once("open", function () {
    console.log("DB Connected !!");
  });
}

// CRUD => Create, Read, Update & Delete
module.exports = DbConnection;
