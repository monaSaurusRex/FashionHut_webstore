import { Product } from "./product";

export interface Cart {
    
    id: number;
    items: Item[];
    cartTotal: number; //subtotal for items in cart
    // customer id
}

export interface Item{
    id: number;
    // product: Product[]; // refers to the product added to the cart
    quantity: number; //quantity of a product added to the cart
    // price: number; //price of the product when it was added to the cart
    productId: number; 
    productTitle: string; //title of the product when it was added to the cart
    productPrice: number; //price of the product when it was added to the cart
    productCategory: string;
    productImageURL: string; //imageUrl

    // product specifications
    // brand: string;
    // colour: string;
    // size: string;
}
