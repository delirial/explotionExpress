import { Router } from 'express'
import { dice } from './../controllers/gamesController'

const router : Router = Router()


router.get('/dice/:n',(req,res) => {
    const number = dice(req.params.n)
    res.json({ result : number })
})

export const gamesRouter: Router = router;