import React, { useState, useLayoutEffect, useEffect } from 'react';
import { StatusBar, FlatList, View, ScrollView } from 'react-native';
import Network from '../../network/network';
import Item from '../../components/item';
import styles from './agents.style';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';
import colors from '../../colors/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FilterButton from '../../components/filterButton';
import item from '../../components/item';

const Agents = ({ navigation }) => {
  const { loading, data, error } = Network('agents?language=tr-TR');
  const [currentRole, setCurrentRole] = useState(null);
  const [filter, setFilter] = useState(false);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => {
  //       return <Icon name="filter" size={30} color={colors.main} style={{ marginLeft: 10 }} />;
  //     },
  //   });
  // }, [navigation]);

  const renderItem = ({ item }) => {
    if (item.role == null) {
      <Loading />;
    } else {
      return (
        <Item onPress={() => navigation.navigate('AgentsDetailPage', { item: item })} item={item} />
      );
    }
  };
  if (loading) {
    return <Loading />;
  }
  if (data[0].role.displayName == null) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <View style={{ height: 70 }}>
        <ScrollView
          style={{ height: 60 }}
          contentContainerStyle={styles.filterView}
          horizontal={true}
        >
          <FilterButton
            text={'Tümü'}
            onPress={() => {
              setFilter(false);
            }}
          />
          <FilterButton
            text={'Öncü'}
            onPress={() => {
              setFilter(true), setCurrentRole('Öncü');
            }}
          />
          <FilterButton
            text={'Gözcü'}
            onPress={() => {
              setFilter(true), setCurrentRole('Gözcü');
            }}
          />
          <FilterButton
            text={'Düellocu'}
            onPress={() => {
              setFilter(true), setCurrentRole('Düellocu');
            }}
          />
          <FilterButton
            text={'Kontrol Uzmanı'}
            onPress={() => {
              setFilter(true), setCurrentRole('Kontrol Uzmanı');
            }}
          />
        </ScrollView>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={
          filter
            ? data.filter((item) => item.role != null && item.role.displayName == currentRole)
            : data.filter((item) => item.role != null)
        }
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

export default Agents;
