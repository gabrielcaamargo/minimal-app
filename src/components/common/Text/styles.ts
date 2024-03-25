import styled from 'styled-components/native';
import { TextColorType, TextVariantType } from './types';

interface ITextProps {
  variant: TextVariantType
  color: TextColorType
}

export const Text = styled.Text<ITextProps>`
  color: ${({ theme, color }) => {
    if(color === 'primary') return theme.colors.white;
    if(color === 'secondary') return theme.colors.gray[400];
    if(color === 'danger') return theme.colors.red[500];
  }};
  font-family: ${({ theme, variant }) => theme.typography[variant].fontFamily};
  font-size: ${({ theme, variant }) => theme.typography[variant].fontSize}px;
`;
