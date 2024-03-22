import { Platform } from 'react-native';

import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { useColors } from '@/hooks/useColors';

import { EditProfileScreen } from '@/screens/app/EditProfileScreen';
import { HomeScreen } from '@/screens/app/HomeScreen';
import { MessagingScreen } from '@/screens/app/MessagingScreen';
import { ProfileScreen } from '@/screens/app/ProfileScreen';
import { UploadScreen } from '@/screens/app/UploadScreen';

import { AntDesign, Feather } from '@expo/vector-icons';

type TAppRoutes = {
  Home: undefined
  Upload: undefined
  Profile: undefined
  EditProfile: undefined
  Messaging: undefined
}

export type TAppNavigationProps = BottomTabNavigationProp<TAppRoutes>;

const Tab = createBottomTabNavigator<TAppRoutes>();

export function AppRoutes() {
  const { gray } = useColors();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: gray[400],
        tabBarInactiveTintColor: gray[500],
        tabBarStyle: {
          backgroundColor: gray[700],
          borderTopWidth: 1,
          borderTopColor: gray[500],
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: 12,
          paddingTop: 6
        }
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Upload'
        component={UploadScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircleo" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Messaging'
        component={MessagingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-circle" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='EditProfile'
        component={EditProfileScreen}
        options={{
          tabBarButton: () => null
        }}
      />
    </Tab.Navigator>
  );
}
