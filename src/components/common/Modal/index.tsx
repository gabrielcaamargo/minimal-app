import { Button } from '@components/common/Button';
import { Text } from '@components/common/Text';

import * as Styled from './styles';

interface IModalProps {
  title: string
  text: string
  onConfirm: () => void
}

export function Modal({ title, text, onConfirm }: IModalProps) {
  return (
    <Styled.Container>
      <Styled.Content>
        <Text variant='pageTitle'>
          {title}
        </Text>
        <Text variant='sectionTitle'>
          {text}
        </Text>
      </Styled.Content>
      <Button onPress={onConfirm} variant='success'>
        Ok!
      </Button>
    </Styled.Container>
  );
}
