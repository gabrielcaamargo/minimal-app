import { TextInput } from '@/components/common/TextInput';
import { View } from '@/components/common/View';

export function SigninScreen() {
  return (
    <View centered paddingHorizontal='xlg'>
      <TextInput label='Input' placeholder='Email' errorMessage='Email invalido' />
      <TextInput label='Input' placeholder='Senha' />
    </View>
  );
}
