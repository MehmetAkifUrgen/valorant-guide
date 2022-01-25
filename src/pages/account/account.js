import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Loading from '../../components/loading/loading';
import styles from './account.style';
import ValorantAPI from 'unofficial-valorant-api';
import colors from '../../colors/colors';
import Modal from 'react-native-modal';
const window = Dimensions.get('window');
const Account = ({ navigation }) => {
  const [see, setSee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');
  const [accountName, setAccountName] = useState('');
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  async function getMatches(name, tag) {
    const mmr = await ValorantAPI.getMatches('eu', name, tag, '10', 'competitive');
    //Do something with the data, for an example send it as a Discord Embed into your Discord
    setSee(mmr.data);
    setLoading(false);
  }
  async function getAccount(name, tag) {
    const mmr = await ValorantAPI.getAccount(name, tag);
    //Do something with the data, for an example send it as a Discord Embed into your Discord
    setSee(mmr.data);
  }
  useEffect(() => {
    setLoading(true);
    setVisible(false);
    getMatches('Funny Boy', 'TR1');
    return () => {
      setVisible(false);
    };
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Account',
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
  }, [navigation]);

  if (loading) {
    return <Loading />;
  }
  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.itemView,
          { backgroundColor: item.team.toLowerCase() == 'blue' ? colors.blue : colors.main },
        ]}
      >
        <View style={styles.four}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{ uri: item.assets.agent.small }}
          />
          <Text style={styles.character}> {item.character} </Text>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.name}>
            {' '}
            {item.name}
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            {' '}
            {item.stats.kills}/{item.stats.deaths}/{item.stats.assists}{' '}
          </Text>
        </View>
        <View style={styles.four}>
          <Text style={styles.text}> Level : {item.level} </Text>
          <Text style={styles.text}> {item.currenttier_patched} </Text>
        </View>
        <View style={styles.last}>
          <Text style={styles.smallText}> Total Damage : {item.damage_made} </Text>
          <Text style={styles.smallText}> Headshots : {item.stats.headshots} </Text>
          <Text style={styles.smallText}> Bodyshots : {item.stats.bodyshots} </Text>
          <Text style={styles.smallText}> LegShots : {item.stats.legshots} </Text>
        </View>
      </View>
    );
  };
  function itemPress(index) {
    setIndex(index);
    setVisible(!visible);
  }

  const gamesRender = ({ item, index }) => {
    //console.log('-------****', item.teams);

    for (let index = 0; index < see.length; index++) {
      if (item.players.all_players[index].name == 'Funny Boy') {
        return (
          <TouchableOpacity
            onPress={() => itemPress(index)}
            style={[
              styles.gameList,
              {
                backgroundColor:
                  item.teams[item.players.all_players[index].team.toLowerCase()].has_won == true
                    ? 'green'
                    : 'tomato',
              },
            ]}
          >
            <Image
              style={styles.image}
              source={{ uri: item.players.all_players[index].assets.agent.small }}
            />
            <Text>
              {' '}
              {item.players.all_players[index].stats.kills}/
              {item.players.all_players[index].stats.deaths}/
              {item.players.all_players[index].stats.assists}{' '}
            </Text>
            <Text> {item.players.all_players[index].team} </Text>
            <Text>
              {' '}
              {item.teams[item.players.all_players[index].team.toLowerCase()].has_won == true}{' '}
            </Text>
          </TouchableOpacity>
        );
      }
    }
  };

  function checkAccount() {
    var text = value.split('#');
    console.log(text);
    setAccountName(text[0]);
    //getMatches(text[0], text[1]);
    getMatches('Funny Boy', 'TR1');
  }

  return (
    <View style={styles.container}>
      {/*  */}

      <KeyboardAvoidingView enabled="false" behavior="height" style={styles.headView}>
        <Image source={require('../../../assets/breach.png')} style={styles.avatar} />
        <View style={styles.inputView}>
          <TextInput
            value={value}
            onChangeText={(text) => setValue(text)}
            style={styles.input}
            placeholderTextColor={colors.pinkLight}
            placeholder="Example Chicologgo#TR1"
            clearButtonMode="always"
          />
          <Button title="Ok" onPress={checkAccount} color={colors.main} />
        </View>
      </KeyboardAvoidingView>
      {see != null ? <FlatList data={see} renderItem={gamesRender} /> : null}
      <Modal
        deviceHeight={window.height}
        deviceWidth={window.width}
        swipeDirection="left"
        propagateSwipe={true}
        onBackButtonPress={() => setVisible(false)}
        coverScreen={true}
        hideModalContentWhileAnimating
        style={styles.modal}
        isVisible={visible}
      >
        <FlatList data={see[index].players.all_players} renderItem={renderItem} />
      </Modal>
      {/* <Text style={styles.text}> {see.account_level} </Text>
      <Text style={styles.text}> {see.name} </Text>  */}
    </View>
  );
};

export default Account;
