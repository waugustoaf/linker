import React from 'react';
import { Text } from 'react-native';
import { ListItem } from '../../components/ListItem';
import { Menu } from '../../components/Menu';
import { StatusBarPage } from '../../components/StatusBarPage';
import { Container, LinksList, Title } from './styles';

export interface Link {
  id: number;
  link: string;
}

export const MyLinks: React.FC = () => {
  return (
    <Container>
      <StatusBarPage backgroundColor='#8000ff' barStyle='light-content' />

      <Menu />

      <Title>Meus Links</Title>

      <LinksList
        data={[
          { id: 1, link: 'test.com' },
          { id: 2, link: 'testsite.com' },
        ]}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <ListItem link={item.link} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
