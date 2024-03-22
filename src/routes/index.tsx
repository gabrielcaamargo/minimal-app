import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useColors } from '@/hooks/useColors';

import { AuthRoutes } from './AuthRoutes';
import { useUserStore } from '@/hooks/store/useUserStore';
import { AppRoutes } from './AppRoutes';

export function Routes() {
  const { token } = useUserStore();
  const { gray } = useColors();

  DefaultTheme.colors.background = gray[700];

  return (
    <NavigationContainer>
      {token ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
