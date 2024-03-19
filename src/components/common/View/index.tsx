import { ViewProps } from 'react-native';
import * as Styled from './styles';

interface IViewProps extends ViewProps {
  centered?: boolean
}

export function View({ centered = false, children, ...rest }: IViewProps) {
  return (
    <Styled.Container centered={centered} {...rest}>
      {children}
    </Styled.Container>
  );
}
