// const mongoose = require("mongoose");

// function DbConnection() {
//   const DB_URL = process.env.MONGO_URL;

//   mongoose.connect(DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// }

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "Connection error"));
// db.once("open", function () {
//   console.log("DB Connected !!");
// });

// // CRUD => Create, Read, Update & Delete
// module.exports = DbConnection;

const mongoose = require("mongoose");

const uri =
  "mongodb+srv://MONGO-DB:#Kash447522141422@book-record-management.zng7hcu.mongodb.net/?retryWrites=true&w=majority&appName=Book-Record-Management";

mongoose.connect(uri, function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Connected successfully to server");
});
