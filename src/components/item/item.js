import React, { useState } from 'react';
import { Dimensions, Text, TouchableOpacity, Image } from 'react-native';

import styles from './item.style';

const Item = ({ item, onPress }) => {
  const window = Dimensions.get('window');

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{ uri: item.displayIcon }} />
      <Text style={styles.text}> {item.displayName} </Text>
    </TouchableOpacity>
  );
};

export default Item;
