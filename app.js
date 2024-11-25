const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes"); // Poveži authRoutes
const serviceRoutes = require("./routes/serviceRoutes");

const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

// Poveži auth rute na "/api/users" putanju
app.use("/api/users", authRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.error("Error: " + err);
  });

sequelize
  .sync()
  .then(() => {
    console.log("Database synced.");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

app.use("/", serviceRoutes);

app.get("/", (req, res) => {
  res.send("WebShop backend is running!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
