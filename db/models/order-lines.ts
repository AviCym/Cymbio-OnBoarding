import { Model } from "objection";

export default class OrderLines extends Model {
    static get tableName() {
        return "order_lines";
       } 
}
