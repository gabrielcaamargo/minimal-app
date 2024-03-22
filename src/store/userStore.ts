import { create } from 'zustand';
import { TUserStore } from './types';

export const userStore = create<TUserStore>((set) => ({
  token: '',
  setToken: (newToken: string) => set(() => ({ token: newToken }))
}));
