import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useColors } from '@/hooks/useColors';

import { AuthRoutes } from './AuthRoutes';
import { View } from '@/components/common/View';

export function Routes() {
  const { gray } = useColors();
  DefaultTheme.colors.background = gray[700];

  return (
    <View>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </View>
  );
}
