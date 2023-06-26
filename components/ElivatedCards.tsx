import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

const ElivatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElivatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElivated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElivated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElivated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElivated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElivated]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: 'cyan',
    padding: 5,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
  card: {
    width: 100,
    height: 135,
    flex: 1,
    margin: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardElivated: {
    backgroundColor: 'grey',
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});

export default ElivatedCards;
