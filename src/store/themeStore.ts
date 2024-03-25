import { create } from 'zustand';
import { TThemeColors, TThemeStore } from './types/TThemeStore';

export const themeStore = create<TThemeStore>((set) => ({
  theme: 'orange',
  setTheme: (theme: TThemeColors) => set(() => ({ theme }))
}));
