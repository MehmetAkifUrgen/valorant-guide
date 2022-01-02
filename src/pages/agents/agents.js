import React from 'react';
import {FlatList, View, ImageBackground} from 'react-native';
import Network from '../../network/network';
import Item from '../../components/item';
import styles from './agents.style';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';

const Agents = ({navigation}) => {
  const {loading, data, error} = Network('agents?language=tr-TR');

  //console.log(data);
  const renderItem = ({item}) => {
    if (item.role == null) {
      <Loading />;
    } else {
      return (
        <Item
          onPress={() => navigation.navigate('AgentsDetailPage', {item: item})}
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
        source={require('../../../assets/valo.jpg')}
      />
      <FlatList
        initialNumToRender={3}
        keyExtractor={item => item.uuid}
        data={data}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

export default Agents;
