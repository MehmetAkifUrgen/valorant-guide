import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, FlatList, StatusBar, ScrollView } from 'react-native';
import Network from '../../network/network';
import Item from '../../components/itemWeapons';
import styles from './weapons.style';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';
import colors from '../../colors/colors';
import FilterButton from '../../components/filterButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import translate from '../../translations/translate';

const Weapons = ({ navigation }) => {
  const [currentRole, setCurrentRole] = useState(null);
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState('');
  const [data, setData] = useState([]);

  const getWeapons = () => {
    AsyncStorage.getItem('language', (err, dil) => {
      if (dil == null || dil == '') {
        dil = 'en-EN';
      }
      setLanguage(dil);
      fetch(`https://valorant-api.com/v1/weapons?language=${dil}`, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((json) => {
          setData(json.data), setLoading(false);
        })
        .catch((err) => {
          setIsLoading(false), setError(err);
        });
    });
  };
  useLayoutEffect(() => {
    AsyncStorage.getItem('language', (err, dill) => {
      navigation.setOptions({
        title: translate(dill).silahlar,
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
    });
  }, [navigation, language]);

  useEffect(() => {
    getWeapons();
    return () => {
      getWeapons();
    };
  }, []);
  useEffect(() => {
    getWeapons();
  }, [language]);

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
            text={translate(language).tumu}
            onPress={() => {
              setFilter(false);
            }}
          />
          <FilterButton
            text={translate(language).agırsilahlar}
            onPress={() => {
              setFilter(true), setCurrentRole(translate(language).agırsilahlar);
            }}
          />
          <FilterButton
            text={translate(language).taarruzTufekleri}
            onPress={() => {
              setFilter(true), setCurrentRole(translate(language).taarruzTufekleri);
            }}
          />
          <FilterButton
            text={translate(language).pompalı}
            onPress={() => {
              setFilter(true), setCurrentRole(translate(language).pompalı);
            }}
          />
          <FilterButton
            text={translate(language).beylikSilahları}
            onPress={() => {
              setFilter(true), setCurrentRole(translate(language).beylikSilahları);
            }}
          />
          <FilterButton
            text={translate(language).keskinNişancı}
            onPress={() => {
              setFilter(true), setCurrentRole(translate(language).keskinNişancı);
            }}
          />
          <FilterButton
            text={translate(language).hafif}
            onPress={() => {
              setFilter(true), setCurrentRole(translate(language).hafif);
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
