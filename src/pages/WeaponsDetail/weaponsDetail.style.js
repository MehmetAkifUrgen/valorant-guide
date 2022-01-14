import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../colors/colors';
const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  body: {
    flexDirection: 'column',
    marginTop: 20,
  },
  bar: {
    margin: 10,
  },
  barView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: window.width * 0.95,
    backgroundColor: colors.pinkLight,
    borderRadius: 20,
    margin: 5,
  },
  barText: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: 'bold',
    flex: 1,
    fontFamily: 'Helvetica',
  },
  videoView: {
    flex: 1,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    bottom: 10,
    transform: [
      {
        rotate: '90deg',
      },
    ],
  },
  headView: { flex: 1 },
  fullImage: {
    width: window.width,
    height: window.width * 0.9,
    transform: [
      {
        rotate: '45deg',
      },
    ],
    resizeMode: 'contain',
  },
  fullImageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  video: {
    width: window.height,
    height: window.width * 0.85,

    transform: [
      {
        rotate: '90deg',
      },
    ],
  },
  icon: {
    width: 50,
    height: 50,
    margin: 5,
    resizeMode: 'center',
  },
});
