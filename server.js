"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const routers_1 = require("./api/routers");
app.use('/users', routers_1.usersRouter);
app.use('/movies', routers_1.moviesRouter);
app.use('/games', routers_1.gamesRouter);
app.listen(3000, () => console.log('Example app listening on port 3000'));
//# sourceMappingURL=server.js.map