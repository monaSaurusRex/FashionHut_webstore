import { Product } from "./product";

export interface Cart {
    
    id: number;
    items: Item[];
    cartTotal: number; //subtotal for items in cart
}

export interface Item{
    id: number;
    product: Product[];
    quantity: number; //quantity of products added to the cart
}
