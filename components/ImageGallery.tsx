import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const ImageGallery = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.headingText}>Image Gallery</Text>
        <View style={styles.container}>
          <Image
            style={styles.stretch}
            source={{
              uri: 'https://brandslogos.com/wp-content/uploads/images/react-logo-1.png',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
  stretch: {
    width: 300,
    height: 300,
    resizeMode: 'stretch',
    borderRadius: 30,
  },
});

export default ImageGallery;
