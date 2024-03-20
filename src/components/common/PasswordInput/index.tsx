import { useRef, useState } from 'react';
import { TextInputProps, TextInput as RNTextInput, Pressable } from 'react-native';
import * as Styled from './styles';

import { Text } from '@components/common/Text';
import { useColors } from '@/hooks/useColors';

import { FontAwesome6 } from '@expo/vector-icons';

export interface ITextInputProps extends TextInputProps {
  placeholder: string
  label?: string
  password?: boolean
  errorMessage?: string
}

export function PasswordInput({ label, placeholder,  errorMessage, ...rest }: ITextInputProps) {
  const { gray } = useColors();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const inputRef = useRef<RNTextInput>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  function handleChangeInputVisibility() {
    setIsPasswordVisible(prev => !prev);
  }

  return (
    <Styled.Container>
      <Pressable onPress={handleFocus}>
        {label && <Text>{label}</Text>}

        <Styled.InputContainer>
          <Styled.Input
            placeholder={placeholder}
            placeholderTextColor={gray[400]}
            secureTextEntry={!isPasswordVisible}
            autoCapitalize='none'
            ref={inputRef}
            {...rest}
          />

          <Styled.VisibilityButton activeOpacity={0.6} onPress={handleChangeInputVisibility}>
            <FontAwesome6 name={isPasswordVisible ? 'eye-low-vision' : 'eye'} size={16} color={gray[400]} />
          </Styled.VisibilityButton>
        </Styled.InputContainer>
      </Pressable>

      {errorMessage && <Text color='danger' variant='smallText'>{errorMessage}</Text>}
    </Styled.Container>
  );
}
