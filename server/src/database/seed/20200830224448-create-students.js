module.exports = {
	up: async (queryInterface) =>
		queryInterface.bulkInsert(
			'students',
			[
				{
					name: 'Joao',
					last_name: 'Pedro',
					age: 17,
					email: 'joao@joao.com',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Maria',
					last_name: 'José',
					age: 25,
					email: 'maria@maria.com',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Arthur',
					last_name: 'Marinho',
					age: 29,
					email: 'arthur@arthur.com',
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		),

	down: async (queryInterface) =>
		queryInterface.bulkDelete('students', null, {}),
}
