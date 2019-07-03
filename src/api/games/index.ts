import { Router } from 'express'
import { dice } from './../controllers/gamesController'

const router : Router = Router()


router.get('/dice/:n',(req,res) => {
    const number = dice(req.params.n)
    res.json({ result : number })
})

router.get('/dice/:n/:emoticons', (req, res) => {

})

export const gamesRouter: Router = router;