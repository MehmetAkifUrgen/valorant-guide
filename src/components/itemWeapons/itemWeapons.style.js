import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../colors/colors';
const value = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    width: value.width * 0.95,
    margin: 10,
    borderRadius: 20,
  },
  image: {
    width: value.width * 0.8,
    height: value.height / 5,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    color: colors.main,
    fontWeight: 'bold',
  },
  descriptionView: {
    flex: 1,
  },
});
