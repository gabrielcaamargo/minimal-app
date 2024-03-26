import { useState, useRef, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Camera as ExpoCamera, CameraType, FlashMode } from 'expo-camera';

import { Feather } from '@expo/vector-icons';

import * as Styled from './styles';
import { useColors } from '@/hooks/useColors';
import Toast from 'react-native-toast-message';

interface ICameraProps {
  onClose: () => void
}

interface ITookPhoto {
  height: number
  width: number
  uri: string
}

export function Camera({ onClose }: ICameraProps) {
  const [, requestPermission] = ExpoCamera.useCameraPermissions();
  const cameraRef = useRef<ExpoCamera>(null);
  const [tookPhoto, setTookPhoto] = useState<ITookPhoto>();
  const { gray, white } = useColors();

  useEffect(() => {
    async function getPermissions() {
      const cameraPermission = await requestPermission();

      if (!cameraPermission?.granted) {
        Toast.show({
          text1: 'Error',
          text2: 'Cannot open camera due to denied permissions',
          type: 'error'
        });

      }
    }

    getPermissions();
  }, []);

  async function takePicture() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setTookPhoto(photo);
    }
  }


  return (
    <Styled.Container>
      <Styled.Header>
        <TouchableOpacity onPress={onClose}>
          <Feather name="x" size={24} color={gray[400]} />
        </TouchableOpacity>
      </Styled.Header>

      <Styled.CameraContainer>
        <Styled.PictureContainer>
          {
            tookPhoto
              ? (
                <Styled.Photo source={{ uri: tookPhoto.uri }} height={360}/>
              )
              : (
                <ExpoCamera
                  type={CameraType.front}
                  style={{ flex: 1, backgroundColor: gray[600] }}
                  flashMode={FlashMode.off}
                  zoom={0}
                  ratio='4:3'
                  ref={cameraRef}
                />
              )
          }
        </Styled.PictureContainer>
        <Styled.TakePhoto onPress={takePicture}>
          <Feather name="camera" size={24} color={white} />
        </Styled.TakePhoto>
      </Styled.CameraContainer>
    </Styled.Container>
  );
}
