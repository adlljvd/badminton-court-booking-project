import express from 'express'
import NotificationController from '../controllers/NotificationController.js';

export default function notificationRouter() {
    const router = express.Router()

    router.get("/", NotificationController.getNotification);
    return router
}