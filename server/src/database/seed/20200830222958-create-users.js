module.exports = {
	up: async (queryInterface) =>
		queryInterface.bulkInsert(
			'users',
			[
				{
					name: 'Joao',
					password_hashed:
						'$2a$10$Nq27CgtWTf5oFiepxzIV9etcSDJiQCDs.hVzghRHdcUsAEjgp02Uu',
					email: 'joao@joao.com',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Maria',
					password_hashed:
						'$2a$10$Nq27CgtWTf5oFiepxzIV9etcSDJiQCDs.hVzghRHdcUsAEjgp02Uu',
					email: 'maria@maria.com',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'Arthur',
					password_hashed:
						'$2a$10$Nq27CgtWTf5oFiepxzIV9etcSDJiQCDs.hVzghRHdcUsAEjgp02Uu',
					email: 'arthur@arthur.com',
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		),

	down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
}
