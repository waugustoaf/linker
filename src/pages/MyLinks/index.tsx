import { useIsFocused } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import { ListItem } from '../../components/ListItem';
import { Menu } from '../../components/Menu';
import { ModalLink } from '../../components/ModalLink';
import { StatusBarPage } from '../../components/StatusBarPage';
import { index } from '../../utils/storeLinks';
import { Link } from '../Home';
import {
  Container,
  EmptyView,
  EmptyViewText,
  LinksList,
  Title,
} from './styles';

export const MyLinks: React.FC = () => {
  const [currentLink, setCurrentLink] = useState<Link>({} as Link);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [linkList, setLinkList] = useState<Link[]>([] as Link[]);
  const [updateManually, setUpdateManually] = useState(false);
  const [loading, setLoading] = useState(true);

  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const response = await index();
      setLinkList(response);
      setLoading(false);
    })();
  }, [updateManually, isFocused]);

  const update = useCallback(() => {
    setUpdateManually(previousValue => !previousValue);
  }, []);

  const openModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <Container>
      <StatusBarPage backgroundColor='#8000ff' barStyle='light-content' />

      <Menu />

      <Title>Meus Links</Title>

      {loading && (
        <EmptyView>
          <ActivityIndicator color='#fff' size={25} />
        </EmptyView>
      )}

      {linkList.length === 0 && !loading && (
        <EmptyView>
          <EmptyViewText>Você ainda não possui nenhum link</EmptyViewText>
        </EmptyView>
      )}

      <LinksList
        data={linkList}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <ListItem
            link={item}
            openModalMethod={openModal}
            setCurrentLink={setCurrentLink}
            updateComponent={update}
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
