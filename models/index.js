let Sequelize = require('sequelize')

let env = process.env.NODE_ENV || 'development'
let config = require(__dirname + '/../config.json')[env]

let db = {}

// checking if there's an envirment variable to use with heroku
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config)
}else{
    sequelize = new Sequelize(config)
}

// importing the model that we created
let model = sequelize['import']('./ticket.js')
db[model.name] = model

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db