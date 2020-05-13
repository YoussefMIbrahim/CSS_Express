let express = require('express')
let bodyParser = require('body-parser')
let api_routes = require('./routes/api.js')
let path = require('path')

let app = express()

let server  = app.listen(process.env.PORT || 3000, function(){
    console.log('Express server is running on port ' ,server.address().port);
    
})