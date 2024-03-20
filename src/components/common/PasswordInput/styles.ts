import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  gap: 4px;
`;

export const InputContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.gray[600]};
  padding: 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  font-size: ${({ theme }) => theme.typography.commonText.fontSize}px;
  color: ${({ theme }) => theme.colors.white};
  flex: 1
`;

export const VisibilityButton = styled.TouchableOpacity``;
