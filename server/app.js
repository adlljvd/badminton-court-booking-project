
import express from "express";
import { createServer } from 'node:http';
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./router/index.js"
import { Server } from 'socket.io';
import RoomModel from "./models/room.js";
import MessageModel from "./models/message.js";


const app = express();
dotenv.config();

const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router)


const server = createServer(app);
const io = new Server(server);
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('JOIN_ROOM', async (room) => {
        let findRoom = await RoomModel.checkRoom(room.courtId, room.userId, room.adminId)
        if(!findRoom){
            findRoom = await RoomModel.addRoom(room.courtId, room.userId, room.adminId)
        }
        socket.join(findRoom._id.toString());
        io.to(findRoom._id.toString()).emit('JOIN_ROOM', findRoom); //kirim ke client
      });

    socket.on('SEND_MESSAGE', async (payload) => {
        console.log(payload, "<< ini pyaoad")

        const body = {
            userId: payload.userId,
            roomId:payload.roomId, 
            text:payload.text,
            x: "x"
        }
        console.log(body, "<< ini body")
        const message = await MessageModel.addMessage({
            userId: payload.userId,
            roomId:payload.roomId, 
            text:payload.text
        })
        io.to(payload.roomId).emit("SEND_MESSAGE",{"_id": message._id,"roomId": payload.roomId, "text": payload.text, "userId": payload.userId});
      });
  });

  
// app.listen(port, () => {
//     console.log(`Server Running on Port http://localhost:${port}`)
// })

server.listen(port, () => {
    console.log(`server running at ${port}`);
  });


export { app } 
