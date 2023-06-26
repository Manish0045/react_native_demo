/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FlatCards from './components/FlatCards';
import ImageGallery from './components/ImageGallery';
import ElivatedCards from './components/ElivatedCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.text_color}>React Native</Text>
        <View>
          <FlatCards />
        </View>
        <View>
          <ElivatedCards />
        </View>
        <View>
          <ImageGallery />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: 'cyan',
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_red: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  container_grey: {
    backgroundColor: 'grey',
    height: 100,
    width: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  container_blue: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  font: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  stretch: {
    width: 200,
    height: 200,
  },
  image_container: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_color: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 7,
  },
});

export default App;
