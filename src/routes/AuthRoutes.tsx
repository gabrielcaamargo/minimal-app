import { SigninScreen } from '@/screens/SigninScreen';
import { SignupScreen } from '@/screens/SignupScreen';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';

type TAuthRoutes = {
  Signin: undefined
  Signup: undefined
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
      <Stack.Screen name='Signin' component={SigninScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  );
}
