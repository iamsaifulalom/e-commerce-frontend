// src/lib/api/auth.ts
import { SignUpFormValues } from '@/schema/sign-up-schema';
import ShopAPI from './axios';

export const signUp = async (payload: SignUpFormValues) => {
  const { data } = await ShopAPI.post('/auth/sign-up', payload);
  return data;
};

export const login = async (payload: any) => {
  const { data } = await ShopAPI.post('/auth/login', payload);
  return data;
};
