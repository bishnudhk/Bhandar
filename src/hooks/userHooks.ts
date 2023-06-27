import { useMutation } from "@tanstack/react-query";
import apiClient from "../apiClient";
import { UserInfo } from "../types/UserInfo";

export const useSigninMutation = () =>
  useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) =>
      (
        await apiClient.post<UserInfo>(`api/users/login`, {
            
          email,
          password,
        })
      ).data,
      
  });

export const useSignupMutation = () =>
  useMutation({
    mutationFn: async ({
      name,
      email,
      password,
    }: {
      // user_id: number
      name: string;
      email: string;
      password: string;
    }) =>
      (
        await apiClient.post<UserInfo>(`api/users/register`, {
          // user_id,
          name,
          email,
          password,
        })
      ).data,
  });
