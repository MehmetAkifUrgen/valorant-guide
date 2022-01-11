import { StyleSheet } from 'react-native';
import colors from '../../colors/colors';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
  flag: {
    width: 30,
    height: 20,
  },
  text: {
    fontSize: 16,
    color: colors.dark,
    flex: 1,
  },
});
