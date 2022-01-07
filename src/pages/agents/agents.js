import React, {useState} from 'react';
import {StatusBar, FlatList, View} from 'react-native';
import Network from '../../network/network';
import Item from '../../components/item';
import styles from './agents.style';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';
import colors from '../../colors/colors';
import DropDownPicker from 'react-native-dropdown-picker';

const Agents = ({navigation}) => {
  const {loading, data, error} = Network('agents?language=tr-TR');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  console.log(data);
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
      <StatusBar backgroundColor={colors.dark} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        numColumns={3}
      />
    </View>
  );
};

export default Agents;
