import Icon from '@expo/vector-icons/Feather';
import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Share,
  Linking,
} from 'react-native';
import ClipBoard from 'expo-clipboard';
import {
  Container,
  Header,
  LinkArea,
  LongURL,
  OutView,
  ShortLinkArea,
  ShortLinkUrl,
  Title,
} from './styles';
import { Link } from '../../pages/Home';

interface ModalLinkProps {
  onClose: () => void;
  link: Link;
  isTopHidden?: boolean;
}

export const ModalLink: React.FC<ModalLinkProps> = ({ onClose, link }) => {
  const handleCopyLink = () => {
    ClipBoard.setString(link.link);
    alert('Link copiado com sucesso!');
  };

  const handleOpenLink = () => {
    Linking.canOpenURL(link.link).then(supported => {
      if (supported) {
        Linking.openURL(link.link);
      } else {
        handleCopyLink();
      }
    });
  };

  const handleShareLink = async () => {
    try {
      const result = await Share.share({
        message: `Link: ${link.link}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Activity Type
        } else {
          // Shared
        }
      } else if ((result.action = Share.dismissedAction)) {
        // Close modal
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <OutView>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }} />
      </TouchableWithoutFeedback>

      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Icon name='x' color='#8000ff' size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShareLink}>
            <Icon name='share' color='#8000ff' size={30} />
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Link encurtado</Title>
          <LongURL numberOfLines={1}>{link.long_url}</LongURL>

          <ShortLinkArea activeOpacity={1} onPress={handleOpenLink}>
            <ShortLinkUrl numberOfLines={1}>{link.link}</ShortLinkUrl>
            <TouchableOpacity onPress={handleCopyLink}>
              <Icon name='copy' color='#fff' size={25} />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </OutView>
  );
};
