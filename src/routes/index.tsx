import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './AuthRoutes';

export function Routes() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </View>
  );
}
