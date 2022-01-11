import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import styles from './languageItem.style';

export default function LanguageItem({ onPress, uri, language }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.flag} source={{ uri: uri }}></Image>
      <Text style={styles.text}> {language} </Text>
    </TouchableOpacity>
  );
}
