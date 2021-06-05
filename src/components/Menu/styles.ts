import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.OS === 'android'
    ? 12
    : (StatusBar.currentHeight || 0) + 60}px;

  margin: 0 20px;
  justify-content: space-around;
`;
