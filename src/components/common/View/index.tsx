import { ViewProps } from 'react-native';
import { Container } from './styles';

interface IViewProps extends ViewProps {
  centered?: boolean
}

export function View({ centered = false, children, ...rest }: IViewProps) {
  return (
    <Container centered={centered} {...rest}>
      {children}
    </Container>
  );
}
