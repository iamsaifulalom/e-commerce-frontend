// src/lib/api/auth.ts
import { SignInBody, SignUpBody } from '@/schema/auth';
import ShopAPI from './axios';

export const signUp = async (payload: SignUpBody) => {
  const { data } = await ShopAPI.post('/auth/sign-up', payload);
  return data;
};

export const signIn = async (payload: SignInBody) => {
  const { data } = await ShopAPI.post('/auth/sign-in', payload);
  return data;
};
