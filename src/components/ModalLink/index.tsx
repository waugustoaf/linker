import Icon from '@expo/vector-icons/Feather';
import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Share,
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

interface ModalLinkProps {
  onClose: () => void;
}

export const ModalLink: React.FC<ModalLinkProps> = ({ onClose }) => {
  const handleCopyLink = () => {
    ClipBoard.setString('https://waugustoaf.com.br');
    alert('Link copiado com sucesso!');
  };

  const handleShareLink = async () => {
    try {
      const result = await Share.share({
        message: `Link: https://waugustoaf.com.br`,
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
          <LongURL numberOfLines={1}>https://waugustoaf.com.br</LongURL>

          <ShortLinkArea activeOpacity={1} onPress={handleCopyLink}>
            <ShortLinkUrl numberOfLines={1}>https://bit.ly/7dauh8</ShortLinkUrl>
            <TouchableOpacity onPress={handleCopyLink}>
              <Icon name='copy' color='#fff' size={25} />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </OutView>
  );
};
