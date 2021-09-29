/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#8888'}}>
      <Header />
      <Menu />
    </View>
  );
};

export default Home;
