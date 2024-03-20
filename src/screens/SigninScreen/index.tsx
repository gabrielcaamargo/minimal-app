import { View } from '@/components/common/View';
import { Image } from 'react-native';

import { SigninSchema, SigninSchemaType } from './schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as Styled from './styles';
import { FormTextInput } from '@/components/common/FormTextInput';
import { KeyboardAvoidingView } from '@/components/common/KeyboardAvoidingView';

export function SigninScreen() {
  const { control, formState } = useForm<SigninSchemaType>({
    resolver: zodResolver(SigninSchema),
    mode: 'onChange',
    delayError: 500,
    defaultValues: {
      email: '',
      password: ''
    }
  });

  return (
    <KeyboardAvoidingView>
      <View centered paddingHorizontal='xlg'>
        <Image
          alt='Minimal social media'
          source={require('../../assets/images/logo.png')}
          style={{
            width: 164,
            height: 66
          }}
        />

        <Styled.FormContainer>
          <FormTextInput
            control={control}
            name='email'
            placeholder='Email'
            label='Email'
            errorMessage={formState.errors.email?.message}
            keyboardType='email-address'
          />

          <FormTextInput
            control={control}
            name='password'
            placeholder='Password'
            label='Password'
            errorMessage={formState.errors.password?.message}
            password
          />
        </Styled.FormContainer>
      </View>
    </KeyboardAvoidingView>
  );
}
