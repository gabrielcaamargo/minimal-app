import { ActivityIndicator, StatusBar } from 'react-native';

import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components';
import theme from '@theme/index';
import { Routes } from '@/routes';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View } from '@/components/common/View';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator size={32} color='#1A1A1A' />
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1A1A1A' }}>
          <StatusBar barStyle='light-content' translucent backgroundColor='#1A1A1A'/>
          <Routes />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
