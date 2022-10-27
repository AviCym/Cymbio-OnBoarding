"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const channel_1 = __importDefault(require("./channel"));
class User extends objection_1.Model {
    static get tableName() {
        return "user";
    }
    ;
    static get relationMappings() {
        return {
            channel: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: channel_1.default,
                join: {
                    from: "user.channelId",
                    to: "channel.id"
                },
            },
        };
    }
    ;
}
exports.default = User;
//# sourceMappingURL=user.js.map