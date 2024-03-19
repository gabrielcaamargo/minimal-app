import styled from 'styled-components/native';
import theme from '@/theme';
import { TextColorType, TextVariantType } from './types';

interface ITextProps {
  variant: TextVariantType
  color: TextColorType
}

const colorVariants = {
  primary: theme.colors.white,
  secondary: theme.colors.gray[400],
  danger: theme.colors.red[500]
};

export const Text = styled.Text<ITextProps>`
  color: ${({ color }) => colorVariants[color]};
  font-family: ${({ theme, variant }) => theme.typography[variant].fontFamily};
  font-size: ${({ theme, variant }) => theme.typography[variant].fontSize}px;
`;
