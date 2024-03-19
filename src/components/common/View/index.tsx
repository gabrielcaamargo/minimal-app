import { ViewProps } from 'react-native';
import * as Styled from './styles';
import { ViewPaddingType } from './types';

interface IViewProps extends ViewProps {
  centered?: boolean
  paddingHorizontal?: ViewPaddingType
  paddingVertical?: ViewPaddingType
}

export function View({ centered = false,  paddingHorizontal, paddingVertical,  children, ...rest }: IViewProps) {
  return (
    <Styled.Container
      centered={centered}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      {...rest}
    >
      {children}
    </Styled.Container>
  );
}
