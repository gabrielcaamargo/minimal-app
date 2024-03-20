import { KeyboardAvoidingViewProps } from 'react-native';
import * as Styled from './styles';

interface IKeyboardAvoidingViewProps extends KeyboardAvoidingViewProps {}

export function KeyboardAvoidingView({ children , ...rest }: IKeyboardAvoidingViewProps) {
  return (
    <Styled.Container {...rest}>
      {children}
    </Styled.Container>
  );
}
