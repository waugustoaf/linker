import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StatusBarProps } from 'react-native';

export const StatusBarPage: React.FC<StatusBarProps> = ({
  children,
  ...rest
}) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...rest} /> : null;
};
