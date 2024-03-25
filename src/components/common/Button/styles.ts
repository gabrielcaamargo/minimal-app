import styled from 'styled-components/native';
import { ButtonVariantT } from './types';

interface IContainerProps {
  variant: ButtonVariantT
}

export const Container = styled.TouchableOpacity<IContainerProps>`
  width: 100%;
  background-color: ${({ variant, theme }) => {
    switch(variant) {
    case 'success':
      return theme.colors.green[500];

    case 'disabled':
      return theme.colors.gray[400];

    default:
      return theme.colors.primary[500];
    }
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
