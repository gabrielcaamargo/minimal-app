import styled from 'styled-components/native';
import { ViewPaddingType } from './types';

interface IContainerProps {
  centered?: boolean
  paddingHorizontal?: ViewPaddingType
  paddingVertical?: ViewPaddingType
}

const paddingVariants = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  xlg: 24,
};

export const Container = styled.View<IContainerProps>`
  flex: 1;
  justify-content: ${({ centered }) => centered && 'center'};
  align-items: ${({ centered }) => centered && 'center'};
  padding-left: ${({paddingHorizontal}) => paddingHorizontal && `${paddingVariants[paddingHorizontal]}px`};
  padding-right: ${({paddingHorizontal}) => paddingHorizontal && `${paddingVariants[paddingHorizontal]}px`};
  padding-top: ${({paddingVertical}) => paddingVertical && `${paddingVariants[paddingVertical]}px`};
  padding-bottom: ${({paddingVertical}) => paddingVertical && `${paddingVariants[paddingVertical]}px`};
`;
