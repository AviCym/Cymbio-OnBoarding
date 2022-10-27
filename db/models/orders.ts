import { Model } from "objection";
import OrderLines from "./order-lines";

export default class Orders extends Model {
    static get tableName() {
        return "orders";
    }
    static get relationMappings() {
        return {
            order_lines: {
                relation: Model.HasManyRelation,
                modelClass: OrderLines,                
                join: {
                    from: "orders.id",
                    to: "order_lines.order_id"
                },
            },
        };
    }
}