import dotenv from "dotenv"
dotenv.config()

import "./src/database"
import express from "express"
import path from "path"
import session from "express-session"
import flash from "connect-flash"
import helmet from "helmet"
import mongoose from "mongoose"
import MongoStore from "connect-mongo"


import produtoRoutes from "./src/routes/produtoRoutes"
import {} from "./src/middlewares/globalVarsMiddleware"


class App {
    constructor(){
        this.app = express()
        this.configsMiddleware()
        this.appMiddleware()
        this.routes()
    }

    configsMiddleware(){
        mongoose.connect(process.env.CONNECTION_STRING)
                .then(console.log("BD CONECTADO"))
        const sessionOptions = session({
            secret: "MeuSecret",
            store: MongoStore.create({mongoUrl: process.env.CONNECTION_STRING}),
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 1,
                httpOnly: true
            }
        })
        this.app.use(express.urlencoded({extended:true}))
        this.app.use(express.json())
        this.app.use(express.static(path.resolve(__dirname, "..", "frontend", "dist")))
        this.app.use(flash())
        this.app.set("views", path.resolve(__dirname, "src", "views"))
        this.app.set("view engine", "ejs")
        this.app.use(sessionOptions)

        //App Security
        this.app.use(helmet())

    }

    appMiddleware(){
    }

    routes(){
        this.app.use("/produtos/", produtoRoutes)

    }
}

export default new App().app