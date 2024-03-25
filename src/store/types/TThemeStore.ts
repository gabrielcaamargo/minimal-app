import { theme } from '@/theme';

type TThemeStore = {
  theme: typeof theme
  setTheme: (newTheme: typeof theme) => void
}

export { TThemeStore };
