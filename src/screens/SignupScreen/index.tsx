/* eslint-disable react/no-unescaped-entities */
import { ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { View } from '@/components/common/View';

import { SignupSchema, SignupSchemaType } from './schemas';
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

import { AntDesign } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';

export function SignupScreen() {
  const navigation = useNavigation<TAuthNavigationRoutesProps>();
  const { gray } = useColors();
  const { control, formState, handleSubmit } = useForm<SignupSchemaType>({
    resolver: zodResolver(SignupSchema),
    mode: 'onChange',
    delayError: 500,
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const { mutateAsync: handleSignin, isPending } = useSignin();

  async function handleSubmitLoginForm(values: SignupSchemaType) {
    await handleSignin(values);
  }

  function handleNavigateToRegister() {
    navigation.navigate('Signup');
  }

  return (
    <KeyboardAvoidingView>
      <Styled.Header>
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="left" size={24} color={gray[400]} />
        </TouchableOpacity>
      </Styled.Header>
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
              name='name'
              placeholder='Name'
              errorMessage={formState.errors.name?.message}
            />


            <FormTextInput
              control={control}
              name='email'
              placeholder='Email'
              errorMessage={formState.errors.email?.message}
              keyboardType='email-address'
              autoCapitalize='none'
              autoComplete='off'
            />

            <FormPasswordInput
              control={control}
              name='password'
              placeholder='Password'
              errorMessage={formState.errors.password?.message}
            />

            <FormPasswordInput
              control={control}
              name='confirmPassword'
              placeholder='Confirm password'
              errorMessage={formState.errors.confirmPassword?.message}
            />
          </Styled.FormContainerFields>

          <Button
            disabled={(!formState.isValid || isPending)}
            variant={(!formState.isValid || isPending) ? 'disabled' : 'default'}
            onPress={handleSubmit(handleSubmitLoginForm)}
          >
            {!isPending ? 'Sign up' : <ActivityIndicator color='#FFF' size={18} />}
          </Button>

        </Styled.FormContainer>

      </View>
    </KeyboardAvoidingView>
  );
}
