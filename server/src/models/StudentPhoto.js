import Sequelize, { Model } from 'sequelize'
import appConfig from '../config/app'

export default class StudentsPhoto extends Model {
	static init(sequelize) {
		super.init(
			{
				originalname: {
					type: Sequelize.STRING,
					defaultValue: '',
					validate: {
						notEmpty: {
							msg: 'originalname cannot be null',
						},
					},
				},
				filename: {
					type: Sequelize.STRING,
					defaultValue: '',
					validate: {
						notEmpty: {
							msg: 'filename cannot be null',
						},
					},
				},
				student_id: {
					type: Sequelize.STRING,
					defaultValue: '',
					validate: {
						isInt: {
							msg: 'student_id must be a integer number',
						},
					},
				},
				link: {
					type: Sequelize.VIRTUAL,
					get() {
						return `${appConfig.url}/images/${this.getDataValue('filename')}`
					},
				},
			},
			{
				sequelize,
				tableName: 'students_photo',
				modelName: 'Students_photo',
			}
		)
		return this
	}

	static associate(models) {
		this.belongsTo(models.Student, { foreignKey: 'student_id' })
	}
}
