// craete hooks load all products from backend
import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";
import { Products } from "../types/Products";

export const useGetProductQuery = () =>
  useQuery({
    queryKey: ["products"],

    queryFn: async () =>
      (await apiClient.get<Products[]>(`/api/products`)).data,
  });

export const useGetProductDetailsBySlugQuery = (slug: string | undefined) => useQuery({
    queryKey: ["products", slug],
    queryFn: () =>{
      return apiClient.get(`api/products/${slug}`).then(res => res?.data?.data)
    },
    enabled: !!slug
});