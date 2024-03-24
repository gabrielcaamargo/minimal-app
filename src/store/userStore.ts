import { create } from 'zustand';
import { TUserStore } from './types';

export const userStore = create<TUserStore>((set) => ({
  token: undefined,
  setToken: (newToken: string) => set(() => ({ token: newToken })),
  isFirstSignin: false,
  setIsFirstSignin: (value: boolean) => set(() => ({ isFirstSignin: value }))
}));
