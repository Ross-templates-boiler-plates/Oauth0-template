import express from "express";
import cors from "cors";
import dotenv from "dotenv";

console.log("Server is starting");
dotenv.config();
const app = express();
app.use(cors());

//routes
app.get("api/", (req, res) => res.status(200).json("hello from backend"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running on ${process.env.NODE_ENV} mode port ${PORT}`);
});
