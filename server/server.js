// require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  })
);
app.use("/", userRoutes);

// const URI = process.env.URI;
mongoose
  .connect('mongodb+srv://abhaytiwari:<password>@cluster0.wyazj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err.message));


// .coonect('mongodb://localhost/admin')
// const PORT = process.env.PORT || 5000;
// const port 5500;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
app.listen(5500, function(){
  console.log("Server started on localhost:5500");
});
