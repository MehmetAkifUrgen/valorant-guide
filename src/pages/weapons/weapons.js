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
import { useInterstitialAd } from '@react-native-admob/admob';

const Weapons = ({ navigation }) => {
  const { adLoaded, adDismissed, show } = useInterstitialAd(
    "ca-app-pub-7956816566156883/8091465599"
  );
  const [currentRole, setCurrentRole] = useState(null);
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState('en-US');
  const [data, setData] = useState([]);

  const getWeapons = () => {
    AsyncStorage.getItem('language', (err, dil) => {
      if (dil != null) {
        setLanguage(dil);

        fetch(`https://valorant-api.com/v1/weapons?language=${dil}`, {
          method: 'GET',
        })
          .then((response) => response.json())
          .then((json) => {
            setData(json.data), setLoading(false);
          })
          .catch((err) => {
            setError(err);
          });
      } else {
        fetch(`https://valorant-api.com/v1/weapons?language=en-US`, {
          method: 'GET',
        })
          .then((response) => response.json())
          .then((json) => {
            setData(json.data), setLoading(false);
          })
          .catch((err) => {
            setError(err);
          });
      }
    });
  };

  useEffect(() => {
    getWeapons();
    return () => {
      getWeapons();
    };
  }, []);
  // useEffect(() => {
  //   if (adDismissed) {
  //     navigation.navigate('WeaponsDetailPage', { item: item });
  //   }
  // }, [adDismissed, navigation]);

  const renderItem = ({ item }) => {
    if (item.weaponStats == null) {
      <Loading />;
    } else {
      return (
        <Item
          onPress={() => {
            if (adLoaded) {
              show();
            } else {
              navigation.navigate('WeaponsDetailPage', { item: item });
            }
          } }
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
            text={
              translate(language).tumu == undefined
                ? translate('en-US').tumu
                : translate(language).tumu
            }
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
