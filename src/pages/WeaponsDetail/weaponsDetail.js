import React, { useState, useLayoutEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styles from './weaponsDetail.style';
import colors from '../../colors/colors';
import Loading from '../../components/loading/loading';
import * as Progress from 'react-native-progress';
import WeaponSkins from '../../components/weaponSkins';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Video from 'react-native-video';
import AsyncStorage from '@react-native-async-storage/async-storage';
import translate from '../../translations/translate';

const window = Dimensions.get('window');
const WeaponsDetail = ({ route, navigation }) => {
  const { item } = route.params;
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState('');
  const [thumb, setThumb] = useState('');
  const [skinVisible, setSkinVisible] = useState(false);
  const [skin, setSkin] = useState('');
  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState(null);
  const [progress, setProgress] = useState(null);
  const [language, setLanguage] = useState('en-US');
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
      headerTintColor: colors.main
    });
    AsyncStorage.getItem('language', (err, dil) => {
      if (dil != null) setLanguage(dil);
      else setLanguage('en-US');
    });
  }, [navigation]);

  if (item.weaponStats == null) {
    return <Loading />;
  }

  function onLoad(data) {
    setDuration(data);
    console.log('position Time: ', duration);
  }
  function onProgress(data) {
    setProgress(data.currentTime);
    console.log('current Time: ', progress);
  }

  function renderItem({ item }) {
    return (
      <WeaponSkins skinPress={() => skinPress(item)} onPress={() => showVideo(item)} item={item} />
    );
  }
  function skinPress(item) {
    setSkin(item.displayIcon);
    setSkinVisible(!skinVisible);
  }
  function showVideo(item) {
    setUrl(item.levels[0].streamedVideo);
    setThumb(item.levels[0].displayIcon);
    setVisible(!visible);
  }
  if (visible) {
    var videoPlayer;
    if (videoPlayer != null) {
      videoPlayer.presentFullscreenPlayer();
    }

    return (
      <View style={styles.videoView}>
        <Video
          ref={(ref) => {
            videoPlayer = ref;
          }}
          style={styles.video}
          source={{
            uri: url,
          }}
          onEnd={() => setVisible(!visible)}
          onProgress={onProgress}
          onLoadStart={() => setLoading(true)}
          onLoad={() => setLoading(false)}
          resizeMode="contain"
          load
          id="video"
        />
        {loading && <Loading />}

        <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.exitButton}>
          <Icon color={colors.main} name="location-exit" size={50} />
        </TouchableOpacity>
      </View>
    );
  }
  if (skinVisible) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.fullImageView}
        onPress={() => setSkinVisible(!skinVisible)}
      >
        <Image style={styles.fullImage} source={{ uri: skin }} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={item.skins}
        renderItem={renderItem}
      />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
        <View style={styles.barView}>
          <Image
            source={require('../../../assets/weaponDetailAssets/fireRate.png')}
            style={styles.icon}
          />
          <Text style={styles.barText}> {translate(language).atesHızı} </Text>
          <Progress.Circle
            showsText
            formatText={(text) => text + item.weaponStats.fireRate}
            borderWidth={2}
            thickness={10}
            borderColor={colors.dark}
            style={styles.bar}
            color={colors.dark}
            indeterminateAnimationDuration={3000}
            useNativeDriver
            progress={item.weaponStats.fireRate / 16}
            size={75}
          />
        </View>
        <View style={styles.barView}>
          <Image
            source={require('../../../assets/weaponDetailAssets/reload.png')}
            style={styles.icon}
          />
          <Text style={styles.barText}> {translate(language).sarjörDegistirme} </Text>
          <Progress.Circle
            showsText
            formatText={(text) => text + item.weaponStats.reloadTimeSeconds + ' sn'}
            borderWidth={2}
            thickness={10}
            borderColor={colors.dark}
            style={styles.bar}
            color={colors.dark}
            useNativeDriver
            progress={1.5 / item.weaponStats.reloadTimeSeconds}
            size={75}
          />
        </View>
        <View style={styles.barView}>
          <Image
            source={require('../../../assets/weaponDetailAssets/firstBullet.png')}
            style={styles.icon}
          />
          <Text style={styles.barText}> {translate(language).ilkKurşun} </Text>
          <Progress.Circle
            showsText
            formatText={(text) => text + item.weaponStats.firstBulletAccuracy}
            borderWidth={2}
            thickness={10}
            borderColor={colors.dark}
            style={styles.bar}
            color={colors.dark}
            useNativeDriver
            progress={item.weaponStats.firstBulletAccuracy}
            size={75}
          />
        </View>
        <View style={styles.barView}>
          <Image
            source={require('../../../assets/weaponDetailAssets/headShot.png')}
            style={styles.icon}
          />
          <Text style={styles.barText}> {translate(language).headShot} </Text>
          <Progress.Circle
            showsText
            formatText={(text) => text + item.weaponStats.damageRanges[0].headDamage}
            borderWidth={2}
            thickness={10}
            borderColor={colors.dark}
            style={styles.bar}
            color={colors.dark}
            useNativeDriver
            progress={item.weaponStats.damageRanges[0].headDamage / 150}
            size={75}
          />
        </View>
        <View style={styles.barView}>
          <Image
            source={require('../../../assets/weaponDetailAssets/bodyShot.png')}
            style={styles.icon}
          />
          <Text style={styles.barText}> {translate(language).bodyDamage} </Text>
          <Progress.Circle
            showsText
            formatText={(text) => text + item.weaponStats.damageRanges[0].bodyDamage}
            borderWidth={2}
            thickness={10}
            borderColor={colors.dark}
            style={styles.bar}
            color={colors.dark}
            useNativeDriver
            progress={item.weaponStats.damageRanges[0].bodyDamage / 150}
            size={75}
          />
        </View>
        <View style={styles.barView}>
          <Image
            source={require('../../../assets/weaponDetailAssets/legShot.png')}
            style={styles.icon}
          />
          <Text style={styles.barText}> {translate(language).legDamage} </Text>
          <Progress.Circle
            showsText
            formatText={(text) => text + item.weaponStats.damageRanges[0].legDamage}
            borderWidth={2}
            thickness={10}
            borderColor={colors.dark}
            style={styles.bar}
            color={colors.dark}
            useNativeDriver
            progress={item.weaponStats.damageRanges[0].legDamage / 150}
            size={75}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default WeaponsDetail;
