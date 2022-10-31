"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const notes_1 = __importDefault(require("./notes"));
class OrderLines extends objection_1.Model {
    static get tableName() {
        return "order_lines";
    }
    static get relationMappings() {
        return {
            notes: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: notes_1.default,
                join: {
                    from: "notes.order_lines_id",
                    to: "order_lines.id"
                },
            },
        };
    }
}
exports.default = OrderLines;
//# sourceMappingURL=order-lines.js.map