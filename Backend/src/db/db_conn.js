const mongoose = require("mongoose");
const mongodb = "mongodb://127.0.0.1:27017/restaurant";

mongoose.set("strictQuery", false);

connect().then(() => {
  console.log("db connect");
}).catch((err) => {
  console.log(err);
});

async function connect() {
  await mongoose.connect(mongodb);
}

