import express from "express"
import { RoomController } from "../controllers/RoomsController.js"


export default function roomRouter() {
    const router = express.Router()

    router.get("/", RoomController.getAllRooms)
    router.post("/", RoomController.createRoom)
    router.post("/", RoomController.deleteRoom)
    router.get("/:roomId", RoomController.getRoomById)

    return router
}

