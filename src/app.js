import dotenv from 'dotenv'

dotenv.config()

import './database'

import express from 'express'
import HomeRoute from './routes/home'
import UserRoute from './routes/user'
import SessionRoute from './routes/session'

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
    this.app.use('/users', UserRoute)
    this.app.use('/session', SessionRoute)
  }
}

export default new App().app
