import styled from 'styled-components/native';
import { ButtonVariantT } from './types';

import theme from '@/theme';

interface IContainerProps {
  variant: ButtonVariantT
}

const variants = {
  default: {
    backgroundColor: theme.colors.orange[500]
  },
  disabled: {
    backgroundColor: theme.colors.gray[400]
  }
};

export const Container = styled.TouchableOpacity<IContainerProps>`
  width: 100%;
  background-color: ${({ variant }) => variants[variant].backgroundColor};
  padding: 16px;
  border-radius: 8px;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;
