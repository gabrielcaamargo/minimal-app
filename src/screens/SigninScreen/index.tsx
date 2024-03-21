/* eslint-disable react/no-unescaped-entities */
import { View } from '@/components/common/View';
import { ActivityIndicator, Image } from 'react-native';

import { SigninSchema, SigninSchemaType } from './schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as Styled from './styles';

import { FormTextInput } from '@/components/common/FormTextInput';
import { KeyboardAvoidingView } from '@/components/common/KeyboardAvoidingView';
import { Button } from '@/components/common/Button';
import { FormPasswordInput } from '@/components/common/FormPasswordInput';

import { useSignin } from '@/services/auth/hooks/useSignin';

import { useNavigation } from '@react-navigation/native';
import { TAuthNavigationRoutesProps } from '@/routes/AuthRoutes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function SigninScreen() {
  const navigation = useNavigation<TAuthNavigationRoutesProps>();
  const { control, formState, handleSubmit } = useForm<SigninSchemaType>({
    resolver: zodResolver(SigninSchema),
    mode: 'onChange',
    delayError: 500,
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const { mutateAsync: handleSignin, isPending } = useSignin();

  async function handleSubmitLoginForm(values: SigninSchemaType) {
    await handleSignin(values);
  }

  function handleNavigateToRegister() {
    navigation.navigate('Signup');
  }

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

            <FormPasswordInput
              control={control}
              name='password'
              placeholder='Password'
              errorMessage={formState.errors.password?.message}
              password
            />
          </Styled.FormContainerFields>

          <Styled.FormContainerFooter>
            <Button
              disabled={(!formState.isValid || isPending)}
              variant={(!formState.isValid || isPending) ? 'disabled' : 'default'}
              onPress={handleSubmit(handleSubmitLoginForm)}
            >
              {!isPending ? 'Sign in' : <ActivityIndicator color='#FFF' size={18} />}
            </Button>
            <Styled.FormContainerFooterCallToAction>
              <Styled.RegisterText>
              Don't have an account yet?
              </Styled.RegisterText>
              <Styled.RegisterTextLink activeOpacity={0.6} onPress={handleNavigateToRegister}>
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
