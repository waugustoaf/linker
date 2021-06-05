import Icon from '@expo/vector-icons/Feather';
import React, { useCallback, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Modal, Platform } from 'react-native';
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

export const Home: React.FC = () => {
  const [inputLink, setInputLink] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShortLink = () => {
    toggleModalVisibility();
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
            <Title>waugustoaf</Title>
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
              <LinkButtonText>Gerar Link</LinkButtonText>
            </LinkButton>
          </ContentContainer>
        </KeyboardAvoidingView>

        <Modal visible={isModalVisible} transparent animationType='slide'>
          <ModalLink onClose={toggleModalVisibility} />
        </Modal>
      </GradientContainer>
    </OutKeyboardButton>
  );
};
