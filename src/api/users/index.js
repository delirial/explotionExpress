const express = require('express')
const dice = require('../../../dice')
const router = express.Router()

//CREATE REQUEST UPDATE DELETE 
const users = [{id: 0,name:'Pepe'},{id: 1,name:'Jose'}]


router.get('/', (req, res ) => {
    res.json(users)
})


router.get('/:id', (req,res ) => {
    const userId = req.params.id
    console.log(userId)
    console.log(users[0].id)
    const user = users.find(user => user.id == userId )
    console.log(user)
    res.json(user)
})


router.post('/users',(req, res) => {
    
    if(Object.keys(req.body).length <= 0 ){
        res.status(400).send('Empty body?')
        
    }else{
        const newUser = req.body;
        users.push(newUser)
        res.json(newUser)
    }
})

module.exports = router