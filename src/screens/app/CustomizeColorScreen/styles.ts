import styled from 'styled-components/native';

import { View } from '@/components/common/View';

interface IColorButtonProps {
  backgroundColor: string
}

export const Container = styled(View)`
  padding: 0 24px 40px;
  align-items: center;
`;

export const Content = styled(View)`
  align-items: center;
  text-align: center;
  flex: 1;
`;

export const Header = styled.View`
  gap: 16px;
  align-items: center;
  margin-bottom: 26px;
`;

export const ColorsContainer = styled.View`
  margin-bottom: 12px;
  flex-direction: row;
  gap: 12px;
`;

export const ColorButton = styled.TouchableOpacity<IColorButtonProps>`
  height: 162px;
  width: 162px;
  border-radius: 12px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const DescriptionText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[400]};
`;
