"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const healthCheck = (req, res, next) => res.sendStatus(200);
const router = express_1.default.Router();
router.get('/healthcheck', healthCheck);
exports.default = router;
//# sourceMappingURL=root.js.map