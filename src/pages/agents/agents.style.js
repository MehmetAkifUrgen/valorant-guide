import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../colors/colors';
const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },

  FlatList: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
