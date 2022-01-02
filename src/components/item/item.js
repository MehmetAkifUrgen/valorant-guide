import React, {useState} from 'react';
import {
  Dimensions,
  Text,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';

import styles from './item.style';

const Item = ({item, onPress}) => {
  const window = Dimensions.get('window');
  var value = new Animated.Value(1);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}> {item.displayName} </Text>
      <Animated.Image
        style={{
          width: window.width * 0.4,
          height: window.height / 3,
          resizeMode: 'contain',
          transform: [{scale: 1}],
        }}
        source={{uri: item.displayIcon}}
      />
      {/* <View style={styles[theme].descriptionView}>
        <Text style={styles[theme].text}> {item.displayName} </Text>
        <Text style={styles[theme].text}> {item.role.displayName} </Text>
      </View> */}
    </TouchableOpacity>
  );
};

export default Item;
