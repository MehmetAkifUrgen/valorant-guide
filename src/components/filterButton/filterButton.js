import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './filterButton.style';
export default function filterButton({text, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}> {text} </Text>
    </TouchableOpacity>
  );
}
