import React, { useCallback, useState } from 'react';
import { Modal } from 'react-native';
import { ListItem } from '../../components/ListItem';
import { Menu } from '../../components/Menu';
import { ModalLink } from '../../components/ModalLink';
import { StatusBarPage } from '../../components/StatusBarPage';
import { Link } from '../Home';
import { Container, LinksList, Title } from './styles';

export const MyLinks: React.FC = () => {
  const [currentLink, setCurrentLink] = useState<Link>({} as Link);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const links = [
    { id: '1', link: 'bit.ly/123213', long_url: 'https://waugustoaf.com.br' },
    { id: '2', link: 'bit.ly/123213', long_url: 'https://waugustoaf.com.br' },
    { id: '3', link: 'bit.ly/123213', long_url: 'https://waugustoaf.com.br' },
    { id: '4', link: 'bit.ly/123213', long_url: 'https://waugustoaf.com.br' },
  ] as Link[];

  return (
    <Container>
      <StatusBarPage backgroundColor='#8000ff' barStyle='light-content' />

      <Menu />

      <Title>Meus Links</Title>

      <LinksList
        data={links}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <ListItem
            link={item}
            openModalMethod={openModal}
            setCurrentLink={setCurrentLink}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={isModalVisible} transparent animationType='slide'>
        <ModalLink link={currentLink} onClose={closeModal} />
      </Modal>
    </Container>
  );
};
