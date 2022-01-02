import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './agentsDetail.style';
import Network from '../../network/network';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';
import Sound from 'react-native-sound';
import Abilities from '../../components/abilities';

const AgentsDetail = ({route, navigation}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const track = new Sound(item.voiceLine.mediaList[0].wave, null, e => {
      if (e) {
        console.log('error loading track:', e);
      } else {
        track.play();
      }
    });
  }, []);
  function renderItem({item}) {
    return <Abilities item={item} />;
  }
  const {item} = route.params;
  function ListHeaderComponent() {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Image style={styles.image} source={{uri: item.displayIcon}} />
        </TouchableOpacity>
        <Text style={styles.headText}> {item.displayName} </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {visible == true ? (
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Image style={styles.full} source={{uri: item.fullPortrait}} />
        </TouchableOpacity>
      ) : (
        <>
          <FlatList
            ListHeaderComponent={ListHeaderComponent}
            data={item.abilities}
            renderItem={renderItem}
          />
        </>
      )}
    </View>
  );
};

export default AgentsDetail;
