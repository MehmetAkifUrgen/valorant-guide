import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../colors/colors';
const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  ImageBackground: {
    width: window.width,
    height: window.height,
    position: 'absolute',
  },
});
