import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { auth } from "express-oauth2-jwt-bearer";

console.log("Server is starting");
dotenv.config();
const app = express();
app.use(cors());

const authMiddleware = auth({
  audience: "/api/protected",
  issuerBaseURL: "https://dev-pxibfut37jjet3qs.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

//routes
app.get("/api/unprotected", (req, res) => {
  console.log(`unprotected api of backEnd has been called`);
  return res.status(200).json("Hello from unprotected api of backend");
});

// enforce on all endpoints after
app.use(authMiddleware);
app.get("/api/protected", (req, res) => {
  console.log(`protected api of  backEnd has been called`);
  return res.status(200).json("Hello from protected api of backend");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
