import { View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useColors } from '@/hooks/useColors';

import { AuthRoutes } from './AuthRoutes';

export function Routes() {
  const { gray } = useColors();
  DefaultTheme.colors.background = gray[700];

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </View>
  );
}
