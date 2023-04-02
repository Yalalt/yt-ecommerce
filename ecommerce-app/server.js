import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

// config env
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middleqwares Morgan logger
app.use(express.json());
app.use(morgan("dev"));

// resp api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to ecommerce app",
  });
});

// Auth routes
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
