import { useMutation } from '@tanstack/react-query';
import { signin } from '../api';
import { TSigninDto, TSigninResponse } from '../types';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Toast from 'react-native-toast-message';

export function useSignin() {
  return useMutation({
    mutationFn: (signinDto: TSigninDto) => signin(signinDto),
    onSuccess: async (data: TSigninResponse) => {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'We are redirecting you'
      });

      await AsyncStorage.setItem('@token', data.accessToken);
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
