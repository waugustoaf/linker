import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.21);
  margin: 7px 10px;
  padding: 12px;
  border-radius: 7px;

  align-items: center;
`;

export const LinkURL = styled.Text`
  color: #fff;
  padding-left: 10px;
  padding-right: 20px;
  font-size: 18px;
`;

export const ActionContainer = styled.TouchableOpacity`
  width: 15%;
  background-color: #ff0000;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  margin: 7px 10px;
`;
