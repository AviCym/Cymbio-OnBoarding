import { Model } from "objection";
import Notes from "./notes";

export default class OrderLines extends Model {
    static get tableName() {
        return "order_lines";
       } 
       static get relationMappings() {
        return {
            notes: {
                relation: Model.HasManyRelation,
                modelClass: Notes,
                join: {
                    from: "notes.order_lines_id",
                    to: "order_lines.id"
               },
            },
            
        }
    }
}
