import React, { useEffect, useState, useLayoutEffect } from 'react';
import { PermissionsAndroid, View, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './agentsDetail.style';
import colors from '../../colors/colors';
import Sound from 'react-native-sound';
import Abilities from '../../components/abilities';
import translate from '../../translations/translate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Error from '../../components/error/error';
import RNFetchBlob from 'rn-fetch-blob';

const AgentsDetail = ({ route, navigation }) => {
  const [visible, setVisible] = useState(false);
  const [dil, setLanguage] = useState('en-US');

  useLayoutEffect(() => {
    AsyncStorage.getItem('language', (err, language) => {
      if (language != null) {
        setLanguage(language);
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
          headerTintColor: colors.main
        });
      } else {
        setLanguage('en-US');
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
          headerTintColor: colors.main
        });
      }
    });
  }, [navigation]);
  async function dowload() {
    let newImgUri = item.fullPortrait.lastIndexOf('/');
    let imageName = `/${item.displayName}.png`;
    console.log(imageName);
    let dirs = RNFetchBlob.fs.dirs;
    let path = dirs.PictureDir + imageName;
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {}
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        RNFetchBlob.config({
          fileCache: true,
          appendExt: 'png',
          indicator: true,
          IOSBackgroundTask: true,
          path: path,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            path: path,
            description: 'Image',
          },
        })
          .fetch('GET', item.fullPortrait)
          .then((res) => {
            console.log(res, 'end downloaded');
          });
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    console.log(dil);
    const track = new Sound(item.voiceLine.mediaList[0].wave, null, (e) => {
      if (e) {
        console.log('error loading track:', e);
      } else {
        track.play();
      }
    });
    return () => {
      track.stop();
    };
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
        <TouchableOpacity onLongPress={dowload} onPress={() => setVisible(!visible)}>
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
