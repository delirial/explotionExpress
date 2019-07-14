"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = require("../controllers/gamesController");
const router = express_1.Router();
router.get('/dice/:n', (req, res) => {
    const number = gamesController_1.dice(req.params.n);
    res.json({ result: number });
});
exports.gamesRouter = router;
//# sourceMappingURL=gamesRouter.js.map