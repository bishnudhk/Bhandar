// craete hooks load all products from backend 
import { useQuery } from "@tanstack/react-query"
import apiClient from "../apiClient"
import { Products } from "../types/Products"
export const useGetProductQuery = () => 
useQuery({
    queryKey: ["products"],
    queryFn: async() => (await apiClient.get<Products[]> (`api/products`)).data,
})

export const useGetProductDetailsBySlugQuery = (slug: string) => 
useQuery({
  queryKey: ["products", slug],
  queryFn: async () => 
  (await apiClient.get<Products> (`api/products/${slug}`)).data,  
}
)
