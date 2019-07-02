const express = require('express')
const dice = require('./dice')
const app = express()
app.use(express.json())

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


app.get('/dice/:n',(req,res) => {
    const number = dice.dice(req.params.n)
    const result = { result : number }
    res.json(result)
})

app.get('/dice/:n/:emoticons', (req, res) => {

})

app.post('/users',(req, res) => {
    
    if(Object.keys(req.body).length <= 0 ){
        res.status(400).send('Empty body?')
        
    }else{
        const newUser = req.body;
        users.push(newUser)
        res.json(newUser)
    }
})

app.listen(3000,() => console.log('Example app listening on port 3000!'))