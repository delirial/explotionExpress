const express = require('express')
const app = express()


app.get('/', (req, res) => {
    console.log('Request',res.header)
    res.send('Hello World!')
})

const users = [{id: 0,name:'Pepe'},{id: 1,name:'Jose'}]

app.get('/users', (req, res ) => {
    res.json(users)
})


app.get('/users/:id', (req,res ) => {
    const userId = req.params.id
    console.log(userId)
    console.log(users[0].id)
    const user = users.find(user => user.id == userId )
    console.log(user)
    res.json(user)
})







app.listen(3000,() => console.log('Example app listening on port 3000!'))