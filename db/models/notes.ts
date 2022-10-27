import { Model } from "objection";

export default class Notes extends Model {
    static get tableName() {
        return "notes";
       } 
}