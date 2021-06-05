import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const GradientContainer = styled(LinearGradient)`
  flex: 1;
  background-color: #8000ff;
  justify-content: center;
`;

export const OutKeyboardButton = styled.TouchableWithoutFeedback``;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === 'android' ? 15 : 35}px;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ContentContainer = styled.View`
  margin-top: ${Platform.OS === 'android' ? 15 : 25}%;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
  padding-bottom: 10%;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-self: center;
  align-items: center;
  width: 90%;
  border-radius: 7px;
  margin: 15px 0;
  padding: 0 15px;
  background-color: rgba(255, 255, 255, 0.15);
`;

export const Input = styled.TextInput`
  color: #fff;
  margin-left: 15px;
  padding: 10px 0;
  font-size: 17px;
  width: 90%;
`;

export const LinkButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 45px;
  background-color: #fff;
  width: 90%;
  align-self: center;
  border-radius: 7px;
  margin-bottom: 15px;
`;

export const LinkButtonText = styled.Text`
  font-size: 18px;
`;
