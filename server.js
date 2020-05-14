let express = require('express')
let bodyParser = require('body-parser')
let api_routes = require('./routes/api.js')
let path = require('path')

let app = express()


app.use(bodyParser.json())
// telling our server where the dist directory is
app.use(express.static(path.join(__dirname, 'css-ticketing', 'dist')))
// giving our server access to the api rooutes that we made with express
app.use('/api', api_routes)


app.use(function(req,res,next){
    res.status(404).send('Not found')
})

app.use(function(req,res,next){
    console.error(err.stack)
    res.status(500).send('server error')
})

//checking for enviroment port or 3000 by default for the server to be hosted on
let server  = app.listen(process.env.PORT || 3000, function(){
    console.log('Express server is running on port ' ,server.address().port);
    
})