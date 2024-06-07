import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connnectDB from "./config/db.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  connnectDB();
  console.log(`Server listening on http://localhost:${PORT}`);
});
