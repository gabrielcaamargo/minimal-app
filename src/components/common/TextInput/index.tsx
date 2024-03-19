import { useRef } from 'react';
import { TextInputProps, TextInput as RNTextInput, Pressable } from 'react-native';
import * as Styled from './styles';

import { Text } from '@components/common/Text';
import { useColors } from '@/hooks/useColors';

export interface ITextInputProps extends TextInputProps {
  placeholder: string
  label?: string
  password?: boolean
  errorMessage?: string
}

export function TextInput({ label, placeholder, password = false, errorMessage, ...rest }: ITextInputProps) {
  const { gray } = useColors();

  const inputRef = useRef<RNTextInput>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <Styled.Container>
      <Pressable onPress={handleFocus}>
        {label && <Text>{label}</Text>}

        <Styled.TextInput
          placeholder={placeholder}
          placeholderTextColor={gray[400]}
          secureTextEntry={password}
          autoCapitalize='none'
          ref={inputRef}
          {...rest}
        />
      </Pressable>

      {errorMessage && <Text color='danger' variant='smallText'>{errorMessage}</Text>}
    </Styled.Container>
  );
}
