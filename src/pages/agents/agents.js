import React, { useState, useLayoutEffect, useEffect } from 'react';
import { StatusBar, FlatList, View, ScrollView, TouchableWithoutFeedback } from 'react-native';

import Item from '../../components/item';
import styles from './agents.style';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';
import colors from '../../colors/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FilterButton from '../../components/filterButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LanguageItem from '../../components/languageItem';
import translate from '../../translations/translate';
import SplashScreen from 'react-native-splash-screen';

import RNRestart from 'react-native-restart';

const Agents = ({ navigation }) => {
  const [currentRole, setCurrentRole] = useState(null);
  const [filter, setFilter] = useState(false);
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState('en-US');
  const [data, setData] = useState([]);

  // console.log(sums);
  const getAgents = async () => {
    await AsyncStorage.getItem('language', (err, dil) => {
      if (dil != null) {
        setLanguage(dil);

        fetch(`https://valorant-api.com/v1/agents?language=${dil}`, {
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
        fetch(`https://valorant-api.com/v1/agents?language=en-US`, {
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
    SplashScreen.hide();
    setLanguage('en-US');
    getAgents();
  }, []);
  useEffect(() => {
    getAgents();
  }, [language]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Icon
            onPress={() => (menu ? setMenu(false) : setMenu(true))}
            name="translate"
            size={30}
            color={colors.main}
            style={{ marginRight: 10 }}
          />
        );
      },
    });
  }, [navigation, language]);

  const renderItem = ({ item, index }) => {
    if (item.role == null) {
      <Loading />;
    } else {
      return (
        <Item
          onPress={() => {
            console.log(index);
            setMenu(false), navigation.navigate('AgentsDetailPage', { item: item });
          }}
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
    <TouchableWithoutFeedback onPress={() => setMenu(false)}>
      <View style={styles.container}>
        {menu && (
          <View style={styles.menu}>
            <LanguageItem
              onPress={() => {
                setMenu(false), setLanguage('en-US');
                AsyncStorage.setItem('language', 'en-US').then(() => {
                  // console.log("TOKEN ==>>", champ)
                });
                RNRestart.Restart();
              }}
              uri={'https://flag.muratoner.net/?country=gb'}
              language={'English'}
            />
            <LanguageItem
              onPress={() => {
                setMenu(false), setLanguage('de-DE');
                AsyncStorage.setItem('language', 'de-DE').then(() => {
                  // console.log("TOKEN ==>>", champ)
                });
                RNRestart.Restart();
              }}
              uri={'https://flag.muratoner.net/?country=de'}
              language={'Deutsch'}
            />
            <LanguageItem
              onPress={() => {
                setMenu(false), setLanguage('fr-FR');
                AsyncStorage.setItem('language', 'fr-FR').then(() => {
                  // console.log("TOKEN ==>>", champ)
                });
                RNRestart.Restart();
              }}
              uri={'https://flag.muratoner.net/?country=fr'}
              language={'Français'}
            />
            <LanguageItem
              onPress={() => {
                setMenu(false), setLanguage('es-ES');
                AsyncStorage.setItem('language', 'es-ES').then(() => {
                  // console.log("TOKEN ==>>", champ)
                });
                RNRestart.Restart();
              }}
              uri={'https://flag.muratoner.net/?country=es'}
              language={'Español'}
            />
            <LanguageItem
              onPress={() => {
                setMenu(false),
                  AsyncStorage.setItem('language', 'tr-TR').then(() => {
                    // console.log("TOKEN ==>>", champ)
                  });
                RNRestart.Restart();
              }}
              uri={'https://flag.muratoner.net/?country=tr'}
              language={'Türkçe'}
            />
            <LanguageItem
              onPress={() => {
                setMenu(false), setLanguage('it-IT');
                AsyncStorage.setItem('language', 'it-IT').then(() => {
                  // console.log("TOKEN ==>>", champ)
                });
                RNRestart.Restart();
              }}
              uri={'https://flag.muratoner.net/?country=it'}
              language={'İtaliano'}
            />
            <LanguageItem
              onPress={() => {
                setMenu(false), setLanguage('ar-AE');
                AsyncStorage.setItem('language', 'ar-AE').then(() => {
                  // console.log("TOKEN ==>>", champ)
                });
                RNRestart.Restart();
              }}
              uri={'https://flag.muratoner.net/?country=ae'}
              language={'Arabic'}
            />
          </View>
        )}

        <View style={{ height: 70 }}>
          <ScrollView
            style={{ height: 60 }}
            contentContainerStyle={styles.filterView}
            horizontal={true}
          >
            <FilterButton
              text={
                language == undefined || language == null
                  ? translate('en-US').tumu
                  : translate(language).tumu
              }
              onPress={() => {
                setFilter(false);
                setMenu(false);
              }}
            />
            <FilterButton
              text={translate(language).oncu}
              onPress={() => {
                setFilter(true), setCurrentRole(translate(language).oncu);
                setMenu(false);
              }}
            />
            <FilterButton
              text={translate(language).gözcü}
              onPress={() => {
                setFilter(true), setCurrentRole(translate(language).gözcü);
                setMenu(false);
              }}
            />
            <FilterButton
              text={translate(language).duellocu}
              onPress={() => {
                setFilter(true), setCurrentRole(translate(language).duellocu);
                setMenu(false);
              }}
            />
            <FilterButton
              text={translate(language).kontrolUzmanı}
              onPress={() => {
                setFilter(true), setCurrentRole(translate(language).kontrolUzmanı);
                setMenu(false);
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
    </TouchableWithoutFeedback>
  );
};

export default Agents;
