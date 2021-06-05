import { FlatList, Platform } from 'react-native';
import styled from 'styled-components/native';
import { Link } from '.';

export const Container = styled.View`
  flex: 1;
  background-color: #8000ff;
`;

export const Title = styled.Text`
  margin-top: ${Platform.OS === 'android' ? 20 : 35}%;
  margin-left: 20px;
  font-size: 32px;
  font-weight: bold;
  color: #fff;
`;

export const LinksList = styled(FlatList as new () => FlatList<Link>)``;
