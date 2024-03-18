import { SigninScreen } from '@/screens/SigninScreen';
import { SignupScreen } from '@/screens/SignupScreen';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';

type TAuthRoutes = {
  SigninScreen: undefined
  SignupScreen: undefined
}

export type TAuthNavigationRoutesProps = NativeStackNavigationProp<TAuthRoutes>

const Stack = createNativeStackNavigator<TAuthRoutes>();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade'
      }}
    >
      <Stack.Screen name='SigninScreen' component={SigninScreen} />
      <Stack.Screen name='SignupScreen' component={SignupScreen} />
    </Stack.Navigator>
  );
}
