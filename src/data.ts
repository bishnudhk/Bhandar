import { Products } from "./types/Products";

export const sampleProducts:Products[] = [
  {
    id:1,
    name: "nike Slim shirt",
    slug: "nike-slim-shirt",
    image: "../image/nikeShirt.jpg",
    category: "Shirts",
    brand: "Nike",
    price: 300,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    description: "high quality shirt",  

  },
  
  {
    id:2,
    name: "Adidas Fit shirt",
    slug: "adidas-fit-shirt",
    category: "Shirts",
    image: "../image/adidsShirt.jpg",
    brand: "Adidas",
    price: 400,
    countInStock: 10,
    rating: 4.0,
    numReviews: 14,
    description: "high quality shirt",  

  },
  {
    id:3,
    name: "Denim Slim pant",
    slug: "Denim-slim-shirt",
    category: "Pant",
    image: "../image/denimPaint.jpg",
    brand: "Denim",
    price: 1300,
    countInStock: 8,
    rating: 4.8,
    numReviews: 20,
    description: "high quality pant",  

  },
];


