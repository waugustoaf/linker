import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from '../pages/Home';

export const index = async () => {
  const response = await AsyncStorage.getItem('@Linker:links');
  const data = !!response ? (JSON.parse(response) as Link[]) : ([] as Link[]);

  return data;
};

export const get = async (key: string) => {
  const data = await index();
  return data.find(item => item.id === key);
};

export const set = async (links: Link[]) => {
  await AsyncStorage.setItem('@Linker:links', JSON.stringify(links));
};

export const add = async (link: Link) => {
  const response = await index();
  const itemExists = response.find(item => item.id === link.id);

  if (!!itemExists) return;

  const data = [...response, link];
  await set(data);
};

export const remove = async (key: string) => {
  const response = await index();
  const data = response.filter(item => item.id !== key);
  await set(data);
};
