


export interface OrderSchema {
    type: OrderTypes,
    retailer_order_id: '123',
    order_lines: [
   {
    id: number,
    notes: [],
    order_id: number,
    quantity: number,
    retailer_sku: string,
    billed_amount: number,
    original_quantity: number,
    unit_price: number,
    tax_billed_amount: number,
    variant_id: number,
   }
   ],
    shipping_paid: number,
    shipping_method_code: ShippingCompanies,
    retailer_id: number,
    expired: boolean,
    created_at: string,
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