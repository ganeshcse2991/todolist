import Sequelize from 'sequelize';
var sequelize = new Sequelize('todos', 'test', 'up1234', {
	dialect: 'postgres',
	pool: {
		max: 10, //maximum open connections
		min: 2, //minimum no of connections
		idle: 10000, // remove idle connection after 10 seconds
		define: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	},
});

export const Task = sequelize.import('./models/task');

const models = {
	Task
}

models.sequelize = sequelize;