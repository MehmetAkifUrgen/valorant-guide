import {StyleSheet, Dimensions} from 'react-native';
const value = Dimensions.get('window');
import colors from '../../colors/colors';
export default StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    flex: 1,
    borderRadius: 15,
  },
  image: {
    minWidth: value.width * 0.7,
    height: value.height * 0.7,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    color: colors.main,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
