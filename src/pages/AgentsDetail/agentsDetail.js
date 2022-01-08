import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './agentsDetail.style';
import colors from '../../colors/colors';
import Sound from 'react-native-sound';
import Abilities from '../../components/abilities';

const AgentsDetail = ({ route, navigation }) => {
  const [visible, setVisible] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: item.displayName,
      headerStyle: {
        backgroundColor: colors.dark,
      },
      headerTitleStyle: {
        color: colors.main,
        fontSize: 18,
        fontWeight: '800',
      },
      headerTitleAlign: 'center',
    });
  }, [navigation]);
  useEffect(() => {
    const track = new Sound(item.voiceLine.mediaList[0].wave, null, (e) => {
      if (e) {
        console.log('error loading track:', e);
      } else {
        track.play();
      }
    });
  }, []);
  function renderItem({ item }) {
    return <Abilities item={item} />;
  }
  function ItemSeparatorComponent() {
    return (
      <View style={styles.seperatorView}>
        <View style={styles.seperator}></View>
      </View>
    );
  }
  const { item } = route.params;
  function ListHeaderComponent() {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Image style={styles.image} source={{ uri: item.displayIcon }} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {visible == true ? (
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Image style={styles.full} source={{ uri: item.fullPortrait }} />
        </TouchableOpacity>
      ) : (
        <>
          <FlatList
            ListHeaderComponent={ListHeaderComponent}
            data={item.abilities}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparatorComponent}
          />
        </>
      )}
    </View>
  );
};

export default AgentsDetail;
