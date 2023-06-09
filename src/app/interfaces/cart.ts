import { Product } from "./product";

export interface Cart {
    
    id: number;
    items: Product[];
    totalItems: number;
    cartTotal: number;
}
