import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../colors/colors';
const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  header: {
    height: window.height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.main,
    marginTop: 10,
  },
  full: {
    width: window.width,
    height: window.height,
  },
  headImage: {
    width: window.width,
    height: window.height / 3,
    opacity: 0.5,
    position: 'absolute',
    resizeMode: 'stretch',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  seperator: {
    backgroundColor: colors.main,
    width: window.width * 0.85,
    height: 2,
  },
  seperatorView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
