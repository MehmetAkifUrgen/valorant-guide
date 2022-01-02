import React from 'react';
import {ImageBackground, View, FlatList} from 'react-native';
import Network from '../../network/network';
import Item from '../../components/itemWeapons';
import styles from './weapons.style';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';

const Weapons = ({navigation}) => {
  const {loading, data, error} = Network('weapons?language=tr-TR');

  const renderItem = ({item}) => {
    if (item.weaponStats == null) {
      <Loading />;
    } else {
      return (
        <Item
          onPress={() => navigation.navigate('WeaponsDetailPage', {item: item})}
          item={item}
        />
      );
    }
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require('../../../assets/valo2.jpg')}
      />
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default Weapons;
