"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
class OrderLines extends objection_1.Model {
    static get tableName() {
        return "order_lines";
    }
}
exports.default = OrderLines;
//# sourceMappingURL=order-lines.js.map