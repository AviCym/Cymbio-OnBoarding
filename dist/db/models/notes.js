"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
class Notes extends objection_1.Model {
    static get tableName() {
        return "notes";
    }
}
exports.default = Notes;
//# sourceMappingURL=notes.js.map