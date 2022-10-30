"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const notes_1 = __importDefault(require("./notes"));
const order_lines_1 = __importDefault(require("./order-lines"));
class Orders extends objection_1.Model {
    static get tableName() {
        return "orders";
    }
    static get relationMappings() {
        return {
            order_lines: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: order_lines_1.default,
                join: {
                    from: "orders.id",
                    to: "order_lines.order_id"
                },
            },
            notes: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: notes_1.default,
                join: {
                    from: "orders.id",
                    to: "notes.order_id",
                },
            }
        };
    }
}
exports.default = Orders;
//# sourceMappingURL=orders.js.map