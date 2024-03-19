import styled from 'styled-components/native';
import { TextColorType, TextVariantType } from './types';

interface ITextProps {
  variant: TextVariantType
  color: TextColorType
}

export const Text = styled.Text<ITextProps>`
  color: ${({ theme, color }) => color === 'primary' ? theme.colors.white : theme.colors.gray[400]};
  font-family: ${({ theme, variant }) => theme.typography[variant].fontFamily};
  font-size: ${({ theme, variant }) => theme.typography[variant].fontSize}px;
`;
