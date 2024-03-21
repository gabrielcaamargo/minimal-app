import { useMutation } from '@tanstack/react-query';
import { signin } from '../api';
import { SigninDtoT } from '../types';

import Toast from 'react-native-toast-message';

export function useSignin() {
  return useMutation({
    mutationFn: (signinDto: SigninDtoT) => signin(signinDto),
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'We are redirecting you'
      });
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
