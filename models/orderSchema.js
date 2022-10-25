"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderTypes = exports.ShippingCompanies = void 0;
var ShippingCompanies;
(function (ShippingCompanies) {
    ShippingCompanies["FEDEX"] = "FEDEX";
    ShippingCompanies["DHL"] = "DHL";
    ShippingCompanies["ISRAELPOST"] = "ISRAELPOST";
})(ShippingCompanies = exports.ShippingCompanies || (exports.ShippingCompanies = {}));
var OrderTypes;
(function (OrderTypes) {
    OrderTypes["ECOMMERCE"] = "ECOMMERCE";
})(OrderTypes = exports.OrderTypes || (exports.OrderTypes = {}));
const dummy = {
    type: 'ECOMMERCE',
    retailer_order_id: '123',
    order_lines: [
        {
            id: 1,
            notes: [],
            order_id: 1,
            quantity: 100,
            retailer_sku: 'SKU123',
            billed_amount: 299,
            original_quantity: 10,
            unit_price: 299,
            tax_billed_amount: 10,
            variant_id: 123,
        }
    ],
    shipping_paid: 10,
    shipping_method_code: 'FEDEX',
    retailer_id: 123,
    expired: false,
    created_at: new Date(),
};
//# sourceMappingURL=orderSchema.js.map