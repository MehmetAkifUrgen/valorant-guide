import React from 'react';
import {StatusBar, View, FlatList} from 'react-native';
import Network from '../../network/network';
import ItemMaps from '../../components/itemMaps';
import styles from './maps.style';
import colors from '../../colors/colors';

const Maps = ({params}) => {
  const {loading, data, error} = Network('maps?language=tr-TR');

  const renderItem = ({item}) => {
    return <ItemMaps item={item} theme="weapons" />;
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.dark} />
      <FlatList horizontal data={data} renderItem={renderItem} />
    </View>
  );
};

export default Maps;
