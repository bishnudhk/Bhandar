import { Products } from "./types/Products";

export const sampleProducts: Products[] = [
  {
    name: "nike Slim shirt",
    slug: "nike-slim-shirt",
   
    image: "../public/logo192.png",
    category: "Shirts",
    brand: "Nike",
    price: 300,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    description: "high quality shirt",  

  },
  
  {
    name: "Adidas Fit shirt",
    slug: "adidas-fit-shirt",
    image: "/image/AdidsShirt.jpg",
    category: "Shirts",
    brand: "Adidas",
    price: 400,
    countInStock: 10,
    rating: 4.0,
    numReviews: 14,
    description: "high quality shirt",  

  },
  {
    name: "Denim Slim pant",
    slug: "Denim-slim-shirt",
    image: "../public/image/denimPaint.jpg",
    category: "Pant",
    brand: "Denim",
    price: 1300,
    countInStock: 8,
    rating: 4.8,
    numReviews: 20,
    description: "high quality pant",  

  },
];

