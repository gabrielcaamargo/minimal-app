import { Modal } from '@/components/common/Modal';

export function CustomizeModalScreen() {
  return (
    <Modal
      title='Customize your app'
      text='Now, we’re gonna ask you some few questions to customize your app the way you like it.'
      onConfirm={() => {}}
    />
  );
}
