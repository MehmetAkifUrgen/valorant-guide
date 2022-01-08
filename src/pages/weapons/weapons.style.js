import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../colors/colors';
const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterView: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.dark,
    padding: 10,
    height: 60,
  },
});
