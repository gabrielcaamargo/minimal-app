import { ActivityIndicator, StatusBar } from 'react-native';

import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components';
import theme from '@theme/index';
import { Routes } from '@/routes';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useColors } from '@/hooks/useColors';
import { View } from '@/components/common/View';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  });

  if(!fontsLoaded) {
    <View>
      <ActivityIndicator size={32} color='#1A1A1A' />
    </View>;
  }

  const { gray } = useColors();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle='light-content' translucent backgroundColor={gray[700]} />
          <Routes />
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}