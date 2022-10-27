"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
class Video extends objection_1.Model {
    static get tableName() {
        return "video";
    }
}
exports.default = Video;
//# sourceMappingURL=video.js.map