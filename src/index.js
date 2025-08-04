import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
import connectDB from "./db/index.db.js";
import express from 'express'
const app = express()
const port = process.env.PORT || 3000
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`)
        })
        app.on("error", (error) => {
            console.log("ERRR: ", error);
            throw error
        })
    })
    .catch((error) => {
        console.log("MONGO db connection failed !!! ", error)
    })