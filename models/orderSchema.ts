


export interface OrderSchema {
    type: OrderTypes,
    retailer_order_id: '123',
    order_lines: [
   {
    id: Number,
    notes: [],
    order_id: Number,
    quantity: Number,
    retailer_sku: String,
    billed_amount: Number,
    original_quantity: Number,
    unit_price: Number,
    tax_billed_amount: Number,
    variant_id: Number,
   }
   ],
    shipping_paid: Number,
    shipping_method_code: ShippingCompanies,
    retailer_id: Number,
    expired: Boolean,
    created_at: String,
}

export enum ShippingCompanies {
    FEDEX='FEDEX',
    DHL='DHL',
    ISRAELPOST='ISRAELPOST'
}
export enum OrderTypes {
    ECOMMERCE ='ECOMMERCE',
} 


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
   }