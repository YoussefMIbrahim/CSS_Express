let express = require('express')
let db =  require('../models')
let Sequelize = require('sequelize')
let Ticket = db.Ticket


// using the express router to make our api paths
let router = express.Router()

// setting the code for our api's /tickets get method 
router.get('/tickets' , function(req,res,next){
    Ticket.findAll().then(tickets => {
        return res.json(tickets)
    })
    .catch(err => next(err))
})
// setting the code for our api's /tickets post method 
router.post('/tickets', function(req,res,next) {
    Ticket.create( req.body).then( data => {
        return res.status(201).send('done')
    }).catch( err => { //checking for validation errors and if not that passing it to next
        if(err instanceof Sequelize.ValidationError){
            let message = err.errors.map(e=>e.message)
            return res.status(500).json(message)
        }
        return next(err)
    })
})
// setting the code for our api's delete method but adding an id to the path to pick who to to delete
router.delete('/tickets/:id', function(req,res,next){
    Ticket.destroy({where: {id: req.params.id}})
    .then(rowModified => {
        return res.send('ok')
    }).catch(err => next(err))
})
module.exports = router