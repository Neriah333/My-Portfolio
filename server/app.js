require("dotenv").config();
const cors = require("cors");

const express = require("express");
const contactRoutes = require("./contactRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});