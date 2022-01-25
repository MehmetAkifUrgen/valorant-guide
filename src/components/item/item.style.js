import { StyleSheet, Dimensions } from 'react-native';
const value = Dimensions.get('window');
import colors from '../../colors/colors';
export default StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 15,
    minWidth: value.width * 0.4,
    minHeight: value.height * 0.2,
  },
  image: {
    minWidth: value.width * 0.4,
    minHeight: value.height * 0.18,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    color: colors.main,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
