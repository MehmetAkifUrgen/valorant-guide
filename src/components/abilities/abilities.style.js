import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../colors/colors';
const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa4454',
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 5,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayName: {
    fontSize: 17,
    color: colors.dark,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: colors.dark,
    textAlign: 'justify',
    marginLeft: 10,
  },
});
