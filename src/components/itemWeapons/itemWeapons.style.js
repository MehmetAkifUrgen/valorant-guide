import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../colors/colors';
const value = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 20,
    padding: 10,
  },
  image: {
    width: value.width * 0.4,
    height: value.height / 10,
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
