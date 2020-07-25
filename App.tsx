import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/pages/Main';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
