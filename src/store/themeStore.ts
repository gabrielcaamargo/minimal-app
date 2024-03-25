import { create } from 'zustand';
import { TThemeStore } from './types/TThemeStore';
import { orangeTheme, theme } from '@/theme';



export const themeStore = create<TThemeStore>((set) => ({
  theme: orangeTheme,
  setTheme: (newTheme: typeof theme) => set(() => ({ theme: newTheme }))
}));
