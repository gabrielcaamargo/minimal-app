import { useState } from 'react';
import * as Styled from './styles';
import { Text } from '@/components/common/Text';
import { Camera } from '@/components/Camera';

export function CreateProfileScreen() {
  const [cameraOpen, setCameraOpen] = useState(false);

  function handleToggleCamera() {
    setCameraOpen(prev => !prev);
  }

  return (
    <Styled.Container>
      <Text variant='pageTitle'>Create your profile</Text>
      <Styled.UserPicture activeOpacity={0.6} onPress={handleToggleCamera}>
        <Text variant='smallText' color='secondary'>Add a picture</Text>
      </Styled.UserPicture>

      {
        cameraOpen && <Camera onClose={handleToggleCamera} />
      }
    </Styled.Container>
  );
}
