import express from "express"
import { RoomController } from "../controllers/RoomsController"
export const router = express.Router()

router.get("/", RoomController.getRoom)
router.get("/:id", RoomController.getRoomById)
router.post("/", RoomController.addRoom)
