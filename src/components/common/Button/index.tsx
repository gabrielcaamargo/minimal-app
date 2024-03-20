import { TouchableOpacityProps } from 'react-native';
import * as Styled from './styles';
import { ButtonVariantT } from './types';

interface IButtonProps extends TouchableOpacityProps {
  children: string
  variant?: ButtonVariantT
}

export function Button({ children, variant = 'default', ...rest }: IButtonProps) {
  return (
    <Styled.Container
      variant={variant}
      activeOpacity={0.6}
      {...rest}
    >
      <Styled.Title>{children}</Styled.Title>
    </Styled.Container>
  );
}
