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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';


const window = Dimensions.get('window');
const Account = ({ navigation }) => {
  const [see, setSee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');
  const [accountName, setAccountName] = useState('');
  const [local, setLocal] = useState('');
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [account, setAccount] = useState([]);
  const [name,setName]=useState('')
  const imageUrl='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt962a6518612d78db/6131a93da9655d098c7cd8f0/09082021-Episode-3-Act-II-Overview-Article-Banner.jpg'

  async function getMatches(name, tag) {
    const mmr = await ValorantAPI.getMatches('eu', name, tag, '10', 'competitive');
    setSee(mmr.data);
    setLoading(false);
    //console.log(mmr.data)
   
  }
  async function getAccount(name, tag) {
    const mmr = await ValorantAPI.getAccount(name, tag);
    setAccount(mmr.data);
  }
  useEffect(() => {
    setLoading(true);
    setVisible(false);
    setLoading(false);
    AsyncStorage.getItem('account',(err,accountValue)=>{
      console.log(accountValue)
      if(accountValue !=null){
        setName(accountValue)
        AsyncStorage.getItem('local',(e,localValue)=>{
          console.log(localValue)
          if(localValue != null){
            getMatches(accountValue,localValue)
          }
        })
      }
    })
   
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
      headerTintColor: colors.main
      
    });
  }, [navigation]);

  if (loading) {
    return <Loading />;
  }
  
  function itemPress(iss,no) {
    setIndex(no);
    setVisible(!visible);
    let data=see[index].players.all_players
      /* 1. Navigate to the Details route with params */
      navigation.navigate('GameHistory', {
        data
      });
    
  }
  

  const gamesRender = ({ item,index }) => {
    
    
   

    for (let iss = 0; iss < see.length; iss++) {
      if (item.players.all_players[iss].name == accountName || item.players.all_players[iss].name == name  ) {
        var datee=Date.parse(item.metadata.game_start_patched)
        var now = new Date(datee);
        //console.log(iss)
        
        return (
          <TouchableOpacity
            onPress={() => itemPress(iss,index)}
            activeOpacity={0.7}
            style={[
              styles.gameList,
              {
                backgroundColor:
                  item.teams[item.players.all_players[iss].team.toLowerCase()].has_won == true
                    ? '#00693e'
                    : colors.main,
              },
            ]}
          >
            <Image
              style={styles.image}
              source={{ uri: item.players.all_players[iss].assets.agent.small }}
            />
           <View style={styles.gameItemRightView}>
           <Text style={styles.kda}>
              {' '}
              {item.players.all_players[iss].stats.kills}/
              {item.players.all_players[iss].stats.deaths}/
              {item.players.all_players[iss].stats.assists}{' '}
            </Text>
            <Text style={styles.team} > Team: {item.players.all_players[iss].team} </Text>
           </View>
           <View style={styles.gameItemRightView}>
            <Text style={styles.date}> Date: {now.toLocaleDateString()} </Text>
            <Text style={styles.map}> Map: {item.metadata.map} </Text>
           </View>
            <Text>
              {' '}
              {item.teams[item.players.all_players[iss].team.toLowerCase()].has_won == true}{' '}
            </Text>
          </TouchableOpacity>
        );
      }
    }
  };

  const checkAccount=()=> {
    var text = value.split('#');
    //console.log(see);
    setAccountName(text[0]);
    setLocal(text[1]);
    getMatches(text[0], text[1]);
    getAccount(text[0], text[1]);
    //console.log(account)
    
    
    AsyncStorage.setItem('account',text[0])
    AsyncStorage.setItem('local',text[1])
  
    
  }


 
  

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView enabled="false" behavior="height" style={styles.headView}>
        <Image source={{uri:imageUrl}} style={styles.avatar} /> 
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
      {see.length>0 ? <FlatList data={see} renderItem={gamesRender} /> : <Text style={styles.text} >No Data</Text>}
     
      {/* <Text style={styles.text}> {see.account_level} </Text>
      <Text style={styles.text}> {see.name} </Text>  */}
    </View>
  );
};

export default Account;
