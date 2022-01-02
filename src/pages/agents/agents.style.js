import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../colors/colors';
const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  ImageBackground: {
    width: window.width,
    height: window.height,
    resizeMode: 'cover',
    position: 'absolute',
  },
});
