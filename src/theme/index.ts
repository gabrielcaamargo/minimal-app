const theme =  {
  colors: {
    gray: {
      100: '#F2F2F2',
      200: '#E4E4E4',
      300: '#C8C8C8',
      400: '#909090',
      500: '#333333',
      600: '#292929',
      700: '#1A1A1A'
    },
    primary: {
      300: '',
      400: '',
      500: '',
    },
    yellow: {
      500: '#E3BE17'
    },
    red: {
      500: '#FF0000'
    },
    green: {
      500: '#00FF29'
    },
    white: '#FFF',
    black: '#000'
  },
  typography: {
    smallText: {
      fontFamily: 'Inter_400Regular',
      fontSize: 12
    },
    commonText: {
      fontFamily: 'Inter_400Regular',
      fontSize: 16
    },
    pageTitle: {
      fontFamily: 'Inter_700Bold',
      fontSize: 28
    },
    sectionTitle: {
      fontFamily: 'Inter_600Bold',
      fontSize: 20
    }
  }
};

const purpleTheme: typeof theme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: {
      300: '#7134BF',
      400: '#5610B2',
      500: '#4B1F84'
    }
  }
};


const orangeTheme: typeof theme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: {
      300: '#B85300',
      400: '#E06500',
      500: '#FF780A'
    }
  }
};

const blueTheme: typeof theme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: {
      300: '#5B6FD9',
      400: '#3D52D5',
      500: '#090C9B'
    }
  }
};

const pinkTheme: typeof theme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: {
      300: '#C60990',
      400: '#B40883',
      500: '#A40777'
    }
  }
};


export { purpleTheme, orangeTheme, blueTheme, pinkTheme, theme };
