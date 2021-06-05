import React from 'react';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { Routes } from './src/routes';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Routes />
    </SafeAreaView>
  );
}
