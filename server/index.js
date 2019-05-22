const dotenv = require("dotenv").config()
const An = require("./Authnodemailer")
const express = require("express")
const app = express()
app.use(express.json())

const {SERVER_PORT} = process.env



app.post("/api/email", An.addContactForm)





app.listen(SERVER_PORT, ()=> console.log(`linting on ${SERVER_PORT}`))