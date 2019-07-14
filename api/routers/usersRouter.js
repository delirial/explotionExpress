"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const router = express_1.Router();
const users = [{ id: 0, name: 'Pepe' }, { id: 1, name: 'Jose' }];
router.get('/', (req, res, next) => {
    usersController_1.usersController(req, res, next);
    res.json(users);
});
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id == userId);
    console.log(user);
    res.json(user);
});
router.post('/users', (req, res) => {
    if (Object.keys(req.body).length <= 0) {
        res.status(400).send('Empty body?');
    }
    else {
        const newUser = req.body;
        users.push(newUser);
        res.json(newUser);
    }
});
exports.usersRouter = router;
//# sourceMappingURL=usersRouter.js.map