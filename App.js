/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.style1}>hii Yan</Text>
        <Text style={styles.style2}>hii Yan</Text>
        <Text style={styles.style3}>hii Yan</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  style1: {fontFamily: 'Montserrat-Regular'},
  style2: {fontFamily: 'Montserrat-Medium'},
  style3: {fontFamily: 'Montserrat-ExtraBold'},
});

export default App;
