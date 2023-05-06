import express from "express";
import ViteExpress from "vite-express";
import { WebSocketServer } from "ws";

const app = express();

// ViteExpress.config({ mode: "production" })

const wss = new WebSocketServer( { port: 8082 } );

wss.on('connection', ws => {
    console.log("User connected...");

    ws.send("Connected to server!");

    ws.on('close', () => {
        console.log("User disconnected!");
    })
})

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));