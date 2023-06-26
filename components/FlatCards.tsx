import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.container_red, styles.card]}>
            <Text style={styles.font}>Red!</Text>
          </View>
          <View style={[styles.container_grey, styles.card]}>
            <Text style={styles.font}>Grey!</Text>
          </View>
          <View style={[styles.container_blue, styles.card]}>
            <Text style={styles.font}>Blue!</Text>
          </View>
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
  card: {
    borderRadius: 10,
  },
});

export default FlatCards;
