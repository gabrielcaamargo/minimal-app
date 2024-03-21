import { useMutation } from '@tanstack/react-query';
import { signup } from '../api';
import { TSignupDto } from '../types';

import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { TAuthNavigationRoutesProps } from '@/routes/AuthRoutes';

export function useSignup() {
  const navigation = useNavigation<TAuthNavigationRoutesProps>();

  return useMutation({
    mutationFn: (signinDto: TSignupDto) => signup(signinDto),
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Register successful!'
      });
      navigation.navigate('Signin');
    },
    onError: (err) => {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: err.message
      });
    }
  });
}
