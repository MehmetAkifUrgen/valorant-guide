import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './abilities.style';

const Abilities = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.displayIcon}} />
      <View style={styles.body}>
        <Text style={styles.displayName}> {item.displayName} </Text>
        <Text style={styles.description}> {item.description} </Text>
      </View>
    </View>
  );
};

export default Abilities;
