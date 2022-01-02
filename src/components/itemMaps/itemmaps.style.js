import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../colors/colors';
const value = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 20,
  },
  image: {
    width: value.width * 0.9,
    height: value.height * 0.7,
    resizeMode: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  descriptionView: {},
});
