import styled from 'styled-components/native';

interface IRegisterTextProps {
  color?: 'default' | 'primary'
}

export const FormContainer = styled.View`
  width: 100%;
  margin-top: 24px;
  gap: 36px;
`;

export const FormContainerFields = styled.View`
  gap: 16px;
`;

export const FormContainerFooter = styled.View`
  align-items: center;
  justify-content: center;
`;

export const FormContainerFooterCallToAction = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const RegisterText = styled.Text<IRegisterTextProps>`
  font-size: ${({ theme }) => theme.typography.smallText.fontSize}px;
  color: ${({ theme, color = 'default' }) => color === 'default' ? theme.colors.gray[400] : theme.colors.primary[500]};
  margin-top: 4px;
  justify-content: center;
`;

export const RegisterTextLink = styled.TouchableOpacity`
  justify-content: center;
`;
