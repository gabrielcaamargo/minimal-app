import styled from 'styled-components/native';


export const Container = styled.View`
  width: 100%;
  gap: 4px;
`;

export const TextInput = styled.TextInput`
  background-color: ${({theme}) => theme.colors.gray[600]};
  padding: 16px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.commonText.fontSize}px;
  color: ${({ theme }) => theme.colors.white};
`;
