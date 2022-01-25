import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');
import colors from '../../colors/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 2,
    borderRadius: 2,
    borderWidth: 2,
    marginHorizontal: 10,
    borderColor: colors.dark,
  },
  smallText: {
    fontSize: 10,
    fontWeight: '600',
    color: 'white',
  },
  four: {
    width: window.width / 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  last: {
    width: window.width / 3.5,
  },
  name: {
    fontWeight: '700',
    fontSize: 14,
    color: 'white',
  },
  character: {
    color: 'white',
    fontSize: 11,
  },
  gameList: {
    margin: 5,
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  headView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    color: 'white',
    fontSize: 14,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: window.width * 0.6,
    marginTop: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
});
