import { TextInputProps } from 'react-native';
import * as Styled from './styles';

import { Text } from '@components/common/Text';
import { useColors } from '@/hooks/useColors';

interface ITextInputProps extends TextInputProps {
  placeholder: string
  label?: string
  password?: boolean
  errorMessage?: string
}

export function TextInput({ label, placeholder, password = false, errorMessage, ...rest }: ITextInputProps) {
  const { gray } = useColors();

  return (
    <Styled.Container>
      {label && <Text>{label}</Text>}

      <Styled.TextInput
        placeholder={placeholder}
        placeholderTextColor={gray[400]}
        secureTextEntry={password}
        {...rest}
      />

      {errorMessage && <Text color='danger' variant='smallText'>{errorMessage}</Text>}
    </Styled.Container>
  );
}
