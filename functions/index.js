import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { getAllPhotos, addNewPhoto, likePost } from "./src/photos.js"


const app = express()
app.use(cors())
app.use(express.json()) // anytime we do anything other than .get

// routes here...
app.get('/photos', getAllPhotos) 
app.post('/photos', addNewPhoto) 
app.patch('/photos/:photoId', likePost)



export const api = functions.https.onRequest(app)

