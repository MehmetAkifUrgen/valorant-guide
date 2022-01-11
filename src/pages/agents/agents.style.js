import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../colors/colors';
const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },

  filterView: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.dark,
    padding: 10,
    width: window.width,
    height: 60,
  },
  menu: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.main,
    width: window.width / 3,

    zIndex: 2,
  },
});
