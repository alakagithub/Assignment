const cors = require('cors');
const express = require("express");
const Restaurant = require("./models/restaurant");
const upload = require("express-fileupload");

require("./db/db_conn");

const app = express();
const port = 3003;
app.use(cors());
app.options('*', cors());

app.use(upload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/getRestaurant", async (req, res) => {
  try {
    const results = await Restaurant.find({}).select({ _id: 0, __v: 0 });

    if (results.length === 0) {
      return res.status(400).send({
        status: 400,
        message: "No data available",
      });
    }

    return res.status(200).send({
      status: 200,
      results,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "Please try again later",
    });
  }
});

app.post("/addRestaurant", async (req, res) => {
  try {
    const result = await Restaurant.create(req.body);

    return res.status(201).send({
      status: 201,
      message: "Data added successfully",
      result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      status: 500,
      message: "Please try again later",
    });
  }
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
