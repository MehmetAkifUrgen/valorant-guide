import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');
import colors from '../../colors/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    
    alignItems:'center'
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    color: '#f5f5f5',
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
    color: '#Ebf6f7',
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
    color: '#f8f8ff',
  },
  character: {
    color: '#fdf5e6',
    fontSize: 11,
  },
  gameList: {
    margin: 7,
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    
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
    
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  date:{
    fontSize:13.5,
    color:'#fdf5e6',
    fontWeight:'500'
  },
  kda:{
    fontSize:17.5,
    color:'#f5f5f5',
    fontWeight:'800'
  },
  map:{
    fontSize:14.5,
    color:'#f8f8ff',
    fontWeight:'600'
  },
  team:{
    fontSize:13.5,
    color:'#Ebf6f7',
    fontWeight:'500'
  },
  gameItemRightView:{
    
    alignItems:'flex-start',
    justifyContent:'center',
    margin:4
  }
});
