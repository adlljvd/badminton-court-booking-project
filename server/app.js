import express from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
import { configureSocket } from "./helpers/socket.js";
import { router } from "./router/index.js";
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = configureSocket(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
