import React from 'react';
import { Link } from '../../pages/Home';
import Icon from '@expo/vector-icons/Feather';
import { Container, LinkURL } from './styles';

interface ListItemProps {
  link: Link;
  openModalMethod: () => void;
  setCurrentLink: React.Dispatch<React.SetStateAction<Link>>;
}

export const ListItem: React.FC<ListItemProps> = ({
  link,
  openModalMethod,
  setCurrentLink,
}) => {
  const handleOpenModal = () => {
    openModalMethod();
    setCurrentLink(link);
  };

  return (
    <Container activeOpacity={0.9} onPress={handleOpenModal}>
      <Icon name='link' color='#fff' size={24} />
      <LinkURL numberOfLines={1}>{link.long_url}</LinkURL>
    </Container>
  );
};
