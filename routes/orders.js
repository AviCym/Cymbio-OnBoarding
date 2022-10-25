"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const root_1 = __importDefault(require("./root"));
const postOrder_1 = require("../controllers/postOrder");
root_1.default.post('/post', postOrder_1.order);
exports.default = root_1.default;
//# sourceMappingURL=orders.js.map