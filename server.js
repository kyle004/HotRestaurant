const express = require('express')
const { join } = require('path')

const app = express()

// base node.js input accepts
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// route requires
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

// listen
app.listen(process.env.PORT || 3000 , () => console.log('Server is running...'))
