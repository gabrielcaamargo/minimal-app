import styled from 'styled-components/native';

interface IContainerProps {
  centered?: boolean
}

export const Container = styled.View<IContainerProps>`
  flex: 1;
  justify-content: ${({ centered }) => centered && 'center'};
  align-items: ${({ centered }) => centered && 'center'};
`;
