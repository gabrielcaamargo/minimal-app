import { TextProps } from 'react-native';
import * as Styled from './styles';
import { TextColorType, TextVariantType } from './types';

interface ITextProps extends TextProps {
  children: string
  variant?: TextVariantType
  color?: TextColorType
}

export function Text({ children, variant = 'commonText', color = 'primary' }: ITextProps) {
  return (
    <Styled.Text variant={variant} color={color}>
      {children}
    </Styled.Text>
  );
}
