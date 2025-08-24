import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import apiRoutes from "./src/routes/api.routes.js";
const arg = process.argv;

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

const dbUrl = process.env.DB_URL;
const dbName = process.env.DB_NAME;

try {
     await mongoose.connect(`${dbUrl}/${dbName}`);
     console.log("Connected to Database");
} catch (error) {
     console.error("Database Connection Failed");
     process.exit(1);
}

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
     res.send("Hello world!");
});


app.listen(arg[2], () => {
     console.log(`Server is running on ${arg[2]}`);
});