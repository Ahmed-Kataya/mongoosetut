const mongoose = require('mongoose')
const connectionString = require('./env')

mongoose.connect(connectionString, { useNewUrlParser: true })
.then(client=>{
    console.log("connected to db")
}).catch(error => console.error(error))
