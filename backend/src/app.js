import "dotenv/config";
import { connectDb } from "./db/config.js";
import express from "express";
import syncDb from "./db/sync.js";
import allRoutes from "./routes/index.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(allRoutes);

app.listen(3000, () => {
  console.log("App running on port 3000");
  connectDb();
  syncDb().then(() => {
    console.log("DB synced");
  });
});
