import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../colors/colors';
const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    marginLeft: window.width * 0.025,
    alignItems: 'center',
    backgroundColor: colors.dark,
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
  },
  image: {
    width: window.width * 0.6,

    height: window.height / 7,
    resizeMode: 'contain',
  },
  videoButton: {
    backgroundColor: colors.main,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 5,
  },
  buttonText: {
    color: colors.dark,
    fontWeight: 'bold',
  },
  video: {
    position: 'absolute',
  },
  text: {
    color: colors.main,
    fontWeight: 'bold',
  },
  videoButtonView: {
    padding: 10,
  },
  body: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
