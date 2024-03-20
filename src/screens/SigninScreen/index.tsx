/* eslint-disable react/no-unescaped-entities */
import { View } from '@/components/common/View';
import { Image } from 'react-native';

import { SigninSchema, SigninSchemaType } from './schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as Styled from './styles';
import { FormTextInput } from '@/components/common/FormTextInput';
import { KeyboardAvoidingView } from '@/components/common/KeyboardAvoidingView';
import { Button } from '@/components/common/Button';

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
          <Styled.FormContainerFields>
            <FormTextInput
              control={control}
              name='email'
              placeholder='Email'
              errorMessage={formState.errors.email?.message}
              keyboardType='email-address'
            />

            <FormTextInput
              control={control}
              name='password'
              placeholder='Password'
              errorMessage={formState.errors.password?.message}
              password
            />
          </Styled.FormContainerFields>

          <Styled.FormContainerFooter>
            <Button>Sign in</Button>
            <Styled.FormContainerFooterCallToAction>
              <Styled.RegisterText>
              Don't have an account yet?
              </Styled.RegisterText>
              <Styled.RegisterTextLink activeOpacity={0.6}>
                <Styled.RegisterText color='primary'>
                  Register
                </Styled.RegisterText>
              </Styled.RegisterTextLink>
            </Styled.FormContainerFooterCallToAction>
          </Styled.FormContainerFooter>
        </Styled.FormContainer>

      </View>
    </KeyboardAvoidingView>
  );
}
