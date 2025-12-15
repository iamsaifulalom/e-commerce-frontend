// src/lib/api/auth.ts
import { SignUpBody } from '@/schema/auth';
import ShopAPI from './axios';

export const signUp = async (payload: SignUpBody) => {
  const { data } = await ShopAPI.post('/auth/sign-up', payload);
  return data;
};

export const login = async (payload: any) => {
  const { data } = await ShopAPI.post('/auth/login', payload);
  return data;
};
