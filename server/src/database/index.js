import Sequelize from 'sequelize'
import databaseConfig from '../config/database'

import Student from '../models/Student'
import User from '../models/User'
import StudentPhoto from '../models/StudentPhoto'
import UserPhoto from '../models/UserPhoto'

const models = [Student, User, UserPhoto, StudentPhoto]

const connection = new Sequelize(databaseConfig)

models.forEach((model) => model.init(connection))
models.forEach((model) => model.associate && model.associate(connection.models))
