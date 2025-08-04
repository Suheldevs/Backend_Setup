import express from 'express'
const app = express()
import cors from 'cors'
import cookieParser from 'cookie-parser'
import {ApiError} from './utils/ApiError.js'
app.use(cors({
    origin:process.env.CORS_ORIGIN ,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


app.get('/', (req,res)=>{
    res.send("Server is running")
})





app.use("*",(req, res)=>{
res.ApiError(404,"Route not found")
})
export {app}