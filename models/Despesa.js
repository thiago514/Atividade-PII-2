const { DataTypes } = require('sequelize')
const db = require ('../db/conn')

const Despesa = db.define('Despesa', {
    titulo : {
        type : DataTypes.STRING,
        allowNull : false
    },
    descricao : {
        type : DataTypes.STRING,
    },
    valor_parcela : {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    qtn_parcelas : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    valor_total : {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    categoria : {
        type : DataTypes.STRING,
        allowNull : false
    }

})
module.exports = Despesa
