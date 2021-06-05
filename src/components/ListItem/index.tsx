import React from 'react';
import { Link } from '../../pages/Home';
import Icon from '@expo/vector-icons/Feather';
import { ActionContainer, Container, LinkURL } from './styles';
import { Swipeable } from 'react-native-gesture-handler';
import { Alert } from 'react-native';
import { remove } from '../../utils/storeLinks';

interface ListItemProps {
  link: Link;
  openModalMethod: () => void;
  setCurrentLink: React.Dispatch<React.SetStateAction<Link>>;
  updateComponent: () => void;
}

export const ListItem: React.FC<ListItemProps> = ({
  link,
  openModalMethod,
  setCurrentLink,
  updateComponent,
}) => {
  const handleOpenModal = () => {
    openModalMethod();
    setCurrentLink(link);
  };

  const handleDeleteItem = () => {
    Alert.alert(
      'Deletar link',
      `Você realmente deseja deletar o link '${link.long_url}'?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Deletar',
          onPress: async () => {
            await remove(link.id);
            updateComponent();
          },
        },
      ],
    );
  };

  const rightActions = () => {
    return (
      <ActionContainer onPress={handleDeleteItem}>
        <Icon name='trash' color='#FFF' size={24} />
      </ActionContainer>
    );
  };

  return (
    <Swipeable renderRightActions={rightActions}>
      <Container onPress={handleOpenModal}>
        <Icon name='link' color='#fff' size={24} />
        <LinkURL numberOfLines={1}>{link.long_url}</LinkURL>
      </Container>
    </Swipeable>
  );
};
