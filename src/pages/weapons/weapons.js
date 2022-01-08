import React, { useState } from 'react';
import { View, FlatList, StatusBar, ScrollView } from 'react-native';
import Network from '../../network/network';
import Item from '../../components/itemWeapons';
import styles from './weapons.style';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';
import colors from '../../colors/colors';
import FilterButton from '../../components/filterButton';

const Weapons = ({ navigation }) => {
  const { loading, data, error } = Network('weapons?language=tr-TR');
  const [currentRole, setCurrentRole] = useState(null);
  const [filter, setFilter] = useState(false);

  const renderItem = ({ item }) => {
    if (item.weaponStats == null) {
      <Loading />;
    } else {
      return (
        <Item
          onPress={() => navigation.navigate('WeaponsDetailPage', { item: item })}
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
      <View style={{ height: 70 }}>
        <ScrollView contentContainerStyle={styles.filterView} horizontal={true}>
          <FilterButton
            text={'Tümü'}
            onPress={() => {
              setFilter(false);
            }}
          />
          <FilterButton
            text={'Ağır Silahlar'}
            onPress={() => {
              setFilter(true), setCurrentRole('Ağır Silahlar');
            }}
          />
          <FilterButton
            text={'Taarruz Tüfekleri'}
            onPress={() => {
              setFilter(true), setCurrentRole('Taarruz Tüfekleri');
            }}
          />
          <FilterButton
            text={'Pompalı Tüfekler'}
            onPress={() => {
              setFilter(true), setCurrentRole('Pompalı Tüfekler');
            }}
          />
          <FilterButton
            text={'Beylik Silahlar'}
            onPress={() => {
              setFilter(true), setCurrentRole('Beylik Silahlar');
            }}
          />
          <FilterButton
            text={'Keskin Nişancı Tüfekleri'}
            onPress={() => {
              setFilter(true), setCurrentRole('Keskin Nişancı Tüfekleri');
            }}
          />
          <FilterButton
            text={'Hafif Makineliler'}
            onPress={() => {
              setFilter(true), setCurrentRole('Hafif Makineliler');
            }}
          />
        </ScrollView>
      </View>

      <FlatList
        show
        numColumns={2}
        data={
          filter
            ? data.filter(
                (item) => item.shopData != null && item.shopData.categoryText == currentRole
              )
            : data.filter((item) => item.shopData != null)
        }
        renderItem={renderItem}
      />
    </View>
  );
};

export default Weapons;
