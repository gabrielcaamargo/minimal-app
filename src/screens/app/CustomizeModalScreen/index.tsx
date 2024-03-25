import { useNavigation } from '@react-navigation/native';
import { TAppNavigationProps } from '@/routes/AppRoutes';
import { Modal } from '@/components/common/Modal';

export function CustomizeModalScreen() {
  const navigation = useNavigation<TAppNavigationProps>();

  function handleNavigateToCustomize() {
    navigation.navigate('CustomizeColor');
  }

  return (
    <Modal
      title='Customize your app'
      text='Now, we’re gonna ask you some few questions to customize your app the way you like it.'
      onConfirm={handleNavigateToCustomize}
    />
  );
}
