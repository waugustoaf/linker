import Icon from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Container } from './styles';

export const Menu: React.FC = () => {
  const navigation = useNavigation();

  return (
    // @ts-ignore: Unreachable code error
    <Container onPress={() => navigation.openDrawer()}>
      <Icon name='menu' size={40} color='#fff' />
    </Container>
  );
};
