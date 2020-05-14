let express = require('express')
let db =  require('../models')
let Sequelize = require('sequelize')
let Ticket = db.Ticket



let router = express.Router()

router.get('/tickets' , function(req,res,next){
    Ticket.findAll().then(tickets => {
        return res.json(tickets)
    })
    .catch(err => next(err))
})

router.post('/tickets', function(req,res,next) {
    Ticket.create( req.body).then( data => {
        return res.status(201).send('done')
    }).catch( err => {
        if(err instanceof Sequelize.ValidationError){
            let message = err.errors.map(e=>e.message)
            return res.status(500).json(message)
        }
        return next(err)
    })
})

module.exports = router