import React from 'react';
import { Text } from 'react-native';
import { Container } from './styles';

interface ListItemProps {
  link: string;
}

export const ListItem: React.FC<ListItemProps> = ({ link }) => {
  return (
    <Container>
      <Text>{link}</Text>
    </Container>
  );
};
