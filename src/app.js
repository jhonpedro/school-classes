import dotenv from 'dotenv'

dotenv.config()

import './database'

import express from 'express'
import HomeRoute from './routes/home'

class App {
  constructor() {
    this.app = express();
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
  }

  routes() {
    this.app.use(HomeRoute)
  }
}

export default new App().app
