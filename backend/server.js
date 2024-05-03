// package imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// db conection
import connectToMongoDB from "./db/connectToMongoDB.js"

// file imports
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

// variable
const app = express();
const PORT = process.env.PORT || 5000;

// dotenv configuration
dotenv.config();

// middlewares
app.use(express.json()); // to parse the incoming request with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//     // root route http://localhost:PORT/
//     res.send("Hello world!!");
// });


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`⚡ Server Running on port http://localhost:${PORT}`);
})