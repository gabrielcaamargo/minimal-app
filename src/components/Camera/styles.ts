import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  flex-grow: 1;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const CameraContainer = styled.View`
  flex: 1;
  margin-top: 48px;
`;

export const PictureContainer = styled.View`
  height: 420px;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray[400]};
`;

export const TakePhoto = styled.TouchableOpacity`
  margin-top: 24px;
  align-self: center;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
`;

export const Photo = styled.Image`
  transform: scaleX(-1);
  height: 100%;
`;
