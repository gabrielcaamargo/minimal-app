import { themeStore } from '@/store/themeStore';

export function useThemeStore() {
  const theme = themeStore((state) => state.theme);
  const setTheme = themeStore((state) => state.setTheme);

  return { theme, setTheme };
}
