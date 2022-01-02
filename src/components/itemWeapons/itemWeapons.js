import React from 'react';
import {
  Image,
  Text,
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './itemWeapons.style';

const ItemWeapons = ({item, onPress}) => {
  const window = Dimensions.get('window');
  var value = new Animated.Value(1);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: item.displayIcon}} />
      <View style={styles.descriptionView}>
        <Text style={styles.text}> {item.displayName} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemWeapons;
