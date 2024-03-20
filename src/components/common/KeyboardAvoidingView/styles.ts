import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding-bottom: ${() => Platform.OS === 'ios' ? '124px' : undefined};
`;
