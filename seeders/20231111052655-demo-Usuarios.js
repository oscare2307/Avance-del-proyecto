module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clientes', [{
      nomCli: 'Dana Carolina',
      apeCli: 'Escobar Camaño',
      docIde: '1102233870',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
