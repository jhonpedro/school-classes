module.exports = {
	up: async (queryInterface, Sequelize) =>
		queryInterface.createTable('students_photo', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			originalname: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			filename: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			student_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'students',
					key: 'id',
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		}),

	down: async (queryInterface) => queryInterface.dropTable('students_photo'),
}
