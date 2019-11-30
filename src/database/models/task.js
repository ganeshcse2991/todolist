import Sequelize from 'sequelize';

export default sequelize => {
  return sequelize.define('task', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    completed: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  },
    {
      tableName: 'task',
      underscored: true
  })
}