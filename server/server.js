import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";

//CREATE EXPRESS APP AND HTTP SERVER
const app = express();
const server = http.createServer(app);

//MIDDLEWARE SETUP
app.use(express.json({ limit: "4mb" }));
app.use(cors());

app.use("/api/status", (req, res) => res.send("Server is live"));
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
