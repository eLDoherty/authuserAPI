import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./app/routes/index.js";
dotenv.config();
const app = express();
 
app.use(cors({ credentials:true }));
app.use(cookieParser());
app.use(express.json());
app.use(router);
 
app.listen(8000, ()=> console.log('Server running at port 8000'));