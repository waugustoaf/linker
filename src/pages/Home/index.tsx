import React from 'react';
import { Menu } from '../../components/Menu';
import { StatusBarPage } from '../../components/StatusBarPage';
import Icon from '@expo/vector-icons/Feather';
import {
  ContentContainer,
  GradientContainer,
  Input,
  InputContainer,
  LinkButton,
  LinkButtonText,
  Logo,
  LogoContainer,
  SubTitle,
  Title,
} from './styles';

export const Home: React.FC = () => {
  return (
    <GradientContainer colors={['#da00ff', '#8000ff']}>
      <StatusBarPage backgroundColor='#da00ff' barStyle='light-content' />

      <Menu />

      <LogoContainer>
        <Logo source={require('../../assets/logo.png')} resizeMode='contain' />
      </LogoContainer>

      <ContentContainer>
        <Title>waugustoaf</Title>
        <SubTitle>Cole seu link para encurtar</SubTitle>
      </ContentContainer>

      <InputContainer>
        <Icon name='link' size={22} color='#fff' />

        <Input placeholder='Cole seu link aqui' placeholderTextColor='#fff' />
      </InputContainer>

      <LinkButton>
        <LinkButtonText>Gerar Link</LinkButtonText>
      </LinkButton>
    </GradientContainer>
  );
};
