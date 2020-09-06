import Sequelize, { Model } from 'sequelize'

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'the name must have at least 3 and 255 of maximum carachters',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'invalid email',
          },
        },
      },
      last_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'the last name must have at least 3 and 255 of maximum carachters',
          },
        },
      },
      age: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'age must be a integer number',
          },
        },
      },
    }, {
      sequelize,
    })
    return this
  }

  static associate(models) {
    this.hasMany(models.Students_photo, { foreignKey: 'student_id' })
  }
}
