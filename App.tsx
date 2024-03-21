import { ActivityIndicator, StatusBar } from 'react-native';

import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components';
import theme from '@theme/index';

import { Routes } from '@/routes';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { View } from '@/components/common/View';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Toast from 'react-native-toast-message';

export default function App() {
  const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: '#1A1A1A' }}>
            <StatusBar barStyle='light-content' translucent backgroundColor='#1A1A1A'/>
            <Routes />
            <Toast />
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
