import { View } from '@/components/common/View';
import styled from 'styled-components/native';

export const Container = styled(View)`
  padding: 16px 24px 40px;
  align-items: center;
`;

export const Content = styled(View)`
  align-items: center;
`;

export const UserPicture = styled.TouchableOpacity`
  height: 162px;
  width: 162px;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  border: 2px dashed ${({ theme }) => theme.colors.gray[400]};
  border-radius: 84px;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
`;
