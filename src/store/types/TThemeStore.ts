type TThemeColors = 'purple' | 'orange' | 'pink' | 'blue'

type TThemeStore = {
  theme: TThemeColors
  setTheme: (theme: TThemeColors) => void
}

export { TThemeStore, TThemeColors };
