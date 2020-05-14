module.exports = (sequelize, DataTypes) => {

    let Ticket = sequelize.define('Ticket', {
        name: {
            type: DataTypes.STRING,
            allowNull: false  
        }, email: {
            type: DataTypes.STRING,
            allowNull: false
        }, clientName: {
            type: DataTypes.STRING,
            allowNull: false
        }, clientEmail: {
            type: DataTypes.STRING,
            allowNull: false
        }, issue: {
            type: DataTypes.STRING,
            allowNull: false
        }, model: {
            type: DataTypes.STRING,
            allowNull: false 
        }
    })

    Ticket.sync({force: true}).then( () => {
        console.log('synced ticket table');
        
    })
    return Ticket
}