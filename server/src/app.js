import dotenv from 'dotenv'
import { resolve } from 'path'
import cors from 'cors'

const corsOptions = {
	origin: function (origin, callback) {
		const whiteList = ['http://localhost:3000']
		if (whiteList.indexOf(origin) !== -1) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by cors'))
		}
	},
}

dotenv.config()

import './database'

import express from 'express'
import HomeRoute from './routes/HomeRoutes'
import UserRoute from './routes/UserRoutes'
import StudentRoutes from './routes/StudentRoutes'
import SessionRoute from './routes/SessionRoutes'
import PhotoRoute from './routes/PhotoRoutes'

class App {
	constructor() {
		this.app = express()
		this.middlewares()
		this.routes()
	}

	middlewares() {
		this.app.use(cors())
		this.app.use(express.urlencoded({ extended: true }))
		this.app.use(express.json())
		this.app.use(express.static(resolve(__dirname, '..', 'uploads')))
	}

	routes() {
		this.app.use(HomeRoute)
		this.app.use('/users', UserRoute)
		this.app.use('/session', SessionRoute)
		this.app.use('/students', StudentRoutes)
		this.app.use('/photos', PhotoRoute)
	}
}

export default new App().app
