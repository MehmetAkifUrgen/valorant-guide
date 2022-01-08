import { StyleSheet } from 'react-native';
import colors from '../../colors/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.dark,
    textAlign: 'center',
  },
});
