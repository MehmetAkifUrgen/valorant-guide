import {StyleSheet, Dimensions} from 'react-native';
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
    flex: 1,
  },
  image: {
    minWidth: value.width * 0.25,
    height: value.height * 0.125,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 16,
    color: colors.main,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
