const router = express.Router()

router.get('/dice/:n',(req,res) => {
    const number = dice(req.params.n)
    const result = { result : number }
    res.json(result)
})

router.get('/dice/:n/:emoticons', (req, res) => {

})

module.exports = router