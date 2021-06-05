import Icon from '@expo/vector-icons/Feather';
import React, { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
} from 'react-native';
import { api } from '../../../services/api';
import { Menu } from '../../components/Menu';
import { ModalLink } from '../../components/ModalLink';
import { StatusBarPage } from '../../components/StatusBarPage';
import {
  ContentContainer,
  GradientContainer,
  Input,
  InputContainer,
  LinkButton,
  LinkButtonText,
  Logo,
  LogoContainer,
  OutKeyboardButton,
  SubTitle,
  Title,
} from './styles';

export interface Link {
  id: string;
  link: string;
  long_url: string;
}

export const Home: React.FC = () => {
  const [inputLink, setInputLink] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseLink, setResponseLink] = useState<Link>({} as Link);

  const handleShortLink = async () => {
    setLoading(true);

    try {
      const response = await api.post('/shorten', {
        long_url: inputLink,
      });
      const data = response.data as Link;

      setLoading(false);
      Keyboard.dismiss();
      setInputLink('');

      setResponseLink(data);
      toggleModalVisibility();
    } catch (err) {
      Alert.alert(
        'Ops, houve um erro!',
        'Não foi possível encurtar seu link. Tente novamente!',
      );
      Keyboard.dismiss();
      setInputLink('');
      setLoading(false);
    }
  };

  const toggleModalVisibility = useCallback(() => {
    setIsModalVisible(previousValue => !previousValue);
  }, []);

  return (
    <OutKeyboardButton onPress={() => Keyboard.dismiss()}>
      <GradientContainer colors={['#da00ff', '#8000ff']}>
        <StatusBarPage backgroundColor='#da00ff' barStyle='light-content' />

        <Menu />

        <LogoContainer>
          <Logo
            source={require('../../assets/logo.png')}
            resizeMode='contain'
          />
        </LogoContainer>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'position'}
          enabled
        >
          <ContentContainer>
            <Title>Linker</Title>
            <SubTitle>Cole seu link para encurtar</SubTitle>

            <InputContainer>
              <Icon name='link' size={22} color='#fff' />

              <Input
                placeholder='Cole seu link aqui'
                placeholderTextColor='#fff'
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='url'
                value={inputLink}
                onChangeText={value => setInputLink(value)}
              />
            </InputContainer>

            <LinkButton onPress={handleShortLink}>
              {loading ? (
                <ActivityIndicator color='#8000ff' size={24} />
              ) : (
                <LinkButtonText>Gerar Link</LinkButtonText>
              )}
            </LinkButton>
          </ContentContainer>
        </KeyboardAvoidingView>

        <Modal visible={isModalVisible} transparent animationType='slide'>
          <ModalLink link={responseLink} onClose={toggleModalVisibility} />
        </Modal>
      </GradientContainer>
    </OutKeyboardButton>
  );
};
