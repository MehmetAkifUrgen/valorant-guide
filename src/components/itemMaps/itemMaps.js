import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './itemmaps.style';

const ItemMaps = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.splash}} />
      <View style={styles.descriptionView}>
        <Text style={styles.text}> {item.displayName} </Text>
      </View>
    </View>
  );
};

export default ItemMaps;
