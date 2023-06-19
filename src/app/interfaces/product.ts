export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
      rate: number,
      count: number
    }
}
// export interface Product {
//   id: number, 
//   productName: string,
//   category: string,
//   size: string, //sizes in db stored as strings
//   description: string,
//   brand: string,
//   colour: string,
//   imageURL: string,
//   price: number
// }

