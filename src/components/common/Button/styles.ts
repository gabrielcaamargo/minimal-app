import styled from 'styled-components/native';
import { ButtonVariantT } from './types';

interface IContainerProps {
  variant: ButtonVariantT
}

export const Container = styled.TouchableOpacity<IContainerProps>`
  width: 100%;
  background-color: ${({ variant, theme }) => {
    if(variant === 'success') return theme.colors.green[500];
    if(variant === 'disabled') return theme.colors.gray[400];
    if(variant === 'default') return theme.colors.primary[400];
  }};
  padding: 16px;
  border-radius: 8px;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;
