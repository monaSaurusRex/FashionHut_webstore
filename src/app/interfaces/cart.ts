import { Product } from "./product";

export interface Cart {
    
    id: number;
    items: Item[];
    cartTotal: number; //subtotal for items in cart
    // customer id
}

// export interface CartItem{
//     id: number;
//     customerId: number; //will be empty if the customer isn't logged in
//     product: Product[];
//     price: number;
//     quantity: number;
// }

export interface Item{
    id: number;
    product: Product[]; // refers to the product added to the cart
    quantity: number; //quantity of a product added to the cart
    // price: number; //price of the product when it was added to the cart
}
