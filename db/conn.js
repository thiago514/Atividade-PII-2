const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('bd_tarefas','root','123456789',{
    host:'127.0.0.1',
    dialect : 'mysql',
    port : 3306
})

try{
    sequelize.authenticate()
    console.log('Conectamos com o Sequelize')
} catch (error) {
    console.log('Erro ao conectar com o BD: ',error)
}
module.exports = sequelize