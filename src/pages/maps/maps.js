import React from 'react';
import {ImageBackground, View, FlatList} from 'react-native';
import Network from '../../network/network';
import ItemMaps from '../../components/itemMaps';
import styles from './maps.style';

const Maps = ({params}) => {
  const {loading, data, error} = Network('maps?language=tr-TR');

  const renderItem = ({item}) => {
    return <ItemMaps item={item} theme="weapons" />;
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require('../../../assets/valo3.jpg')}
      />
      <FlatList horizontal data={data} renderItem={renderItem} />
    </View>
  );
};

export default Maps;
