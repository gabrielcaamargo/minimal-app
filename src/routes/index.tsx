import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useColors } from '@/hooks/useColors';

import { AuthRoutes } from './AuthRoutes';

export function Routes() {
  const { gray } = useColors();

  DefaultTheme.colors.background = gray[700];

  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
