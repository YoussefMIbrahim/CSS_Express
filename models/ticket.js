module.exports = (sequelize, DataTypes) => {

    let Ticket = sequelize.define('Ticket', {
        name: {
            type: DataTypes.STRING,  
        }, email: {
            type: DataTypes.STRING,
        }, clientName: {
            type: DataTypes.STRING
        }, clientEmail: {
            type: DataTypes.STRING
        }, issue: {
            type: DataTypes.STRING
        }, model: {
            type: DataTypes.STRING
        }
    })

    Ticket.sync({force: true}).then( () => {
        console.log('synced ticket table');
        
    })
    return Ticket
}