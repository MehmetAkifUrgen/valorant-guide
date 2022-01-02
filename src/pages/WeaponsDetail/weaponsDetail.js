import React, {useState, useEffect} from 'react';
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
import VideoPlayer from 'react-native-video-player';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Video from 'react-native-video';

const window = Dimensions.get('window');
const WeaponsDetail = ({route, navigation}) => {
  const {item} = route.params;
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState('');
  const [thumb, setThumb] = useState('');
  const [skinVisible, setSkinVisible] = useState(false);
  const [skin, setSkin] = useState('');
  const [loading, setLoading] = useState(false);

  if (item.weaponStats == null) {
    return <Loading />;
  }

  function renderItem({item}) {
    return (
      <WeaponSkins
        skinPress={() => skinPress(item)}
        onPress={() => showVideo(item)}
        item={item}
      />
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
          ref={ref => {
            videoPlayer = ref;
          }}
          style={styles.video}
          source={{
            uri: url,
          }}
          onEnd={() => setVisible(!visible)}
          f
          onBuffer={() => <Loading />}
          onLoad={() => <Loading />}
          onLoadStart={() => setLoading(false)}
          resizeMode="contain"
          controls
          id="video"
        />

        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          style={styles.exitButton}>
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
        onPress={() => setSkinVisible(!skinVisible)}>
        <Image style={styles.fullImage} source={{uri: skin}} />
      </TouchableOpacity>
    );
  }
  if (visible && loading) {
    return <Loading />;
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
          <Text style={styles.barText}> Ateş Hızı(sn): </Text>
          <Progress.Circle
            showsText
            formatText={text => text + item.weaponStats.fireRate}
            borderWidth={2}
            thickness={10}
            borderColor={colors.main}
            style={styles.bar}
            color={colors.main}
            indeterminateAnimationDuration={3000}
            useNativeDriver
            progress={item.weaponStats.fireRate / 16}
            size={75}
          />
        </View>
        <View style={styles.barView}>
          <Text style={styles.barText}> Şarjör Değiştirme: </Text>
          <Progress.Circle
            showsText
            formatText={text =>
              text + item.weaponStats.reloadTimeSeconds + ' sn'
            }
            borderWidth={2}
            thickness={10}
            borderColor={colors.main}
            style={styles.bar}
            color={colors.main}
            useNativeDriver
            progress={1.5 / item.weaponStats.reloadTimeSeconds}
            size={75}
          />
        </View>
        <View style={styles.barView}>
          <Text style={styles.barText}> İlk Kurşun İsabeti </Text>
          <Progress.Circle
            showsText
            formatText={text => text + item.weaponStats.firstBulletAccuracy}
            borderWidth={2}
            thickness={10}
            borderColor={colors.main}
            style={styles.bar}
            color={colors.main}
            useNativeDriver
            progress={item.weaponStats.firstBulletAccuracy}
            size={75}
          />
        </View>
        <View style={styles.barView}>
          <Text style={styles.barText}> HeadShot </Text>
          <Progress.Circle
            showsText
            formatText={text =>
              text + item.weaponStats.damageRanges[0].headDamage
            }
            borderWidth={2}
            thickness={10}
            borderColor={colors.main}
            style={styles.bar}
            color={colors.main}
            useNativeDriver
            progress={item.weaponStats.damageRanges[0].headDamage / 150}
            size={75}
          />
        </View>
        <View style={styles.barView}>
          <Text style={styles.barText}> Body Damage </Text>
          <Progress.Circle
            showsText
            formatText={text =>
              text + item.weaponStats.damageRanges[0].bodyDamage
            }
            borderWidth={2}
            thickness={10}
            borderColor={colors.main}
            style={styles.bar}
            color={colors.main}
            useNativeDriver
            progress={item.weaponStats.damageRanges[0].bodyDamage / 150}
            size={75}
          />
        </View>
        <View style={styles.barView}>
          <Text style={styles.barText}> Leg Damage </Text>
          <Progress.Circle
            showsText
            formatText={text =>
              text + item.weaponStats.damageRanges[0].legDamage
            }
            borderWidth={2}
            thickness={10}
            borderColor={colors.main}
            style={styles.bar}
            color={colors.main}
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
