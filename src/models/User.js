import Sequelize, { Model } from 'sequelize'

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: true,
          len: {
            args: [4, 255],
            msg: 'Name must at least 4 and 255 of maximum caracheters',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Invalid email',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: true,
        },
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          notEmpty: true,
          len: {
            args: [6, 30],
            msg: 'Password must have at least 6 and 30 maximum carachters',
          },
        },
      },
    }, {
      sequelize,
    })
    return this
  }
}
